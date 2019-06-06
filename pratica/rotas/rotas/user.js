module.exports = app => {
    app.get("/namorada", (req, resp) =>{
        resp.setHeader("Content-Type", "text/html");
        resp.end("<h1>Valdirene é linda e muito gostosa!</h1>");
    })
};