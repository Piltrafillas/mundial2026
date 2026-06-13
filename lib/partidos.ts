export interface Partido {
  id: number;
  local: string;
  visitante: string;
  resultado: "" | "1" | "X" | "2";
}

export const partidos: Partido[] = [
  {
    id: 1,
    local: "ESPAÑA",
    visitante: "BRASIL",
    resultado: ""
  }
];