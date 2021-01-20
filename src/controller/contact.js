const { connectionPool } = require('../config/connection')
const { createContactQuery, listContactsQuery, listContactByIdQuery, deleteContactQuery, updateContactQuery } = require('../query/contact')

function createContact(req, res) {
  const query = createContactQuery(req.body)

  connectionPool.query(query, (error, result, fields) => {
    if (error) throw res.status(500).send('Error interno do servidor.')

    res.status(201).json({ id: result.insertId })
  })
}

function listContacts(req, res) {
  const query = listContactsQuery()

  connectionPool.query(query, (error, result, fields) => {
    if (error) throw res.status(500).send('Error interno do servidor.')

    res.status(201).json(result)
  })
}

function listContactsById(req, res) {
  const query = listContactByIdQuery(req.params.id)

  connectionPool.query(query, (error, result, fields) => {
    if (error) throw res.status(500).send('Error interno do servidor.')

    res.status(201).json(result[0])
  })
}

function deleteContact(req, res) {
  const query = deleteContactQuery(req.body.id)

  connectionPool.query(query, (error, result, fields) => {
    if (error) throw res.status(500).send('Error interno do servidor.')
    
    res.status(201).send(true)
  })
}

function updateContact(req, res) {
  const query = updateContactQuery(req.body)

  connectionPool.query(query, (error, result, fields) => {
    if (error) throw res.status(500).send('Error interno do servidor.')
    
    res.status(201).send(true)
  })
}

module.exports = {
  createContact,
  listContacts,
  listContactsById,
  deleteContact,
  updateContact
}
