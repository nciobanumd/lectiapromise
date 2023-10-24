/* =====EX 1===== */
Array.prototype.customeFilter = function (cb) {
    let result = []
    for(let i = 0; i < this.length; i++ ) {
        if (cb(this[i], i, this)) {
        result.push(this[i] > 0)
        }
    }
    return result
}

const arr = [9,10,18,4,7]
const filterarr = arr.customeFilter((x) => x % 2 !== 0)
/*   */


Array.prototype.customeSome = function (cb) {
    for(let i = 0; i < this.length; i++ ) {
        if (cb(this[i])) {
            return true
        }
    }
    return false
}

const testMap = [20,25,18,71].customeSome((i) => i < 5)

/* console.log(testMap) */

/* =======EX2======== */

let promise1 = new Promise((res, rej) => {
    let a = 1 + 1
    if (a = 2) {
        res('Executat cu succes!')
        
    } else {
        rej('Executarea a esuat!')
        
    }
})

promise1.then((message) => {
    console.log('Se afla in Then. ' + message)
}).catch((message) => {
    console.log('Se afla in Catch. ' + message)
}).finally(() => {
    console.log('va fi executat oricum');
})

const userLeft = true
const priceIsTooHigh = false

function sellCarsPromise () {
    return new Promise((res, rej) => {
      if (userLeft) {
        rej({
            name: 'User left',
            message: 'Should act quickly'
        })
    } else if (priceIsTooHigh){
        rej({
            name: 'Price is too high',
            message: 'Should low the price'
        })
    }else {
        res('We sold the car')
    }    
    })
  
}

sellCarsPromise()
.then(message => console.log('Success: ' + message))
.catch(error => console.log(`${error.name}: ${error.message}`))

Promise.all([
    promise1,
    sellCarsPromise
]). then((message) => {
    console.log(message);

})