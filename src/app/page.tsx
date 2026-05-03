"use client";

import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="w-full h-full object-cover brightness-[0.65] dark:brightness-[0.4]" 
            alt="hyper-realistic gourmet belgian waffle with melting gold honey syrup, floating berries, and wispy steam in a luxury cafe setting" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtupUnANxhp1ZU1CbIDU5NLU8uQ5cYmjYwggx_iaPndd_9IZxpKmDanOwhsnxHRKsjIVCRkbGl7jpUblFQZWS_n0iuakKeWoFZ9q_0N49SZZm88RY4dxGODbrpSWsI7e1u2m4HSWvdEaFPeBe_jsC_YGOgvA9Bc-kMwVGvrFpVTWDqf2--FBTkvFcDB7XZjY18zmBmuWhOcNdSBWz3nDnkf3nDe7QcxsFC04YGmGfKnxFMJMJ8Eduagu4pybKIiU3lU4dPt-eMXE"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background/90 dark:to-[#140f0d]"></div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="relative z-10 text-center px-margin-mobile"
        >
          <motion.span variants={itemVariants} className="font-label-caps text-label-caps text-amber-400 dark:text-primary mb-unit block tracking-[0.3em]">SINCE 2024</motion.span>
          <motion.h1 variants={itemVariants} className="font-display-lg text-[64px] md:text-[96px] text-white drop-shadow-2xl mb-gutter leading-tight tracking-tight">
            Indulgence,<br/>Redefined.
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-white/90 dark:text-white/80 max-w-xl mx-auto mb-section-gap font-light">
            Experience the gold standard of gourmet desserts. Hand-crafted, butter-rich, and perfectly paired.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/build-waffle" className="group relative overflow-hidden bg-amber-500 dark:bg-primary text-stone-900 px-12 py-5 rounded-full font-title-sm shadow-[0_0_20px_rgba(245,158,11,0.3)] dark:shadow-[0_0_30px_rgba(230,168,23,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] dark:hover:shadow-[0_0_40px_rgba(230,168,23,0.4)] transition-all duration-300">
              <span className="relative z-10 font-bold">Build Your Own</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </Link>
            <button className="glass-panel text-white px-12 py-5 rounded-full font-title-sm border border-white/20 dark:border-white/10 hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300">
              Explore Menu
            </button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="text-white text-[10px] font-label-caps tracking-[0.2em]">SCROLL TO DISCOVER</span>
          <motion.div 
            animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] bg-white/50 origin-top"
          ></motion.div>
        </motion.div>
      </section>

      {/* Featured Bestsellers */}
      <section className="py-section-gap px-8 max-w-container-max mx-auto relative overflow-hidden">
        <div className="waffle-pattern absolute inset-0 -z-10 dark:opacity-5"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <h2 className="font-headline-md text-4xl text-amber-600 dark:text-primary mb-3">Signature Masterpieces</h2>
            <p className="text-stone-600 dark:text-on-surface-variant font-body-md text-lg">The most coveted flavors in our collection.</p>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="w-12 h-12 rounded-full border border-stone-200 dark:border-outline/20 flex items-center justify-center hover:bg-amber-50 dark:hover:bg-primary/10 transition-colors text-stone-400 dark:text-on-surface-variant">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-amber-200 dark:border-primary/30 flex items-center justify-center bg-amber-50 dark:bg-primary/10 transition-colors text-amber-600 dark:text-primary hover:bg-amber-100 dark:hover:bg-primary/20">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              id: "p1",
              name: "Golden Honeycomb",
              price: 250.00,
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABlG5gPZu8vab4YDgwWup3wjMcraKvyOd3s0FOS0n5m6oB4Ur5RyCTlUfKAawq1WSbJnHEp_WDmjrQpAHzzzmMTb-rAD0JMxnjKN0iW4eFoyasH5iR8ROz9dn1Thh-h4UarmKQkCjSGecx6bAtjiSVU5XRhiHmvh68vlkonkNVIjFnSwkBlpMDeHGcx6lETSNq0RFD6QbGP9L3GWNWB74ik6zg4DjPFCli9bp9UdCpDZmvrIZlR65ItYMbCunrvCPlwwqtWTBxrdk",
              rating: "4.9",
              reviews: "240+",
              isBestseller: true,
              delay: 0.1
            },
            {
              id: "p2",
              name: "Midnight Cocoa",
              price: 299.00,
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCL62da14Znu_aiRWYIGgnrPtkny2pbvZ95m3RQ0qAetU1ojKphGhMG4jCRqRQDTULaD84H-FK0dPUQRzuk4cUbNXXo7Xk7EW-XUaK3KbDBbIm6ojD9I1WVa6UqbpZEuk-71kkr3IWQBu2EEIs16RaZ94fNljNWCwW1bFcBlDBdeAIu8iSWluzbNyKi0vEyHJNDauwGIs4a0jI0zPZUjZcGHe5BTk1bLy92-DIYyxHkWS2jT9APbSI6eA6o4aWn0Sn4dQC_8JZb5Is",
              rating: "4.8",
              reviews: "185",
              delay: 0.2
            },
            {
              id: "p3",
              name: "Berry Velour",
              price: 249.00,
              image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_RbnRpgHGXBPo7oP4f4Oig3q-TqUqCOIIPypRofLUu_sxvLQDS2ZApx-JL1wo3BMfn2KzqFxyr0-SCkqmMrvvIqp5fYA8SoRuyXvKqIbQaOkxsVpCqnTZjji_t2ezwTOtIdAPL9koxLkpqX89Q9ZA_MyRhQuEyExc98A5Z87yEEq0GaD7OVd16nMJb0JgYogch0ULFwhRTeyeyDRFkww2yAeNiwKhQv1CcD1posrteXgutuHdwHTaNuxAov_WcoSbcbq-QaLvdYs",
              rating: "4.9",
              reviews: "120+",
              delay: 0.3
            }
          ].map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: product.delay }}
            >
              <ProductCard 
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                rating={product.rating}
                reviews={product.reviews}
                isBestseller={product.isBestseller}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Combo & Seasonal Section */}
      <section className="bg-stone-900 dark:bg-[#0a0705] py-section-gap relative overflow-hidden transition-colors duration-500">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 dark:opacity-10 mix-blend-overlay"></div>
        <div className="max-w-container-max mx-auto px-8 grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-amber-500/20 dark:bg-primary/10 blur-[100px] rounded-full"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-amber-700/20 dark:bg-primary/10 blur-[100px] rounded-full"></div>
            <motion.img 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 rounded-2xl shadow-2xl w-full border border-white/10 dark:border-white/5" 
              alt="luxury dessert pairing of a golden waffle and a tall soft serve ice cream with caramel drizzle on a slate platter" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZTVA3pj2y51AqubyhbmgRUBczetAnHXLheFBDmc1aME8SR0CqsY7310mEbqX2n24tCZSs6eiNE9LFKSrHB_66uKBauFYoxi7Xj03LJIKjYE2DoOgGImHxFecb4FcJUdzXY4QNA71qJgglzC1T7N5KMqerUP4SrE7geo-4ah1WG_Jxf18Pcm7QVd25cGPKB2PSAewpwP0WD4-e5xzz__i5GMDsZbuuE7W_N9NzD7gDpTazb09cGCllNSfw-wIMsnvlxN0UrN1CdBE"
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-2xl z-20 border border-white/20 bg-white/10 dark:bg-black/40 backdrop-blur-2xl shadow-xl dark:shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
            >
              <p className="text-white font-headline-md mb-2 text-xl">Limited Time</p>
              <p className="text-amber-400 dark:text-primary font-title-sm">Save 15% on Combos</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-label-caps text-amber-400 dark:text-primary mb-6 block tracking-widest text-sm">THE GOLDEN PAIR</span>
            <h2 className="text-white font-display-lg text-[40px] md:text-[56px] leading-[1.1] mb-8 font-bold tracking-tight">The Ultimate Symphony of Hot & Cold.</h2>
            <p className="text-stone-300 dark:text-white/70 font-body-lg mb-10 text-lg font-light leading-relaxed">Our signature warm, crisp Liege waffle paired with velvet-soft vanilla bean crema. A contrast designed for the refined palate.</p>
            <ul className="space-y-6 mb-12">
              {[
                "Premium Madagascar Vanilla",
                "Organic Grass-fed Butter Base",
                "Artisan Hand-crafted Syrups"
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                  className="flex items-center gap-4 text-stone-200 dark:text-white/90 text-lg"
                >
                  <span className="material-symbols-outlined text-amber-400 dark:text-primary">verified</span>
                  {item}
                </motion.li>
              ))}
            </ul>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 dark:bg-primary text-stone-900 px-10 py-4 rounded-full font-bold text-lg shadow-[0_0_20px_rgba(245,158,11,0.2)] dark:shadow-[0_0_30px_rgba(230,168,23,0.15)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] dark:hover:shadow-[0_0_40px_rgba(230,168,23,0.3)] transition-all"
            >
              Order for Table
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Grid */}
      <section className="py-24">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-8"
        >
          <h2 className="font-headline-md text-4xl text-amber-600 dark:text-primary mb-4">Spotted at Waffcha</h2>
          <p className="text-stone-600 dark:text-on-surface-variant max-w-lg mx-auto text-lg">Join our community of dessert enthusiasts. Use #WaffchaIndulgence to be featured.</p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBelvJw7qVVEUo8Hzqd1f-BrHq9Z3ENzVR3FHBqLwBKviU3MP1RHO9FXK4THB6BonfxgFoL-HeOi-Q9lfWEeAR8Kbf-eDkBlCHWy2tOQozbhih7wn9rz7G3UZ-sM7fS7FySduHujUGZEF3NaAJZKCFKZw33Jktd4v_6wuDvY3ajibymgqNewDrHAtLiD1kcXqVgn-IDkAkSxy4JqOSuOrrBAYrXDPYm3zH8X0ehyPMNZuehw1SIJU0RmTs6cgvmFozi1nqdx9Nsxyw",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAsTMoRJGUgCJydxjQVTp8WSl4AztfaKjeMQDZQsjF4MeDG0c1miS1vvP9yWA9kqBe8KFhy1-raoA1J3boNRECdAo4rNWw1fkSUV-4dOk2GgbmnO17rtHpDtWMAnovRSjegxdQfIAeg2CHzYS8TVHCeV7K_zsyCS78Pxrx-a9I7Y9wh0rPAIPFTZrn1HDoSy6lmWB7EWtZY4GlD2z3dQIZyw4U2Pbl9ndW6Inzdd3dt9-xkGAeQOSp2VD3RWIcCrWtb8-jdIREI7N0",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDuv4l5rb5iGa4dUISl5ZSiscpwKb6mcImEI6aPn7t_c3Buw0LMTYPQbjsoLOeVh4KoF0Sxqf0qtb1drpKdGp6WKCqBA6j5uNZCiIY6VzQjVXUmBWqVuQhQfbpodx2waoHzQLcOWFSGUeGJC9Svige0wn8NKyr9mYFABVLxh3EsPZ_T2KPx8JdJj6b_N-RTU4VQXzuaVctRh_4B2qwtqF9eHKxNO13LxXl6jyyhnRAOBM-XKDtdNvm5-jQV_oGja9IzN6jNQ6dqj70",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDgXy9OCZtbM1U-ggsaYbYD6VchMnhq575qJBNgBHcrJZylcmc8lrzFZ8MHWQ529wDk4Jdzmm76SZDmN3HJxpwv_ITWXtt0-VsO-RHL9hMjutvzpaMEQ_6UlEmGZMOjkZMdrTeSnW3NVK2XJB_MMICRT7vhXxnGswocd52mW10Jdzzgvn4VDxK-ToFjnDraD06TFRA4JqQVwJX1DwrmzJ4u7xwKBtBa0Ac3DkJLkRQxFUFBiAurngHmm89SFs7VSqi3fO0xoAPlc9k",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuA6I7oedHxF0N-i5E43-ZrUDD6jdW_iCSxsB0g7ra7BNYbRgPRd--s3lP_W5mmeqkPWw8pevk_kEXuJp4gv9k-u9pS1HV-gaNKXASgvWBPxahc072TOIS0CSQxfUpe_43CSWOpMvHpVrLxfhGu5U2Icm2o6iSyo1YdVvBkmVss2Fyioh561_197Cv3FSV5zqnRNmtyUUrCSLqYV5mTLhKfXrAEcqnbp0zqwntSrJVhVYENEjqHFEKDailf7oBj_bVq9jQUwFB1Xgxk",
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDygJ0Usycvgb-piO4uOS9r26zuXFKeZCy4HhDsRSa6rsrQENTiL2I9smY4O54rlOv7C9QLaD3eKLND0C45W9j7ccbqWWIhY9zqqs0O6SfvHU6vBzpnA9FEd2-k_2k_HWPDC3L0N_P5gb63L9ZJ4NlSM5OsTWtu6aNeUdHgMf9G8973SE9iRZ4ZVZ7GMYlMdh-9h3FyQGqjAXZ6LyEPtX57HUyVwtPyhOFoLDu2CPljDlnLiC4fHUJjo4Tv2V4g5q4794D_F0PyHlk"
          ].map((src, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="aspect-square relative group overflow-hidden"
            >
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={`Social proof ${i}`} src={src}/>
              <div className="absolute inset-0 bg-amber-600/40 dark:bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <span className="material-symbols-outlined text-white text-4xl drop-shadow-lg">favorite</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-8 bg-amber-50/50 dark:bg-surface-container-low transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 dark:opacity-5 text-[200px] text-amber-500 dark:text-primary font-serif leading-none select-none">
            &quot;
          </div>
          <div className="mb-8 relative z-10">
            <span className="material-symbols-outlined text-amber-400 dark:text-primary text-5xl drop-shadow-md">format_quote</span>
          </div>
          <h2 className="font-display-lg text-3xl md:text-5xl mb-12 italic text-stone-800 dark:text-white leading-relaxed relative z-10">
            The texture of the waffle is unlike anything else. It&apos;s not just a dessert; it&apos;s a sensory experience that lingers long after the last bite.
          </h2>
          <div className="flex flex-col items-center relative z-10">
            <motion.img 
              whileHover={{ scale: 1.1 }}
              className="w-24 h-24 rounded-full border-4 border-white dark:border-[#2e231f] shadow-xl mb-6 object-cover" 
              alt="portrait" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyS5kynrhVt1ZMSLmW3W99e_U8MhHmMcXMcJZz_D01sCx4VripG540XeRVEcN8SZaKCxv_iV3WfxJx-4dbrkcznTpcGKgSFyrx4BQcem9CpxGpFtmy_sxU6wQ6qDRmpnJvC5GO-fgJ6k4W5KV_IRyalNZ0ofGty_KGxilnC5lV-11dCYsBqCVZPPp60X3RGKrZlo13yLhZoO6katFJ62vdVc-zzffPc-IJ73cXjo_-I-Bf6ByHOj8D9JLbtXf-1EZQuOkQLM_vLys"
            />
            <h4 className="font-title-sm text-stone-900 dark:text-white text-xl">Eleanor Vance</h4>
            <p className="text-stone-500 dark:text-on-surface-variant font-label-caps tracking-widest mt-1 mb-3">PASTRY CONNOISSEUR</p>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.span 
                  key={star} 
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  className="material-symbols-outlined text-amber-500 dark:text-primary text-lg drop-shadow-sm" 
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
