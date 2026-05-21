import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="w-full bg-teal-600 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Ready to Protect Your Business?
        </h2>
        <p className="text-teal-100 text-lg mb-6 max-w-2xl mx-auto">
          Get tailored cyber insurance quotes from licensed NZ brokers — free, with no obligation.
        </p>
        <Link
          href="/contact/"
          className="inline-block px-8 py-4 bg-white text-teal-700 font-bold rounded-xl hover:bg-teal-50 transition text-lg shadow-lg"
        >
          Get a Free Quote →
        </Link>
        <p className="text-teal-200 text-sm mt-3">Licensed NZ brokers · Respond within 1 business day · No spam</p>
      </div>
    </section>
  );
}
