/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'

import { menuLinks, socialLinks } from './linksData'

import '../../assets/styles/header.css'
import logoIconSrc from '../../assets/images/logo.svg'

import MenuLink from './MenuLink'
import SocialLink from './SocialLink'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-xl navbar-light">
        <h1>
          <a className="navbar-brand" href="https://rastmobile.com">
            <img src={logoIconSrc} alt="logo" />
          </a>
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNav}
          style={{
            // hamburger ikonunu en sag tarafa al
            order: isNavOpen ? '0' : '1'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
          {/* Ana menu linkleri */}
          <ul className="navbar-nav mr-auto main-menu">
            {menuLinks.map(({ linkText, linkAdress }) => (
              <MenuLink
                key={linkText} // UUID() de olabilirdi, ayni isimde linkten birden fazla olmuyor.
                linkText={linkText}
                linkAdress={linkAdress}
              />
            ))}
          </ul>
        </div>

        {/* Sosyal medya linkleri */}
        <ul
          className="navbar-nav ml-auto socials"
          style={{
            // kucuk ekranlarda linkleri sola yanastir
            marginLeft: isNavOpen ? '0' : 'auto'
          }}
        >
          {socialLinks.map(({ socialLink, imageSrc }) => (
            <SocialLink
              key={socialLink} // UUID() kullanilabilir ama ozunde essiz bir ozellik link.
              socialLink={socialLink}
              imageSrc={imageSrc}
            />
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
