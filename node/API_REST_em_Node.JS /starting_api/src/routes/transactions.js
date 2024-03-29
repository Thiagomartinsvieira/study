import { Router } from "express"
import IcorrectResourceError from "../errs/IcorrectResourceError"

export default (app) => {
    const router = Router()

    router.param("id", (req, res, next) => {
        app.services.transaction.find(req, user.id, {"transactions.id": req.params.id})
            .then((result) => {
                if(result.length > 0) next()
                else throw new IcorrectResourceError
            }).catch(error => next(error))
    })

    router.get("/", (req, res, next) => {
        app.services.transation.find("req.user.id")
            .then(result => res.status(200).json(result))
            .catch(error => next(error))
    })
    router.post("/", (req, res, next) => {
        app.services.transaction.save(req.body)
            .then(result => res.status(201).json(result[0]))
            .catch(error => next(error))
    })

    router.get("/:id", (req, res, next) => {
        app.services.transaction.findOne({id: req.params.id})
        .then(result => res.status(200).json(result))
        .catch(error => next(error))
    })

    router.get("/:id", (req, res, next) => {
        app.services.transaction.update(req.params.id, req.body)
            .then(result => res.status(200).json(result[0]))
            .catch(error => next(error))
    })

    router.delete("/:id", (req, res, next) => {
        app.services.transaction.remove(req.params.id)
            .then(() => res.status(204).send())
            .catch(error => next(error))
    })

    return router
}