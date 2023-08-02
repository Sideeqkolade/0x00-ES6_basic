function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}

function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("fast");
            console.log("fast promise is done");
        }, 1000);
    });
}


async function sequentialStart() {
    console.log("==SEQUENTIAL START==");

    // Execution gets here almost instantly
    const slow = await resolveAfter2Seconds(); 
    console.log(slow); // 2. this runs 2 seconds after 1;

    const fast = await resolveAfter2Seconds(); 
    console.log(fast); // 3. this runs 3 seconds after 1
}


async function concurrentStart() {
    console.log("==CONCURRENT START WITH AWAIT==");

    const slow = resolveAfter2Seconds();  // starts timer immediately
    const fast = resolveAfter1Second(); // starts timer immediately

    // Execution gets here almost instantly
    console.log(await slow); // this runs 2 seconds after 1
    console.log(await fast); // this runs 2 seconds after 1, immediately after 2 since fast is already resolved
}


function concurrentPromise() {
    console.log("==CONCURRENT START WITH Promise.all==");
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(message[0]); // slow
            console.log(message[1]); // fast
        }
    );
}


async function parallel() {
    console.log("==PARALLEL WITH AWAIT Promise.all==");

    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
    ]);
}

sequentialStart();  // after 2 seconds, logs "slow", then after 1 more second, "fast"

// wait for the above to finish
setTimeout(concurrentStart, 4000) // after 2 seconds, logs "slow" and then "fast"

// wait again
setTimeout(concurrentPromise, 7000) // same as concurrentStart

// wait again
setTimeout(parallel, 10000)   // truly parallel: after 1 second, logs "fast", then after 1 more second, "slow"
