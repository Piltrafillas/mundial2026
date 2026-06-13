import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-10">

      <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-center">
        🏆 Mundial 2026
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

        <Link
          href="/clasificacion"
          className="
            border
            rounded-2xl
            p-6 md:p-8
            shadow
            text-center
            text-xl md:text-2xl
            hover:bg-gray-100
            transition
          "
        >
          <div className="text-4xl md:text-6xl mb-3">
            🏆
          </div>

          Clasificación
        </Link>

        <Link
          href="/admin"
          className="
            border
            rounded-2xl
            p-6 md:p-8
            shadow
            text-center
            text-xl md:text-2xl
            hover:bg-gray-100
            transition
          "
        >
          <div className="text-4xl md:text-6xl mb-3">
            🔒
          </div>

          Administración
        </Link>

      </div>

    </main>
  );
}
