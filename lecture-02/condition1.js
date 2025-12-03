const istatus = 200

if (istatus === 200) {
    console.log("OK")
}else if (istatus === 400) {
    console.log("Bad Request")
}else{
    console.log("Other Status")
}

switch (istatus) {
    case 200:
        console.log("OK")
        break;
    case 400:
        console.log("Bad Request")
        break
    default:
        console.log("Other Status")
}

const result = istatus === 200? "OK" : "Not OK"
console.log(result)
