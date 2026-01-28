import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Network,
    Cpu,
    Shield,
    Globe,
    ArrowRight,
    Zap,
    Layers,
    Lock,
    Menu,
    X,
    ChevronDown,
    ChevronUp,
    Terminal
} from 'lucide-react';

const content = {
    pt: {
        nav: {
            vision: 'Visão',
            thesis: 'Tese',
            method: 'Método',
            services: 'Serviços',
            security: 'Segurança',
            faq: 'FAQ',
            contact: 'Contato',
            cta: 'Falar com a Radaction'
        },
        hero: {
            headline: 'A Base da Nova Economia Autônoma.',
            subheadline: 'Roteamento, automação e descentralização — construindo trilhos financeiros para sistemas soberanos.',
            ctaPrimary: 'Nossa Visão',
            ctaSecondary: 'Ver Serviços',
            trust: 'Pesquisa aplicada. Engenharia pragmática. Segurança por padrão.'
        },
        thesis: {
            title: 'A Tese',
            text: 'Dinheiro virou informação. Protocolos viraram soberania. Bitcoin liquida; Lightning circula. A Radaction projeta e opera infraestrutura para que valor se mova como pacotes: rápido, verificável e sem pontos únicos de falha.'
        },
        method: {
            title: 'O Método R.A.D.',
            r_title: 'Roteamento',
            r_desc: 'Engenharia de tráfego de dados e valor. Latência, resiliência e caminhos de liquidez.',
            a_title: 'Automação',
            a_desc: 'Agentes, orquestração e rotinas auditáveis para sistemas M2M e operações 24/7.',
            d_title: 'Descentralização',
            d_desc: 'Soberania digital e arquitetura anti-frágil: sem censura, sem dependência, sem SPOF.'
        },
        services: {
            title: 'Serviços',
            s1_title: 'Gestão de Nós Lightning',
            s1_desc: 'Operação, canais, liquidez, observabilidade e hardening.',
            s2_title: 'Consultoria de Segurança Criptográfica',
            s2_desc: 'Modelo de ameaça, chaves, políticas e auditoria.',
            s3_title: 'Desenvolvimento de Redes Mesh',
            s3_desc: 'Conectividade resiliente para cenários adversos.',
            s4_title: 'Protocolos de Pagamento Autônomo',
            s4_desc: 'Integração LN, automação de cobranças e fluxos M2M.'
        },
        security: {
            title: 'Segurança por padrão',
            b1: 'Princípio do menor privilégio',
            b2: 'Observabilidade e auditoria',
            b3: 'Defesa em camadas'
        },
        faq: {
            title: 'Perguntas Frequentes',
            q1: 'Vocês vendem um produto ou serviço?',
            a1: 'Atuamos como R&D + engenharia: consultoria, implementação e operação.',
            q2: 'Isso é só para Bitcoin?',
            a2: 'Bitcoin/LN é o núcleo, mas a engenharia cobre redes, automação e segurança.',
            q3: 'Trabalham com empresas e indivíduos?',
            a3: 'Sim, de builders a operações críticas.',
            q4: 'Como começo?',
            a4: 'Envie contexto e objetivo; retornamos com um plano de diagnóstico.'
        },
        contact: {
            title: 'Vamos projetar seus trilhos financeiros.',
            cta: 'Solicitar diagnóstico'
        },
        footer: {
            tagline: 'Radaction Research & Development. Protegendo a internet livre.',
            privacy: 'Privacidade',
            terms: 'Termos'
        }
    },
    en: {
        nav: {
            vision: 'Vision',
            thesis: 'Thesis',
            method: 'Method',
            services: 'Services',
            security: 'Security',
            faq: 'FAQ',
            contact: 'Contact',
            cta: 'Talk to Radaction'
        },
        hero: {
            headline: 'The Foundation of the Autonomous Economy.',
            subheadline: 'Routing, automation, and decentralization — building financial rails for sovereign systems.',
            ctaPrimary: 'Our Vision',
            ctaSecondary: 'View Services',
            trust: 'Applied research. Pragmatic engineering. Security by default.'
        },
        thesis: {
            title: 'The Thesis',
            text: 'Money became information. Protocols became sovereignty. Bitcoin settles; Lightning circulates. Radaction designs and operates infrastructure so value moves like packets: fast, verifiable, and without single points of failure.'
        },
        method: {
            title: 'The R.A.D. Method',
            r_title: 'Routing',
            r_desc: 'Traffic engineering for data and value. Latency, resilience, and liquidity pathing.',
            a_title: 'Automation',
            a_desc: 'Agents, orchestration, and auditable workflows for M2M systems and 24/7 operations.',
            d_title: 'Decentralization',
            d_desc: 'Digital sovereignty and antifragile architecture: no censorship, no dependency, no SPOF.'
        },
        services: {
            title: 'Services',
            s1_title: 'Lightning Node Management',
            s1_desc: 'Operations, channels, liquidity, observability, hardening.',
            s2_title: 'Cryptographic Security Consulting',
            s2_desc: 'Threat modeling, keys, policies, audits.',
            s3_title: 'Mesh Network Development',
            s3_desc: 'Resilient connectivity for hostile environments.',
            s4_title: 'Autonomous Payment Protocols',
            s4_desc: 'LN integration, automated billing, M2M flows.'
        },
        security: {
            title: 'Security by Default',
            b1: 'Least privilege by design',
            b2: 'Observability & auditability',
            b3: 'Defense in depth'
        },
        faq: {
            title: 'FAQ',
            q1: 'Do you sell a product or service?',
            a1: 'We act as R&D + engineering: consulting, implementation, and operations.',
            q2: 'Is this just for Bitcoin?',
            a2: 'Bitcoin/LN is the core, but engineering covers networks, automation, and security.',
            q3: 'Do you work with companies and individuals?',
            a3: 'Yes, from builders to critical operations.',
            q4: 'How do I start?',
            a4: 'Send context and objective; we return with a diagnostic plan.'
        },
        contact: {
            title: 'Let’s design your financial rails.',
            cta: 'Request a diagnostic'
        },
        footer: {
            tagline: 'Radaction Research & Development. Protecting the free internet.',
            privacy: 'Privacy',
            terms: 'Terms'
        }
    }
};

