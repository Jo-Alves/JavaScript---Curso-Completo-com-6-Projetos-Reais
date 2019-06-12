const express = require("express")

let app = express();
app.get('/', (req, resp) => {

    resp.statusCode = 200;
    resp.setHeader("Content-type", "text/html");
    resp.end("<h1>OI LAS</h1>")
    console.log("URL:", req.url);
    console.log("METHOD:", req.method);
});

app.get("/users", (req, resp)=>{
    resp.statusCode = 200;
    resp.setHeader("Content-type", "application/json");
    resp.json({
        users: [{
            name: "Las Technology",
            email: "lastechnology@gmail.com",
            id: 1
        }]
    })
})
app.listen(3003, "127.0.0.1", () => {
    console.log("servidor rodando!");
});