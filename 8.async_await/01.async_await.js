async function logName(name) {
    console.log(name);
    // 1. we can yield promises using await
    const transformName = new Promise((resolve, reject) => {
        setTimeout(() =>resolve(name.toUpperCase()), 1000)
    });

    const result = await transformName;
    // 2. return a promise
    return result;
}

logName("antonio").then(res => {
    console.log("result from async function = " + res);
})
