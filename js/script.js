// script.js - Lógica do Desafio dos Dados Misteriosos

// Função para inverter um número
const reverseNumber = num => {
  return parseInt(num.toString().split('').reverse().join(''));
};

// Função para validar entrada manual
const validateInput = input => {
  const numbers = input.split(',').map(n => n.trim());

  if (numbers.length !== 3) {
    return { valid: false, message: 'Digite exatamente 3 números separados por vírgula.' };
  }

  const parsedNumbers = numbers.map(n => parseInt(n));

  for (let num of parsedNumbers) {
    if (isNaN(num) || num < 1 || num > 6) {
      return { valid: false, message: 'Todos os números devem estar entre 1 e 6.' };
    }
  }

  return { valid: true, numbers: parsedNumbers };
};

// Função para processar o desafio
const processChallenge = inputNumbers => {
  // Passo 1: Números originais
  const originalNumbers = inputNumbers.slice();

  // Passo 2: Números invertidos (espelhados)
  const reversedNumbers = originalNumbers.map(num => reverseNumber(num));

  // Passo 3: Soma dos números invertidos
  const sum = reversedNumbers.reduce((acc, num) => acc + num, 0);

  // Passo 4: Verificar se soma é igual a 12
  const isSuccess = sum === 12;

  // Resultado
  const result = isSuccess ? 'Tesouro desbloqueado! 🏆✨' : 'Tente novamente! 🎯';

  return {
    original: originalNumbers,
    reversed: reversedNumbers,
    sum: sum,
    success: isSuccess,
    result: result
  };
};

// Função para exibir o resultado
const displayResult = challengeResult => {
  const calculationDetails = document.getElementById('calculationDetails');
  const finalResult = document.getElementById('finalResult');

  // Remover classe empty se existir
  calculationDetails.classList.remove('empty');

  // Montar o cálculo detalhado
  const calculation = `
    Dados originais: [${challengeResult.original.join(', ')}]
    ↓
    Dados espelhados: [${challengeResult.reversed.join(', ')}]
    ↓
    Soma: ${challengeResult.reversed.join(' + ')} = ${challengeResult.sum}
    ↓
    ${challengeResult.sum === 12 ? 'Soma = 12 ✓' : 'Soma ≠ 12 ✗'}
  `;

  calculationDetails.innerHTML = calculation.replace(/\n/g, '<br>');

  // Exibir resultado final
  finalResult.textContent = challengeResult.result;
  finalResult.className = `final-result ${challengeResult.success ? 'success' : 'failure'}`;
};

// Função para limpar os resultados
const clearResults = () => {
  const calculationDetails = document.getElementById('calculationDetails');
  const finalResult = document.getElementById('finalResult');

  calculationDetails.classList.add('empty');
  calculationDetails.innerHTML = '';
  finalResult.textContent = '';
  finalResult.className = 'final-result';
};

// Função para processar entrada manual
const processManualInput = () => {
  const manualInput = document.getElementById('manualInput');
  const inputValue = manualInput.value.trim();

  if (!inputValue) {
    alert('Por favor, digite os números dos dados.');
    return;
  }

  const validation = validateInput(inputValue);

  if (!validation.valid) {
    alert(validation.message);
    return;
  }

  // Processar o desafio
  const challengeResult = processChallenge(validation.numbers);
  displayResult(challengeResult);
};

// Função para rolar os dados automaticamente
const rollDiceChallenge = async () => {
  const rollButton = document.getElementById('rollButton');
  const resetButton = document.getElementById('resetButton');
  const manualInput = document.getElementById('manualInput');

  // Desabilitar botões durante a rolagem
  rollButton.disabled = true;
  resetButton.disabled = true;
  rollButton.classList.add('loading');

  try {
    // Limpar resultados anteriores
    clearResults();

    // Rolar os 3 dados
    const diceResults = await rollThreeDice();

    // Atualizar o input com os resultados
    manualInput.value = diceResults.join(',');

    // Processar o desafio com os resultados
    const challengeResult = processChallenge(diceResults);
    displayResult(challengeResult);
  } catch (error) {
    console.error('Erro ao rolar os dados:', error);
    alert('Erro ao rolar os dados. Tente novamente.');
  } finally {
    // Reabilitar botões
    rollButton.disabled = false;
    resetButton.disabled = false;
    rollButton.classList.remove('loading');
  }
};

// Função para resetar tudo
const resetChallenge = () => {
  const manualInput = document.getElementById('manualInput');

  // Limpar input
  manualInput.value = '';

  // Limpar resultados
  clearResults();

  // Resetar dado visual
  resetDice();
};

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  const rollButton = document.getElementById('rollButton');
  const resetButton = document.getElementById('resetButton');
  const manualInput = document.getElementById('manualInput');

  // Botão de rolar
  rollButton.addEventListener('click', rollDiceChallenge);

  // Botão de reset
  resetButton.addEventListener('click', resetChallenge);

  // Enter no input para processar entrada manual
  manualInput.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      processManualInput();
    }
  });

  // Blur no input para processar entrada manual
  manualInput.addEventListener('blur', () => {
    if (manualInput.value.trim()) {
      processManualInput();
    }
  });

  // Inicialização
  clearResults();
});
