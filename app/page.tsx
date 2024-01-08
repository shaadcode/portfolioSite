import Navbar from '@/components/HomeComponents/Navbar';
import Hero from '@/components/HomeComponents/Hero';
import AboutMe from '@/components/HomeComponents/AboutMe';
import Ability from '@/components/HomeComponents/Ability';
import Technologies from '@/components/HomeComponents/Technologies';
import Chatbot from '@/components/HomeComponents/Chatbot';
// import Portfolio from '@/components/Portfolio';
import Footer from '@/components/HomeComponents/Footer';
import MobileNav from '@/components/HomeComponents/MobileNav';

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-center">
        <Navbar />
        <MobileNav />
      </header>
      <main className="montserrat">
        <Hero />
        <AboutMe />
        <Ability />
        <Technologies />
        <Chatbot />
        {/* <Portfolio /> */}
      </main>
      <footer className="snap-end">
        <Footer />
      </footer>
    </>
  );
}
