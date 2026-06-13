import { supabase } from "./supabase";

export async function calcularPuntosParticipantes(
  participante: string
) {

  let puntos = 0;

  // Equipos del participante
  const { data: equipos } = await supabase
    .from("equipos_participante")
    .select("equipo")
    .eq("participante", participante);

  // Partidos
  const { data: partidos } = await supabase
    .from("partidos")
    .select("*");

  if (!equipos || !partidos) {
    return 0;
  }

  // Puntos por resultados
  for (const equipoObj of equipos) {

    const equipo = equipoObj.equipo;

    for (const partido of partidos) {

      if (partido.local === equipo) {

        if (partido.resultado === "1")
          puntos += 3;

        if (partido.resultado === "X")
          puntos += 1;
      }

      if (partido.visitante === equipo) {

        if (partido.resultado === "2")
          puntos += 3;

        if (partido.resultado === "X")
          puntos += 1;
      }

    }

  }

  // Bonificaciones por rondas
  const { data: estado } = await supabase
    .from("estado_mundial")
    .select("*")
    .single();

  if (estado) {

    for (const equipoObj of equipos) {

      const equipo = equipoObj.equipo;

      if (estado.dieciseisavos?.includes(equipo))
        puntos += 3;

      if (estado.octavos?.includes(equipo))
        puntos += 3;

      if (estado.cuartos?.includes(equipo))
        puntos += 3;

      if (estado.semifinales?.includes(equipo))
        puntos += 3;

      if (estado.finalistas?.includes(equipo))
        puntos += 3;

      if (estado.campeon === equipo)
        puntos += 25;

      if (estado.subcampeon === equipo)
        puntos += 10;
    }

  }

  // Goleadores
  const { data: seleccion } = await supabase
    .from("goleadores_participante")
    .select("*")
    .eq("participante", participante)
    .single();

  if (seleccion) {

    const { data: jugadores } = await supabase
      .from("jugadores")
      .select("*");

    const jugador1 = jugadores?.find(
      j => j.nombre === seleccion.goleador1
    );

    const jugador2 = jugadores?.find(
      j => j.nombre === seleccion.goleador2
    );

    if (jugador1)
      puntos += jugador1.goles * 2;

    if (jugador2)
      puntos += jugador2.goles;

  }

  return puntos;

}