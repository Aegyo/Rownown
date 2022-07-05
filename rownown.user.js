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
        return "https://cdn.discordapp.com/attachments/979581562704252970/993395219066269696/R201-15.png"
    } else {
        return normal(id)
    }
}
PokedexHelper.getImage = better;
PokemonHelper.getImage = (p) => better(p.id);
