let elList = document.querySelector("#pokemons-list");
let elPokemon = document.querySelector("#pokemon")
let elMovies = document.querySelector("#movies")
let elRandom = document.querySelector("#both")
let elClear = document.querySelector("#clear")
let elLogo = document.querySelector("#logo")

elPokemon.addEventListener("click" , function pokemonRender(array) {
    render(citrus2)
    elLogo.src = './pokemon_logo.png'
    elLogo.height = '250'
})

elMovies.addEventListener("click" , function moviesRender(array) {
    render(citrus)
    elLogo.src = './pngwing.com.png'
    elLogo.height = '400'
})

elRandom.addEventListener("click" , function randomRender(array) {
    random(citrus, citrus2)
})

elClear.addEventListener("click" , function clearRender(array) {
    elList.innerHTML = null
	elTotal.innerHTML = 0
})

const citrus = movies.slice(0, 21);
const citrus2 = pokemons.slice(0, 20);

function render(array) {
	elList.innerHTML  = null
    for (let i = 0; i < array.length; i++) {
        let newLi = document.createElement("li")
        let newImg = document.createElement("img")
        let newH = document.createElement("h3")
        let newP = document.createElement("p")
        let newP2 = document.createElement("p")
        let newP3 = document.createElement("p")
        let newA = document.createElement("a")
        let newA1 = document.createElement("a")
        let newA2 = document.createElement("a")
        let newDiv = document.createElement("div")

        elList.appendChild(newLi)
        newLi.classList.add("list__item")
		newH.classList.add("kon")
        newP.classList.add('kon')
        newLi.appendChild(newImg)
		newLi.appendChild(newH)
        newLi.appendChild(newP)
        newLi.appendChild(newP2)
        newLi.appendChild(newP3)
        newLi.appendChild(newDiv)
        newDiv.appendChild(newA)
        newDiv.appendChild(newA1)
        newDiv.appendChild(newA2)
        newA.classList.add("gql")

		if (array[i].name) {
			newImg.src = array[i].img
			newH.textContent = array[i].name
            newP.textContent = array[i].candy
            newP2.textContent = array[i].avg_spawns
            newLi.classList.add("list__item")
		    newH.classList.add("kon")
            newP.classList.add('kon')
			newImg.width = 220
			newImg.height = 180
		}
		else {
			newImg.src = `https://img.youtube.com/vi/${array[i].ytid}/mqdefault.jpg`
			newH.textContent = array[i].Title
            newP.textContent = array[i].fulltitle
            newP2.textContent = array[i].imdb_rating
            newP3.textContent = array[i].movie_year
            newA.href = `https://www.youtube.com/watch?v=${array[i].ytid}`
            newA.textContent = "Watch Trailer"
            newA1.textContent = "Bookmark"
            newA2.textContent = "More Info"
			newImg.width = 280
			newImg.height = 200
            newLi.classList.add("list__item2")
		    newH.classList.add("kon2")
            newP.classList.add('kon3')
            newP2.classList.add('kon3')
            newP3.classList.add('kon3')
            newA1.classList.add('btn', 'btn-outline-danger')
            newA.classList.add('btn', 'btn-outline-success')
            newA2.classList.add('btn', 'btn-outline-primary')
		}
		newImg.classList.add("mb-3" , "pt-3")
    }
}

function random(array1 , array2) {
	elList.innerHTML  = null
    let mainArray = array1.concat(array2)
	let mainL = mainArray.length

    for (let i = 0; i < mainL; i++) {

        let randomNum = Math.floor(Math.random() * mainArray.length)
        let newLi = document.createElement("li")
        let newImg = document.createElement("img")
        let newH = document.createElement("h3")
		let randomItem = mainArray[randomNum]

        elList.appendChild(newLi)
        newLi.classList.add("col-lg-3" ,"mb-5" ,"col-12" ,"align-items-center" ,"d-flex" ,"flex-column","justify-content-center", "mb-3")
        newLi.appendChild(newImg)
		newH.classList.add("text")
		newLi.appendChild(newH)
		if (randomItem.name) {
			newImg.src = randomItem.img
			newImg.width = 220
			newImg.height = 180
		}
		else {
			newImg.src = `https://img.youtube.com/vi/${randomItem.ytid}/mqdefault.jpg`
			newImg.width = 280
			newImg.height = 200
		}
		newImg.classList.add("mb-3" , "pt-3")
    }
}