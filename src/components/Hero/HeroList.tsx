import { Grid } from "@mui/material";
import { FC, useMemo } from "react"
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher"
import { HeroCard } from "./HeroCard";

interface Props {
  publisher: string;
}

export const HeroList: FC<Props> = ({ publisher }) => {

  const heroes
   = useMemo( () => getHeroesByPublisher(publisher), [publisher] );

  return (
    <>

      <Grid container gap={0} className="animate__animated animate__fadeIn">
        {
          heroes.map(hero => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={ hero.id }>
              <HeroCard { ...hero } />
            </Grid>
          ))
        }
      </Grid>

    </>
  )
}