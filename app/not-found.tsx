import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#101d33] to-[#0a1628] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        {/* 404 Badge */}
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="text-4xl font-bold text-white/40 font-[family-name:var(--font-playfair)]">
            404
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-[family-name:var(--font-playfair)]">
          Page Not Found
        </h1>

        <p className="text-lg text-gray-300 mb-8 font-[family-name:var(--font-dm-sans)]">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved. Let&apos;s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-[#0a1628] font-semibold rounded-lg transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            Back to Home
          </Link>
          <Link
            href="/services/roof-replacement"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border border-white/20 transition-colors font-[family-name:var(--font-dm-sans)]"
          >
            Our Services
          </Link>
        </div>

        {/* Phone CTA */}
        <p className="text-gray-400 font-[family-name:var(--font-dm-sans)]">
          Need help right away? Call us at{" "}
          <a
            href="tel:+17207663377"
            className="text-amber-400 hover:text-amber-300 font-semibold transition-colors"
          >
            (720) 766-3377
          </a>
        </p>
      </div>
    </div>
  );
}
