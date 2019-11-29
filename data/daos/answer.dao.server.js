answers = []

const studentDaos = require('./student.dao.server.js');
const questionDaos = require('./question.dao.server.js');

module.exports = {
    createAnswer: function (sid, qid, answerDetails){


        let answer = {
            _id: answerDetails._id,
            student: sid,
            question: qid,
            true_false_answer: answerDetails.true_false_answer,
            multiple_choice_answer: answerDetails.multiple_choice_answer
        }
        answers.push(answer)
        return true
    },
    findAllAnswers: function () {
        return answers
    },
    findAnswersById: function(id) {
        let filtered = answers.filter((answers) => answers._id == id)
        if (filtered.length>0){
            return filtered[0]
        } else return null
    },
    findAnswersByQid: function(qid) {
        let filtered = answers.filter((answers) => answers.question == qid)
        if (filtered.length>0){
            return filtered
        } else return null
    },

    findAnswersBySid: function(sid) {
        let filtered = answers.filter((answers) => answers.student == sid)
        if (filtered.length>0){
            return filtered
        } else return null
    },

    findAnswersBySidAndQid: function(sid, qid) {
        let filteredBySid = answers.filter((answers) => answers.student == sid)
        let filteredByQid = answers.filter((answers) => answers.question == qid)
        if (filteredByQid.length>0){
            return filteredByQid[0]
        } else return null
    },

}
