var path = require('path');
var Sequelize = require('sequelize');
var sequelize = new Sequelize(null, null, null, {
    dialect: "sqlite",
    storage: "quiz.sqlite"
});

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz;

sequelize.sync().success(function () {
    Quiz.count().success(function (count) {
        if (count === 0) {
            Quiz.create({
                question: 'Capital of Italy?',
                answer: 'Rome'
            }).success(function () {
                console.log('Database was successfuly initialized!');
            });
        }
    });
});
