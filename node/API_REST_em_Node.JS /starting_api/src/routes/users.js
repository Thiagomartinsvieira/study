module.exports = (app) => {

    const findAll = (req, res) => {
       app.services.user.findAll()
       .then(result => {
        res.status(200).json(result)
       }).catch(error => {
        console.log(error)
        res.status(500).json({error: 'Internal server error'})
       })  
    }
    
    const create = async (req, res) => {
        const result = await app.services.user.save(req.body)
        if(result.error) return res.status(400).json(result)
        res.status(201).json(result[0])
    }

    return {findAll, create}
}