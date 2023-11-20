import QuestionModel from "@/model/question";
import ResponseModel from "@/model/response";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'which animal transmits chagas disease?', [
        ResponseModel.wrong('Cow'),
        ResponseModel.wrong('cheap'),
        ResponseModel.wrong('flea'),
        ResponseModel.certain('barber'),
    ]),

    new QuestionModel(202, 'which fruit is known in the northeast as jerimum?', [
        ResponseModel.wrong('cashew'),
        ResponseModel.wrong('pineapple'),
        ResponseModel.wrong('orange'),
        ResponseModel.certain('pumpkin'),
    ]),
    
]

export default questions