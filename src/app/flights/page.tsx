import Link from "next/link";
import api from "../../../api/api";

export default async function Flight() {
  const origins = await api.origin.list();

  return (
    <main className="flex flex-col items-center justify-center">
      <div className=" flex justify-center flex-col text-center h-[300px] gap-8">
        <h1 className="font-bold text-yellow-400 text-9xl">Flybondi!</h1>
        <p className="text-xl font-semibold ">
          Start by clicking your favourite destination!
        </p>
      </div>
      <section className="w-[1200px] flex flex-col justify-center gap-[50px]">
        {/* Render data vuelos */}
        <ul className="flex justify-between w-full">
          {origins.map((origin: string) => (
            /* Interpolamos con href para llevarnos al origin seleccionado */
            <Link
              key={origin}
              href={`/${origin}`}
              className="h-[250px] w-[250px] border-2 border-white flex items-center justify-center text-5xl rounded-3xl cursor-pointer font-bold hover:border-yellow-400 transition-colors duration-200 hover:text-yellow-500"
            >
              <h2>{origin} ✈️</h2>
            </Link>
          ))}
        </ul>
        <ul className="flex justify-between w-full">
          {/* Render data vuelos relleno */}
          <li className="h-[250px] w-[250px] border-2 border-white flex items-center justify-center text-5xl rounded-3xl cursor-crosshair font-bold">
            <h2>ETC ✈️</h2>
          </li>
          <li className="h-[250px] w-[250px] border-2 border-white flex items-center justify-center text-5xl rounded-3xl cursor-crosshair font-bold">
            <h2>ETC ✈️</h2>
          </li>
          <li className="h-[250px] w-[250px] border-2 border-white flex items-center justify-center text-5xl rounded-3xl cursor-crosshair font-bold">
            <h2>ETC ✈️</h2>
          </li>
          <li className="h-[250px] w-[250px] border-2 border-white flex items-center justify-center text-5xl rounded-3xl cursor-crosshair font-bold">
            <h2>ETC ✈️</h2>
          </li>
        </ul>
      </section>
    </main>
  );
}
