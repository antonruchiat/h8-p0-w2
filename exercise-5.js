// 1. Let's Form a Sentence
// ========================

var word = "Javascript"
var second = "is"
var third = "awesome"
var fourth = "and"
var fifth = "I"
var sixth = "love"
var seventh = "it!"

word = "Javascript " + "is " + "awesome " + "and " + "I " + "love " + "it!"

console.log(word)


// ========================================================================================================================

// 2. Index Accessing - 1 by 1
// ===========================

let sentences = "Wow Javascript is so cool"

let totalSentences = sentences.length

let letter1 = sentences[0]
let letter2 = sentences[1]
let letter3 = sentences[2]
// let letter4 = sentences[3]
let letter5 = sentences[4]
let letter6 = sentences[5]
let letter7 = sentences[6]
let letter8 = sentences[7]
let letter9 = sentences[8]
let letter10 = sentences[9]
let letter11 = sentences[10]
let letter12 = sentences[11]
let letter13 = sentences[12]
let letter14 = sentences[13]
// let letter15 = sentences[14]
let letter16 = sentences[15]
let letter17 = sentences[16]
// let letter18 = sentences[17]
let letter19 = sentences[18]
let letter20 = sentences[19]
// let letter21 = sentences[20]
let letter22 = sentences[21]
let letter23 = sentences[22]
let letter24 = sentences[23]
let letter25 = sentences[24]

let word1 = letter1+letter2+letter3
console.log(`First Word is '${word1}'`)

let word2 = letter5 + letter6 + letter7 + letter8 + letter9 + letter10 + letter11 + letter12 + letter13 + letter14
console.log(`Second word is '${word2}'`)

let word3 = letter16 + letter17
console.log(`Third word is '${word3}'`)

let word4 = letter19 + letter20
console.log(`Fourth word is '${word4}'`)

let word5 = letter22 + letter23 + letter24 + letter25
console.log(`Fifth word is '${word5}'`)

console.log(`The Sentences are ==> ${word1} ${word2} ${word4} ${word5}`)


// ========================================================================================================================

// 3. Breaking Sentence (Again) using Substring
// ============================================

let sentences = "Wow Javascript is so cool"

let word1 = sentences.substring(0, 3)
console.log(`First Word is '${word1}'`)

let word2 = sentences.substring(4, 14)
console.log(`Second word is '${word2}'`)

let word3 = sentences.substring(15, 17)
console.log(`Third word is '${word3}'`)

let word4 = sentences.substring(18, 21)
console.log(`Fourth word is '${word4}'`)

let word5 = sentences.substring(21, 25)
console.log(`Fifth word is '${word5}'`)


console.log(`The Sentences are ==> ${word1} ${word2} ${word4} ${word5}`)



// ========================================================================================================================


// 4. Breaking Sentence (yet Again) and Count Each Length
// ======================================================

let sentences = "Wow Javascript is so cool"

let word1 = sentences.substring(0, 3)
console.log(`First Word is '${word1}' with length: ${word1.length} huruf`)

let word2 = sentences.substring(4, 14)
console.log(`Second word is '${word2}' with length: ${word2.length} huruf`)

let word3 = sentences.substring(15, 17)
console.log(`Third word is '${word3}' with length: ${word3.length} huruf`)

let word4 = sentences.substring(18, 21)
console.log(`Fourth word is '${word4}' with length: ${word4.length} huruf`)

let word5 = sentences.substring(21, 25)
console.log(`Fifth word is '${word5}' with length: ${word5.length} huruf`)


console.log(`The Sentences are ==> ${word1} ${word2} ${word4} ${word5}`)


// ========================================================================================================================







