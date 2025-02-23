// 1
class Car {
    constructor(brand, model, year, engineVolume) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.engineVolume = engineVolume;
    }
    
    getDescription() {
        return `${this.brand} ${this.model}, ${this.year}, ${this.engineVolume}L`;
    }
}
// 2
class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
    
    getDailyReadingPages() {
        return `You need to read ${Math.ceil(this.pages / 7)} pages per day to finish in 7 days.`;
    }
}
// 3
class Athlete {
    constructor(name, age, sport, trainingHours) {
        this.name = name;
        this.age = age;
        this.sport = sport;
        this.trainingHours = trainingHours;
    }
    
    getWeeklyTrainingHours() {
        return `To improve by 20%, you need to train ${(this.trainingHours * 7 * 1.2).toFixed(2)} hours per week.`;
    }
}