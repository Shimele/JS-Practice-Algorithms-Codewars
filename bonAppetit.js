//to complet
function bonAppetit(bill, k, b) {
    
    let bill_without_k = bill
    bill_without_k[k] = 0  //replace k(th) element with ZERO 
    let total_bill = bill_without_k.reduce((a, b) => a + b)
    let half_bill = total_bill / 2.0
    let answer = (half_bill >= b) ? "Bon Appetit" : (b - half_bill) 
    console.log(answer)
   
}