class ProdutoRepository {
  constructor() {
    this._produtos = [];
    this._chaveProdutos = "produtos";
  }

  inserirProduto(produto) {
    if (produto instanceof Produto) {
      const pr = {
        codigo: produto.getCodigo(),
        descricao: produto.getDescricao(),
        quantidade: produto.getQuantidade(),
      };
      this._produtos = JSON.parse(localStorage.getItem("produtos")) || [];
      this._produtos.push(pr);
      localStorage.setItem(this._chaveProdutos, JSON.stringify(this._produtos));
      console.log("salvo com sucesso!");
      return true
      // console.log(prod.getCodigo())
    }
  }

  listarProdutos() {
    const produtosLocal = localStorage.getItem("produtos");
    const produtos = JSON.parse(produtosLocal);
    return produtos;
  }

  alterarProduto(data) {
    this._produtos = JSON.parse(localStorage.getItem("produtos"));
    this._produtos[data.id]["codigo"] = data.codigo;
    this._produtos[data.id]["descricao"] = data.descricao;
    this._produtos[data.id]["quantidade"] = data.quantidade;
    localStorage.setItem(this._chaveProdutos, JSON.stringify(this._produtos));
    // data.id
    // this._produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    // var index = JSON.parse(localStorage.getItem("produtos")).indexOf(0,4)
    // var Result = JSON.stringify(this._produtos);
    // const index = Result.findIndex((element) => element.codigo === "001");
    // let index = this._produtos.findIndex((element) => element.codigo === "001");
    // return this._produtos[data.id]['codigo']
    // return JSON.stringify(this._produtos)
    return true
  }

  deletarProduto(id) {
    this._produtos = JSON.parse(localStorage.getItem("produtos"));
    this._produtos.splice(id);
    localStorage.setItem(this._chaveProdutos, JSON.stringify(this._produtos));
    return true
  }

  buscarProduto(id){
    //   alert(id)
    this._produtos = JSON.parse(localStorage.getItem("produtos"));
    // this._produtos[id]["codigo"]
    // this._produtos[id]["descricao"]
    // this._produtos[id]["quantidade"]
    const busca = []
    const index = this._produtos.findIndex( (element) => element.descricao === id);
    for(var i = 0; i < this._produtos.length; i++){
        if(this._produtos[i]["descricao"] === id){
            // return JSON.stringify(busca = [this._produtos[i]["codigo"],this._produtos[i]["descricao"],this._produtos[i]["quantidade"]])
            return index+"/"+this._produtos[i]["codigo"]+"/"+this._produtos[i]["descricao"]+"/"+this._produtos[i]["quantidade"]
        }
    }
    // return this._produtos[0]["codigo"]
  }
}
