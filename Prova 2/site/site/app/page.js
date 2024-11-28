"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Finalizar, Obter, Remover } from "./actions";

const Cards = ({ id, nome, prioridade, realizado, atualizarDados }) => {

  function translatePriority(prioridade) {
    switch (prioridade) {
      case 1:
        return "Muito Alta"
        break;
      case 2:
        return "Alta"
        break;
      case 3:
        return "Padrão"
        break;
      case 4:
        return "Baixa"
        break;
      case 5:
        return "Muito Baixa"
        break;

    }
  }

  async function handleDelete() {
    const resposta = confirm('Deseja realmente remover este curso');
    if (resposta) {
      console.log("Apertou em sim")
      const resultado = await Remover(id)
      if (resultado) {
        atualizarDados();
      }
    }
  }

  async function handleRealize() {
    const result = await Finalizar({ id: id, nome: nome, prioridade: prioridade, realizado: 1 })
    if (result)
      atualizarDados();
  }

  return (
    <div className="border rounded p-3 m-3">
      <p>{nome}</p>
      <p>{translatePriority(prioridade)}</p>
      <button className="border rounded p-2 bg-blue-500 active:bg-blue-800 border-black mt-3" >Editar</button>
      <button className="border rounded p-2 bg-red-500 active:bg-red-800 border-black mt-3" onClick={handleDelete}>Excluir</button>
      <button className="border rounded p-2 bg-green-500 active:bg-green-800 border-black mt-3" onClick={handleRealize}>Realizar</button>
    </div>

  )
}

export default function Home() {
  const [tarefas, setTarefas] = useState(null);
  const [page, setPage] = useState("naoRealizadas");

  async function obterTarefas() {
    const result = await Obter();
    console.log(result)
    setTarefas(result);
  }

  function atualizarDados() {
    console.log("Atualizar Dads1!!! Fui chamado")
    setTarefas(null);
    obterTarefas();
  }

  useEffect(() => {
    obterTarefas();

  }, [])
  return (
    <div>
      <header style={{ display: "flex", justifyContent: "space-evenly" }} >
        <h2 style={{ fontSize: "22px", marginTop: 5 }}>Tarefas</h2>
        <Link href={"/add"}>
          <button className="border rounded p-2 bg-green-500 active:bg-green-800">Cadastrar Tarefa</button>
        </Link>
      </header>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="border rounded  border-white p-3 mt-3" onClick={() => { setPage("naoRealizadas") }}>Não Realizadas</button>
        <button className="border rounded  border-white p-3 mt-3" onClick={() => { setPage("realizadas") }}>Realizadas</button>
      </div>
      {page && page == "naoRealizadas" ? (<div id="containerPrincipal" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>{
        tarefas && tarefas.map((tarefa) => {
          if (tarefa.realizado == 0) {

            return (
              <Cards realizado={tarefa.realizado} atualizarDados={atualizarDados} key={tarefa.id} id={tarefa.id} nome={tarefa.nome} prioridade={tarefa.prioridade} />
            )
          }
        })
      }
      </div>) : (<div id="containerPrincipal" style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>{
        tarefas && tarefas.map((tarefa) => {
          if (tarefa.realizado == 1) {

            return (
              <Cards realizado={tarefa.realizado} atualizarDados={atualizarDados} key={tarefa.id} id={tarefa.id} nome={tarefa.nome} prioridade={tarefa.prioridade} />
            )
          }
        })
      }
      </div>)}

    </div>
  );
}
