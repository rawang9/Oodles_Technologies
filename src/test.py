st = "notnotnot"
low = 0
high = len(st)-1
while(True):
    if(low >= high):
        print("Palindrome")
        break
    if st[low] == st[high]:
        low+=1
        high-=1
    else:
        print("Not Palindrome")
        break



    