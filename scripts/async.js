setTimeout(testTimeOut,6000)
console.log("A")

function testTimeOut(){
    console.log("this is time out Function")
}

setTimeout(function () {
    console.log("This is second Timeout")
},8000)