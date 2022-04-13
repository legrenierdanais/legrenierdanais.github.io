import React, { useState } from 'react'
import Footer from '../components/Footer'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Sidebar from '../components/Sidebar'
import ContentSection from "../components/ContentSection";
import NavbarDev from "../components/NavbarDev";

const Dev = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => { setIsOpen(!isOpen) }

  return (
    <>
      {/*<Sidebar isOpen={isOpen} toggle={toggle}/>*/}
      <NavbarDev toggle={toggle}/>
        {/*<ContentSection />*/}
      {/*<InfoSection {...homeObjOne}/>*/}
      {/*<InfoSection {...homeObjTwo}/>*/}
      {/*  <InfoSection {...homeObjOne}/>*/}
        {/*<Services />*/}
      {/*<InfoSection {...homeObjThree}/>*/}
      {/*<Footer />*/}
    </>
  )
}

export default Dev