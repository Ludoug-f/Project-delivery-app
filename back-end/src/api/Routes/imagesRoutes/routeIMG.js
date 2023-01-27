const { Router } = require('express');
const path = require('path');

const router = Router();

// render img on backend

const renderIMG = async (_req, _res) => {
    const { id } = _req.params;
    const images = path.join(__dirname, '..', 'images', `${id}`);
    _res.status(200).json(images);
};

router.get('/', renderIMG, async () => {});
router.get('/:id', renderIMG, async () => {});

module.exports = router;