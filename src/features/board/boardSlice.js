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

        /*
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
        */
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

export const selectBoard = state => state.board.map(card => ({
    id: card,
    contents: card.contents
}))