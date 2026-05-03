import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visit Us | Waffcha — Jamshedpur Flagship Store",
  description:
    "Find the Waffcha flagship store at Mansingh Building, Bistupur, Jamshedpur. Get directions, store hours, and plan your visit.",
};

const STORE = {
  name: "Waffcha — Jamshedpur Flagship",
  tagline: "The Original Indulgence",
  address: {
    line1: "Mansingh Building, Ram Das Bhatta",
    landmark: "Near Mani Mela Maidaan",
    area: "Contractors Area, Bistupur",
    city: "Jamshedpur",
    state: "Jharkhand",
    pin: "831001",
    country: "India",
  },
  hours: [
    { day: "Monday – Friday", time: "11:00 AM – 10:00 PM" },
    { day: "Saturday", time: "10:00 AM – 11:00 PM" },
    { day: "sunday",time : "closed"}
  ],
  phone: "+91 7979740491",
  email: "hello@waffcha.in",
  mapsQuery:
    "Mansingh+Building,+Ram+Das+Bhatta,+Near+Mani+Mela+Maidaan,+Contractors+Area,+Bistupur,+Jamshedpur,+Jharkhand+831001",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.7!2d86.2029!3d22.7876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBistupur%2C+Jamshedpur!5e0!3m2!1sen!2sin!4v1700000000000",
};

const NEARBY_LANDMARKS = [
  {
    icon: "park",
    name: "Jubilee Park",
    distance: "1.5 km",
    desc: "Jamshedpur's iconic green lung & evening retreat",
  },
  {
    icon: "shopping_bag",
    name: "Bistupur Market",
    distance: "200 m",
    desc: "The city's premier shopping & dining boulevard",
  },
  {
    icon: "stadium",
    name: "Mani Mela Maidaan",
    distance: "50 m",
    desc: "Historic community ground, right next door",
  },
  {
    icon: "temple_hindu",
    name: "Ram Mandir, Bistupur",
    distance: "400 m",
    desc: "Well-known landmark temple on Main Road",
  },
];

const WHY_VISIT = [
  {
    icon: "auto_awesome",
    title: "Handcrafted Daily",
    desc: "Every waffle is baked fresh to order — never pre-made, never reheated.",
  },
  {
    icon: "eco",
    title: "Premium Ingredients",
    desc: "Organic butter, Belgian pearl sugar, and toppings sourced for quality.",
  },
  {
    icon: "design_services",
    title: "Boutique Ambience",
    desc: "A warm, modern space designed for the perfect dessert moment.",
  },
  {
    icon: "diversity_3",
    title: "Community Hub",
    desc: "A gathering place for Jamshedpur's dessert lovers and weekend outings.",
  },
];

