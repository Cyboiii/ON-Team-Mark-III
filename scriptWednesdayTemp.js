// Define allNames array globally
var allNames = [
    "       ", "Bhupinder", "       ", "Domenic", "Sonam", "Rushi",
    "Lovepreet", "Panamdeep", "Manish", "Harinderbir", "Mandeep",
    "Pabdeep", "Jagjit", "Janki", "Jasmen", "Darshan", "Harshdeep", "Foram", "Aseem"
];

// Sunday Week 1----------------------------------------------------------------------------------------------------------------------------

function generateAssignments(iterations) {
    var results = [];

    for (var i = 0; i < iterations; i++) {
        var shuffledNames = [...allNames].sort(() => Math.random() - 0.5);
        var SundayMatching = shuffledNames[0];
        var SundayReservedForceList = [...allNames];
        SundayReservedForceList.splice(SundayReservedForceList.indexOf(SundayMatching), 1);
        var SundayReservedForce = [...SundayReservedForceList];
        var BlueLightsExemptionPeople = ["Khrizzelle", "Panamdeep", "Sonam", "Jagdeep","       "];
        var BlueLights10To12 = [];
        var BlueLights12ToOn = [];

        while (BlueLights10To12.length < 2) {
            var randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
            var selectedName = SundayReservedForce[randomIndex];
            if (!BlueLightsExemptionPeople.includes(selectedName)) {
                BlueLights10To12.push(selectedName);
                SundayReservedForce.splice(randomIndex, 1);
            }
        }

        while (BlueLights12ToOn.length < 2) {
            var randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
            var selectedName = SundayReservedForce[randomIndex];
            if (!BlueLightsExemptionPeople.includes(selectedName)) {
                BlueLights12ToOn.push(selectedName);
                SundayReservedForce.splice(randomIndex, 1);
            }
        }

        var randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
        var SundayRedBasket = SundayReservedForce[randomIndex];
        SundayReservedForce.splice(randomIndex, 1);

        randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
        var SundayClosing = SundayReservedForce[randomIndex];
        SundayReservedForce.splice(randomIndex, 1);

        var InductionFirstSecondThree = [];
        var InductionFourthFifthSixth = [];
        var InductionSeventhEighthNinth = [];

        while (InductionFirstSecondThree.length < 3) {
            randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
            InductionFirstSecondThree.push(SundayReservedForce[randomIndex]);
            SundayReservedForce.splice(randomIndex, 1);
        }

        while (InductionFourthFifthSixth.length < 3) {
            randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
            InductionFourthFifthSixth.push(SundayReservedForce[randomIndex]);
            SundayReservedForce.splice(randomIndex, 1);
        }

        while (InductionSeventhEighthNinth.length < 3) {
            randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
            InductionSeventhEighthNinth.push(SundayReservedForce[randomIndex]);
            SundayReservedForce.splice(randomIndex, 1);
        }

        results.push({
            matching: SundayMatching,
            redBasket: SundayRedBasket,
            closing: SundayClosing,
            blueLights10To12: [...BlueLights10To12],
            blueLights12ToOn: [...BlueLights12ToOn],
            induction1To3: [...InductionFirstSecondThree],
            induction4To6: [...InductionFourthFifthSixth],
            induction7To9: [...InductionSeventhEighthNinth],
            reservedForce: [...SundayReservedForce]
        });
    }

    return results;
}

// Code for displaying assignments
var outputContainer = document.getElementById("output");
var assignments = generateAssignments(1);

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
var dayIndex = 0;

assignments.forEach(function (assignment, index) {

    var row = document.createElement("tr");
    row.innerHTML = `
        <td>Wednesday</td>
        <td>${assignment.matching}</td>
        <td>${assignment.redBasket}</td>
        <td>${assignment.closing}</td>
        <td>${assignment.blueLights10To12.join("<br>")}</td>
        <td>${assignment.blueLights12ToOn.join("<br>")}</td>
        <td>${assignment.induction1To3.join("<br>")}</td>
        <td>${assignment.induction4To6.join("<br>")}</td>
        <td>${assignment.induction7To9.join("<br>")}</td>
        <td>${assignment.reservedForce.join("<br>")}</td>
    `;
    outputContainer.lastChild.appendChild(row);

    dayIndex = (dayIndex + 1) % daysOfWeek.length;
});
