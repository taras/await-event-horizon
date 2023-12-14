

async function getNumber() {
  return new Promise((resolve) => {
    setInterval(() => resolve(42), 10000)
  });
}

async function run() {
  console.log("Async/Await Function");
  console.log("Getting a number");
  try {
    const number = await getNumber();
    console.log(`Got number ${number}`);
  } finally {
    console.log("💫 Ran to completion 💫");
  }
}

await run()