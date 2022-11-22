// let wordArr = ['butter', 'moose', 'cheese', 'menu', 'loose']
// let vowelsCount = ['a','e', 'i', 'o', 'u']
// let constantCount = [i !== vowelsCount]

// const hasMoreValue= (wordArr) => {
// for(let i = 0; i < wordArr.length; i++)
// for(let x = x-1; x < wordArr.length-1; x++)
//    if(i = vowelCount > con){
//    return 'true'
// }else{
//     return 'false'
// }
// console.log(hasMoreValue)
// }
//

// const hasMoreValue = (word) => {
//     getCount(str)
//     let vowelsCount = 0
//     const vowels = ['a', 'e', 'i', 'o','u']
//     for(let i = 0; i < wordArr.length; i++)
//     if(vowelsCount > constanantsCount){
//            return 'true'
//         }else{
//             return 'false'

// }
// console.log(hasMoreValue)
// }

const hasMoreVowels = str => {
    let vowelCount = 0
    let vowels = ['a', 'e', 'i', 'o','u']
    str = str.toLowerCase()

    for(let i=0; i < str.lenght; i++){
    if(vowels.includes(str[i])){
        vowelcount++
    }
}
console.log(vowelCount)
return vowelCount > str. length/2
}



console.log(hasMoreVowels('Hello'))
console.log(hasMoreVowels("ana"))
console.log(hasMoreVowels("supercalifilisixpajiosn"))