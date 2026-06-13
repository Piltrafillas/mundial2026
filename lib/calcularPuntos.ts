export interface DatosParticipante {

  victorias: number;
  empates: number;

  dieciseisavos: boolean;
  octavos: boolean;
  cuartos: boolean;
  semifinal: boolean;
  final: boolean;

  campeon: boolean;
  subcampeon: boolean;

  golesGoleador1: number;
  golesGoleador2: number;

}

export function calcularPuntos(
  datos: DatosParticipante
): number {

  let puntos = 0;

  puntos += datos.victorias * 3;
  puntos += datos.empates;

  if (datos.dieciseisavos) puntos += 3;
  if (datos.octavos) puntos += 3;
  if (datos.cuartos) puntos += 3;
  if (datos.semifinal) puntos += 3;
  if (datos.final) puntos += 3;

  if (datos.campeon) puntos += 25;
  if (datos.subcampeon) puntos += 10;

  puntos += datos.golesGoleador1 * 2;
  puntos += datos.golesGoleador2;

  return puntos;
}