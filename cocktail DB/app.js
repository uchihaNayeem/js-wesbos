let searchInput = () => {
    let searchInput = document.getElementById('searchInput')
    let inputValue = searchInput.value;
    let myUrl = `https://openlibrary.org/search.json?q=${inputValue}`;
    allbooks(myUrl)
    //spinner show
    let spinner = document.getElementById('spinner');
    spinner.classList.remove('d-none')
}

let allbooks = (url) => {
    console.log(url)
    fetch(url)
        .then(req => req.json())
        .then(data => gotData(data.docs))
        .catch(error => {
            console.log(`khaise Error: ${error}`)
        })
}

let gotData = (data) => {
    //spinner hide
    let spinner = document.getElementById('spinner');
    spinner.classList.add('d-none')
    console.log(data.length)
    data.forEach(el => {
        console.log(el)
        let { author_name, first_publish_year, title, cover_i } = el;
        //parent div
        let parentDiv = document.getElementById('books');
        // Author
        let author = ''; // variable 1
        if (author_name === undefined) {

            author = 'Author name not available';
        } else {

            author = author_name[0];
        }
        //first Published
        let year = ''; // variable 2
        if (first_publish_year === undefined) {
            year = 'year not available';
        } else {

            year = first_publish_year;
        }
        // image source
        let src = ''
        let imgId = ''; // variable 2
        if (cover_i === undefined) {
            imgId = 'img not available';
            src = `https://image.shutterstock.com/image-illustration/black-linear-photo-camera-logo-260nw-1412111903.jpg`
        } else {

            imgId = cover_i;
            src = `https://covers.openlibrary.org/b/id/${imgId}-L.jpg`
        }

        console.log(year, author, src, title);

        //child Div
        let childDiv = document.createElement('div');
        childDiv.classList.add('col');
        childDiv.innerHTML = `
        <div class="card">
            <img src="${src}" class="card-img-top" alt="${title}">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-title">${author}</p>
                <p class="card-text ">First Published: ${year}</p>
            </div>
        </div>
        `;
        parentDiv.appendChild(childDiv)

    })
}









/*




*/


























































/*
 //author name check

        let gotData =(data) =>{
    console.log(data)
    data.forEach(el => {
        // console.log(el)
        let {author_name, first_publish_year, publish_year,cover_i} = el;
        console.log('RES:----------', author_name);
        let author = ''
        if(author_name === undefined){
            console.log('--UNDEFINED--');
            author = 'Author name not available';
        }else{
            console.log(`availabe::: ${author_name[0]}`);
            author = author_name[0];
        }
        console.log(`${author} **********************************`)


        // console.log('RES:----------', first_publish_year,)
        // console.log('RES:----------', publish_year)
        // console.log('RES:----------', cover_i)

    })
}



*/
















