// Code your solutions in this file
const array=["Guadalupe", "Ollie", "Aki"];
let str="birthday";
let newArr=[];
function writeCards(array,str)
{
    for(let i=0;i<array.length;i++)
    {
        newArr.push(`Thank you, ${array[i]}, for the wonderful ${str} gift!`);
    }
    return newArr;
}


function countDown(n) {
    while (n>= 0) {
      console.log(n--);
    }
  }
  countDown(10);