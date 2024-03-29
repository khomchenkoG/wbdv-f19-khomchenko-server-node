const express = require('express');
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.listen(3000)

const studentDaos = require('../data/daos/student.dao.server.js');
const questionDaos = require('../data/daos/question.dao.server.js');
const answerDaos = require('../data/daos/answer.dao.server.js');


///////////////////////// FOR STUDENTS ////////////////////////////////////

app.get('/api/student', function (req, res) {
    res.json(studentDaos.findAllStudents())
})


app.post('/api/student', function (req, res) {
    studentDaos.createStudent(req.body)
    res.send({status: "Success"})
})

app.get('/api/student/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let student = studentDaos.findStudentById(id)

    if (student){
    res.json(student)
    } else {
        res.status(404).send("Not found")
    }
})

app.put('/api/student/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let success = studentDaos.updateStudent(id, req.body)
    if (success){
        res.send({status: "Success"})
    } else {
        res.status(404).send("Not found")
    }
})

app.delete('/api/student/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let success = studentDaos.deleteStudent(id)
    if (success){
        res.send({status: "Success"})
    } else {
        res.status(404).send("Not found")
    }
})


///////////////////////// FOR QUESTIONS ////////////////////////////////////

app.get('/api/question', function (req, res) {
    res.json(questionDaos.findAllQuestions())
})


app.post('/api/question', function (req, res) {
    questionDaos.createQuestion(req.body)
    res.send({status: "Success"})
})

app.get('/api/question/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let question = questionDaos.findQuestionById(id)

    if (question){
        res.json(question)
    } else {
        res.status(404).send("Not found")
    }
})

app.put('/api/question/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let success = questionDaos.updateQuestion(id, req.body)
    if (success){
        res.send({status: "Success"})
    } else {
        res.status(404).send("Not found")
    }
})

app.delete('/api/question/:id', function (req, res) {
    var id = req.params['id']
    id = parseInt(id)
    let success = questionDaos.deleteQuestion(id)
    if (success){
        res.send({status: "Success"})
    } else {
        res.status(404).send("Not found")
    }
})

///////////////////////// FOR ANSWERS ////////////////////////////////////

app.post('/api/student/:sid/question/:qid/answer', function (req, res) {
    var sid = req.params['sid']
    var qid = req.params['qid']
    sid = parseInt(sid)
    qid = parseInt(qid)
    let success =  answerDaos.createAnswer(sid, qid, req.body)
    if (success){
        res.send({status: "Success"})
    } else {
        res.status(404).send("Not found")
    }
})

app.get('/api/answer', function (req, res) {
    res.json(answerDaos.findAllAnswers())
})

app.get('/api/answer/:aid', function (req, res) {
    var id = req.params['aid']
    id = parseInt(id)
    res.json(answerDaos.findAnswersById(id))
})

app.get('/api/question/:qid/answer', function (req, res) {
    var id = req.params['qid']
    id = parseInt(id)
    res.json(answerDaos.findAnswersByQid(id))
})

app.get('/api/student/:sid/answer', function (req, res) {
    var id = req.params['sid']
    id = parseInt(id)
    res.json(answerDaos.findAnswersBySid(id))
})

app.get('/api/student/:sid/question/:qid/answer', function (req, res) {
    var sid = req.params['sid']
    var qid = req.params['qid']
    sid = parseInt(sid)
    qid = parseInt(qid)
    res.json(answerDaos.findAnswersBySidAndQid(sid,qid))
})

app.get('/api/question/:qid/student/:sid/answer', function (req, res) {
    var sid = req.params['sid']
    var qid = req.params['qid']
    sid = parseInt(sid)
    qid = parseInt(qid)
    res.json(answerDaos.findAnswersBySidAndQid(sid,qid))
})



///api/student/:sid/question/:qid/answer

//
// GET
// /api/student
// Retrieves all the students
// GET
// /api/student/:id
// Retrieves student whose ID is id
// PUT
// /api/student/:id
// Updates student whose ID is id with data in HTTP body
// DELETE
// /api/student/:id
// Removes student whose ID is id
// POST
// /api/question
// Creates new question whose info is embedded in HTTP body
// GET
// /api/question
// Retrieves all the questions
// GET
// /api/question/:id
// Retrieves question whose ID is id
// PUT
// /api/question/:id
// Updates question whose ID is id with data in HTTP body
// DELETE
// /api/question/:id
// Removes question whose ID is id
// POST
// /api/student/:sid
// /question/:qid/answer
// Student whose ID is sid answers question whose ID is qid. Body contains details of answer
// GET
// /api/answer
// Retrieves all answers
// GET
// /api/answer/:aid
// Retrieves answer whose Id is aid
// GET
// /api/question/:qid
// /answer
// Retrieves all answers for question qid
// GET
// /api/student/:sid
// /answer
// Retrieves all answers for student sid
// GET
// /api/student/:sid
// /question/:qid/answer
// Retrieves all answers by student whose ID is sid for question whose ID is qid
// GET
// /api/question/:qid
// /student/:sid/answer
// Retrieves all answers by student whose ID is sid for question whose ID is qid (same as above)
