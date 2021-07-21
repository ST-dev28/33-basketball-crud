class Basketball {
    constructor(teamName) {
        this.teamName = teamName;
        this.playersList = [];
        this.teamsList = [];
        //this.score = 0;
        this.teamPlayersValue = 0;
    }

    wannaBePlayer(player, playerPrice) {
        this.playersList.push({
            name: player,
            price: playerPrice,
        })
        console.log(this.playersList);
    }

    createTeam(team) {
        this.teamsList.push({
            name: team,
            list: [],
        });
        console.log(`A "${team}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        //console.log(teamId, playerId);
        const team = this.teamsList[teamId -1];
        const teamPlayers = team.list;
        //console.log(teamPlayers, playerId);
            if (teamPlayers.includes(playerId)) {
                console.log(`"${team.name}" team can't add the same player twice!`);  
                return;
            } else if (teamPlayers.length >= 3) {
                console.log(`"${team.name}" team can't add extra players to it's team.\nMaximum players per team is 3.`);
                return;
            } else { 
                    teamPlayers.push(playerId);
            }
        console.log(`"${team.name}" team just acquired new player ${this.playersList[playerId - 1].name} for ${this.playersList[playerId - 1].price} cash/year!`);
        //this.teamPlayersValue += this.playersList[playerId - 1].price;
        //console.log(this.teamPlayersValue);*/
    }

    teamValue(Id) {
        let totalValue = 0;
        //console.log(this.teamsList[Id-1]);
        for (const playerID of this.teamsList[Id-1].list) {
            totalValue += this.playersList[playerID-1].price;
            //console.log(playerID);
            //console.log(totalValue);
        }
        console.log(`${this.teamsList[Id - 1].name} team is paying ${totalValue} cash/year for it's players.`);
    }

    letsPlay(id1, id2) {

        if (id1 < id2 &&
            id1-1 === 0 ) {
        console.log(`New game everybody!\n"${this.teamsList[id1-1].name}" vs. "${this.teamsList[id2-1].name}"`);
        }
        if (id1 > id2 &&
            id1-1 === 1) {
            console.log(`New game everybody!\n"${this.teamsList[id1-1].name}" vs. "${this.teamsList[id2-1].name}"`);
        }
    }

    score(a, b) {

        if (a > b) {
            console.log(`"${this.teamsList[0].name}" wins!"`);
        } if (a < b) {
            console.log(`"${this.teamsList[1].name}" wins!"`);
        }
    }

    seasonSummary() {

    }

}

module.exports = Basketball;