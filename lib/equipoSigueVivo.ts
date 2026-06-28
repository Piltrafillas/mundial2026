export function equipoSigueVivo(
  equipo: string,
  estado: any
) {
  if (!estado) return true;

  // Determinar cuál es la última fase rellenada

  let faseActual: string[] | null = null;

  if (estado.campeon) {
    faseActual = [estado.campeon];
  } else if (estado.finalistas?.length > 0) {
    faseActual = estado.finalistas;
  } else if (estado.semifinales?.length > 0) {
    faseActual = estado.semifinales;
  } else if (estado.cuartos?.length > 0) {
    faseActual = estado.cuartos;
  } else if (estado.octavos?.length > 0) {
    faseActual = estado.octavos;
  } else if (estado.dieciseisavos?.length > 0) {
    faseActual = estado.dieciseisavos;
  }

  // Si todavía no se ha introducido ninguna fase,
  // todos siguen vivos.

  if (!faseActual) {
    return true;
  }

  return faseActual.includes(equipo);
}