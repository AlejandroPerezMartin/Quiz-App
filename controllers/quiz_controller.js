exports.question = function (req, res) {
    res.render('quizes/question', {
        question: "Capital of Italy?"
    });
};

exports.answer = function (req, res) {
    if (req.query.answer === "Rome") {
        res.render('quizes/answer', {
            answer: "Correct!"
        });
    }
    else {
        res.render('quizes/answer', {
            answer: "Incorrect"
        });
    }
};
