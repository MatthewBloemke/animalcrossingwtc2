import Image from 'next/image';
import React from 'react';
import cityFolk from '../../public/Cityfolkbox.jpg';
import newHorizons from '../../public/NewHorizons.jpg';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full lg:h-screen p-8 bg-black/30">
      <div className="h-20 flex w-full items-center justify-center">
        <h2
          className="p-5 rounded-lg text-2xl md:text-4xl"
          id="header"
          style={{
            fontFamily: 'FinkHeavy',
            color: 'white',
          }}
        >
          Animal Crossing: {"What's"} the Catch?
        </h2>
      </div>
      <div className="m-w-[1240px] mx-auto px-2 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4">
            <div className="p-3 bg-slate-300 group hover:bg-gradient-to-r from-[#009800] to-[#62fc49] rounded-xl">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={cityFolk}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <Link href="/cityfolk">
                  <button
                    className=" p-3 bg-white"
                    style={{ fontFamily: 'FinkHeavy', fontSize: '20px' }}
                  >
                    City Folk
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full rounded-xl p-4">
            <div className="p-3 bg-slate-300 group hover:bg-gradient-to-r from-[#009800] to-[#62fc49] rounded-xl">
              <Image
                className="rounded-xl group-hover:opacity-10"
                src={newHorizons}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] lg:translate-x-[-33%]">
                <Link href="/nhnorth">
                  <button
                    className=" p-3 bg-white my-3"
                    style={{ fontFamily: 'FinkHeavy', fontSize: '20px' }}
                  >
                    New Horizons North
                  </button>
                </Link>
                <Link href="/nhsouth">
                  <button
                    className=" p-3 bg-white my-3"
                    style={{ fontFamily: 'FinkHeavy', fontSize: '20px' }}
                  >
                    New Horizons South
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
