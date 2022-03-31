class Produto{
    constructor(codigo, descricao, quantidade){
        this._codigo  = codigo
        this._descricao = descricao
        this._quantidade = quantidade
    }
    getCodigo(){
        return this._codigo
    }
    getDescricao(){
        return this._descricao
    }
    getQuantidade(){
        return this._quantidade
    }
}