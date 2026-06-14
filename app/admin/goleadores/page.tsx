import { supabase } from "@/lib/supabase";
import SelectorGoles from "@/components/SelectorGoles";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function GoleadoresPage() {

  const { data: jugadores, error } = await supabase
    .from("jugadores")
    .select("*")
    .order("nombre");

  if (error) {

    return (
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-8">
          Goleadores
        </h1>

        <p>Error al cargar los jugadores</p>
      </main>
    );

  }

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Goleadores
      </h1>

      <table className="border-collapse">

        <thead>

          <tr>

            <th className="border p-2">
              Jugador
            </th>

            <th className="border p-2">
              Goles
            </th>

          </tr>

        </thead>

        <tbody>

          {jugadores?.map((jugador) => (

            <tr key={jugador.id}>

              <td className="border p-2">
                {jugador.nombre}
              </td>

              <td className="border p-2">

                <SelectorGoles
                  id={jugador.id}
                  golesIniciales={jugador.goles}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>

  );

}