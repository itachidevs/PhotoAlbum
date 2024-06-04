window.onload = function() {
  const location = window.location.href;
  // console.log(location);
  const url = new URL(location);
  const search_params = new URLSearchParams(url.search);
  // console.log(search_params);
  if (!search_params.has('q') || search_params.get('q') === '') {
    window.location.href = '/';
  }
  fetch(`https://api.unsplash.com/search/photos?per_page=25&query=${search_params.get('q')}&client_id=${API_KEY}`).then(convert_to_json).then(function(data) {
    generatecards(data.results)
    document.getElementsByName('q')[0].value = search_params.get('q');
    document.getElementById('result').innerText = search_params.get('q');
  })
}
function generatecards(data) {
  const cards_container = document.getElementById('result_container');
  // console.log(data)
  // document.getElementsByName('q') = search_params.get('q');
  data.forEach(single_item => {
    // console.log(data[i])
    // const single_item = data[i];
    console.log(single_item)
    const card = document.createElement('div');
    const anchor = document.createElement('a');
    const image = document.createElement('img');
    card.classList.add('card');
    anchor.href = `/detail.html?${single_item.id}`;
    image.src = single_item.urls.thumb;
    card.style.backgroundColor = single_item.color;
    image.classList.add('card-img');
    card.appendChild(anchor);
    anchor.appendChild(image);
    cards_container.appendChild(card);
    console.log(card)
  })
}