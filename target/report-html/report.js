$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/protoCommerce.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 3,
  "name": "Navegar ProtoCommerce",
  "description": "Como usu�rio do site\nEu quero efetuar o cadstro\nPara que eu possa aefetuar compras",
  "id": "navegar-protocommerce",
  "keyword": "Funcionalidade"
});
formatter.scenario({
  "line": 8,
  "name": "Cadastrar Usuario",
  "description": "",
  "id": "navegar-protocommerce;cadastrar-usuario",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 9,
  "name": "que esteja na Home",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "preencher o formulario",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "acionar o botao Submit",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o sistema exibe mensagem de sucesso",
  "keyword": "Entao "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 14,
  "name": "Adicionar ao carrinho",
  "description": "",
  "id": "navegar-protocommerce;adicionar-ao-carrinho",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 15,
  "name": "que esteja na pagina de produtos",
  "keyword": "Dado "
});
formatter.step({
  "line": 16,
  "name": "acionar o botao Add de mais de um produto",
  "keyword": "Quando "
});
formatter.step({
  "line": 17,
  "name": "acionar o botao Checkout",
  "keyword": "E "
});
formatter.step({
  "line": 18,
  "name": "acionar o botao Continue Shopping",
  "keyword": "E "
});
formatter.step({
  "line": 19,
  "name": "crio um novo step",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "o sistema retorna para a pagina de compras",
  "keyword": "Entao "
});
formatter.step({
  "line": 21,
  "name": "exibe no Checkout os produtos ja selecionados",
  "keyword": "E "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});