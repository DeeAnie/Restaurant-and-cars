class Cars {
    constructor(model, manufactureYear, enginePower, color) {
        this.model = model;
        this.manufactureYear = manufactureYear;
        this.enginePower = enginePower;
        this.color = color;
    }

    carsInfo() { 
        document.write(`<br><b>Model</b> - ${this.model} <br>
        <b>Year of manufacture -</b>  ${this.manufactureYear}  <br>
        <b>Engine power -</b>  ${this.enginePower} <br>
        <b>Color -</b>   ${this.color}`);
    }
}

class ElectroCars extends Cars {
    constructor(model, manufactureYear, enginePower, color, batteryCapacity) {
        super(model, manufactureYear, enginePower, color);
        this.batteryCapacity = batteryCapacity;
    }

    carsInfo() {
        super.carsInfo()
        document.write(`<br><b>Battery capacity -</b>  ${this.batteryCapacity}<br>`)
    }

    promote() {
        document.write(`<br><br><br><br>
        <b>Buy ${this.model} - Burn rubber, not gasoline!</b>
        <br>`);
    }
}


const lexus = new Cars('LEXUS LC', '2022', '434/324 (л.c./кВт)', 'Black');
lexus.carsInfo();

const tesla = new ElectroCars('Tesla Model S Long Range', '2022', '434/324 (л.c./кВт)', 'orange', '100 кВт·ч');
tesla.promote();
tesla.carsInfo();