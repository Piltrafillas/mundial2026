import { supabase } from "@/lib/supabase";

export default async function Prueba() {

  const { data, error } = await supabase
    .from("prueba")
    .select("*");

  return (

    <main className="p-8">

      <h1 className="text-3xl mb-4">
        Conexión con Supabase
      </h1>

      <h2>Data:</h2>

      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>

      <h2>Error:</h2>

      <pre>
        {JSON.stringify(error, null, 2)}
      </pre>

    </main>

  );

}