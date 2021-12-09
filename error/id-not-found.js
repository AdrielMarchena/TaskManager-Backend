class IdNotFound extends Error
{
    constructor(message,statusCode)
    {
        super(message);
        this.statusCode = statusCode;
    }
}

const CreateIdNotFoundError = (message,statusCode) =>
{
    return new IdNotFound(message,statusCode);
}

module.exports = {CreateIdNotFoundError,IdNotFound}