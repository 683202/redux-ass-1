const initialStore = {
    persons: []
}

const reducer = (state = initialStore, action) => {

    console.log(state.persons);

    if(action.type === 'ADD') {
        const newPersons = [...state.persons];
        newPersons.push({ id: Math.random(), name: action.name, age: action.age });
        return {
            ...state,
            persons: newPersons
        }
    }

    if(action.type === 'DEL') {
        const newPersons = state.persons.filter(person => person.id !== action.id);
        return {
            ...state,
            persons: newPersons
        }
    }
    return state;
}

export default reducer;