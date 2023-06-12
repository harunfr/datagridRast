import React from 'react'

function MenuLink({ linkAdress, linkText }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={linkAdress}>
        {linkText}
      </a>
      <hr className="divider" />
    </li>
  )
}

export default MenuLink
