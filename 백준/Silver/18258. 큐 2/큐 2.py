import sys
from collections import deque
n = int(sys.stdin.readline())

Q = deque([])

for i in range(n):
    cmd = []
    cmd = list(sys.stdin.readline().split())
    if len(cmd) > 1:
        order = cmd[0]
        num = cmd[1]
    else:
        order = cmd[0]

    if order == 'push':
        Q.append(num)
    elif order == 'pop':
        if len(Q) > 0:
            print(Q[0])
            Q.popleft()
        else:
            print('-1')
    elif order == 'size':
        print(len(Q))
    elif order == 'empty':
        if len(Q) > 0:
            print('0')
        else:
            print('1')
    elif order == 'back':
        if len(Q) > 0:
            print(Q[-1])
        else:
            print('-1')
    elif order == 'front':
        if len(Q) > 0:
            print(Q[0])
        else:
            print('-1')
