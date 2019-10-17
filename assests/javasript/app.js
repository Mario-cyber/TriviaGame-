$(document).ready(function () {

    let questions = ["what year did the first Spiderman comic come out?",
        "What color is superman's cape", "what what is The Flash's superpower?"
    ]

    $(".button").on('click', function () {
        $(".button").fadeOut();
        console.log(questions);
        $("#bigWindow").html("<input type= " + "radio " + "name=" + "gender " + "value=" + "1 " + "> " + "answer-1")
        console.log(bigWindow)




    })











})