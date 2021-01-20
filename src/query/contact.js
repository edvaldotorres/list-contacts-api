function createContactQuery(params) {
    let query = 'INSERT INTO `contacts`(`name`, `last_name`, `phone`, `email`, `address`) VALUES (' + `'${params.name}'` + ',' + `'${params.lastName}'` + ',' + `'${params.phone}'` + ',' + `'${params.email}'` + ',' + `'${params.address}'` + ')'

    return query
}

function listContactsQuery() {
    let query = 'SELECT * FROM `contacts`'

    return query
}

function listContactByIdQuery(id) {
    let query = 'SELECT * FROM `contacts` WHERE id = ' + id

    return query
}

function deleteContactQuery(id) {
    let query = 'DELETE FROM `contacts` WHERE id = ' + id

    return query
}

function updateContactQuery(params) {
    let query = 'UPDATE `contacts` SET `name` = ' + `'${params.name}'` + ', `last_name` = ' + `'${params.lastName}'` + ', `phone` = ' + `'${params.phone}'` + ', `email`= ' + `'${params.email}'` + ', `address` = ' + `'${params.address}'` + ' WHERE id = ' + params.id

    return query
}

module.exports = {
    createContactQuery,
    listContactsQuery,
    listContactByIdQuery,
    deleteContactQuery,
    updateContactQuery
}