// Heróis (torres) com os valores da v0.76 do jogo.
// Quando o jogo mudar, atualize aqui.

const TORRES = [
	{
		id: "torre-arauto", nome: "Arauto", sprite: "img/herois/spr_Tower_Arauto.png", tecla: "1", tag: "TIRO À DISTÂNCIA",
		historia: "Herói extremamente sério, que dispara rajadas de energia à distância. É a torre de ataque rápido e confiável da equipe.",
		stats: [["CUSTO", "40"], ["DANO", "6,27"], ["INTERVALO", "0,294 s"], ["ALCANCE", "97"]],
		efeito: "Cerca de 3,4 tiros por segundo. Escolhe o alvo pela prioridade (tecla A).",
		especial: ["Fúria Inabalável", "No Poder 5 os tiros perfuram e atingem um inimigo extra."],
		formas: ["Arauto Recruta", "Guardião Determinado", "Arauto Campeão", "Ícone da Justiça", "Lenda de Metrópolis Prime"],
		melhorias: ["40 (construir)", "90", "252", "630", "1.620"],
	},
	{
		id: "torre-donabala", nome: "Dona Bala", sprite: "img/herois/spr_Tower_DonaBala.png", tecla: "2", tag: "EXPLOSÃO EM ÁREA",
		historia: "Senhora aparentemente comum que carrega armas absurdas dentro da bolsa. Cada disparo é uma explosão em volta dela.",
		stats: [["CUSTO", "50"], ["DANO", "9,75 em área"], ["INTERVALO", "2,0 s"], ["ALCANCE", "50"]],
		efeito: "Acerta todo mundo dentro do raio, ótima onde os inimigos se juntam.",
		especial: ["Tiro de Misericórdia", "A partir do Poder 3 a explosão tem 20% de chance de atordoar por 0,6 s (+10% por nível). No Poder 5 a explosão fica 25% maior."],
		formas: ["Vovó Armada", "Bolsa de Truques", "Arsenal Ambulante", "Terror do Bairro", "Arma Secreta Definitiva"],
		melhorias: ["50 (construir)", "100", "280", "700", "1.800"],
	},
	{
		id: "torre-impacto", nome: "Doutor Impacto", sprite: "img/herois/spr_Tower_Impacto.png", tecla: "3", tag: "CONTROLE",
		historia: "Cientista que criou um traje poderoso, mas não sabe exatamente como ele funciona. O pulso do traje desestabiliza os inimigos.",
		stats: [["CUSTO", "100"], ["DANO", "nenhum"], ["INTERVALO", "0,9 s"], ["ALCANCE", "67,5"]],
		efeito: "Quem é atingido anda a 70% da velocidade. Não causa dano: segura os inimigos para as outras torres.",
		especial: ["Sobrecarga do Traje", "O pulso alcança bem mais longe a cada melhoria."],
		formas: ["Estagiário do Caos", "Cientista Instável", "Traje em Sobrecarga", "Anomalia Ambulante", "Impacto Além da Compreensão"],
		melhorias: ["100 (construir)", "120", "336", "840", "2.160"],
	},
];
