$(document).ready(function () {

    let content = {
        questions: [
            "what year did the first Spiderman comic come out?",
            "What color is superman's cape", "what what is The Flash's superpower?",
            "who is Batman's archenemy"
        ],

        answers: [
            A1 = [1984, 1902, 1926, 1962],

            A2 = ["yellow", "red", "green", "purple"],

            A3 = ["super speed", "super strength", "laser vision", "teleportation"],

            A4 = ["The Penguin", "The Riddler", "The Joker", "Bane"]

        ]

    }

    console.log(content);


    function questions() {
        let l = content.questions.length
        console.log(l)
        for (var i = 0; i < l; i++) {
            let queDiv = $("<div>");
            let p = $("<p>").text(content.questions[i]);
            queDiv.attr("id", "Q" + (i + 1))
            queDiv.prepend(p);
            $("#questions").append(queDiv);
        }
    }

    function buttons() {
        let l = content.answers.length
        for (var i = 0; i < l; i++) {
            let ansDiv = $(("<input type= " + "radio " + "name=" + "question " + "value=" + (i + 1) + ">  " + content.answers[i][i] + " "))
            ansDiv.attr("value", (i + 1))
            ansDiv.append(content.answers[i][i] + " ")
            $("#Q" + (i + 1)).append(ansDiv);
        }
    }

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

    console.log(bigWindow)











})