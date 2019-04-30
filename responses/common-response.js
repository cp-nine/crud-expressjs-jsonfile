class CommonResponse {

  constructor(status, message, data){
    this.status = status;
    this.message = message;
    this.data = data;
  }
  
  set _status(status){
    this.status = status;
  }

  get _status(){
    return Number.parseInt(this.status);
  }

  set _message(message){
    this.message = message;
  }

  get _message(){
    return this.message;
  }

  set _data(data){
    this.data = data;
  }

  get _message(){
    return this.data;
  }

}

module.exports = CommonResponse;