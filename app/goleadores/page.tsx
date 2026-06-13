"use client";

import { useState } from "react";

export default function Goleadores() {

  const [jugadores, setJugadores] = useState([
    { id: 1, nombre: "Mbappé", goles: 0 },
    { id: 2, nombre: "Kane", goles: 0 },
    { id: 3, nombre: "Haaland", goles: 0 },
    { id: 4, nombre: "Cristiano Ronaldo", goles: 0 },
    { id: 5, nombre: "Vinicius", goles: 0 }
  ]);

  function actualizarGoles(id: number, goles: number) {

    setJugadores(
      jugadores.map((j) =>
        j.id === id
          ? { ...j, goles }
          : j
      )
    );

  }

  return (
    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        👤 Goleadores
      </h1>

      <div className="space-y-4">

        {jugadores.map((j) => (

          <div
            key={j.id}
            className="flex items-center gap-6 border rounded-xl p-4"
          >

            <div className="w-56">
              {j.nombre}
            </div>

            <input
              type="number"
              min="0"
              value={j.goles}
              className="border rounded p-2 w-24"
              onChange={(e) =>
                actualizarGoles(
                  j.id,
                  Number(e.target.value)
                )
              }
            />

          </div>

        ))}

      </div>

    </main>
  );
}