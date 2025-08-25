// dice.js - Controle dos Dados

// Valores de rotação para cada face do dado (1-6)
const perFace = [
  [-0.1, 0.3, -1], // Face 1
  [-0.1, 0.6, -0.4], // Face 2
  [-0.85, -0.42, 0.73], // Face 3
  [-0.8, 0.3, -0.75], // Face 4
  [0.3, 0.45, 0.9], // Face 5
  [-0.16, 0.6, 0.18] // Face 6
];

// Define a posição do dado para uma face específica
const setVal = num => {
  const dice = document.querySelector('.dice');
  const faceRotation = perFace[num - 1];
  dice.style.transform = `rotate3d(${faceRotation[0]}, ${faceRotation[1]}, ${faceRotation[2]}, 180deg)`;
};

// Função principal para rolar 3 dados conforme especificação
const rollThreeDice = async () => {
  const resultados = []; // Array vazio

  // Loop rodando 3 vezes
  for (let i = 0; i < 3; i++) {
    // Gera diceVal de 1 a 6
    const diceVal = Math.floor(Math.random() * 6) + 1;

    // Chama setVal(diceVal) para posicionar o dado na face
    setVal(diceVal);

    // Adiciona classe .throw para animação
    const dice = document.querySelector('.dice');
    dice.classList.remove('throw');
    setTimeout(() => {
      dice.classList.add('throw');
    }, 50);

    // Aguarda 800ms para a animação
    await new Promise(r => setTimeout(r, 800));

    // Guarda o valor no array
    resultados.push(diceVal);
  }

  // Mostra todos os resultados
  console.log(`Resultados: ${resultados.join(', ')}`);

  return resultados;
};

// Função para resetar o dado
const resetDice = () => {
  const dice = document.querySelector('.dice');
  dice.classList.remove('throw', 'rolling');
  dice.style.transform = 'rotate3d(0, 0.9, 0.9, 90deg)';
};

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  resetDice();
});
