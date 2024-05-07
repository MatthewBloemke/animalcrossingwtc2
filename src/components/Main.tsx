import React from 'react';
import cityFolk from '../../public/accf.jpg';
import newHorizons from '../../public/acnh.webp';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col">
      <div className="w-full mt-12 md:mt-20 bg-[#1b9938] rounded-lg shadow-md">
        <h1
          className="p-5 rounded-lg text-[#dcb735]"
          id="header"
          style={{
            fontFamily: 'FinkHeavy',
          }}
        >
          Animal Crossing: {"What's"} the Catch?
        </h1>
        <p
          className="m-5 mt-0 lg:text-xl text-[#FFF8DC]"
          style={{
            fontFamily: 'FinkHeavy',
          }}
        >
          Welcome to Animal Crossing: What&apos;s the Catch? This site serves as
          a utility to view what fish and bugs you can catch in your game at a
          certain date and time. Click a game card below, set a date and time,
          and let us do the rest. Only the bugs and fish that you can catch will
          display on the screen, along with other useful info!
        </p>
      </div>
      <div className="w-full md:my-10">
        <div className="flex flex-col md:flex-row justify-evenly align-middle bg-[#1b9938] py-8 rounded-md shadow-md">
          <Link href="/newhorizons">
            <div className="card mx-auto my-4 md:m-0">
              <Image
                src={newHorizons}
                alt="Animal Crossing: New Horizons"
                className="card-front-image card-image"
              />
              <div className="card-faders">
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
                <Image
                  src={newHorizons}
                  alt="Animal Crossing: New Horizons"
                  className="card-fader card-image"
                />
              </div>
            </div>
          </Link>
          <Link href="/cityfolk">
            <div className="card my-4 md:m-0">
              <Image
                src={cityFolk}
                alt="Animal Crossing: City Folk"
                className="card-front-image card-image"
              />
              <div className="card-faders">
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
                <Image
                  src={cityFolk}
                  alt="Animal Crossing: City Folk"
                  className="card-fader card-image"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
