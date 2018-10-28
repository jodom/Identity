function log (level, tag = '', data = '') {
    switch (level) {
        case "info":
            console.info(tag, data);
            break;
        case "warn":
            console.warn(tag, data);
            break;
        case "error":
            console.error(tag, error);
            break;
        default:
            console.log(tag, data);
    }
}

function getLeadVisual (post, type) {
    if (post.includes('<'+ type +'>')) {
        const startOfFigure = post.indexOf('<'+ type +'>');
        const endOfFigure = post.indexOf('</'+ type +'>') + 8;
        return {
            exists: true,
            startIndex: startOfFigure,
            endIndex: endOfFigure,
            figure: post.substr(startOfFigure, endOfFigure)
        }
    }
    return { exists: false }
}

function getPostSnippet (post, skip = false, figurePosition = {}) {
    if (skip) {
        const requiredLength = 100;
        let snippet = '' + post.substr(0, figurePosition.start);
        snippet += post.substr(figurePosition.end + 1, figurePosition.end + requiredLength - snippet.length); //TODO: remove other figure elements?
        return snippet;
    }
    return post.substr(0, snippetLength);
}

function cleanPostSnippet (snippet) {
    const otherImage = getLeadVisual(snippet, 'img');
    if (otherImage.exists) {
        const imagePosition = {
            start: otehrImage.startIndex,
            end: otehrImage.endIndex
        }
        return cleanPostSnippet(getPostSnippet(snippet, true, imagePosition));
    }
    return snippet.substr(0, Math.min(snippet.length, snippet.lastIndexOf(" ")));
}

domReady(function () {
    const blog = document.getElementById('content');
    log('log', 'blog', blog);

    const dataUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40konuko_j'

    console.time("Fetch medium posts");
    fetch(dataUrl)
        .then((response) => {
            if (response.status !== 200) {
                console.error('Error fetching medium posts by Jodom');
                return;
            }
            response.json()
                .then(results => {
                    const data = results.items.filter(post => {
                        return post.categories.length > 0
                    });
                    log('info', 'posts', data);

                    let posts = '<ul>'
                    data.forEach(post => {
                        const captionFigure = getLeadVisual(post.content, 'figure');
                        let snippet;

                        if (captionFigure.exists) {
                            const figurePosition = {
                                start: captionFigure.startIndex,
                                end: captionFigure.endIndex
                            }
                            snippet = cleanPostSnippet( getPostSnippet(post.content, true, figurePosition) );
                        }
                        else {
                            snippet = cleanPostSnippet( getPostSnippet(post.content, false));
                        }

                        const content = captionFigure.figure + snippet;

                        posts += `<a target="_blank" href="${post.link}"><li><h3>${post.title}</h3><p>${content}</p></li><a><hr/>`;
                    })
                    posts += '</ul>';

                    blog.innerHTML = posts;
                });
        });
    console.timeEnd("Fetch medium posts");
});
