import Link from "next/link.js";
import React from "react";
import api from "../../../api/api";

interface OriginPageProps {
  params: {
    origin: string;
  };
}

export default async function OriginPage({ params }: OriginPageProps) {
  const { origin } = params;
  const trips = await api.tripsOrigin.list(params?.origin!);
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className=" flex justify-center flex-col text-center h-[300px] gap-8">
          <h1 className="font-bold text-8xl">
            Flights from <span className="text-yellow-400">{origin}</span>
          </h1>
        </div>
        <section className="w-[1200px]">
          <ul className="flex flex-col items-center w-full gap-8">
            {trips.map((trip) => (
              <Link
                key={trip.origin}
                href={`/${origin}/${trip.destination}`}
                className="flex w-full p-6 text-5xl font-bold transition-colors duration-200 border-2 border-white cursor-pointer rounded-3xl hover:border-yellow-400 hover:text-yellow-500"
              >
                <h2>{`${trip.origin} ➡️ ${trip.destination} ✈️`}</h2>
              </Link>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}