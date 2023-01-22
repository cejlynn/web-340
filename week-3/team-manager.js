
/*

Title: team-manager.js 
Author: Caitlynne Johnson
Date: 1/21/23
Description: JavaScript for sports-app */

// imports the Team class from the team.js file
const Team = require('./team'); 

// creating an array of 5 five teams 

let teams = [
    new Team('Baltimore', 'Poe', 51), 
    new Team ('Seattle', 'Blitz', 53),
    new Team ('Carolina', 'Sir Purr', 53),
    new Team ('Arizona', 'Big Red', 51),
    new Team ('Denver', 'Miles', 51)
]

// creating a function called getTeams

module.exports.getTeams = function () {
    return teams;
}


module.exports.getTeams = function (name) {
    for (let Team of teams) {
        if (Team.name === name) {
            return Team 
        }
    }
}

module.exports.displayTeam = function(Team) {
    return '   Name: ' + Team.name + '\ n  Masocot: ' + Team.mascot + '\n  Player Count: ' + Team.playerCount + '\n';
}