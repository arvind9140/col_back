export function momPdfTemplate(momData, projectName) {

  const dateOnlyString = momData.meetingdate.substring(0, 10); // Extract the date part before "T"
  const [year, month, day] = dateOnlyString.split("-"); // Split the date into year, month, and day parts
  const formattedDateString = `${day}-${month}-${year}`; // Rearrange and join the parts in the desired format

    const htmlTemplate = `
    <html>
  <head>
 
    <title>Meeting Minutes</title>
    <style>
      body {
        font-family: Arial, sans-serif;
       
        padding: 20px;
      }
      .content {
        max-width: 800px;
        margin: 0 auto;
        background-color: #fff;
        padding: 30px;
        border-radius: 8px;
        
      }
      .photos{
       margin-left :220px;
       margin-bottom: 40px;
      }
     
      h1 {
        color: #333;
        text-align: center;
        margin-bottom: 2px;
      }
      h2 {
        color: #333;
        text-align: center;
        margin-bottom: 30px;
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
    <div class="photos">
    <img classname="photo" src ='https://www.colonelz.com/wupsujyz/2022/12/colonelz-logo.png' />
    </div>
    <h1>${projectName}</h1>
      <h2>Meeting Minutes</h2>
      <ul>
        <li><span class="label">Location:</span> ${momData.location}</li>
        <li><span class="label">Date:</span> ${formattedDateString}</li>
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
