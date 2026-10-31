// Inimigos com os valores da v0.83 do jogo.
// dimensao: em qual lista da página Inimigos a ficha aparece.
// Quando o jogo mudar, atualize aqui.

const INIMIGOS = [
	{
		dimensao: "metropolis", id: "inimigo-explicador", nome: "Vilão Explicador", sprite: "img/inimigos/spr_Enemy_Explicador.png", tag: "COMUM",
		historia: "Não resiste a explicar o plano maligno, nem no meio de uma invasão.",
		stats: [["APARECE", "2 em cada 6"], ["VIDA", "normal"], ["VELOCIDADE", "normal"], ["RECOMPENSA", "1,2x"]],
		habilidade: ["Monólogo", "Para uma vez no caminho por 2 segundos para discursar, e recebe 50% a mais de dano enquanto fala."],
		dica: "Concentre o fogo quando ele parar: é a hora em que ele mais apanha.",
	},
	{
		dimensao: "metropolis", id: "inimigo-clone", nome: "Clone Defeituoso", sprite: "img/inimigos/spr_Enemy_Clone.png", tag: "COMUM",
		historia: "Copiou os poderes de alguém, mas saiu tudo errado.",
		stats: [["APARECE", "3 em cada 6"], ["VIDA", "0,5x a 1,8x"], ["VELOCIDADE", "0,6x a 1,6x"], ["RECOMPENSA", "0,9x"]],
		habilidade: ["Imprevisível", "Cada clone sai diferente: alguns são frágeis e rápidos, outros são tanques lentos."],
		dica: "O Doutor Impacto segura os rápidos. Os tanques pagam mais fragmentos.",
	},
	{
		dimensao: "metropolis", id: "inimigo-generico", nome: "Monstro Genérico", sprite: "img/inimigos/spr_Boss_Catalisador.png", tag: "TANQUE",
		historia: "Maior, mais lento e bem mais resistente. A cada 10 ondas, uma versão gigante dele é o chefe.",
		stats: [["APARECE", "1 em cada 6"], ["VIDA", "2,5x + 5"], ["VELOCIDADE", "0,6x"], ["RECOMPENSA", "1,3x"]],
		habilidade: ["Resistente", "Aguenta muito dano. Na versão chefe ganha escudo de imunidade e regeneração."],
		dica: "Dona Bala e Arauto em Poder alto. Veja o chefe logo abaixo.",
	},
	// --- Cartoon (voltou na v0.81). Ainda usam as artes de Metrópolis. ---
	{
		dimensao: "cartoon", id: "inimigo-bomba", nome: "Bomba com Pernas", sprite: "img/inimigos/spr_Enemy_Clone.png", tag: "CARTOON",
		historia: "Uma bomba de desenho animado que criou pernas e decidiu correr.",
		stats: [["APARECE", "2 em cada 6"], ["VIDA", "0,6x"], ["VELOCIDADE", "1,3x"], ["RECOMPENSA", "1,4x"]],
		habilidade: ["Explode na base", "Se chegar ao fim do caminho, tira 2 vidas em vez de 1."],
		dica: "É frágil: Arauto perto da rota derruba antes que ela chegue. Nunca deixe uma passar.",
	},
	{
		dimensao: "cartoon", id: "inimigo-apagador", nome: "Apagador", sprite: "img/inimigos/spr_Enemy_Explicador.png", tag: "CARTOON",
		historia: "Uma borracha viva que sai apagando o que vê pela frente, inclusive heróis.",
		stats: [["APARECE", "3 em cada 6"], ["VIDA", "normal"], ["VELOCIDADE", "normal"], ["RECOMPENSA", "1,15x"]],
		habilidade: ["Interferência", "A cada 3 segundos apaga a torre mais próxima (até 90 de distância) por 1 segundo. A torre fica cinza e não atira. Depois de voltar, fica 1,5 segundo imune."],
		dica: "Espalhe as torres: uma defesa que depende de uma torre só para de atirar na pior hora.",
	},
	{
		dimensao: "cartoon", id: "inimigo-desenhao", nome: "Desenhão", sprite: "img/inimigos/spr_Boss_Catalisador.png", tag: "TANQUE",
		historia: "Um rabisco gigante, lento e teimoso. A cada 10 ondas, a versão colossal dele é o chefe.",
		stats: [["APARECE", "1 em cada 6"], ["VIDA", "2,5x + 5"], ["VELOCIDADE", "0,6x"], ["RECOMPENSA", "1,3x"]],
		habilidade: ["Resistente", "Aguenta muito dano. A versão chefe, o Desenhão Colossal, tem o mesmo escudo e a mesma regeneração do Monstro Genérico."],
		dica: "Dona Bala e Arauto em Poder alto, com o Doutor Impacto segurando.",
	},
];
