const newFormHandler = (event) => {
  console.log("hello");
    event.preventDefault();

  
    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
  
    if (name && description) {
      const response = fetch(`/api/blog`, {
        method: 'POST',
        body: JSON.stringify({name, description}), 
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create a blog post');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blog/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete blog post');
      }
    }
  };
  
  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  