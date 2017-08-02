/**
 * Class decorator without parameter
*/

function ClassDecoratorParams(propertyKey: number, descriptor: string) {
    return function(
        target: Function // The class the decorator is declared on
        ) {
        console.log("ClassDecoratorParams(" + propertyKey + ", '" + descriptor + "') called on: ", target);
    }
}

@ClassDecoratorParams(1, "a")
@ClassDecoratorParams(2, "b")
class ClassDecoratorParamsExample {
}