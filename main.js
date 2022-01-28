let cardinner = document.querySelector('.cardinner');
let i = 0;

let loadMore = () => {

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
        .then((json) => {  
        
            for (item in json) {
                
                if (i < 20) {
        
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 20) {
                        removeNode();
                        break;
                    }
                    
                } else if (i < 30) {
        
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 30) {
                        break;
                    }
                } else if (i < 40) {
        
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 40) {
                        break;
                    }
                } else if (i < 50) {

                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 50) {
                        break;
                    }

                } else if (i < 60) {

                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 60) {
                        break;
                    }
                } else if (i < 70) {
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 70) {
                        break;
                    }
                } else if (i < 80) {
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 80) {
                        break;
                    }
                } else if (i < 90) {
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 90) {
                        break;
                    }
                } else if (i < 100) {
                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                    if (i === 100) {
                        break;
                    }
                }
            }
    })
}


let cardFun = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {

        
       
            for (item in json) {
                
                if (i < 10) {

                    let card = document.createElement('div');
                    card.className = 'card';
                    card.id = `card${json[i].userId}`;
                    cardinner.appendChild(card);
                    let inner = document.createElement('div');
                    inner.className = 'inner';
                    card.appendChild(inner);
                    let postTitle = document.createElement('h2');
                    postTitle.id = 'postTitle';
                    inner.appendChild(postTitle);
                    postText = document.createTextNode(json[i].title);
                    postTitle.appendChild(postText);
                    let author = document.createElement('p');
                    author.id = 'author';
                    card.appendChild(author);
                    authorText = document.createTextNode('Author ' + json[i].userId);
                    author.appendChild(authorText);
                    let info = document.createElement('p');
                    info.id = 'info';
                    card.appendChild(info);
                    infoText = document.createTextNode(json[i].body);
                    info.appendChild(infoText);
                    i++;
                
                } else if (i > 10) {
                    loadMore();
                } else {
                    break;
                }

            }
            
        })
}

let removeNode = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((json) => {
        
            let input = document.querySelector('#searchbox').value;
            let i = 0;
          

            for (i; i < json.length; i++) {



                if (input === json[i].userId.toString()) {
                    
                    cardinner.innerHTML = '';
                    document.querySelector('#searchbox').value = '';

                    console.log('we match');
    
                    for (i; i < 10; i++) {
                        
                        let card = document.createElement('div');
                        card.className = 'card';
                        card.id = `card${json[input].userId}`;
                        cardinner.appendChild(card);
                        let inner = document.createElement('div');
                        inner.className = 'inner';
                        card.appendChild(inner);
                        let postTitle = document.createElement('h2');
                        postTitle.id = 'postTitle';
                        inner.appendChild(postTitle);
                        postText = document.createTextNode(json[i].title);
                        postTitle.appendChild(postText);
                        let author = document.createElement('p');
                        author.id = 'author';
                        card.appendChild(author);
                        authorText = document.createTextNode('Author ' + json[i].userId);
                        author.appendChild(authorText);
                        let info = document.createElement('p');
                        info.id = 'info';
                        card.appendChild(info);
                        infoText = document.createTextNode(json[i].body);
                        info.appendChild(infoText);
                        
                    }
                    
                } else if (input !== json[i].userId.toString()) {
                    // console.log(i);
                    continue;
                            
                        }

                    }
                    
        })        
}

// enter #
// click
// if ID === #, remove all cards & loop to add only cards with ID === #
// if ID !== #, loop to check if ID === # again, if not, increase counter by 1
// keep checking until a match, once matched, remove all cards & loop to add only cards with ID === #
// if no match still, do nothing

cardFun();