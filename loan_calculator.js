//JS for Loan Calculator Program.

var calculate = function() {

	var totalAmount = parseFloat(document.getElementById("amount").value);
	var annualInterest = parseFloat(document.getElementById("apr").value);
	var totalYears = parseFloat(document.getElementById("years").value);
 
 	//Convert timeline and interest rate to be based on months rather than years
	var monthlyInterest = annualInterest / 12;
	var totalMonths = totalYears * 12;

	//How much you owe each month before interest
	var monthlyPaymentNoInterest = totalAmount / totalMonths;

	//Total Payments
	var totalMonthlyPayment = Math.round((monthlyPaymentNoInterest * ((monthlyInterest / 100) + 1)) * 100) / 100;
	var totalPayment = Math.round((totalMonthlyPayment * totalMonths) * 100) / 100;
	var totalInterest = Math.round((totalPayment - totalAmount) * 100) / 100;

	//Print-out the amounts calculated above
	var printMonthlyPayment = document.getElementById("monthly-payment");
	if (totalMonthlyPayment) {
		printMonthlyPayment.innerHTML = totalMonthlyPayment;
	} 
	else {
		printMonthlyPayment.innerHTML = "0";
	}

	var printTotalPayment = document.getElementById("total-payment");
	if (totalPayment) {
		printTotalPayment.innerHTML = totalPayment;
	} 
	else {
		printTotalPayment.innerHTML = "0";
	}

	var printTotalInterest = document.getElementById("total-interest");
	if (totalInterest) {
		printTotalInterest.innerHTML = totalInterest;
	}
	else {
		printTotalInterest.innerHTML = "0";
	}

}

//Get elements that need calculate as an event handler
var button = document.getElementById("button");
var amount = document.getElementById("amount");
var interest = document.getElementById("apr");
var years = document.getElementById("years");

amount.onchange = function() {
	calculate();
}
interest.onchange = function() {
	calculate();
}
years.onchange = function() {
	calculate();
}
button.onclick = function() {
	calculate();
}



