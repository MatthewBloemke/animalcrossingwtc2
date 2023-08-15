import Image from 'next/image';
import React from 'react';
import cityFolk from '../../public/Cityfolkbox.jpg';
import newHorizons from '../../public/NewHorizons.jpg';
import Link from 'next/link';
import Carousel from './Carousel';

const Main = () => {
  const slide = [
    {
      id: 1,
      src: cityFolk,
      alt: 'Animal Crossing: City Folk',
      label: 'City Folk',
      button: 'View catchables',
      href: '/cityfolk'
    },
    {
      id: 2,
      src: newHorizons,
      alt: 'Animal Crossing: New Horizons',
      label: 'New Horizons: North',
      button: 'View catchables',
      href: '/nhnorth'
    },
    {
      id: 3,
      src: newHorizons,
      alt: 'Animal Crossing: New Horizons',
      label: 'New Horizons: South',
      button: 'View catchables',
      href: '/nhsouth'
    },
  ];
  const buttons = [0, 1, 2];
  return (
    <div className="w-full h-full p-8 flex flex-col md:flex-row">
      <div className="w-full mt-16 mb-10 md:h-[450px] md:w-[40%] md:mx-[5%] md:mt-40 bg-[#3c3c3c] md:pb-5">
        <h1
          className="p-5 rounded-lg"
          id="header"
          style={{
            fontFamily: 'FinkHeavy',
            color: 'white',
          }}
        >
          Animal Crossing: {"What's"} the Catch?
        </h1>
        <p 
          className='m-5 md:text-2xl'
          style={{
            fontFamily: 'FinkHeavy',
            color: 'white',
          }}
        >
          Welcome to Animal Crossing: What&apos;s the Catch? This site serves as a utility to view what fish and bugs you can catch in your game at a 
          certain date and time. Choose a game, set a date and time, and let us do the rest. Only the bugs and fish that you can catch will display on the screen,
          along with other useful info!
        </p>
      </div>
      <div className="w-full md:w-[40%] md:mx-[5%] md:mt-40">
        <Carousel buttons={buttons} cardObjects={slide}/>
      </div>
    </div>
  );
};

export default Main;
