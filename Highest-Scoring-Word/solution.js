function high (x) {
    let words = x.split(" ")
    let values = words.map((word) => word.split('').map(letter => letter.charCodeAt(0) - 96).concat([0]).reduce((sum, val) => sum + val))
    let highscore = words.map((word) => word.split('').map(letter => letter.charCodeAt(0) - 96).concat([0]).reduce((sum, val) => sum + val)).sort((a, b) => b - a)[0]
    let i = 0
    while (values[i] < highscore) {
        i++
    }
    return words[i]
}