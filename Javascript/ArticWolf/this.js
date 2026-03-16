const obj = {
  dev: "bfe",
  a: function () {
    return this.dev;
  },
  b() {
    return this.dev;
  },
  c: () => this.dev,
  d: function () {
    return (() => this.dev)();
  },
  e() {
    return this.b();
  },
  f() {
    return this.b;
  },
  g() {
    return this.c();
  },
  h() {
    return this.c;
  },
  i() {
    return () => this.dev;
  },
};

console.log(obj.a());
console.log(obj.b());
console.log(obj.c());
console.log(obj.d());
console.log(obj.e());
console.log(obj.f()());
console.log(obj.g());
console.log(obj.h()());
console.log(obj.i()());

// output
// bfe
// bfe
// undefined
// bfe
// bfe
// undefined
// undefined
// undefined
// bfe
