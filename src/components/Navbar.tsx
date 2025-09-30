'use client';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import AnimalCrossing from '../../public/AnimalCrossing.png';
import Button from '@mui/material/Button';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const pathname = usePathname();
  const [nav, setNav] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    console.log(newOpen);
    setNav(newOpen);
  };

  return (
    <div
      className="w-full h-16 md:h-[72px] absolute bg-[#1b9938] shadow-md"
      id="nav"
    >
      <div className="flex justify-between items-center w-full h-full px-2">
        <div className="w-full flex items-center">
          <div className="flex flex-row justify-normal w-[75px] md:w-[100px] lg:w-[115px] lg:ml-1">
            <Link href="/">
              <Image
                src={AnimalCrossing}
                alt="Animal Crossing Logo"
                className="w-full"
              />
            </Link>
          </div>
        </div>
        <div className="md:min-w-[660px]">
          <ul className="hidden md:flex md:justify-end gap-1">
            <Button
              className="navButton"
              size="large"
              href="/"
              color="secondary"
              style={{
                fontSize: '1.3rem',
                borderRadius: 32,
                color: '#1b9938',
              }}
              variant="contained"
            >
              Home
            </Button>
            <Button
              className="navButton"
              size="large"
              href="/cityfolk"
              color="secondary"
              style={{
                fontSize: '1.3rem',
                borderRadius: 32,
                color: '#1b9938',
              }}
              variant="contained"
            >
              City Folk
            </Button>
            <Button
              className="navButton"
              size="large"
              href="/newhorizons"
              color="secondary"
              variant="contained"
              style={{
                fontSize: '1.3rem',
                borderRadius: 32,
                color: '#1b9938',
              }}
            >
              New Horizons
            </Button>
            {/* <Link href="/#nav" className="mx-5">
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
            </Link> */}
          </ul>
          <div className="md:hidden">
            <IconButton
              onClick={toggleDrawer(true)}
              color="secondary"
              sx={{ backgroundColor: '#fdf6e3 !important', color: '#333' }}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Drawer open={nav} sx={{ width: '40%' }} onClose={toggleDrawer(false)}>
        <div className="bg-[#fdf6e3] w-[215px] h-full">
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  onClick={() => setNav(false)}
                  src={AnimalCrossing}
                  className="-ml-1 mt-1"
                  alt="/"
                  width={100}
                />
              </Link>
            </div>
            <div className="border-b border-[#333] my-4 mx-2">
              <h4
                className="w-full py-4 text-[#dcb735] text-2xl pl-1"
                style={{
                  fontFamily: 'FinkHeavy',
                }}
              >
                What&apos;s the Catch?
              </h4>
            </div>
          </div>
          <List>
            <ListItem disablePadding>
              <ListItemButton href="/">
                <ListItemText
                  primary="Home"
                  primaryTypographyProps={{ fontSize: '1.2rem', color: '#333' }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href="/cityfolk">
                <ListItemText
                  primary="City Folk"
                  primaryTypographyProps={{ fontSize: '1.2rem', color: '#333' }}
                />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton href="/newhorizons">
                <ListItemText
                  primary="New Horizons"
                  primaryTypographyProps={{ fontSize: '1.2rem', color: '#333' }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default Navbar;
