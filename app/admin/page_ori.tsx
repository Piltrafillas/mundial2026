"use client";

import { useState } from "react";

export default function Admin() {

  const [campeon, setCampeon] = useState("");
  const [subcampeon, setSubcampeon] = useState("");

  const equipos = [
    "ESPAÑA",
    "BRASIL",
    "ARGENTINA",
    "FRANCIA",
    "PORTUGAL",
    "INGLATERRA"
  ];

  return (

    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        🔒 Administración
      </h1>

      <div className="space-y-8">

        <div>

          <h2 className="text-2xl mb-4">
            Campeón
          </h2>

          <select
            className="border p-2"
            value={campeon}
            onChange={(e)=>setCampeon(e.target.value)}
          >

            <option value="">
              Selecciona
            </option>

            {equipos.map(e=>(
              <option key={e}>
                {e}
              </option>
            ))}

          </select>

        </div>

        <div>

          <h2 className="text-2xl mb-4">
            Subcampeón
          </h2>

          <select
            className="border p-2"
            value={subcampeon}
            onChange={(e)=>setSubcampeon(e.target.value)}
          >

            <option value="">
              Selecciona
            </option>

            {equipos.map(e=>(
              <option key={e}>
                {e}
              </option>
            ))}

          </select>

        </div>

        <div className="border p-6 rounded-xl">

          <p>

            Campeón:

            {" "}

            <strong>
              {campeon}
            </strong>

          </p>

          <p>

            Subcampeón:

            {" "}

            <strong>
              {subcampeon}
            </strong>

          </p>

        </div>

      </div>

    </main>

  );

}