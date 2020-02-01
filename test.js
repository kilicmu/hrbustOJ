function test() {
    name = '小王';
    return new Promise((resolve, reject) => {
        console.log(name);
        resolve(name);
        reject(new Error('err'));
    })
}

let t = test();
console.log(t.name);