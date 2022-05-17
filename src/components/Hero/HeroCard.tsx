import { Box, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { hero } from "../../interfaces"

export const HeroCard: FC<hero> = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  return (
    <Card sx={{ margin: '10px', display: 'flex' }} className="animate__animated animate__fadeIn">

      <CardMedia
        component="img"
        sx={{ width: 120 }}
        image={`/assets/img/${id}.jpg`}
        alt={superhero}
      />

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent>

          <Typography component="div" variant="h5">
            { superhero }
          </Typography>

          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary">
            {
              ( alter_ego !== characters ) && 
                <small>{ characters }</small>
            }
          </Typography> */}

          <Typography variant="subtitle2" color="text.secondary" component="div">
            <strong>First apperance:</strong> { first_appearance }
          </Typography>

        </CardContent>
        <CardActions sx={{ marginLeft: '10px', marginTop: 'auto' }}>
          <Link to={`/hero/${id}`}>
            Detalles
          </Link>
        </CardActions>
      </Box>

    </Card>
  )
}
