document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('button').addEventListener('click', ()=>{

        const principalAmount = prompt("Enter principal amount");
        console.log("Principal Amount:", principalAmount);
        
        const time = prompt("Enter time period in years");
        console.log(time, "years");

        let rate;
        if(time == 1){
            rate = 0;
        }
        else if(time == 2){
            rate = 2 / 100;
        }
        else if(time == 3){
            rate = 3 / 100;
        }
        else if(time == 4){
            rate = 5 / 100;
        }
        else{
            rate = 8 / 100;
        }

        const grossProfit = principalAmount * rate * time;
        const outputResult = `Principal Amount: ${principalAmount} <br>
                            Time in Years: ${time} Year(s) <br>
                            Interest Rate: ${rate * 100}% <br>
                            ----------------------------- <br>
                            Gross Profit: ${grossProfit.toFixed(2)}`;

        console.log(outputResult);
        document.querySelector("#result").innerHTML = outputResult.replace(/\/n/gi, '<br/>');

        
    });
});