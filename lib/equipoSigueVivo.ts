export function equipoSigueVivo(
  equipo: string,
  estado: any
) {
  // Si aún no se ha definido ninguna fase,
  // todos los equipos se consideran vivos.
  if (
    !estado ||
    (
      !estado.dieciseisavos?.length &&
      !estado.octavos?.length &&
      !estado.cuartos?.length &&
      !estado.semifinales?.length &&
      !estado.finalistas?.length &&
      !estado.campeon
    )
  ) {
    return true;
  }

  return (
    estado.dieciseisavos?.includes(equipo) ||
    estado.octavos?.includes(equipo) ||
    estado.cuartos?.includes(equipo) ||
    estado.semifinales?.includes(equipo) ||
    estado.finalistas?.includes(equipo) ||
    estado.campeon === equipo
  );
}