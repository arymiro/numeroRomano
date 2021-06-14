function convertToRoman(num) {
    if (isNaN(num))
           return NaN;
       var digits = String(+num).split(""),
           key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                  "","I","II","III","IV","V","VI","VII","VIII","IX"],
           roman = "",
           i = 3;
       while (i--)
           roman = (key[+digits.pop() + (i * 10)] || "") + roman;
       return Array(+digits.join("") + 1).join("M") + roman;
       }
   

         
function mostrarResultado(){
    var stCadena = document.getElementById('entero').value;
    
    var resultado = convertToRoman(stCadena);

     document.getElementById("resultado").textContent = resultado + " en número romano.";
    }
  
