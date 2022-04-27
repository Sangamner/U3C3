// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var ammount=JSON.parse(localStorage.getItem("amount"));
 console.log(ammount)
let walletcash=document.getElementById("wallet");

walletcash.innerText=ammount;
     





