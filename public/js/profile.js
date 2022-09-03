const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/topic/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete topic');
    }
  }
};

function newTopicRedirect(){
  console.log('hello');
  document.location.replace('/newTopic');
}
document
.querySelector('.newTopic')
.addEventListener('click', newTopicRedirect);

document
  .querySelector('.topic-list')
  .addEventListener('click', delButtonHandler);


