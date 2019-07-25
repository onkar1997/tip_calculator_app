function calculateTip() {
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    var currency = document.getElementById("currency").value;
    
    if(currency === 'inr'){
        
        if(billAmount === "" || serviceQuality == 0){
            return window.alert("Please enter some values! ! !");
        }
        else if(numPeople ==="" || numPeople <= 1){
            numPeople=1;
            document.getElementById("each1").style.display="none";
            
        }
        else{
            document.getElementById("each1").style.display="block";
        }
    
        var total = (billAmount * serviceQuality) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed();
        console.log(total)
    
        document.getElementById("totalTipInr").style.display = "block";
        document.getElementById("tip1").innerHTML = total;
        
        document.getElementById("totalTipDollar").style.display = "none";
        
    }else if(currency === 'dollar'){
        
        if(billAmount === "" || serviceQuality == 0){
            return window.alert("Please enter some values! ! !");
            
        }
        else if(numPeople ==="" || numPeople <= 1){
            numPeople=1;
            document.getElementById("each2").style.display="none";
            
        }
        else{
            document.getElementById("each2").style.display="block";
        }
        
        var total = (billAmount * serviceQuality) / numPeople;
        total = Math.round(total * 100) / 100;
        total = total.toFixed(2);
        console.log(total)
    
        document.getElementById("totalTipDollar").style.display = "block";
        document.getElementById("tip2").innerHTML = total;
        
        document.getElementById("totalTipInr").style.display = "none";

    }else {
        alert("Please choose the type of Currency.")
    }
}
 
        
document.getElementById("totalTipDollar").style.display = "none";
document.getElementById("each2").style.display = "none";

document.getElementById("totalTipInr").style.display = "none";
document.getElementById("each1").style.display = "none";

document.getElementById("calculate").onclick = function () {
    calculateTip();
};