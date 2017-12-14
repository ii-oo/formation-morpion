angular.module('Morpion')
    .component('morpionCell', {
        templateUrl: 'morpion-cell.template.html',
        bindings:{
            'index': '@'
        },
        controller: function($scope, gameData){
            var ctrl = this;
            ctrl.played = false;
            ctrl.playerClass = '';
            ctrl.play = () => {
                if(!ctrl.played){
                    ctrl.played = true;
                    ctrl.playerClass = gameData.players[gameData.current];
                    gameData.switchPlayer();
                    gameData.values[ctrl.index] = ctrl.playerClass;
                   // console.log('Game data : ' + gameData.current);
                } else {
                    console.warn('Impossible de jouer dans cette cellule !!');
                }               
            };
            ctrl.reset = () => {
                ctrl.playerClass = '';
                ctrl.played = false;
            };
            //Association de la fonction ctrl.reset avec l'évènement 'morpion-start'
            $scope.$on('morpion-start', ctrl.reset);
    }
});