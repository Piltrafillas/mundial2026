"use client";

import { useState } from "react";

export default function Partidos() {

  const [partidos, setPartidos] = useState([
    {
      id: 1,
      local: "España",
      visitante: "Brasil",
      resultado: ""
    },
    {
      id: 2,
      local: "Argentina",
      visitante: "Francia",
      resultado: ""
    },
    {
      id: 3,
      local: "Alemania",
      visitante: "Portugal",
      resultado: ""
    }
  ]);

  function seleccionarResultado(
    id: number,
    resultado: string
  ) {

    setPartidos(
      partidos.map((p) =>
        p.id === id
          ? { ...p, resultado }
          : p
      )
    );

  }

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        ⚽ Resultados
      </h1>

      <div className="space-y-6">

        {partidos.map((p) => (

          <div
            key={p.id}
            className="border rounded-xl p-6 shadow"
          >

            <h2 className="text-xl mb-4">
              {p.local} - {p.visitante}
            </h2>

            <div className="flex gap-4">

              <button
                className="border rounded p-3"
                onClick={() =>
                  seleccionarResultado(
                    p.id,
                    "1"
                  )
                }
              >
                1
              </button>

              <button
                className="border rounded p-3"
                onClick={() =>
                  seleccionarResultado(
                    p.id,
                    "X"
                  )
                }
              >
                X
              </button>

              <button
                className="border rounded p-3"
                onClick={() =>
                  seleccionarResultado(
                    p.id,
                    "2"
                  )
                }
              >
                2
              </button>

            </div>

            <p className="mt-4">
              Resultado seleccionado:
              {" "}
              {p.resultado}
            </p>

          </div>

        ))}

      </div>

    </main>
  );
}