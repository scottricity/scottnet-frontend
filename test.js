let words = Object.keys(JSON.parse(document.getElementsByTagName('pre')[0].innerText)).filter(w => w.startsWith('b'))
let data = []
for (let index = 0; index < 3000; index++){
    data.push(words[index])
}
console.log(data)
