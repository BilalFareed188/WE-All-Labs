const calculateSupply = (age, amount) => {
    const maxAge = 60;
    if (age < maxAge) {
      const perYearAmount = amount*age*365;
      const amountForRestOfLifeRequired = (maxAge - age) * perYearAmount;
      alert(
        `You will need ${amountForRestOfLifeRequired}Rs to last you\nuntil the ripe old age of ${maxAge}`
      );
    } else {
      alert("Wrong Input");
    }
  };


var inputAge = prompt("Enter Your Age");
var perDayExpense = prompt("Enter Your Per Day Expense in Rupees");
calculateSupply(inputAge, perDayExpense);
  
  