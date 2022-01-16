import React, { FC, useEffect, useState } from 'react'
import myImage from '../assets/m.jpg'
import second from '../assets/h.jpg'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from 'react-icons/ai';
import { Image } from './Image';
import { useTranslation } from 'react-i18next';

interface IProps { }

export const About: FC<IProps> = (props) => {
  const {t} = useTranslation ();
  const [slideCounter, setSlideCounter] = useState<number>(1)
  const [isInterval, setIsInterval] = useState(true)

  useEffect(() => {
    let interval: any
    if (isInterval) {
      interval = setInterval(() => {

        if (slideCounter < 3) {
          setSlideCounter(slideCounter + 1)
        } else {
          setSlideCounter(1)
        }
      }, 4000)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [slideCounter, isInterval])
  useEffect(() => {
    console.log(isInterval);

  }, [isInterval])
  return (
    <section className="about">
      <div className="slider">
        <div className="treeDots">
          <div
            onClick={() => setSlideCounter(1)}
            style={slideCounter === 1 ? { color: 'black', backgroundColor: "white" } : {}}
            className="dot flex-center"
          >1</div>
          <div
            onClick={() => setSlideCounter(2)}
            style={slideCounter === 2 ? { color: 'black', backgroundColor: "white" } : {}}
            className="dot flex-center">2</div>
          <div
            onClick={() => setSlideCounter(3)}
            style={slideCounter === 3 ?
              { color: 'black', backgroundColor: "white" } : {}}
            className="dot flex-center">3</div>
        </div>
        <div style={slideCounter === 1 ?
          { display: 'flex' }
          : { display: 'none' }} className="slider__item slider__item-1">
          <div className="slider__left">
            <div>
              <div className="slider__title">
                {t("hello")} <br />
                <span className="slider-span">{t('i')} </span>{t('name')}
              </div>
              <div className="slider__subtitle">
              {t('full')}
              </div>
            </div>
            <div className="social__wrapper">
              <a target="_blank" rel="noreferrer" href="https://github.com/hro-maker">
                <BsGithub className="soc__link soc__link-round" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.instagram.com/hrant.muradyan_/">
                <BsInstagram className="soc__link" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.facebook.com/hrant.muratyan">
                <BsFacebook className="soc__link soc__link-round" />
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hrant-muradyan-1a6428204/">
                <BsLinkedin className="soc__link" />
              </a>
            </div>
          </div>
          <div className="slider__right">
            <Image stopAnimation={setIsInterval} className="slider__right-image" url={myImage} height="300px" alt="myImage" />
          </div>
        </div>

        <div style={slideCounter === 2 ?
          { display: 'flex' }
          : { display: 'none' }} className="slider__item slider__item-2">
          <div className="slider__left">
          <Image stopAnimation={setIsInterval} className="slider__left-image" url={second} height="300px" alt="myImage" />

          </div>
          <div className="slider__right">
            <div>
              <div className="slider__title">
                {t('slid2Top1')} <br /> {t('slid2Top2')}
              </div>
              <div className="slider__subtitle">
               {t('slide2bottom')}
              </div>
            </div>
          </div>
        </div>

        <div style={slideCounter === 3 ?
          { display: 'flex' }
          : { display: 'none' }} className="slider__item slider__item-3">
          <div className='slider__item-3-title'>
            {t("slide3top")} <br /> {t('slide3bottom')}
            <br />
            <AiOutlineHeart fontVariant="red" className="slider-heard" />
          </div>
          <div>


          </div>
        </div>

      </div>
    </section>
  )
}
