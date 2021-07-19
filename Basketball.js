class Basketball {
    constructor(teamName) {
        this.teamName = teamName;
        this.playersList = [];
        this.teamsList = [];
        this.score = 0;
        this.teamPlayersValue = 0;
    }

    wannaBePlayer(player, playerPrice, playerId) {
        this.playersList.push({
            name: player,
            price: playerPrice,
            //idPl: playerId,
        })
        console.log(this.playersList);
    }

    createTeam(team, playersCount) {
        this.teamsList.push({
            name: team,
            list: [],
            //count: playersCount,
        });
        console.log(`A "${team}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        //console.log(teamId, plyerId);
        this.teamsList[teamId-1].list.push(playerId);
        console.log(`"${this.teamsList[teamId - 1].name}" team just acquired new player ${this.playersList[playerId - 1].name} for ${this.playersList[playerId - 1].price} cash/year!`);
        //this.teamPlayersValue += this.playersList[playerId - 1].price;
        //console.log(this.teamPlayersValue);
    }

    teamValue(Id) {
        let totalValue = 0;
        //console.log(this.teamsList[Id-1]);
        for (const playerID of this.teamsList[Id-1].list) {
            totalValue += this.playersList[playerID-1].price;
            //console.log(playerID);
            //console.log(totalValue);
            //console.log(`${this.teamsList[teamId - 1].name} team is paying ${this.teamPlayersValue} cash/year for it's players.`);
        }

            console.log(`${this.teamsList[Id - 1].name} team is paying ${totalValue} cash/year for it's players.`);
        }



    letsPlay() {

    }

    score() {

    }

    seasonSummary() {

    }

}

module.exports = Basketball;