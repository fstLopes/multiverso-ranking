// Ranking ao vivo: lê do Supabase e desenha pódio, tabela e o top 3 do início.

let ultimaLista = [];
let jaCarregou = false;
let dimensaoAtual = DIMENSOES[0].id;
const novos = new Set();
const fmt = new Intl.NumberFormat("pt-BR");

function setStatus(tipo, texto) {
	el("status").className = "status " + tipo;
	el("status-text").textContent = texto;
}

function quando(iso) {
	const d = new Date(iso);
	const seg = (Date.now() - d.getTime()) / 1000;
	if (seg < 60) return "agora há pouco";
	if (seg < 3600) return "há " + Math.floor(seg / 60) + " min";
	if (seg < 86400) return "há " + Math.floor(seg / 3600) + " h";
	return d.toLocaleDateString("pt-BR");
}

// pódio: 1º no meio, 2º à esquerda, 3º à direita
function renderPodio() {
	for (let i = 0; i < 3; i++) {
		const r = ultimaLista[i];
		const caixa = el("place-" + (i + 1));
		caixa.textContent = "";
		caixa.classList.toggle("vazio", !r);
		caixa.classList.toggle("novo", !!r && novos.has(r.jogador_id));

		const estrela = novoEl("img", "star");
		estrela.src = "img/interface/spr_Star.png";
		estrela.alt = "";
		caixa.append(estrela, novoEl("div", "rank", "#" + (i + 1)));

		if (r) {
			caixa.append(novoEl("div", "who", r.apelido));
			const onda = novoEl("div", "stat2", "onda ");
			onda.append(novoEl("b", "", r.onda));
			caixa.append(onda, novoEl("div", "stat2 frag", fmt.format(r.fragmentos) + " fragmentos"));
		} else {
			caixa.append(novoEl("div", "who", "vaga aberta"));
		}
		caixa.append(novoEl("div", "base"));
	}
}

function renderLista() {
	const corpo = el("rows");
	corpo.textContent = "";
	const resto = ultimaLista.slice(3);
	el("board").hidden = resto.length === 0 && ultimaLista.length > 0;
	el("empty").hidden = !jaCarregou || ultimaLista.length > 0;
	el("empty").textContent = "Ninguém no ranking ainda. Seja o primeiro!";

	resto.forEach((r, j) => {
		const tr = novoEl("tr");
		if (novos.has(r.jogador_id)) tr.classList.add("novo");
		const nome = novoEl("td", "name", r.apelido);
		nome.append(novoEl("span", "when", quando(r.conquistado_em)));
		tr.append(
			novoEl("td", "pos", j + 4),
			nome,
			novoEl("td", "num", r.onda),
			novoEl("td", "num col-frag", fmt.format(r.fragmentos)),
		);
		corpo.appendChild(tr);
	});
}

// o top 3 da página inicial
function renderMiniTop() {
	const caixa = el("mini-top");
	caixa.textContent = "";
	if (!jaCarregou) {
		caixa.append(novoEl("p", "muted", "Carregando o ranking..."));
		return;
	}
	if (ultimaLista.length === 0) {
		caixa.append(novoEl("p", "muted", "Ninguém no ranking ainda. Seja o primeiro!"));
		return;
	}
	ultimaLista.slice(0, 3).forEach((r, i) => {
		const linha = novoEl("div", "row");
		const estrela = novoEl("img");
		estrela.src = "img/interface/spr_Star.png";
		estrela.alt = "";
		linha.append(estrela, novoEl("span", "", "#" + (i + 1) + "  " + r.apelido), novoEl("span", "val", "onda " + r.onda));
		caixa.append(linha);
	});
}

function nomeDimensao(id) {
	const d = DIMENSOES.find((x) => x.id === id);
	return d ? d.nome : id;
}

// abas de dimensão da página do ranking
function montarAbasDimensao() {
	const caixa = el("abas-dim");
	DIMENSOES.forEach((d) => {
		const b = novoEl("button", "btn aba-dim", d.nome.toUpperCase());
		b.type = "button";
		b.dataset.dim = d.id;
		b.addEventListener("click", () => trocarDimensao(d.id));
		caixa.append(b);
	});
	marcarDimensao();
}

function marcarDimensao() {
	document.querySelectorAll(".aba-dim").forEach((b) => {
		b.setAttribute("aria-pressed", String(b.dataset.dim === dimensaoAtual));
	});
	el("podium-title").textContent = nomeDimensao(dimensaoAtual);
	el("mini-dim").textContent = nomeDimensao(dimensaoAtual);
}

function trocarDimensao(id) {
	if (id === dimensaoAtual) return;
	dimensaoAtual = id;
	ultimaLista = [];
	jaCarregou = false;
	novos.clear();
	marcarDimensao();
	render();
	carregar();
}

function render() {
	renderPodio();
	renderLista();
	renderMiniTop();
	novos.clear();
}

async function carregar() {
	// se a aba mudar no meio da leitura, a resposta antiga é descartada
	const dim = dimensaoAtual;
	const q = new URLSearchParams({
		select: "jogador_id,apelido,onda,fragmentos,conquistado_em",
		dimensao: "eq." + dimensaoAtual,
		order: "onda.desc,fragmentos.desc,conquistado_em.asc",
		limit: String(LIMITE),
	});
	try {
		const resp = await fetch(URL_SUPABASE + "/rest/v1/ranking?" + q, {
			headers: { apikey: CHAVE_PUBLICA },
		});
		if (!resp.ok) throw new Error("HTTP " + resp.status);
		const lista = await resp.json();
		if (dim !== dimensaoAtual) return;
		// marca quem entrou ou melhorou desde a última leitura
		if (jaCarregou) {
			const antes = new Map(ultimaLista.map((r) => [r.jogador_id, r.conquistado_em]));
			lista.forEach((r) => { if (antes.get(r.jogador_id) !== r.conquistado_em) novos.add(r.jogador_id); });
		}
		ultimaLista = lista;
		jaCarregou = true;
		render();
		if (!el("status").classList.contains("live")) setStatus("", "ATUALIZANDO A CADA 30 S");
	} catch (e) {
		setStatus("erro", "SEM CONEXÃO");
		if (!jaCarregou) {
			el("mini-top").textContent = "";
			el("mini-top").append(novoEl("p", "muted", "Sem conexão com o ranking agora."));
		}
	}
}

// Tempo real: o servidor avisa a cada recorde novo e a lista recarrega.
// Conexões públicas de tempo real caem depois de algumas horas, então a
// página também recarrega sozinha a cada 30 segundos.
function conectarAoVivo() {
	if (!window.supabase) return;
	const cliente = window.supabase.createClient(URL_SUPABASE, CHAVE_PUBLICA);
	cliente
		.channel("ranking-ao-vivo")
		.on("postgres_changes", { event: "*", schema: "public", table: "ranking" }, () => carregar())
		.subscribe((estado) => {
			if (estado === "SUBSCRIBED") setStatus("live", "AO VIVO");
			else if (estado === "CHANNEL_ERROR" || estado === "TIMED_OUT" || estado === "CLOSED") {
				setStatus("", "ATUALIZANDO A CADA 30 S");
			}
		});
}
