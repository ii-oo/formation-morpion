angular.module('Morpion')
    .component('morpionCell', {
        templateUrl: 'morpion-cell.template.html',
        bindings:{
            'index': '@', //
            'currentPlayer': '<', //Données en entrée depuis le parent morpion.component.js
            'onMove': '&' //Evenement en sortie vers le parent morpion.component.js
        },
        controller: function($scope) {
			var ctrl = this;
			ctrl.played = false;
			ctrl.playerClass = '';
			ctrl.play = () => {
				if (!ctrl.played) {
					ctrl.played = true;
					ctrl.playerClass = ctrl.currentPlayer;
					ctrl.onMove({index: ctrl.index});
				} else {
					console.warn('Impossible de jouer ici...');
				}
			};
			ctrl.reset = () => {
				ctrl.playerClass = '';
				ctrl.played = false;
            };
            //Association de la fonction ctrl.reset à l'évènement 'morpion-start'
			$scope.$on('morpion-start', ctrl.reset);
		}
	});