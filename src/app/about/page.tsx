import Link from "next/link";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-50" 
            alt="chef carefully crafting a gourmet waffle in a professional kitchen" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3R7x5YQ3b3_2A3bZ2QvYh5oX5t4H4_P1hL8X4X7T6L5O7O6_K_X4V9M3Z2X7_X4Q_T7X4Q9Q5Q_Q9Q9Q5Q_Q5Q9Q5Q_X7X4X4X4V9M3Z2X7_X4Q_T7X4Q9Q5Q_Q9Q9Q5Q_Q5Q9Q5Q"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-label-caps text-primary-fixed mb-unit block tracking-widest">OUR STORY</span>
          <h1 className="font-display-lg text-[48px] md:text-[72px] text-white drop-shadow-xl mb-gutter leading-tight">
            The Pursuit of Perfection.
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="py-section-gap px-8 max-w-container-max mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-label-caps text-primary mb-4 block tracking-widest">ESTABLISHED 2024</span>
            <h2 className="font-headline-md text-4xl text-on-surface mb-6">Born from a passion for the ultimate sensory experience.</h2>
            <p className="font-body-lg text-on-surface-variant mb-6 leading-relaxed">
              Waffcha began as a simple idea: that a waffle shouldn&apos;t just be a breakfast afterthought, but a canvas for culinary artistry. Our founders spent months perfecting the base recipe—a meticulously balanced batter that yields a crisp, golden exterior and a tender, cloud-like interior.
            </p>
            <p className="font-body-lg text-on-surface-variant leading-relaxed mb-8">
              Every element of our menu is curated. From organic, grass-fed butter to rare Madagascar vanilla, we source only the finest ingredients globally to ensure each bite is an indulgence.
            </p>
            <div className="flex items-center gap-6">
               <div>
                  <h4 className="font-headline-md text-3xl text-primary">10k+</h4>
                  <p className="font-label-caps text-on-surface-variant">WAFFLES SERVED</p>
               </div>
               <div className="w-[1px] h-12 bg-outline/30"></div>
               <div>
                  <h4 className="font-headline-md text-3xl text-primary">100%</h4>
                  <p className="font-label-caps text-on-surface-variant">ARTISANAL</p>
               </div>
            </div>
          </div>
          <div className="relative">
            <div className="waffle-pattern absolute -inset-8 -z-10 rounded-3xl opacity-5"></div>
            <img 
               className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/5]" 
               alt="close up of golden waffle texture" 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyS5kynrhVt1ZMSLmW3W99e_U8MhHmMcXMcJZz_D01sCx4VripG540XeRVEcN8SZaKCxv_iV3WfxJx-4dbrkcznTpcGKgSFyrx4BQcem9CpxGpFtmy_sxU6wQ6qDRmpnJvC5GO-fgJ6k4W5KV_IRyalNZ0ofGty_KGxilnC5lV-11dCYsBqCVZPPp60X3RGKrZlo13yLhZoO6katFJ62vdVc-zzffPc-IJ73cXjo_-I-Bf6ByHOj8D9JLbtXf-1EZQuOkQLM_vLys"
            />
            <div className="absolute -bottom-6 -left-6 glass-panel p-6 rounded-xl max-w-[200px]">
               <span className="material-symbols-outlined text-primary text-3xl mb-2">verified</span>
               <p className="font-title-sm text-on-surface">Commitment to Quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-900 py-section-gap relative overflow-hidden">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
         <div className="max-w-container-max mx-auto px-8 text-center relative z-10">
            <h2 className="font-headline-md text-3xl text-white mb-12">The Waffcha Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                     <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                  </div>
                  <h3 className="font-title-sm text-white text-xl mb-3">Sustainably Sourced</h3>
                  <p className="text-white/70 font-body-md">We partner with ethical farms and local producers to ensure our ingredients are as good for the planet as they are for your palate.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                     <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                  </div>
                  <h3 className="font-title-sm text-white text-xl mb-3">Handcrafted Daily</h3>
                  <p className="text-white/70 font-body-md">No shortcuts. Our dough is rested for 24 hours to develop complex flavors before being baked to order.</p>
               </div>
               <div className="p-6">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                     <span className="material-symbols-outlined text-primary text-3xl">palette</span>
                  </div>
                  <h3 className="font-title-sm text-white text-xl mb-3">Culinary Artistry</h3>
                  <p className="text-white/70 font-body-md">Every waffle is plated with precision. We believe we eat with our eyes first, making aesthetics just as vital as taste.</p>
               </div>
            </div>
         </div>
      </section>
    </>
  );
}
