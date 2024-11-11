"use client"
import Access from "@/components/access";
import Celebrate from "@/components/celebrate";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import GetStarted from "@/components/get-started";
import Jumbotron from "@/components/jumbotron";
import Nav from "@/components/nav";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

export default function Home() {

  const [ openModal, setOpenModal ] = useState(false)

  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  const handleOpen = () => setOpenModal(true)

  return (
    <div >
      <Nav 
        isModalOpen={openModal} 
        closeModal={() => setOpenModal(false)} 
        openModal={handleOpen} 
      />
      <Jumbotron />
      <Access
        openModal={handleOpen} 
      />
      <Gallery />
      <Celebrate />
      <FAQ />
      <GetStarted 
        openModal={handleOpen} 
        />
      <Footer />
    </div>
  );
}
