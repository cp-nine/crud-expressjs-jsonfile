class CommonResponse {

  constructor(status, message, data){
    this.status = status ? status : 20;
    this.message = message ? message : "Success";
    this.data = data ? data : null;
  }

}

module.exports = CommonResponse;