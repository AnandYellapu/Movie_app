
//Discover url
//https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09337031c4f68c2f03c1ffe107ba0b48


// Image url
//https://image.tmdb.org/t/p/w500


let url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=09337031c4f68c2f03c1ffe107ba0b48";

let searchUrl="https://api.themoviedb.org/3/search/movie?sort_by=popularity.desc&api_key=09337031c4f68c2f03c1ffe107ba0b48&query=";

let imageUrl="https://image.tmdb.org/t/p/w500";


getMovieData(url)
async function getMovieData(url){
    let data=await fetch(url);
    let res=await data.json();
    //console.log(res)
    console.log(res.results);
    showMovies(res.results);
}


//show movies/display movies

let mainMovieDiv=document.getElementById('mainMovieDiv');
function showMovies(movies){
    //movieList + divs(index.html)
    mainMovieDiv.innerHTML="";
    console.log(movies);
    movies.map((element)=>{
        var movieDiv=document.createElement("div");
        movieDiv.classList.add("col","movie");
        console.log(element);
        movieDiv.innerHTML=` <div class="card h-100">
                <img src=${imageUrl+element.backdrop_path}
                alt="...">
                <div class="card-body m-1 p-0">
                    <div class="d-flex justify-content-between">
                    <h5 class="card-title border p-1 w-100">${element.original_title}</h5>
                    <h6 class="border w-auto p-1"><span class='${getClassByRate(element.vote_average)}'>${element.vote_average}</span></h6>
                    </div>

                    <div class="card card-header overview">
                        <p>Overview</p>
                        <p>${element.overview}</p>
                    </div>


                </div>
              </div>`

              mainMovieDiv.append(movieDiv)
    });
}


//rating in colors

function getClassByRate(vote){
    if(vote>8){
        return "green"
    }else if(vote>=6){
        return "orange"
    }else{
        return "red"
    }
}

//search term and search url

let form=document.getElementById('form')
let search=document.getElementById('search')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var searchTerm=search.value
    console.log(searchTerm)
    console.log(searchUrl+searchTerm)
    if(searchTerm && searchTerm.value!==""){
        getMovieData(searchUrl+searchTerm)
        searchTerm.value=""
    }
    else{
        window.location.reload()
    }

})