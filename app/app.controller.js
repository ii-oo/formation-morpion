angular.module('Morpion')
.controller('MorpionController', function($rootScope, $scope, gameData){
   //Est ce qu'on est en train de jouer ?
    this.playing = false;
    this.results = false;
    this.isDraw = false;
    this.winner;
    this.start = () => {
        this.playing = true;
        $rootScope.$broadcast('morpion-start');
    }
    $scope.$on('morpion-stop', () => {
        this.results = true;
        gameData.switchPlayer();
        this.isDraw = gameData.status.isDraw;
        this.winner = gameData.players[gameData.current];
        this.playing = false;
    });

    this.test = () =>{
        let values = ['red','red','blue','','red','blue','','','blue'];
        //Test lignes
        let colourPlayer = 'red';
        let colour = '';

        //Test lignes
        for(let i = 0; i < 9; i += 3){
            colour = '';
            for(let j = i; j < i+3; j++){
               colour += values[j];
            }
            console.log('couleur : ' + colour + ' i: ' + i);
            if(colour === colourPlayer+colourPlayer+colourPlayer){
                console.log('Gagné !!');
                break;
            }
        }
        //Test colonnes

    }
});