class ResponseModel {

  constructor(angka, bilangan){
    this._angka = angka;
    this._bilangan = bilangan;
  }
  
  set angka(angka){
    this._angka = angka;
  }

  get angka(){
    return Number.parseInt(this._angka);
  }

  set bilangan(bilangan){
    this._bilangan = bilangan;
  }

  get bilangan(){
    return this._bilangan;
  }

}

module.exports = ResponseModel;