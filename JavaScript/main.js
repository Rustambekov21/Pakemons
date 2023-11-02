let pokemons = [
    {
        "id": 1,
        "num": "001",
        "name": "Bulbasaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
        "type": [
        "Grass",
        "Poison"
        ],
    },
    {
        "id": 2,
        "num": "002",
        "name": "Ivysaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
        "type": [
        "Grass",
        "Poison"
        ],
    },
    {
        "id": 3,
        "num": "003",
        "name": "Venusaur",
        "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
        "type": [
        "Grass",
        "Poison"
        ],
    },
    {
        "id": 4,
        "num": "004",
        "name": "Charmander",
        "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
        "type": [
        "Fire"
        ],
    },
    {
        "id": 5,
        "num": "005",
        "name": "Charmeleon",
        "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
        "type": [
        "Fire"
        ],
    },
    {
        "id": 6,
        "num": "006",
        "name": "Charizard",
        "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
        "type": [
        "Fire",
        "Flying"
        ],
    },
    {
        "id": 7,
        "num": "007",
        "name": "Squirtle",
        "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
        "type": [
        "Water"
        ],
    },
    {
        "id": 8,
        "num": "008",
        "name": "Wartortle",
        "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
        "type": [
        "Water"
        ],
    },
    {
        "id": 9,
        "num": "009",
        "name": "Blastoise",
        "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
        "type": [
        "Water"
        ],
    },
    {
        "id": 10,
        "num": "010",
        "name": "Caterpie",
        "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
        "type": [
        "Bug"
        ],
    },
    {
        "id": 11,
        "num": "011",
        "name": "Metapod",
        "img": "http://www.serebii.net/pokemongo/pokemon/011.png",
        "type": [
        "Bug"
        ],
    },
    {
        "id": 12,
        "num": "012",
        "name": "Butterfree",
        "img": "http://www.serebii.net/pokemongo/pokemon/012.png",
        "type": [
        "Bug",
        "Flying"
        ],
    }
]

const list = document.querySelector(".list")
list.style.paddingBottom = "50px"

let count = 0

const counthtml = document.querySelector(".count")

counthtml.textContent = `${"Liked:"} ${count}`
counthtml.style.textAlign = "center"
counthtml.style.padding = "20px"

pokemons.map(item => {
    const card = document.createElement("div")
    card.style.background = "white"
    card.style.width = "215px"
    card.style.paddingBlock = "10px"
    card.style.borderRadius = "8px"
    const name = document.createElement("h2")
    name.style.textAlign = "center"
    name.textContent = `${"Name:"} ${item.name}`

    const cardImg = document.createElement("div")
    cardImg.style.textAlign = "center"
    const img = document.createElement("img")
    img.setAttribute("src", item.img)

    const type = document.createElement("p")
    type.style.textAlign = "center"
    type.style.marginTop = "10px"
    type.textContent = `${"Type:"} ${item.type.join(",")}`

    const likeDiv = document.createElement("div")
    likeDiv.style.textAlign = "end"
    const like = document.createElement("button")
    like.classList.add("like")
    like.textContent = "Like"

    let isliked = false

    like.addEventListener("click", () => {
        
        
        if(!isliked) {
            count++
            isliked = true
            like.style.background = "red"
            like.style.color = "white"
            like.style.border = "1px solid red"
        } else {
            count--
            isliked = false 
            like.style.background = "white"
            like.style.color = "black"
            like.style.border = "1px solid black"
        }
        counthtml.textContent = `${"Liked:"} ${count}`
    })
    
    likeDiv.appendChild(like)
    card.appendChild(likeDiv)
    cardImg.appendChild(img)
    card.appendChild(cardImg)
    card.appendChild(name)
    card.appendChild(type)
    list.appendChild(card)
})

