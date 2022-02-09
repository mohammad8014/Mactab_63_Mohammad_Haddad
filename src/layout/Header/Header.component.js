import { Navigation } from 'coponents/Navigation/Navigation';
import styles from './header.module.css';

import React, { useState } from 'react';

import ReactSlidy from 'react-slidy';

import laptoplogo from '../../assets/img/ebay-laptooppmf_QoxDYe5.jpg';



import 'react-slidy/lib/styles.css';

const SLIDES = [laptoplogo, laptoplogo, laptoplogo, laptoplogo]

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
        <header className=' bg-red-300 w-full h-auto '>
          <div>
            <h1 className='text-end text-5xl font-extrabold absolute inset-y-1/2  inset-x-2/3 text-white-300 z-10'> فروشگاه آنلاین سناتور</h1>
            <p className='text-end text-5xl font-extrabold mt-10 mr-16 text-2xl  absolute inset-y-1/2  inset-x-2/3 text-white-300 z-10'> جدید ترین لپتاب های روز دنیا با بهترین قیمت</p>
            <img className={`relative  h-16 ${styles.imgHeader}`} key={src} src={src} />
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