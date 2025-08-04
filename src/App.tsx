import React, { useEffect, useRef, useState } from 'react';
import { Code2, Smartphone, Zap, Notebook as Robot, Server, ChevronRight, MessageSquare,Camera,Video,
  Megaphone,
  ShoppingCart,
  Search,
  Rocket, Instagram, Linkedin, Github, Wand2,
  Users, Phone, Mail, MapPin, MessageCircle, Cpu, Shield, Menu, X } from 'lucide-react';
import emailjs from '@emailjs/browser';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const particlesRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        'service_6t3fkqk',
        'template_2vaoaod',
        formRef.current,
        '4e89U8DNXO_DC9p7i'
      );
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
      console.error('EmailJS error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
      <nav className={`nav-fixed fixed w-full transition-all duration-300 bg-gray-900 ${
    isScrolled
      ? 'py-2 min-h-[70px] z-50'
      : 'py-4 min-h-[130px] z-50'}`}>
        
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="flex items-center justify-between h-full">
            <div className="flex items-center z-10">
              <a href="#" className="flex items-center h-ful">
              <img
                src="/logo.png"
                alt="Incore Tec"
                className={`transition-all duration-300 object-contain ${
            isScrolled ? 'h-10' : 'h-[110px]'
          } w-auto mr-2`}
/>
                {/*<span className="text-2xl font-bold text-glow">In-Core Tec</span>*/}
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center z-20 space-x-8">
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
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 bg-gray-900 bg-opacity-50 backdrop-blur-sm">
            <div className="fixed inset-y-0 right-0 w-64 bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out">
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="px-4 py-6 space-y-6">
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="mobile-menu-item block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="#contact"
                  className="mobile-menu-item block px-6 py-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 text-center"
                  style={{ animationDelay: `${navItems.length * 0.1}s` }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solicitar Agora
                </a>
              </div>
            </div>
          </div>
        )}
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
      {/* Banner Central */}
<section className="relative w-full py-12 scroll-reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <img
      src="/bannerr.jpg"
      alt="Banner promocional"
      className="w-full h-auto rounded-2xl shadow-lg object-cover"
    />
  </div>
</section>

      {/* About Section */}
<section id="about" className="py-20 relative scroll-reveal">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-glow">In-Core Digital</h2>
    <p className="text-xl text-blue-200 max-w-3xl mx-auto">
      <strong> Domine os marketplaces com estratégia.</strong> 
 Acreditamos em uma verdadeira <strong> imersão digital</strong>, onde você aprende, aplica e escala.
Combinamos tecnologia, performance e automação para fazer sua marca <strong> vender mais com inteligência.</strong>
    </p>
  </div>
</section>


      {/* Services Section */}