const Section = ({ id, children, className = '' }) => (
    <section id={id} className={`py-20 px-6 md:px-12 max-w-7xl mx-auto ${className}`}>
        {children}
    </section>
);

const Card = ({ title, icon: Icon, children }) => (
    <div className="bg-slate-900/50 border border-slate-800 p-6 md:p-8 hover:border-bitcoin/40 transition-colors duration-300 group">
        <div className="mb-4 text-bitcoin group-hover:text-bitcoin-hover transition-colors">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-mono font-bold text-slate-100 mb-2">{title}</h3>
        <p className="text-slate-400 leading-relaxed font-light">{children}</p>
    </div>
);

const AccordionItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-slate-800">
            <button
                className="w-full py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="text-slate-200 font-medium hover:text-bitcoin transition-colors">{question}</span>
                {isOpen ? <ChevronUp size={20} className="text-slate-500" /> : <ChevronDown size={20} className="text-slate-500" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-slate-400 font-light">{answer}</p>
            </div>
        </div>
    );
};

import logo from '../assets/logo.png';
import heroBg from '../assets/hero-bg.png';

export default function RadactionLanding() {
    const [lang, setLang] = useState('pt');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const t = content[lang];

    const toggleLang = () => setLang(l => l === 'pt' ? 'en' : 'pt');

    const scrollTo = (id) => {
        setIsMenuOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView();
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-bitcoin/20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSIjMWUyOTNiIiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPgo8L3N2Zz4=')]">

            {/* Header */}
            <header className="fixed top-0 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
                        <img src={logo} alt="Radaction Logo" className="w-8 h-8 object-contain" />
                        <span className="text-xl font-bold tracking-tight">RADACTION</span>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
                        {['vision', 'thesis', 'method', 'services', 'security'].map(key => (
                            <button
                                key={key}
                                onClick={() => scrollTo(key)}
                                className="hover:text-bitcoin transition-colors uppercase tracking-wider text-xs"
                            >
                                {t.nav[key]}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center gap-6">
                        <button
                            onClick={toggleLang}
                            className="text-xs font-mono border border-slate-800 px-3 py-1 rounded hover:border-bitcoin/50 transition-colors flex items-center gap-2 text-slate-400"
                            aria-label="Switch Language"
                        >
                            <Globe size={14} />
                            <span className={lang === 'pt' ? 'text-bitcoin font-bold' : ''}>PT</span>
                            <span className="text-slate-700">/</span>
                            <span className={lang === 'en' ? 'text-bitcoin font-bold' : ''}>EN</span>
                        </button>
                        <a href="https://wa.me/5551989353131" target="_blank" rel="noopener noreferrer" className="bg-slate-100 text-slate-950 px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-bitcoin transition-colors rounded-sm">
                            {t.nav.cta}
                        </a>
                    </div>

                    <button className="md:hidden text-slate-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-slate-950 border-b border-slate-800 absolute w-full p-6 flex flex-col gap-4">
                        {['vision', 'thesis', 'method', 'services', 'security', 'faq', 'contact'].map(key => (
                            <button
                                key={key}
                                onClick={() => scrollTo(key)}
                                className="text-left py-2 text-slate-300 hover:text-bitcoin uppercase text-sm font-bold border-b border-slate-900"
                            >
                                {t.nav[key]}
                            </button>
                        ))}
                        <div className="flex justify-between items-center pt-4">
                            <button onClick={toggleLang} className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                                <Globe size={16} />
                                {lang.toUpperCase()}
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Hero */}
            <section
                id="vision"
                className="relative pt-24 pb-12 min-h-[60vh] flex flex-col justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="absolute inset-0 bg-slate-950/80 pointer-events-none"></div>
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-bitcoin/20 bg-bitcoin/5 text-bitcoin text-xs font-mono mb-4 animate-fade-in-up">
                            <span className="w-2 h-2 rounded-full bg-bitcoin animate-pulse"></span>
                            SYS.READY
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-500">
                            {t.hero.headline}
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 font-light mb-8 max-w-2xl leading-relaxed">
                            {t.hero.subheadline}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button onClick={() => scrollTo('thesis')} className="bg-bitcoin hover:bg-bitcoin-hover text-slate-950 font-bold px-8 py-3 rounded-sm flex items-center justify-center gap-2 transition-transform active:scale-95">
                                {t.hero.ctaPrimary} <ArrowRight size={20} />
                            </button>
                            <button onClick={() => scrollTo('services')} className="border border-slate-700 hover:border-slate-500 text-slate-300 px-8 py-3 rounded-sm font-medium transition-colors">
                                {t.hero.ctaSecondary}
                            </button>
                        </div>
                        <div className="border-t border-slate-900 pt-6 mt-auto">
                            <p className="text-sm font-mono text-slate-500 flex items-center gap-2">
                                <Terminal size={14} />
                                {t.hero.trust}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thesis */}
            <section id="thesis" className="py-24 bg-slate-900/30 border-y border-slate-800/50">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-bitcoin font-mono text-sm uppercase tracking-[0.2em] mb-6">{t.thesis.title}</h2>
                    <p className="text-3xl md:text-5xl font-light leading-snug text-slate-200">
                        "{t.thesis.text}"
                    </p>
                </div>
            </section>

            {/* Method */}
            <Section id="method" className="py-24">
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">{t.method.title}</h2>
                    <div className="w-12 h-1 bg-bitcoin"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    <Card title={`O1. ${t.method.r_title}`} icon={Network}>{t.method.r_desc}</Card>
                    <Card title={`O2. ${t.method.a_title}`} icon={Cpu}>{t.method.a_desc}</Card>
                    <Card title={`O3. ${t.method.d_title}`} icon={Layers}>{t.method.d_desc}</Card>
                </div>
            </Section>

            {/* Services */}
            <Section id="services" className="bg-slate-900/20">
                <div className="mb-16 md:flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-bold mb-4">{t.services.title}</h2>
                        <div className="w-12 h-1 bg-bitcoin mb-4 md:mb-0"></div>
                    </div>
                    <button className="text-bitcoin hover:text-white font-mono text-sm flex items-center gap-2" onClick={() => window.location.href = "mailto:contato@radaction.com.br"}>
                        CONTACT_NET.INIT() <ArrowRight size={14} />
                    </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map(idx => (
                        <div key={idx} className="p-8 border border-slate-800 hover:bg-slate-900 transition-colors group">
                            <h3 className="text-xl font-bold text-slate-200 mb-3 group-hover:text-bitcoin transition-colors">
                                {t.services[`s${idx}_title`]}
                            </h3>
                            <p className="text-slate-400 font-light">
                                {t.services[`s${idx}_desc`]}
                            </p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Security */}
            <Section id="security">
                <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Shield size={200} />
                    </div>
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                            <Shield className="text-bitcoin" /> {t.security.title}
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[t.security.b1, t.security.b2, t.security.b3].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-bitcoin rounded-full mt-2"></div>
                                    <p className="text-slate-300 font-medium">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section id="faq" className="max-w-3xl">
                <h2 className="text-2xl font-bold mb-8 text-center">{t.faq.title}</h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map(i => (
                        <AccordionItem key={i} question={t.faq[`q${i}`]} answer={t.faq[`a${i}`]} />
                    ))}
                </div>
            </Section>

            {/* Contact */}
            <section id="contact" className="py-24 text-center px-6">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">{t.contact.title}</h2>
                    <a href="mailto:contato@radaction.com.br?subject=Radaction%20Research%20-%20Diagnostic%20Request" className="inline-block bg-bitcoin hover:bg-bitcoin-hover text-slate-950 font-bold px-10 py-5 rounded-sm text-lg transition-transform hover:-translate-y-1 shadow-lg shadow-bitcoin/20">
                        {t.contact.cta}
                    </a>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-slate-900 py-12 text-center text-slate-500 text-sm">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>{t.footer.tagline}</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-slate-300 cursor-pointer">{t.footer.privacy}</Link>
                        <Link to="/terms" className="hover:text-slate-300 cursor-pointer">{t.footer.terms}</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
