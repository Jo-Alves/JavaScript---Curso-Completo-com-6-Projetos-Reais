module.exports ={
    user:(app, req, resp)=>{
        req.assert("nome", "O nome é obrigatório").notEmpty();
        req.assert("email", "O email está inválido").notEmpty().isEmail;

        let erros = req.validationErrors();

        if(erros){
            app.utils.error.send(erros, req, resp);
            return false;
        }
        else{
            return true;
        }

    }
}