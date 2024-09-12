function calculateTax(income, expenses) {
    if(income <= 0 || expenses <= 0){
        return 'Invalid Input';
    }
    if(expenses > income){
        return 'Invalid Input';
    }
    const difference = income - expenses;
    const tax = difference * .20;
    return tax;
}