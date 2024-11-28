"use server"

export async function Salvar(dados) {

    try{
        const resultado =  await fetch("http://localhost:5238/add", {
            method: 'post',
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