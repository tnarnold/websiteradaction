import React from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-bitcoin/20">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <Link to="/" className="inline-flex items-center gap-2 text-bitcoin hover:text-white mb-8 font-mono text-sm group transition-colors">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    VOLTAR_HOME.INIT()
                </Link>

                <div className="flex items-center gap-4 mb-12 border-b border-slate-800 pb-8">
                    <Shield className="text-bitcoin" size={48} />
                    <h1 className="text-4xl md:text-5xl font-bold">Política de Privacidade</h1>
                </div>

                <div className="space-y-12 text-slate-300 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            1. Visão Geral
                        </h2>
                        <p>
                            A Radaction Research & Development ("Radaction", "nós") está comprometida com a proteção da sua privacidade e de seus dados pessoais.
                            Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações, em conformidade com a
                            Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - "LGPD").
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            2. Coleta de Dados
                        </h2>
                        <p className="mb-4">
                            Coletamos o mínimo necessário de informações para a prestação de nossos serviços de engenharia e consultoria. Os dados podem incluir:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-bitcoin">
                            <li>Informações de contato (Nome, E-mail, Empresa) fornecidas voluntariamente através de nossos canais de comunicação.</li>
                            <li>Dados técnicos de navegação (Logs, Endereço IP) para segurança e monitoramento de infraestrutura.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            3. Finalidade do Tratamento
                        </h2>
                        <p>
                            Utilizamos seus dados estritamente para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-bitcoin mt-4">
                            <li>Responder a solicitações de diagnóstico e propostas comerciais.</li>
                            <li>Execução de contratos de serviço (Gestão de Nós, Consultoria, Desenvolvimento).</li>
                            <li>Cumprimento de obrigações legais e regulatórias.</li>
                            <li>Defesa em processos judiciais, administrativos ou arbitrais.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            4. Compartilhamento de Dados
                        </h2>
                        <p>
                            A Radaction não vende seus dados. O compartilhamento ocorre apenas quando estritamente necessário para:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-bitcoin mt-4">
                            <li>Parceiros tecnológicos essenciais para a infraestrutura (ex: provedores de data center), sob estritos acordos de confidencialidade.</li>
                            <li>Autoridades governamentais, quando exigido por lei ou ordem judicial.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            5. Segurança
                        </h2>
                        <p>
                            Adotamos práticas de "Security by Default". Seus dados são tratados com o mesmo rigor que aplicamos à infraestrutura financeira que operamos:
                            criptografia, controle de acesso restrito (princípio do menor privilégio) e monitoramento contínuo.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            6. Seus Direitos (LGPD)
                        </h2>
                        <p className="mb-4">
                            Como titular dos dados, você tem direito a:
                        </p>
                        <ul className="list-grid grid md:grid-cols-2 gap-4">
                            {[
                                "Confirmação da existência de tratamento",
                                "Acesso aos dados",
                                "Correção de dados incompletos ou desatualizados",
                                "Anonimização, bloqueio ou eliminação",
                                "Portabilidade dos dados",
                                "Revogação do consentimento"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2 bg-slate-900 p-3 rounded border border-slate-800">
                                    <div className="w-1.5 h-1.5 bg-bitcoin rounded-full"></div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            7. Contato do Encarregado (DPO)
                        </h2>
                        <p>
                            Para exercer seus direitos ou para questões sobre esta política, entre em contato através do e-mail:
                            <br />
                            <a href="mailto:contato@radaction.com.br" className="text-bitcoin font-mono hover:underline mt-2 inline-block">contato@radaction.com.br</a>
                        </p>
                    </section>
                </div>

                <footer className="mt-20 pt-8 border-t border-slate-900 text-slate-500 text-sm text-center">
                    <p>&copy; {new Date().getFullYear()} Radaction Research & Development. Todos os direitos reservados.</p>
                </footer>
            </div>
        </div>
    );
}
