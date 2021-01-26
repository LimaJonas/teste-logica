function preencherPlanilha(){
    var table = document.getElementById("planilha");
    //total de maçãs e peras para ser mostrado ao final
    var total_maca = 0; 
    var total_pera = 0;

    // Laço de repetição para preencher 30 linhas
    for(var i = 1; i <= 30; i++){
        var maca_dia = 0; //Numero de maçãs levadas no dia
        var pera_dia = 0; //Numero de peras levada no dia

        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = i; //Dia
        cell2.innerHTML = maca_dia = callRandon(0,5); //Numero aleatório de Peras
        cell3.innerHTML = pera_dia = callRandon(0,5); //Numero aleatório de Maçãs

        // Caso 1, o melhor aluno foi João. Caso 2, Maria.
        var Melhor_Aluno = callRandon(1,2);
        cell4.innerHTML = Melhor_Aluno == 1 ? "João":"Maria";

        
        // Vetor com as frutas diarias que serão adicionados
        var frutas = [];
        for(var j = 1; j <= 3; j++){
            
            //Se o joão for o melhor aluno,
            //É dado priorida para ver se tem maçãs sobrando
            if(Melhor_Aluno == 1){

                if(maca_dia > 0){
                    
                    frutas.push("Maçã");
                    maca_dia--;
                    total_maca++;
                
                } else if(pera_dia > 0){
                
                    frutas.push("Pera");
                    pera_dia--;
                    total_pera++;
                
                } else{
                
                    frutas.push("Nenhuma");
                
                }
            } else{
                //Se a Maria for a melhor aluna,
                //É dado priorida para ver se tem peras sobrando
                if(pera_dia > 0){
                    
                    frutas.push("Pera");
                    pera_dia--;
                    total_pera++;
                
                } else if(maca_dia > 0){
                
                    frutas.push("Maçã");
                    maca_dia--;
                    total_maca++;
                
                }else{
                
                    frutas.push("Nenhuma");
                
                }
            }
        } 
    
        // Frutas 1,2 e 3 levadas
        cell5.innerHTML = frutas[0];
        cell6.innerHTML = frutas[1];
        cell7.innerHTML = frutas[2];
    }

    document.getElementById("total").innerHTML = "Este mês a professora levou <b>"+ total_maca +" maçãs</b> e <b>"+ total_pera +" peras</b>.";
}

// Chama um numero aleatório mais fácilmente 
function callRandon(min, max) {
    return Math.floor(Math.random() * max) + min; 
}