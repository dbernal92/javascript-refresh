// Tip Calculator Function
// Write a JavaScript function called calculateTip that takes two arguments — a bill amount and a service rating ("poor", "ok", "good", "excellent") — and returns an object with the tip amount and the total bill.
// jscalculateTip(50, "good") 
// → { tip: 10, total: 60 }

// calculateTip(80, "excellent") 
// → { tip: 20, total: 100 }
// Tip percentages:

// "poor" → 10%
// "ok" → 15%
// "good" → 20%
// "excellent" → 25%

function calculateTip(billAmount, serviceRating) {
    const tipRates = {
        poor: 0.10,
        ok: 0.15,
        good: 0.20,
        excellent: 0.25
    };

    const tip = billAmount * tipRates[serviceRating];
    const billFinal = billAmount + tip;

    return { tip, total: billFinal };

}