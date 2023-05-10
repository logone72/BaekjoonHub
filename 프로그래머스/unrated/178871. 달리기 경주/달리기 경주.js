/*
1. call이 될 때 call 된 player와 그 앞 player의 순서만 바꾸면된다. (index swap)
1.1 1등인 경우 무시한다  (index === 0)
2. call된 player을 찾기위해 매번 탐색을 하지 않아야한다.
2.1 해시 테이블 (js Map) 으로 플레이어의 이름으로 등수 (index)에 바로 접근할수있게한다. 
2.2 이는 중복된 player 명이 없기에 가능하다.
*/

function solution(players, callings) {
    const playerFinderMap = new Map(players.map((player,index) => [player, index]));
    
    for (const calledPlayer of callings) {
        const calledPlayerIndex = playerFinderMap.get(calledPlayer);
        
        if (calledPlayerIndex === 0)
            continue;
        
        const frontPlayer = players[calledPlayerIndex - 1]
        
        players[calledPlayerIndex - 1] = calledPlayer;
        players[calledPlayerIndex] = frontPlayer;
        playerFinderMap.set(calledPlayer, calledPlayerIndex - 1)
        playerFinderMap.set(frontPlayer, calledPlayerIndex)
    }
    
    return players;
}