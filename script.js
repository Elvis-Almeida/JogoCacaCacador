const run = {
    conteiner_element: null,
    vez: 0,
    caçador: 0,
    caça: 0,
    rodadas: 0,
    jogadas: [
        [1, 2],
        [1, 5],
        [1, 6],
        [6, 5],
        [6, 3],
        [2, 3],
        [3, 4],
        [4, 5]
    ],
    iniciar:function (container) {
        this.vez = 0;
        this.rodadas = 0;
        this.conteiner_element = container;
        this.caça = Math.floor((Math.random() * 6) + 1);
        do {
            this.caçador = Math.floor((Math.random() * 6) + 1);
        } while (this.caçador == this.caça);
    },
    desenharTela: function () {
        let temp = '';
        for(let i=1; i<7; i++){
            temp += '<div class="bola" id="elemento'+ i +'" onclick="run.Clicar(this)"></div>';
        }
        this.conteiner_element.innerHTML = temp;
        document.getElementById('elemento' + this.caça).style.backgroundImage = 'url("img/desenho-coelhinho-fofo-isolado-no-fundo-branco-imprimir-desenho-coelho-no-vetor-de-camiseta_126000-337.jpg")'
        document.getElementById('elemento' + this.caçador).style.backgroundImage = 'url(img/depositphotos_113656328-stock-photo-black-painted-wolf.jpg)'
        document.getElementById('rodadas').textContent = 'rodada: ' + this.rodadas
    },
    Clicar: function (obj) {
        let num = obj.id.substring(8, 9);
        this.Checar(parseInt(num));
    },
    Checar: function (fim){
        let pos = (this.vez === 0 ? this.caça : this.caçador);
        for(let i=0; i < this.jogadas.length; i++){
            if(this.jogadas[i][0] == pos && this.jogadas[i][1] == fim || this.jogadas[i][1] == pos && this.jogadas[i][0] == fim){
                if (this.vez == 0 && this.caçador != fim) {
                    this.caça = fim ;
                    this.vez = 1;
                    this.desenharTela();
                }else if (this.vez == 1) {
                    this.caçador = fim;
                    this.vez = 0;
                    this.rodadas += 1;
                    this.desenharTela();
                }
                if (this.caçador == this.caça) {
                    alert("O caçador ganhou!");
                    this.iniciar(this.conteiner_element);
                    this.desenharTela();
                } else if (this.rodadas == 10){
                    alert("A caça ganhou!");
                    this.iniciar(this.conteiner_element);
                    this.desenharTela();
                };
            }
        }
    }
}