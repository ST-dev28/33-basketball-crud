class Basketball {
    constructor(teamName) {
        this.teamName = teamName;
        this.playersList = [];
        this.teamsList = [];
        this.score = 0;
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
            //count: playersCount,
        });
        console.log(`A "${team}" just entered a game!`);
    }

    buyPlayer(teamId, playerId) {
        //console.log(teamId, playerId);
        console.log(`"${this.teamsList[teamId - 1].name}" team just acquired new player ${this.playersList[playerId - 1].name} for ${this.playersList[playerId - 1].price} cash/year!`);
    }

    teamValue(teamId, notification = true) {
        /*let totalValue = 0;
        const players = this.buyPlayer(teamId, false);

        for (const one of players.player) {
            const one = this.playersList[player.id - 1];
            totalValue += one.price;
        }

        if (notification) {
            console.log(`${team} team is paying ${this.totalValue} cash/year for it's players.`);
        }
        return totalValue;*/
    }

    letsPlay() {

    }

    score() {

    }

    seasonSummary() {

    }

}

module.exports = Basketball;