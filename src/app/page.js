import Celebrate from "@/components/celebrate";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import GetStarted from "@/components/get-started";
import Jumbotron from "@/components/jumbotron";
import Nav from "@/components/nav";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <Nav />
      <Jumbotron />
      <Celebrate />
      {/* <FAQ /> */}
      <GetStarted />
      <Footer />
    </div>
  );
}
