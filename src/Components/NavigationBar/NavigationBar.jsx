import React, { useState, useEffect } from 'react';
import classes from './NavigationBar.module.scss';
import { Fade } from 'react-reveal';

import { LogoSmall, LogoLarge } from '../../images/Logo';
import Button from '../Button';

export default function NavigationBar() {
  const [navStyle, setNavStyle] = useState({});

  window.onscroll = function (e) {
    if (this.scrollY <= 5) {
      // top of the page
      setNavStyle({ boxShadow: 'none', paddingBottom: '1.5rem', background: 'none' });
    } else if (this.oldScroll > this.scrollY) {
      // scrolled up
      setNavStyle({ transform: 'translateY(0)' });
    } else {
      // scrolled down
      setNavStyle({ boxShadow: 'none', transform: 'translateY(-100%)' });
    }
    this.oldScroll = this.scrollY;
  }

  useEffect(() => setNavStyle({ boxShadow: 'none', paddingBottom: '1.5rem', background: 'none' }), []);

  return (
    <nav className={classes.nav} style={navStyle}>
      <Fade top delay={4000} duration={500}>
        <div className={classes.container}>
          {/* eslint-disable-next-line */}
          <a href='#' className={classes.nav__brand}>
            <img className={classes.nav__logo} src={LogoSmall} srcSet={`${LogoSmall} 300w, ${LogoLarge} 600w`} alt='Krish' />
          </a>

          <div className={classes.nav__list_container}>
            <input type='checkbox' className={classes.nav__check} id='nav__check' />
            <label htmlFor='nav__check' className={classes.nav__toggle}>&nbsp;</label>

            <ul className={classes.nav__list}>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} href='#about'>About</a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} href='#projects'>Projects</a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} href='#statistics'>Statistics</a>
              </li>
              <li className={classes.nav__item}>
                <a className={classes.nav__link} href='#contact'>Contact</a>
              </li>
            </ul>
          </div>

          <Button link='https://1drv.ms/b/s!AnRRdVvoe_29kUND8Wo-4xou5pnC'>Download CV</Button>
        </div>
      </Fade>
    </nav>
  );
}
