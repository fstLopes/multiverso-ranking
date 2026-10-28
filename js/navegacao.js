// Navegação por âncoras: cada #pagina mostra uma seção.

const PAGINAS = ["inicio", "torres", "inimigos", "como-jogar", "controles", "ranking", "novidades"];
// âncoras de fichas abrem a página que as contém
const DONO = { "torre-": "torres", "poder": "torres", "alvo": "torres", "inimigo-": "inimigos", "chefe": "inimigos" };

function paginaDe(hash) {
	if (PAGINAS.includes(hash)) return hash;
	for (const prefixo in DONO) if (hash.startsWith(prefixo)) return DONO[prefixo];
	return "inicio";
}

function navegar() {
	const hash = decodeURIComponent(location.hash.slice(1));
	const pagina = paginaDe(hash);
	document.body.dataset.page = pagina;
	document.querySelectorAll("section.page").forEach((s) => { s.hidden = s.dataset.page !== pagina; });
	document.querySelectorAll(".menu a").forEach((a) => {
		if (a.getAttribute("href") === "#" + pagina) a.setAttribute("aria-current", "page");
		else a.removeAttribute("aria-current");
	});
	el("menu").classList.remove("aberto");
	el("menu-btn").setAttribute("aria-expanded", "false");
	const alvo = hash && hash !== pagina ? document.getElementById(hash) : null;
	if (alvo) alvo.scrollIntoView();
	else window.scrollTo(0, 0);
	if (pagina === "ranking" || pagina === "inicio") carregar();
}

el("menu-btn").addEventListener("click", () => {
	const aberto = el("menu").classList.toggle("aberto");
	el("menu-btn").setAttribute("aria-expanded", String(aberto));
});
