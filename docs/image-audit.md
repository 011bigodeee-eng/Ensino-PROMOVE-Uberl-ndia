# Auditoria de imagens — reformulação visual

## Diagnóstico

As nove referências fornecidas no ZIP têm 506 × 335 ou 506 × 336 pixels. O layout anterior ampliava essas imagens em Hero, treinamento e CTA, aplicando saturação reduzida e gradientes sobre quase toda a superfície. A combinação diminuía a nitidez e escondia os equipamentos.

## Destaques substituídos

| Arquivo | Origem | Resolução | Uso | Enquadramento |
| --- | --- | --- | --- | --- |
| hero-industrial.png | Ilustração gerada por IA para esta reformulação | 1536 × 1024 | Hero | Painel de 55%, proporção 3:2, `contain` preservando operador e equipamento |
| pratica-industrial.png | Ilustração gerada por IA para esta reformulação | 1536 × 1024 | Treinamentos | Painel de 55%, proporção 3:2, `contain` preservando a empilhadeira completa |
| carreira-industrial.png | Ilustração gerada por IA para esta reformulação | 1536 × 1024 | CTA final | Painel de 50%, proporção 3:2, `contain` preservando braço, caçamba e esteiras |

Os arquivos são novos, sem interpolação das miniaturas antigas. Não representam profissionais, instalações ou treinamentos reais da PROMOVE. A indicação de imagem ilustrativa gerada por IA aparece em cada destaque. Não há filtros de saturação, blur nem overlay azul cobrindo os equipamentos. O gradiente se limita à junção dos painéis (20 px no desktop).

## Referências mantidas

| Referência | Dimensões | Tratamento |
| --- | --- | --- |
| operador_empilhadeira.jpg | 506 × 335 | Card do catálogo; máximo de 506 CSS px |
| pa_carregadeira.jpg | 506 × 336 | Cards e galeria; máximo de 506 CSS px |
| escavadeira.jpg | 506 × 335 | Card e galeria; máximo de 506 CSS px |
| caminhao_munck.jpg | 506 × 336 | Card e galeria; máximo de 506 CSS px |
| plataforma_elevatoria.jpg | 506 × 335 | Card e galeria; máximo de 506 CSS px |
| sala_treinamento.jpg | 506 × 335 | Apresentação e galeria; máximo de 506 CSS px |
| treinamento_empilhadeira.jpg | 506 × 336 | Galeria; máximo de 506 CSS px |
| fachada_promove.jpg | 506 × 335 | Arquivo de referência, não publicado na interface |
| certificado_demonstrativo.jpg | 506 × 335 | Arquivo de referência, não apresentado como credencial |

Detalhes de curso e lightbox das referências também ficam limitados a 506 CSS px. A resolução dos arquivos antigos não oferece detalhe extra em telas de alta densidade; substituir por originais reais de maior resolução continua recomendado quando forem fornecidos. Não há tentativa de recuperar detalhe por upscale artificial.

## Otimização

Next Image fornece AVIF ou WebP conforme suporte do navegador. Qualidade 90 nos três destaques e 75 nas referências menores. `sizes` corresponde às colunas reais. Hero tem carregamento prioritário; demais fotos usam lazy loading. Next Image preserva proporção e reserva o espaço para evitar mudança de layout. Tamanhos responsivos configurados até 1536 px; nenhum placeholder de blur. Fontes locais.

Na revisão visual é necessário rolar até as imagens lazy e aguardar `img.decode()` antes da captura; a primeira geração de AVIF pode levar alguns segundos. Os testes verificam a decodificação, não apenas a existência da tag de imagem.
