import React from 'react'
import Banner from './Components/Banner'
import Card from './Components/Card'
import pages from '@/app/page.module.css'

const page = () => {
  return (
    <>
    <Banner Urlimage={"/Card6.jpg"} title={"Transform Your Spaces With Modern Designs."} />

    <div className={pages.cardflex}>
      <Card image={"/Card1.jpg"} text={"Furnished 2 BHK"}/>
      </div>    
    </>
  )
}

export default page

