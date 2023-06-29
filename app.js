const billInput=document.getElementById("billAmount")
const tip=document.getElementById("tipPercentage")
const numPeople=document.getElementById("people")
const amountPerHead=document.getElementById("amount")

let Numb=Number(numPeople.innerText)

const calculateBill = () => 
{
    let bill=(billInput.value+ ((tip.value/100)*billInput.value))/Numb
    amountPerHead.innerText=bill
}

const increment=()=>{
    Numb=Numb+1
    numPeople.innerText=Numb    
    calculateBill()
}