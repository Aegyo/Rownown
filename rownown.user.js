// ==UserScript==
// @name         Ruins of Rowlph
// @namespace    http://github.com/aegyo/pokeclicker/
// @version      0.1
// @description  Improved unown images
// @author       Aegyo
// @match        https://www.pokeclicker.com/
// @grant        none
// ==/UserScript==

const dexNormal = PokedexHelper.getImage.bind(PokedexHelper);
const helpNormal = PokemonHelper.getImage.bind(PokemonHelper);

const dexShowShinies = () => PokedexHelper.toggleAllShiny ? PokedexHelper.toggleAllShiny() : !PokedexHelper.hideShinyImages()

const isUnown = (id) => Math.floor(Number(id)) === 201;
const unown = (id, shiny) => {
    const name = `R${String(id).split('.').map(Number).join('-')}${shiny ? '-s' : ''}`
    return `https://aegyo.github.io/Rownown/images//${name}.png`
}

const betterDex = (id) => {
    if (isUnown(id)) {
        const shiny = App.game.party.alreadyCaughtPokemon(id, true) && dexShowShinies();
        return unown(id, shiny);
    } else {
        return dexNormal(id)
    }
}

const betterHelp = (p, shiny) => {
    if (isUnown(p.id)) {
        return unown(p.id, shiny);
    } else {
        return helpNormal(p, shiny)
    }
}

PokedexHelper.getImage = betterDex;
PokemonHelper.getImage = betterHelp;
