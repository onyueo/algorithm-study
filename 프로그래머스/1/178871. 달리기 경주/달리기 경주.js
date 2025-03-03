function solution(players, callings) {
    let map = new Map()
    
    players.forEach((player,i) => map.set(player,i))
    
    for(let i=0; i<callings.length; i++){
        const index = map.get(callings[i]);
        
        map.set(callings[i], index-1);
        map.set(players[index-1], index);
        
        if(index >= 0 )
            [players[index],players[index-1]]=[players[index-1],players[index]];
    }
    
    return players;
}