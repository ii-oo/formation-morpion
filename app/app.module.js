"use strict";
let gameData = {
    players: ['red','blue'],
    current: 0,
    //Données de la grille du morpion
    values: [],
    switchPlayer: () => gameData.current =  (gameData.current + 1) % 2
};

angular.module('Morpion', [])
.value('gameData', gameData);