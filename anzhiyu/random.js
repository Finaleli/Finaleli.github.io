var posts=["posts/9ff79b23.html","posts/7f7d6eaa.html","posts/551f943f.html","posts/0.html"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};