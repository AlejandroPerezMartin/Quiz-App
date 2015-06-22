exports.question = function (req, res) {
    res.render('quizes/question', {
        title: "Question",
        question: "Capital of Italy?"
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
