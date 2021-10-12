exports.homepage = (request, response) => {
  response.render('apix_flower')
}

exports.details = (request, response) => {
  let dataNama = request.params.nama

  let dataHarga = ""
  let dataPoster = ""

  let flower_list = [
    {
      nama: 'Bunga 1',
      harga: '100000',
      poster: '/flower_asset/images/pngfind-1-transparent.png'
    },
    {
      nama: 'Bunga 2',
      harga: '200000',
      poster: '/flower_asset/images/pngfind-2-transparent.png'
    },
    {
      nama: 'Bunga 3',
      harga: '300000',
      poster: '/flower_asset/images/pngfind-3-transparent.png'
    },
    {
      nama: 'Bunga 4',
      harga: '400000',
      poster: '/flower_asset/images/pngfind-4-transparent.png'
    },
    {
      nama: 'Bunga 5',
      harga: '500000',
      poster: '/flower_asset/images/pngfind-5-transparent.png'
    },
    {
      nama: 'Bunga 6',
      harga: '600000',
      poster: '/flower_asset/images/pngfind-6-transparent.png'
    },
    {
      nama: 'Bunga 7',
      harga: '700000',
      poster: '/flower_asset/images/pngfind-7-transparent.png'
    },
    {
      nama: 'Bunga 8',
      harga: '800000',
      poster: '/flower_asset/images/pngfind-8-transparent.png'
    },
    {
      nama: 'Bunga 9',
      harga: '900000',
      poster: '/flower_asset/images/pngfind-9-transparent.png'
    }
  ]

  for (var i = 0; i < flower_list.length; i++) {
    if (flower_list[i].nama == dataNama) {
      dataHarga = flower_list[i].harga;
      dataPoster = flower_list[i].poster;
    }
  }

  response.render('detail_flower', {
    nama: dataNama,
    poster: dataPoster,
    harga: dataHarga,
    harga_x: parseInt(dataHarga).toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
  })

}