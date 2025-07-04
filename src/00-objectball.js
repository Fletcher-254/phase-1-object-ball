function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 22,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

// Helper to get all players in one object
function allPlayers() {
  const game = gameObject();
  return { ...game.home.players, ...game.away.players };
}

// Returns number of points scored by a player
function numPointsScored(playerName) {
  return allPlayers()[playerName]?.points;
}

// Returns shoe size of a player
function shoeSize(playerName) {
  return allPlayers()[playerName]?.shoe;
}

// Returns colors of a team
function teamColors(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return game[side].colors;
    }
  }
}

// Returns an array of both team names
function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

// Returns array of player jersey numbers for a given team
function playerNumbers(teamName) {
  const game = gameObject();
  for (let side in game) {
    if (game[side].teamName === teamName) {
      return Object.values(game[side].players).map(player => player.number);
    }
  }
}

// Returns player stats object (excluding name)
function playerStats(playerName) {
  return allPlayers()[playerName];
}

// Returns the number of rebounds by the player with the biggest shoe size
function bigShoeRebounds() {
  let biggestShoe = 0;
  let rebounds = 0;
  const players = allPlayers();
  for (let player in players) {
    if (players[player].shoe > biggestShoe) {
      biggestShoe = players[player].shoe;
      rebounds = players[player].rebounds;
    }
  }
  return rebounds;
}
