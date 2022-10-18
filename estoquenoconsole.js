//Loja de tênis que trabalha com 5 tenis e 5 tam

let estoque = [[], [], [], []]

let qestoque = 0
let itemx = 0
let remocao = 0
while (itemx != "terminar") {
    let item = 0
    itemx = prompt("Você quer remover ou adicionar um tenis?")
    if (itemx == "adicionar") {
        qestoque = prompt("Qual o tamanho do tenis? sair para sair")
        if (qestoque >= "34" && qestoque <= "36") {
            while (item !== "proximo") {
                item = prompt("Qual tenis você quer adicionar? proximo")
                estoque[0].push(item)
            }
            estoque[0].pop()
        }
        if (qestoque >= "37" && qestoque <= "39") {
            while (item !== "proximo") {
                item = prompt("Qual tenis você quer adicionar? proximo")
                estoque[1].push(item)
            }
            estoque[1].pop()
        }
        if (qestoque >= "40" && qestoque <= "42") {
            while (item !== "proximo") {
                item = prompt("Qual tenis você quer adicionar? proximo")
                estoque[2].push(item)
            }
            estoque[2].pop()
        }
        if (qestoque >= "43" && qestoque <= "45") {
            while (item !== "proximo") {
                item = prompt("Qual tenis você quer adicionar? proximo")
                estoque[3].push(item)
            }
            estoque[3].pop()
        }
    }
    if (itemx == "remover") {
        remocao = prompt("Você quer remover um item de qual estoque? pelo tamanho. ou sair")
        if (remocao == "34" || remocao == "35" || remocao == "36") {
            alert(estoque[0])
            let retirar = prompt("Qual tenis você deseja remover?")
            estoque[0] = estoque[0].filter(item => item != retirar)
            alert(estoque[0])
        }
        if (remocao == "37" || remocao == "38" || remocao == "39") {
            alert(estoque[1])
            let retirar = prompt("Qual tenis você deseja remover?")
            estoque[1] = estoque[1].filter(item => item != retirar)
            alert(estoque[1])
        }
        if (remocao == "40" || remocao == "41" || remocao == "42") {
            alert(estoque[2])
            let retirar = prompt("Qual tenis você deseja remover?")
            estoque[2] = estoque[2].filter(item => item != retirar)
            alert(estoque[2])
        }
        if (remocao == "43" || remocao == "44" || remocao == "45") {
            alert(estoque[3])
            let retirar = prompt("Qual tenis você deseja remover?")
            estoque[3] = estoque[3].filter(item => item != retirar)
            alert(estoque[3])
        }
    }


}