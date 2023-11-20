import questions from "../questionsDatabase"
export default (req, res) => {

    questions

    res.status(200).json(questions[0].toObject())
}