console.log("Uploading files...");
const request = require("request");
const fs = require("fs-extra");

const folderId = "lmEWA-MjQA-CTXToVGyhPA";

// upload
fs.readdir("input/CORAAL_audio/dcb/", (err, files) => {
  let filesArray = [];
  files.forEach((file) => {
    filesArray.push(file);
  });
  const first10Files = filesArray.slice(10, 20);
  first10Files.map((file) => {
    const fileExtension = file.split(".")[1];
    const myFile = fs.readFileSync(`input/CORAAL_audio/dcb/${file}`);

    const options = {
      method: "POST",
      url: `https://upload.trint.ninja/?filename=${file}&${folderId}`,
      encoding: null,
      body: myFile,
      headers: {
        "api-key": "468ae74c6e9ad287dc8cfa3258367a9c1be71796",
        "content-type": `audio/${fileExtension}`,
      },
    };
    setTimeout(() => {
      request(options, (error, response, body) => {
        if (error) {
          console.log(error);
          throw new Error(error);
        }

        console.log(body);
      });
    }, 5000);
  });
  console.log(first10Files);
});