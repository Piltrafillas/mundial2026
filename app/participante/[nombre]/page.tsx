import { supabase } from "@/lib/supabase";
import { calcularPuntosParticipantes } from "@/lib/calcularPuntosParticipantes";
import { equipoSigueVivo } from "@/lib/equipoSigueVivo";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function ParticipantePage({
  params,
}: {
  params: Promise<{ nombre: string }>;
}) {

  const { nombre } = await params;

  const { data: equipos } = await supabase
    .from("equipos_participante")
    .select("equipo")
    .eq("participante", nombre);

  const { data: goleadores } = await supabase
    .from("goleadores_participante")
    .select("*")
    .eq("participante", nombre)
    .single();
	
  const { data: estado } = await supabase
    .from("estado_mundial")
    .select("*")
    .single();

  const puntos = await calcularPuntosParticipantes(nombre);

  return (

    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        {nombre}
      </h1>

      <h2 className="text-2xl font-bold mb-4">
        Equipos
      </h2>

      <ul className="mb-8">

  {equipos?.map((e) => {

    const vivo = equipoSigueVivo(e.equipo, estado);

    return (

      <li
        key={e.equipo}
        className="flex items-center gap-3 py-1"
      >

        <span
          className={`w-3 h-3 rounded-full ${
            vivo
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        />

        <span>{e.equipo}</span>

      </li>

    );

  })}

</ul>

      <h2 className="text-2xl font-bold mb-4">
        Goleadores
      </h2>

      <p>

        ⭐ {goleadores?.goleador1}

      </p>

      <p>

        {goleadores?.goleador2}

      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Puntos actuales
      </h2>

      <div className="text-6xl font-bold text-blue-600">

        {puntos}

      </div>

    </main>

  );

}