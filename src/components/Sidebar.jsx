import { useState } from "react";
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'

import { links } from '../assets/constants'
import { HiOutlineMenu } from "react-icons/hi";

const handleClick = () => {

}

const NavLinks = () => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink 
        className='flex flex-row justify-start items-center my-8 text-sm font-medium cursor-pointer text-[16px] duration-200 hover:text-[#ADEFD1FF]'
        key={item.name}
        to={item.to}
        onClick={() => handleClick && handleClick()}
        >
          <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))

    }
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="">
        <NavLinks />
      </div>
      <div className="absolute text-[#008C76FF] block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine className="w-7 h-7" />
          ) : (
          <HiOutlineMenu className="w-7 h-7" />
        )

        }
      </div>
    </>
)};

export default Sidebar;
