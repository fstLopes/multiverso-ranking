// Monta as fichas das páginas Heróis e Inimigos a partir de js/dados.

function fichaBase(item) {
	const painel = novoEl("article", "panel");
	painel.id = item.id;
	const ficha = novoEl("div", "ficha");
	const retrato = novoEl("div", "retrato");
	const img = novoEl("img", "px");
	img.src = item.sprite;
	img.alt = item.nome;
	retrato.append(img);

	const corpo = novoEl("div");
	corpo.append(novoEl("span", "tag", item.tag), novoEl("h2", "", item.nome), novoEl("p", "", item.historia));

	const stats = novoEl("div", "stats");
	item.stats.forEach(([k, v]) => {
		const s = novoEl("div", "stat");
		s.append(novoEl("div", "k", k), novoEl("div", "v", v));
		stats.append(s);
	});
	corpo.append(stats);

	ficha.append(retrato, corpo);
	painel.append(ficha);
	return { painel, corpo };
}

function caixaEspecial(titulo, texto) {
	const box = novoEl("div", "especial");
	box.append(novoEl("b", "", titulo + ": "), document.createTextNode(texto));
	return box;
}

function montarTorres() {
	const alvo = el("lista-torres");
	TORRES.forEach((t) => {
		const { painel, corpo } = fichaBase(t);
		const efeito = novoEl("p");
		efeito.append(document.createTextNode(t.efeito + " Atalho: "), novoEl("kbd", "", t.tecla));
		corpo.append(efeito, caixaEspecial(t.especial[0], t.especial[1]));

		corpo.append(novoEl("h3", "", "Formas e preços"));
		const wrap = novoEl("div", "tbl-wrap");
		const tabela = novoEl("table");
		const head = novoEl("thead");
		const hr = novoEl("tr");
		hr.append(novoEl("th", "", "PODER"), novoEl("th", "", "FORMA"), novoEl("th", "num", "FRAGMENTOS"));
		head.append(hr);
		const body = novoEl("tbody");
		t.formas.forEach((f, i) => {
			const tr = novoEl("tr");
			tr.append(novoEl("td", "", String(i + 1)), novoEl("td", "", f), novoEl("td", "num", t.melhorias[i]));
			body.append(tr);
		});
		tabela.append(head, body);
		wrap.append(tabela);
		corpo.append(wrap);
		alvo.append(painel);
	});
}

function montarInimigos() {
	const alvo = el("lista-inimigos");
	INIMIGOS.forEach((m) => {
		const { painel, corpo } = fichaBase(m);
		corpo.append(caixaEspecial(m.habilidade[0], m.habilidade[1]));
		const dica = novoEl("p");
		dica.append(novoEl("b", "", "Como lidar: "), document.createTextNode(m.dica));
		corpo.append(dica);
		alvo.append(painel);
	});
}
