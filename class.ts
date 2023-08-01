// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
//console.log('this is class');
class Coder {
  constructor(
    private age: number,
    public readonly name: string,
    protected id: string | number,
    public reviews: boolean = true
  ) {
    this.age = age;
    this.name = name;
    this.id = id;
    //this.reviews = reviews;
  }
  public getDetails() {
    return `Your name is ${this.name} and ${this.reviews} basic and age is ${this.age} and Id is ${this.id}`;
  }
}
const result = new Coder(34, 'israr', 'au0097');
console.log(result.getDetails()); //YYour name is israr and true basic and age is 34 and Id is au0097
//console.log(result.id); //israr
class SubDerived extends Coder {
  constructor(
    public city: string,
    age: number,
    name: string,
    id: string | number
  ) {
    super(age, name, id);
    this.city = 'lucknow';
  }
  public getCity() {
    return `Your name is ${this.name} and ${this.reviews} basic and city is ${this.city} and Id is ${this.id}`;
  }
}
const showcity = new SubDerived('lucknow', 45, 'israr', '9987ur'); //Your name is israr and true basic and city is lucknow and Id is 9987ur

console.log(showcity.getCity());
