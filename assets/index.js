let spinner=document.getElementById('loader');
const cards_container = document.getElementById('container');
cards_container.style.display="none";
window.onload = function() {
  fetch(`https://api.unsplash.com/photos?per_page=25&client_id=${API_KEY}`).then(convert_to_json).then(generate_cards);
}
function generate_cards(data) {
spinner.classList.add('loader-block');
cards_container.style.display="flex";
  // console.log(data)
  data.forEach(single_item => {
    // console.log(data[i])
    // const single_item = data[i];
    // console.log(single_item)
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
    // console.log(card)
  });
}