import { generarClasificacion } from "@/lib/generarClasificacion";
import Link from "next/link";

export default async function Clasificacion() {

  const clasificacion = await generarClasificacion();

  function medalla(posicion: number) {

    if (posicion === 0) return "🥇";
    if (posicion === 1) return "🥈";
    if (posicion === 2) return "🥉";
	if (posicion === 14) return "💩";

    return posicion + 1;
  }

  return (

    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Clasificación Mundial 2026
      </h1>

      <table className="border-collapse w-full">

        <thead className="bg-gray-200">

          <tr>

            <th className="border p-3">
              Posición
            </th>

            <th className="border p-3">
              Participante
            </th>

            <th className="border p-3">
              Puntos
            </th>

          </tr>

        </thead>

        <tbody>

          {clasificacion.map((p, index) => (

            <tr
              key={p.nombre}
              className={
                index === 0
                  ? "bg-yellow-200"
                  : index === 1
                  ? "bg-gray-200"
                  : index === 2
                  ? "bg-orange-200"
				  : index === 14
                  ? "bg-red-200"
                  : ""
              }
            >

              <td className="border p-3 text-center text-2xl">

                {medalla(index)}

              </td>

             <td className="border p-3 font-bold">

  <Link
    href={`/participante/${p.nombre}`}
    className="text-blue-600 underline"
  >
    {p.nombre}
  </Link>

</td>

              <td className="border p-3 text-center text-xl">

                {p.puntos}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>

  );

}