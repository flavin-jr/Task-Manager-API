const notFoundError = (res) => {
    return res.status(404).send("Tarefa não encontrada")
}

const objectIdCastError = (res) => {
    return res.status(500).send("Ocorreu um erro ao buscar esses dados no banco de dados");
}
module.exports = {
    notFoundError,
    objectIdCastError
};