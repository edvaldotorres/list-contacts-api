const { checkEmpty } = require('../shared/check_empty')

function createContact(req, res, next) {
    if (checkEmpty(req.body.name)) {
        res.send("O nome não pode ser vazio.")
    }

    if (checkEmpty(req.body.lastName)) {
        res.send("O sobrenome não pode ser vazio.")
    }

    if (checkEmpty(req.body.phone)) {
        res.send("O telefone não pode ser vazio.")
    }

    if (checkEmpty(req.body.email)) {
        res.send("O email não pode ser vazio.")
    }

    if (checkEmpty(req.body.address)) {
        res.send("O endereço não pode ser vazio.")
    }

    next()
}

function listContactsById(req, res, next) {
    if (checkEmpty(req.params.id)) {
        res.send("O id não pode ser vazio.")
    }

    next()
}

function deleteContact(req, res, next) {
    if (checkEmpty(req.body.id)) {
        res.send("O id não pode ser vazio.")
    }

    next()
}

function updateContact(req, res, next) {
    if (checkEmpty(req.body.id)) {
        res.send("O id não pode ser vazio.")
    }

    if (checkEmpty(req.body.name)) {
        res.send("O nome não pode ser vazio.")
    }

    if (checkEmpty(req.body.lastName)) {
        res.send("O sobrenome não pode ser vazio.")
    }

    if (checkEmpty(req.body.phone)) {
        res.send("O telefone não pode ser vazio.")
    }

    if (checkEmpty(req.body.email)) {
        res.send("O email não pode ser vazio.")
    }

    if (checkEmpty(req.body.address)) {
        res.send("O endereço não pode ser vazio.")
    }

    next()
}

module.exports = {
    createContact,
    listContactsById,
    deleteContact,
    updateContact
}