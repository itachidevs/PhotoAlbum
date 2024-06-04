window.onload = function() {
  const location = window.location.href;
  const url = new URL(location);
  const search_params = new URLSearchParams(url.search);
  if (!search_params.has('id') || search_params.get('id') === '') {
    window.location.href = '/';
  }
  fetch(`https://api.unsplash.com/photos/${search_params.get('id')}`).then(convert_to_json).then(function(data) {
    console.log(data);
  });
} 