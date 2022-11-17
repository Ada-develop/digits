const input = '65747631598650878042368953052525152442900145931164313317203543679928839957017502495884031714674137080483942128458971037942479409613557531134363114149915951';
let arr = [];

for (let i = 0, charsLength = input.length; i < charsLength; i += 2) {
    arr.push(input.substring(i, i + 2));
}

let mf = 1;
let m = 0;
let item;
for (let i=0; i < arr.length; i++)
{
        for (let j=i ; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr[i];
                }
        }
        m=0;
}
console.log(item+" ( " +mf +" times ) ") ;