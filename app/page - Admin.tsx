export default function Home() {
  return (
    <main className="min-h-screen p-8">

      <h1 className="text-4xl font-bold text-center">
        🏆 Mundial 2026
      </h1>

      <div className="mt-10 flex flex-col gap-6 text-xl">

        <a
          href="/clasificacion"
          className="border rounded-xl p-4 shadow"
        >
          🏆 Clasificación
        </a>

        <a
          href="/partidos"
          className="border rounded-xl p-4 shadow"
        >
          ⚽ Resultados
        </a>

        <a
          href="/goleadores"
          className="border rounded-xl p-4 shadow"
        >
          👤 Goleadores
        </a>

        <a
          href="/admin"
          className="border rounded-xl p-4 shadow"
        >
          🔒 Administración
        </a>

      </div>

    </main>
  );
}