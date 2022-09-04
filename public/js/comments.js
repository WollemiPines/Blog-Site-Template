const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log("working");

    const commentContents = document.querySelector("#comment-contents").value.trim();

    console.log(commentContents);

    if (commentContents){
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({commentContents}),
            headers: {
              'Content-Type': 'application/json',
            },
        })

        if (response.ok) {
            document.location.replace(`/topic/1`);
          } else {
            alert('Failed to create comment');
          }
    }
} 

document.querySelector('.submitComment').addEventListener('click', newCommentHandler);

Handlebars.registerHelper('if_eq', function(a, b, opts) {
    if (a == b) {
        return opts.fn(this);
    } else {
        return opts.inverse(this);
    }
  });