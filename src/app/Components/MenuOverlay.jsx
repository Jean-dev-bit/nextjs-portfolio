import React from 'react'
import NavbarLink from './NvabarLink'

const MenuOverlay = ({ links }) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{links.map((link, index) => (
        <li key={index}>
            <NavbarLink href={link.path} title={link.title} /> 
        </li>
    ))}</ul>
  )
}

export default MenuOverlay
