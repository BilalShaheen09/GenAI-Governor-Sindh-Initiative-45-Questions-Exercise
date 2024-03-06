interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any;
}

function createCar(manufacturer: string, modelName: string, ...options: Array<{ [key: string]: any }>): Car {
    const car: Car = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional options to the car object
    for (const option of options) {
        for (const key in option) {
            car[key] = option[key];
        }
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const carInfo = createCar("Toyota", "Camry", { color: "blue" }, { hasSunroof: true });

// Print the returned Object to ensure all information was stored correctly
console.log(carInfo);
