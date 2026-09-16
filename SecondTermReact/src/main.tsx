import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import Header from './component/Header'
import Navigation from './component/Navigation'
import Team from './component/Team'
import Statistics from './component/Statistics'
import Skills from './component/Skills'
import Projects from './component/Projects'
import Contact from './component/Contact'
import Footer from './component/Footer'

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