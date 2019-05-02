import CustomerRouter from './customer-router';
import KaryawanRouter from './karyawan-router';
import Notfound from './../responses/notfound';

const routes = [
  CustomerRouter,
  KaryawanRouter,
  Notfound
];

module.exports = routes;