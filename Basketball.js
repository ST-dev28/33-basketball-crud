class Basketball {
    constructor(teamName) {
        this.teamName = teamName;
        this.playersList = [];
        this.teamsList = [];
        this.playingTeams = [0, 0];
        this.gamesPlayed = 0;
        //this.teamPlayersValue = 0;
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
            wins: 0,
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
        this.playingTeams =[id1, id2];
        this.gamesPlayed++;
        console.log(`New game everybody!\n"${this.teamsList[id1-1].name}" vs. "${this.teamsList[id2-1].name}"`);
    }

    score(a, b) {
        let teamIndex = 0;
        if (a > b) {
            teamIndex = this.playingTeams[0] - 1;
        } else {
            teamIndex = this.playingTeams[1] - 1;
        }
        const team = this.teamsList[teamIndex];
        team.winsCount++
        console.log(`***${team.name}" wins!`);
    }

    seasonSummary() {
    console.log(`Season summary for "${this.teamName}" 3x3 league:`);
    console.log('###############');
    console.log(`Total games played: ${this.gamesPlayed}`);
    let wins = 0;         // kiek viso laimejimu per komanda
    let winner = ''; 
    for (const team of this.teamsList) {
        if (this.winsCount > wins) {
            wins = this.winsCount;
            winner = team.name;
        }
    }
    console.log(`Winner team: "${winner} "`);
    console.log(`####################`);
    }
}

module.exports = Basketball;