import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import logo from './assets/img/logo.png'

import Header from './component/Header'
import Navigation from './component/Navigation'
import Team from './component/Team'
import Statistics from './component/Statistics'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

document.title = 'Three Minds | Portfolio'

const favicon = document.querySelector("link[rel='icon']")

if (favicon) {
  favicon.setAttribute('href', logo)
} else {
  const newFavicon = document.createElement('link')
  newFavicon.rel = 'icon'
  newFavicon.href = logo
  document.head.appendChild(newFavicon)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navigation />
    <Header />
    <Team />
    <Statistics />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </React.StrictMode>,
)

