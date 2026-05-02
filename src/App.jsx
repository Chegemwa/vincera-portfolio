import savannaBitesImg from "./assets/savanna-bites.vercel.app_.png";
import glamourStudioImg from "./assets/glamour-studio-sepia.vercel.app_.png";
import vinceraLogo from "./assets/vincera-logo.svg";

function App() {
  return (
    <main className="bg-[#0F0F0F] min-h-screen text-[#F5F5F5] font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-16 py-4 bg-[#0F0F0F]">
          <div className="flex items-center gap-2">
            <img src={vinceraLogo} alt="Vincera" className="h-8 w-8" />
            <span className="text-[#10B981] font-bold text-xl">Vincera</span>
          </div>
          <div className="hidden md:flex gap-8 text-[#9CA3AF] text-sm">
            <a href="#services" className="hover:text-[#10B981] transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-[#10B981] transition">
              Portfolio
            </a>
            <a href="#about" className="hover:text-[#10B981] transition">
              About
            </a>
            <a href="#contact" className="hover:text-[#10B981] transition">
              Contact
            </a>
          </div>
        </nav>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-16 max-w-3xl">
          Your Business Deserves <br /> A Great Website. <br /> I Build Them To
          Work.
        </h1>
        <p className="text-[#9CA3AF] text-base md:text-lg mt-4 max-w-xs md:max-w-xl">
          Fast, mobile-friendly websites that help your business get found
          online
        </p>

        <a
          href="#contact"
          className="mt-8 bg-[#10B981] text-[#0F0F0F] font-bold px-8 py-3 rounded-lg hover:bg-[#0ea572] transition"
        >
          Let's Work Together
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 md:px-16 py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-4">
          What I Build
        </h2>
        <p className="text-[#9CA3AF] text-center text-base md:text-lg mb-12 max-w-xl mx-auto">
          Every site I build is fast, secure, and designed to represent your
          business properly — on any device, anywhere in the world.
        </p>
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          <div className="bg-[#1A1A1A] rounded-xl p-8 flex-1 border border-[#2A2A2A] hover:border-[#10B981] transition">
            <div className="text-4xl mb-4">🌐</div>
            <h3 className="text-lg font-bold mb-2">Business Websites</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Custom websites built to represent your brand professionally.
              Clean design, clear messaging, and a layout that turns visitors
              into customers.
            </p>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-8 flex-1 border border-[#2A2A2A] hover:border-[#10B981] transition">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-lg font-bold mb-2">Secure & Reliable</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Security isn't an afterthought — it's built in from the start.
              With a background in cybersecurity, I make sure your site is
              protected and dependable.
            </p>
          </div>
          <div className="bg-[#1A1A1A] rounded-xl p-8 flex-1 border border-[#2A2A2A] hover:border-[#10B981] transition">
            <div className="text-4xl mb-4">📱</div>
            <h3 className="text-lg font-bold mb-2">Mobile First</h3>
            <p className="text-[#9CA3AF] text-sm leading-relaxed">
              Most of your customers are on their phones. Every site I build
              looks and works perfectly on any screen — mobile, tablet, or
              desktop.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          My Work
        </h2>
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
              <p className="text-[#9CA3AF] text-sm">
                Restaurant website with menu and booking page
              </p>
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
              <p className="text-[#9CA3AF] text-sm">
                Salon website with services and contact form
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          About Me
        </h2>
        <div className="bg-[#1A1A1A] rounded-xl p-8 max-w-2xl mx-auto">
          <p className="text-[#9CA3AF] text-sm md:text-base leading-relaxed">
            I'm Victor, founder of Vincera. I build fast, secure, and
            mobile-friendly websites for businesses that want a serious online
            presence. With a background in cybersecurity, I make sure every site
            I build is not just good looking but protected and dependable.
            Wherever you are, if you need a website that works, I'm the one to
            build it.
          </p>
          <p className="text-[#10B981] font-bold text-sm mt-4">
            📍 Nairobi, Kenya
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-16 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Get In Touch
        </h2>
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
  );
}

export default App;
