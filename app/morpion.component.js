angular.module('Morpion')
    .component('morpion', { //selecteur avec nom de l'élément html
        templateUrl: 'morpion.template.html',//Objet JSON
        controller: function($scope, gameData){//
            var ctrl = this;
            let checkCase = (c1, c2, c3) => {
                return c1 ? c1 === c2 && c1 === c3 :false;
            }
            ctrl.checkWin = () => {
                // Vérification des cases jouées.
                let result = false;
                for (let i = 0; i < 9; ++i) {
                    if (i % 3 == 0) {
                        //lignes
                        result = result || checkCase(
                            gameData.values[i],
                            gameData.values[i+1],
                            gameData.values[i+2],
                        )
                    if (i < 3) {
                        //Colonnes
                        result = result || checkCase(
                            gameData.values[i],
                            gameData.values[i+3],
                            gameData.values[i+6]);
                    }
                }
                //Diagonales
                result = result || checkCase(
                    gameData.values[0],
                    gameData.values[4],
                    gameData.values[8]);
                result = result || checkCase(
                    gameData.values[2],
                    gameData.values[4],
                    gameData.values[6]);
                
                //Emission d'un evènement de l'enfant vers le controlleur avec $emit
                //Si le tableau est totalement rempli
                let isDraw = !result && Object.keys(gameData.values).length === 9;
                if (result || isDraw) {
                    gameData.status.isDraw = isDraw;
                    $scope.$emit('morpion-stop'); //(Notation avec tiret pour pouvoir splitter)
                }
            };

            $scope.$on('morpion-start', () => {
                gameData.players.reverse();
                gameData.current = 0;
                gameData.values = [];
                gameData.status.isDraw = false;
                gameData.status.playing = false;
                gameData.status.winner = '';  
            });
            }
        }
});