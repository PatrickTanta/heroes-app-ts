import { Button, Grid, TextField, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors";
import { HeroCard } from "../Hero/HeroCard";
import { useMemo } from "react";

const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const [ formValues, handleInputChange ] = useForm({
    searchText: q,
  });


  const { searchText } = formValues;

  const heroesFiltered = useMemo( () => getHeroesByName(q), [q] )

  const handleSearch = (e: any) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`)
  }

  return (
    <div>

      <h1>Búsquedas</h1>

      <hr />


      <Grid container gap={5}>


        <Grid item xs={12} md={4}>

          <Typography component="div" variant="h5">
            Buscar
          </Typography>

          <hr />

          <form
            style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={ handleSearch }
          >

            <TextField
              type="text"
              placeholder="Buscar un heroe"
              sx={{ margin: '20px 0 40px 0' }}
              autoComplete="off"
              name="searchText"
              value={ searchText }
              onChange={ handleInputChange }
            />

            <Button type="submit" variant="outlined">
              Buscar...
            </Button>

          </form>
        </Grid>

        <Grid item xs={12} md={7}>

          <Typography component="div" variant="h5">
            Resultados
          </Typography>

          <hr />

          {
            ( q === '' )
              ? <Typography component="div" variant="h6">Resultados</Typography>
              : ( heroesFiltered.length === 0 )
              && <Typography component="div" variant="h6">No hay resultados: { q }</Typography>
          }

          {
            heroesFiltered.map(hero => (
              <Grid item xs={12} key={ hero.id }>
                <HeroCard { ...hero } />
              </Grid>
            ))
          }

        </Grid>

      </Grid>
      
    </div>
  );
};

export default SearchScreen;
