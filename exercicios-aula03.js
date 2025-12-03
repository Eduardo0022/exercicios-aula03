// =============================
// DADOS
// =============================

const produtos = [
  { id: 1, nome: "Notebook Dell", preco: 3500, categoria: "eletrônicos", estoque: 5, desconto: 0 },
  { id: 2, nome: "Mouse Logitech", preco: 80, categoria: "eletrônicos", estoque: 15, desconto: 10 },
  { id: 3, nome: "Teclado Mecânico", preco: 350, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 4, nome: "Cadeira Gamer", preco: 1200, categoria: "móveis", estoque: 8, desconto: 15 },
  { id: 5, nome: "Mesa para Computador", preco: 650, categoria: "móveis", estoque: 3, desconto: 0 },
  { id: 6, nome: "Monitor LG 24\"", preco: 800, categoria: "eletrônicos", estoque: 10, desconto: 5 },
  { id: 7, nome: "Webcam Full HD", preco: 250, categoria: "eletrônicos", estoque: 0, desconto: 0 },
  { id: 8, nome: "Headset Gamer", preco: 180, categoria: "eletrônicos", estoque: 12, desconto: 20 },
  { id: 9, nome: "SSD 480GB", preco: 280, categoria: "eletrônicos", estoque: 20, desconto: 0 },
  { id: 10, nome: "Estante para Livros", preco: 420, categoria: "móveis", estoque: 5, desconto: 10 }
];



// =============================
// EXERCÍCIO 1: FILTRAR PRODUTOS POR CATEGORIA
// =============================

function filtrarPorCategoria(produtos, categoria) {
  return produtos.filter(p => p.categoria === categoria);
}

console.log("=== EXERCÍCIO 1 ===");
const eletronicos = filtrarPorCategoria(produtos, "eletrônicos");
console.log(`Eletrônicos encontrados: ${eletronicos.length}`);
console.log(eletronicos.map(p => p.nome));



// =============================
// EXERCÍCIO 2: PRODUTOS EM ESTOQUE
// =============================

function produtosDisponiveis(lista) {
  return lista.filter(p => p.estoque > 0);
}

console.log("\n=== EXERCÍCIO 2 ===");
const disponiveis = produtosDisponiveis(produtos);
console.log(`Produtos disponíveis: ${disponiveis.length}`);
console.log("Produtos em falta:");
const emFalta = produtos.filter(p => p.estoque === 0);
console.log(emFalta.map(p => p.nome));



// =============================
// EXERCÍCIO 3: VALOR TOTAL DO ESTOQUE
// =============================

function valorTotalEstoque(lista) {
  return lista.reduce((total, p) => total + (p.preco * p.estoque), 0);
}

console.log("\n=== EXERCÍCIO 3 ===");
const total = valorTotalEstoque(produtos);
console.log(`Valor total do estoque: R$ ${total.toFixed(2)}`);



// =============================
// EXERCÍCIO 4: APLICAR DESCONTO
// =============================

function aplicarDescontos(lista) {
  return lista.map(p => ({
    ...p,
    precoFinal: p.preco - (p.preco * p.desconto / 100)
  }));
}

console.log("\n=== EXERCÍCIO 4 ===");
const comDescontos = aplicarDescontos(produtos);
console.log("Produtos com desconto:");
comDescontos
  .filter(p => p.desconto > 0)
  .forEach(p => {
    console.log(`${p.nome}: R$ ${p.preco} → R$ ${p.precoFinal.toFixed(2)} (${p.desconto}% off)`);
  });



// =============================
// EXERCÍCIO 5: PRODUTO MAIS CARO
// =============================

function produtoMaisCaro(lista) {
  return lista.reduce((maior, p) => p.preco > maior.preco ? p : maior);
}

console.log("\n=== EXERCÍCIO 5 ===");
const maisCaro = produtoMaisCaro(produtos);
console.log(`Produto mais caro: ${maisCaro.nome} - R$ ${maisCaro.preco}`);



// =============================
// EXERCÍCIO 6: LISTAR NOMES DOS PRODUTOS
// =============================

function listarNomes(lista) {
  return lista.map(p => p.nome);
}

console.log("\n=== EXERCÍCIO 6 ===");
const nomes = listarNomes(produtos);
console.log("Lista de produtos:");
nomes.forEach((nome, i) => console.log(`${i + 1}. ${nome}`));



// =============================
// EXERCÍCIO 7: PRODUTOS CAROS EM ESTOQUE
// =============================

function produtosCarosDisponiveis(lista) {
  return lista.filter(p => p.preco > 300 && p.estoque > 0);
}

