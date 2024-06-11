
let spinner=document.getElementById('loader');
const container = document.getElementById('details_container');
container.style.display="none";
window.onload = function() {
 
  let id;
  const location = window.location.href;
  console.log(location);
  const url = new URL(location);
  const search_params = new URLSearchParams(url.search);
  console.log(search_params);
  for (const [key, value] of search_params) {
    id = key
  }
  console.log(id)
  if (id === null || id === undefined || id === '') {
    window.location.href = '/'

  }
  fetch(`https://api.unsplash.com/photos/${id}?client_id=${API_KEY}`)
    .then(convert_to_json)
    .then(function(data) {
      spinner.classList.add('loader-block');

      container.style.display="flex";

      console.log(data)
      showdetails(data);
    })
  function showdetails(data) {
    const image = document.getElementById('detail_image');
    const description = document.getElementById('description');
    const user = document.getElementById('user');
    const views=document.getElementById('views');
    const likes=document.getElementById('likes');
    image.src = data.urls.full;
    description.innerText = data.description;
    user.innerText = data.user.name;
    views.textContent=data.views;
    likes.textContent=data.likes
    // image.alt=data.description;
    container.classList.add('details')
    image.classList.add('detail_image')


  }
}