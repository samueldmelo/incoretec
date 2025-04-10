import React, { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Zap, Notebook as Robot, Server, ChevronRight, MessageSquare, Instagram, Linkedin, Github, Phone, Mail, MapPin, MessageCircle, Cpu, Shield, Menu, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      if (!particlesRef.current) return;
      
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      
      particlesRef.current.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 2000);
    };

    const interval = setInterval(createParticle, 200);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Depoimentos', id: 'testimonials' },
    { label: 'Contato', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div ref={particlesRef} className="particles" />
      
      {/* Navigation */}
      <nav className={`nav-fixed fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#" className="text-2xl font-bold text-glow">
                Incore Tec
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Solicitar Agora
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`mobile-menu fixed inset-y-0 left-0 w-64 bg-gray-900 transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <div className="px-4 py-6 space-y-6">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="mobile-menu-item block w-full text-left text-gray-300 hover:text-white transition-colors"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
            <a
              href="#contact"
              className="mobile-menu-item block px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-center"
              style={{ animationDelay: `${navItems.length * 0.1}s` }}
            >
              Solicitar Agora
            </a>
          </div>
        </div>
      </nav>
      
      {/* Hero Section */}
      <header id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-purple-900/20" />
        
        <div className="core-container mb-8">
          <div className="core-center" />
          <div className="core-ring core-ring-1" />
          <div className="core-ring core-ring-2" />
          <div className="core-ring core-ring-3" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-glow animate-fadeInUp">
            Você acaba de entrar no núcleo da inovação
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Tecnologia sob medida, velocidade sobre-humana
          </p>
          <a href="#services" 
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 animate-float shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            Ativar projeto
            <ChevronRight className="ml-2 w-6 h-6" />
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-20 relative scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-glow">O Núcleo da Inovação</h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Somos o núcleo por trás das soluções mais rápidas e eficientes do Brasil. 
            Se é possível, a gente automatiza. Se não for, a gente cria.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow scroll-reveal">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code2 className="w-10 h-10" />,
                title: 'Sistemas Web',
                description: 'Desenvolvimento de sistemas web modernos e responsivos'
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: 'Aplicativos',
                description: 'Apps nativos e multiplataforma de alta performance'
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: 'Landing Pages 24h',
                description: 'Páginas de alta conversão por apenas R$599,99'
              },
              {
                icon: <Robot className="w-10 h-10" />,
                title: 'Automação',
                description: 'Automatize processos e aumente a produtividade'
              },
              {
                icon: <Server className="w-10 h-10" />,
                title: 'Infraestrutura',
                description: 'Suporte técnico especializado 24/7'
              },
              {
                icon: <Cpu className="w-10 h-10" />,
                title: 'Consultoria em TI',
                description: 'Orientação estratégica para sua empresa'
              }
            ].map((service, index) => (
              <div key={index} 
                className="service-card glass-effect p-8 rounded-2xl scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="service-icon text-blue-400 mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="projects" className="py-20 relative scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">Nossos Diferenciais</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Entrega em 24h',
                description: 'Sua landing page pronta para usar em tempo recorde'
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: '6 Meses de Suporte',
                description: 'Suporte técnico gratuito para sua tranquilidade'
              },
              {
                icon: <Code2 className="w-8 h-8" />,
                title: 'Preço Fixo',
                description: 'R$599,99 - sem surpresas ou custos adicionais'
              }
            ].map((feature, index) => (
              <div key={index} 
                className="glass-effect p-6 rounded-xl flex items-start space-x-4 scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-blue-400">{feature.icon}</div>
                <div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-glow">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect p-8 rounded-2xl scroll-reveal">
              <div className="flex items-start mb-6">
                <MessageSquare className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
                <p className="text-gray-300 italic text-lg">
                  "A Incore Tec superou todas as expectativas. Entrega rápida e resultado excepcional!"
                </p>
              </div>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-white font-bold">Maria Silva</p>
                  <p className="text-gray-400">CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-2xl scroll-reveal">
              <div className="flex items-start mb-6">
                <MessageSquare className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0" />
                <p className="text-gray-300 italic text-lg">
                  "Profissionalismo e tecnologia de ponta. O melhor investimento para nosso negócio!"
                </p>
              </div>
              <div className="flex items-center">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&h=100" 
                  alt="Cliente" 
                  className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <p className="text-white font-bold">João Santos</p>
                  <p className="text-gray-400">Fundador, Digital Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-effect p-8 rounded-2xl">
            <h2 className="text-4xl font-bold text-center mb-8 text-glow">Fale com o núcleo agora</h2>
            <form className="max-w-2xl mx-auto space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Sua mensagem"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 relative border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Incore Tec</h3>
              <p className="text-gray-400 mb-6">
                Transformando o futuro através da tecnologia, um projeto de cada vez.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>(11) 99999-9999</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contato@incoretec.com.br</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Serviços</h4>
              <ul className="space-y-3 text-gray-400">
                <li>Desenvolvimento Web</li>
                <li>Aplicativos Mobile</li>
                <li>Landing Pages</li>
                <li>Automação</li>
                <li>Suporte Técnico</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Receba novidades e atualizações sobre tecnologia
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 animate-float"
        >
          <MessageCircle className="w-6 h-6" />
        </a>
      </footer>
    </div>
  );
}

export default App;