let Nedb = require("nedb");
let db = new Nedb({
    filename: "pessoa.db",
    autoload: true
})
module.exports = app => {
    let route = app.route("/form");
    route.post((request, response) => {
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

    route.get((request, response) => {
        db.find({}).sort({ name: 1 }).exec((error, data) => {
            if (error) {
                response.status(400).json({
                    error
                })
            }
            else {
                response.status(200).json({data})
            }
        })
    })

    let routeId = app.route("/form/:id");

    routeId.get((request, response)=>{
        db.findOne({_id: request.params.id}).exec((error, data) =>{
            if(error){
                response.status(400).json({
                    error
                })
            }
            else{
                response.status(200).json({data})
            }
        })
    })

    routeId.put((request, response)=>{
        db.update({_id:request.params.id}, request.body, error=>{
            if(error){
                response.status(400).json({
                    error
                })
            }
            else{
                response.status(200).json(request.body)
            }
        });
    })

    routeId.delete((request, response)=>{
        db.remove({_id:request.params.id},{}, error=>{
            if(error){
                response.status(400).json({
                    error
                })
            }
            else{
                response.status(200).json(request.body)
            }
        });
    })
}