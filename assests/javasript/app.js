$(document).ready(function () {
    // satart variable counters:
    let wins = 0;
    let losses = 0;
    let unanswered = 0

    // define an object that contains 
    let content = {
        questions: [
            "what year did the first Spiderman comic come out?",
            "What color is superman's cape", "what what is The Flash's superpower?",
            "who is Batman's archenemy?"
        ],

        answers: [
            A1 = [1984, 1902, 1926, 1962],

            A2 = ["yellow", "red", "green", "purple"],

            A3 = ["super speed", "super strength", "laser vision", "teleportation"],

            A4 = ["The Penguin", "The Riddler", "The Joker", "Bane"]

        ]

    }

    function questions() {
        let l = content.questions.length
        for (let i = 0; i < l; i++) {
            let queDiv = $("<div>");
            let p = $("<p>").text(content.questions[i]);
            queDiv.attr("id", "Q" + (i + 1))
            queDiv.prepend(p);
            $("#questions").append(queDiv);
        }
    }

    function buttons() {
        let l = content.answers.length
        for (let i = 0; i < l; i++) {
            console.log(l)
            for (let i = 0; i < l; i++) {
                let radioBtn = $('<input type="radio" name="rbtnCount" />')
                $("#Q" + (i + 1)).append(radioBtn);

            }
        }
        for (let i = 0; i < l; i++) {
            $("#Q" + (i + 1)).$(this).text(content.answers[i])

        }
    }
    // attr("text", "A" + (i + 1))
    // let ansDiv = $('<input type="radio" name="radiobtn" > ' + '</input>')
    // let ans = content.answers.A1[i];
    // ansDiv.append(ans)
    // console.log(ans)
    // console.log(ansDiv)
    // let ansDiv = $(("<input type= " + "radio " + "name=" + "question " + "value=" + (i + 1) + ">  " + content.answers[i][i] + " "))
    // ansDiv.attr("value", (i + 1))
    // ansDiv.append(content.answers[i][i] + " ")

    $(".button").on('click', function () {
        $(".button").hide();
        questions();
        buttons();

    })
    // console.log(questions);
    // for (let i = 0; i < l; i++) {

    // $("#answers").append("<input type= " + "radio " + "name=" + "question " + "value=" + i + ">  " + answer[i] + " ")
    // $("#answers").append("<input type= radio " + "name= question " + "value=" + i + ">  " + answer[i] + " ")
    // }

    // let id = $(this).attr('id');


    // issus with this method: while the loop runs as desired (as tested using debbugers). 
    // when the loop has run in its entirety  the HTML keeps getting updated so the
    // buttons continiously replace each other. 

    // Possible solutions :
    // 1) set up enough divs with numerical ID's to alter each of this HTML componets rotating 
    // IDs in the loop

    // 2) firgure out how to create more HTML actively once the "start" button has been pressed












})