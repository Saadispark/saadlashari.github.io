const posts = [
  {
    title: "The Future of Tech & Trading",
    date: "May 18, 2025",
    location: "Karachi, Pakistan",
    content: `As a student, trader, and tech enthusiast, I believe the fusion of AI, blockchain,
    and real-time analytics will redefine global markets. Pakistan is on the edge of a digital leap,
    and with enough exposure and skill, we can be leaders in this revolution.`
  },
  {
    title: "Why I Love Smart Money Concepts",
    date: "May 10, 2025",
    location: "Karachi, Pakistan",
    content: `SMC brings clarity to market structure. It's not just about signals—it's about
    understanding liquidity, manipulation, and the true intentions behind price action.`
  }
];

const container = document.getElementById("blog-container");

posts.forEach(post => {
  const article = document.createElement("article");
  article.className = "blog-post fade-in";
  article.innerHTML = `
    <h2>${post.title}</h2>
    <p><strong>${post.date}</strong> – ${post.location}</p>
    <p>${post.content}</p>
  `;
  container.appendChild(article);
});
