setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; 

    console.log(`Số ngẫu nhiên là: ${randomNumber}`); 

    function isPerFect(n){

        let check = 0, total=0;
        
        for (i=1;i<n; i++){
            if (n % i == 0) total+=i;
        }

        if (total == n & n!=0) check = 1;

        if(check === 0){
            console.log(`${n} khong la so hoan hao`)
        }
        else{
            console.log(`${n} la so hoan hao`)
        }
    }

    isPerFect(randomNumber);
}, 2000);

