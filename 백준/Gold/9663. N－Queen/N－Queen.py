n = int(input())
count = 0
pos = [0] * n
flag_a = [False] * n
flag_b = [False] * (n + (n-1))
flag_c = [False] * (n + (n-1))


def set(i: int) -> None:
    global count

    for j in range(n):
        if(not flag_a[j] and not flag_b[i+j] and not flag_c[i-j+(n-1)]):
            pos[j] = j
            if i == (n-1):
                count += 1
            else:
                flag_a[j] = flag_b[i+j] = flag_c[i-j+(n-1)] = True
                set(i+1)
                flag_a[j] = flag_b[i+j] = flag_c[i-j+(n-1)] = False


set(0)

print(count)