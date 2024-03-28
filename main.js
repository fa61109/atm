import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
console.log("WELCOME TO FAIZAN ATM SERVICES");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please Enter Your Pin:",
        type: "number"
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            messeage: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "cheque deposit",]
        }
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                messeage: "enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficent balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is : " + myBalance);
    }
    else if (operationAns.operation === "cheque deposit") {
        console.log("This process is coming soon");
    }
}
else {
    console.log("Incorrect pin number");
}
