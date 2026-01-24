function myFunction() {
    document.getElementById("demo").innerHTML = "Paragraph changed.";
    let x = 5 + 5;
    let y = "5" + 5;
    let z = "Hello" + 5;
    let u = 16 + 4 + "Volvo";
    let r = "Volvo" + 16 + 4;
    console.log("x" ,x ,"y" ,y ,"z" ,z ,"u" ,u ,"r" ,r);
    const person = {
        firstName:"John",
        lastName:"Doe",
        age: 20
    };
    console.log(person.age);
    let a = "He is called \"Johnny\""
    console.log(a);
    console.log(0.1 + 0.2);
    const car = {
        brandName:"Nissan",
        version:"VIP Super Neo",
        releaseYear: 1998,
        displayScreen: true
    };
    console.log(car.brandName)
}