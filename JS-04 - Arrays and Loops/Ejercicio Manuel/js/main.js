console.log("Ejercicio 1");

console.log("******************Part 1*********");
let fila = ["Sofia" , "David" , "Juan"];
console.log(fila);

console.log("******************Part 2*********");
fila.push ("Sara", "Augustin")
fila.shift ("Sofia, ")
console.log(fila);

console.log("******************Part 3*********");
fila.push ("Elena")
fila.splice(1,0, "Renata")
console.log(fila);

console.log("Ejercicio 2");
const MAX =5;
let linea;
for (let ren=1; ren<=MAX; ren++){
    linea="";
    for (let col=1; col<=ren; col++){
        linea+="*";
    }
    console.log(linea);
}

console.log("======================");
for (let ren=MAX; ren>=1; ren--){
    linea="";
    for (let col=1; col<=ren; col++){
        linea+="*";
    }
    console.log(linea);
}

console.log("Ejercicio 3");

 let cont = 0 ;
while (cont<=100) {
    console.log(cont);
    cont+=.5;
} 




console.log("===========");
const MAX1=5;
let total =0;

for (let suma=1; suma<=MAX1; suma++){
   total += suma;
    }
    
console.log(total);
