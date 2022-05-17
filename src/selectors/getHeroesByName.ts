
import { heroes } from "../data/heroes"
import { hero } from "../interfaces"

export const getHeroesByName = (name : any = ''): hero[] => {

  if (name.length === 0) return [];

  name = name.toLowerCase();

  return heroes.filter(hero => hero.superhero.toLowerCase().includes(name));

}
