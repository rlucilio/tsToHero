//Interface

interface Box {
    height: number;
    width: number;
}

interface Box {
    scale: number;
}

let box: Box = {
    height: 5,
    width: 6,
    scale: 10
}

interface Animal {}
interface Sheep {}
interface Dog {}
interface Cat {}

interface Cloner {
    clone(animal: Animal): Animal;
}

interface Cloner {
    clone(animal: Sheep): Sheep;
}

interface Cloner {
    clone(animal: Dog): Dog;
    clone(animal: Cat): Cat;
}

// Resultado

//interface Cloner {
//    clone(animal: Animal): Animal;
//    clone(animal: Sheep): Sheep;
//    clone(animal: Dog): Dog;
//    clone(animal: Cat): Cat;
//}

interface Document {
    createElement(tagName: any): Element;
}

interface Document {
    createElement(tagName: "div"): HTMLDivElement;
    createElement(tagName: "span"): HTMLSpanElement;
}

interface Document {
    createElement(tagName: string): HTMLElement;
    createElement(tagName: "canvas"): HTMLCanvasElement;
}

// Resultado

// interface Document {
//     createElement(tagName: any): Element;
//     createElement(tagName: "div"): HTMLDivElement;
//     createElement(tagName: "span"): HTMLSpanElement;
//     createElement(tagName: string): HTMLElement;
//     createElement(tagName: "canvas"): HTMLCanvasElement;
// }

//-----------------------------------

//Namespaces

