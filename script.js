let tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
]

let tagStats = tweets.reduce((gri, tweet) => {
    tweet.tags.forEach(tag => {
        if (gri[tag]) {
            gri[tag]++
        } 

        else {
            gri[tag] = 1
        }
    })

    return gri
}, {})

console.log(tagStats)



let arr = [
    { name: 'apple', value: 2 },
    { name: 'banana', value: 3 },
    { name: 'orange', value: 4 },
]

let obj = arr.reduce((acc, item) => {
    acc[item.name] = item.value

    return acc
}, {})

console.log(obj)