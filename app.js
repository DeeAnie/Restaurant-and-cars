class Restaurant {
    constructor(name, cusineType) {
      this.name = name;
      this.cusineType = cusineType;
    }
  
    showInfo() {
      return `${this.name} is a restaurant of ${this.cusineType} meal.`;
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
        return `${this.name} is closed`;
      } else {
        if (currentHour > 9 && currentHour < 22) {
          return `${this.name} is open`;
        } else {
          return `${this.name} is closed`;
        }
      }
    }
  }
  
  const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
  console.log(beshBarmak.showInfo());
  console.log(beshBarmak.isOpen());