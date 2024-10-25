var mang = new Array(10,5,2,5,6,7,8,9);


function isPrime(n)
{
    var check = true;
 
    if (n < 2){
        check = false;
    }
    else{
        for (var i = 2; i < n-1; i++)
        {
            if (n % i == 0){
                check = false;
                break;
            }
        }
    }
 
    if (check == true){
        console.log(n + " là số nguyên tố");
    }
    else{
        console.log(n + " không phải là số nguyên tố");
    }
}

function Solve(){
    let sum = 0;
    setTimeout(() => {
        for(let i = 0; i < mang.length; i++){
            sum += mang[i];
        }
        console.log(`Tổng Mảng là: ${sum}`)
    },3000)
    setTimeout(() => {
        for(let i = 0; i < mang.length; i++){
            isPrime(mang[i])
        }
    },6000)
    setTimeout(() => {
        for(let i = 0; i < mang.length; i++){
            if(mang[i] % 3 === 0){
                console.log(`${mang[i]} chia hết cho 3`);
            }else{
                console.log(`${mang[i]} không chia hết cho 3`);
            }
        }
    },9000)
}

Solve()