function mutateMyStrings (a,b) {
    let arr =[a]
    a = a.split('')
    for (let i in a){
    a[i]=b[i]
    string = a.join('')
    if (arr.slice(-1)[0] !== string ) arr.push(string)
    }
    return arr.join('\n').concat('\n')
    }