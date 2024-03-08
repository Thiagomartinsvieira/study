module.exports = function IncorrectResourceError(message = "Este recurso não pertence ao usuário"){
    this.name = "IncorrectResourceError"
    this.message = message
}