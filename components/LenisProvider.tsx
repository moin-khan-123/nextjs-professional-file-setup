/**
 * LenisProvider Component
 *
 * A client-side component that wraps the app with smooth scrolling via Lenis.
 * - Initializes Lenis with custom easing (1.2s duration)
 * - Runs requestAnimationFrame loop to drive smooth scroll animations
 * - Listens to resize events and refreshes viewport calculations
 * - Cleans up event listeners and RAF on unmount
 *
 * @component
 * @example
 * <LenisProvider>
 *   <YourApp />
 * </LenisProvider>
 */
'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<InstanceType<typeof Lenis> | null>(null);

  useEffect(() => {
    // Skip initialization on server-side rendering
    if (typeof window === 'undefined') return;

    // Initialize Lenis with smooth scroll settings
    const lenis = new Lenis({
      duration: 1.2, // Scroll animation duration in seconds
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    });

    lenisRef.current = lenis;

    let rafId = 0;

    // RAF loop to update Lenis on each frame
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    // Refresh Lenis on window resize
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onResize = () => (lenisRef.current as any)?.refresh?.();
    window.addEventListener('resize', onResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      try {
        lenis.destroy();
      } catch {
        // ignore cleanup errors
      }
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
