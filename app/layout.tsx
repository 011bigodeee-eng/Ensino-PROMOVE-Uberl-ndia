import type {Metadata} from 'next';
import '@fontsource-variable/inter';
import '@fontsource-variable/space-grotesk';
import './globals.css';
import {Header,Footer,Intro,Reveal} from '@/components/ui';
import {company,siteUrl} from '@/lib/data';
export const metadata:Metadata={...(siteUrl?{metadataBase:new URL(siteUrl),alternates:{canonical:siteUrl}}:{}),title:{default:'PROMOVE | Qualificação que move seu futuro',template:'%s | PROMOVE Uberlândia'},description:'Conheça os cursos profissionalizantes da PROMOVE em Uberlândia: capacitação em equipamentos industriais, máquinas pesadas e agrícolas.',openGraph:{title:'PROMOVE – Cursos Profissionalizantes',description:'Sua próxima conquista começa com qualificação.',locale:'pt_BR',type:'website',images:['/images/operador_empilhadeira.jpg']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><Intro/><Header/><main id="conteudo">{children}</main><Footer/><Reveal/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'EducationalOrganization',name:company.name,telephone:'+5534991824677',address:{'@type':'PostalAddress',streetAddress:'Rua José de Oliveira Pinto, 646, Tubalina',addressLocality:'Uberlândia',addressRegion:'MG',postalCode:company.cep,addressCountry:'BR'},sameAs:[company.instagram]})}}/></body></html>}
