# 🎲 As Crônicas de CodeLand: O Jogo dos Dados Misteriosos

## Descrição

Bem-vindo, bravo programador! Em um reino distante chamado CodeLand, há rumores de um misterioso jogo de dados que desbloqueia tesouros secretos. Seu desafio é ajudar o mago Gandalfoo a lançar três dados mágicos. 
Os dados são especiais, pois possuem um feitiço que faz com que um número seja sempre mostrado ao contrário! ⚔️✨

Para vencer o jogo e conquistar os tesouros, você deve:

Lançar três dados, cada um com valores entre 1 e 6.

Inverter o número de cada dado (exemplo: 3 continua 3, mas neste desafio, 12 vira 21 - imagine, são dados mágicos!).

Somar os valores invertidos.

Se a soma for igual ao número mágico 12, você desbloqueia o tesouro! Caso contrário, você precisa tentar novamente.

🚀 Entrada: Um vetor de três números representando os resultados dos dados antes do feitiço do espelho ser aplicado.

🔮 Saída Esperada: "Tesouro desbloqueado!" se a soma dos números espelhados for 12; caso contrário, "Tente novamente!".

## Exemplos:

Entrada: [5, 2, 5]
Saída: Tesouro desbloqueado!
Entrada: [3, 3, 3]

Saída: Tente novamente!

## Recursos do Jogo

Rolagem de Dados: Jogue três dados mágicos e veja os resultados aparecerem em uma interface encantadora.
Lógica de Desafio: Use os resultados dos dados para resolver um desafio de soma e descubra se o tesouro está desbloqueado.
Design Responsivo: O layout se adapta a diferentes tamanhos de tela, proporcionando uma experiência amigável em dispositivos móveis e desktops.
Animações Encantadoras: Um sistema de animações que traz vida aos dados.

## Tecnologias Utilizadas
HTML: Estrutura básica da aplicação.
CSS/SCSS: Estilos e animações para uma aparência mágica e envolvente.
JavaScript: Lógica da aplicação, manipulação do DOM e interatividade.
Node.js: Para configurar dependências e servir o jogo localmente.


##Agradecimentos

Um agradecimento especial a @jico pelo incrível projeto 3D Dice, que foi uma inspiração fundamental para a implementação deste jogo!
Link: https://codepen.io/jico/pen/wvMpgog

Estrutura do Projeto
plaintext
Copiar

/
├── index.html          # Página principal do jogo
├── package.json        # Configurações do projeto e scripts
├── css/                # Arquivos CSS compilados
│   ├── dice.css        # Estilos relacionados aos dados
│   └── styles.css      # Estilos gerais do layout
├── js/                 # Scripts JavaScript
│   ├── dice.js         # Lógica de controle dos dados
│   └── script.js       # Lógica do desafio
├── scss/               # Arquivos SCSS
│   ├── dice.scss       # Estilos dos dados
│   └── styles.scss     # Estilos gerais
Contribuição
Sinta-se à vontade para contribuir! Se encontrar bugs ou tiver ideias, abra uma issue ou envie um pull request.

Licença
Este projeto está licenciado sob a MIT License.

Prepare-se para rolar os dados e desvendar o mistério! Boa sorte, aventureiro! ✨

