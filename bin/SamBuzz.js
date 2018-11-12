#! /usr/bin/env node

let sambuzz;
for (let i = 0; i < 100; i++) {
    if (Number.isInteger(i / 3)) {
        sambuzz = "Sam"
        if(Number.isInteger(i / 5)) {
            sambuzz = `${sambuzz}Buzz`
        }
        console.log(sambuzz)
    } else {
        console.log(i)
    }
}