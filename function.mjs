

function getNumber() {
  return 42;
}



function run() {
  console.log("Function");
  console.log("Getting a number");
  try {
    const n = getNumber();
    console.log(`got number ${42}`);
  } finally {
    console.log("💫 Ran to completion 💫");
  }
}

run();