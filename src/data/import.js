import manufacturersJSON from './manufacturer.json';
import generationsJSON from './generation.json';
import modelsJSON from './model.json';
import enginesJSON from './engine.json';

console.log(manufacturersJSON);
console.log(generationsJSON);
console.log(modelsJSON);
console.log(enginesJSON);

export function manufacturersFromJSON() {
    let manufacturers = []
    for (const key in manufacturersJSON[`manufacturer`]) {
        if (manufacturersJSON[`manufacturer`].hasOwnProperty(key)) {
            const element = manufacturersJSON[`manufacturer`][key];
            manufacturers[element.id] = (element)
        }
    }
    return manufacturers
}

export function modelsFromJSON() {
    let models = []
    for (const key in modelsJSON[`model`]) {
        if (modelsJSON[`model`].hasOwnProperty(key)) {
            const element = modelsJSON[`model`][key];
            models[element.id] = (element)
        }
    }
    return models
}

export function generationsFromJSON() {
    let generations = []
    for (const key in generationsJSON[`generation`]) {
        if (generationsJSON[`generation`].hasOwnProperty(key)) {
            const element = generationsJSON[`generation`][key];
            generations[element.id] = (element)
        }
    }
    return generations
}

export function enginesFromJSON() {
    let engines = []
    for (const key in enginesJSON[`engine`]) {
        if (enginesJSON[`engine`].hasOwnProperty(key)) {
            const element = enginesJSON[`engine`][key];
            engines[element.id] = (element)
        }
    }
    return engines
}