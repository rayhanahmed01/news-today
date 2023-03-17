const loadNews = (category_id) => {
    
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayNews(data.data))
        // toggleSpinner(true);

}

const displayNews = newses => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = '';

    newses.forEach(news => {
        const newsDiv = document.createElement('div');
        // console.log(news.author);

        newsDiv.innerHTML = `
        <div class="p-5 shadow-xl  mb-9 rounded" >

        <div class=" max-w-sm w-full lg:max-w-full lg:flex">
        <div class="mr-7 h-44 lg:h-80 lg:w-96 flex-none bg-cover lg:rounded  text-center overflow-hidden " style="background-image: url('${news.image_url}')" title="${news.title.slice(0, 15)}">
        </div>
        <div class=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div class="mb-8">
           
            <div class="text-gray-900 font-bold text-xl mb-2 mt-4">${news.title
            }</div>
            <p class="text-gray-700 text-base">${news.details.slice(0, 400)}</p>
            </div>
            <div class="flex justify-between justify-items-center content-center">
                <div class="flex items-center ">
                    <img class="w-10 h-10 rounded-full mr-4" src="${news.author.img
                    }" alt="Avatar of author" title="Author">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none font-semibold">${news.author.name}</p>
                        <p class="text-gray-600">${news.author.published_date
                        }</p>  
                    </div>
                </div>
                <div title="Total view">
                    <i class="fa-regular fa-eye"  ></i>${news.total_view}
                </div>
                <div title="Rating">
                <i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                </div>
                <a onclick="loadDetails('${news._id}')" href="#modal-opened" class="" id="modal-closed">
                <i class="fa-solid fa-arrow-right" title="Show Details"></i>
                </a>
            </div>
        </div>
        
        `;
        newsContainer.appendChild(newsDiv)
    });
    // toggleSpinner(false);
}

const loadDetails = (id) =>{
    // console.log('success');
    // alert('Success')
    const url = `https://openapi.programming-hero.com/api/news/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data.data))
    
}
const showDetails = details =>{
    // console.log(details[0].details);
    const detailsContainer = document.getElementById('');
    // detailsContainer.innerHTML = '';

    details.forEach(detail => {
       console.log(detail);
       const modalTitle = document.getElementById('modal_title');
        modalTitle.innerText = detail.title;
        const modalText = document.getElementById('modal_text');
        modalText.innerHTML = `
        <p>${detail.details}</p>
        <br><br>
        <div class="flex items-center ">
                    <img class="w-10 h-10 rounded-full mr-4" src="${detail.author.img
                    }" alt="Avatar of author" title="Author">
                    <div class="text-sm">
                        <p class="text-gray-900 leading-none font-semibold">${detail.author.name}</p>
                        <p class="text-white-600">${detail.author.published_date
                        }</p>  
                    </div>
                </div>
        
        `
    });
    


}

loadNews('08');
