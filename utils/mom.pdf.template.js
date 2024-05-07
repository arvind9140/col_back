function capitalizeWords(str) {
  if (typeof str !== 'string' || str.trim() === '') {
    throw new Error('Input must be a non-empty string');
  }

  // Split the string into words
  const words = str.split(' ');

  // Capitalize the first letter of each word and convert the rest to lowercase
  const capitalizedWords = words.map((word) => {
    if (word.length > 0) {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
    return ''; // In case of multiple spaces
  });

  // Join the words back together with a space
  return capitalizedWords.join(' ');
}




export function momPdfTemplate(momData, projectName) {
  const dateOnlyString = momData.meetingdate.substring(0, 10);
  const [year, month, day] = dateOnlyString.split("-");
  const formattedDateString = `${day}-${month}-${year}`;
  const remarksArray = momData.remark.split('.').map(remark => remark.trim()).filter(Boolean);

  const htmlTemplate = `<html>

<head>
<meta http-equiv=Content-Type content="text/html; charset=utf-8">
<meta name=Generator content="Microsoft Word 15 (filtered)">
<style>
<!--
 body {
          font-family: 'Roboto', sans-serif;
          background-color: #f5f5f5; 
          margin: 0;
          padding: 0;
          height: 100%;
        }

 p.MsoNormal, li.MsoNormal, div.MsoNormal
	{margin:0in;
	text-autospace:none;
	font-size:11.0pt;
	font-family:"Arial MT",sans-serif;}
h1
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:35.0pt;
	text-autospace:none;
	font-size:12.0pt;
	font-family:Roboto;}
p.MsoTitle, li.MsoTitle, div.MsoTitle
	{margin-top:0in;
	margin-right:0in;
	margin-bottom:0in;
	margin-left:35.0pt;
	text-autospace:none;
	font-size:13.5pt;
	font-family:Roboto;
	font-weight:bold;}


	

-->
 .header {
  height: 120px;
  width:100%;
          text-align: center;
          padding: 20px;
          background-color: #CCD1D1;
          color: #000000;
          margin-bottom:50pt;
         
        }

        .header img {
          height: 50px;
        }
        .project {
          margin-bottom:10pt;
        }
      
</style>

</head>

<body lang=EN-US >
<div class="header">
        <img src="https://s3.amazonaws.com/myrecords.in/colonelz-logo.png" alt="Project Logo" />
        <h2 class = project style='font-size:25.5pt;
font-family:"Times New Roman",serif '>${capitalizeWords(projectName)}</h2>
      </div>
<div class=WordSection1>


<p class=MsoTitle style='margin-top:8.85pt; margin-left:240pt; margin-bottom:40pt'><span style='font-size:18.5pt;
font-family:"Times New Roman",serif'>Meeting Details</span></p>



<p class=MsoNormal style='margin-top:15.25pt;margin-right:0in;margin-bottom:
0in;margin-left:35.0pt;margin-bottom:.0001pt'><b><span style='font-size:12.0pt;
font-family:Roboto;letter-spacing:-.2pt'>Date:</span></b><b><span
style='font-size:12.0pt;font-family:Roboto;letter-spacing:.1pt'> </span></b><span
style='font-size:12.0pt;letter-spacing:-.2pt'>${formattedDateString}</span><span
style='font-size:12.0pt'>                                                                                          
</span><b><span style='font-size:12.0pt;font-family:Roboto'>Location:<span
style='letter-spacing:-.3pt'> </span></span></b><span style='font-size:12.0pt'>${momData.location}</span></p>

<p class=MsoNormal style='margin-top:15.25pt;margin-right:0in;margin-bottom:
0in;margin-left:35.0pt;margin-bottom:.0001pt'><span style='font-size:12.0pt'>&nbsp;</span></p>

<h1 style='margin-top:7.35pt;line-height:14.35pt'><span style='letter-spacing:
-.1pt'>Attendees</span></h1>

<h1 style='margin-top:7.35pt;line-height:14.35pt'>&nbsp;</h1>

<p class=MsoNormal style='margin-left:34.0pt;line-height:14.35pt'><b><span
style='font-size:12.0pt;font-family:Roboto'>Client:<span style='letter-spacing:
-.6pt'> </span></span></b><span style='font-size:12.0pt'>${capitalizeWords(momData.attendees.client_name)}  <span style='letter-spacing:-.8pt'> </span><span
style='letter-spacing:-.2pt'>                                                                     </span></span><b><span
style='font-size:12.0pt;font-family:Roboto'>Organized<span style='letter-spacing:
-.3pt'> </span>By: </span></b><span style='font-size:12.0pt'>${capitalizeWords(momData.attendees.organisor)}   </span></p>

<p class=MsoNormal style='margin-left:50.0pt;line-height:14.35pt'><span
style='font-size:12.0pt'>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:34.0pt;line-height:14.35pt'><span
style='font-size:12.0pt'></span><b><span style='font-size:12.0pt;font-family:
Roboto'>Designer: </span></b><span style='font-size:12.0pt'>${capitalizeWords(momData.attendees.designer)}                                                                                              </span><b><span
style='font-size:12.0pt;font-family:Roboto'>Others: </span></b><span
style='font-size:12.0pt'>${capitalizeWords(momData.attendees.attendees)}</span></p>

<p class=MsoBodyText>&nbsp;</p>

<p class=MsoBodyText style='margin-top:4.9pt'>&nbsp;</p>

<h1 style='margin-top:4.35pt;line-height:14.35pt'><span style='letter-spacing:
-.1pt'>Remark</span></h1>

<h1 style='margin-top:2.35pt;line-height:14.35pt'>&nbsp;</h1>

<p class=MsoNormal style='margin-left:50.0pt;margin-right:10pt;line-height:14.35pt'><span style='letter-spacing:
-.6pt'> </span></span></b><span style='font-size:12.0pt'>${momData.remark}<span
style='letter-spacing:-.85pt'> </span></p>

<h1 style='margin-top:7.35pt;line-height:14.35pt'>&nbsp;</h1>
<h1><span style='letter-spacing:-.1pt'>Files</span></h1>

<p class=MsoBodyText style='margin-left:33.5pt'> <ol>
              ${momData.files.map((file) => `<li><a href="${file.fileUrl}">${file.fileName}</a></li>`).join("")}
            </ol><span style='letter-spacing:
2.9pt'> </p>

</div>

</body>

</html>
 `;

  return htmlTemplate;
}


// export function momPdfTemplate(momData, projectName) {
//   const dateOnlyString = momData.meetingdate.substring(0, 10);
//   const [year, month, day] = dateOnlyString.split("-");
//   const formattedDateString = `${day}-${month}-${year}`;

//   const htmlTemplate = `
//   <html>
//     <head>
//       <title>Meeting Minutes</title>
//       <style>
//         @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

//         body {
//           font-family: 'Roboto', sans-serif;
//           background-color: #f5f5f5;
//           margin: 0;
//           padding: ;
//         }

//         .header {
//           text-align: center;
//           padding: 20px;
//           background-color: #3333;
//           color: #ffff;
//           border-bottom: 2px solid #ccc;
//         }

//         .header img {
//           height: 50px;
//         }

//         .container {
//           display: grid;
//           grid-template-columns: 250px 1fr; /* Sidebar and content */
//           padding: 20px;
//           height: calc(100% - 80px); /* Full height minus header */
//           gap: 20px; /* Space between sidebar and content */
//         }

//         .sidebar {
          
//           padding: 20px;
//           border-right: 2px solid #ccc;
//           overflow-y: auto;
//         }

//         .content {
        
//           padding: 20px;
//           overflow-y: auto;
//         }

//         .meeting-details {
//           display: flex;
//           justify-content: space-between; /* Align items across the width */
//           margin-bottom: 20px; /* Add space below the meeting details */
//         }

//         .meeting-details div {
//           width: 48%; /* Split the space evenly between two parts */
//         }

//         .attendees {
//           display: flex;
//           justify-content: space-between;
//           flex-wrap: wrap; /* Wrap if needed */
//           margin-top: 20px;
//         }

//         .attendees div {
//           width: 48%; /* Ensure they occupy half the width */
//         }

       

//         .files {
//           margin-top: 20px;
//         }

//         .files ol {
//           list-style-type: decimal;
//           padding-left: 20px;
//         }

//         a {
//           color: #007bff;
//           text-decoration: none;
//         }

//         a:hover {
//           text-decoration: underline;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="header">
//         <img src="https://s3.amazonaws.com/myrecords.in/colonelz-logo.png" alt="Project Logo" />
//         <h1>${projectName}</h1>
//       </div>

//       <div class="container">
//         <div class="sidebar">
//           <h2>Meeting Details</h2>
//           <div class="meeting-details">
//             <div><strong>Date:</strong> ${formattedDateString}</div>
//             <div><strong>Location:</strong> ${momData.location}</div>
//           </div>

//           <div class="attendees">
//             <h3>Attendees</h3>
//             <div><strong>Client:</strong> ${momData.attendees.client_name}</div>
//             <div><strong>Organized By:</strong> ${momData.attendees.organisor}</div>
//             <div><strong>Designer:</strong> ${momData.attendees.designer}</div>
//             <div><strong>Others:</strong> ${momData.attendees.attendees}</div>
//           </div>
//         </div>

//         <div class="content">
//           <div class="remark">
//             <strong>Remark:</strong> ${momData.remark}
//           </div>

//           <div class="files">
//             <strong>Files:</strong>
//             <ol>
//               ${momData.files.map((file) => `<li><a href="${file.fileUrl}">${file.fileName}</a></li>`).join("")}
//             </ol>
//           </div>
//         </div>
//       </div>
//     </body>
//   </html>
//   `;

//   return htmlTemplate;
// }

