// problem statement

// a team is looking for skilled players 
// for eg: [5, 3, 4, 2, 10, 8] - skills of players 
// minimum players required - 1 minimumSkillLevel = 5 maximum skillLevel = 8 
// output: [5][8][5, 8] team can pick either player with skill 5, or
// team can pick player with skill 8 or team can pick both the players with skill 5 and 8


function nCr(n, r) {
    if(r > n) return 0;

    // for optimization we can do r = Math.min(r, n - r) because nCr is same as nC(n-r)
    // for example 5C2 is same as 5C3  both are 10
    // 5c1 is same as 5C4 both are 5

    r = Math.min(r, n - r);

    let numerator = 1;
    let denominator = 1;
    for(let i =0; i<r; i++) {
        numerator *= (n - i);
        denominator *= (i+1);
    }

    // formula for nCr is n! / (r! * (n-r)!)
    // for example 5C2 is 5! / (2! * 3!) => (5 * 4) / (2 * 1) => 10
    // 5c3 is 5! / (3! * 2!) => (5 * 4 * 3) / (3 * 2 * 1) => 10

    return numerator / denominator;

}


function playerSelection(skills, minSkill, maxSkill, minPlayers) {
    const selectedPlayers = skills.filter((skill) => skill >= minSkill && skill <= maxSkill)

    const m = selectedPlayers.length
    let total = 0;
    for(let i = minPlayers; i<= m; i++) {
        total += nCr(m, i)
    }
    return total
}

console.log(playerSelection([6,4,8,7,5], 4, 8, 2))

// time complexity: O(n) for filtering + O(m * m) for calculating combinations where m is number of selected players
// worst case => O(n ^ 2) 
// space complexity: O(m) for storing selected players
// worst case => O(n) when all players are selected