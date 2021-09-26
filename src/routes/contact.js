const router = require('express').Router()
const contactValidation = require('../validation/contact')
const contactController = require('../controller/contact')

router.post('/createContact', contactValidation.createContact, contactController.createContact)
router.get('/listContact', contactController.listContacts)
router.get('/listContactById/:id', contactValidation.listContactsById, contactController.listContactsById)
router.delete('/deleteContact', contactValidation.deleteContact, contactController.deleteContact)
router.put('/updateContact', contactValidation.updateContact, contactController.updateContact)

module.exports = router