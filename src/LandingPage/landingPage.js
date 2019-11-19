import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './LandingPage.module.css'
import { Link } from 'react-router-dom';


export default function LandingPage() {
  return (
    <div className={styles.background}>
      <div className={styles.contentContainer}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            PromoNavigator
          </h1>
          <h3>
            A free-to-use, web-based tool showcasing EF’s Winning Campaigns fundamental
          </h3>
          <p>It allows you to:</p>
          <ul className={styles.list}>
            <li>
              Check promotions conveniently online
            </li>
            <li>
              Compare your promotions against your competitors
            </li>
            <li>
              Correct errors on retailers’ sites to make sure you’re getting what you pay for
            </li>
          </ul>
        </div>
        <div className={styles.links}>
          <Button component={Link} to="/demo" variant="contained" color="secondary">
            Explore
          </Button>
          <a href="https://www.ef.uk.com">Learn more</a>
        </div>
      </div>
    </div>
  );
}