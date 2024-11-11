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
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({
      // Global settings here
    });
  }, []);

  return (
    <div >
      <Nav />
      <Jumbotron />
      <Access/>
      <Gallery />
      <Celebrate />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  );
}
