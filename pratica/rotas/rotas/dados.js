let Nedb = require("nedb");
let db = new Nedb({
    filename: "pessoa.db",
    autoload: true
})
module.exports = app => {
    app.post("/form", (request, response) => {
        db.insert(request.body, (error, data) => {
            if (error) {
                response.status(400).json({
                    Erro: error
                })
            }
            else {
                response.status(200).json(data);
            }
        })
    })

    app.get("/form", (request, response) => {
        db.find({}).sort({ name: 1 }).exec((error, users) => {
            if (error) {
                response.status(400).json({
                    error
                })
            }
            else {
                response.status(200).json({
                    users
                })
            }
        })
    })
}