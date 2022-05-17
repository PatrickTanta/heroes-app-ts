import { heroes } from "../data/heroes"
import { hero } from "../interfaces"

export const getHeroById = (id: string | undefined): hero | undefined => {
  return heroes.find(hero => hero.id === id)

}
