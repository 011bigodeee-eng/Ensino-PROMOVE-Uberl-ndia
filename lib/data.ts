export const company = { name: 'PROMOVE – Cursos Profissionalizantes', phone: '5534991824677', secondary: '5534997707080', address: 'Rua José de Oliveira Pinto, 646, Tubalina, Uberlândia – MG', cep: '38412-098', instagram: 'https://www.instagram.com/ensinopromove/' };
export const courses = [
 {slug:'operador-de-empilhadeira',name:'Operador de Empilhadeira',category:'Industrial',image:'registros/registro-21.webp',description:'Movimente sua carreira. Conheça a capacitação para operações com empilhadeiras.',topics:['Conhecimento do equipamento','Noções de segurança na operação','Movimentação e organização de cargas']},
 {slug:'operador-de-pa-carregadeira',name:'Operador de Pá Carregadeira',category:'Máquinas pesadas',image:'registros/registro-15.webp',description:'Conheça os fundamentos da operação de uma das máquinas mais versáteis do campo de trabalho.',topics:['Componentes e comandos','Inspeção do equipamento','Fundamentos de carregamento']},
 {slug:'operador-de-escavadeira-hidraulica',name:'Operador de Escavadeira Hidráulica',category:'Máquinas pesadas',image:'registros/registro-15.webp',description:'Dê o próximo passo com conhecimentos voltados às operações de escavação.',topics:['Sistemas e comandos','Planejamento da operação','Fundamentos de escavação']},
 {slug:'maquinas-pesadas-e-agricolas',name:'Máquinas Pesadas e Agrícolas',category:'Agrícola',image:'registros/registro-22.webp',description:'Explore as possibilidades de capacitação em equipamentos pesados e agrícolas.',topics:['Tipos de equipamentos','Cuidados operacionais','Aplicações no campo']},
 {slug:'operador-de-caminhao-munck',name:'Operador de Caminhão Munck',category:'Movimentação de cargas',image:'caminhao_munck.jpg',description:'Conheça a capacitação voltada à movimentação de cargas com guindaste articulado.',topics:['Componentes do equipamento','Planejamento de movimentação','Cuidados na operação']},
 {slug:'operador-de-plataforma-elevatoria',name:'Operador de Plataforma Elevatória',category:'Industrial',image:'plataforma_elevatoria.jpg',description:'Conhecimentos para quem busca se desenvolver em operações com plataformas elevatórias.',topics:['Tipos de plataformas','Inspeções e controles','Fundamentos de operação']},
];
export type Course = typeof courses[number];
export {photos} from './media';
export const faqs = [
 ['Como faço para me inscrever?','Escolha um curso e converse com a equipe pelo WhatsApp. Ela confirmará disponibilidade, documentos e as etapas da inscrição.'],
 ['Os cursos possuem aulas práticas?','A proposta inclui capacitação prática. Consulte com a equipe o formato, o local e as atividades previstas para o curso escolhido.'],
 ['Preciso ter experiência anterior?','Há capacitações voltadas a iniciantes e à atualização profissional. Os pré-requisitos específicos devem ser confirmados antes da inscrição.'],
 ['Como consultar as próximas turmas?','Entre em contato pelo WhatsApp e informe seu curso de interesse. A equipe poderá confirmar datas e disponibilidade.'],
 ['Quais são as formas de pagamento?','Consulte diretamente a equipe para conhecer valores e condições vigentes.'],
 ['Como funciona a certificação?','Consulte a equipe sobre emissão, critérios e alcance do certificado do curso escolhido.'],
 ['Onde acontecem os treinamentos?','A PROMOVE está no bairro Tubalina, em Uberlândia. Confirme o local de cada atividade prática com a equipe.'],
];
export function whatsapp(course?:string) {return `https://wa.me/${company.phone}?text=${encodeURIComponent(course ? `Olá! Vim pelo site da PROMOVE e gostaria de saber mais sobre o curso de ${course}. Poderiam me informar as próximas turmas, valores e como funciona a inscrição?` : 'Olá! Vim pelo site da PROMOVE e gostaria de conhecer os cursos e as próximas turmas.')}`;}
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined);
