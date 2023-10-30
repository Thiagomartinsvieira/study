export function mega(qtde = 6, numbers = []) {
    if(qtde < 6 && qtde > 60) {
        throw 'invalid quantity!'
    }

    if(numbers.length === qtde) {
        return numbers.sort((n1, n2) => n1 - n2)
    }

    const randomNumber = parseInt(Math.random() * 60) + 1
    if(!numbers.includes(randomNumber)) {
        return mega(qtde, [...numbers, randomNumber])
    } else {
        return mega(qtde, numbers)
    }
}
