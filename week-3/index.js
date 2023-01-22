
/*

Title: index.js 
Author: Caitlynne Johnson
Date: 1/21/23
Description: JavaScript for sports-app */

/* importing the modules from the team.manager.js file */


const TeamManager = require('./team-manager.js');

let teams = TeamManager.getTeams();

console.log('-- DISPLAYING TEAMS --')
    for (let team of teams) {
        console.log(TeamManager.displayTeam(team))
    }

    console.log('-- DISPLAYING A SINGLE TEAM --');
        let firstSingleTeam = TeamManager.getTeam('Baltimore');
        console.log(TeamManager.displayTeam(firstSingleTeam))
        let secondSingleTeam = TeamManager.getTeam('Seattle');
        console.log(TeamMananger.displayTeam(secondSingleTeam))



