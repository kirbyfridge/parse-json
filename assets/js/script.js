// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/orgs/twitter/repos';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    // TODO: Loop through the response
    for (var i=0; i<=4; i < data.length, i++) {
    // TODO: Console log each issue's URL and each user's login
    console.log(data[i].issues_url + " " + data[i].name);
  }
  });
