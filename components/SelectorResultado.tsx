"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SelectorResultado({
  id,
  resultadoInicial,
}: {
  id: number;
  resultadoInicial: string | null;
}) {

  const [resultado, setResultado] = useState(
    resultadoInicial ?? ""
  );

  const router = useRouter();

  async function guardar() {

    await fetch("/api/resultado", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        resultado,
      }),
    });

    router.refresh();
  }

  return (

    <div className="flex gap-2">

      <select
        value={resultado}
        onChange={(e) => setResultado(e.target.value)}
        className="border p-1"
      >
        <option value="">-</option>
        <option value="1">1</option>
        <option value="X">X</option>
        <option value="2">2</option>
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