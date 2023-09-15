const { Router } = require('express');
const router = Router();

const { getPets, getPetById, createPets, updatePets, deletePet } = require('../controllers/index.controller.js')

router.get('/pets', getPets);
router.get('/pets/:id', getPetById);
router.post('/pets', createPets);
router.put('/pets/:id', updatePets);
router.delete('/pets/:id', deletePet);

module.exports = router;