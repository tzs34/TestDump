
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import splashImage from './images/splash_small.png'
import Paper from '@material-ui/core/Paper';
import logo from './images/logo.png'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  button: {
    color: 'secondary'
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: '#332d8e'
  },
  subtitle: {
    color: '#424242'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={6} sm={6} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <img src={logo} height="50" alt="e.fundamentals logo" />
          <Typography component="h2" variant="h2" class={classes.title}>
            Promo Navigator
          </Typography>
          <Typography component="h3" variant="h3" class={classes.subtitle}>
            A free-to-use, web-based tool showcasing EF’s Winning Campaigns fundamental
          </Typography>
          <Typography component="p" variant="subtitle1" class={classes.subtitle}>
            It allows you to:
          </Typography>
            <ul class={classes.subtitle}>
              <li>
                check prices conveniently online
            </li>
              <li>
                compare your promotions against your competitors
            </li>
              <li>
                correct errors on retailers’ sites to make sure you’re getting what you pay for
            </li>
            </ul>
        </div>
        <Container class={classes.container}>
          <Button>
            Explore
          </Button>
        </Container>
      </Grid>
        <Grid item xs sm={4} md={7} >
          <img src={splashImage} alt="splash illustration" className={classes.image} width='inherit'/>
        </Grid>
      </Grid>
      );
    }
