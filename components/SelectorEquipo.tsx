"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { equipos } from "@/lib/equipos";

export default function SelectorEquipo({
  campo,
  valorInicial,
}: {
  campo: string;
  valorInicial: string | null;
}) {

  const [equipo, setEquipo] = useState(
    valorInicial ?? ""
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
        valor: equipo,
      }),
    });

    router.refresh();

  }

  return (

    <div className="flex gap-2">

      <select
  value={equipo}
  onChange={(e) => setEquipo(e.target.value)}
  className="border p-1"
>

  <option value="">-</option>

  {equipos.map((e) => (

    <option
      key={e}
      value={e}
    >
      {e}
    </option>

  ))}

</select>

      <button
        onClick={guardar}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Guardar
      </button>

    </div>

  );

}