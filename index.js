var register= { 
    transactions:[]
}
function addTransaction (transaction){
    register.transactions.push(transaction)
}
function reset() {
    register.transactions=[] 
}
function getTransactionsBySalesperson (name){
    //first: create acuumulator
    var salespersonTransactions = []
    //second:do a loop logic
    for (var i=0; i < register.transactions.length; i++)
    //third: alter accumulator
    
    //fourth:return accumulator
}
module.exports = {
    // Uncomment these as you define them
    register,
    addTransaction,
    // getTotal,
    // getFormattedTotal,
    reset,
};

