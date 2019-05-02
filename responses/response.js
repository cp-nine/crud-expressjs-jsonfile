import CommonResponse from './common-response';

exports.Ok = (res, callback) => {

  let response = new CommonResponse(data);

  res.json(response);
}