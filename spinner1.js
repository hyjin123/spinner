setTimeout(() => {
  process.stdout.write('\r|    ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/    ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 700);

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r/    ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r-    ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r\\    ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r|    ');
}, 1700);

//leave some buffer time for the prompt to start on the new line
setTimeout(() => {
  console.log("");
}, 2000);