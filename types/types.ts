// Representa un vuelo individual
export type Flight = {
  date: string;
  origin: string;
  destination: string;
  price: number;
  availability: number;
};

// Representa un vuelo completo, ida y vuelta
export type Trip = {
  id: string;
  origin: Flight;
  destination: Flight;
  availability: number;
  price: number;
  days: number;
};