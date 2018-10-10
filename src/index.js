import $ from 'jquery'

$(document).ready(() => {
  loadWords()
})

var baseUrl = 'https://wordwatch-api.herokuapp.com'



function addNewWord() {
  var url = `${baseUrl}/api/v1/words`
  var newWord = $('textarea').val()
  var payload = { word: { value: newWord } }
  var stringPayload = JSON.stringify(payload)
  fetch(url, {
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: stringPayload
  })
  $('textarea').val("")
  loadWords()
}

function loadWords() {
  fetch(`${baseUrl}/api/v1/top_word`)
    .then(response => response.json())
    .then(function(data) {
      var word = data["word"]
      var field = $('article.word-count')
      field.html("")
      field.append(`${Object.keys(word)[0]}: ${Object.values(word)[0]}`)
    })
}

$('button').on('click', addNewWord)
