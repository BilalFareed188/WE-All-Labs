let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

let entries = Object.entries(obj)
const display = entries.map( ([key, value] = entry) => {
  // var stringResult = '';
  // stringResult.concat(`${key} ${value}`);
  // console.log(stringResult);
  console.log(`${key} ${value}`);
});

display;
