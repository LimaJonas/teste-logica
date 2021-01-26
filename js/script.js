function preencherPlanilha(){
    // Seleciona a tabela com id "tablePlanilha"
    var table = document.getElementById("tablePlanilha");

    // Função para deleta todas as linhas da tabela após o cabeçalho.
    deletarLinhas(table);    

    //Total de maçãs e peras para ser mostrado ao final
    var macaTotal = 0; 
    var peraTotal = 0;

    // Laço de repetição para preencher 30 linhas
    for(var i = 1; i <= 30; i++){
        var peraDia = numeroAleatorio(0,5); //Número aleatório de Maçãs levadas no dia
        var macaDia = numeroAleatorio(0,5); //Número aleatório de Peras levadas no dia
        var alunoMelhor = numeroAleatorio(1,2); //Número aleatório para ver quem foi o melhor aluno no dia(1 - João; 2 - Maria)

        // Cria uma nova linha na tabela
        var row = table.insertRow(i);

        // Cria 7 variaveis referentes as 7 celulas que serão adicionadas
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = "<b>"+ i +"</b>"; //Insere na celula o dia
        cell2.innerHTML = peraDia; //Insere na celula o número de maçãs levadas no dia
        cell3.innerHTML = macaDia; //Insere na celula o número de peras levada no dia

        // Insere na celula o melhor aluno do dia
        cell4.innerHTML = alunoMelhor == 1 ? "João":"Maria";

        // Vetor com as 3 frutas que serão levadas pela professora
        var frutaLevada = [];
        
        // Switch para decidir qual fruta priorizar, de acordo com o melhor aluno [João(1) - Maçã; Maria(2) - Pera]
        switch(alunoMelhor){
            case 1:
                while(frutaLevada.length <= 2){
                    if(macaDia > 0){
                        frutaLevada.push("Maçã");
                        macaDia--;
                        macaTotal++;
                    } else if(peraDia > 0){
                        frutaLevada.push("Pera");
                        peraDia--;
                        peraTotal++;
                    } else{
                        frutaLevada.push("Nenhuma");
                    }
                }
                break;
            case 2:
                while(frutaLevada.length <= 2){
                    if(peraDia > 0){
                        frutaLevada.push("Pera");
                        peraDia--;
                        peraTotal++;
                    } else if(macaDia > 0){
                        frutaLevada.push("Maçã");
                        macaDia--;
                        macaTotal++;
                    } else {
                        frutaLevada.push("Nenhuma");
                    }
                }
                break;
        }

        // Inserindo nas celulas as Frutas 1, 2 e 3 levadas
        cell5.innerHTML = frutaLevada[0];
        cell6.innerHTML = frutaLevada[1];
        cell7.innerHTML = frutaLevada[2];
    
    }
    // Altera a tag p para mostrar o resultado final
    document.getElementById("pTotal").innerHTML = "Este mês, a professora levou <b>"+ macaTotal +" maçãs</b> e <b>"+ peraTotal +" peras</b>.";
}

// Pega o numero de linhas da tabela e deleta do ultimo para o primeiro, parando no cabeçalho.
function deletarLinhas(table){
    for(var i = table.rows.length -1; i > 0; i--){
        table.deleteRow(i);
    }
}

// Chama um numero aleatório mais fácilmente.
function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * max) + min; 
}