// Mesmo projeto e mesma chave PÚBLICA que o jogo usa. Ela só deixa ler o
// ranking; gravar passa pelas funções do servidor, que conferem a sessão.
const URL_SUPABASE = "https://bslctwsfhdcjgxxktghb.supabase.co";
const CHAVE_PUBLICA = "sb_publishable_HlTDZN1LGZ2ev_jnXrz6OA_E13Ogdii";
const LIMITE = 50;
// Cada dimensão do jogo tem o seu ranking. A primeira é a que abre.
const DIMENSOES = [
	{ id: "metropolis", nome: "Metrópolis Prime" },
	{ id: "cartoon", nome: "Cartoon" },
	{ id: "avesso", nome: "Reino do Avesso" },
];
