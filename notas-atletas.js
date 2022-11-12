let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    },
   ];


atletas.forEach(
  (dadosAtletas)=>dadosAtletas.notas.sort((a,b)=>a-b)
)

atletas.forEach(function(dadosAtletas){
  console.log(`Atleta: ${dadosAtletas.nome}`)
  console.log(`Notas Obtidas: ${dadosAtletas.notas.toString()}`)
  let notasComputadas = dadosAtletas.notas.slice(1,dadosAtletas.notas.length-1)
  console.log(`Média Válida: ${notasComputadas.reduce((a, b) => a + b, 0) / notasComputadas.length}`)
  console.log()
}
)