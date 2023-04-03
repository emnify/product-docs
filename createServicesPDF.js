const fs = require("fs");
const exec = require("child_process").exec;
require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.APIKEY;
const url = process.env.URL;
const htmlFile = process.env.HTMLFILE;
const pdfFile = process.env.PDFFILE;
const s3Bucket = process.env.S3BUCKET;
const s3Upload = "aws s3 sync build s3://" + s3Bucket + " --acl public-read";
const path = "build/services/";
let files = [
  "global-iot-sim.html",
  "global-iot-network.html",
  "iot-cloud-communication-platform.html",
  "data-streamer/getting-started.html",
  "data-streamer/connection-types.html",
  "data-streamer/stream-types.html",
  "data-streamer/managing-data-streams.html",
  "data-streamer/usage.html",
  "data-streamer/available-integrations.html",
  "events/getting-started.html",
  "events/event-types.html",
  "events/usage.html",
  "security.html",
  "cloud-connect.html",
  "openvpn.html",
  "sms.html",
  "user-management.html",
  "business-intelligence-and-analytics-reports.html",
  "no-code-workflow-automation.html",
  "sim-lifecycle-management.html",
  "endpoint-management-and-group-policies.html",
  //"support.html"
];

let merged = "<!doctype html>\n";
merged += '<html lang="en" dir="ltr">' + "\n<head>\n";
merged += '<meta charset="UTF-8"></meta>' + "\n";
merged +=
  '<link rel="stylesheet" href="/assets/css/styles.438d72b1.css"></link>' +
  "\n";
merged += "</head>\n<body>\n";

let file = "support.html";
for (file of files) {
  let filename = path + file;
  let lines = fs.readFileSync(filename, "utf-8");
  lines = lines.replace(/<([a-z])/g, "\n<$1");
  let keep = 0;
  lines.split(/\r?\n/).forEach(line => {
    if (line.match(/<h1/)) {
      keep = 1;
    }
    if (line.match(/<footer/)) {
      keep = 0;
    }
    if (keep) {
      merged += line + "\n";
    }
  });
}

merged += "</body>\n</html>\n";

try {
  fs.writeFileSync(htmlFile, merged);
} catch (err) {
  console.error(err);
}

// Upload the new all-in-one-page HTML file to S3
exec(s3Upload, (err, stdout, stderr) => {
  if (err) {
    console.error(`exec error: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});

let config = {
  url: "https://api.docraptor.com/docs",
  method: "post",
  responseType: "arraybuffer", //IMPORTANT! Required to fetch the binary PDF
  headers: {
    "Content-Type": "application/json",
  },
  data: {
    user_credentials: apiKey, // this key works in test mode!
    doc: {
      test: true, // test documents are free but watermarked
      document_type: "pdf",
      document_url: url,
    },
  },
};

axios(config)
  .then(function (response) {
    fs.writeFile(pdfFile, response.data, "binary", function (writeErr) {
      if (writeErr) throw writeErr;
      console.log("Created PDF: " + pdfFile);
      // Upload the PDF file to S3
      exec(s3Upload, (err, stdout, stderr) => {
        if (err) {
          console.error(`exec error: ${stderr}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
      });
    });
  })
  .catch(function (error) {
    // DocRaptor error messages are contained in the response body
    // Since the response is binary encoded, let's decode
    var decoder = new TextDecoder("utf-8");
    console.log(decoder.decode(error.response.data));
  });
