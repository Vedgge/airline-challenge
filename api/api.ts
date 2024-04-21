import { Flight, Trip } from "../types/types";
import DATA from "@/app/dataset.json";

function generateRandomUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Objeto api con dif métodos/funciones
const api = {
  // Otro objeto con método list que recibe un parámetro "origin" de tipo "Flight:["origin"]"
  tripsOrigin: {
    list: async (origin: Flight["origin"]): Promise<Flight[]> => {
      const flights = DATA.filter((flight) => flight.origin === origin);
      const uniqueDestinations = new Map<string, Flight>();

      for (const flight of flights) {
        if (!uniqueDestinations.has(flight.destination)) {
          uniqueDestinations.set(flight.destination, flight);
        }
      }

      return Array.from(uniqueDestinations.values());
    },
  },

  tripsOriginDestination: {
    list: async (
      origin: Flight["origin"],
      destination: Flight["destination"]
    ): Promise<Trip[]> => {
      //El reduce me dice que vamos a arrancar con 2 array vacíos adentro. El reduce se ejecuta 1 vez por cada valor de objeto de DATA
      const futureFlights = DATA.filter(
        (flight: Flight) => new Date(flight.date) > new Date()
      );
      const [origins, destinations] = futureFlights.reduce<
        [Flight[], Flight[]]
      >(
        //Va a tener un valor que se va acumulando a lo largo de cada iteración. Si es un origin o destination los agrego que seleccione, si no devuelvo el mismo array que tenía.
        ([origins, destinations], flight) => {
          if (flight.origin === origin && flight.destination === destination) {
            origins.push(flight);
          } else if (
            flight.origin === destination &&
            flight.destination === origin
          ) {
            destinations.push(flight);
          }
          return [origins, destinations];
        },
        //Al terminar de ejecutar el reduce voy a tener 1 array con 2 array. Uno de origins siendo todos los vuelos que tengan el origin que yo quería y otro de destinations teniendo todos los destinations que yo quería
        [[], []]
      );

      const trips: Trip[] = [];
      // Iteramos sobre todos los origins y todas las destinations y obtener un trip nuevo por cada permutacion que a nosotros nos interesa.
      for (const origin of origins) {
        for (const destination of destinations) {
          const originDate = new Date(origin.date);
          const destinationDate = new Date(destination.date);

          if (destinationDate > originDate) {
            const diffInMs = Math.abs(
              destinationDate.getTime() - originDate.getTime()
            );

            const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
            trips.push({
              id: generateRandomUniqueId(),
              origin,
              destination,
              availability: Math.min(
                origin.availability,
                destination.availability
              ),
              price: Math.ceil(origin.price + destination.price),
              days: diffInDays,
            });
          }
        }
      }
      return trips;
    },
  },

  origin: {
    list: async (): Promise<Flight["origin"][]> => {
      const origins = new Set<Flight["origin"]>();
      for (let flight of DATA) {
        origins.add(flight.origin);
      }
      return Array.from(origins);
    },
  },
};

export default api;
