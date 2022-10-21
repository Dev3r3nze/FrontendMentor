var bill = 0;
var tip = 0;
var personas = 0;
var resPersonas = 0;
var resTotal = 0;

function Tip(porcentaje){
    tip = porcentaje
    Calculate()
}

function Calculate(){
    bill = document.getElementById("bill").value;
    
    personas = document.getElementById("personas").value;

    if(personas != 0){
        document.getElementById("personas").style.border = "0px";
        document.getElementById("numberPeople").style.display = "none"

        resPersonas = (tip*bill)/personas
        resTotal = (bill)/ personas + resPersonas;

        document.getElementById("resPersonas").innerHTML = Number(resPersonas.toFixed(2));
        document.getElementById("resTotal").innerHTML = Number(resTotal.toFixed(2));
        document.getElementById("btnReset").disabled = false;        
        document.getElementById("btnReset").style.backgroundColor = "hsl(172, 67%, 45%)";        
        
    }else {
        document.getElementById("personas").style.border = "solid 1px";
        document.getElementById("personas").style.borderColor = "hsl(15deg 31% 58%)";
        document.getElementById("numberPeople").style.display = "block"
        
    }
}

function CustomTip(customTip){
    tip = document.getElementById("custom").value /100
    Calculate();
}


function Reset(){
    bill = 0;
    tip = 0;
    personas = 0;
    resPersonas = 0;
    resTotal = 0;
    document.getElementById("bill").value = 0;
    document.getElementById("custom").value = 0;
    document.getElementById("personas").value = 0;
}