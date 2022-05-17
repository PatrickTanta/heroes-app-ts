import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from '../../selectors';

const HeroScreen = () => {

  const { heroId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById(heroId), [heroId] );

  if (!hero) return <Navigate to="/" />

  const handleReturn = () => {
    navigate( -1 );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card sx={{ margin: '10px', display: 'flex', flexDirection: { xs: 'column', md: 'row' },  }}>

          <CardMedia
            className="animate__animated animate__bounceInLeft"
            component="img"
            sx={{ width: { xs: '100%', md: 300 } }}
            image={`/assets/img/${hero.id}.jpg`}
            alt={hero.superhero}
          />

          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }} className="animate__animated animate__fadeIn">
            <CardContent>

              <Typography component="div" variant="h5" sx={{ marginBottom: '10px' }}>
                { hero.superhero }
              </Typography>

              <Typography variant="subtitle2" color="text.secondary" component="div">
                {
                  ( hero.alter_ego !== hero.characters ) ? <strong>{ hero.alter_ego }</strong> :
                    <Box>
                      <strong>Characters: </strong><br /><p>{ hero.characters }</p>
                    </Box>
                }
              </Typography>

              <Typography variant="subtitle2" color="text.secondary" component="div">
                <Box >
                  <strong>First apperance: </strong><br /><p>{ hero.first_appearance }</p>
                </Box>
              </Typography>

              <Typography variant="subtitle2" color="text.secondary" component="div">
                <Box>
                  <strong>Publisher: </strong><br /><p>{ hero.publisher }</p>
                </Box>
              </Typography>

              <Button variant="outlined" onClick={handleReturn}>
                Regresar
              </Button>

            </CardContent>
          </Box>


        </Card>
      </Grid>
    </Grid>
  );
};

export default HeroScreen;
