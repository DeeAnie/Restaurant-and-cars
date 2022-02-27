class Cars {
    constructor(model, manufactureYear, enginePower, color) {
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.enginePower = enginePower;
        this.color = color;
    }

    carsInfo() {
        return (
            `Model - ${this.model} 
Year of manufacture - ${this.manufactureYear}  
Engine power - ${this.enginePower} 
Сar color -  ${this.color}`);
    }
}

class ElectroCars extends Cars {
    constructor(model, manufactureYear, enginePower, color, batteryCapacity) {
        super(model, manufactureYear, enginePower, color);
        this.batteryCapacity = batteryCapacity;
    }

    carsInfo() {
        return super.carsInfo() + ` Battery capacity - ${this.batteryCapacity}`
    }

    promote() {
        return (
            `Buy ${this.model} - Burn rubber, not gasoline! 
            `);
    }
}


const lexus = new Cars('LEXUS LC', '2022', '434/324 (л.c./кВт)', 'Black');
console.log(lexus.carsInfo());

const tesla = new ElectroCars('Tesla Model S Long Range', '2022', '434/324 (л.c./кВт)', 'orange', '100 кВт·ч');
console.log(tesla.carsInfo());
console.log(tesla.promote());


