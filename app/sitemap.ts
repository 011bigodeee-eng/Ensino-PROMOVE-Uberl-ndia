import type {MetadataRoute} from 'next';
import {courses,siteUrl} from '@/lib/data';
export default function sitemap():MetadataRoute.Sitemap {if(!siteUrl)return [];return ['', '/sobre','/cursos','/treinamentos','/galeria','/contato','/politica-de-privacidade',...courses.map(c=>`/cursos/${c.slug}`)].map(p=>({url:new URL(p,siteUrl).href,changeFrequency:'monthly' as const,priority:p===''?1:0.7}))}