<section id="services" className="py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-4xl font-bold text-center mb-16 text-glow scroll-reveal">
      Nossos Serviços
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
       
        {
          icon: <Camera className="w-10 h-10" />,
          title: 'Fotos Still e Lifestyle',
          description: 'Imagens profissionais com fundo branco ou ambientadas para e-commerce.'
        },
        {
          icon: <Video className="w-10 h-10" />,
          title: 'Vídeos de Produtos',
          description: 'Vídeos curtos que demonstram valor e aumentam conversão.'
        },
        {
          icon: <Megaphone className="w-10 h-10" />,
          title: 'Campanhas com Modelos',
          description: 'Ensaios com modelos para humanizar e vender mais.'
        },
           {
          icon: <Zap className="w-10 h-10" />,
          title: 'Landing Pages 24h',
          description: 'Páginas otimizadas para conversão por apenas R$599,99.'
        },
        {
          icon: <Robot className="w-10 h-10" />,
          title: 'Automação com Bot',
          description: 'Automatize processos e ganhe escala com robôs e integrações.'
        },
        {
          icon: <Cpu className="w-10 h-10" />,
          title: 'Consultoria em TI',
          description: 'Planejamento estratégico e diagnóstico de tecnologia.'
        },
        {
          icon: <ShoppingCart className="w-10 h-10" />,
          title: 'Gestão de Marketplaces',
          description: 'Da criação ao anúncio, cuidamos da sua operação no Shopee, Meli, Amazon e mais.'
        },
        {
          icon: <Search className="w-10 h-10" />,
          title: 'SEO para Produtos',
          description: 'Títulos, descrições e categorias otimizadas para ranquear e vender mais.'
        },
        {
          icon: <Rocket className="w-10 h-10" />,
          title: 'Lançamento de Produtos',
          description: 'Criação estratégica de novos produtos com identidade forte e alta conversão.'
        }
      ].map((service, index) => (
        <div 
          key={index} 
          className="service-card glass-effect p-8 rounded-2xl scroll-reveal"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="service-icon text-blue-400 mb-6">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-3">
            {service.title}
          </h3>
          <p className="text-gray-300">
            {service.description}
          </p>
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
          title: 'Entrega Acelerada',
          description: 'Landings, cadastros e automações prontos em tempo recorde.'
        },
        {
          icon: <Wand2 className="w-8 h-8" />,
          title: 'Soluções 360º',
          description: 'Tecnologia, marketing e operação — tudo num só lugar.'
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Campanhas Humanizadas',
          description: 'Modelos reais e conteúdo visual que conecta com o cliente.'
        },
        {
          icon: <Search className="w-8 h-8" />,
          title: 'SEO Focado em Vendas',
          description: 'Títulos, descrições e categorias que ranqueiam e convertem.'
        },
        {
          icon: <Rocket className="w-8 h-8" />,
          title: 'Performance em Marketplaces',
          description: 'Dominamos Shopee, Mercado Livre, Amazon e Magalu.'
        },
        {
          icon: <Shield className="w-8 h-8" />,
          title: 'Suporte Estendido',
          description: 'Acompanhamento estratégico após a entrega do projeto.'
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
                  "A In-Core Tec superou todas as expectativas. Entrega rápida e resultado excepcional!"
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
            <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Seu nome"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Seu e-mail"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Sua mensagem"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 bg-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.5)] ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'
                }`}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
              </button>
              {submitStatus === 'success' && (
                <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-400 text-center">Erro ao enviar mensagem. Tente novamente.</p>
              )}
            </form>
          </div>
        </div>
      </section>

   {/* Footer */}
<footer className="bg-gray-900 py-16 relative border-t border-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      {/* Marca */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-6">In-Core Tec</h3>
        <p className="text-gray-400 mb-6">
          Mais que uma tech, somos o núcleo por trás das soluções que aceleram marcas e vendem de verdade.
        </p>
        {/* Redes sociais */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/incoretec/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/company/incoretec" target="_blank" className="text-gray-400 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          
        </div>
      </div>

      {/* Contato */}
      <div>
        <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
        <div className="space-y-4 text-gray-400">
          <div className="flex items-center">
            <Phone className="w-5 h-5 mr-3" />
            <span>(11) 94989-1952</span>
          </div>
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            <span>contato@incoretec.com.br</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-3" />
            <span>São Paulo, SP</span>
          </div>
        </div>
      </div>

      {/* Serviços atualizados */}
  <div>
  <h4 className="text-lg font-bold text-white mb-6">Serviços</h4>
  <div className="flex flex-col md:flex-row gap-12">
    
    {/* Coluna E-commerce */}
    <div>
      <h5 className="text-white font-semibold text-sm mb-2">E-commerce</h5>
      <ul className="space-y-2 text-gray-400">
        <li>Fotos Still e Lifestyle</li>
        <li>Vídeos de Produtos</li>
        <li>SEO para Marketplaces</li>
        <li>Cadastro de Produtos</li>
        <li>Gestão de Marketplaces</li>
        <li>Campanhas com Modelos</li>
      </ul>
    </div>

    {/* Coluna Tecnologia */}
    <div>
      <h5 className="text-white font-semibold text-sm mb-2">Tecnologia</h5>
      <ul className="space-y-2 text-gray-400">
        <li>Desenvolvimento Web</li>
        <li>Aplicativos Mobile</li>
        <li>Landing Pages</li>
        <li>Automação com Bots</li>
        <li>Infraestrutura e Suporte</li>
      </ul>
    </div>

  </div>
</div>

      {/* Newsletter */}
      <div>
        <h4 className="text-lg font-bold text-white mb-6">Newsletter</h4>
        <p className="text-gray-400 mb-4">
          Receba estratégias, atualizações e insights direto do núcleo.
        </p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="user_email"
            required
            placeholder="Seu e-mail"
            className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Inscrever-se
          </button>
          {submitStatus === 'success' && (
            <p className="text-green-400 text-center">Mensagem enviada com sucesso!</p>
          )}
          {submitStatus === 'error' && (
            <p className="text-red-400 text-center">Erro ao enviar mensagem. Tente novamente.</p>
          )}
        </form>
      </div>
    </div>
  </div>
   {/* Rodapé institucional */}
  <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} In-Core Tec — CNPJ 61.878.707/0001-90. Todos os direitos reservados.
  </div>

  {/* WhatsApp Button */}
  <a
    href="https://wa.me/5511949891952?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20o%20N%C3%BAcleo."
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