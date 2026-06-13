import { supabase } from "./supabase";
import { calcularPuntosParticipantes } from "./calcularPuntosParticipantes";

export async function generarClasificacion() {

  const { data: participantes } = await supabase
    .from("participantes")
    .select("*");

  if (!participantes) {
    return [];
  }

  const clasificacion = [];

  for (const participante of participantes) {

    const puntos = await calcularPuntosParticipantes(
      participante.nombre
    );

    clasificacion.push({
      nombre: participante.nombre,
      puntos
    });

  }

  clasificacion.sort(
    (a, b) => b.puntos - a.puntos
  );

  return clasificacion;

}