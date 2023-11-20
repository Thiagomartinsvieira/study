import questions from "../questionsDatabase";

const getQuestionById = (req, res) => {
    const idSelected = +req.query.id;

    const singleQuestionOrNothing = questions.filter(question => question.id === idSelected);

    if (singleQuestionOrNothing.length === 1) {
        const questionSelected = singleQuestionOrNothing[0].shuffleAnswers();
        res.status(200).json(questionSelected);
    } else {
        res.status(404).send();
    }
};

export default getQuestionById;
