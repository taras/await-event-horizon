import { main, action } from 'effection';

function* getNumber() {
  return yield* action(function* () { 
    setTimeout(() => resolve(42), 10000) 
  });
}

function* run() {
  console.log("❤️ Effection Generator function");
  console.log("Getting a number");
  try {
    const number = yield* getNumber();
    console.log(`Got number ${number}`);
  } finally {
    console.log("💫 Ran to completion 💫");
  }
}

await main(run);