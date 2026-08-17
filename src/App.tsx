import { About } from './components/About';
import { Bookshelf } from './components/Bookshelf';
import { Classes } from './components/Classes';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Gallery } from './components/Gallery';
import { GoogleReviews } from './components/GoogleReviews';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Team } from './components/Team';
import { Testimonials } from './components/Testimonials';
import { WorkWithUs } from './components/WorkWithUs';

/**
 * Single vertical-scrolling page, per the owner's notes ("vertical
 * scrolling," "minimal text," inspired by daisymade/sproet & sprout).
 * Each section is its own component with its own file, so content and
 * layout for one section never bleed into another.
 */
function App() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Classes />
        <Team />
        <Gallery />
        <Testimonials />
        <GoogleReviews />
        <Bookshelf />
        <WorkWithUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
