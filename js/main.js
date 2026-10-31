// Ponto de partida: carrega as páginas de paginas/*.html e liga tudo.

async function carregarPaginas() {
	const conteudo = el("conteudo");
	const textos = await Promise.all(PAGINAS.map((nome) =>
		fetch("paginas/" + nome + ".html").then((r) => {
			if (!r.ok) throw new Error(nome + ": HTTP " + r.status);
			return r.text();
		})
	));
	PAGINAS.forEach((nome, i) => {
		const secao = novoEl("section", "page");
		secao.dataset.page = nome;
		secao.hidden = true;
		// conteúdo fixo escrito por nós, não vem de jogadores
		secao.innerHTML = textos[i];
		conteudo.append(secao);
	});
}

carregarPaginas()
	.then(() => {
		montarTorres();
		montarInimigos();
		montarAbasDimensao();
		render();
		window.addEventListener("hashchange", navegar);
		navegar();
		conectarAoVivo();
		setInterval(carregar, 30000);
		document.addEventListener("visibilitychange", () => { if (!document.hidden) carregar(); });
	})
	.catch((e) => {
		el("conteudo").append(novoEl("p", "page-sub", "Não deu para carregar a wiki. Recarregue a página."));
		console.error(e);
	});
