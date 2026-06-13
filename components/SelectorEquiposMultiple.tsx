"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { equipos } from "@/lib/equipos";

export default function SelectorEquiposMultiple({
  campo,
  valoresIniciales,
}: {
  campo: string;
  valoresIniciales: string[] | null;
}) {

  const [seleccionados, setSeleccionados] = useState<string[]>(
    valoresIniciales ?? []
  );

  const router = useRouter();

  async function guardar() {

    await fetch("/api/fases", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        campo,
        valor: seleccionados,
      }),
    });

    router.refresh();

  }

  function cambiarEquipo(
    equipo: string,
    checked: boolean
  ) {

    if (checked) {

      setSeleccionados([
        ...seleccionados,
        equipo
      ]);

    } else {

      setSeleccionados(
        seleccionados.filter(
          e => e !== equipo
        )
      );

    }

  }

  return (

    <div>

      <div className="grid grid-cols-4 gap-2">

        {equipos.map((equipo) => (

          <label
            key={equipo}
            className="flex gap-2"
          >

            <input
              type="checkbox"
              checked={seleccionados.includes(equipo)}
              onChange={(e) =>
                cambiarEquipo(
                  equipo,
                  e.target.checked
                )
              }
            />

            {equipo}

          </label>

        ))}

      </div>

      <button
        onClick={guardar}
        className="mt-4 bg-blue-500 text-white px-3 py-1 rounded"
      >
        Guardar
      </button>

    </div>

  );

}