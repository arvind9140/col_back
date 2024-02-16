
import { responseData } from "../../../utils/respounse.js";
import pdf from "html-pdf";



export const contractShare = async (req, res) => {
  const client_name = req.body.client_name;
  const client_email = req.body.client_email;
  const client_phone = req.body.client_phone;
  const project = req.body.client;
  const designer = req.body.designer;
  const designer_phone = req.body.designer_phone;
  const designer_email = req.body.designer_email;
  const site_address = req.body.site_address;
  const date = req.body.date;
  const type = req.query.type;

  if (type === "commercial") {
    const htmlTemplate = `
    <html>

<head>
    <meta http-equiv=Content-Type content="text/html; charset=utf-8">
    <meta name=Generator content="Microsoft Word 15 (filtered)">
    <style>
        <!--
        /* Font Definitions */
        @font-face {
            font-family: Wingdings;
            panose-1: 5 0 0 0 0 0 0 0 0 0;
        }

        @font-face {
            font-family: "Cambria Math";
            panose-1: 2 4 5 3 5 4 6 3 2 4;
        }

        @font-face {
            font-family: Calibri;
            panose-1: 2 15 5 2 2 2 4 3 2 4;
        }

        @font-face {
            font-family: Verdana;
            panose-1: 2 11 6 4 3 5 4 4 2 4;
        }

        @font-face {
            font-family: Tahoma;
            panose-1: 2 11 6 4 3 5 4 4 2 4;
        }

        @font-face {
            font-family: Cambria;
            panose-1: 2 4 5 3 5 4 6 3 2 4;
        }

        /* Style Definitions */
        p.MsoNormal,
        li.MsoNormal,
        div.MsoNormal {
            margin: 0in;
            font-size: 10.0pt;
            font-family: "Times New Roman", serif;
        }

        a:link,
        span.MsoHyperlink {
            color: blue;
            text-decoration: underline;
        }

        p.MsoListParagraph,
        li.MsoListParagraph,
        div.MsoListParagraph {
            margin-top: 0in;
            margin-right: 0in;
            margin-bottom: 10.0pt;
            margin-left: .5in;
            line-height: 115%;
            font-size: 11.0pt;
            font-family: "Calibri", sans-serif;
        }

        p.MsoListParagraphCxSpFirst,
        li.MsoListParagraphCxSpFirst,
        div.MsoListParagraphCxSpFirst {
            margin-top: 0in;
            margin-right: 0in;
            margin-bottom: 0in;
            margin-left: .5in;
            line-height: 115%;
            font-size: 11.0pt;
            font-family: "Calibri", sans-serif;
        }

        p.MsoListParagraphCxSpMiddle,
        li.MsoListParagraphCxSpMiddle,
        div.MsoListParagraphCxSpMiddle {
            margin-top: 0in;
            margin-right: 0in;
            margin-bottom: 0in;
            margin-left: .5in;
            line-height: 115%;
            font-size: 11.0pt;
            font-family: "Calibri", sans-serif;
        }

        p.MsoListParagraphCxSpLast,
        li.MsoListParagraphCxSpLast,
        div.MsoListParagraphCxSpLast {
            margin-top: 0in;
            margin-right: 0in;
            margin-bottom: 10.0pt;
            margin-left: .5in;
            line-height: 115%;
            font-size: 11.0pt;
            font-family: "Calibri", sans-serif;
        }

        p.xzvds,
        li.xzvds,
        div.xzvds {
            mso-style-name: xzvds;
            margin-right: 0in;
            margin-left: 0in;
            font-size: 12.0pt;
            font-family: "Times New Roman", serif;
        }

        span.vkif2 {
            mso-style-name: vkif2;
        }

        .MsoChpDefault {
            font-size: 10.0pt;
        }

        /* Page Definitions */
        @page WordSection1 {
            size: 595.3pt 841.9pt;
            margin: .5in 40.5pt 35.45pt .5in;
        }

        div.WordSection1 {
            page: WordSection1;
        }

        /* List Definitions */
        ol {
            margin-bottom: 0in;
        }

        ul {
            margin-bottom: 0in;
        }
        -->
    </style>

</head>

<body lang=EN-US link=blue vlink=purple style='word-wrap:break-word'>

    <div class=WordSection1>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><span lang=EN-IN
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'><img width=247 height=247 id="Picture 1"
                    src="logo.jpg"
                    alt="May be an image of text that says &quot;COLONELZ BUILDING RELATIONSHIPS&quot;"></span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>INTERIOR DESIGN
                        CONSULTANCY &amp; IMPLEMENTATION CONTRACT</span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif;background:yellow'>PROJ
                        XYZ</span></u></b><b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>,
                        GURGAON</span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><b><u><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'><span style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal align=center style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:2.85pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Client - <span style='background:yellow'>'${client_email}'</span></span></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Designer              - Ms Naomi Sahay</span></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Date                      - <span style='background:yellow'>23 / 11 /
                    2023</span></span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Quotation No         - CCPL /<span style='background:yellow'>23-24/ 23</span></span>
        </p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:1.5in;text-indent:-106.5pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Site Address         - <span style='background:yellow'>Xyz</span></span></p>

        <p class=MsoNormal style='margin-left:1.5in;text-indent:-106.5pt;line-height:
15.0pt'><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Client
                Contact        - </span><span lang=EN-IN style='font-size:11.0pt;font-family:
"Verdana",sans-serif;background:yellow'>Ms ABC: +91 0123456789; </span><a href="mailto:anupriya51204@yahoo.com"><span
                    style='color:windowtext;background:
yellow;text-decoration:none'> </span><span lang=EN-IN style='font-size:11.0pt;
font-family:"Verdana",sans-serif;background:yellow'>email @gmail.com</span></a><span lang=EN-IN style='font-size:11.0pt;font-family:"Verdana",sans-serif;background:
yellow'> </span></p>

        <p class=MsoNormal style='margin-left:1.5in;line-height:15.0pt'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif;background:yellow'>  Mr
                ABC: </span><span lang=EN-IN style='font-size:11.0pt;font-family:"Verdana",sans-serif;
background:yellow'>+91 0123456789; </span><a href="mailto:email@yahoo.com"><span lang=EN-IN style='font-size:11.0pt;font-family:"Verdana",sans-serif;background:
yellow'>email@yahoo.com</span></a><span lang=EN-IN style='font-size:11.0pt;
font-family:"Verdana",sans-serif'> </span></p>

        <p class=MsoNormal style='line-height:15.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Designer Contact   - Ms Naomi Sahay: +91 84475
                00754; </span><a href="mailto:naomi@colonelz.com"><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>naomi@colonelz.com</span></a></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Scope of Work</span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:4.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>The Scope of work
                entails Interior Designing &amp; Implementation by Colonelz Constructions Pvt
                Ltd, represented by its Head Designs, Ms Naomi Sahay, (hereinafter known as “The
                Designer”), i.e., preparation of all drawings for the execution of works for
                the <span style='background:yellow'>PROJ XYZ of Company/Fanchise name, at Xyz,
                    Gurgaon</span>, represented by its Director, Ms <span style='background:yellow'>ABC</span>
                (hereinafter known as “The Client”). Details given above. </span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Part I.</span></u></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>         Interior
                Designing of the complete Space.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:1.0in;text-align:justify;text-indent:-1.0in'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Part II.</span></u></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>       Execution of
                the finalized Design as Approved by The Client.</span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><b><u><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'><span style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'><br clear=all
                        style='page-break-before:always'>
                </span></u></b>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Part I</span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>This is the Designing
                Part, which will be covered in 2 sections:</span></p>

        <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:1.0in;text-indent:-1.0in'><b><span style='font-family:"Verdana",sans-serif'>1.<span
                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span></b><b><span style='font-family:"Verdana",sans-serif'>Phase I –Conceptual
                    Stage, </span></b><span style='font-family:"Verdana",sans-serif'>i.e. Stage 1:</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:1.0in'><b><span style='font-family:"Verdana",sans-serif'>&nbsp;</span></b></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:56.7pt;text-indent:-28.35pt'><span style='font-family:"Verdana",sans-serif'>a.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><u><span style='font-family:"Verdana",sans-serif'>Presentation
                    Drawings:</span></u></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:2.5in;text-indent:-123.3pt;line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Furniture Layout
                Plan</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:2.5in;text-indent:-123.3pt;line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Presentation with
                Conceptual Pictures &amp; Sketches</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:12.0pt;margin-right:0in;
margin-bottom:12.0pt;margin-left:2.5in;text-indent:-123.3pt;line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Conceptual 3D
                Views:</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:92.15pt;text-indent:-7.1pt'><a name="_Hlk107490554"><span
                    style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                    </span></span><span style='font-family:"Verdana",sans-serif'>Exterior x 1 angle view with 1-2
                    design options</span></a></p>

        <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:92.15pt;text-indent:-7.1pt'><span style='font-family:Wingdings'>Ø<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Interior x 2 angle
                views with 1-2 finish options </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:28.35pt'><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>b.     <u>Civil
                    Work Drawings:</u></span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Zoning</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Floor
                Plan</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Elevations
                where required.</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Furniture
                Layout</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Electrical
                Layout</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Plumbing
                Layout</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Ceiling
                Layout</span></p>

        <p class=MsoNormal style='margin-left:85.05pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-left:.25in'><i><u><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:black'>(Please note: The spaces shall be
                        defined and finalized as per the space available at the site, and the final
                        furniture layout)</span></u></i></p>

        <p class=MsoNormal><i><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;
color:black'><span style='text-decoration:none'>&nbsp;</span></span></u></i></p>

        <p class=MsoNormal style='margin-left:85.05pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-indent:-.5in'><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>2.<span
                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span></b><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Phase
                    II –GFC Stage:</span></b></p>

        <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
12.0pt;margin-left:56.7pt;text-indent:-56.7pt'><span style='font-size:12.0pt;
line-height:115%;font-family:"Verdana",sans-serif'><span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>a.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><u><span style='font-family:"Verdana",sans-serif'>Stage 2: Design
                    Development Phase 1</span></u></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Detailed
                3D Views (with finalized details):</span></p>

        <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:92.15pt;text-indent:-7.1pt'><span style='font-family:Wingdings'>Ø<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Exterior x 2 angle
                views</span></p>

        <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
margin-bottom:12.0pt;margin-left:92.15pt;text-indent:-7.1pt'><span style='font-family:Wingdings'>Ø<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Interior x 6 angle
                views</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:56.7pt;text-indent:-56.7pt'><span style='font-size:12.0pt;
font-family:"Verdana",sans-serif'><span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>b.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Stage
                    3: Good for Construction (GFC) Drawings </span></u></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Furniture
                Layout incorporating all additions and changes requested</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Flooring
                Layout Plan</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Detailed
                Space Plan/Furniture Layout</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Floor
                Finish Detail</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Floor
                LVL Layout </span></p>

        <p class=MsoNormal style='margin-left:113.4pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Plumbing
                Details</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Water
                Supply Layout</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Drain
                Layout</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Elevations for plumbing points</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-left:113.4pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Reflected
                Ceiling Plan</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Ceiling
                Plan</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Ceiling
                Lighting Plan </span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Ceiling
                Finish Detail</span></p>

        <p class=MsoNormal style='margin-left:113.4pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Electrical
                Drawings </span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Looping
                Detail </span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Lighting Plan</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Electrical</span></p>

        <p class=MsoNormal style='margin-left:113.4pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Finishes Plan</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:113.4pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Elevations </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:85.05pt;text-indent:-28.35pt'><span style='font-size:11.0pt;
font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Woodwork
                Details:</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Fixed
                Furniture</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Wall
                Paneling</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Loose
                Furniture</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Moulding
                &amp; Detailing if any</span></p>

        <p class=MsoNormal style='margin-left:113.4pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Storages
                Details </span></p>

        <p class=MsoNormal style='margin-left:113.4pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:56.7pt;text-indent:-56.7pt'><span style='font-size:12.0pt;
font-family:"Verdana",sans-serif'><span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>c.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Stage
                4: Documents &amp; BOQs </span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Light
                fixtures BOQ</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Furniture
                BOQ</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Electrical
                BOQ</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Plumbing
                BOQ</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Tiling
                BOQ</span></p>

        <p class=MsoNormal style='margin-left:85.05pt;text-indent:-28.35pt'><span
                style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Furnishing
                BOQ</span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Part II</span></u></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'> </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:7.1pt;text-align:justify;text-indent:28.9pt'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>The Designer shall
                implement the Design as finalized with The Client, with Quality checks, coordination
                and supervision with all teams.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:7.1pt;text-align:justify;text-indent:28.9pt'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Fee Proposal</span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Designing will be
                done as per the following rate</span><span lang=EN-IN style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>s</span><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>;</span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Total cost for Designing
                and Supervision shall be</span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;
color:#202124;background:white'> </span><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;background:yellow'>INR XYZ</span></b><b><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif'>/excl. taxes (Rupees <span
                        style='background:yellow'>XYZ in WORDS</span> Only) </span></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>applicable solely to
                the “<span style='background:yellow'>XYZ Project” situated at “Xyz, Gurgaon</span>”.</span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>For all <span style='background:yellow'>XYZ
                    Projects</span> at other locations, the contract
                will be duly modified based on the Location &amp; the Scope of work.</span></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>The Client shall release respective payment instalments
                within 3 days from the date of completion of stage OR intimation from the
                Designer as elucidated below:</span></p>

        <b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'><br clear=all
                        style='page-break-before:always'>
                </span></u></b>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Designing Payment
                        Terms &amp; Condition</span></u></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><strong><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif;font-weight:normal'>1.<span
                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span></strong><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Design
                work shall commence within 2 Business days</span><span lang=EN-IN
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'> (Mon-Fri)</span><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'> from the date of
                receipt of Mobilization Advance &amp; Work Contract duly signed.</span></p>

        <p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>2.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Payment
                Terms:    </span></p>

        <p class=MsoListParagraphCxSpFirst style='margin-left:63.8pt;text-indent:-28.35pt'><span
                style='font-family:Wingdings;color:black'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif;color:black'>Booking
                    fee                                                           </span></b><span
                style='font-family:"Verdana",sans-serif;color:black'>- 35% of total Design Fees</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-left:63.8pt;text-indent:-28.35pt'><span
                style='font-family:Wingdings;color:black'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif;color:black'>On
                    Finalization of Furniture Layout</span></b><span style='font-family:"Verdana",sans-serif;
color:black'>                     - 50% of total Design fees</span></p>

        <p class=MsoListParagraph style='margin-top:0in;margin-right:0in;margin-bottom:
0in;margin-left:63.8pt;text-indent:-28.35pt;line-height:normal'><span style='font-family:Wingdings;color:black'>§<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif;color:black'>After
                    Finalization of Conceptual 3D Designs        - </span></b><span
                style='font-family:"Verdana",sans-serif;color:black'>70% of total Design Fees
                (ie, before the commencement of site execution)</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-left:63.8pt;text-indent:-28.35pt'><span
                style='font-family:Wingdings;color:black'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif;color:black'>After
                    Finalization of GFCs and 3Ds                       - </span></b><span
                style='font-family:"Verdana",sans-serif;color:black'>95% of total Design Fees </span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-left:63.8pt;text-indent:-28.35pt'><span
                style='font-family:Wingdings;color:black'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif;color:black'>After
                    handing over                                                - </span></b><span
                style='font-family:"Verdana",sans-serif;color:black'>05% of total Design Fees</span></p>

        <p class=MsoListParagraphCxSpLast style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:35.45pt;line-height:normal'><span style='font-family:"Verdana",sans-serif'><br>
                <a name="_Hlk116898916">The Client shall release respective payment instalments
                    within 3 days from the date of completion of stage OR intimation from the
                    Designer.</a></span></p>

        <p class=xzvds style='margin-top:0in;margin-right:0in;margin-bottom:0in;
margin-left:.5in;background:white;vertical-align:baseline'><strong><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif;font-weight:normal'>&nbsp;</span></strong>
        </p>

        <p class=xzvds style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-indent:-.5in;background:white;vertical-align:baseline'><span class=vkif2><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;
color:#3B3A3A'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span></span><strong><u><span lang=EN-IN style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:black'>Site Visit.</span></u></strong><strong><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;color:black;
font-weight:normal'> A total of 8 site visits are included in the cost. Any
                    visit thereafter will be chargeable @ ₹3000/ per visit for 2 hours on site.
                    Every additional 30 mins will be charged @ ₹500/ per half an hour. The
                    Designer’s design team shall be visiting as given above, to ascertain the
                    progress, quality etc. </span></strong></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>4.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>The
                price quoted is valid for 30 days from the date of Quotation &amp; may be
                revised at the time of finalization. </span></p>

        <p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>5.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>GST
                @ 18% will be additionally charged on the total fee. In case of any Policy
                Change by the Govt., Taxes &amp; duties will be charged as per actual.</span></p>

        <p class=MsoNormal style='margin-left:.5in;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>6.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Order
                once placed cannot be cancelled. In case of cancellation, the Fee till the
                stage of services prepared &amp; rendered shall be paid and cleared.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>7.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>The
                Designer agrees to abide by ‘<b>No Compete Agreement’,</b> in that they will
                not accept Designing works from any Competitor Franchise, opening similar
                Outlets of <span style='background:yellow'>XYZ, of Company/Franchise name</span>,
                for making similar Food &amp; Beverage Outlet. The Site pics will also not be
                used on Social Media or elsewhere, for One Year from the date of Handover of
                the Project, by The Designer.</span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>General Terms &amp;
                        Conditions</span></u></b></p>

        <p class=MsoNormal style='margin-bottom:12.0pt'><b><u><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>General Terms &amp; Conditions</span></u></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>1.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Scope</span></u></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>. Implementation Work
                shall be completed as per the plan mutually decided, which will be placed on a
                Pert Chart.  W will be the day of commencement of Work. All Sundays / days when
                work is not permitted to be done will be added to the timeline. As the entire
                work has to be done between 11 PM to 8 AM, the timelines will be worked out
                accordingly. All restrictions on work time will be added to the Work Plan. Day
                to Day Handling of the Commercial Site’s Real Estate Manager or the Building
                Management will be done by Colonelz. However, in case of any levies, disputes,
                etc., the same shall be handled by the Client.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>2.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Design
                        Finalisation</span></u></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Furniture
                    Layout</span></b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>-
                Minor changes are acceptable till 1 week after the finalization of layout. Any
                major changes / more than 2 changes shall be chargeable @ ₹ 4,000/ per major
                change, eg, each change in layout of furniture, incl modular furniture is
                considered as a major change. </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>LV,
                    Electrical &amp; False Ceiling Plans</span></b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>- Unlimited revisions allowed in the drawings
                until finalization. However, only 1-time minor changes are free of cost up to 5
                days from the date of finalization of plans. Any change thereafter shall be
                chargeable @ ₹,2,000/ per change. Any additional cost incurred to change the
                plan, shall be added to the Bills.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Fixed
                    Furniture</span></b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>-
                Unlimited revisions are allowed in the drawings until finalization. However,
                only 1-time minor changes are free of cost up to 3 days from date of
                finalization of plans. Any change thereafter shall be chargeable @ ₹ 2,000/ per
                change, provided the material for production has not been procured and / or
                resized as per the design to be implemented.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Loose
                    Furniture</span></b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>-
                Unlimited revisions are allowed in the drawings until finalization. However,
                only 1-time minor changes are free of cost up to 3 days from date of
                finalization of plans. Any change thereafter shall be chargeable @ ₹ 2,000/ per
                change. However, NO change is acceptable after 5 days, or once the frame is
                made, whichever is earlier.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Major
                    Changes. </span></b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'> In
                case of any major change in plan after the plans are frozen and / or work has
                commenced, will be reassessed, and considered as a new design/ drawing/ work.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:49.65pt;text-align:justify;text-indent:-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Orders
                    once confirmed / closed, cannot be cancelled and are 100% payable.</span></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>3.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>3D
                        Visualisation.</span></u></b></p>

        <p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:
-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Conceptual Stage- 2
                selected design options in 3D for each space as per views mentioned in Design
                Contract will be provided.</span></p>

        <p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:
-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Detail Finalization-
                2 selected finish combinations in 3D for each space as per views mentioned in
                Design Contract will be provided.</span></p>

        <p class=MsoNormal style='margin-left:49.65pt;text-align:justify;text-indent:
-14.2pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Revisions- minor
                revisions offered until finalization of design, will be free, thereafter
                chargeable; these will be chargeable @₹4000/ per render view.</span></p>

        <p class=MsoNormal style='margin-left:49.65pt;text-align:justify'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:35.45pt;text-align:justify;text-indent:0in'><i><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif;color:black'>Please
                    note major changes in the 3D after finalization lead to revisions in 2D
                    drawings and the project timeline.</span></i></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>4.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Changes
                    and Approvals. </span></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:35.45pt;text-align:justify;text-indent:-35.45pt'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Changes</span></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>. Any major change in
                the Furniture Layout / Toilets / Electrical &amp; other plan, leads to relook
                of the entire plan, and making of fresh drawings, which adds on to our timeline
                minimum 3 working days (Designer workdays are Monday to Friday). However, minor
                changes like an additional switch point at an existing place, which do not need
                major modifications in the plan, will be acceptable without delay clause.
                Changes in plans of Furniture and items to be customized, if requested to be
                changed by The Client, will be at Fresh Cost and added to the timeline also.
                The Client shall be responsible for any delay caused due to site restrictions /
                hindrances, etc.</span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:35.45pt;text-align:justify;text-indent:-35.45pt'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Approvals</span></b><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>. To keep the pace of
                work speedy approvals of materials is paramount. Any material, fixtures /
                fittings like Laminates,  ACs, Lights, tiles, electrical switches etc<b>,</b>
                shall be approved by the Client within 3 working days including the day of
                receiving the necessary files/ samples/ estimates, etc (files sent during
                working hours). Any further delay or keeping approvals on hold for any reason
                shall be added to the Project Timeline. </span></p>

        <p class=MsoListParagraph style='margin-bottom:12.0pt;text-align:justify;
text-indent:-.5in'><span style='font-family:"Verdana",sans-serif'>5.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><u><span style='font-family:"Verdana",sans-serif'>Supervision
                        of Execution.</span></u></b><span style='font-family:"Verdana",sans-serif'> <span
                    style='color:black;background:white'>The Designer’s team shall do periodic
                    supervision and provide regular guidance.</span></span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><b><span
                    style='font-size:11.0pt;font-family:"Verdana",sans-serif'>6.<span
                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span></b><b><u><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Project
                        Implementation and Completion.</span></u></b><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'> </span></b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif'>Implementation of Work will depend on the finalization
                of the Design and Plans. <b>This is Phase 2 of the Contract and commences once
                    the Designs are frozen. </b></span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:70.9pt;text-align:justify;text-indent:-35.45pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>As
                per the <b><i><u>scope discussed till date</u></i></b>, the project is likely
                to be completed within 50 Working days (<b>W+50). </b>W shall commence from day
                after the <b>Date of Signing of finalized BoQ, Finalized Furniture &amp; other
                    plans and Receipt of Project Implementation Mobilization Advance</b>. In case
                of major change in plans, the timeline shall be reassessed. </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:70.9pt;text-align:justify;text-indent:-35.45pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>W
                starts from the date of signing of this Contract, Signing of finalized BoQ
                &amp; payment of Execution Advance to the Company, signing of all three
                documents mandatory.  </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:70.9pt;text-align:justify;text-indent:-35.45pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>W
                is the day of commencement of Work. Sundays will be included in Workdays.
                However, Holidays (like Holi) / days when work is not permitted /restrictions
                imposed on working, due to any reason, will be added to the timeline. </span></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:70.9pt;text-align:justify;text-indent:-35.45pt'><span style='font-size:11.0pt;font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>The
                timeline also pertains to the <b><u>freezing of all designs</u></b>, except
                very limited revisions /changes, as elucidated earlier. All changes which may
                entail a change in Timeline will be communicated. A detailed timeline shall be
                shared<b>.</b></span></p>

        <p class=MsoListParagraphCxSpFirst style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-bottom:12.0pt;text-align:
justify;text-indent:-.5in'><span style='font-family:"Verdana",sans-serif'>7.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>Suspension /
                    Termination of Project. </span></b><span style='font-family:"Verdana",sans-serif'>If
                the Client suspends/terminates the work on the project, it will be communicated
                in writing by mail to biraj@colonelz.com. All payments for the works done as
                per the Work Schedule will be made within two working days, from the date of suspension/cancellation
                of the project</span><span lang=EN-IN style='font-family:"Verdana",sans-serif'>.</span><span
                style='font-family:"Verdana",sans-serif'> If No work is allowed on the Site for
                15 working days, by the Client or the Society, for whatever reason, the work
                shall be deemed as Suspended. If work is still NOT permitted for 30 days, it
                will be deemed as Termination. </span></p>

        <p class=MsoListParagraphCxSpLast style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Design Implementation
                        Payment Terms &amp; Conditions</span></u></b></p>

        <p class=MsoNormal align=center style='margin-bottom:12.0pt;text-align:center'><b><u><span
                        style='font-size:11.0pt;font-family:"Verdana",sans-serif'><span
                            style='text-decoration:none'>&nbsp;</span></span></u></b></p>

        <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:.5in;text-align:justify;text-indent:-.5in'><span style='font-size:
11.0pt;font-family:"Verdana",sans-serif'>1.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Work
                shall commence within 5 Business days from the date of receipt of Mobilization
                Advance &amp; Work Contract, duly signed.</span></p>

        <p class=MsoNormal style='margin-left:.5in;text-align:justify;text-indent:-.5in'><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif'>2.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Payment
                Terms for the execution is as mentioned below (X being the completion time):</span></p>

        <p class=MsoListParagraphCxSpFirst style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:1.0in;text-align:justify;text-indent:-.5in;
line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>25%</span></b><span
                style='font-family:"Verdana",sans-serif'> Mobilization Advance based on
                Proposed Plan.</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:1.0in;text-align:justify;text-indent:-.5in;
line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>30%</span></b><span
                style='font-family:"Verdana",sans-serif'> on W plus 21 X.</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:1.0in;text-align:justify;text-indent:-.5in;
line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>35%</span></b><span
                style='font-family:"Verdana",sans-serif'> on W plus 35 X.</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:1.0in;text-align:justify;text-indent:-.5in;
line-height:normal'><span style='font-family:Symbol'>·<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>5%</span></b><span
                style='font-family:"Verdana",sans-serif'> on Completion of Scope of Works.</span></p>

        <p class=MsoListParagraphCxSpMiddle style='margin-top:0in;margin-right:0in;
margin-bottom:0in;margin-left:1.0in;text-align:justify;line-height:normal'><span
                style='font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoListParagraphCxSpMiddle style='text-align:justify;text-indent:-.5in'><span
                style='font-family:"Verdana",sans-serif'>3.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><span style='font-family:"Verdana",sans-serif'>Price quoted for
                the execution will be deemed valid for the duration of the proposed
                implementation. However, there may be rate revision in case the prices of input
                materials go up by 10% or more. GST @ 18% will be charged additionally, on the
                total fee. In case of any Policy Change by the Govt, Taxes &amp; duties will be
                charged as per actual. </span></p>

        <p class=MsoListParagraphCxSpMiddle style='text-align:justify;text-indent:-.5in'><span
                style='font-family:"Verdana",sans-serif'>4.<span
                    style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span></span><b><span style='font-family:"Verdana",sans-serif'>Orders once
                    confirmed and closed, cannot be cancelled.</span></b></p>

        <p class=MsoListParagraphCxSpLast style='margin-bottom:12.0pt;text-align:justify'><span
                style='font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>__________________   
                                                                          __________________              </span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Ms.
                <span style='background:yellow'>ABC</span>                                   
                                                                 Ms.
                Naomi Sahay                       </span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif'>Client
                                                                                                      Principal
                Designer                     </span></p>

        <p class=MsoNormal><span lang=EN-IN style='font-size:11.0pt;font-family:"Verdana",sans-serif'>&nbsp;</span></p>

        <p class=MsoNormal style='background:white'><b><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:#222222'>Bank Details: </span></b></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:#222222'>Bank            -        HDFC
                Bank Account</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:#222222'>A/c Holder    –        </span><span
                style='font-size:11.0pt;font-family:"Verdana",sans-serif;color:#C00000'>COLONELZ
                CONSTRUCTIONS PVT LTD</span></p>

        <p class=MsoNormal style='background:white'><span style='font-size:11.0pt;
font-family:"Verdana",sans-serif;color:#222222'>A/c no.         –        <span
                    style='background:white'>50200007351695</span></span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;
color:#222222'>IFSC            –        HDFC0000043</span></p>

        <p class=MsoNormal><span style='font-size:11.0pt;font-family:"Verdana",sans-serif;
color:#222222'>&nbsp;</span></p>

        <p class=MsoNormal><span lang=EN-IN style='font-size:12.0pt;font-family:"Arial",sans-serif;
color:#222222'>&nbsp;</span></p>

    </div>

</body>

</html>
    `;
    const pdfOptions = {
      format: "A4",
      border: {
        top: "1cm",
        right: "1cm",
        bottom: "1cm",
        left: "1cm",
      },
    };
    pdf.create(htmlTemplate, pdfOptions).toStream((err, stream) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.setHeader("Content-Type", "application/pdf");
        stream.pipe(res);
      }
    });
  } else if (type === "residential") {
  } else {
    return responseData(res, "", 400, false, "Invalid type");
  }
};
