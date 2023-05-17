const prompts = require("prompts");
const requirements = [
  {
    type: "number",
    name: "length",
    message: "How long should the password be?",
  },
  {
    type: "confirm",
    name: "includeNumber",
    message: "Should the password include Number?",
    initial: false,
  },
  {
    type: "confirm",
    name: "includeSymbols",
    message: "Should the password include symbols?",
    initial: false,
  },
];
const types = [
  {
    type: "letter",
    value: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    status: true,
  },
  {
    type: "number",
    value: "1234567890",
    status: false,
  },
  {
    type: "symbol",
    value: "`~!@#$%^&*()_+=-{}[]|:';\"<>,.?\\/",
    status: false,
  },
];
let password = "";

function generatePassword(length) {
  for (let i = 1; i <= length; i++) {
    let randomType = Math.floor(Math.random() * types.length);
    while (!types[randomType].status) {
      randomType = Math.floor(Math.random() * types.length);
    }
    password +=
      types[randomType].value[
        Math.floor(Math.random() * types[randomType].value.length)
      ];
  }
  return password;
}
console.log(types[2].value);

(async () => {
  const response = await prompts(requirements);
  let { length, includeNumber, includeSymbols } = response;
  types[1].status = includeNumber;
  types[2].status = includeSymbols;
  const password = generatePassword(length);
  console.log(password);
})();
