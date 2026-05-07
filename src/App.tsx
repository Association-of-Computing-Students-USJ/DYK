import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Series } from './components/Series';
import { Articles } from './components/Articles';
import { Videos } from './components/Videos';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Series />
        <Articles />
        <Videos />
      </main>
      <Footer />
    </div>);

}