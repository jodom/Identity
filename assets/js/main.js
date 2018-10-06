domReady( function () {

    const blog = document.getElementById('content');
    console.log('blog', blog);

    const dataUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konuko_j'

    fetch(dataUrl)
        .then( (response) => {
            if (response.status !== 200) {
                console.log('Error fetching medium posts by Jodom');
                return;
            }
            response.json()
                .then( results => {
                    const data = results.items.filter(post => {
                        return post.categories.length > 0
                    });
                    console.log('posts', data);

                    let posts = '<ul>'
                    data.forEach(post => {
                        let content = post.content.substr(0, 400);
                        content = content.substr(0, Math.min(content.length, content.lastIndexOf(" ")));

                        posts += `<a target="_blank" href="${post.link}"><li><h3>${post.title}</h3><p>${content}</p></li><a><hr/>`;
                    })
                    posts += '</ul>';

                    blog.innerHTML = posts;
                });
        });

    // const currentYear = Date.today();

})