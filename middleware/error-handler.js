const {IdNotFound} = require("../error/id-not-found");

const errorHandlerMiddleware = (error,request,response,next) =>
{
    if(error instanceof IdNotFound)
        return response.status(error.statusCode).json({msg:error.message});
    
    return response.status(500).json({msg:"something went wrong"});
}

module.exports = { errorHandlerMiddleware };