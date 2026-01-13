let playCount = 0;
let slot1Count = 0;
let slot2Count = 0;
let slot3Count = 0;
let allTheTens = 0;
let doubleTens = 0;
let trebleTens = 0;
let cheatingNumber = 10;

let randomCredits = Math.floor(Math.random() * 100) + 1;
// document.getElementById("gameCredits").innerHTML = "You have : " + randomCredits + " credits left.";
document.getElementById("gameCredits").innerHTML = randomCredits;
document.getElementById("roundCount").innerHTML = document.getElementById("roundCount").innerHTML = playCount;

// Counting tens

function singleTenner() {
    randomCredits += 2
    document.getElementById("gameCredits").innerHTML = randomCredits;
}

function doubleTenners() {
    doubleTens +=1;
    document.getElementById("twoTens").innerHTML = doubleTens;
}

function trebleTenners() {
    trebleTens += 1;
    document.getElementById("threeTens").innerHTML = trebleTens;
}

function countSingleTens() {
    allTheTens +=1;
    document.getElementById("tableTotals").innerHTML = allTheTens;
}

// Counting Slots

function countingSlot1() {
    slot1Count +=1
    document.getElementById("firstSlot").innerHTML = slot1Count;
}

function countingSlot2() {
    slot2Count +=1
    document.getElementById("secondSlot").innerHTML = slot2Count;
}

function countingSlot3() {
    slot3Count +=1
    document.getElementById("thirdSlot").innerHTML = slot3Count;
}

// Counting plays

function countingPlays() {
    playCount = playCount + 1
    document.getElementById("roundCount").innerHTML = playCount;
}

// Colouring slots

function redBlackSlot1() {
    document.getElementById("slot1").style.backgroundColor = "black";
    document.getElementById("slot1").style.color = "red";
}

function blueBlackSlot1() {
    document.getElementById("slot1").style.backgroundColor = "#C2E2EE";
    document.getElementById("slot1").style.color = "black";
}

function redBlackSlot2() {
    document.getElementById("slot2").style.backgroundColor = "black";
    document.getElementById("slot2").style.color = "red";
}

function blueBlackSlot2() {
    document.getElementById("slot2").style.backgroundColor = "#C2E2EE";
    document.getElementById("slot2").style.color = "black";
}

function redBlackSlot3() {
    document.getElementById("slot3").style.backgroundColor = "black";
    document.getElementById("slot3").style.color = "red";
}

function blueBlackSlot3() {
    document.getElementById("slot3").style.backgroundColor = "#C2E2EE";
    document.getElementById("slot3").style.color = "black";
}

// TESTING MODALS

function noCreditModal() {
    const modal = document.getElementById("gameModal");
    const closeBtn = document.getElementById("closeModal");

    modal.showModal();   // open
    
    setTimeout(() => {
        location.reload();
}, 6000)
}

function cashedOut() {
    const newModal = document.getElementById("cashingOut");
    document.getElementById("totalWinnings").innerHTML = "You won € " + randomCredits;
    newModal.showModal();

    setTimeout(() => {
        location.reload();
}, 6000)
}

function spinner() {
    
    const randomNumber1 = Math.floor(Math.random() * cheatingNumber) + 1;
    document.getElementById("slot1").textContent = randomNumber1;

    const randomNumber2 = Math.floor(Math.random() * cheatingNumber) + 1;
    document.getElementById("slot2").textContent = randomNumber2;

    const randomNumber3 = Math.floor(Math.random() * cheatingNumber) + 1;
    document.getElementById("slot3").textContent = randomNumber3;

randomCredits = randomCredits - 1;
document.getElementById("gameCredits").innerHTML = randomCredits;

if (randomCredits <= 0 ) {

    noCreditModal();

}

    countingPlays();

if (randomNumber1 === 10) {

    redBlackSlot1();

    alert("Super!! Slot 1 got a 10! Congratulations!!")

    singleTenner();

    countingSlot1();

    countSingleTens();

} else {

    blueBlackSlot1();
}

if (randomNumber2 === 10) {

    redBlackSlot2();

    alert("Super!! Slot 2 got a 10! Congratulations!!")

    singleTenner();

    countingSlot2();

    countSingleTens();

} else {

    blueBlackSlot2();
}

if (randomNumber3 === 10) {

    redBlackSlot3();

    alert("Super!! Slot 3 got a 10! Congratulations!!")

    singleTenner();

    countingSlot3();

    countSingleTens();

} else {

    blueBlackSlot3();
}

if 
    (
        (randomNumber1 === 10 && randomNumber2 === 10) ||
        (randomNumber1 === 10 && randomNumber3 === 10) || 
        (randomNumber2 === 10 && randomNumber3 === 10) 
    ) {
        randomCredits += 7;
        alert("Cha Ching!! GOT A DOUBLE!!!! 10 credits added!!");
            document.getElementById("gameCredits").innerHTML = randomCredits;

            doubleTenners();

}

if (randomNumber1 === 10 && randomNumber2 === 10 && randomNumber3 === 10) {
        randomCredits += 88;
        alert("YOU DID IT!! GOT A TREBLE!!! 100 credits added!! SUPER!");
            document.getElementById("gameCredits").innerHTML = randomCredits;

            trebleTenners();

}
}
