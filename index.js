var Aluno = /** @class */ (function () {
    function Aluno(nome, sobrenome, idade, profissão, temperamento) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.profissão = profissão;
        this.temperamento = temperamento;
    }
    return Aluno;
}());
var aluno1 = new Aluno("Caio", "Stuart", 16, "Desenvolvedor Front-end", "Fleumático");
console.log(aluno1);
