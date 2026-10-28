// Atalhos para montar elementos sem usar innerHTML.

const el = (id) => document.getElementById(id);

function novoEl(tag, classe, texto) {
	const e = document.createElement(tag);
	if (classe) e.className = classe;
	if (texto !== undefined) e.textContent = texto;
	return e;
}
