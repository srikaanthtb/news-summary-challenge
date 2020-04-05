const url = "https://content.guardianapis.com/search?api-key=5692b998-2b7e-4c6a-b8c5-b8e148acb3c8"

function addTitle(title) {
      $('.app').append(`<li>${title}</li>`)
    }

    function updateTitles() {
      $.get(url, function(data) {
        const articles = data.response.results;
        articles.forEach((article) => {
          addTitle(article.webTitle);
        })
      })
    }
    updateTitles();
