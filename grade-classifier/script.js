// Grade Classifier
// Write a function called getGrade that takes a numerical score (0-100) and returns the letter grade.
// jsgetGrade(95) // → "A"
// getGrade(82) // → "B"
// getGrade(40) // → "F"
// Grading scale:

// 90-100 → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// 0-59 → "F"

function getGrade(score) {
    if (score < 0 || score > 100) {
        return "Error: please enter valid score."
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else 
        return "F";
}