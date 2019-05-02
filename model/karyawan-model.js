class Karyawan {

  constructor(nik, nama, jk, alamat, salary, grade){
    this.nik = nik;
    this.nama = nama;
    this.jenis_kelamin = jk;
    this.alamat = alamat;
    this.salary = salary;
    this.grade = grade;
  }

  get _nik(){
    return this.nik;
  }

  get _nama(){
    return this.nama;
  }

  get _jenis_kelamin(){
    return this.jenis_kelamin;
  }

  get _alamat(){
    return this.alamat;
  }

  get _salary(){
    return Number(this.salary);
  }

  get _grade(){
    return this.grade;
  }

}

module.exports = Karyawan;