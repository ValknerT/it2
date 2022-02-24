const skryteOrd = [
    "sjenerøs",
    "omgjengelig",
    "ambisiøs",
    "munter",
    "hardtarbeidende",
    "troverdig",
    "tålmodig",
    "optimistisk",
    "følsom",
    "sosial",
    "besluttsom",
    "morsom",
    "blid",
    "vakker",
    "lekende",
    "elskverdig",
    "talentfull",
    "begavet"
];

let person = prompt("Hvem vil du skryte av?");
let antallSkryteord = parseInt(prompt("Hvor mange skryteord?"));

function skrytAv(person, antallSkryteord) {
    let skryteSetning = "Kjære, <span class='navn'>" + person + "</span>!<br> Du er ";
    if(antallSkryteord > skryteOrd.length) {
        alert("Så mange fine ord har me ikkje!");
        return;
    }
    else if (antallSkryteord >= 2) {
        for (let i = 0; i < antallSkryteord; i++) {
            let plassering = tilfeldigTall(0,skryteOrd.length-1);
            let utvaltOrd = skryteOrd[plassering];
            skryteOrd.splice(plassering,1);
            if (i === antallSkryteord-1) {
                skryteSetning = skryteSetning.slice(0, -2) +  " og " + utvaltOrd + "."; // NB: Fjerning av "," etter siste ord. -1 ville gitt "tomrommet"/mellomrommet.
            }
            else {
                skryteSetning += utvaltOrd + ", ";
            }
        }
    }
    else {
        let plassering = tilfeldigTall(0,skryteOrd.length-1);
        let utvaltOrd = skryteOrd[plassering];
        skryteOrd.splice(plassering,1);
        skryteSetning += "i alle fall " + utvaltOrd + ".";
    }
    console.log(skryteSetning);
    document.getElementById("skrytUt").innerHTML = skryteSetning;
}

//skrytAv("Jo", 19);
skrytAv(person, antallSkryteord);

function tilfeldigTall(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}