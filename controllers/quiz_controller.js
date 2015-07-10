var models = require('../models/models.js');

exports.question = function (req, res) {
    models.Quiz.findAll().success(function () {
        res.render('quizes/question', {
            title: "Question",
            question: quiz[0].question
        });
    });
};

exports.answer = function (req, res) {
    if (req.query.answer === "Rome") {
        res.render('quizes/answer', {
            title: "Answer",
            answer: "Correct!"
        });
    }
    else {
        res.render('quizes/answer', {
            title: "Answer",
            answer: "Incorrect"
        });
    }
};
