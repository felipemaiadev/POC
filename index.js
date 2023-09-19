
// 3020001 - Aciria
// 3020002 - Alto Forno
// 3020003 - Coqueria
// 3020004 - CoProduto 
// 3020005 - Sinter


let paySimple = [
  {IdFecha:20230901, Linea:3020001, IdMaterial:10001862, NmMaterial:'FINOS DE MANGANES' }
]

let arrPayload = [
  { IdFecha:20230901, 
    composition: [                                                       
      { 
        Linea:3020001,  // [ACIARIA]
        moving:[ 
                {
                  IdMaterial:10001862, 
                  NmMaterial:'FINOS DE MANGANES',
                    //   |           ENTRADAS                      |         SAIDAS                  |   AJUSTE   |    TOTAL  
                  stock:[ '20.000', '1760.000', '370.000', '510.000', '134.000', '240.000','130.000' ,  '220.50', '2.376.500' ] 
                },
                {
                  IdMaterial:35, 
                  NmMaterial:'FINOS METALICOS AF',
                    //   |           ENTRADAS                        |         SAIDAS                 |  AJUSTE   |    TOTAL  |
                  stock:[ '514.000', '60.000', '13.000', '1.104.000', '10.000', '1.020.000' , '10.000', '358.000', '1.009.000' ] 
                }
              ]
          },
          {
          Linea:3020002,  // [ALTO FORNO]]
          moving:[ 
                  {
                    IdMaterial:10001862, 
                    NmMaterial:'FINOS DE MANGANES',
                      //   |           ENTRADAS                      |         SAIDAS                  |   AJUSTE   |    TOTAL  
                    stock:[ '20.000', '1760.000', '370.000', '510.000', '134.000', '240.000','130.000' ,  '220.50', '2.376.500' ] 
                  },
                  {
                    IdMaterial:35, 
                    NmMaterial:'FINOS METALICOS AF',
                      //   |           ENTRADAS                        |         SAIDAS                 |  AJUSTE   |    TOTAL  |
                    stock:[ '514.000', '60.000', '13.000', '1.104.000', '10.000', '1.020.000' , '10.000', '358.000', '1.009.000' ] 
                  }
                ]
        }
  
      ]  
 }
]

let retjson = `{
  "traking":[
     {
        "IdFecha":"20230901",
        "moving":[
           {
              "IdMaterial":"10001862",
              "NmMaterial":"FINOS DE MANGANES",
              "stock":[
                 "20.000",
                 "1760.000",
                 "370.000",
                 "510.000",
                 "134.000",
                 "240.000",
                 "130.000",
                 "220.50",
                 "2.376.500"
              ]
           }
        ]
     }
  ]
}
`


function calcular() {
  
  let obj = JSON.parse(retjson);

  console.log(obj)
  
}

calcular();
