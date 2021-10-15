const userModel = require('../models/m_user')

exports.create = (request, response) => {
  const user = new userModel({
    username: "username bukan aku",
    password: "password bukan aku",  
    email: "email bukan aku",
    address: "address bukan aku",
    age: "17"
  })

  user.save(user)
  .then(res => {
    response.send({
      message: "data created successfully",
      result: res
    })
  })
  .catch(err => {
    response.send({
      message: "failed to create data",
      result: err
    })
  })
}

exports.read = (request, response) => {
  userModel.find()
  .then(resp => {
    response.send({
      message: "data read successfully",
      result: resp
    })
  })
  .catch(err => {
    response.send({
      message: "failed to read data",
      result: err
    })
  })
}

exports.update = (request, response) => {
  
}

exports.delete = (request, response) => {
  userModel.deleteOne( { 'username': 'usernameku' } )
  .then(resp => {
    response.redirect('/mongoRead');
  })
  .catch(err => {
    response.send({
      message: "cant delete data",
      result: err
    })
  })
}