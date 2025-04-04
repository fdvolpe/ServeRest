import * as utils from "../../support/utils_api";

context("Operações de produto pela API", () => {
    it("Consultar produto pelo nome", () => {
      
      utils.consultarProdutoPeloNomeAPI(); 
    })

    it("Criar produto e consultar pelo id", () => {  
      
      utils.criarConsultarProdutoPeloIdAPI(); 
    })
  })
    