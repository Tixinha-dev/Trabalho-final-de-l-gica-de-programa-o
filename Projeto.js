//------------------Trabalho final de lógica--------------
var cadastrarAnimal = {
    Nome: null,
    Especie: null,
    Idade: null,
    Sexo: null,
    Peso: null,
    Chip: null,
    EstadoAtual: "vivo",
    Status: "Disponivel para adoção",
    Dono: null

}
var listadeAnimais = [{

        Nome: "Ted",
        Especie: "Canis lupus familiaris",
        Idade: "3 anos",
        Sexo: "Masculino",
        Peso: "6kg",
        Chip: "9845-0001",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null

    },
    {
        Nome: "Jorge",
        Especie: "Felis silvestris catus",
        Idade: "5 anos",
        Sexo: "Masculino",
        Peso: "12kg",
        Chip: "3248-2701",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null


    },
    {
        Nome: "Pipa",
        Especie: "Melopsittacus undulatus",
        Idade: "2 anos",
        Sexo: "Feminino",
        Peso: "20g",
        Chip: "9035-1938",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null


    },
    {
        Nome: "Samantha",
        Especie: "Hemidactylus mabouia",
        Idade: "4 anos",
        Sexo: "Feminino",
        Peso: "7g",
        Chip: "3735-4458",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null


    },
    {
        Nome: "Alexia",
        Especie: "Rattus rattus",
        Idade: "6 meses",
        Sexo: "Feminino",
        Peso: "100g",
        Chip: "1833-1838",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null


    },
    {
        Nome: "Cal",
        Especie: "Oreochromis niloticus",
        Idade: "9 anos",
        Sexo: "Masculino",
        Peso: "2,4kg",
        Chip: "1029-1937",
        EstadoAtual: "vivo",
        Status: "Disponivel para adoção",
        Dono: null


    }
]
var listadePessoas = [{

        Nome: "Thiago Pinho",
        Cpf: '168.927.385-24',
        Telefone: "(75) 9 9127-1699",
        Endereço: {
            Rua: "Caminho Guanambi n 7",
            Cidade: "Feira de Santana",
            Estado: "Bahia",
            Cep: "44053-348",

        },
        Pet: null,


    },
    {
        Nome: "Bruno Silva",
        Cpf: '876.755.401-66',
        Telefone: "(70) 94285-0499",
        Endereço: {
            Rua: "Avenida Tocantins",
            Cidade: "Jataí",
            Estado: "GO",
            Cep: "75802095",

        },
        Pet: null,


    },
    {
        Nome: "Magda Ferreira",
        Cpf: '385.677.528-50',
        Telefone: "(58) 99216-2442",
        Endereço: {
            Rua: "Rua Pereira Estéfano",
            Cidade: "São Paulo",
            Estado: "SP",
            Cep: "04144070",

        },
        Pet: null,

    },
    {
        Nome: "Ana Clara",
        Cpf: '396.730.666-63',
        Telefone: "(24) 99726-5531",
        Endereço: {
            Rua: "Avenida Afonso Pena",
            Cidade: "Belo Horizonte",
            Estado: "MG",
            Cep: "30130005",

        },
        Pet: null,

    },
    {
        Nome: "Paula Andrade",
        Cpf: '665.481.653-65',
        Telefone: "(43) 91026-7302",
        Endereço: {
            Rua: "Rua Arlindo Nogueira",
            Cidade: "Teresina",
            Estado: "PI",
            Cep: "64000290",

        },
        Pet: null,

    },
    {
        Nome: "Beto Mesquita",
        Cpf: '422.085.729-04',
        Telefone: "(44) 98139-8856",
        Endereço: {
            Rua: "Rua Carlos Augusto Cornelsen",
            Cidade: "Curitiba",
            Estado: "PR",
            Cep: "80520560",

        },
        Pet: null,

    }
]
var cadastrarPessoa = {
    Nome: null,
    Cpf: null,
    Telefone: null,
    Endereço: {
        Rua: null,
        Cidade: null,
        Estado: null,
        Cep: null,
    },
    Pet: null,
}
function Cadastrar_Pessoa() {
    var DadosCpf = prompt("Informe o Seu Cpf para análise.")
    for (var i = 0; i < listadePessoas.length; i++) {
        var achou = false
        if (DadosCpf == listadePessoas[i].Cpf) {
            alert("Desculpe, mas o Cpf digitado já está e uso!")
            achou = true
            break;
        }
        if (!achou && DadosCpf !== listadePessoas[i].Cpf && i == listadePessoas.length - 1) {
            alert("Análise completa!\n Sessão de cadastro pessoal iniciando..")
            cadastrarPessoa.Nome = prompt(("Informe o seu nome completo."))
            cadastrarPessoa.Cpf = prompt("informe o seu Cpf")
            cadastrarPessoa.Telefone = prompt("Informe o seu telefone")
            cadastrarPessoa.Endereço.Rua = prompt("Informe a sua rua")
            cadastrarPessoa.Endereço.Cidade = prompt("Informe a sua cidade")
            cadastrarPessoa.Endereço.Estado = prompt("Informe o seu estado")
            cadastrarPessoa.Endereço.Cep = prompt("Informe o seu cep")
            listadePessoas.push(cadastrarPessoa)
            alert("Parabens Sr(a) " + cadastrarPessoa.Nome + " ! Você foi cadastrado com sucesso!")
            alert("Atualizando o Número de pessoas na lista! Aguarde um momento...")
            alert("Lista Atualizada com sucesso! \n O tamanho da lista é : " + listadePessoas.length)
            break;
        }
    }
}
function Cadastrar_Animal() {

    var DadosChip = prompt("Insira o chip para análise.")
    for (var i = 0; i < listadeAnimais.length; i++) {
        var achou = false
        if (DadosChip == listadeAnimais[i].Chip) {
            alert("Desculpe, mas o Chip digitado já está e uso!")
            achou = true
            break;
        }
        if (!achou && DadosChip !== listadeAnimais[i].Chip && i == listadeAnimais.length - 1) {
            alert("Análise completa!\n Sessão de cadastro animal iniciando..")
            cadastrarAnimal.Nome = prompt("Informe o nome completo do animal")
            cadastrarAnimal.Especie = prompt("Informe a espécie do animal")
            cadastrarAnimal.Idade = prompt("Informe a idade do animal")
            cadastrarAnimal.Sexo = prompt("Informe o sexo do animal")
            cadastrarAnimal.Peso = prompt("Informe o peso do animal")
            cadastrarAnimal.Chip = prompt("Insira o numero de serie do chip")
            listadeAnimais.push(cadastrarAnimal)
            alert("Parabéns! O " + cadastrarAnimal.Nome + " foi cadastrado com sucesso!")
            alert("O tamanho da lista de animais é: " + listadeAnimais.length)
            break;
        }
    }
}
function Verificar_Status_Animal() {
    var DadosChip = prompt("informe o Chip do animal")
    var informacao = Number(prompt("O animal esta vivo? \n 1-sim \n 2-não"))
    for (var i = 0; i < listadeAnimais.length; i++) {
        if (DadosChip == listadeAnimais[i].Chip && informacao == 1 && listadeAnimais[i].EstadoAtual === "vivo") {
            alert("Muito bem! Continue cuidando bem do " + listadeAnimais[i].Nome)
            break;
        }
        if (DadosChip == listadeAnimais[i].Chip && informacao == 2 && listadeAnimais[i].EstadoAtual === "vivo") {
            listadeAnimais[i].EstadoAtual = "Morto"
            listadeAnimais[i].Status = "Indisponivel para adoção"
            alert("Que pena que o " + listadeAnimais[i].Nome + " morreu...")
            break;
        }
        if (DadosChip !== listadeAnimais[i].Chip && i == listadeAnimais.length - 1) {
            alert("Animal não encontrado no sistema!")
            break;
        }
        if (listadeAnimais[i].EstadoAtual == "Morto") {
            alert("O " + listadeAnimais[i].Nome + " está morto...")
            break;
        }
        if(informacao>2){
            alert("Opção inexistente")
            break;
        }
    }
}
function Adotar_Animal() {
    var DadosCpf = prompt("Informe o seu Cpf para análise.")
    for (var j = 0; j < listadePessoas.length; j++) {
        if (DadosCpf == listadePessoas[j].Cpf) {
            if (listadePessoas[j].Pet == null) {
                var Dono = listadePessoas[j].Nome
                var DadosChip = prompt("Informe o Chip do animal que voce deseja adotar")
                for (var i = 0; i < listadeAnimais.length; i++) {
                    var Animal_de_estimacao = null
                    if (DadosChip == listadeAnimais[i].Chip && listadeAnimais[i].Dono == null && listadeAnimais[i].EstadoAtual == "vivo") {
                        alert(listadeAnimais[i].Nome + " foi adotado(a)!")
                        listadeAnimais[i].Dono = Dono
                        listadeAnimais[i].Status = "Indisponivel para adoção."
                        Animal_de_estimacao = listadeAnimais[i].Nome
                        for (var k = 0; k < listadePessoas.length; k++) {
                            if (DadosCpf == listadePessoas[k].Cpf) {
                                listadePessoas[k].Pet = Animal_de_estimacao
                            }
                        }
                        break;
                    }
                    if (DadosChip == listadeAnimais[i].Chip && listadeAnimais[i].Status == "Indisponivel para adoção" && listadeAnimais[i].EstadoAtual == "vivo") {
                        alert("Desculpe, mas " + Animal_de_estimacao + " já foi adotado(a).")
                        break;
                    }
                    if (DadosChip !== listadeAnimais[i].Chip && i == listadeAnimais.length - 1) {
                        alert("Animal inexistente na lista")
                        break;
                    }
                    if (DadosChip == listadeAnimais[i].Chip && listadeAnimais[i].EstadoAtual == "Morto") {
                        alert(Animal_de_estimacao + " infelizmente está morto(a)...")
                        break;
                    }
                    if (DadosCpf !== listadePessoas[j].Cpf && j == listadePessoas.length - 1) {
                        alert("Não é possível efetuar uma adoção sem antes ser previamente cadastrado(a).")
                        break;
                    }
                }
            } else {
                alert("Desculpe, mas só é permitido a adoção de 1 animal por pessoa e o Sr(a) já possui um.")
                break;
            }
        }
    }
}
function Buscar_Pessoa() {
    var DadosCpf = prompt("informe o seu Cpf completo")
    var encontrado = null
    for (var i = 0; i < listadePessoas.length; i++) {
        if (DadosCpf == listadePessoas[i].Cpf) {
            encontrado = true
            alert("Contato encontrado!")
            alert("Sr(a) " + listadePessoas[i].Nome + " suas informações estão em exibição no console.")
            console.log("<---------Resultado da busca pessoal------>")
            console.log("Nome: " + listadePessoas[i].Nome);
            console.log("Cpf: " + listadePessoas[i].Cpf);
            console.log("Telefone: " + listadePessoas[i].Telefone);
            console.log("Cidade: " + listadePessoas[i].Endereço.Cidade);
            console.log("Estado: " + listadePessoas[i].Endereço.Estado);
            console.log("Rua: " + listadePessoas[i].Endereço.Rua);
            console.log("Cep: " + listadePessoas[i].Endereço.Cep);
            console.log("Pet: " + listadePessoas[i].Pet);
            console.log("<---------Resultado da busca pessoal------>")
        }
        if (!encontrado && DadosCpf !== listadePessoas[i].Cpf && i == listadePessoas.length - 1) {
            alert("Contato não encontrado!")
        }
    }
}
function Buscar_Animal() {
    var encontrado = null
    var DadosChip = prompt("infome o chip do animal.")
    for (var i = 0; i < listadeAnimais.length; i++) {
        if (DadosChip == listadeAnimais[i].Chip) {
            encontrado = true
            alert("Animal encontrado!")
            alert("As informações do(a) " + listadeAnimais[i].Nome + " estão em exibição no console.")
            console.log("<---------Resultado da busca animal------>")
            console.log("Nome: " + listadeAnimais[i].Nome)
            console.log("Especie: " + listadeAnimais[i].Especie)
            console.log("Idade: " + listadeAnimais[i].Idade)
            console.log("Sexo: " + listadeAnimais[i].Sexo)
            console.log("Peso: " + listadeAnimais[i].Peso)
            console.log("Chip: " + listadeAnimais[i].Chip)
            console.log("Estado atual: " + listadeAnimais[i].EstadoAtual)
            console.log("Status: " + listadeAnimais[i].Status)
            console.log("Dono: " + listadeAnimais[i].Dono)
            console.log("<---------Resultado da busca animal------>")

        }
        if (!encontrado && DadosChip !== listadeAnimais[i].Chip && i == listadeAnimais.length - 1) {
            alert("Animal não encontrado!")
        }
    }
}
function Lista_Pessoas_Cadastradas() {
    alert("Lista de pessoas está sendo exibida! \n O tamanho da lista de pessoas cadastradas é: " + listadePessoas.length)
    for (var i = 0; i < listadePessoas.length; i++) {
        console.log("<------Lista de pessoas cadastradas-------->")
        console.log("Nome:  " + listadePessoas[i].Nome);
        console.log("Cpf:  " + listadePessoas[i].Cpf);
        console.log("Telefone:  " + listadePessoas[i].Telefone);
        console.log("Cidade:  " + listadePessoas[i].Endereço.Cidade);
        console.log("Estado:  " + listadePessoas[i].Endereço.Estado);
        console.log("Rua:  " + listadePessoas[i].Endereço.Rua);
        console.log("Cep:  " + listadePessoas[i].Endereço.Cep);
        console.log("Pet: " + listadePessoas[i].Pet);
    }
}
function Editar_dados_Pessoais() {
    var DadosCpf = prompt("Informe o seu Cpf para análise.")
    var achou = false
    for (var i = 0; i < listadePessoas.length; i++) {
        if (DadosCpf == listadePessoas[i].Cpf) {
            achou = true
            alert("Bem vindo(a) Sr(a) " + listadePessoas[i].Nome + "\n tudo pronto para redefinir seus dados.")
            listadePessoas[i].Telefone = prompt("Informe o seu novo telefone.")
            listadePessoas[i].Endereço.Rua = prompt("Informe nome da rua.")
            listadePessoas[i].Endereço.Cidade = prompt("Infome o nome da cidade.")
            listadePessoas[i].Endereço.Estado = prompt("Informe o nome do estado.")
            listadePessoas[i].Endereço.Cep = prompt("Informe o seu novo cep.")
            alert("Dados redefinidos com sucesso!")
            break;
        }
        if (!achou && DadosCpf !== listadePessoas[i].Cpf && i == listadePessoas.length - 1) {
            alert("Desculpe, mas o Cpf digitado está incorreto ou inexistente.")
            break;
        }
    }
}
function Lista_de_Animais_Cadastrados() {
    alert("Lista de Animais está sendo exibida! \n O tamanho da lista de animais cadastrados é: " + listadeAnimais.length)
    for (var i = 0; i < listadeAnimais.length; i++) {
        console.log("<------Lista de animais cadastrados-------->")
        console.log("Nome:  " + listadeAnimais[i].Nome);
        console.log("Espécie:  " + listadeAnimais[i].Especie);
        console.log("Idade:  " + listadeAnimais[i].Idade);
        console.log("Sexo:  " + listadeAnimais[i].Sexo);
        console.log("Peso:  " + listadeAnimais[i].Peso);
        console.log("Chip:  " + listadeAnimais[i].Chip);
        console.log("Estado atual:  " + listadeAnimais[i].EstadoAtual);
        console.log("Status:  " + listadeAnimais[i].Status);
        console.log("Dono(a):  " + listadeAnimais[i].Dono);
    }
}
function Remover_pessoa() { 
    for (var i = 0; i < listadePessoas.length; i++) {
        if (listadePessoas[i].Pet == null) {
            var index = listadePessoas.indexOf(listadePessoas[i])
            if (index !== -1) {
                listadePessoas.splice(index, 1)
                alert("O " + listadePessoas[i].Nome + " Foi removido com sucesso!")
                alert("Atualizando o Número de pessoas na lista! Aguarde um momento...")
                alert("Lista Atualizada com sucesso! \n O tamanho da lista é : " + listadePessoas.length)
                break;
            }
            break;
        } else {
            alert("Não há pessoas sem pet na lista para a remoção.")
            break;
        }
    }
}
function Remover_Animal() {
    for (var i = 0; i < listadeAnimais.length; i++) {
        if (listadeAnimais[i].EstadoAtual == "Morto") {
            var index = listadeAnimais.indexOf(listadeAnimais[i])
            if (index !== -1) {
                listadeAnimais.splice(index, 1)
                alert("Animal(is) morto(s) removido(s) com sucesso!")
                alert("Atualizando o Número de animais na lista! Aguarde um momento...")
                alert("O tamanho da lista de animais é: " + listadeAnimais.length)
                break;
            }
             break;
        }else {
            alert("Não há animais mortos na lista para a remoção.")
            break;
        }
    }
}

