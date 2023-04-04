const fs = require("fs");
const exec = require("child_process").exec;
require("dotenv").config();
const axios = require("axios");
const apiKey = process.env.APIKEY;
const url = process.env.URL;
const htmlFile = process.env.HTMLFILE;
const pdfFile = process.env.PDFFILE;
const s3Bucket = process.env.S3BUCKET;
const runtimeMainJS = process.env.RUNTIMEMAINJS;
const mainJS = process.env.MAINJS;
const docPath = process.env.DOCPATH;
const s3Upload = "aws s3 sync build s3://" + s3Bucket + " --acl public-read";
const pageBreak = '<div style="page-break-after: always"></div>';

const files = [
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

let head = "<!doctype html>\n";
head += '<html lang="en" dir="ltr">' + "\n<head>\n";
head += '<meta charset="UTF-8"></meta>' + "\n";
head +=
  '<link rel="stylesheet" href="https://docs.emnify.com/assets/css/styles.438d72b1.css"></link>' +
  "\n";
head += "</head>\n<body>\n";
//head += "<body>\n";

let toc = "<h1>Table of Contents</h1>\n";
let body = "";

for (let thisFile of files) {
  let filename = docPath + thisFile;
  let lines = fs.readFileSync(filename, "utf-8");
  lines = lines.replace(/<details/g, "\n<details");
  lines = lines.replace(/"true">/g, '"true"' + ">\n");
  lines = lines.replace(/<\/details>/g, "\n</details>\n");
  lines = lines.replace(/<footer/g, "\n<footer");
  lines = lines.replace(/<h/g, "\n<h");
  lines = lines.replace(/<t/g, "\n<t");
  lines = lines.replace(/<p/g, "\n<p");
  lines = lines.replace(/<summary>/g, "<b>");
  lines = lines.replace(/<\/summary>/g, "</b>");
  let keep = 0;
  lines.split(/\r?\n/).forEach(line => {
    if (line.match(/<h1/)) {
      keep = 1;
      body += "\n" + pageBreak + "\n";
    }
    if (line.match(/<footer/)) {
      keep = 0;
    }
    if (keep) {
      if (!line.match(/<details/) && !line.match(/<\/details/)) {
        // Process <h1> and <h2> section headings for creating the internal
        // anchors needed for building a TOC
        if (line.match(/<h1>/)) {
          let sectionHeading = line.replace(/<h\d>([^<]+)<\/h\d>/, "$1");
          let id = createAnchorId(sectionHeading);
          let hAttrs = ' class="anchor" id="' + id + '">';
          line = line.replace(/>/, hAttrs);
          toc +=
            '<strong><a href="#' +
            id +
            '">' +
            sectionHeading +
            "</a></strong><br />\n";
        } else if (line.match(/<h2/)) {
          let link = line.replace(/<h2 [^<]+(<a href="#[^"]+").*/, "$1");
          let title = line.replace(/<[^>]+>([^<]+)<.*/, "$1");
          toc += "&nbsp;&nbsp;" + link + ">" + title + "</a><br />\n";
        }
        body += line + "\n";
      }
    }
  });
}

body += '<script src="' + runtimeMainJS + '"></script>' + "\n";
body += '<script src="' + mainJS + '"></script>' + "\n";
body += "</body>\n</html>\n";
let merged = head + toc + body;
//console.log(merged)

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

function createAnchorId(sectionHeading) {
  let id = sectionHeading.toLowerCase();
  id = id.replace(/[ ,_/:()]/g, "-");
  id = id.replace(/[.!?]/g, "");
  id = id.replace(/(\w+)&(\w+)/g, "$1-and-$2");
  id = id.replace(/&/g, "and");
  id = id.replace(/--/g, "-");
  return id;
}
