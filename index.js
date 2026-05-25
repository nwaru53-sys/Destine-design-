export default function FlyerDesignerWebsite() { return ( <div className="min-h-screen bg-gradient-to-b from-blue-950 via-blue-800 to-blue-600 text-white"> {/* Hero Section */} <section className="py-24 px-6 text-center relative overflow-hidden"> <h1 className="text-6xl font-extrabold mb-4 tracking-wide">Destine Design</h1> <p className="text-lg max-w-2xl mx-auto mb-6"> Professional flyer and poster designs that help businesses grow and attract customers online and offline. </p> <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition duration-300"> Contact Me </button> </section>

{/* Services */}

  <section className="py-20 px-6 max-w-6xl mx-auto">  
    <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>  <div className="grid md:grid-cols-3 gap-6">  
  <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">  
    <h3 className="text-2xl font-semibold mb-3">Business Flyers</h3>  
    <p>  
      Modern and professional flyer designs for restaurants, shops, and businesses.  
    </p>  
  </div>  

  <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">  
    <h3 className="text-2xl font-semibold mb-3">Event Posters</h3>  
    <p>  
      Attractive posters for birthdays, concerts, weddings, and social events.  
    </p>  
  </div>  

  <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl p-6 border border-white/20">  
    <h3 className="text-2xl font-semibold mb-3">Social Media Designs</h3>  
    <p>  
      Eye-catching Instagram, Facebook, and TikTok promotional graphics.  
    </p>  
  </div>  
</div>

  </section>  {/* Portfolio */}

  <section className="py-20 px-6">  
    <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">  
  <div className="bg-white/10 border border-white/20 h-64 rounded-3xl flex items-center justify-center text-white text-xl font-semibold shadow-2xl">  
    Restaurant Flyer  
  </div>  

  <div className="bg-white/10 border border-white/20 h-64 rounded-3xl flex items-center justify-center text-white text-xl font-semibold shadow-2xl">  
    Church Program Flyer  
  </div>  

  <div className="bg-white/10 border border-white/20 h-64 rounded-3xl flex items-center justify-center text-white text-xl font-semibold shadow-2xl">  
    Business Promotion Flyer  
  </div>  
</div>

  </section>  {/* About */}

  <section className="py-20 px-6 max-w-5xl mx-auto text-center">  
    <h2 className="text-3xl font-bold mb-6">About Me</h2>  
    <p className="text-lg leading-relaxed">  
      Destine Design creates premium flyers, posters, and social media graphics for restaurants, churches, businesses, birthdays, and events. Every design is made to look modern, professional, and eye-catching.  
    </p>  
  </section>  {/* Contact */}

  <section className="bg-black/20 backdrop-blur-md text-white py-20 px-6 text-center border-t border-white/20">  
    <h2 className="text-3xl font-bold mb-6">Contact Me</h2>  
    <p className="mb-2">WhatsApp: +2347080503405</p>  
    <p className="mb-2">TikTok: @destine668</p>  
    <p className="mb-6">Phone: 08130765736</p>  <button className="bg-white text-blue-800 px-8 py-4 rounded-2xl font-bold shadow-2xl hover:scale-105 transition duration-300">  
  Hire Me  
</button>

  </section>  
</div>  ); }