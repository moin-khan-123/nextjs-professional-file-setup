export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-title"
      role="contentinfo"
      className="min-h-screen flex items-center justify-center bg-zinc-900 text-white px-8"
    >
      <div className="max-w-4xl text-center">
        <h3 id="footer-title" className="text-2xl font-semibold mb-2">
          Stay in touch
        </h3>
        <p className="text-sm text-zinc-300 mb-4">
          Thanks for trying the demo. This footer intentionally occupies the
          viewport to make scrolling behavior visible.
        </p>
        <p className="text-xs text-zinc-400">© {year} Freelancing Company</p>
      </div>
    </footer>
  );
}
