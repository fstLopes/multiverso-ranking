// Inimigos com os valores da v0.79 do jogo.
// Quando o jogo mudar, atualize aqui.

const INIMIGOS = [
	{
		id: "inimigo-explicador", nome: "Vilão Explicador", sprite: "img/inimigos/spr_Enemy_Explicador.png", tag: "COMUM",
		historia: "Não resiste a explicar o plano maligno, nem no meio de uma invasão.",
		stats: [["APARECE", "2 em cada 6"], ["VIDA", "normal"], ["VELOCIDADE", "normal"], ["RECOMPENSA", "1,2x"]],
		habilidade: ["Monólogo", "Para uma vez no caminho por 2 segundos para discursar, e recebe 50% a mais de dano enquanto fala."],
		dica: "Concentre o fogo quando ele parar: é a hora em que ele mais apanha.",
	},
	{
		id: "inimigo-clone", nome: "Clone Defeituoso", sprite: "img/inimigos/spr_Enemy_Clone.png", tag: "COMUM",
		historia: "Copiou os poderes de alguém, mas saiu tudo errado.",
		stats: [["APARECE", "3 em cada 6"], ["VIDA", "0,5x a 1,8x"], ["VELOCIDADE", "0,6x a 1,6x"], ["RECOMPENSA", "0,9x"]],
		habilidade: ["Imprevisível", "Cada clone sai diferente: alguns são frágeis e rápidos, outros são tanques lentos."],
		dica: "O Doutor Impacto segura os rápidos. Os tanques pagam mais fragmentos.",
	},
	{
		id: "inimigo-generico", nome: "Monstro Genérico", sprite: "img/inimigos/spr_Boss_Catalisador.png", tag: "TANQUE",
		historia: "Maior, mais lento e bem mais resistente. A cada 10 ondas, uma versão gigante dele é o chefe.",
		stats: [["APARECE", "1 em cada 6"], ["VIDA", "2,5x + 5"], ["VELOCIDADE", "0,6x"], ["RECOMPENSA", "1,3x"]],
		habilidade: ["Resistente", "Aguenta muito dano. Na versão chefe ganha escudo de imunidade e regeneração."],
		dica: "Dona Bala e Arauto em Poder alto. Veja o chefe logo abaixo.",
	},
];
