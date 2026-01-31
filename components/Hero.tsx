/**
 * Hero Component
 *
 * Displays the hero section with intro messaging and branding.
 * - Full viewport height for visual impact
 * - Gradient background (indigo to white)
 * - Accessible heading structure with ARIA labels
 * - Responsive image display
 *
 * @component
 * @returns {JSX.Element} Hero section with title, description, and logo
 */

import Image from 'next/image';

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      role="region"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white px-8"
    >
      <div className="max-w-4xl text-center">
        <h1 id="hero-title" className="text-5xl font-extrabold mb-4">
          Smooth Scrolling Demo
        </h1>
        <p className="text-lg text-zinc-600 mb-8">
          Scroll the page to experience the smooth inertia-enhanced scrolling
          provided by Lenis. This section fills the viewport to make the
          behavior observable.
        </p>
        <div className="mx-auto w-32">
          <Image src="/next.svg" alt="Next.js logo" width={120} height={24} />
        </div>
      </div>
    </section>
  );
}
