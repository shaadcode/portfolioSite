import {
  Navbar,
  Hero,
  AboutMe,
  Technologies,
  Chatbot,
  Footer,
  MobileNav,
  Portfolio,
} from '@/constants/ShortImport';

export default function Home() {
  return (
    <>
      <header className="flexCenter">
        <Navbar />
        <MobileNav />
      </header>
      <main className="montserrat">
        <Hero />
        <AboutMe />
        <Portfolio />
        <Technologies />
        <Chatbot />
      </main>
      <footer className="snap-end">
        <Footer />
      </footer>
    </>
  );
}
