console.log('this is class');
class Coder {
  constructor(
    private age: number,
    public readonly name: string,
    protected id: string | number,
    public reviews: boolean
  ) {
    this.age = age;
    this.name = name;
    this.id = id;
    this.reviews = reviews;
  }
  public getDetails(){
   return `Your name is ${this.name}`
  }
}
