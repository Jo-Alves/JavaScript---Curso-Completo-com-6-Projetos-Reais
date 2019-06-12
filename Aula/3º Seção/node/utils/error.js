module.exports = {
    send: (error, req, resp, code = 400) => {
        console.log(`Error: ${error}`);
        resp.status(code).json({
            error
        });
    }
}