do {
    var Menu = Number(prompt("Bem vindo ao Bronze 5! O seu abrigo de animais preferido! \n Em que podemos ajudar? \n 1-Efetuar meu cadastro \n 2-Efetuar o cadastro de um animal \n 3-Verificar estado atual do animal \n 4-Adotar animal \n 5-Buscar pessoa \n 6-buscar animal \n 7-Lista de pessoas cadastradas \n 8-Editar dados pessoais \n 9-Lista de animais cadastrados \n 10-Remover pessoa \n 11-Remover animal"))
    switch (Menu) {
        case 1:
            Cadastrar_Pessoa()
            break;
        case 2:
            Cadastrar_Animal()
            break;
        case 3:
            Verificar_Status_Animal()
            break;
        case 4:
            Adotar_Animal()
            break;
        case 5:
            Buscar_Pessoa()
            break;
        case 6:
            Buscar_Animal()
            break;
        case 7:
            Lista_Pessoas_Cadastradas()
            break;
        case 8:
            Editar_dados_Pessoais()
            break;
        case 9:
            Lista_de_Animais_Cadastrados()
            break;
        case 10:
            Remover_pessoa()
            break;
        case 11:
            Remover_Animal()
            break;
        default:
            alert("Essa opção não existe!")
            break;
    }

    var opcao = Number(prompt("Deseja continuar? \n 1-Sim 2-Não"))

} while (opcao == 1)
