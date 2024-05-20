import React from 'react'
import { AppBar, Button, Card, CardContent, CardMedia, Container, CssBaseline, Grid, Toolbar, Typography } from '@mui/material'
import PhotoCamera from '@mui/icons-material/PhotoCamera';

import { makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  cardGrid: {

  }

}))

export default function appsample() {
      const classes = useStyles();

  return (
    <div>appsample
         <div className="sidebar">
      <CssBaseline/>
      <AppBar position='relative'>
        <Toolbar>
        <PhotoCamera/>
        <Typography variant='h6'>
            Photo Album
        </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" style={{marginTop: '100px'}}>
            <Typography variant='h2' align='center' color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Hello everyone this is the photo album

            </Typography>
            <div>
              <Grid container spacing={2} justifyContent={'center'}>
                <Grid item>
                  <Button variant='contained' color='primary'>
                    see my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>
                    secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>

          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                className={classes.CardMedia}
                image='https://source.unsplash.com/random'
                title="Image title"
                />
                <CardContent className={classes.CardContent}>
                  <Typography gutterBottom variant='h5'>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card
                  </Typography>

                </CardContent>

              </Card>

            </Grid>

          </Grid>
 
        </Container>

      </main>



    </div>
    </div>
    
  )
}
