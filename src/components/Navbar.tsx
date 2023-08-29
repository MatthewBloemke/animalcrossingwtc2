'use client';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AnimalCrossing from '../../public/AnimalCrossing.png';

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const homeStyle = pathname === '/' ? { borderBottom: 'solid #5CFC4C' } : {};
  const cityFolkStyle =
    pathname === '/cityfolk' ? { borderBottom: 'solid #5CFC4C' } : {};
  const nhNorthStyle =
    pathname === '/nhnorth' ? { borderBottom: 'solid #5CFC4C' } : {};
  const nhSouthStyle =
    pathname === '/nhsouth' ? { borderBottom: 'solid #5CFC4C' } : {};
    return (
      <div className="w-full h-16 md:h-[72px] absolute bg-[#f0f0f0]" id="nav">
      <div className="flex justify-between items-center w-full h-full px-2">
        <div className="w-full flex items-center">
          <div className="flex flex-row justify-normal w-[75px] md:w-[100px] lg:w-[115px] lg:ml-10">
            <Link href="/">
              <Image src={AnimalCrossing} alt="Animal Crossing Logo" className="w-full" />
            </Link>
          </div>
        </div>
        <div className='md:min-w-[660px]'>
          <ul className="hidden md:flex navList">
            <Link href="/#nav" className="mx-5">
              <li
                className="py-[5px] md:text-xl lg:text-xl navItems rounded-sm"
                style={homeStyle}
              >
                Home
              </li>
            </Link>
            <Link href="/cityfolk" className="mx-5">
              <li
                className="py-[5px] md:text-xl lg:text-xl navItems rounded-sm"
                style={cityFolkStyle}
              >
                City Folk
              </li>
            </Link>
            <Link href="/nhnorth" className="mx-5">
              <li
                className="py-[5px] md:text-xl lg:text-xl navItems rounded-sm"
                style={nhNorthStyle}
              >
                New Horizons: North
              </li>
            </Link>
            <Link href="/nhsouth" className="mx-5">
              <li
                className="py-[5px] flex-nowrap md:text-xl lg:text-xl navItems rounded-sm"
                style={nhSouthStyle}
              >
                New Horizons: South
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden rounded-full p-3 cursor-pointer hover:bg-black/10 active:scale-95 ease-in duration-100"
          >
            <AiOutlineMenu size={30} />
          </div>
        </div>
      </div>
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[50]'
            : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen  bg-[#f0f0f0] p-8 ease-in duration-500'
              : 'fixed left-[-100%] top-0 p-8 ease-in duration-500 h-screen'
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  onClick={() => setNav(false)}
                  src={AnimalCrossing}
                  className='-ml-3'
                  alt="/"
                  width={100}
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer -mr-[10px]"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-black my-4">
              <p className="w-full md:w-[90%] py-4 text-xs">
                What&apos;s the Catch?
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase navList">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/cityfolk">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  City Folk
                </li>
              </Link>
              <Link href="/nhnorth">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  New Horizons: North
                </li>
              </Link>
              <Link href="/nhsouth">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  New Horizons: South
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div
          onClick={() => setNav(false)}
          className={
            nav
              ? 'md:hidden fixed right-0 h-screen w-[25%] sm:w-[40%] md:w-[55%]'
              : ''
          }
        />
      </div>
    </div>
    )
}

export default Navbar;