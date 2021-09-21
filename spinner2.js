let spinnerItems = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;

for (const item of spinnerItems) {
  setTimeout(() => {
    process.stdout.write('\r' + item + '      ');
  }, delay);
  delay += 200;
}

//leave some buffer time for the prompt to start on the new line
setTimeout(() => {
  console.log("");
}, 2000);