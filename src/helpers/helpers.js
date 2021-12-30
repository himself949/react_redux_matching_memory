const wordPairs = [
    'Provider', 'Provider',
    'selector', 'selector',
    'useSelector()', 'useSelector()',
    'useDispatch()', 'useDispatch()',
    'Pure Function', 'Pure Function',
    'react-redux', 'react-redux',
]


//could be improved
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