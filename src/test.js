function getPromiseResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved");
    }, 10000);
  });
}
function syncFn() {
  console.log("I am inside sync function");

  async function test1() {
    const p = getPromiseResult().then((data) => {
      console.log(data);
    });
    console.log(p);
    console.log("Test 1 running");
  }

  async function test2() {
    console.log("Test 2 running");
    // simulate error
    throw new Error("I am dead problem");
  }

  async function test3() {
    console.log("Test 3 running");
  }

  // Call async functions properly
  test1();
  test2().catch((err) => {
    console.error(err.message);
  });
  test3();

  console.log("I am end of  sync function");
}

console.log("I am the end of Sync function");

syncFn();

// This is how you export something in Node.js (if needed)
module.exports = syncFn;

//.with Async / Await_-->
// Todo:work on getPromise function

function getPromiseResult() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved");
    }, 10000);
  });
}
function syncFn() {
  console.log("I am inside sync function");

  async function test1() {
    const p = getPromiseResult().then((data) => {
      console.log(data);
    });
    console.log(p);
    console.log("Test 1 running");
  }

  async function test2() {
    console.log("Test 2 running");
    // simulate error
    throw new Error("I am dead problem");
  }

  async function test3() {
    console.log("Test 3 running");
  }

  // Call async functions properly
  test1();
  test2().catch((err) => {
    console.error(err.message);
  });
  test3();

  console.log("I am end of  sync function");
}

console.log("I am the end of Sync function");

syncFn();

// This is how you export something in Node.js (if needed)
module.exports = syncFn;
