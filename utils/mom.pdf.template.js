export function momPdfTemplate(momData) {
    const htmlTemplate = `
    <html>
      <head>
        <title>Meeting Minutes</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
          }
          .content {
            max-width: 800px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
          h1 {
            color: #333;
            text-align: center;
            margin-bottom: 20px;
          }
          .label {
            font-weight: bold;
            width: 150px;
            display: inline-block;
            margin-bottom: 5px;
          }
          ul {
            list-style: none;
            padding: 0;
          }
          li {
            margin-bottom: 10px;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .remark {
            margin-top: 10px;
          }
          .remark p {
            margin: 5px 0;
          }
          .files {
            margin-top: 10px;
          }
          .files ol {
            list-style-type: decimal;
            padding-left: 20px;
          }
          .files li {
            margin-bottom: 5px;
          }
        </style>
      </head>
      <body>
        <div class="content">
          <h1>Meeting Minutes</h1>
          <ul>
            <li><span class="label">Location:</span> ${momData.location}</li>
            <li><span class="label">Date:</span> ${momData.meetingdate}</li>
            <li><span class="label">Attendees:</span>
              <ul>
                <li><span class="label">Client Name:</span> ${momData.attendees.client_name}</li>
                <li><span class="label">Organised By:</span> ${momData.attendees.organisor}</li>
                <li><span class="label">Designer:</span> ${momData.attendees.designer}</li>
                <li><span class="label">Others:</span> ${momData.attendees.attendees}</li>
              </ul>
            </li>
            <li class="remark"><span class="label">Remark:</span>
              <ul>
                ${momData.remark}
              </ul>
            </li>
            <li class="files"><span class="label">Files:</span>
              <ol>
                ${momData.files.map((image) => `<li><a href="${image.fileUrl}">${image.fileName}</a></li>`).join("")}
              </ol>
            </li>
          </ul>
        </div>
      </body>
    </html>
  `;

    return htmlTemplate;
}
