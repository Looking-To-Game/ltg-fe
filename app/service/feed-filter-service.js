'use strict';

const Game = require('../model/game');

module.exports = [
  '$q',
  '$log',
  function($q, $log, feedFilterService){
    $log.debug('#feedFilterService');

    let service = {};

    let lol = new Game('League of Legends', true);
    let overWatch = new Game('Overwatch', true, true, true);
    let bf1 = new Game('Battle Field One', true, true, true);
    let destiny = new Game('Destiny', false, true, true);
    let destiny2 = new Game('Destiny 2', true, true, true);
    let dota2 = new Game('Dota 2', true);
    let titanfall2 = new Game('Titanfall 2', true, true, true);
    let hots = new Game('Heroes of the Storm', true);
    let halo5 = new Game('Halo 5', false, true, false);
    let cod = new Game('Call of Duty', true, true, true);
    let wow = new Game('World of Warcraft', true);
    let mtg = new Game('Magic the Gathering');
    let dnd = new Game('Dungeons & Dragons');
    let catan = new Game('Settlers of Catan');
    let cardsHumanity = new Game('Cards Against Humanity');
    let pokeher = new Game('Poker');
    let risk = new Game('Risk');

    service.supportedGames = [lol, overWatch, bf1, destiny, destiny2, dota2, titanfall2, hots, halo5, cod, wow, mtg, dnd, catan, cardsHumanity, pokeher, risk];
    service.supportedPlatforms = ['PC', 'Xbox', 'PS4', 'Tabletop'];

    return service;
  },
];
