"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { Trip } from "../../../../types/types";

//Este archivo es un componente react en el lado del cliente que rendireza la interfaz del usuario

interface OriginDestinationClientProps {
  origin: string;
  destination: string;
  trips: Trip[];
}

export default function OriginDestinationClient({
  origin,
  destination,
  trips,
}: OriginDestinationClientProps) {
  const [sort, setSort] = useState<"price" | "days" | "availability">("price");
  const [limit, setLimit] = useState<number>(100);

  const matches = useMemo(() => {
    return [...trips].sort((a, b) => a[sort] - b[sort]).slice(0, limit);
  }, [sort, trips, limit]);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex justify-center flex-col text-center h-[300px] gap-8">
        <h1 className="font-bold text-8xl">
          Flights from <span className="text-yellow-400">{origin}</span> to{" "}
          <span className="text-yellow-400">{destination}</span>
        </h1>
      </div>
      <section className="w-[1200px]">
        <div className="flex gap-8 mb-5 ml-7">
          <button
            className="duration-200 hover:text-yellow-300"
            onClick={() => setSort("price")}
          >
            Sort by price 💰
          </button>
          <button
            className="duration-200 hover:text-yellow-300"
            onClick={() => setSort("availability")}
          >
            Sort by availability 📅
          </button>
          <button
            className="duration-200 hover:text-yellow-300"
            onClick={() => setSort("days")}
          >
            Sort by days 🔁
          </button>
        </div>
        <ul className="flex flex-col items-center w-full gap-8">
          {matches.map((trip) => {
            return (
              <Link
                href={`/${origin}/${destination}/${trip.id}`}
                key={trip.id}
                className="flex items-center w-full p-6 transition-colors duration-200 border-2 border-white cursor-pointer rounded-3xl hover:border-yellow-400 hover:text-yellow-500"
              >
                <h2 className="mr-5 text-5xl font-bold">{`${trip.origin.origin} ↔️ ${trip.destination.origin}✈️`}</h2>
                <h2 className="mr-5 text-xl font-semibold">
                  Total: {""}
                  {Number(trip.price).toLocaleString("es-AR", {
                    style: "currency",
                    currency: "ARS",
                  })}
                  💰
                </h2>
                <h2 className="mr-5 text-xl font-semibold">{`Available: ${trip.availability}📅`}</h2>
                <h2 className="text-xl font-semibold">{`Days: ${trip.days}🔁`}</h2>
              </Link>
            );
          })}
        </ul>
        <div className="flex justify-center w-full mt-8">
          {trips.length > limit && (
            <button
              className="p-6 text-2xl duration-300 border-2 border-white rounded-3xl hover:text-yellow-400 hover:border-yellow-400"
              onClick={() => setLimit(limit + 50)}
            >
              Load more flights
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
