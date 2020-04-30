// add code snippets from README
let state;
let action = { type: "INCREASE_COUNT" }

function reducer(state = {count: 0}, action) {
    switch (action.type) {
        case "INCREASE_COUNT":
            return { count: state.count + 1 };
        default:
            return state
    }
}

function dispatch(action) {
    state = reducer(state, action)
    render()
}

function render() {
    document.getElementById("container").textContent = state.count
}

document.getElementById("button").addEventListener("click", () => {
    dispatch(action)
})

dispatch({type: "@@INIT"})