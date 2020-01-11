/*
Task
Christmas is coming soon. Santa Claus is ready for the gift, he will give the gifts to the children.

Santa Claus is naughty, and he always distributes gifts according to the size of the children's sock.

First he chose the largest sock and put in the smallest gift. Then he chose the smallest sock and put in the biggest gift. And so on.. Until no gifts, or every child got a gift. The last child is special, and he always gets the largest of the rest of the gift(If Santa Claus has a gift at this time).

Can you calculate the final distribution?

Inputs
gifts: An integer array that represents the volume of each gift.

socks: An integer array that represents the volume of each child's sock. It is guaranteed that there is no duplicate number.

Output
An integer array that represents each child's gift. According to the order of socks.
Still not understand the task? Look at the following example ;-)

Examples
For gifts = [1,2,3] and socks = [1,2,3],the output should be [3,2,1]

First,child-3 got a gift(1)
Then,child-1 got a gift(3)
Then,child-2 got a gift(2)
For gifts = [1,2] and socks = [1,2,3],the output should be [2,0,1]

First,child-3 got a gift(1)
Then,child-1 got a gift(2)
Then, no gift for child-2, so he got 0
For gifts = [1,2,3,4] and socks = [1,2,3],the output should be [4,3,1]

First,child-3 got a gift(1)
Then,child-1 got a gift(4)
Then,because child-2 is the last child, now two gifts was left(2 and 3)
So, he got the largest gift(3)*/

//output result: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed - JavaScript heap out of memory
//need to factorise
function distribute(gifts,socks){
    let result = [];
    if(socks.length == gifts.length){
        return gifts.sort((a,b) => b-a)
    }else if(socks.length > gifts.length){
      gifts.sort((a,b) => b-a).splice(gifts.indexOf(gifts.length-1), 0, 0)
      return gifts
    }else{
    let temp = []
  
      while(socks.length > 0){
        if(socks.length == 1) temp.push(Math.max(...gifts));
        if(socks.length > 1){
        temp.push(Math.min(...gifts))
        gifts.splice(gifts.indexOf(Math.min(...gifts)), 1)
        temp.push(Math.max(...gifts))
        gifts.splice(gifts.indexOf(Math.max(...gifts)), 1)
        socks.splice(0, 2)
        }
  
      }
      return temp.sort((a,b) => b-a)
    }
  }