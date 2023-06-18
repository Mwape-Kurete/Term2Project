subDispCheck = () =>{

    let data = JSON.parse(localStorage.getItem('order')); 
    let items = document.getElementById('checkOrder');
    let totalArea = document.getElementById('totalOrder'); 

    let chTotal = 0; 

    for(let i = 0; i < data.length; i++){
        let name = data[i].subName;
        let cost = data[i].subPrice;

        chTotal += cost; 

        items.innerHTML = `
        <li class="list-group-item"><strong>Sub Name: </strong>${name} - <strong>R${cost}.00</li>
        `
    }

    totalArea.innerHTML = "Your total is R" + chTotal + ".00";
}

addTip = () =>{
    
    let tipPerc = +document.getElementById("tip").value; 

    let addedCost = 0; 
    let newTot = 0;

    let data = JSON.parse(localStorage.getItem('order')); 

    let totalArea = document.getElementById('totalOrder'); 

    let checkTot = 0;

    for(let i = 0; i < data.length; i++){
        let cost = data[i].subPrice;
        checkTot += cost; 
    }

    if(tipPerc === "10%"){
        addedCost = checkTot*(10/100);

    }else if(tipPerc === "15%"){
        addedCost = addedCost + checkTot*(15/100);

    }else if(tipPerc === "20%"){
        addedCost = addedCost + checkTot*(20/100);
    } else if(tipPerc === "choose..."){
        addedCost = 0;

    }

    newTot = addedCost + checkTot;


    totalArea.innerHTML = "Your total is R" + newTot+ ".00";

}

// addPromo = () =>{
//     let code = +document.getElementById("promo").value; 
//     let discount = 0; 

//     if(code === "0000"){
//         discount = 20; 
//     } else if(code === "ABCD"){
//         discount = 30; 
//     } else if(code === "a1b2"){
//         discount = 70; 
//     }

//     let checkTot

//     let data = JSON.parse(localStorage.getItem('order')); 
//     for(let i = 0; i < data.length; i++){
//         let cost = data[i].subPrice;
//         checkTot += cost; 
//     }

//     let totalArea = document.getElementById('totalOrder'); 

//     let newTotPrice = checkTot - discount;

//     totalArea.innerHTML = "Your total is R" + newTotPrice + ".00";
// }

payment = () =>{
    localStorage.removeItem('order');
    window.location.href = '../pages/payment.html';
}