import { supabase } from "@/lib/supabase";
import SelectorEquipo from "@/components/SelectorEquipo";
import SelectorEquiposMultiple from "@/components/SelectorEquiposMultiple";

export default async function FasesPage() {

  const { data: estado } = await supabase
    .from("estado_mundial")
    .select("*")
    .single();

  return (

    <main className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Fases del Mundial
      </h1>

      <table>

        <tbody>

          <tr>

            <td className="border p-2">
              Campeón
            </td>

            <td className="border p-2">

              <SelectorEquipo
                campo="campeon"
                valorInicial={estado?.campeon}
              />

            </td>

          </tr>

          <tr>

            <td className="border p-2">
              Subcampeón
            </td>

            <td className="border p-2">

              <SelectorEquipo
                campo="subcampeon"
                valorInicial={estado?.subcampeon}
              />

            </td>

          </tr>
		  <tr>

  <td className="border p-2">
    Dieciseisavos
  </td>

  <td className="border p-2">

    <SelectorEquiposMultiple
      campo="dieciseisavos"
      valoresIniciales={estado?.dieciseisavos}
    />

  </td>

</tr>

<tr>

  <td className="border p-2">
    Octavos
  </td>

  <td className="border p-2">

    <SelectorEquiposMultiple
      campo="octavos"
      valoresIniciales={estado?.octavos}
    />

  </td>

</tr>

<tr>

  <td className="border p-2">
    Cuartos
  </td>

  <td className="border p-2">

    <SelectorEquiposMultiple
      campo="cuartos"
      valoresIniciales={estado?.cuartos}
    />

  </td>

</tr>

<tr>

  <td className="border p-2">
    Semifinales
  </td>

  <td className="border p-2">

    <SelectorEquiposMultiple
      campo="semifinales"
      valoresIniciales={estado?.semifinales}
    />

  </td>

</tr>

<tr>

  <td className="border p-2">
    Finalistas
  </td>

  <td className="border p-2">

    <SelectorEquiposMultiple
      campo="finalistas"
      valoresIniciales={estado?.finalistas}
    />

  </td>

</tr>

        </tbody>

      </table>

    </main>

  );

}