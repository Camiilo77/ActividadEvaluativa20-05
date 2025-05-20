function getAllPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    });
}

function getPostById() {
  const id = document.getElementById('postId').value;
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('output').textContent = JSON.stringify(data, null, 2);
    });
}
