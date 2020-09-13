import React from 'react';
import classes from './hero.module.scss';
import Fade from 'react-reveal/Fade';
import { Link } from '../../Components';

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.container}>
        <Fade clear delay={4000}>
          <h5 className={classes.intro}>Hi, my name is</h5>
          <h1 className={classes.hero__name}>
            <span className={classes.emphasize}>Krishna</span><span> Moorthy</span></h1>
          <h2 className={classes.info}>UI/ UX designer & Full stack developer</h2>
        </Fade>
      </div>

      <div role='img' className={classes.waterMark}>DEV</div>


      <div className={classes.quickContact}>
        <Link to='mailto: akrishnamoorthy007@gmail.com' lone>akrishnamoorthy007@gmail.com</Link>
        <Link to='https://twitter.com/krish_the_dev' lone>twitter/@krish_the_dev</Link>
      </div>
    </section>
  );
}
