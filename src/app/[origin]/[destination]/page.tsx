import React from "react";
import api from "../../../../api/api";
import Link from "next/link";

interface PageProps {
  params: {
    origin: string;
    destination: string;
  };
}

export default async function OriginDestination({ params }: PageProps) {
  const { origin, destination } = params;
  const trips = await api.tripsOriginDestination.list(
    params?.origin!,
    params?.destination!
  );

  const sortedTrips = [...trips].sort((a, b) => b.price - a.price);
  const first100Trips = sortedTrips.slice(0, 100);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex justify-center flex-col text-center h-[300px] gap-8">
        <h1 className="font-bold text-8xl">
          Flights from <span className="text-yellow-400">{origin}</span> to{" "}
          <span className="text-yellow-400">{destination}</span>
        </h1>
      </div>
      <section className="w-[1200px]">
        <div className="flex gap-8 ml-7 mb-5">
          <button className="hover:text-yellow-300 duration-200">Sort by price 💰</button>
          <button className="hover:text-yellow-300 duration-200">Sort by days 🔁</button>
          <button className="hover:text-yellow-300 duration-200">Sort by availability 📅</button>
        </div>
        <ul className="flex flex-col items-center w-full gap-8">
          {first100Trips.map((trip) => {
            return (
              <Link
                href={`/${origin}/${destination}/${trip.id}`}
                key={trip.id}
                className="flex items-center w-full p-6 transition-colors duration-200 border-2 border-white cursor-pointer rounded-3xl hover:border-yellow-400 hover:text-yellow-500"
              >
                <h2 className="text-5xl font-bold mr-5">{`${trip.origin.origin} ↔️ ${trip.destination.origin}✈️`}</h2>
                <h2 className="text-xl font-semibold mr-5">Total: {""} 
                  {Number(trip.price).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                  💰
                </h2>
                <h2 className="text-xl font-semibold mr-5">{`Available: ${trip.availability}📅`}</h2>
                <h2 className="text-xl font-semibold">{`Days: ${trip.days}🔁`}</h2>
              </Link>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
