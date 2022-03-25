import { Navigation } from 'coponents/Navigation/Navigation';
import styles from './header.module.css';

import React, { useState } from 'react';

import ReactSlidy from 'react-slidy';

import headerimage from '../../assets/img/headerimage.jpg';
import headermobile from '../../assets/img/mobile.jpg';
import headerwatch from '../../assets/img/watch.png';




import 'react-slidy/lib/styles.css';

const SLIDES = [headerimage, headermobile, headerwatch]

const createStyles = isActive => ({
  background: 'transparent',
  border: 0,
  color: isActive ? '#333' : '#ccc',
  cursor: 'pointer',
  fontSize: '32px'
})

function Header() {

  const [actualSlide, setActualSlide] = useState(0)

  const updateSlide = ({ currentSlide }) => {
    setActualSlide(currentSlide)
  }
  return <>
    <Navigation></Navigation>

    <ReactSlidy doAfterSlide={updateSlide} slide={actualSlide}>
      {SLIDES.map(src => (
        <header className='  w-full h-auto '>
          <div className="h-96">
            {/* <h1 className='text-en text-5xl font-extrabold absolute inset-y-1/2  inset-x-2/3 text-white-300 z-10'> فروشگاه آنلاین سناتور</h1> */}
            {/* <p className='text-end text-5xl font-extrabold mt-10 mr-16 text-2xl  absolute inset-y-1/2  inset-x-2/3 text-white-300 z-10'> جدید ترین لپتاب های روز دنیا با بهترین قیمت</p> */}
            <img className={`relative   ${styles.imgHeader}`} key={src} src={src} />
          </div>


        </header>
      ))}


    </ReactSlidy>

    <div className="Dots   flex justify-center  items-center">
      {SLIDES.map((_, index) => {
        return (
          <div className=' '>
            <button
              key={index}
              style={createStyles(index === actualSlide)}
              onClick={() => updateSlide({ currentSlide: index })}
            >

              &bull;
            </button>
          </div>

        )
      })}
    </div>

  </>;
}






export { Header };