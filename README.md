React-Redux app created using guidelines and CSS from Codecademy's Learn Redux course. Base files saved in Base Data folder.

Users can play a 1-player game where they aim to find matching pairs of cards.

The app makes use of createStore and combineReducers

Board Slice includes a reducer to control the state.

board/SetBoard creates a new state with the initial cards in a random order. This is using a setBoard action which uses a randomWords function. This function is saved within Helpers

board/flipCard uses the flipCard action to set the visibility of a chosen card to true. If there are 2 cards selected both with the same content, the visibility is changed to false and the matched property is set to true.

board/resetCards uses the resetCards action to set the visibility of all cards to false.

The selectors selectBoard, selectVisibleIDs and selectMatchedIDs are used within components of the app.

Card component controls each card. Initially cards have a styling of 'resting', a click handler of flipCard and text set to the logo.
If a card is clicked its contents are revealed and the click handler is nullified
If two cards are selected, the click handler becomes resetCards
If two matching cards are selected, the style is set to 'matched'
If two non-matching cards are selected, the style is set to 'no-match'
