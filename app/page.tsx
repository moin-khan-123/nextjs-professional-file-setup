/**
 * Home Page
 *
 * Main landing page that showcases the Lenis smooth scrolling demo.
 * Composes three full-height sections:
 * 1. Hero - Initial call-to-action and branding
 * 2. Banner - Feature highlights
 * 3. Footer - Closing message and copyright
 *
 * Total height: 300vh+ for observable scroll behavior
 *
 * @component
 * @returns {JSX.Element} Home page with Hero, Banner, and Footer sections
 */

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="font-sans bg-white dark:bg-black text-zinc-900 dark:text-zinc-50">
      <main>
        {/* Hero Section: Viewport-height intro */}
        <Hero />
        {/* Feature Banner: Mid-page section */}
        <Banner />
        {/* Footer: Closing section */}
        <Footer />
      </main>
    </div>
  );
}
