let volumeBalok = (...anu) => {
    let [p, l, t] = anu;
    return `volume balok adalah ${p * l * t}`
}

let volumeKubus = (s) => `volume kubus adalah ${s * s * s}` ;

console.log(volumeBalok(5,3,4));
console.log(volumeKubus(2));