console.log("\n=== EXERCÍCIO 7 ===");
const carosDisponiveis = produtosCarosDisponiveis(produtos);
console.log(`Produtos acima de R$ 300 em estoque: ${carosDisponiveis.length}`);
console.log(carosDisponiveis.map(p => `${p.nome} (R$ ${p.preco})`));



// =============================
// EXERCÍCIO 8: MÉDIA DE PREÇOS POR CATEGORIA
// =============================

function mediaPrecoPorCategoria(lista) {

  const categorias = [...new Set(lista.map(p => p.categoria))];

  const resultado = {};

  categorias.forEach(cat => {
    const itens = lista.filter(p => p.categoria === cat);
    const media = itens.reduce((soma, p) => soma + p.preco, 0) / itens.length;
    resultado[cat] = media;
  });

  return resultado;
}

console.log("\n=== EXERCÍCIO 8 ===");
const medias = mediaPrecoPorCategoria(produtos);
Object.entries(medias).forEach(([categoria, media]) => {
  console.log(`Preço médio - ${categoria}: R$ ${media.toFixed(2)}`);
});



// =============================
// EXERCÍCIO 9: TOP 3 MAIS CAROS
// =============================

function top3MaisCaros(lista) {
  return [...lista].sort((a, b) => b.preco - a.preco).slice(0, 3);
}

console.log("\n=== EXERCÍCIO 9 ===");
const top3 = top3MaisCaros(produtos);
console.log("Top 3 produtos mais caros:");
top3.forEach((p, i) => {
  console.log(`${i + 1}º - ${p.nome}: R$ ${p.preco}`);
});



// =============================
// EXERCÍCIO 10: ESTATÍSTICAS DO ESTOQUE
// =============================

function estatisticasEstoque(lista) {
  const totalProdutos = lista.length;
  const totalEmEstoque = lista.filter(p => p.estoque > 0).length;
  const totalEmFalta = lista.filter(p => p.estoque === 0).length;
  const valorTotal = valorTotalEstoque(lista);
  const precoMedio = lista.reduce((s, p) => s + p.preco, 0) / lista.length;

  const maisCaro = produtoMaisCaro(lista);
  const maisBarato = lista.reduce((menor, p) => p.preco < menor.preco ? p : menor);

  const categorias = [...new Set(lista.map(p => p.categoria))];

  return {
    totalProdutos,
    totalEmEstoque,
    totalEmFalta,
    valorTotal,
    precoMedio,
    produtoMaisCaro: maisCaro,
    produtoMaisBarato: maisBarato,
    categorias
  };
}

console.log("\n=== EXERCÍCIO 10 (DESAFIO) ===");
const stats = estatisticasEstoque(produtos);
console.log("Estatísticas do Estoque:");
console.log(`Total de produtos: ${stats.totalProdutos}`);
console.log(`Produtos em estoque: ${stats.totalEmEstoque}`);
console.log(`Produtos em falta: ${stats.totalEmFalta}`);
console.log(`Valor total: R$ ${stats.valorTotal.toFixed(2)}`);
console.log(`Preço médio: R$ ${stats.precoMedio.toFixed(2)}`);
console.log(`Mais caro: ${stats.produtoMaisCaro.nome} (R$ ${stats.produtoMaisCaro.preco})`);
console.log(`Mais barato: ${stats.produtoMaisBarato.nome} (R$ ${stats.produtoMaisBarato.preco})`);
console.log(`Categorias: ${stats.categorias.join(", ")}`);



// =============================
// EXERCÍCIO 11: BUSCAR POR NOME
// =============================

function buscarProduto(produtos, termo) {
  const t = termo.toLowerCase();
  return produtos.filter(p => p.nome.toLowerCase().includes(t));
}

console.log("\n=== EXERCÍCIO 11 ===");
console.log(buscarProduto(produtos, "gamer").map(p => p.nome));
console.log(buscarProduto(produtos, "monitor").map(p => p.nome));


// =============================
// EXERCÍCIO 12: AGRUPAR POR CATEGORIA
// =============================

function agruparPorCategoria(lista) {
  return lista.reduce((grupo, p) => {
    if (!grupo[p.categoria]) grupo[p.categoria] = [];
    grupo[p.categoria].push(p);
    return grupo;
  }, {});
}

console.log("\n=== EXERCÍCIO 12 (BÔNUS) ===");
const agrupados = agruparPorCategoria(produtos);
Object.entries(agrupados).forEach(([categoria, prods]) => {
  console.log(`\n${categoria.toUpperCase()} (${prods.length} produtos):`);
  prods.forEach(p => console.log(`  - ${p.nome}`));
});
