exports.viewing = (request, response) => {
  response.render('view_test');
}

exports.sending = (request, response) => {
  let datax = request.body;
  console.log(datax);  

  /* menampilkan di halaman baru namun isinya aja */
  /* sukses */
  // response.send(datax)  

  /* menampillan di halaman lain beserta isinya - EJS */
  /* sukses */
  // let namaAja = datax.exampleFormControlInput1
  // response.render('view_test_result', {namaAja}, function(err, result) {
  //   response.send(result)
  // });
  // let alamatAja = datax.exampleFormControlTextarea1;
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
}

exports.viewingdua = (request, response) => {
  response.render('view_test_dua');
}

exports.sendingdua = (request, response) => {
  let datax = request.body;
  console.log(datax);
  /* menampilkan di halaman baru */
  //gak bisa redirect ke halaman baru
  response.send(datax)
  /* response.send(request.body); */
}