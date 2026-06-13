import Link from "next/link";

export default function Home() {

  return (

    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold mb-10">

        🏆 Mundial 2026

      </h1>

      <div className="grid grid-cols-1 gap-6">

                <Link
          href="/admin/resultados"
          className="border rounded-xl p-8 shadow text-center text-2xl hover:bg-gray-100"
        >
          ⚽
          <br />
          Resultados
        </Link>

        <Link
          href="/admin/goleadores"
          className="border rounded-xl p-8 shadow text-center text-2xl hover:bg-gray-100"
        >
          🎯
          <br />
          Goleadores
        </Link>

        <Link
          href="/admin/fases"
          className="border rounded-xl p-8 shadow text-center text-2xl hover:bg-gray-100"
        >
          🥇
          <br />
          Fases del Mundial
        </Link>

      </div>

    </main>

  );

}