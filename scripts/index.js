// Store the wallet amount to your local storage with key "amount"
var walletammount=0||JSON.parse(localStorage.getItem("amount"));
function addtowallet(){
    let Amount=document.getElementById("amount").value;
    
    walletammount=walletammount+Number(Amount);
    //console.log(walletammount);
    
    localStorage.setItem("amount",JSON.stringify(walletammount));
     

     let walletcash=document.getElementById("wallet");

     walletcash.innerText=walletammount;
  
}
