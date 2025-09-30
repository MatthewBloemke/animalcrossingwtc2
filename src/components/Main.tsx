import React from 'react';
import cityFolk from '../../public/accf2.webp';
import newHorizons from '../../public/acnh.webp';
import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full h-full p-8 flex flex-col bg-[#2ecc71]">
      <div className="mt-12 md:mt-20 md:mx-32 bg-[#fdf6e3] rounded-lg shadow-xl p-10 border-[#b18b58] border-4">
        <h1
          className="p-5 rounded-lg text-[#dcb735]"
          id="header"
          style={{
            fontFamily: 'FinkHeavy',
          }}
        >
          Animal Crossing: {"What's"} the Catch?
        </h1>
        <p className="m-5 mt-0 lg:text-xl text-[#333333]">
          Welcome to Animal Crossing: What&apos;s the Catch? This site serves as
          a utility to view what fish and bugs you can catch in your game at a
          certain date and time. Click a game card below, set a date and time,
          and let us do the rest. Only the bugs and fish that you can catch will
          display on the screen, along with other useful info!
        </p>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 align-middle py-8 md:mx-32">
          <div className="bg-[#fdf6e3] shadow-xl rounded-md p-12 pb-8 w-full flex flex-col items-center justify-center border-[#b18b58] border-4">
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
            <h3
              className="mt-2 rounded-lg text-[#dcb735] text-4xl"
              style={{
                fontFamily: 'FinkHeavy',
              }}
            >
              New Horizons
            </h3>
          </div>
          <div className="bg-[#fdf6e3] shadow-xl rounded-md p-12 pb-8 w-full flex flex-col items-center justify-center border-[#b18b58] border-4">
            <Link href="/cityfolk">
              <div className="card mx-auto my-4 md:m-0">
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
            <h3
              className="mt-2 rounded-lg text-[#dcb735] text-4xl"
              style={{
                fontFamily: 'FinkHeavy',
              }}
            >
              City Folk
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
