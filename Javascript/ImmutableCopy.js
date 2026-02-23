class MyClass {
  constructor(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  sum() {
    return this.a + this.b + this.c;
  }

  getImmutableCopy() {
    const copy = new MyClass(this.a, this.b, this.c);
    Object.freeze(copy);
    return copy;
  }

  isMutable() {
    return !Object.isFrozen(this);
  }
}

const obj = new MyClass(1, 2, 3);

console.log(obj.sum()); 

const immutableObj = obj.getImmutableCopy();

console.log(immutableObj.sum());

immutableObj.a = 100;

console.log(immutableObj.a);

console.log(obj.a);
