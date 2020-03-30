// class Character {
//     name;
//     age;
//     lv;
//     constructor(props) {
//         super(props);
//
//     }
//     lvUp() {
//         this.lv += 1;
//         // api call(put)
//     }
//     useItem() {
//
//     }
//     getItem() {
//
//     }
//     attack() {
//
//     }
// }

function Character(opt) {
    this.name = opt.name;
    this.age = opt.age;
    this.lv = opt.lv;
    return this;
}
Character.staticFunc = function () {

};
Character.prototype._name = 'ASDASD';
// Character.prototype.lvUp = function () {
//     this.lv += 1;
//     // api call(put)
// };
//
// Character.prototype.useItem = function () {
//
// };

Character.prototype = {
    lvUp: function () {
        // this === instance
        this.constructor.staticFunc()
        return this;
    },
    go: function () {
        // do
    },
    useItem: function() {
        // this === instance
    }
};

const worrier = new Character({
    name: 'hoya',
    age: 29,
    lv: 2
});
const magical = new Character({
    name: 'miya',
    age: 29,
    lv: 1
});
worrier._name = 'asd';
worrier.lvUp().go();
var a = [].map(function() {
    return
}).reduce(function() {

});

function f() {
    console.log(this);
    // window === this
}
const func = () => {
    console.log(this);
    // window === this
};
window.f();
window.func();

class Person {
    name;
    age;
    method() {

    }
}

class Korean extends Person {
    a;
    b;
}

const korean = new Korean({
    name: '',
    age: '',
    a: 'a',
    b: 'b'
});

Array.prototype.extendsMap = function() {

};


function self(val) {
    val -= 1;
    if ( val === 5 ) {
        return true;
    }
    console.warn(val);
    return self(val);
}
var selfVal = self(10);