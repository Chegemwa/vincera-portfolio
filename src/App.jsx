import savannaBitesImg from './assets/savanna-bites.vercel.app_.png'
import glamourStudioImg from './assets/glamour-studio-sepia.vercel.app_.png'

function App() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen text-[#F5F5F5] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-16 py-4 bg-[#0F0F0F]">
          <span className="text-[#10B981] font-bold text-xl">Vincera</span>
          <div className="hidden md:flex gap-8 text-[#9CA3AF] text-sm">
            <a href="#services" className="hover:text-[#10B981] transition">Services</a>
            <a href="#portfolio" className="hover:text-[#10B981] transition">Portfolio</a>
            <a href="#about" className="hover:text-[#10B981] transition">About</a>
            <a href="#contact" className="hover:text-[#10B981] transition">Contact</a>
          </div>
        </nav>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-16 max-w-3xl">
          I Build Websites <br /> For Kenyan Businesses
        </h1>
        <p className="text-[#9CA3AF] text-base md:text-lg mt-4 max-w-xs md:max-w-xl">
          Fast, mobile-friendly websites that help your business get found online
        </p>

        <a
          href="#contact"
          className="mt-8 bg-[#10B981] text-[#0F0F0F] font-bold px-8 py-3 rounded-lg hover:bg-[#0ea572] transition"
        >
          Let's Work Together
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What I Build</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-xl p-5 flex-1">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-base font-bold mb-1">Business Websites</h3>
            <p className="text-[#9CA3AF] text-sm">Custom websites that represent your brand professionally</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-5 flex-1">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-base font-bold mb-1">Secure & Reliable</h3>
            <p className="text-[#9CA3AF] text-sm">Built with security best practices from the ground up</p>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-5 flex-1">
            <div className="text-3xl mb-3">📱</div>
            <h3 className="text-base font-bold mb-1">Mobile Friendly</h3>
            <p className="text-[#9CA3AF] text-sm">Designed to work perfectly on any device</p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">My Work</h2>
        <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
          {/* Savanna Bites */}
          <a
            href="https://savanna-bites.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1A1A1A] rounded-xl overflow-hidden flex-1 hover:opacity-90 transition"
          >
            <img
              src={savannaBitesImg}
              alt="Savanna Bites"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-base font-bold mb-1">Savanna Bites</h3>
              <p className="text-[#9CA3AF] text-sm">Restaurant website with menu and booking page</p>
            </div>
          </a>

          {/* Glamour Studio */}
          <a
            href="https://glamour-studio-sepia.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="bg-[#1A1A1A] rounded-xl overflow-hidden flex-1 hover:opacity-90 transition"
          >
            <img
              src={glamourStudioImg}
              alt="Glamour Studio"
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-base font-bold mb-1">Glamour Studio</h3>
              <p className="text-[#9CA3AF] text-sm">Salon website with services and contact form</p>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-[#1A1A1A] rounded-xl p-8 max-w-2xl mx-auto">
          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
            I'm Victor, a web developer based in Nairobi, Kenya. I'm currently studying Information Systems at USIU-Africa and building Vincera to help Kenyan businesses establish a strong online presence. I build fast, mobile-friendly websites that are secure and easy to use.
          </p>
          <p className="text-[#10B981] font-bold text-sm mt-4">📍 Nairobi, Kenya</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Get In Touch</h2>
        <div className="bg-[#1A1A1A] rounded-xl p-8 max-w-md mx-auto flex flex-col gap-4 text-center">
          <a
            href="https://wa.me/254705938946"
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] text-[#0F0F0F] font-bold text-sm py-3 rounded-lg text-center hover:bg-[#20bd5a] transition"
          >
            💬 Chat on WhatsApp
          </a>
          <p className="text-[#9CA3AF] text-sm">📧 hello@vincera.co.ke</p>
          <p className="text-[#9CA3AF] text-sm">📍 Nairobi, Kenya</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#9CA3AF] text-xs py-8">
        © 2026 Vincera
      </footer>
    </main>
  )
}

export default App