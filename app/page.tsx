import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Ability from "@/components/Ability";
import Technologies from "@/components/Technologies";
import Chatbot from "@/components/Chatbot";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center">
        <Navbar />
        <MobileNav />
      </header>
      <main className="montserrat ">
        <Hero />
        <AboutMe />
        <Ability />
        <Chatbot />
        <Technologies />
        {/* <Portfolio /> */}
      </main>
      <footer className="">
        <Footer />
      </footer>
    </>
  );
}
