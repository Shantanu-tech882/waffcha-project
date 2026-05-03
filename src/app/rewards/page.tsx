import Link from "next/link";

export default function Rewards() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover brightness-50" 
            alt="gold textured background with luxury feel" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3R7x5YQ3b3_2A3bZ2QvYh5oX5t4H4_P1hL8X4X7T6L5O7O6_K_X4V9M3Z2X7_X4Q_T7X4Q9Q5Q_Q9Q9Q5Q_Q5Q9Q5Q_X7X4X4X4V9M3Z2X7_X4Q_T7X4Q9Q5Q_Q9Q9Q5Q_Q5Q9Q5Q"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-background"></div>
        </div>
        <div className="relative z-10 text-center px-margin-mobile">
          <span className="font-label-caps text-primary-fixed mb-unit block tracking-widest">LOYALTY PROGRAM</span>
          <h1 className="font-display-lg text-[48px] md:text-[72px] text-white drop-shadow-xl mb-gutter leading-tight">
            The Golden Club.
          </h1>
          <p className="font-body-lg text-white/90 max-w-xl mx-auto mb-8">
            Earn rewards with every indulgence. Unlock exclusive tiers, secret menu items, and complimentary treats.
          </p>
          <button className="bg-primary text-white px-10 py-4 rounded-full font-title-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            Join the Club
          </button>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-section-gap px-8 max-w-container-max mx-auto text-center">
        <h2 className="font-headline-md text-3xl text-on-surface mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-outline/20 -z-10"></div>
           
           <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-6 border-4 border-background shadow-md">
                 <span className="material-symbols-outlined text-primary text-4xl">person_add</span>
              </div>
              <h3 className="font-title-sm text-xl mb-2 text-on-surface">1. Sign Up</h3>
              <p className="text-on-surface-variant font-body-md">Join for free and receive 50 bonus points instantly.</p>
           </div>
           
           <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-6 border-4 border-background shadow-md">
                 <span className="material-symbols-outlined text-primary text-4xl">monetization_on</span>
              </div>
              <h3 className="font-title-sm text-xl mb-2 text-on-surface">2. Earn Points</h3>
              <p className="text-on-surface-variant font-body-md">Earn 10 points for every ₹100 spent at any Waffcha location or online.</p>
           </div>
           
           <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-surface-container-high flex items-center justify-center mb-6 border-4 border-background shadow-md">
                 <span className="material-symbols-outlined text-primary text-4xl">redeem</span>
              </div>
              <h3 className="font-title-sm text-xl mb-2 text-on-surface">3. Get Rewarded</h3>
              <p className="text-on-surface-variant font-body-md">Redeem your points for free waffles, toppings, and merchandise.</p>
           </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="bg-surface-container-low py-section-gap px-8 relative overflow-hidden">
         <div className="waffle-pattern absolute inset-0 opacity-10"></div>
         <div className="max-w-container-max mx-auto relative z-10">
            <h2 className="font-headline-md text-3xl text-center text-on-surface mb-12">Membership Tiers</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
               
               {/* Bronze Tier */}
               <div className="bg-white p-8 rounded-2xl shadow-sm border border-outline/10 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="font-headline-md text-2xl text-stone-600">Bronze</h3>
                     <span className="material-symbols-outlined text-stone-400 text-3xl">star</span>
                  </div>
                  <p className="font-label-caps text-stone-500 mb-6 pb-6 border-b border-outline/10">0 - 499 POINTS</p>
                  <ul className="space-y-4 font-body-md text-on-surface-variant mb-8">
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> 10 pts per ₹100 spent</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> Free birthday waffle</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> Digital punch card</li>
                  </ul>
               </div>

               {/* Silver Tier */}
               <div className="bg-gradient-to-b from-stone-100 to-stone-200 p-8 rounded-2xl shadow-md border border-stone-300 hover:shadow-xl transition-shadow transform md:-translate-y-4">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="font-headline-md text-2xl text-stone-700">Silver</h3>
                     <span className="material-symbols-outlined text-stone-500 text-3xl">stars</span>
                  </div>
                  <p className="font-label-caps text-stone-600 mb-6 pb-6 border-b border-stone-300">500 - 1,999 POINTS</p>
                  <ul className="space-y-4 font-body-md text-stone-700 mb-8">
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> 12 pts per ₹100 spent</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> Free birthday waffle</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> 1 free premium topping/visit</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm mt-1">check</span> Early access to new flavors</li>
                  </ul>
               </div>

               {/* Gold Tier */}
               <div className="bg-gradient-to-br from-amber-100 via-amber-200 to-yellow-500 p-8 rounded-2xl shadow-lg border border-amber-300 hover:shadow-xl transition-shadow">
                  <div className="flex justify-between items-center mb-6">
                     <h3 className="font-headline-md text-2xl text-amber-900">Gold</h3>
                     <span className="material-symbols-outlined text-amber-700 text-3xl">workspace_premium</span>
                  </div>
                  <p className="font-label-caps text-amber-800 mb-6 pb-6 border-b border-amber-300/50">2,000+ POINTS</p>
                  <ul className="space-y-4 font-body-md text-amber-900 mb-8">
                     <li className="flex gap-3"><span className="material-symbols-outlined text-amber-700 text-sm mt-1">check</span> 15 pts per ₹100 spent</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-amber-700 text-sm mt-1">check</span> Free birthday combo</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-amber-700 text-sm mt-1">check</span> Unlimited free toppings</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-amber-700 text-sm mt-1">check</span> Secret menu access</li>
                     <li className="flex gap-3"><span className="material-symbols-outlined text-amber-700 text-sm mt-1">check</span> Priority line skip</li>
                  </ul>
               </div>

            </div>
         </div>
      </section>

    </>
  );
}
