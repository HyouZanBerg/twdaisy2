const money = document.getElementById("money");
const mpc = document.getElementById("mpc");
const multi = document.getElementById("multi");

const mpcCost = document.getElementById("mpc-cost");
const multiplerCost = document.getElementById("multipler-cost");
const result = document.getElementById("result");

const click = document.getElementById("click");
const upMPC = document.getElementById("upMPC");
const upMULTI = document.getElementById("upMULTI");

let ts_money = 0;
let ts_mpc = 1;
let ts_multi = 1;

let ts_result = ts_mpc*ts_multi;
let ts_mpcCost = ts_mpc*ts_mpc*ts_multi;
let ts_multiplerCost = ts_multi*ts_mpc*ts_multi;

function update(){
    ts_result = ts_mpc*ts_multi;
    ts_mpcCost = ts_mpc*ts_mpc*ts_multi;
    ts_multiplerCost = ts_multi*ts_mpc*ts_multi;

    money.textContent = ts_money;
    mpc.textContent = ts_mpc;
    multi.textContent = ts_multi;
    mpcCost.textContent = ts_mpcCost;
    multiplerCost.textContent = ts_multiplerCost;
    result.textContent = ts_result;
}

click.addEventListener("click", () => {
    ts_money += ts_result;
    update();
})

upMPC.addEventListener("click", () => {
    if(ts_money >= ts_mpcCost){
        ts_money = ts_money - ts_mpcCost;
        ts_mpc++;
    }

    update();
})

upMULTI.addEventListener("click", () => {
    if(ts_money >= ts_multiplerCost){
        ts_money = ts_money - ts_multiplerCost;
        ts_multi++;
    }

    update();
})

update();
