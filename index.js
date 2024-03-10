/* Vytvořte si repozitář ze šablony cviceni-dovednosti. V repozitáři najdete zdrojové 
soubory stránky se třemi posuvníky. Ty ukazují úroveň dovedností v různých oblastech.
1. Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele 
aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0–100. 
Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na 
uživatelem zadaná čísla.
2. Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: 
textový řetězec představující id elementu a číslo mezi 0–100. Tato funkce při zavolání 
nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu,
abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód. */

const updateSkill = (id, uroven) => {
    const value = document.querySelector(`#${id} .skill__value`)
    value.textContent = uroven + "/100"
    const progress = document.querySelector(`#${id} .skill__progress`)
    progress.style.width = uroven + "%"
}

const vsechnyUrovne = () => {
const urovenHTML = Number(prompt("Jaká je tvá úroveň HTML (0-100) ?"))
    if (urovenHTML > 0 && urovenHTML < 100) {
    updateSkill('skill1', urovenHTML)
}  else {
    console.log("Nesprávně zadané hodnoty")
}
const urovenCSS = Number(prompt("Jaká je tvá úroveň CSS (0-100) ?"))
    if (urovenCSS > 0 && urovenCSS < 100) {
        updateSkill('skill2', urovenCSS)
}   else {
    console.log("Nesprávně zadané hodnoty")    
}
    
const urovenJS = Number(prompt("Jaká je tvá úroveň JavaScriptu (0-100) ?"))
    if (urovenJS > 0 && urovenJS < 100) {
        updateSkill('skill3', urovenJS)
}   else {
    console.log("Nesprávně zadané hodnoty")
}
}
vsechnyUrovne()
 
/* Napište funkci max3, která vrátí největší ze tří zadaných čísel. Opět se vyhněte použití funkce Math.max */

const max3 = () => {
if (urovenHTML >= urovenCSS && urovenHTML >= urovenJS) {
    return urovenHTML
} else if (urovenCSS >= urovenHTML && urovenCSS >= urovenJS) {
    return urovenCSS
} else {
    return urovenJS
}  
}
max3()

console.log("Nejvyšší znalosti máte v:" + max3())
