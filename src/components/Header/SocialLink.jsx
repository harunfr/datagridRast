import React from 'react'

function SocialLink({ socialLink, imageSrc }) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={socialLink}>
        <img src={imageSrc} alt="Logo" width="18" height="18" />
      </a>
    </li>
  )
}

export default SocialLink
