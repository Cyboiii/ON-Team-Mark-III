function generateAssignments(iterations) {
    var allNames = [
        "Khrizzelle", "Bhupinder", "Jagdeep", "Domenic", "Sonam", "Rushi",
        "Lovepreet", "Panamdeep", "Manish", "Harinderbir", "Mandeep",
        "Pabdeep", "Jagjit", "Janki", "Jasmen", "Darshan", "Arshdeep", "Foram"
    ];

    var results = [];

    for (var i = 0; i < iterations; i++) {
        var shuffledNames = [...allNames].sort(() => Math.random() - 0.5);
        var SundayMatching = shuffledNames[0];

        var SundayReservedForceList = [...allNames];
        SundayReservedForceList.splice(SundayReservedForceList.indexOf(SundayMatching), 1);
        var SundayReservedForce = [...SundayReservedForceList];

        var BlueLightsExemptionPeople = [
            "Khrizzelle", "Panamdeep", "Sonam", "Jagdeep"
        ];

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

var outputContainer = document.getElementById("output");
var assignments = generateAssignments(5);

var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];
var dayIndex = 0;

assignments.forEach(function (assignment, index) {
    if (index % 5 === 0) {
        if (index !== 0) {
            outputContainer.appendChild(document.createElement("hr"));
        }
        var table = document.createElement("table");
        var headerRow = document.createElement("tr");
        headerRow.innerHTML = `
            <th>Weekday</th>
            <th>Matching</th>
            <th>RedBasket & Jackpot</th>
            <th>Closing</th>
            <th>BlueLights 10 to 12</th>
            <th>BlueLights 12 to Onwards</th>
            <th>Induction 10 to 12</th>
            <th>Induction 12 to 2</th>
            <th>Induction 2 to 4</th>
            <th>Reserved Force</th>
        `;
        table.appendChild(headerRow);
        outputContainer.appendChild(table);
    }

    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${daysOfWeek[dayIndex]}</td>
        <td>${assignment.matching}</td>
        <td>${assignment.redBasket}</td>
        <td>${assignment.closing}</td>
        <td>${assignment.blueLights10To12.join(", ")}</td>
        <td>${assignment.blueLights12ToOn.join(", ")}</td>
        <td>${assignment.induction1To3.join(", ")}</td>
        <td>${assignment.induction4To6.join(", ")}</td>
        <td>${assignment.induction7To9.join(", ")}</td>
        <td>${assignment.reservedForce.join(", ")}</td>
    `;
    outputContainer.lastChild.appendChild(row);

    dayIndex = (dayIndex + 1) % daysOfWeek.length;
});


// BlueLight 10 to 12
var SundayBlueLight10to12
var MondayBlueLight10to12
var TuesdayBlueLight10to12
var WednesdayBlueLight10to12
var ThursdayBlueLight10to12

// BlueLights 12 to Onwards
var SundayBlueLight12toOn
var MondayBlueLight12toOn
var TuesdayBlueLight12toOn
var WednesdayBlueLight12toOn
var ThursdayBlueLight12toOn