export interface Partido {
  idPartido: string
  idLocal : string,
  idVisitante : string,
  fechaHora: number,
  goles : Gol[],
  tarjetas : Tarjeta[]
}

export interface Gol {
  idParticipante : string,
  fechaHora: number
}

export interface Tarjeta {
  idParticipante : string,
  tipoTarjeta : string
  fechaHora: number
}