export default function LocationsPage() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${STORE.mapsQuery}`;
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${STORE.mapsQuery}`;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden -mt-20">
        {/* Background — generated cityscape */}
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover brightness-[0.35] scale-105"
            alt="Jamshedpur cityscape at golden hour"
            src="/jamshedpur-cityscape.png"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />
        </div>

        {/* Decorative amber glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 blur-[160px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center px-6 md:px-margin-mobile max-w-3xl mx-auto">
          <span className="font-label-caps text-label-caps text-primary-fixed-dim mb-3 block tracking-[0.2em] animate-[fadeInUp_0.6s_ease_both]">
            VISIT US
          </span>
          <h1 className="font-display-lg text-[36px] sm:text-[48px] md:text-[64px] lg:text-[72px] text-white drop-shadow-2xl leading-[1.08] mb-6 animate-[fadeInUp_0.8s_ease_0.1s_both]">
            Find Your Nearest
            <br />
            <span className="text-primary-fixed-dim">Waffcha</span> Experience.
          </h1>
          <p className="font-body-lg text-white/80 max-w-lg mx-auto mb-10 animate-[fadeInUp_1s_ease_0.2s_both]">
            Step into our flagship sanctuary in Jamshedpur — where every bite is
            a celebration.
          </p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-container text-on-primary-fixed px-8 py-4 sm:px-12 sm:py-5 rounded-full font-title-sm hover:scale-105 active:scale-95 transition-transform shadow-lg shadow-primary/30 animate-[fadeInUp_1.2s_ease_0.3s_both]"
          >
            <span className="material-symbols-outlined text-[20px]">
              directions
            </span>
            Get Directions
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-[10px] font-label-caps tracking-widest">
            SCROLL
          </span>
          <div className="w-[1px] h-10 bg-white/50 animate-pulse" />
        </div>
      </section>

      {/* ─── FLAGSHIP STORE CARD + MAP ─── */}
      <section className="py-16 md:py-section-gap px-4 sm:px-8 max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* ── Location Card ── */}
          <div className="glass-panel rounded-3xl p-6 sm:p-10 relative overflow-hidden order-2 lg:order-1">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full -z-10" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full mb-6">
              <span
                className="material-symbols-outlined text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
              <span className="font-label-caps text-[11px] tracking-wider">
                FLAGSHIP STORE
              </span>
            </div>

            <h2 className="font-headline-md text-2xl sm:text-3xl text-on-surface mb-1">
              {STORE.name}
            </h2>
            <p className="font-body-md text-primary mb-8 italic">
              {STORE.tagline}
            </p>

            {/* Address */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  location_on
                </span>
              </div>
              <div className="font-body-md text-on-surface-variant leading-relaxed">
                <p>{STORE.address.line1}</p>
                <p className="text-primary/80 font-medium">
                  {STORE.address.landmark}
                </p>
                <p>{STORE.address.area}</p>
                <p>
                  {STORE.address.city}, {STORE.address.state}{" "}
                  {STORE.address.pin}
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  schedule
                </span>
              </div>
              <div className="font-body-md text-on-surface-variant space-y-1">
                {STORE.hours.map((h) => (
                  <p key={h.day}>
                    <span className="font-semibold text-on-surface">
                      {h.day}
                    </span>{" "}
                    — {h.time}
                  </p>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex gap-4 mb-10">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-[20px]">
                  call
                </span>
              </div>
              <div className="font-body-md text-on-surface-variant">
                <p>{STORE.phone}</p>
                <p className="text-primary">{STORE.email}</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-on-primary py-3.5 sm:py-4 rounded-full font-title-sm text-sm sm:text-base hover:brightness-110 active:scale-[0.97] transition-all shadow-md shadow-primary/20"
              >
                <span className="material-symbols-outlined text-[18px]">
                  directions
                </span>
                Get Directions
              </a>
              <a
                href={`tel:${STORE.phone.replace(/\s/g, "")}`}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-primary/30 text-primary py-3.5 sm:py-4 rounded-full font-title-sm text-sm sm:text-base hover:bg-primary/5 active:scale-[0.97] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]">
                  call
                </span>
                Call Store
              </a>
            </div>
          </div>

          {/* ── Map ── */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-outline-variant/20 aspect-square lg:aspect-auto lg:h-full min-h-[350px] order-1 lg:order-2">
            <iframe
              title="Waffcha Jamshedpur Location"
              src={`https://maps.google.com/maps?q=${STORE.mapsQuery}&t=&z=16&ie=UTF8&iwloc=&output=embed`}
              className="w-full h-full border-0 min-h-[350px]"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ─── STORE AMBIENCE / GALLERY ─── */}
      <section className="py-16 md:py-section-gap bg-stone-900 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-primary/15 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-container-max mx-auto px-4 sm:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label-caps text-primary-fixed-dim mb-3 block tracking-[0.2em]">
              THE SPACE
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-white mb-4">
              Step Inside Waffcha
            </h2>
            <p className="font-body-lg text-white/60 max-w-xl mx-auto">
              A warm, modern boutique designed for the perfect dessert moment.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {/* Large feature image */}
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden group relative aspect-square md:aspect-auto">
              <img
                src="/waffcha-plated-waffle.png"
                alt="Waffcha signature plated waffle"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white font-title-sm text-sm sm:text-base">
                  Signature Presentation
                </p>
                <p className="text-white/70 text-xs sm:text-sm">
                  Every plate is a canvas
                </p>
              </div>
            </div>

            {/* Smaller gallery items using existing homepage images */}
            {[
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBelvJw7qVVEUo8Hzqd1f-BrHq9Z3ENzVR3FHBqLwBKviU3MP1RHO9FXK4THB6BonfxgFoL-HeOi-Q9lfWEeAR8Kbf-eDkBlCHWy2tOQozbhih7wn9rz7G3UZ-sM7fS7FySduHujUGZEF3NaAJZKCFKZw33Jktd4v_6wuDvY3ajibymgqNewDrHAtLiD1kcXqVgn-IDkAkSxy4JqOSuOrrBAYrXDPYm3zH8X0ehyPMNZuehw1SIJU0RmTs6cgvmFozi1nqdx9Nsxyw",
                label: "Cozy Interiors",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsTMoRJGUgCJydxjQVTp8WSl4AztfaKjeMQDZQsjF4MeDG0c1miS1vvP9yWA9kqBe8KFhy1-raoA1J3boNRECdAo4rNWw1fkSUV-4dOk2GgbmnO17rtHpDtWMAnovRSjegxdQfIAeg2CHzYS8TVHCeV7K_zsyCS78Pxrx-a9I7Y9wh0rPAIPFTZrn1HDoSy6lmWB7EWtZY4GlD2z3dQIZyw4U2Pbl9ndW6Inzdd3dt9-xkGAeQOSp2VD3RWIcCrWtb8-jdIREI7N0",
                label: "Golden Drizzle",
              },
              {
                src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDuv4l5rb5iGa4dUISl5ZSiscpwKb6mcImEI6aPn7t_c3Buw0LMTYPQbjsoLOeVh4KoF0Sxqf0qtb1drpKdGp6WKCqBA6j5uNZCiIY6VzQjVXUmBWqVuQhQfbpodx2waoHzQLcOWFSGUeGJC9Svige0wn8NKyr9mYFABVLxh3EsPZ_T2KPx8JdJj6b_N-RTU4VQXzuaVctRh_4B2qwtqF9eHKxNO13LxXl6jyyhnRAOBM-XKDtdNvm5-jQV_oGja9IzN6jNQ6dqj70",
                label: "Berry Bliss",
              },
            ].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden group relative aspect-square"
              >
                <img
                  src={img.src}
                  alt={img.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-title-sm text-sm">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY VISIT WAFFCHA ─── */}
      <section className="py-16 md:py-section-gap px-4 sm:px-8 max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-label-caps text-primary mb-3 block tracking-[0.2em]">
            THE EXPERIENCE
          </span>
          <h2 className="font-headline-md text-2xl sm:text-3xl md:text-headline-md text-on-surface mb-4">
            Why Visit Waffcha
          </h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
            More than a dessert shop — it&apos;s a destination.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_VISIT.map((item) => (
            <div
              key={item.title}
              className="group glass-panel rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-primary text-2xl sm:text-3xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-title-sm text-lg sm:text-xl text-on-surface mb-2">
                {item.title}
              </h3>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── NEARBY LANDMARKS ─── */}
      <section className="py-16 md:py-section-gap px-4 sm:px-8 bg-surface-container-low relative overflow-hidden">
        <div className="waffle-pattern absolute inset-0 -z-10" />
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="font-label-caps text-primary mb-3 block tracking-[0.2em]">
              NEIGHBOURHOOD
            </span>
            <h2 className="font-headline-md text-2xl sm:text-3xl md:text-headline-md text-on-surface mb-4">
              What&apos;s Around Us
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-xl mx-auto">
              Located in the heart of Bistupur — Jamshedpur&apos;s vibrant
              commercial centre.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {NEARBY_LANDMARKS.map((l) => (
              <div
                key={l.name}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-outline-variant/20 hover:shadow-lg hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined text-primary group-hover:text-white text-[20px] transition-colors">
                      {l.icon}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-title-sm text-sm sm:text-base text-on-surface mb-0.5">
                      {l.name}
                    </h4>
                    <p className="text-xs text-primary font-bold mb-1">
                      {l.distance} away
                    </p>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-snug">
                      {l.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-16 md:py-24 px-4 sm:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 -z-10" />
        <div className="max-w-2xl mx-auto">
          <h2 className="font-headline-md text-2xl sm:text-3xl md:text-4xl text-on-surface mb-4">
            Your Golden Indulgence Awaits
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-8 sm:mb-10">
            Visit our Jamshedpur flagship and taste the difference that craft &
            passion make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 sm:px-10 sm:py-5 rounded-full font-title-sm text-sm sm:text-base hover:brightness-110 active:scale-[0.97] transition-all shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-[18px]">
                directions
              </span>
              Navigate to Waffcha
            </a>
            <Link
              href="/build-waffle"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary/30 text-primary px-8 py-4 sm:px-10 sm:py-5 rounded-full font-title-sm text-sm sm:text-base hover:bg-primary/5 active:scale-[0.97] transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">
                restaurant
              </span>
              Explore Our Menu
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
