// Toggle mobile nav menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Blog posts data (for demo purpose)
const posts = {
  1: {
    title: "The Beauty of Nature",
    content: `<p>Nature offers a boundless source of inspiration, from majestic mountains to serene lakes. It's a reminder to slow down and appreciate the world around us.</p>`
  },
  2: {
    title: "Tech Trends 2025",
    content: `<p>Artificial intelligence, quantum computing, and 5G connectivity are poised to revolutionize how we live and work.</p>`
  },
  3: {
    title: "Healthy Living Tips",
    content: `<p>Incorporate regular exercise, balanced diet, and mindfulness practices into your daily routine for a healthier life.</p>`
  }
};

// Load blog post on post.html
function loadPost() {
  if (!document.getElementById('post-content')) return;
  
  const params = new URLSearchParams(window.location.search);
  const postId = params.get('id');

  if (postId && posts[postId]) {
    const post = posts[postId];
    const postContent = document.getElementById('post-content');
    postContent.innerHTML = `
      <h2>${post.title}</h2>
      ${post.content}
      <p><a href="index.html">← Back to Home</a></p>
    `;
  } else {
    document.getElementById('post-content').innerHTML = `<p>Post not found.</p><p><a href="index.html">← Back to Home</a></p>`;
  }
}

document.addEventListener('DOMContentLoaded', loadPost);
