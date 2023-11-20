import QuestionModel from "@/model/question";
import ResponseModel from "@/model/response";

const questions: QuestionModel[] = [
    new QuestionModel(306, 'Which animal transmits Chagas disease?', [
        ResponseModel.wrong('Bee'),
        ResponseModel.wrong('Cockroach'),
        ResponseModel.wrong('Flea'),
        ResponseModel.certain('Kissing Bug'),
    ]),
    new QuestionModel(202, 'Which fruit is known as "jerimum" in the North and Northeast of Brazil?', [
        ResponseModel.wrong('Cashew'),
        ResponseModel.wrong('Coconut'),
        ResponseModel.wrong('Chayote'),
        ResponseModel.certain('Pumpkin'),
    ]),
    new QuestionModel(203, 'What is the collective noun for dogs?', [
        ResponseModel.wrong('Herd'),
        ResponseModel.wrong('Pack'),
        ResponseModel.wrong('Flock'),
        ResponseModel.certain('Pack'),
    ]),
    new QuestionModel(204, 'What is the triangle that has all sides different?', [
        ResponseModel.wrong('Equilateral'),
        ResponseModel.wrong('Isosceles'),
        ResponseModel.wrong('Trapezoid'),
        ResponseModel.certain('Scalene'),
    ]),
    new QuestionModel(205, 'Who composed the Hino da Independência (Independence Anthem) of Brazil?', [
        ResponseModel.wrong('Castro Alves'),
        ResponseModel.wrong('Manuel Bandeira'),
        ResponseModel.wrong('Carlos Gomes'),
        ResponseModel.certain('Dom Pedro I'),
    ]),
    new QuestionModel(206, 'What is the antonym of "fail"?', [
        ResponseModel.wrong('Lose'),
        ResponseModel.wrong('Fail'),
        ResponseModel.wrong('Disregard'),
        ResponseModel.certain('Achieve'),
    ]),
    new QuestionModel(207, 'What country was Carmen Miranda born in?', [
        ResponseModel.wrong('Argentina'),
        ResponseModel.wrong('Spain'),
        ResponseModel.wrong('Brazil'),
        ResponseModel.certain('Portugal'),
    ]),
    new QuestionModel(208, 'Who was the last President during the military dictatorship period in Brazil?', [
        ResponseModel.wrong('Costa e Silva'),
        ResponseModel.wrong('Emílio Médici'),
        ResponseModel.wrong('Ernesto Geisel'),
        ResponseModel.certain('João Figueiredo'),
    ]),
    new QuestionModel(209, 'Following the sequence of the deck, which card comes after ten?', [
        ResponseModel.wrong('Ace'),
        ResponseModel.wrong('Nine'),
        ResponseModel.wrong('King'),
        ResponseModel.certain('Jack'),
    ]),
    new QuestionModel(210, 'The adjective "venous" is related to:', [
        ResponseModel.wrong('Candle'),
        ResponseModel.wrong('Wind'),
        ResponseModel.wrong('Vênia'),
        ResponseModel.certain('Vein'),
    ]),
    new QuestionModel(211, 'What name is given to purification through water?', [
        ResponseModel.wrong('Abruption'),
        ResponseModel.wrong('Abolition'),
        ResponseModel.wrong('Selflessness'),
        ResponseModel.certain('Ablution'),
    ]),
    new QuestionModel(212, 'Which mountain is located between the border of Tibet and Nepal?', [
        ResponseModel.wrong('Monte Branco'),
        ResponseModel.wrong('Mount Fuji'),
        ResponseModel.wrong('Monte Carlo'),
        ResponseModel.certain('Mount Everest'),
    ]),
    new QuestionModel(213, 'Where on the body is the epiglottis found?', [
        ResponseModel.wrong('Stomach'),
        ResponseModel.wrong('Pancreas'),
        ResponseModel.wrong('Rim'),
        ResponseModel.certain('Neck'),
    ]),
    new QuestionModel(214, 'Loss compensation is called...', [
        ResponseModel.wrong('Deficit'),
        ResponseModel.wrong('Indexing'),
        ResponseModel.wrong('Undue'),
        ResponseModel.certain('Compensation'),
    ]),
    new QuestionModel(215, 'Which Brazilian folklore character has one leg?', [
        ResponseModel.wrong('Cuca'),
        ResponseModel.wrong('Curupira'),
        ResponseModel.wrong('Boitatá'),
        ResponseModel.certain('Saci-pererê'),
    ]),
    new QuestionModel(216, 'Who is the "patron" of the Brazilian Army?', [
        ResponseModel.wrong('Marechal Deodoro'),
        ResponseModel.wrong('Barão de Mauá'),
        ResponseModel.wrong('Marquês de Pombal'),
        ResponseModel.certain('Duque de Caxias'),
    ]),
]

export default questions
