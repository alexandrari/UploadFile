const { Router } = require('express');

const router = Router();

const routes = [
    {
        path: 'upload',
    },
]

routes.forEach(route => {
    return router.use(`/${route.path}`, require(`./${route.path}`))
})

module.exports = router;