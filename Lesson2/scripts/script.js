console.log("\nЗадание 1\n");

class Book {
    constructor(title, author, pages) {
        this.title=title;
        this.author=author;
        this.pages=pages;
    }

    displayInfo=()=>{
        console.log(`Книга: ${this.title} Автор: ${this.author} Количество страниц: ${this.pages}`);
    }
}
const bookOne = new Book("Война и мир","Л.Н. Толстой",1300);
const bookTwo = new Book("Поднятая целина","М.А. Шолохов",536);

bookOne.displayInfo();
bookTwo.displayInfo();

console.log("\nЗадание 2\n");

class Student {
    constructor(name, age, grade) {
        this.name=name;
        this.age=age;
        this.grade=grade;
    }

    displayInfo=()=>{
        console.log(`Name: ${this.name}\nAge: ${this.age}\nGrade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();