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

// Write a second function getGPA that takes the letter grade and returns the GPA value (A → 4.0, B → 3.0, etc.)
// Chain them together so getGPA(getGrade(85)) returns 3.0

function getGPA(letterGrade) {
    const grades = {
        A: 4.0,
        B: 3.0,
        C: 2.0,
        D: 1.0,
        F: 0
    }

    return grades[letterGrade];
}

console.log(getGPA(getGrade(63)));