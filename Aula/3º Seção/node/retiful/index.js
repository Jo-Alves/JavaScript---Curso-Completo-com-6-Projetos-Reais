const http = require("http");

let server = http.createServer((req, resp) => {
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);

    switch (req.url) {
        case "/":
            resp.statusCode = 200;
            resp.setHeader("Content-type", "text/html");
            resp.end("<h1>Olá</h1>")
            break;
        case "/users":
            resp.statusCode = 200;
            resp.setHeader("Content-type", "application/json");
            resp.end(JSON.stringify({
                users: [{
                    name: "Las Technology",
                    email: "lastechnology@gmail.com",
                    id: 1
                }]
            }))
            break;
    }
});

server.listen(3003, "127.0.0.1", () => {
    console.log("servidor rodando!");
});

