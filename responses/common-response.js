class CommonResponse {

  constructor(status, message, data){
    this._status = status;
    this._message = message;
    this._data = data;
  }
  
  set status(status){
    this._status = status;
  }

  get status(){
    return Number.parseInt(this._status);
  }

  set message(message){
    this._message = message;
  }

  get message(){
    return this._message;
  }

  set data(data){
    this._data = data;
  }

  get message(){
    return this._data;
  }

}

module.exports = CommonResponse;