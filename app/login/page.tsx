export default function LoginPage() {

  return (

    <main className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Acceso administrador
      </h1>

      <form
        action="/api/login"
        method="POST"
      >

        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          className="border p-2"
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 ml-4 rounded"
        >
          Entrar
        </button>

      </form>

    </main>

  );

}