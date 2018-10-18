export interface lists  {
  id: string,
  arrival: string,
  metro: {
    exist: string,
    icon: string,
    stations: {
      id: string,
      station: string,
      url: string,
    }[],
  },
  intra_bus: {
    exist: string,
    icon: string,
    stations: {
      id: string,
      station: string,
      url: string,
    }[],
  },
  inter_bus: {
    exist: string,
    icon: string,
    stations: {
      id: string,
      station: string,
      url: string,
    }[],
  },
}
