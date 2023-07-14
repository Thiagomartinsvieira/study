import { reject } from "core-js/fn/promise";
import { async } from "regenerator-runtime";

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hey, i am a promise');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Terminou')
}