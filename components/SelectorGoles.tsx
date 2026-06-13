"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectorGoles({
  id,
  golesIniciales,
}: {
  id: number;
  golesIniciales: number;
}) {

  const [goles, setGoles] = useState(
    golesIniciales.toString()
  );

  const router = useRouter();

  async function guardar() {

    await fetch("/api/goles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        goles: Number(goles),
      }),
    });

    router.refresh();

  }

  return (

    <div className="flex gap-2">

      <input
        type="number"
        min="0"
        value={goles}
        onChange={(e) => setGoles(e.target.value)}
        className="border p-1 w-20"
      />

      <button
        onClick={guardar}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Guardar
      </button>

    </div>

  );

}