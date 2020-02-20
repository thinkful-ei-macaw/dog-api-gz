function getDogImage(n) {
  fetch(`https://dog.ceo/api/breeds/image/random/${n}`)
    .then(response => response.json())
    .then(responseJson => console.log(responseJson));
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let n = $('#number-of-dogs').val();
    getDogImage(n);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});


const generateDogImageTemplate = (dogLink) => {
  let html = '';
  const pics = dogLink.message;
  pics.forEach(pic => {
    html += `<img src="${pic}">`;
  });
  return html;
};