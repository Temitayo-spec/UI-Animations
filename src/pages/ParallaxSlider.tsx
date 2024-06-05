import { useEffect, useState } from 'react';
import img_1 from '../assets/images/s_img_1.jpg';
import img_2 from '../assets/images/s_img_2.jpg';
import img_3 from '../assets/images/s_img_3.jpg';
import img_4 from '../assets/images/s_img_4.jpg';
import img_5 from '../assets/images/s_img_5.jpg';
import img_6 from '../assets/images/s_img_6.jpg';
import img_7 from '../assets/images/s_img_7.png';
import img_8 from '../assets/images/s_img_8.png';
import img_9 from '../assets/images/s_img_9.png';
import img_10 from '../assets/images/s_img_10.jpg';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ParallaxSlider = () => {
  const [xPercent, setXPercent] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = document.getElementById('image-track') as HTMLDivElement;
    const images = track.getElementsByClassName('image');

    const updateImagesPosition = (progress: number) => {
      const newXPercent = progress * -100;
      setXPercent(newXPercent);
      const objectPositionValue = `${100 + newXPercent}% center`;

      // Animate image positions smoothly
      for (const image of images) {
        gsap.to(image, {
          objectPosition: objectPositionValue,
          duration: 1.2,
          ease: 'power2.out',
        });
      }
    };

    const trigger = ScrollTrigger.create({
      trigger: '.parallax__slider-wrapper',
      pin: true,
      scrub: 5,
      start: 'top',
      end: '+=3000',
      onUpdate: (self) => {
        requestAnimationFrame(() => updateImagesPosition(self.progress));
      },
      // markers: true, // Uncomment for debugging
    });

    return () => {
      trigger.kill();
    };
  }, []);

  useEffect(() => {
    gsap.to('#image-track', {
      xPercent: xPercent,
      ease: 'none',
    });
  }, [xPercent]);

  return (
    <div className="parallax__slider-wrapper">
      <div className="parallax__slider-inner" id="image-track">
        <img
          src={img_1}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_2}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_3}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_4}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_5}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_6}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_7}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_8}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_9}
          alt="image track"
          className="image"
          draggable="false"
        />
        <img
          src={img_10}
          alt="image track"
          className="image"
          draggable="false"
        />
      </div>
    </div>
  );
};

export default ParallaxSlider;
