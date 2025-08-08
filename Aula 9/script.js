const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Pequeno Príncipe encontra um piloto perdido no deserto. Ele pede que desenhe uma ovelha. O que você faria?",
        alternativas: [
            {
                texto: "Tentaria desenhar a melhor ovelha possível.",
                afirmacao: "Você se esforça para atender aos pedidos com dedicação e carinho."
            },
            {
                texto: "Desenharia uma caixa e diria que a ovelha está dentro.",
                afirmacao: "Você entende que a imaginação é mais poderosa que a aparência."
            }
        ]
    },
    {
        enunciado: "Ao visitar diferentes planetas, o Pequeno Príncipe encontra adultos obcecados por poder, riqueza e regras. Qual sua reação?",
        alternativas: [
            {
                texto: "Refletiria sobre como os adultos esquecem o essencial.",
                afirmacao: "Você valoriza o que é invisível aos olhos: sentimentos, amizades e sonhos."
            },
            {
                texto: "Tentaria entender o ponto de vista dos adultos.",
                afirmacao: "Você busca equilíbrio entre razão e sensibilidade."
            }
        ]
    },
    {
        enunciado: "O Pequeno Príncipe conhece uma raposa que lhe ensina sobre cativar. O que você aprende com isso?",
        alternativas: [
            {
                texto: "Que cativar é criar laços e tornar alguém único para você.",
                afirmacao: "Você aprendeu que o tempo dedicado a alguém o torna especial."
            },
            {
                texto: "Que às vezes é melhor não se apegar para evitar sofrimentos.",
                afirmacao: "Você reconhece que vínculos são valiosos, mas também exigem responsabilidade emocional."
            }
        ]
    },
    {
        enunciado: "O Pequeno Príncipe cuida de sua rosa, mesmo ela sendo vaidosa e exigente. Como você agiria?",
        alternativas: [
            {
                texto: "Cuidaria dela com paciência e carinho.",
                afirmacao: "Você entende que o amor verdadeiro exige dedicação e compreensão."
            },
            {
                texto: "Deixaria a rosa e buscaria algo mais simples.",
                afirmacao: "Você acredita que o amor deve ser leve e recíproco."
            }
        ]
    },
    {
        enunciado: "Ao final da jornada, o Pequeno Príncipe retorna ao seu planeta. O que você sente?",
        alternativas: [
            {
                texto: "Tristeza pela despedida, mas gratidão pela jornada.",
                afirmacao: "Você valoriza os momentos vividos e guarda as lições no coração."
            },
            {
                texto: "Esperança de que ele encontrou paz e reencontrou sua rosa.",
                afirmacao: "Você acredita que o amor verdadeiro sempre encontra seu caminho."
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sua jornada com o Pequeno Príncipe chegou ao fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

const seletorFonte = document.getElementById("tamanho-fonte");

seletorFonte.addEventListener("change", () => {
  const valor = seletorFonte.value;
  let tamanho;

  if (valor === "pequena") {
    tamanho = "14px";
  } else if (valor === "media") {
    tamanho = "16px";
  } else if (valor === "grande") {
    tamanho = "20px";
  }

  document.querySelector(".caixa-principal").style.fontSize = tamanho;
});


mostraPergunta();
