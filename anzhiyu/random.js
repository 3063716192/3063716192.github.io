var posts=["2025/04/20/hello-world/","2025/04/20/欢迎大家来到我的个人博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };