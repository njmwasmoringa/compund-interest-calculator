document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('button').addEventListener('click', ()=>{


        /// the focus will be here

        const principal = prompt("Enter the amount");        
        // if the user clicks the cancel button
        if(principal == null){
            // stop here
            alert("You cancelled")
            return
        } 
        // enters something that is not a number do not calculate
        else if(isNaN(principal)){
            alert("You did not enter the correct value");
            return;
        }

        const time = parseInt(prompt("How long in years do want to save your money?"));
        // if the user clicks the cancel button 
        if(time == null){
            // stop here
            alert("You cancelled")
            return
        }
        // enters something that is not a number do not calculate
        else if(isNaN(time)){
            alert("You did not enter the correct value");
            return;
        }

        switch(time){
            case 1:
                rate = 0.01;
            break;
            case 2:
                rate = 0.02;
            break;
            case 3:
                rate = 0.03;
            break;
            default:
                rate = 0.05;
            break;
        }

        const grossProfit = calculateGrossProfit(principal, time);
        document.querySelector('#result').innerHTML = `
            Your profit will be ${grossProfit.toFixed(2)} <br>
            When you save for ${time}Yrs <br>
            compounding rate of: ${rate}
        `;

    });
});