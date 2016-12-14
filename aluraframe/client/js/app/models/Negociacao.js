class Negociacao { // Criando a classe
    constructor(data, quantidade, valor){ // Descrevendo o que ela vai ter
        this._data = data; // o _ siginifica que vc não pode alterar esse valor isso foi
                           // definido para ser uma converção tranformando assim em um método privado
        this._quantidade = quantidade;
        this._valor = valor;
    }
    get volume (){ // get já cria por debaixo dos panos uma forma de você pegar o valor sendo assim vc só precisa declarar dessa forma: foo.volume
                   // se você criar getVolume você precisa declarar dessa maneira para ter acesso ao return (foo.getVolume())
        return this._quantidade * this._valor;
    }

    get data(){ // metodo privado para buscar o valor de data
        return this._data; // retorna valor inalteralvel da data
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}
