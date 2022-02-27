class Restaurant {
  constructor(name, cusineType, served = 0) {
    this.name = name;
    this.cusineType = cusineType;
    this.served = served;
  }

  showInfo() {
    document.write(`<br><b>Restaurant:</b> ${this.name} <br>
     <b>Cuisine type:</b> ${this.cusineType}<br>`);
  }

  // 0 - sun
  // 1 = mon
  // 2 = tue
  // 3 = wed
  // 4 = thu
  // 5 = fri
  // 6 = sat

  isOpen() {
    let currentHour = new Date().getHours();
    let currentDay = new Date().getDay();

    if (currentDay === 6 || currentDay === 0) {
      document.write(`<b>${this.name}</b> is closed <br>`);
    } else {
      if (currentHour > 9 && currentHour < 22) {
        document.write(`<b>${this.name}</b> is open <br>`);
      } else {
        document.write(`<b>${this.name}</b> is closed <br>`);
      }
    }
  };

  setStatus(status) {
    this.isOpen = status;
  }

  serve() {
    this.served++
  }

  setServed(num) {
    this.served = this.served + num;
  }

  showTotalServed() {
    document.write(`<b>Total served:</b> ${this.served} <br>`)
  }
}

const lunch = new Restaurant("Lunch", "American");

lunch.showInfo();
lunch.isOpen();

lunch.serve();
lunch.setServed(10);
lunch.showTotalServed();