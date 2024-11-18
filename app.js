const addPostBtn = document.getElementById('addPostBtn');
const postContent = document.getElementById('postContent');
const postsContainer = document.getElementById('postsContainer');
const themeBtn = document.getElementById('themeBtn');

addPostBtn.onclick = () => {
    const content = postContent.value.trim();
    if (content) {
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = `<p>${content}</p>`;
        postsContainer.prepend(post); 
        postContent.value = ''; 
        document.querySelector('.placeholder')?.remove(); 
    } else {
        alert('Please write something before posting!');
    }
};

