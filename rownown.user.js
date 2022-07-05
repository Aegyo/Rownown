// ==UserScript==
// @name         Ruins of Rowlph
// @namespace    http://github.com/aegyo/pokeclicker/
// @version      0.1
// @description  Improved unown images
// @author       Aegyo
// @match        https://www.pokeclicker.com/
// @grant        none
// ==/UserScript==

const normal = PokedexHelper.getImage.bind(PokedexHelper)
const better = (id) => {
    if (Math.floor(Number(id)) === 201) {
        const name = `R${String(id).split('.').map(Number).join('-')}`
        return `https://aegyo.github.io/Rownown/images//${name}.png`
    } else {
        return normal(id)
    }
}
PokedexHelper.getImage = better;
PokemonHelper.getImage = (p) => better(p.id);
