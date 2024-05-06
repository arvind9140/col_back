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
 /* Font Definitions */
 @font-face
	{font-family:"Cambria Math";
	panose-1:2 4 5 3 5 4 6 3 2 4;}
@font-face
	{font-family:Roboto;
	panose-1:2 0 0 0 0 0 0 0 0 0;}
@font-face
	{font-family:"Arial MT";}
 /* Style Definitions */
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
p.MsoBodyText, li.MsoBodyText, div.MsoBodyText
	{margin:0in;
	text-autospace:none;
	font-size:12.0pt;
	font-family:"Arial MT",sans-serif;}
.MsoChpDefault
	{font-family:"Calibri",sans-serif;}
.MsoPapDefault
	{text-autospace:none;}
@page WordSection1
	{size:595.0pt 842.0pt;
	margin:28.0pt 23.0pt 14.0pt 23.0pt;}
div.WordSection1
	{page:WordSection1;}
-->
 .header {
  height: 100px;
  width:100%;
          text-align: center;
          padding: 20px;
          background-color: #333;
          color: #fff;
          border-bottom: 2px solid #ccc;
        }

        .header img {
          height: 50px;
        }
      
</style>

</head>

<body lang=EN-US style='word-wrap:break-word'>
<div class="header">
        <img src="https://s3.amazonaws.com/myrecords.in/colonelz-logo.png" alt="Project Logo" />
        <h2>${projectName}</h2>
      </div>
<div class=WordSection1 style='background-color: #f5f5f5;'>



<p class=MsoBodyText><span style='font-size:13.5pt;font-family:"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoBodyText style='margin-top:8.85pt'><span style='font-size:13.5pt;
font-family:"Times New Roman",serif'>&nbsp;</span></p>

<p class=MsoTitle><span style='color:#333333'>Meeting<span style='letter-spacing:
.1pt'> </span><span style='letter-spacing:-.1pt'>Details</span></span></p>

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

<p class=MsoNormal style='margin-left:50.0pt;line-height:14.35pt'><b><span
style='font-size:12.0pt;font-family:Roboto'>Client:<span style='letter-spacing:
-.6pt'> </span></span></b><span style='font-size:12.0pt'>${momData.attendees.client_name}  <span style='letter-spacing:-.8pt'> </span><span
style='letter-spacing:-.2pt'>                           </span></span><b><span
style='font-size:12.0pt;font-family:Roboto'>Organized<span style='letter-spacing:
-.3pt'> </span>By: </span></b><span style='font-size:12.0pt'>${momData.attendees.organisor}   </span></p>

<p class=MsoNormal style='margin-left:50.0pt;line-height:14.35pt'><span
style='font-size:12.0pt'>&nbsp;</span></p>

<p class=MsoNormal style='margin-left:50.0pt;line-height:14.35pt'><span
style='font-size:12.0pt'> </span><b><span style='font-size:12.0pt;font-family:
Roboto'>Designer: </span></b><span style='font-size:12.0pt'>${momData.attendees.designer}                                                        </span><b><span
style='font-size:12.0pt;font-family:Roboto'>Others: </span></b><span
style='font-size:12.0pt'>${momData.attendees.attendees}</span></p>

<p class=MsoBodyText>&nbsp;</p>

<p class=MsoBodyText style='margin-top:9.9pt'>&nbsp;</p>

<p class=MsoBodyText style='margin-top:0in;margin-right:44.3pt;margin-bottom:
0in;margin-left:42.5pt;margin-bottom:.0001pt;line-height:102%'><b><span
style='font-family:Roboto'>Remark </span></b>${momData.remark}<span style='letter-spacing:
-.2pt'> </span></p>

<p class=MsoBodyText style='margin-top:8.7pt'>&nbsp;</p>

<h1><span style='letter-spacing:-.1pt'>Files:</span></h1>

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
