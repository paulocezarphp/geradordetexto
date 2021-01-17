

/*
   Lista de palavras aleatórias para gerar o resultado final
*/
var listadepalavras = [
'a','muda', 'canni','herem','ju','teret','pale','alt','shift','hum','poo',
'durt','homer','nii','casur','thir','kak','vert','bug','lag','leig',
'yol','peli','datt','woldeeemm','totonar','verick','trut','qqqe','zim','rat',
'kadi','yuta','susunaru','toktikpak','beru-cara','borg','rua','il','el','nome',
'cometo','paru','willcom','grumpjuir','calcado','risi','batabata','safirm','menorenpo','aar',
'seghyh','wejkt','borgmand','yyum','kadiho','noverkan','monic','vumm','zerimbarner','oioi',
'miriade', 'kava', 'toremureno', 'rorodem', 'turing', 'durmir', 'queen', 'roder', 'mi', 'juana',
'0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

/*
   Essa função é usada para gerar aleatoriamente uma palavra da lista de palavras
*/
function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   var resultadogerador =  Math.floor(Math.random() * (max - min)) + min;
   return listadepalavras[resultadogerador];
}

document.getElementById("botaogerartexto").addEventListener("click", function() {

   var textopronto = "";
   var inicioparagrafo = 0;
   var fimparagrafo = document.getElementById("npalavras").value;
   var numeroparagrafos = document.getElementById("nparagrafos").value;

   for(var j = 0; j < numeroparagrafos; j++){

     for(var i = inicioparagrafo; i < fimparagrafo; i++){
         
        if(i == 0){

           textopronto += getRandomInt(0,listadepalavras.length).charAt(0).toUpperCase() + 
           getRandomInt(1,listadepalavras.length).slice(1);

        }else{

           textopronto += " " + getRandomInt(1,listadepalavras.length);

        }

     }

     textopronto += ".";
     
     if(numeroparagrafos > 1){
        textopronto += "<br><br>";
     }
     

   }

   document.getElementById("textogerado").innerHTML = "" + textopronto;

});
