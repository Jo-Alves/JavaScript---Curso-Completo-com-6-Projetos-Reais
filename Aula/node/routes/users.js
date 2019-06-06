let NeDB = require("nedb");
let db = new NeDB({
    filename: "users.db",
    autoload: true
});

module.exports = app => {

    let route = app.route("/users")
    route.get((req, resp) => {

        db.find({}).sort({ name: 1 }).exec((error, users) => {
            if (error) {
                app.utils.error.send(error, req, resp)
            }
            else {
                resp.statusCode = 200;
                resp.setHeader("Content-type", "application/json");
                resp.json({
                    users
                })
            }
        })

    })

    route.post((req, resp) => {

        if (!app.utils.validator.user(app, req, resp)) return false;

        db.insert(req.body, (error, user) => {
            if (error) {
                app.utils.error.send(error, req, resp)
            }
            else {
                resp.status(200).json(user);
            }
        })
    });

    let routeId = app.route("/users/:id");

    routeId.get((req, resp) => {
        db.findOne({ _id: req.params.id }).exec((error, user) => {
            if (error) {
                app.utils.error.send(error, req, resp)
            }
            else {
                resp.status(200).json(user);
            }
        })
    });

    routeId.put((req, resp) => {
       
        if (!app.utils.validator.user(app, req, resp)) return false;
        db.update({ _id: req.params.id }, req.body, error => {
            if (error) {
                app.utils.error.send(error, req, resp)
            }
            else {
                resp.status(200).json(Object.assign(req.body, req.params.id));
            }
        })
    })

    routeId.delete((req, resp) => {
        db.remove({ _id: req.params.id }, {}, error => {
            if (error) {
                app.utils.error.send(error, req, resp)
            }
            else {
                resp.status(200).json(req.params);
            }
        })
    })
};