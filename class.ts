console.log('this is class');
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
    return `Your name is ${this.name} and ${this.reviews} basic ${this.age}`;
  }
}
const result = new Coder(34, 'israr', 'au0097');
console.log(result.getDetails()); //Your name is israr and true basic 34
console.log(result.name); //israr// private are only acess within block of class and
//protected can acess via block and derived class
