var questions = []


module.exports = {
    createQuestion: function (question){
        questions.push(question)
    },
    findAllQuestions: function () {
        return questions
    },
    findQuestionById: function(id) {
        let filtered = questions.filter((question) => question._id == id)
        if (filtered.length>0){
            return filtered[0]
        } else return null
    },

    updateQuestion: function(id, question) {
        for (let ii = 0; ii < questions.length; ii++) {
            if (questions[ii]._id == id){
                questions[ii] = question
                return true;
            }
        }
        return false
    },

    deleteQuestion: function(id) {
        let filtered = questions.filter((question) => question._id != id)
        if (filtered.length < questions.length){
            questions = filtered;
            return true;
        } else return false;
    }
};
