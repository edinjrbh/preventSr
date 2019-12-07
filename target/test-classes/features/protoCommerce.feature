#language: pt

Funcionalidade: Navegar ProtoCommerce
  Como usuário do site
  Eu quero efetuar o cadstro
  Para que eu possa aefetuar compras

  Cenario: Cadastrar Usuario
    Dado que esteja na Home
    Quando preencher o formulario
    E acionar o botao Submit
    Entao o sistema exibe mensagem de sucesso
    
  Cenario: Adicionar ao carrinho
    Dado que esteja na pagina de produtos
    Quando acionar o botao Add de mais de um produto
    E acionar o botao Checkout
    E acionar o botao Continue Shopping
    E crio um novo step
    Entao o sistema retorna para a pagina de compras
    E exibe no Checkout os produtos ja selecionados