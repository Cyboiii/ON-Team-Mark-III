        // script2.js

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



                var randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
                var SundayRedBasket = SundayReservedForce[randomIndex];
                SundayReservedForce.splice(randomIndex, 1);

                randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
                var SundayClosing = SundayReservedForce[randomIndex];
                SundayReservedForce.splice(randomIndex, 1);

                var SundayInduction = [];
                while (SundayInduction.length < 9) {
                    randomIndex = Math.floor(Math.random() * SundayReservedForce.length);
                    SundayInduction.push(SundayReservedForce[randomIndex]);
                    SundayReservedForce.splice(randomIndex, 1);
                }

                results.push({
                    matching: SundayMatching,
                    redBasket: SundayRedBasket,
                    closing: SundayClosing,
                    induction: [...SundayInduction],
                    reservedForce: [...SundayReservedForce]
                });
            }

            return results;
        }

        var outputContainer = document.getElementById("output");
        var assignments = generateAssignments(15);

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
                    <th>Induction</th>
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
                <td class="induction-cell">${formatInduction(assignment.induction)}</td>
                <td>${assignment.reservedForce.join(", ")}</td>
            `;
            outputContainer.lastChild.appendChild(row);

            dayIndex = (dayIndex + 1) % daysOfWeek.length;
        });

        function formatInduction(inductionNames) {
            var formattedInduction = "";
            inductionNames.forEach(function (name) {
                formattedInduction += `<div>${name}</div>`;
            });
            return formattedInduction;
        }