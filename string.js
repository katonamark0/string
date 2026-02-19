//console.log(string.fromcode(65, 108, 109, 97));

// 1. Írj programot, ami bekéri a felhasználó nevét, majd keresztnevén szólítva köszönti!

// let nev = prompt("Kérem adja meg a nevét!");
// 
// if(nev){
    // let felhasznalo = nev.split(" ")[1];
// 
// console.log(felhasznalo);
// }
// else{
    // console.log("Add meg a neved!");
// }

// 2. Írj programot, mely megszámolja, hogy az inputként érkező mondatban hány darab ”a”
// betű van!

// let mondat = prompt("Kérem adjon meg egy mondatot!");
// let aBetu = 0;
// 
// if (mondat) {
    // for (let index = 0; index < mondat.length; index++) {
    // if (mondat[index] === 'a'){
        // aBetu++
    // }
// }
// }
// 
// 
// console.log(aBetu);


// 3. Olvass be egy szöveget, és írd ki a betűit fordított sorrendben!

let szoveg = prompt("Adj meg egy szöveget!");

let forditottSzoveg = "";

for (let i = szoveg.length - 1; i >= 0; i--) {
    forditottSzoveg += szoveg[i];    
}

console.log(forditottSzoveg);


// 4. 5. HF

