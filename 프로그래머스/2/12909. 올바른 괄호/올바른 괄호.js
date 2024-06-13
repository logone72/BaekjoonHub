function solution(str){
    let answer = true;
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
        const curr = str[i];
        
        if (curr === '(') {
            stack.push(curr);
            continue;
        }
        
        const last = stack.pop();
            
        if (last !== '(') {
            answer = false;
            break;
        }
    }
    
    if (stack.length > 0) {
        answer = false;
    }

    return answer;
}