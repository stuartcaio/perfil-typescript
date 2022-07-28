interface IAluno {
    nome: string;
    sobrenome: string;
    idade: number;
    profissão: string;
    temperamento: string;
}

class Aluno implements IAluno{
    nome:string;
    sobrenome:string;
    idade:number;
    profissão:string;
    temperamento:string;
    
    constructor(nome:string, sobrenome:string, idade:number, profissão:string, temperamento:string){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.profissão = profissão;
        this.temperamento = temperamento;

        this.mostra();
    }

    mostra(){
        console.log("Nome: " + this.nome + " " + this.sobrenome);
        console.log("Idade: " + this.idade);
        console.log("Profissão: " + this.profissão);
        console.log("Temperamento: " + this.temperamento);
    }
}

const aluno1 = new Aluno("Caio", "Stuart", 16, "Desenvolvedor Front-end", "Fleumático");
console.log(aluno1)