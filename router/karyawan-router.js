const KaryawanRouter = require('express').Router();
import {findAll, findById, findBonus, insert, update, hapus, success, fail, getBonus} from './../service/karyawn-dao-service';

//  get karyawans
KaryawanRouter.get('/list-karyawan', (req, res, next)=>{

  // const karyawan = findAll();

  // res.json(JSON.stringify(karyawan));
  let sql = `SELECT * FROM karyawan`;
  con.query(sql,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });

});

// get by id
KaryawanRouter.get('/karyawan/:id', (req, res, next)=>{

  // const karyawan = findById(req.params.id);
  // res.json(karyawan);
  let sql = `SELECT * FROM karyawan WHERE nik = ${req.params.id}`;
  con.query(sql,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });
  
});

// get bonus karyawan
KaryawanRouter.get('/karyawan/:id/bonus', (req, res, next)=>{

  // const karyawan = findBonus(req.params.id);
  // res.json(karyawan);

  let sql = `SELECT * FROM karyawan WHERE nik = ${req.params.id}`;
  con.query(sql,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      let data = results[0];
      let bonus = getBonus(data.grade, data.salary);
      let resp = {
        "nik": data.nik,
        "nama" : data.nama,
        "bonus": bonus
      }
      res.json(resp);
    }
  });
  
});

// post
KaryawanRouter.post('/karyawan', (req, res, next) => {

  // let response = insert(req.body, success, fail);

  // res.json(response);

  let data = req.body;

  let sql = `INSERT INTO karyawan(nik, nama, jenis_kelamin, alamat, salary, grade) VALUE ('${data.nik}', '${data.nama}', ${data.jenis_kelamin}, '${data.alamat}', ${data.salary}, '${data.grade}')`;
  
  con.query(sql,(err, results)=>{
    if (err) {
      res.json(err);
    }
  });

  let sql2 = `SELECT * FROM karyawan WHERE nik = ${data.nik}`;
  con.query(sql2,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });

});

// update
KaryawanRouter.put('/karyawan/:id', (req, res, next) => {

  // let response = update(req.params.id, req.body, success, fail);

  // res.json(response);

  let data = req.body;

  let sql = `UPDATE karyawan SET nama='${data.nama}', jenis_kelamin=${data.jenis_kelamin}, alamat='${data.alamat}', salary=${data.salary}, grade='${data.grade}' WHERE nik= '${req.params.id}'`;

  con.query(sql,(err, results)=>{
    if (err) { res.json(err); } 
  });

  let sql2 = `SELECT * FROM karyawan WHERE nik = ${req.params.id}`;
  con.query(sql2,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      res.json(results);
    }
  });

});

KaryawanRouter.delete('/karyawan/:id', (req, res, next) => {

  let sql = `DELETE FROM karyawan WHERE nik = ${req.params.id}`;
  con.query(sql,(err, results)=>{
    if (err) {
      res.json(err);
    } else {
      let message = "Delete Success";
      res.json({message});
    }
  });

  // const response = hapus(req.params.id, success, fail);
  // res.status(200).json(response);

});

module.exports = KaryawanRouter;