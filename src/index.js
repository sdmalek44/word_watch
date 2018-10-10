import $ from 'jquery'
var baseUrl = 'https://wordwatch-api.herokuapp.com'
$(document).ready(() => {
  loadWords()
})



function loadWords() {
  fetch(`${baseUrl}/api/v1/top_word`)
    .then(response => response.json())
    .then(function(data) {
      var word = data["word"]
      $('article.word-count').append(`${Object.keys(word)[0]}: ${Object.values(word)[0]}`)

    })
}
