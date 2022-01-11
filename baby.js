


function site01(){
    var av1 = document.getElementById('av1')
    var texto1 = document.getElementById('pr01')
    var acima1 = document.getElementById('scip01')
    

    acima1.innerHTML = '<p> Escolha uma das opções e Compre o seu bilheite valor: R$20.00 </p>'
    av1.innerHTML = '<img id="conta1" src="conta.png" width="300px">'
    texto1.innerHTML = '<hr><p id="pix01">Número para PIX 11-9.9904-3535</p>'
}

function site02(){
    var av2 = document.getElementById('av2')
    var texto3 = document.getElementById('pr02')
    var acima2 = document.getElementById('scip02')

    acima2.innerHTML = '<p> Escolha uma das opções e Compre os seus dois bilheites valor: R$40.00 </p>'
    texto3.innerHTML = '<p id="pix02">Número para PIX 11-9.9904-3535</p>'
    av2.innerHTML = '<img id="conta2"src="conta.png" width="300px">'
    
}
function site03(){
   
    var texto2 =  document.getElementById('pr03')
    var acima = document.getElementById('scip03')
    var av = document.getElementById('av')

    av.innerHTML = '<img id="conta"src="CONTACAIXA.png" width="350px">'
    texto2.innerHTML = '<p id="pix03">Número para PIX 11-9.9904-3535</p>'
    acima.innerHTML = '<p> Escolha uma das opções: <br>DEPÓSITO - <b>TRANSFERÊNCIA - PIX </p>'
    
}
    
