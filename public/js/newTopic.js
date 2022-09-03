const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#topic-name').value.trim();
    const description = document.querySelector('#topic-desc').value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/topic`, {
        method: 'POST',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create topic');
      }
    }
  };
  
  document
    .querySelector('.new-topic-form')
    .addEventListener('submit', newFormHandler);

  