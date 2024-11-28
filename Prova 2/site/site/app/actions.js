"use server"

export async function Obter() {
    let dados = null;
    try {
        const resultado = await fetch("http://localhost:5238/")
        dados = await resultado.json();

        return dados;
    }
    catch (e) {
        console.log(e);
        return false;
    }

}

export async function Remover(id) {

    try {
        const resultado = await fetch("http://localhost:5238/" + id, {
            method: 'DELETE',
        });

        return resultado.status === 200;
    }
    catch {
        return false;
    }
}

export async function Finalizar(dados){
    console.log(dados)
    try{
        const resultado =  await fetch("http://localhost:5238/", {
            method: 'put',
            body: JSON.stringify(dados),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        return resultado.status === 200
    }
    catch (e) {
        console.log(e);
        return false;
    }
}

