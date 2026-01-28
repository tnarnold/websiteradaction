import React from 'react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-bitcoin/20">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <Link to="/" className="inline-flex items-center gap-2 text-bitcoin hover:text-white mb-8 font-mono text-sm group transition-colors">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    VOLTAR_HOME.INIT()
                </Link>

                <div className="flex items-center gap-4 mb-12 border-b border-slate-800 pb-8">
                    <FileText className="text-bitcoin" size={48} />
                    <h1 className="text-4xl md:text-5xl font-bold">Termos de Uso</h1>
                </div>

                <div className="space-y-12 text-slate-300 font-light leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            1. Aceitação
                        </h2>
                        <p>
                            Ao acessar e utilizar o site e os serviços da Radaction Research & Development ("Radaction"), você concorda em cumprir estes Termos de Uso,
                            todas as leis e regulamentos aplicáveis, e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.
                            Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            2. Uso de Licença
                        </h2>
                        <p className="mb-4">
                            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Radaction apenas para
                            visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 marker:text-bitcoin">
                            <li>Modificar ou copiar os materiais;</li>
                            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
                            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da Radaction;</li>
                            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
                            <li>Transferir os materiais para outra pessoa ou "espelhar" os materiais em qualquer outro servidor.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            3. Isenção de Responsabilidade
                        </h2>
                        <p>
                            Os serviços e materiais da Radaction são fornecidos "como estão". A Radaction não oferece garantias, expressas ou implícitas, e, por este meio,
                            isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização,
                            adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
                        </p>
                        <p className="mt-4">
                            Além disso, a Radaction não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ou à confiabilidade
                            do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            4. Limitações
                        </h2>
                        <p>
                            Em nenhum caso a Radaction ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados
                            ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais da Radaction,
                            mesmo que a Radaction ou um representante autorizado da Radaction tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            5. Modificações
                        </h2>
                        <p>
                            A Radaction pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar
                            vinculado à versão atual desses termos de serviço.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 bg-bitcoin rounded-full"></span>
                            6. Lei Aplicável
                        </h2>
                        <p>
                            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente
                            à jurisdição exclusiva dos tribunais nesse estado ou localidade.
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
