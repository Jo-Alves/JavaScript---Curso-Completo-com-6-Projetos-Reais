module.exports = app => {
    app.get('/', (req, resp) => {

        resp.statusCode = 200;
        resp.setHeader("Content-type", "text/html");
        resp.end("<h1>OI LAS</h1>")
        console.log("URL:", req.url);
        console.log("METHOD:", req.method);
    });
};