

document.querySelector("main#main").remove()


let newHeader = document.createElement('h1')

newHeader.id = 'victory'

newHeader.innerHTML = "Mike is the champion"

document.body.append(newHeader)
