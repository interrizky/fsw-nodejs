exports.viewing = (request, response) => {
  response.render('view_test');
}

exports.sending = (request, response) => {
  let datax = request.body;

  /* happened in backend */
  console.log(datax);
  console.log("data di atas merupakan kirimin submit&form post-action")

  /* send data to front-end */
  /* menampilkan di halaman baru namun isinya aja */
  /* sukses */
  // response.send(datax)  

  /* menampillan di halaman baru beserta isinya - EJS */
  /* sukses */
  // let namaAja = datax.exampleFormControlInput1
  // response.render('view_test_result', {namaAja}, function(err, result) {
  //   response.send(result)
  // });
  // response.render('view_test_result', {
  //   namaAja: datax.exampleFormControlInput1,
  //   emailAja: datax.exampleFormControlInput2,
  //   addressAja: datax.exampleFormControlTextarea1,
  //   divisiAja: datax.exampleFormControlInput3,
  //   tempatLahirAja: datax.exampleFormControlInput4,
  //   tanggalLahirAja: datax.exampleFormControlInput5,
  //   citaAja: datax.exampleFormControlInput6,
  //   harapanAja: datax.exampleFormControlTextarea2
  // });  

  /* menampillan di halaman yang sama beserta isinya - EJS */  
  /* sukses */
  response.render('view_test', {
    namaAja: datax.exampleFormControlInput1,
    emailAja: datax.exampleFormControlInput2,
    addressAja: datax.exampleFormControlTextarea1,
    divisiAja: datax.exampleFormControlInput3,
    tempatLahirAja: datax.exampleFormControlInput4,
    tanggalLahirAja: datax.exampleFormControlInput5,
    citaAja: datax.exampleFormControlInput6,
    harapanAja: datax.exampleFormControlTextarea2
  });
  // $this->load->view('', data);
}

exports.viewingdua = (request, response) => {
  response.render('view_test_dua');
}

exports.sendingdua = (request, response) => {
  let datax = request.body;

  /* happened in backend - output appears in Terminal */
  console.log(datax);
  console.log("data di atas merupakan kirimin button&fetch-post")

  /* sending to frontend - catch in callback */
  response.send(datax)
}