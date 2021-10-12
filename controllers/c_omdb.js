exports.homepage = (request, response) => {
  response.render('apix')
}

exports.details = (request, response) => {
  let _imdbID = request.params.imdbID
  let _title = request.params.Title

  console.log(_imdbID)
  console.log(_title)

  response.render('detail', {
    id: _imdbID,
    title: _title
  })
}