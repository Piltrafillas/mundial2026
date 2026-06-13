import { supabase } from "@/lib/supabase";
import SelectorResultado from "@/components/SelectorResultado";

export default async function ResultadosPage() {

  const { data: partidos } = await supabase
    .from("partidos")
    .select("*")
    .order("id");

  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Resultados
      </h1>

      <table className="border-collapse">

        <thead>
          <tr>
            <th className="border p-2">Local</th>
            <th className="border p-2">Visitante</th>
            <th className="border p-2">Resultado</th>
          </tr>
        </thead>

        <tbody>

          {partidos?.map((partido) => (

            <tr key={partido.id}>

              <td className="border p-2">
                {partido.local}
              </td>

              <td className="border p-2">
                {partido.visitante}
              </td>

              <td className="border p-2">

                <SelectorResultado
                  id={partido.id}
                  resultadoInicial={partido.resultado}
                />

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>
  );
}