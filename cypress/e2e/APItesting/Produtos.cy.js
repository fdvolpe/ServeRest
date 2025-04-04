import * as utils from "../../support/utils_api";

context("GET consultar produto específico", () => {
    it("Consultar produto pelo nome", () => {
      
      utils.consultarProdutoPeloNomeAPI(); 
    })

    it("Criar produto e consultar pelo id", () => {  
      
      utils.criarConsultarProdutoPeloIdAPI(); 
    })
  })
    