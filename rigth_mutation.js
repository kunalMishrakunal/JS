//incorrect mutation
const profile = {
    name: "John Doe",
    age: 30,
}
profile.age = 31; // This is a mutation of the original object but it is not a correct mutation in the context of immutability. Instead, we should create a new object with the updated age.
//if we use this then the react skip the re-rendering of the component because it thinks that the state has not changed. To avoid this, we should create a new object with the updated age instead of mutating the original object.

//correct mutation
const updatedProfile = {...profile, age: 31}; // This creates a new object with the updated age while keeping the original object intact. This is the correct way to handle state updates in React to ensure proper re-rendering of components.
