import { randomWords } from '../../helpers/helpers'

const initialState = [
    { id: 0, contents: 'Provider', visible: true, matched: true },
    { id: 1, contents: 'Provider', visible: true, matched: true },
    { id: 2, contents: 'selector', visible: true, matched: true },
    { id: 3, contents: 'selector', visible: true, matched: true },
    { id: 4, contents: 'useSelector()', visible: true, matched: true },
    { id: 5, contents: 'useSelector()', visible: true, matched: true },
    { id: 6, contents: 'useDispatch()', visible: true, matched: true },
    { id: 7, contents: 'useDispatch()', visible: true, matched: true },
    { id: 8, contents: 'Pure Function', visible: true, matched: true },
    { id: 9, contents: 'Pure Function', visible: true, matched: true },
    { id: 10, contents: 'react-redux', visible: true, matched: true },
    { id: 11, contents: 'react-redux', visible: true, matched: true },
];

export const boardReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'board/setBoard':
            let setState = []
            action.payload.forEach((element, index) =>
                setState.push({
                    id: index,
                    contents: element,
                    visible: false,
                    matched: false,
                })
            )
            return setState

        case 'board/flipCard':
            let flipState = [...state]
            const cardID = action.payload
            flipState[cardID] = { ...state[cardID], visible: true }

            const [index1, index2] = flipState.filter(card => card.visible).map(card => card.id)
            if (index2 !== undefined) {
                const card1 = flipState[index1]
                const card2 = flipState[index2]
                if (card1.contents === card2.contents) {
                    flipState[index1] = { ...card1, visible: false, matched: true }
                    flipState[index2] = { ...card2, visible: false, matched: true }
                }
            }
            return flipState

        default:
            return state
    }
}

export const setBoard = () => {
    const words = randomWords()
    return {
        type: 'board/setBoard',
        payload: words
    }
}

export const flipCard = (id) => {
    return {
        type: 'board/flipCard',
        payload: id
    }
}

export const selectBoard = state => state.board.map(card => ({
    id: card.id,
    contents: card.contents
}))

export const selectVisibleIDs = state => state.board.filter(card => card.visible).map(card => card.id)

export const selectMatchedIDs = state => state.board.filter(card => card.matched).map(card => card.id)
