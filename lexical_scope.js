//Lexical scope is the area in which a variable is defined. In JavaScript, variables defined inside a function are not accessible from outside the function. This is known as lexical scoping.

const outer = () => {
    const outerVar = "I an outside";

    const inner = () => {
        const innerVar = "I an inside";
        console.log(innerVar);
    }
    console.log(outerVar);
    inner();
    //console.log(innerVar); // This will throw an error because innerVar is not defined in this scope.
    
}
outer();
