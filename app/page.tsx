import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <main>
        <Hero />
        <Banner />
        <Footer />
      </main>
    </div>
  );
}
