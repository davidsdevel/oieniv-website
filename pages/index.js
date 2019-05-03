import React from 'react'
import Link from 'next/link'
import Head from 'Components/head'
import Nav from 'Components/nav'
import {LandingPage} from "Components/index";

const Home = () => (
  <div>
    <Head title="Home" />
    <Nav />
    <LandingPage/>
    <style jsx>{`
    `}</style>
  </div>
)

export default Home
