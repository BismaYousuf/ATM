import inquirer from "inquirer";
import  Chalk  from "chalk";

let myBalance = 0;
let isCountinue = true;
const myPin = 1234;
const message = "WelCome To My ATM 🤗";
console.log(Chalk.green(message));

let pin_ans = await inquirer.prompt({
    name: "pin_ans",
    type: "number",
    message: "Please enter your pin code 📌"
})

if(pin_ans.pin_ans === 1234){
    do {
        let ans = await inquirer.prompt([{
            name: "list",
            type : "list",
            message: "Please select any option 👀",
            choices: ["Deposite", "Widthdraw", "Fast Cash", "Balance_check"]
        }])
    
        //-----------------------Deposite-------------------------
    
        if(ans.list === "Deposite"){
            let ans = await inquirer.prompt({
                name: "Deposite_Amount",
                type: "number",
                message: "Please enter your deposte amount 💸"
            })
    
            if(ans.Deposite_Amount > 0 ){
                myBalance = myBalance + ans.Deposite_Amount
                console.log(myBalance);
            }
        }
        //---------------------------Widtthdraw-------------------------
    
        else if(ans.list === "Widthdraw"){
            let ans = await inquirer.prompt({
                name: "Withdraw",
                type: "number",
                message: "please enter your withdraw amount 💸"
            })
            if(ans.Withdraw <= myBalance){
                myBalance = myBalance - ans.Withdraw
                console.log(myBalance);
                
            }
            else{
                console.log(Chalk.red('Not enough Money')); 
            }
        }
    
         //----------------------------Fast Cash------------------------
    
        else if(ans.list === "Fast Cash"){
            let ans = await inquirer.prompt({
                name: "Fast_Cash",
                type: "list",
                message: "please select anyone 👀",
                choices: ["500", "1000", "5000", "10000"]
            })
            if(ans.Fast_Cash <= myBalance){
                if(ans.Fast_Cash === "500"){
                    myBalance -= ans.Fast_Cash
                    console.log(Chalk.green(`Your remaing balance is ${myBalance}`));
                }
                else if(ans.Fast_Cash === "1000"){
                    myBalance -= ans.Fast_Cash
                    console.log(Chalk.green(`Your remaing balance is ${myBalance}`));
                }
                else if(ans.Fast_Cash === "5000"){
                    myBalance -= ans.Fast_Cash
                    console.log(Chalk.green(`Your remaing balance is ${myBalance}`));
                }
                else if(ans.Fast_Cash === "10000"){
                    myBalance -= ans.Fast_Cash
                    console.log(Chalk.green(`Your remaing balance is ${myBalance}`));
                }
            }
        }
    
        //---------------------------- Balance_check -------------------------
    
        else if(ans.list ==="Balance_check"){
            console.log(`Your balance is ${myBalance} 🥰`);
        }
    
    //---------------------------- While Condition -------------------------
        
    let whileAns = await inquirer.prompt({
        name: "While",
        type: "confirm",
        message: "Do you want to continue? 🤔"
    })
    if(whileAns.While === false){
        isCountinue = false
    }
    
    } while (isCountinue);
}
else{
    console.log(Chalk.red("Invalid Pin code 😒"));
    
}

