class ExpressError extends Error {
    constructor(message, status) {
      super()
      this.message = message
      this.status = status
    }
}

class BadRequestError extends ExpressError {
    constructor(message = 'Bad request') {
        super()
        this.message = message
        this.status = 400
    }
}

class NotFoundError extends ExpressError {
    constructor(message = 'Not found') {
        super()
        this.message = message
        this.status = 404
    }
}

module.exports = {
    ExpressError,
    BadRequestError,
    NotFoundError,
};