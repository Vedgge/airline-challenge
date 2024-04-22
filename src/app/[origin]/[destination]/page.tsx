import React from "react";
import OriginDestinationClient from "./OriginDestinationClient";
import api from "../../../../api/api";

//Este archivo se encarga de obtener los datos de la api y renderiza el componente al que se le pasan los datos obtenidos
interface OriginDestinationProps {
  params: {
    origin: string;
    destination: string;
  };
}

export default async function OriginDestination ({ params }: OriginDestinationProps) {
  const { origin, destination } = params;
  const trips = await api.tripsOriginDestination.list(origin, destination);

  return (
    <OriginDestinationClient
      origin={origin}
      destination={destination}
      trips={trips}
    />
  );
};
