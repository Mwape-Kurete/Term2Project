// dispSubs = () => {
//     let topMonthSubs = document.getElementById("subsOfMonth"); 

//     topMonthSubs.innerHTML = ``;

//     for(let i = 0; i < subData.length; i++){
//         let name = subData[i].subName;
//         let bread = subData[i].subBread;
//         let protein = subData[i].subProtein;
//         let cheese = subData[i].subCheese;
//         let relish = subData[i].subRelish;
//         let sauce = subData[i].subSauce;
//         //let cost = subData[i].subPrice;

//         topMonthSubs.innerHTML += `
//         <div class="card">
//             <div class="card-body">
//                 <h3><strong>Sub Name: </strong>${name}</h3>
//                 <p><strong>Bread: </strong>${bread}</p>
//                 <p><strong>Proteins: </strong>${protein.join(', ')}</p>
//                 <p><strong>Cheese: </strong>${cheese.join(', ')}</p>
//                 <p><strong>Relish: </strong>${relish.join(', ')}</p>
//                 <p><strong>Sauces: </strong>${sauce.join(', ')}</p>
//                 <p><strong>Price of this Sub: </strong>R${cost}.00</p>
//             </div>
//         </div>
//         `
//     }

//     // window.onload = function (){
//     //     dispSubs();
//     // }
// }

let newSub = [];

buildAsub = () => {

    let subTot = 0;

    let subName = document.getElementById("subName").value;
    let bread = document.getElementById("breadOpt").value;

    if (bread === "Brioche") {
        subTot = subTot + 30;

    } else if (bread === "Bagel") {
        subTot = subTot + 25;

    } else if (bread === "Baguette") {
        subTot = subTot + 15;

    } else if (bread === "Whole") {
        subTot = subTot + 20;

    } else if (bread === "Bun") {
        subTot = subTot + 10;

    }


    //getting check options 

    //proteins
    let proteinOptions = document.getElementsByName("proteins");

    let arrProt = [];

    //let protCount = 0;
    for (let i = 0; i < proteinOptions.length; i++) {

        if (proteinOptions[i].checked) {
            arrProt.push(proteinOptions[i].value);
            subTot = subTot + +proteinOptions[i].dataset.cost;

            // protCount += 1;
        }

        // protCount++;
        // console.log(protCount);
    }

    //cheese
    let cheeseOpt = document.getElementsByName("cheese");

    let arrCheese = [];

    for (let i = 0; i < cheeseOpt.length; i++) {
        if (cheeseOpt[i].checked) {
            arrCheese.push(cheeseOpt[i].value);
            subTot = subTot + +cheeseOpt[i].dataset.cost;
        }
    }
    //relish 
    let relishOpt = document.getElementsByName("relish");

    let arrRel = [];

    for (let i = 0; i < relishOpt.length; i++) {
        if (relishOpt[i].checked) {
            arrRel.push(relishOpt[i].value);
            subTot = subTot + +relishOpt[i].dataset.cost;
        }
    }
    //sauces
    let sauceOptions = document.getElementsByName("sauce");

    let arrSauce = [];

    for (let i = 0; i < sauceOptions.length; i++) {
        if (sauceOptions[i].checked) {
            arrSauce.push(sauceOptions[i].value);
            subTot = subTot + +sauceOptions[i].dataset.cost;
        }
    }

    newSub.push({
        subName: subName,
        subBread: bread,
        subProtein: arrProt,
        subCheese: arrCheese,
        subRelish: arrRel,
        subSauce: arrSauce,
        subPrice: subTot
    });

    console.log(newSub);

    document.getElementById("realTimeCost").innerHTML = "R0.00";
    document.getElementById("subForm").reset();
}


runningCost = () => {

    runCost = 0;

    let bread = document.getElementById("breadOpt").value;

    if (bread === "Brioche") {
        runCost = runCost + 30;

    } else if (bread === "Bagel") {
        runCost = runCost + 25;

    } else if (bread === "Baguette") {
        runCost = runCost + 15;

    } else if (bread === "Whole") {
        runCost = runCost + 20;

    } else if (bread === "Bun") {
        runCost = runCost + 10;
    }

    //proteins
    let proteinOptions = document.getElementsByName("proteins");

    for (let i = 0; i < proteinOptions.length; i++) {
        if (proteinOptions[i].checked) {
            runCost = runCost + +proteinOptions[i].dataset.cost;
        }
    }
    //cheese
    let cheeseOpt = document.getElementsByName("cheese");

    for (let i = 0; i < cheeseOpt.length; i++) {
        if (cheeseOpt[i].checked) {
            runCost = runCost + +cheeseOpt[i].dataset.cost;
        }
    }
    //relish 
    let relishOpt = document.getElementsByName("relish");

    for (let i = 0; i < relishOpt.length; i++) {
        if (relishOpt[i].checked) {
            runCost = runCost + +relishOpt[i].dataset.cost;
        }
    }
    //sauces
    let sauceOptions = document.getElementsByName("sauce");

    for (let i = 0; i < sauceOptions.length; i++) {
        if (sauceOptions[i].checked) {
            runCost = runCost + +sauceOptions[i].dataset.cost;
        }
    }

    document.getElementById("realTimeCost").innerHTML = "R" + runCost + ".00";

}

dispSubOrders = () => {

    let area = document.getElementById("ordered");
    let totalCost = document.getElementById("totalCost");

    area.innerHTML = "";

    let overTot = 0;

    for (let i = 0; i < newSub.length; i++) {

        let name = newSub[i].subName;
        let bread = newSub[i].subBread;
        let protein = newSub[i].subProtein;
        let cheese = newSub[i].subCheese;
        let relish = newSub[i].subRelish;
        let sauce = newSub[i].subSauce;
        let cost = newSub[i].subPrice;

        overTot += cost;

        area.innerHTML += `

        <div class="col-12 orderedSubs">
            <div class="orderBlock">
                <h3><strong>Sub Name: </strong>${name}</h3>
                <p><strong>Bread: </strong>${bread}</p>
                <p><strong>Proteins: </strong>${protein.join(', ')}</p>
                <p><strong>Cheese: </strong>${cheese.join(', ')}</p>
                <p><strong>Relish: </strong>${relish.join(', ')}</p>
                <p><strong>Sauces: </strong>${sauce.join(', ')}</p>
                <p><strong>Price of this Sub: </strong>R${cost}.00</p>
            </div>
        </div>
        `
    }

    totalCost.innerHTML = "Your Total is: R" + overTot + ".00";

}


checkOut = () => {
    let data = JSON.stringify(newSub);
    localStorage.setItem('order', data);
    window.location.href = '../pages/checkout.html';
}