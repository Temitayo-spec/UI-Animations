import image from '../assets/hero.jpg';
import { gsap } from 'gsap';
import { Flip } from 'gsap/Flip';
import { useEffect } from 'react';

gsap.registerPlugin(Flip);

const SiteRevealAnimation = () => {
  useEffect(() => {
    const preloaderBackground = document.querySelector(
      '.preloader__background'
    );
    const preloaderText = document.querySelector('.preloader__text span');
    const heroTitles = [...document.querySelectorAll('.hero__title span span')];
    const heroImageStart = document.querySelector('.hero-image-start');
    const heroCaption = document.querySelector('.hero__caption span');
    const heroButton = document.querySelector('.hero__button');
    const heroImageWrapper = document.querySelector('.hero__image');
    const heroImage = document.querySelector('.hero__image img');
    const headerItems = [...document.querySelectorAll('.header *')];

    const state = Flip.getState(heroImageWrapper);
    heroImageStart?.appendChild(heroImageWrapper as Node);

    const master = gsap.timeline();
    const setInitialStates: () => void = () => {
      gsap.set(headerItems, {
        y: 24,
        autoAlpha: 0,
      });
      gsap.set(heroButton, {
        y: 64,
        autoAlpha: 0,
      });
      gsap.set([preloaderText, heroCaption, heroTitles], { yPercent: 100 });
    };

    const preloaderAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 1,
          ease: 'power2.out',
        },
      });

      tl.to(preloaderText, {
        yPercent: 0,
        delay: 0.3,
      })
        .to(preloaderText, {
          yPercent: -105,
          delay: 1,
        })
        .to(preloaderBackground, {
          yPercent: -100,
          duration: 1.5,
          ease: 'power4.inOut',
        });

      return tl;
    };

    const heroImageAnimation = () => {
      const tl = gsap.timeline({
        defaults: {
          duration: 2,
          ease: 'power3.inOut',
        },
      });

      tl.fromTo(
        heroImage,
        {
          scale: 1.05,
        },
        {
          scale: 1,
        }
      )
        .to(
          heroImageWrapper,
          {
            borderRadius: '16px',
          },
          '<'
        )
        .add(() => {
          Flip.from(state, {
            duration: 2,
            ease: 'power3.inOut',
          });
        }, '<');

      return tl;
    };

    const UIAnimation = () => {
      const tl = gsap.timeline({
        delay: 0.2,
        defaults: {
          duration: 1.5,
          ease: 'power3.out',
          yPercent: 0,
          y: 0,
        },
      });

      tl.to(heroCaption, {
        duration: 1.2,
        ease: 'power3.inOut',
      })
        .to(
          heroTitles,
          {
            stagger: 0.1,
          },
          '-=0.9'
        )
        .to(
          heroButton,
          {
            autoAlpha: 1,
          },
          0.5
        )
        .to(
          headerItems,
          {
            autoAlpha: 1,
          },
          0.5
        );

      return tl;
    };

    master
      .add(setInitialStates)
      .add(preloaderAnimation())
      .add(heroImageAnimation(), '-=1.5')
      .add(UIAnimation(), '<');
  }, []);
  return (
    <div className="preloader__wrapper">
      <div className="hero-image-start"></div>
      <div className="preloader">
        <p className="preloader__text">
          <span>Say hello to N3</span>
        </p>
        <div className="preloader__background"></div>
      </div>
      <header className="header">
        <p className="header__menu">Menu</p>
        <p className="header__logo">N3</p>
        <button className="button">Order</button>
      </header>
      <div className="hero__wrapper">
        <section className="hero">
          <div className="hero__image">
            <img src={image} alt="N3 Bike" />
          </div>
          <div className="hero__content">
            <p className="hero__caption">
              <span>More details. More fun.</span>
            </p>
            <h1 className="hero__title">
              <span>
                <span>A new way to </span>
              </span>
              <span>
                <span>ride in style.</span>
              </span>
            </h1>
            <button className="hero__button button button--white">
              Explore
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SiteRevealAnimation;
