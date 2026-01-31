export default function Banner() {
  return (
    <section
      aria-label="feature-banner"
      role="region"
      className="min-h-screen flex items-center justify-center bg-yellow-50 px-8"
    >
      <div className="max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4">Feature Highlights</h2>
        <p className="text-lg text-zinc-700">
          This banner showcases site features and is sized to a full viewport
          height so scrolling transitions are easy to observe.
        </p>
      </div>
    </section>
  );
}
