export interface City {
  id: number;
  city: string;
  location: string; 
}

export const  cities: City[] = [
  {id: 1, city: 'Dallol', location: 'NG'},
  {id: 2,city: 'Fairbanks', location: 'US'},
  {id: 3, city: 'London', location: 'GB'},
  {id: 4, city: 'Recife', location: 'BR'},
  {id: 5, city: 'Vancouver', location: 'CA'},
  {id: 6, city: 'Yakutsk', location: 'RU'},
]