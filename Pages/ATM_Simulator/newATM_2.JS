document.getElementById("send_it").addEventListener("click", function(e){
    e.preventDefault();
});

let currentuser = null;
let balances = [];
let currentbalance = null;

function login() {
    fetch('login.json')
        .then(response => response.json())
        .then(data => {
            const loginArray = [];

            data.forEach(entry => loginArray.push(entry));

            const inputUser = document.getElementById("username").value;
            const inputPassword = document.getElementById("password").value;

            const isValid = loginArray.some(entry =>
                entry.user === inputUser && entry.password === inputPassword
            );

            if (isValid) {
                currentuser = inputUser;
                document.getElementById("welcome").innerHTML = "Login successful. Welcome, " + inputUser;
                document.getElementById("working_area").innerHTML = "What would you like to do today " + inputUser + "?";
                document.getElementById("login_area").style.display = "none";
                console.log('Login successful!');
                console.log(loginArray);
            } else {
                document.getElementById("welcome").innerHTML = "LOGIN UNSUCCESSFUL! Please try again!";
                console.log('Invalid credentials.');
            }

            document.getElementById("username").value = "";
            document.getElementById("password").value = "";
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

function balance() {
    if (!currentuser) {
        document.getElementById("balance").innerHTML = "Balance";
        return;
    }

    fetch('balances.json')
        .then(response => response.json())
        .then(data => {
            balances = data;

            const userBalance = balances.find(entry => entry.user === currentuser);

            if (userBalance) {
                currentbalance = Number(userBalance.balance);
                document.getElementById("working_area").innerHTML = "Your balance is: €" + userBalance.balance;
                console.log("Balance:", userBalance.balance);
            } else {
                document.getElementById("balance").innerHTML = "Balance not found for user.";
            }
        })
        .catch(error => {
            console.error('Error loading balances:', error);
        });
}

function deposit() {
    if (!currentuser) {
        document.getElementById("working_area").innerHTML = "Please log in first!";
        return;
    }

    if (currentbalance === null) {
        document.getElementById("working_area").innerHTML = "Balance not loaded. Please check your balance first.";
        return;
    }

    const new_deposit = Number(prompt("How much would you like to deposit?"));

    if (isNaN(new_deposit) || new_deposit <= 0) {
        alert("Invalid deposit amount!");
        return;
    }

    currentbalance += new_deposit;
    console.log("Your current balance is €" + currentbalance);
    document.getElementById("working_area").innerHTML = "Deposit successful!<br> Your updated balance is €" + currentbalance;

    const userIndex = balances.findIndex(entry => entry.user === currentuser);
    if (userIndex !== -1) {
        balances[userIndex].balance = currentbalance;
    } else {
        alert("User not found in balances.");
    }
}

function withdraw() {
    if (!currentuser) {
        document.getElementById("working_area").innerHTML = "Please log in first!";
        return;
    }

    if (currentbalance === null) {
        document.getElementById("working_area").innerHTML = "Balance not loaded. Please check your balance first.";
        return;
    }

    const withdrawalAmount = Number(prompt("How much would you like to withdraw?"));

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        alert("Invalid withdrawal amount!");
        return;
    }

    if (withdrawalAmount > currentbalance) {
        alert("Insufficient funds for this withdrawal!");
        return;
    }

    currentbalance -= withdrawalAmount;
    console.log("Your current balance is €" + currentbalance);
    document.getElementById("working_area").innerHTML = "Withdrawal successful!<br> Your updated balance is €" + currentbalance;

    const userIndex = balances.findIndex(entry => entry.user === currentuser);
    if (userIndex !== -1) {
        balances[userIndex].balance = currentbalance;
    } else {
        alert("User not found in balances.");
    }
}

function saveUpdatedBalances(balances) {
    const dataStr = JSON.stringify(balances, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "balances.json";
    a.click();

    URL.revokeObjectURL(url);
}

function transfer() {
    document.getElementById("working_area").innerHTML = "This function is currently not available";
}

function logoff() {
    alert("Please confirm you want to log off!");
    saveUpdatedBalances(balances);
    location.reload();
}
