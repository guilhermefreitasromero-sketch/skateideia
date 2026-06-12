# 🎨 Monalisa Interativa - Projeto Alura

Uma interpretação digital interativa da famosa obra de Leonardo da Vinci, a Monalisa. A arte é totalmente desenvolvida com Canvas HTML5 e JavaScript.

## ✨ Características

- **Arte em Canvas HTML5**: Toda a pintura é desenhada programaticamente usando JavaScript
- **Olhos Interativos**: Os olhos da Monalisa seguem o movimento do cursor do mouse em tempo real
- **Cores Originais**: Paleta de cores fiéis à obra original de Leonardo da Vinci
- **Responsivo**: Funciona perfeitamente em diferentes tamanhos de tela
- **Suporte a Touch**: Compatível com dispositivos móveis (tablets e smartphones)

## 🎯 Técnicas Utilizadas

### 1. Canvas API HTML5
A obra completa é desenhada programaticamente usando métodos Canvas:
- `ctx.arc()` - Círculos e curvas
- `ctx.ellipse()` - Elipses para formas do rosto
- `ctx.quadraticCurve()` - Curvas suaves para o sorriso
- `ctx.fillStyle()` - Preenchimento com cores RGB

### 2. Sistema de Cores
```javascript
const cores = {
    pele: '#d4a574',           // Tons naturais de pele
    peloMais: '#c98a4f',       // Pele com mais sombreamento
    sombraPele: '#a67c52',     // Sombras naturais
    olho: '#5c3d2e',           // Cor escura dos olhos
    brancoDosOlhos: '#f5f5dc', // Branco natural
    sobrancelha: '#8b6f47',    // Tons de sobrancelha
    cabelo: '#6b5344',         // Cabelo escuro
    fundo: '#9ba891',          // Fundo natural
    roupa: '#6b4423',          // Roupas em tons quentes
    roupaMais: '#4a2e1a'       // Sombra das roupas
};
```

### 3. Interatividade - Olhos que Seguem o Mouse
O código utiliza trigonometria para calcular a posição das pupilas:

```javascript
const dx = mouseX - olhoX;
const dy = mouseY - olhoY;
const distancia = Math.sqrt(dx * dx + dy * dy);
const angulo = Math.atan2(dy, dx);

// A pupila segue a direção do mouse com limite de movimento
const distanciaMaxima = raioExterior - raioPupila - 2;
const pupilaX = olhoX + Math.cos(angulo) * Math.min(distancia / 100, distanciaMaxima);
const pupilaY = olhoY + Math.sin(angulo) * Math.min(distancia / 100, distanciaMaxima);
```

### 4. Animação com RequestAnimationFrame
A renderização ocorre continuamente a 60 FPS para suavidade:
```javascript
function animar() {
    desenharMonalisa();
    requestAnimationFrame(animar);
}
animar();
```

## 📁 Estrutura do Projeto

```
├── monalisa.html     # Arquivo HTML principal
├── style.css         # Estilos CSS da página
├── monalisa.js       # Código JavaScript completo da arte
└── README.md         # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Diretamente
1. Faça o download dos arquivos
2. Coloque todos na mesma pasta
3. Abra `monalisa.html` em seu navegador

### Opção 2: Live Server (VSCode)
1. Instale a extensão "Live Server" no VSCode
2. Clique com botão direito em `monalisa.html`
3. Selecione "Open with Live Server"

### Opção 3: GitHub Pages
1. Coloque os arquivos em um repositório GitHub
2. Ative GitHub Pages nas configurações
3. Acesse o link fornecido

## 🎓 Componentes da Arte

### 1. **Fundo**
- Gradiente suave em tons de verde/cinza para profundidade

### 2. **Corpo e Roupa**
- Representação das roupas da Monalisa em tons quentes
- Camadas de sombra para dar volume

### 3. **Cabeça e Rosto**
- Base em elipse com proporções históricas
- Sombreamento natural para dimensão
- Tons de pele realistas

### 4. **Cabelo**
- Cabelos escuros em múltiplas camadas
- Efeito de volume e movimento

### 5. **Características Faciais**
- **Olhos**: Totalmente interativos, acompanham o mouse
- **Sobrancelhas**: Curvas naturais e expressivas
- **Nariz**: Detalhes sutis com linhas suaves
- **Boca**: O famoso e enigmático sorriso da Monalisa
- **Orelhas**: Proporções corretas com sombra

### 6. **Detalhes Finais**
- Brilho realista nos olhos
- Blush suave nas maçãs do rosto
- Sombras estratégicas para realismo

## 💻 Compatibilidade

- ✅ Google Chrome
- ✅ Mozilla Firefox
- ✅ Safari (macOS/iOS)
- ✅ Microsoft Edge
- ✅ Opera
- ✅ Navegadores móveis (Chrome Android, Safari iOS)

## 🎮 Interatividade

**Mova o cursor do mouse sobre o canvas** para ver os olhos da Monalisa acompanharem seus movimentos!

Função de rastreamento:
- Os olhos calculam a posição do mouse em tempo real
- As pupilas se movem em direção ao cursor
- Existe um limite máximo de movimento para realismo

## 📊 Linhas de Código

- **Total de linhas**: ~300 linhas de JavaScript
- **Funções principais**: 3 (desenharMonalisa, desenharOlho, animar)
- **Elementos desenhados**: 50+ elementos Canvas
- **Cores utilizadas**: 10 cores diferentes

## 🌟 Aprendizados

Este projeto demonstra:
- ✅ Uso avançado da Canvas API
- ✅ Cálculos de geometria e trigonometria
- ✅ Animação com `requestAnimationFrame`
- ✅ Event listeners para interatividade
- ✅ Criação de sistemas de cores
- ✅ Responsive design com CSS Grid/Flexbox
- ✅ Suporte a dispositivos touch

## 📚 Conceitos JavaScript Utilizados

- Event Listeners (mousemove, touchmove)
- Math functions (Math.PI, Math.sqrt, Math.cos, Math.sin, Math.atan2)
- Canvas context methods (fillStyle, beginPath, arc, ellipse, etc)
- Arrow functions
- Template literals
- Object literals

## 📝 Licença

Projeto educacional criado para o curso de Arte Interativa da Alura.
Inspirado na obra original de Leonardo da Vinci - Monalisa (1503-1519)

## 👨‍💻 Autor

Desenvolvido por: Guilherme Freitas Romero

---

**Divirta-se explorando a arte interativa! Mova o mouse e veja a Monalisa te seguir com o olhar!** 🖱️✨