const fetch = require("node-fetch");
const request = require("request");
const fs = require("fs-extra");

const folderId = "lmEWA-MjQA-CTXToVGyhPA";

// get transcriptIds

let url = `https://api.trint.com/`;

let options = {
  method: "GET",
  qs: { limit: "0", skip: "0" },
  headers: {
    "api-key": "468ae74c6e9ad287dc8cfa3258367a9c1be71796",
  },
};

let transcriptIds = [];

fetch(url, options)
  .then((res) => res.json())
  .then((json) => {
    console.log(json);
  })
  .catch((err) => console.error("error:" + err));

// download

// let url = "https://api.trint.ninja/export/json/6IJbW6GwTgualfhZPmHCsA";

// let options = {
//   method: "GET",
//   headers: {
//     "api-key": "468ae74c6e9ad287dc8cfa3258367a9c1be71796",
//   },
// };

// fs.readdir("input/CORAAL_audio/dcb/", (err, files) => {
//   let filesArray = [];
//   files.forEach((file) => {
//     filesArray.push(file);
//   });
//   const first10Files = filesArray.slice(0, 10);
//   first10Files.forEach((file) => {
//     const myFile = fs.readFileSync(`input/CORAAL_audio/dcb/${file}`);
//     fetch(url, options)
//       .then((res) => res.json())
//       .then((json) => {
//         const transcription = json.words.reduce((sentence, word) => {
//           return (sentence += ` ${word.value}`);
//         }, "");

//         console.log(transcription);
//       })
//       .catch((err) => console.error("error:" + err));
//   });
// });
