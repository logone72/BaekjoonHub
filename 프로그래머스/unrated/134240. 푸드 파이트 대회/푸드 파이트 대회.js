function solution(food) {
    let str1 = '', str2 = '';
    for (let i = 1; i < food.length; i++) {
        const foodCount = Math.floor(food[i] / 2);
        const foodNo = i.toString();
        
        for (let j = 0; j < foodCount; j++) {
            str1 += foodNo;
            str2 = foodNo + str2;
        }
    }
    return str1 + '0' + str2;
}