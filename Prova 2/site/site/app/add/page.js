"use client"
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { Salvar } from "./action";
import { useRouter } from "next/navigation";


export default function Cadastrar() {
    const router = useRouter();

    const [formData, setFormData] = useState({ Nome: "", Descricao: "", Prioridade: "", Realizada: 0 });
    const [sucesso, setSucesso] = useState(false)
    const handleChange = (e) => {
        setFormData(formData => ({ ...formData, [e.target.name]: e.target.value }));
    }

    const foo = (e) => {
        setFormData(formData => ({ ...formData, Prioridade: e.target.selectedIndex }))
    }

    const handleForm = async (e) => {
        e.preventDefault();


        if (formData.Nome == "") {
            return alert("Nome não pode ser vazio")
        }
        if (formData.Prioridade == "") {
            return alert("Prioridade não pode ser vazia")
        }


        const resultado = await Salvar(formData);
        if (resultado) {
            setSucesso(true);
        }
    }

    useEffect(() => {
        if (sucesso) {
            alert("Tarefa criada com sucesso!")
            router.replace("/")

        }
    }, [sucesso])
    return (
        <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", flexDirection: "column" }}>
            <header style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                <h2 style={{ fontSize: "22px", marginTop: 5 }}>Adicionando Tarefa</h2>

            </header>
            <form onSubmit={handleForm} className="flex flex-col w-96 self-center">
                <label htmlFor="titulo">Título da Tarefa: </label>
                <input id="titulo" className="p-1 rounded text-black" name="Nome" value={formData.nome} onChange={handleChange} />
                <label htmlFor="descricao">Descrição da Tarefa {"(opcional)"}: </label>
                <textarea id="descricao" className="p-1 rounded text-black" name="Descricao" value={formData.descricao} onChange={handleChange} />
                <label >Prioridade: </label>
                <select className="text-black p-2 rounded" onChange={foo} >
                    <option hidden>Escolha abaixo</option>
                    <option>Muito Alta</option>
                    <option>Alta</option>
                    <option>Padrão</option>
                    <option>Baixa</option>
                    <option>Muito Baixa</option>

                </select>
                <div style={{ display: "flex", flexDirection: "row" }}>
                    <Link href={"/"} style={{ width: 300 }}><button style={{ width: "100%" }} className="border rounded p-2 bg-red-500 active:bg-red-800 border-black mt-3 ">Cancelar</button></Link>
                    <button type="submit" style={{ width: 300 }} className="border rounded p-2 bg-green-500 active:bg-green-800 border-black mt-3" >Cadastrar</button>
                </div>
                {formData ?
                    <div style={{ marginTop: 200 }}>
                        <p>FormData tester:</p>
                        <p >{formData.nome} // {formData.descricao} //{formData.prioridade}</p>
                    </div>
                    : <p>null</p>}
            </form>
        </div>
    )
}