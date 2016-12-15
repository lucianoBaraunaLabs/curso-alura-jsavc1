class Negociacao { // Criando a classe
    constructor(data, quantidade, valor){ // Descrevendo o que ela vai ter
        this._data = new Date(data.getTime()); // Como é um construtor foi preciso passar novamente new Date para blindar 
                                               // nossa class para caso seja utilizado o costrutor no argumento
                                               // quando chega aqui é remontado novamente o objeto com o a data atual
        this._quantidade = quantidade; // o _ siginifica que vc não pode alterar esse valor isso foi
                                       // definido para ser uma converção tranformando assim em um método privado
        this._valor = valor;
        Object.freeze(this); // aqui vc congela a class para deixa-lá inalteralvel.
    }
    get volume (){ // get já cria por debaixo dos panos uma forma de você pegar o valor sendo assim vc só precisa declarar dessa forma: foo.volume
                   // se você criar getVolume você precisa declarar dessa maneira para ter acesso ao return (foo.getVolume())
        return this._quantidade * this._valor;
    }

    get data(){ // metodo privado para buscar o valor de data
        return new Date(this._data.getTime()); // Como é um construtor foi preciso passar novamente new Date para blindar 
                                               // nossa class para caso seja utilizado o costrutor no argumento
                                               // quando chega aqui é remontado novamente o objeto com o a data atual
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}
