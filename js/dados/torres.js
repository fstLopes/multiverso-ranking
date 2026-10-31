// Heróis (torres) com os valores da v0.87 do jogo.
// Quando o jogo mudar, atualize aqui.

const TORRES = [
	{
		id: "torre-arauto", nome: "Arauto", sprite: "img/herois/spr_Tower_Arauto.png", tag: "TIRO À DISTÂNCIA",
		historia: "Herói extremamente sério, que dispara rajadas de energia à distância. É a torre de ataque rápido e confiável da equipe.",
		stats: [["ACERTA", "HÍBRIDA (terrestres e aéreos)"], ["CUSTO", "40"], ["DANO", "6,27"], ["INTERVALO", "0,294 s"], ["ALCANCE", "97"]],
		efeito: "Cerca de 3,4 tiros por segundo. Escolhe o alvo pela prioridade (tecla A).",
		especial: ["Fúria Inabalável", "No Poder 5 os tiros perfuram e atingem um inimigo extra."],
		formas: ["Arauto Recruta", "Guardião Determinado", "Arauto Campeão", "Ícone da Justiça", "Lenda de Metrópolis Prime"],
		melhorias: ["40 (construir)", "90", "252", "630", "1.620"],
	},
	{
		id: "torre-donabala", nome: "Dona Bala", sprite: "img/herois/spr_Tower_DonaBala.png", tag: "EXPLOSÃO EM ÁREA",
		historia: "Senhora aparentemente comum que carrega armas absurdas dentro da bolsa. Cada disparo é uma explosão em volta dela.",
		stats: [["ACERTA", "TERRESTRE (só terrestres)"], ["CUSTO", "50"], ["DANO", "11,7 em área"], ["INTERVALO", "2,0 s"], ["ALCANCE", "50"]],
		efeito: "Acerta todo mundo dentro do raio, ótima onde os inimigos se juntam.",
		especial: ["Tiro de Misericórdia", "A partir do Poder 3 a explosão tem 20% de chance de atordoar por 0,6 s (+10% por nível). No Poder 5 a explosão fica 25% maior."],
		formas: ["Vovó Armada", "Bolsa de Truques", "Arsenal Ambulante", "Terror do Bairro", "Arma Secreta Definitiva"],
		melhorias: ["50 (construir)", "100", "280", "700", "1.800"],
	},
	{
		id: "torre-impacto", nome: "Doutor Impacto", sprite: "img/herois/spr_Tower_Impacto.png", tag: "CONTROLE",
		historia: "Cientista que criou um traje poderoso, mas não sabe exatamente como ele funciona. O pulso do traje desestabiliza os inimigos.",
		stats: [["ACERTA", "TERRESTRE (só terrestres)"], ["CUSTO", "100"], ["DANO", "nenhum"], ["INTERVALO", "0,9 s"], ["ALCANCE", "135"]],
		efeito: "Quem é atingido fica mais lento: 30% no Poder 1, até 45% no Poder 5. No infinito ganha +1% por nível, até 50%. Não causa dano: segura os inimigos para as outras torres.",
		especial: ["Sobrecarga do Traje", "O pulso alcança bem mais longe a cada melhoria."],
		formas: ["Estagiário do Caos", "Cientista Instável", "Traje em Sobrecarga", "Anomalia Ambulante", "Impacto Além da Compreensão"],
		melhorias: ["100 (construir)", "120", "336", "840", "2.160"],
	},
	{
		id: "torre-alien", nome: "Menino Alien", sprite: "img/herois/spr_Tower_MeninoAlien.png", tag: "INVESTIDA EM CADEIA",
		historia: "Garoto com um relógio alienígena que o transforma em outros heróis. Parado fica na forma normal, e na hora de atacar vira um alienígena.",
		stats: [["ACERTA", "TERRESTRE (Acelerado) / HÍBRIDA (Labareda)"], ["DESBLOQUEIO", "1.250 Moedas do Multiverso"], ["CUSTO", "80"], ["DANO", "9 (275 no Poder 5)"], ["INTERVALO", "1,2 s"], ["ALCANCE", "110"]],
		efeito: "Acelerado: avança numa investida e acerta até 5 inimigos, um depois do outro (cada um a até 90 px do anterior), e volta para o lugar. O intervalo conta depois que ele volta. Escolhe o primeiro alvo pela prioridade (tecla A).",
		especial: ["Labareda (Poder 5)", "Bolas de fogo de longe (alcance 50% maior) que perseguem o alvo e explodem ao acertar: todos os inimigos num raio de 48 px levam o dano e ficam queimando, com 300% do dano ao longo de 5 segundos. Troque entre Acelerado e Labareda na aba FORMA do painel de melhoria ou com a tecla R."],
		galeria: [["img/herois/spr_Tower_MeninoAlien.png", "Forma normal"], ["img/herois/spr_Tower_Acelerado.png", "Acelerado"], ["img/herois/spr_Tower_Labareda.png", "Labareda"]],
		formas: ["Garoto do Relógio", "Acelerado Novato", "Acelerado Supersônico", "Herói Alienígena", "Mestre das Formas"],
		melhorias: ["80 (construir)", "110", "308", "770", "1.980"],
	},
	{
		id: "torre-trigemeas", nome: "Trigêmeas", sprite: "img/herois/spr_Tower_Trigemeas3.png", tag: "SUPORTE",
		historia: "Três irmãs que voam juntas. A Rosinha começa sozinha, a Bonitinha chega no Poder 3 e a Fofinha no Poder 5. Elas não atacam: rendem fragmentos e deixam a equipe em volta mais forte.",
		stats: [["ACERTA", "SUPORTE (não ataca)"], ["DESBLOQUEIO", "1.250 Moedas do Multiverso"], ["CUSTO", "250"], ["DANO", "nenhum"], ["FRAGMENTOS", "+300 por onda (10.000 no Poder 5)"], ["ALCANCE DA AURA", "110"]],
		efeito: "Fragmentos a cada onda limpa: 300 (Poder 1 e 2), 1.000 (Poder 3), 3.000 (Poder 4) e 10.000 (Poder 5). O Poder máximo é 5 em qualquer modo, inclusive no infinito.",
		especial: ["Bonitinha e Fofinha", "Poder 3 e 4: as unidades dentro da aura ganham +10% de alcance. Poder 5: +50% de alcance e +40% de dano. Os buffs não somam: uma unidade na aura de várias Trigêmeas fica com o maior buff de alcance e o maior buff de dano entre elas."],
		galeria: [["img/herois/spr_Tower_Trigemeas1.png", "Poder 1-2: Rosinha"], ["img/herois/spr_Tower_Trigemeas2.png", "Poder 3-4: com a Bonitinha"], ["img/herois/spr_Tower_Trigemeas3.png", "Poder 5: com a Fofinha"]],
		formas: ["Rosinha", "Rosinha Determinada", "Rosinha e Bonitinha", "Dupla Imbatível", "Trigêmeas Completas"],
		melhorias: ["250 (construir)", "300", "1.500", "4.000", "12.000"],
	},
];
