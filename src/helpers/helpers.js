const wordPairs = [
    'Mercury', 'Mercury',
    'Venus', 'Venus',
    'Earth', 'Earth',
    'Mars', 'Mars',
    'Jupiter', 'Jupiter',
    'Saturn', 'Saturn',
    'Uranus', 'Uranus',
    'Neptune', 'Neptune',
]

export const randomWords = () => {
    let words = []
    let newWordPairs = [...wordPairs]
    const reps = newWordPairs.length
    for (let i = 0; i < reps; i++) {
        const wordIndex = Math.floor(Math.random() * newWordPairs.length)
        words.push(newWordPairs[wordIndex])
        newWordPairs.splice(wordIndex, 1)
    }
    return words
}