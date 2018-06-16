class Options {
  // свойства
  constructor(height, width, bg, fontSize, textAlign) {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  // метод где создается элемент и прописываются свойства этого элемента
  createNewDiv(text) {
    let div = document.createElement('div');
    div.textContent = text;
    div.style.cssText = `height: ${this.height};
                        width: ${this.width};
                        background-color: ${this.bg};
                        font-size: ${this.fontSize};
                        text-align: ${this.textAlign};`
    document.body.appendChild(div); // вставка элемента в конец страницы
  }
}


// экземпляры от класса Options
let obj1 = new Options('100px', '300px', 'white', '32px', 'center');
obj1.createNewDiv('Вставка нового элемента');

let obj2 = new Options('100px', '500px', 'blue', '15px', 'center');
obj2.createNewDiv('Вставка нового элемента 2');

let obj3 = new Options('100px', '700px', 'red', '24px', 'center');
obj3.createNewDiv('Вставка нового элемента 2');

// class Rectangle {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }

//   calcArea() {
//     return this.height * this.width;
//   }
// }

// const square = new Rectangle(10, 15);

// console.log(square.calcArea());
