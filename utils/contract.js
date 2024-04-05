
export function residentialContract(
        project,
        city,
        client_name,
        client_phone,
        client_email,
        site_address,
        date,
        quotation,
        design_charges_per_sft,
        cover_area_in_sft,
        design_total_charges,
        design_total_charges_in_words,
        design_discount,
        design_total_charges_after_discount,
        design_total_charges_after_discount_in_words,
        terrace_and_balcony_charges_per_sft,
        terrace_and_balcony_total_charges_discount,
        terrace_and_balcony_area_in_sft,
        terrace_and_balcony_total_charges,
        terrace_and_balcony_total_charges_in_words,
        total_design_charges,
        total_design_charges_in_words
) {
        const htmlTemplate = `
    <html>

<head>
        <meta http-equiv=Content-Type content="text/html; charset=utf-8">
        <meta name=Generator content="Microsoft Word 15 (filtered)">
        <title>Microsoft Word - Int Design</title>
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
                        font-family: Verdana;
                        panose-1: 2 11 6 4 3 5 4 4 2 4;
                }

                @font-face {
                        font-family: Tahoma;
                        panose-1: 2 11 6 4 3 5 4 4 2 4;
                }

                /* Style Definitions */
                p.MsoNormal,
                li.MsoNormal,
                div.MsoNormal {
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                h1 {
                        mso-style-link: "Heading 1 Char";
                        margin-top: 0in;
                        margin-right: 0in;
                        margin-bottom: 0in;
                        margin-left: 4.2pt;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                p.MsoTitle,
                li.MsoTitle,
                div.MsoTitle {
                        margin-top: 13.25pt;
                        margin-right: 5.05pt;
                        margin-bottom: 0in;
                        margin-left: 4.2pt;
                        text-align: center;
                        text-autospace: none;
                        font-size: 14.0pt;
                        font-family: "Verdana", sans-serif;
                        font-weight: bold;
                        text-decoration: underline;
                }

                p.MsoBodyText,
                li.MsoBodyText,
                div.MsoBodyText {
                        mso-style-link: "Body Text Char";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                a:link,
                span.MsoHyperlink {
                        color: blue;
                        text-decoration: underline;
                }

                a:visited,
                span.MsoHyperlinkFollowed {
                        color: purple;
                        text-decoration: underline;
                }

                p.MsoAcetate,
                li.MsoAcetate,
                div.MsoAcetate {
                        mso-style-link: "Balloon Text Char";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 8.0pt;
                        font-family: "Tahoma", sans-serif;
                }

                p.MsoListParagraph,
                li.MsoListParagraph,
                div.MsoListParagraph {
                        margin-top: 0in;
                        margin-right: 0in;
                        margin-bottom: 0in;
                        margin-left: 90.05pt;
                        text-indent: -28.5pt;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                p.TableParagraph,
                li.TableParagraph,
                div.TableParagraph {
                        mso-style-name: "Table Paragraph";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                span.BodyTextChar {
                        mso-style-name: "Body Text Char";
                        mso-style-link: "Body Text";
                        font-family: "Verdana", sans-serif;
                }

                span.BalloonTextChar {
                        mso-style-name: "Balloon Text Char";
                        mso-style-link: "Balloon Text";
                        font-family: "Tahoma", sans-serif;
                }

                span.Heading1Char {
                        mso-style-name: "Heading 1 Char";
                        mso-style-link: "Heading 1";
                        font-family: "Verdana", sans-serif;
                        font-weight: bold;
                }

                .MsoChpDefault {
                        font-family: "Calibri", sans-serif;
                }

                .MsoPapDefault {
                        text-autospace: none;
                }

                /* Page Definitions */
                @page WordSection1 {
                        size: 595.5pt 842.0pt;
                        margin: 79.0pt 66.0pt 37.0pt 67.0pt;
                }

                div.WordSection1 {
                        page: WordSection1;
                }

                @page WordSection2 {
                        size: 595.5pt 842.0pt;
                        margin: 69.0pt 66.0pt 37.0pt 67.0pt;
                }

                div.WordSection2 {
                        page: WordSection2;
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

                <p class=MsoBodyText><span style='font-size:10.0pt;font-family:"Times New Roman",serif'> </span></p>

                <p class=MsoBodyText style='margin-top:.15pt'><span style='font-size:6.0pt;
font-family:"Times New Roman",serif'>&nbsp;</span></p>

                <p class=MsoBodyText style='margin-left:164.8pt'><span lang=EN-IN
                                style='font-size:10.0pt;font-family:"Times New Roman",serif'><img width=172 height=122
                                        id=image1.jpeg
                                        src="https://collegemanage.s3.ap-south-1.amazonaws.com/image001.jpg"></span>
                </p>

                <p class=MsoBodyText><span style='font-size:10.0pt;font-family:"Times New Roman",serif'>&nbsp;</span>
                </p>

                <p class=MsoBodyText><span style='font-size:10.0pt;font-family:"Times New Roman",serif'>&nbsp;</span>
                </p>

                <p class=MsoBodyText><span style='font-size:10.0pt;font-family:"Times New Roman",serif'>&nbsp;</span>
                </p>

                <p class=MsoTitle><u>INTERIOR<span style='letter-spacing:.05pt'> </span>DESIGN<span
                                        style='letter-spacing:-.15pt'> </span>CONSULTANCY<span style='letter-spacing:
-.1pt'> </span>CONTRACT</u></p>

                <p class=MsoNormal align=center style='margin-top:11.85pt;margin-right:5.05pt;
margin-bottom:0in;margin-left:4.2pt;margin-bottom:.0001pt;text-align:center'><b><u><span
                                                style='font-size:12.0pt;'>${project}, ${city}</span></u></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-top:.25pt'><b><span style='font-size:10.5pt'>&nbsp;</span></b></p>

                <h1 style='margin-left:5.0pt'>Client                   –<span style='letter-spacing:
-.15pt'> </span><span style=''>${client_name[0]}</span></h1>

                <p class=MsoBodyText style='margin-top:.5pt'><b><span style='font-size:9.5pt'>&nbsp;</span></b></p>

                <p class=MsoNormal style='margin-left:5.0pt'><b>Designer              -<span
                                        style='letter-spacing:-.15pt'> </span>Ms.<span style='letter-spacing:-.15pt'>
                                </span>Naomi
                                Sahay</b></p>

                <p class=MsoBodyText style='margin-top:.4pt'><b><span style='font-size:9.5pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:247.55pt;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt;line-height:200%'>Date                      -
                        <span style=''>${date}</span>
                </p>
                <pclass=MsoBodyText style='margin-top:.05pt;margin-right:247.55pt;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt;line-height:200%>
                <span style='letter-spacing:
.05pt'> </span><span style='letter-spacing:-.05pt;margin-right:40.55pt;'>Quotation No. </span> -<span
                                style='letter-spacing:-.25pt'> </span>CCPL<span style='letter-spacing:-.3pt'>
                        </span>/<span style=''>${quotation}</span></p>

                <p class=MsoBodyText style='margin-left:5.0pt;line-height:150%'>Site Address          -
                        <span style=''>${site_address}</span>
                </p>

                <p class=MsoBodyText style='margin-top:.05pt'>&nbsp;</p>

                <p class=MsoBodyText style='margin-left:5.0pt'>Client<span style='letter-spacing:
-.15pt'> </span>Contact        - <span style=''>${client_name[0]}</span>;</p>

                <p class=MsoBodyText style='margin-top:.25pt'>&nbsp;</p>

                <p class=MsoBodyText style='margin-left:120.6pt'><span >+91${client_phone[0]},  <span class=MsoHyperlink>${client_email[0]}</span></span> </p>

                <p class=MsoBodyText style='margin-top:.2pt'><span style='font-size:8.0pt'>&nbsp;</span></p>

                <p class=MsoBodyText style='margin-top:5.05pt;margin-right:0in;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt'>Colonelz’ Contact   - Ms. Naomi
                        Sahay, Principal Designer;</p>

                <p class=MsoBodyText style='margin-top:.4pt'><span style='font-size:9.5pt'>&nbsp;</span></p>

                <p class=MsoBodyText align=center style='margin-left:4.2pt;text-align:center'>+91
                        8447500754, <a href="mailto:naomi@colonelz.com"><span
                                        style='color:blue'>naomi@colonelz.com</span></a></p>

                <p class=MsoBodyText style='margin-top:.15pt'><span style='font-size:13.5pt'>&nbsp;</span></p>

                <h1 align=center style='margin-top:5.05pt;margin-right:5.05pt;margin-bottom:
0in;margin-left:4.2pt;margin-bottom:.0001pt;text-align:center'><u>Scope<span style='letter-spacing:-.1pt'> </span>of
                                Work</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt'><b><span style='font-size:9.5pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-left:5.0pt;text-align:justify'><a name="_Hlk135137180">The Scope of
                                work entails Interior Designing and Implementation
                                by Colonelz Constructions Pvt Ltd, with Corporate Office at D11, Vipul World, Sector
                                48, Sohna Road, Gurgaon, Haryana- 122018, represented by Ms Naomi Sahay,<span
                                        style='letter-spacing:.05pt'> </span>(hereinafter<span style='letter-spacing:
.05pt'> </span>known<span style='letter-spacing:.05pt'> </span>as<span style='letter-spacing:.05pt'> </span><b>The<span
                                                style='letter-spacing:.05pt'> </span>Designer</b>).
                                The Scope shall include<span style='letter-spacing:.05pt'> </span>preparation<span
                                        style='letter-spacing:.05pt'> </span>of<span style='letter-spacing:.05pt'>
                                </span>all<span style='letter-spacing:.05pt'> </span>drawings<span
                                        style='letter-spacing:.05pt'>
                                </span>for<span style='letter-spacing:.05pt'> </span>the<span style='letter-spacing:
.05pt'> </span>execution of the designs finalised and the implementation of finalised
                                designs by the Colonelz Team, in<span style='letter-spacing:-.3pt'> </span>the<span
                                        style='letter-spacing:-.3pt'> </span>apartment<span
                                        style='letter-spacing:-.4pt'>
                                </span>of<span style='letter-spacing:-.3pt'> </span><span >${client_name[0]},<span style='letter-spacing:-.25pt'> r/o </span>${site_address}</span><span
                                        style='letter-spacing:-.25pt'> </span>(hereinafter known as <b>The Client</b>).
                                Design scope shall also cover<span style='letter-spacing:.05pt'> </span>periodic<span
                                        style='letter-spacing:-.4pt'> </span>supervision<span style='letter-spacing:
-.35pt'> during the</span><span style='letter-spacing:-.3pt'> </span>implementation<span style='letter-spacing:-.5pt'>
                                </span>of<span style='letter-spacing:-.25pt'> </span>the<span
                                        style='letter-spacing:-.25pt'> </span>same.</a></p>

                <p class=MsoBodyText style='margin-top:.5pt'><span style='font-size:9.5pt'> </span></p>

                <p class=MsoNormal style='margin-left:5.0pt;text-align:justify'><b><u>Part<span
                                                style='letter-spacing:-.05pt'> </span>I.</u>       <span style='letter-spacing:
2.1pt'> </span></b>Interior Designing of the<span style='letter-spacing:-.05pt'>
                        </span>complete<span style='letter-spacing:-.05pt'> </span>space.</p>

                <p class=MsoBodyText style='margin-top:.4pt'><span style='font-size:9.5pt'>&nbsp;</span></p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:6.0pt;margin-bottom:
0in;margin-left:77.0pt;margin-bottom:.0001pt;text-indent:-1.0in'><b><u>Part<span style='letter-spacing:-.1pt'>
                                        </span>II.</u>       </b>Implementation and
                        Execution of the finalised Design as detailed by The Designer and approved by
                        The Client.</p>

        </div>

        <span style='font-size:11.0pt;font-family:"Verdana",sans-serif'><br clear=all style='page-break-before:always'>
        </span>

        <div class=WordSection2>

                <h1 align=center style='margin-top:3.75pt;margin-right:5.0pt;margin-bottom:
0in;margin-left:4.2pt;margin-bottom:.0001pt;text-align:center'><u>Part I</u></h1>

                <p class=MsoBodyText style='margin-top:.5pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-left:5.0pt;line-height:115%'>This is<span
                                style='letter-spacing:-.15pt'> </span>the Designing Part,<span
                                style='letter-spacing:.1pt'> </span>which<span style='letter-spacing:-.15pt'>
                        </span>will<span style='letter-spacing:-.15pt'> </span>be covered<span style='letter-spacing:
-.05pt'> </span>in<span style='letter-spacing:-.1pt'> </span>2 parts,<span style='letter-spacing:.05pt'> </span>as<span
                                style='letter-spacing:.05pt'> </span>below:</p>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-left:33.3pt;text-indent:-28.35pt;
line-height:115%'><b>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></b><b>Phase<span style='letter-spacing:-.1pt'> </span>I<span
                                        style='letter-spacing:-.15pt'> </span>–Design Stage,<span style='letter-spacing:
-.2pt'> </span></b>i.e., Stage<span style='letter-spacing:-.05pt'> </span>1:</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:61.6pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'>a.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><u>Presentation<span style='letter-spacing:-.15pt'> </span>Drawings:</u></p>

                <p class=MsoListParagraph style='margin-top:6.65pt;line-height:115%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Furniture<span style='letter-spacing:-.1pt'> </span>Layout<span
                                style='letter-spacing:-.05pt'> </span>Plan</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Presentation<span style='letter-spacing:-.1pt'> </span>with<span
                                style='letter-spacing:-.15pt'> </span>Conceptual Pictures &amp;<span
                                style='letter-spacing:-.1pt'> </span>Sketches</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Conceptual 3D Views:</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>4 x Bedrooms                 -<span style='letter-spacing:-.2pt'>
                        </span>1<span style='letter-spacing:.1pt'> </span>view each</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Music room<span style='letter-spacing:-.05pt'>                    </span>-
                        1<span style='letter-spacing:.1pt'> </span>view</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Study<span style='letter-spacing:-.05pt'>                            
                        </span>-
                        <span style='letter-spacing:-.15pt'>1</span> view
                </p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Foyer                             -<span style='letter-spacing:
-.1pt'> </span>1 view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Living room                    - <span style='letter-spacing:
-.1pt'>1</span> view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Outdoor Terrace             - 1 view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Family lounge                - 1 view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Mandir<span style='letter-spacing:-.15pt'>                          
                        </span>-<span style='letter-spacing:-.1pt'> </span>1<span style='letter-spacing:.05pt'>
                        </span>view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Kitchen<span style='letter-spacing:-.05pt'>                         
                        </span>-<span style='letter-spacing:-.15pt'> </span>1 view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Dining<span style='letter-spacing:.05pt'> </span>area<span
                                style='letter-spacing:.05pt'>                    </span>-<span
                                style='letter-spacing:-.1pt'> </span>1 view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>5 x Toilets                      -<span style='letter-spacing:
-.15pt'> </span>1<span style='letter-spacing:.1pt'> </span>view each</p>

                <p class=MsoListParagraph style='margin-top:1.95pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:0in;line-height:115%'>&nbsp;</p>

                <p class=MsoListParagraph style='margin-left:61.65pt;text-indent:-28.4pt;
line-height:115%'>b.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><u>Civil Work<span style='letter-spacing:-.2pt'> </span>Drawings:</u></p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Floor Plan</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Electrical<span style='letter-spacing:-.15pt'> </span>Layout</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>HVAC ducting layout</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>False<span style='letter-spacing:-.05pt'> </span>Ceiling<span
                                style='letter-spacing:.05pt'> </span>Plan</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Toilet<span style='letter-spacing:-.05pt'> </span>Layout</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <h1 style='margin-left:41.0pt;text-indent:-.5in;line-height:115%'>2.<span
                                style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Phase II<span style='letter-spacing:-.1pt'> </span>–<span style='letter-spacing:-.15pt'>
                        </span>Interior<span style='letter-spacing:-.15pt'>
                        </span>Fit Out Stage:</h1>

                <p class=MsoListParagraph style='margin-top:6.75pt;margin-right:0in;margin-bottom:
0in;margin-left:61.6pt;margin-bottom:.0001pt;text-indent:-29.55pt;line-height:
115%'><span style='font-size:12.0pt;line-height:115%'>a.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><u>Stage 2:<span style='letter-spacing:.1pt'> </span>Design<span
                                        style='letter-spacing:-.1pt'> </span>Development<span style='letter-spacing:
-.2pt'> </span>Phase<span style='letter-spacing:-.05pt'> </span>1</u></p>

                <p class=MsoListParagraph style='margin-top:6.35pt;line-height:115%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Detailed<span style='letter-spacing:-.2pt'> </span>3D<span
                                style='letter-spacing:-.2pt'> </span>Views<span style='letter-spacing:-.05pt'>
                        </span>(with<span style='letter-spacing:-.05pt'> </span>finalised<span style='letter-spacing:
-.05pt'> </span>details):</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>4 x Bedrooms                 -<span style='letter-spacing:-.2pt'>
                        </span>2<span style='letter-spacing:.1pt'> </span>views each</p>

                <p class=MsoListParagraph style='margin-top:2.1pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>4 x Dressing/wardrobe   -<span style='letter-spacing:-.2pt'> </span>2<span
                                style='letter-spacing:.1pt'> </span>views each <br>
                        (One internal and one external of each wardrobe)</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Music room<span style='letter-spacing:-.05pt'>                   
                        </span>-<span style='letter-spacing:-.2pt'> </span>2<span style='letter-spacing:.1pt'>
                        </span>views
                </p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Study<span style='letter-spacing:-.05pt'>                           
                        </span>-<span style='letter-spacing:-.2pt'> </span>2<span style='letter-spacing:.1pt'>
                        </span>views
                </p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Foyer                             -<span style='letter-spacing:
-.2pt'> </span>1<span style='letter-spacing:.1pt'> </span>view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Living room                    -<span style='letter-spacing:-.2pt'>
                        </span>3<span style='letter-spacing:.1pt'> </span>views</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Outdoor terrace area      -<span style='letter-spacing:-.2pt'>
                        </span>4<span style='letter-spacing:.1pt'> </span>views</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Family lounge                -<span style='letter-spacing:-.2pt'>
                        </span>2<span style='letter-spacing:.1pt'> </span>views</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Mandir<span style='letter-spacing:-.15pt'>                          
                        </span>-<span style='letter-spacing:-.2pt'> </span>1<span style='letter-spacing:.1pt'>
                        </span>view</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Kitchen<span style='letter-spacing:-.05pt'>                         
                        </span>-<span style='letter-spacing:-.2pt'> </span>2<span style='letter-spacing:.1pt'>
                        </span>views</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Dining<span style='letter-spacing:.05pt'> </span>Room<span
                                style='letter-spacing:.05pt'>                  </span>-<span style='letter-spacing:
-.2pt'> </span>2<span style='letter-spacing:.1pt'> </span>isometric views</p>

                <p class=MsoListParagraph style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:113.0pt;margin-bottom:.0001pt;text-indent:-22.95pt'><span style='font-family:Wingdings'>Ø<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>5 x Toilet                       -<span style='letter-spacing:
-.15pt'> </span>2<span style='letter-spacing:.1pt'> </span>views each</p>

                <p class=MsoListParagraph style='margin-left:113.0pt;text-indent:-22.95pt'><span
                                style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Balcony                         -<span style='letter-spacing:
-.2pt'> </span>1<span style='letter-spacing:.1pt'> </span>view</p>

                <p class=MsoBodyText style='margin-top:.05pt'><span style='font-size:11.5pt'>&nbsp;</span></p>

                <p class=MsoBodyText style='margin-top:.05pt'><span style='font-size:11.5pt'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
12.0pt;margin-left:61.6pt;text-indent:-25.95pt;line-height:115%'><span
                                style='font-size:12.0pt;line-height:115%'>b.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><u>Stage<span style='letter-spacing:-.1pt'> </span>3: Good<span
                                        style='letter-spacing:-.05pt'> </span>for<span style='letter-spacing:-.05pt'>
                                </span>Construction<span style='letter-spacing:-.05pt'> </span>(GFC)<span
                                        style='letter-spacing:.05pt'> </span>Drawings</u>
                        – Working drawings that give detailed dimensions, graphical information that
                        can be used by a contractor/site teams to construct the works, or by suppliers
                        to fabricate components of the works.</p>

                <p class=MsoListParagraph style='line-height:150%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Furniture<span style='letter-spacing:-.1pt'> </span>Layout</p>

                <p class=MsoListParagraph style='margin-top:6.65pt;line-height:115%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Toilet Details (if needed)</p>

                <p class=MsoListParagraph style='margin-top:6.55pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Plumbing Layout</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Water<span style='letter-spacing:.05pt'> </span>Supply<span
                                style='letter-spacing:-.15pt'> </span>Plan</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Drain<span style='letter-spacing:-.1pt'> </span>Layout</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wall<span style='letter-spacing:-.15pt'> </span>Elevations</p>

                <p class=MsoListParagraph style='margin-top:6.8pt;line-height:150%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Reflected<span style='letter-spacing:-.15pt'> </span>Ceiling Plan</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>False<span style='letter-spacing:-.05pt'> </span>Ceiling<span
                                style='letter-spacing:.05pt'> </span>Plan</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Ceiling<span style='letter-spacing:-.05pt'> </span>Lighting<span
                                style='letter-spacing:-.2pt'> </span>Plan</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Ceiling Finish<span style='letter-spacing:-.15pt'> </span>layout</p>

                <p class=MsoListParagraph align=right style='margin-top:6.65pt;margin-right:
333.3pt;margin-bottom:0in;margin-left:60.05pt;margin-bottom:.0001pt;text-align:
right;text-indent:-28.35pt;line-height:150%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Electrical<span style='letter-spacing:-.15pt'> </span>Drawings</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Looping Plan</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wall<span style='letter-spacing:-.15pt'> </span>Lighting<span
                                style='letter-spacing:-.15pt'> </span>Plan</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wall<span style='letter-spacing:-.2pt'> </span>Electrical</p>

                <p class=MsoListParagraph style='margin-top:6.7pt;line-height:150%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Wall<span style='letter-spacing:-.15pt'> </span>Finishes<span
                                style='letter-spacing:.05pt'> </span>Plan</p>

                <p class=MsoListParagraph style='margin-top:6.55pt;line-height:150%'><span
                                style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Woodwork<span style='letter-spacing:-.05pt'> </span>Details:</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Fixed<span style='letter-spacing:-.1pt'> </span>Furniture</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wardrobes<span style='letter-spacing:-.05pt'> </span>&amp;
                        Storages</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Kitchen<span style='letter-spacing:-.05pt'> </span>Storages</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wall<span style='letter-spacing:-.05pt'> </span>Paneling</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Loose Furniture</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:118.4pt;margin-bottom:.0001pt;text-indent:-28.35pt;line-height:
115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Wooden<span style='letter-spacing:.05pt'> </span>Ceiling<span
                                style='letter-spacing:-.1pt'> </span>Detail</p>

                <p class=MsoListParagraph style='margin-left:118.4pt;text-indent:-28.35pt;
line-height:115%'><span style='font-family:Wingdings'>Ø<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Moulding<span style='letter-spacing:-.15pt'> </span>&amp;<span
                                style='letter-spacing:.05pt'> </span>Detailing<span style='letter-spacing:-.15pt'>
                        </span>if<span style='letter-spacing:-.1pt'> </span>any.</p>

                <p class=MsoBodyText style='margin-top:.5pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-left:61.6pt;text-indent:-24.75pt;
line-height:150%'><span style='font-size:12.0pt;line-height:150%'>c.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Stage<span style='letter-spacing:-.1pt'> </span>4:<span
                                style='letter-spacing:.05pt'> </span>Documents<span style='letter-spacing:-.15pt'>
                        </span>&amp;<span style='letter-spacing:-.1pt'> </span>BOQs</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Light<span style='letter-spacing:-.1pt'> </span>fixtures<span
                                style='letter-spacing:-.05pt'> </span>BOQ</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Furniture<span style='letter-spacing:-.2pt'> </span>BOQ</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Toilet Fixtures<span style='letter-spacing:-.05pt'> </span>BOQ</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Tiling<span style='letter-spacing:-.1pt'> </span>BOQ</p>

                <p class=MsoListParagraph style='line-height:115%'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Furnishing<span style='letter-spacing:-.15pt'> </span>BOQ</p>

                <p class=MsoNormal style='line-height:115%'>&nbsp;</p>

                <h1 align=center style='margin-top:9.45pt;margin-right:5.05pt;margin-bottom:
0in;margin-left:4.2pt;margin-bottom:.0001pt;text-align:center'><u>Part<span style='letter-spacing:-.05pt'>
                                </span>II</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt'><b><span style='font-size:9.5pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.75pt;margin-bottom:
0in;margin-left:12.05pt;margin-bottom:.0001pt;text-align:justify;text-indent:
28.9pt'>The Designer shall implement the Design as finalised with The Client.
                        The Designer shall ensure Quality checks, as also coordination with all
                        stakeholders and supervision of all site teams.</p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.75pt;margin-bottom:
0in;margin-left:12.05pt;margin-bottom:.0001pt;text-align:justify;text-indent:
28.9pt'><span style='font-size:13.0pt'>&nbsp;</span></p>

                <p class=MsoBodyText style='margin-top:.35pt'><span style='font-size:17.5pt'>&nbsp;</span></p>

                             <h1 align=center style='margin-right:5.0pt;text-align:center;line-height:115%'><u>Fee
                                Proposal</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-left:5.0pt;line-height:115%'>Designing<span
                                style='letter-spacing:-.15pt'> </span>will<span style='letter-spacing:-.1pt'> </span>be
                        done as<span style='letter-spacing:.05pt'> </span>per<span style='letter-spacing:
.05pt'> </span>the following<span style='letter-spacing:-.1pt'> </span>rates:</p>

                <h1 style='margin-top:3.75pt;margin-right:5.75pt;margin-bottom:0in;margin-left:
41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:-.25in;line-height:
115%'><span style='font-weight:normal'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Design charges @ ₹<span style=''>${design_charges_per_sft}</span>/ Sft
                        x Covered area @<span style=''>${cover_area_in_sft}</span> Sft = ₹<span
                                style=''>${design_total_charges}</span>/-<span style='letter-spacing:.05pt;
font-weight:normal'> </span><span style='font-weight:normal'>(Rupees <span style=''> ${design_total_charges_in_words}
                                </span> Only) excl. of<span style='letter-spacing:.05pt'> </span>taxes and
                                Terrace &amp; Balcony area.</span></h1>

                <h1 style='margin-top:3.75pt;margin-right:5.75pt;margin-bottom:0in;margin-left:
4.2pt;margin-bottom:.0001pt;text-align:justify;line-height:115%'><span style='font-weight:normal'>&nbsp;</span></h1>

                <h1 style='margin-top:3.75pt;margin-right:5.75pt;margin-bottom:0in;margin-left:
41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:-.25in;line-height:
115%'><span style='font-weight:normal'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Design charges after Special Armed Forces Discount (20% i.e. ₹<span
                                style=''>${design_discount}</span>/-) = ₹<span
                                style=''>${design_total_charges_after_discount}</span>/-<span style='font-weight:normal'> (Rupees <span
                                        style=''>${design_total_charges_after_discount_in_words}
        </span> Only) excl. of<span style='letter-spacing:.05pt'>
                                </span>taxes.</span></h1>

                <p class=MsoListParagraph style='line-height:115%'>&nbsp;</p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.85pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-.25in;line-height:115%'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                        </span><b>Balconies / Terrace at 60% of the discounted rate (₹<span
                                        style=''>${terrace_and_balcony_charges_per_sft}</span>/Sft) ie @ ₹<span
                                        style=''>${terrace_and_balcony_total_charges_discount}</span>/
                                Sft x Terrace &amp; Balcony area @<span style=''>${terrace_and_balcony_area_in_sft}</span>
                                Sft = ₹<span style=''> ${terrace_and_balcony_total_charges}</span> /-</b> (Rupees <b><span
                                        style=''>${terrace_and_balcony_total_charges_in_words}</span></b> Only) excl. of<span
                                style='letter-spacing:.05pt'> </span>taxes.</p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.85pt;margin-bottom:
0in;margin-left:0in;margin-bottom:.0001pt;text-align:justify;line-height:115%'>&nbsp;</p>

                <h1 style='margin-top:3.75pt;margin-right:5.75pt;margin-bottom:0in;margin-left:
41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:-.25in;line-height:
115%'><span style='font-weight:normal'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                                </span></span>Final Design charges as per the site areas mentioned above are ₹<span
                                style=';font-weight:normal'> ${design_total_charges_after_discount}</span> /- (Covered area) + ₹<span
                                style=';font-weight:normal'> ${terrace_and_balcony_total_charges}</span> /- (Terrace &amp;
                        Balcony area) = ₹<span style=';font-weight:normal'> ${total_design_charges}</span>
                        /- <span style='font-weight:normal'>(Rupees <span style=''>${total_design_charges_in_words}
                                    </span> Only) excl. of<span style='letter-spacing:.05pt'>
                                </span>taxes.</span></h1>

                <h1 style='margin-top:3.75pt;margin-right:5.75pt;margin-bottom:0in;margin-left:
0in;margin-bottom:.0001pt;text-align:justify;line-height:115%'><span style='font-weight:normal'>&nbsp;</span></h1>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.85pt;margin-bottom:
0in;margin-left:59.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-.25in;line-height:115%'>a)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                        </span>Billing shall be as per covered area, as per measurement on-site.</p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:5.85pt;margin-bottom:
0in;margin-left:59.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-.25in;line-height:115%'>b)<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;
                        </span>The covered area includes all internal and external walls.</p>

                <h1 style='margin-top:0in;margin-right:5.1pt;margin-bottom:0in;margin-left:
0in;margin-bottom:.0001pt;line-height:115%'><u><span style='text-decoration:
 none'>&nbsp;</span></u></h1>


                <h1 align=center style='margin-right:5.1pt;text-align:center;line-height:115%'><u>Designing<span
                                        style='letter-spacing:-.05pt'> </span>Payment<span
                                        style='letter-spacing:-.25pt'>
                                </span>Terms<span style='letter-spacing:.05pt'> </span>&amp;<span
                                        style='letter-spacing:-.2pt'> </span>Conditions</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.95pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Interior Designing<span style='letter-spacing:.05pt'> process </span>shall<span
                                style='letter-spacing:.15pt'> </span>commence<span style='letter-spacing:.25pt'>
                        </span>within<span style='letter-spacing:.15pt'> </span>5<span style='letter-spacing:.35pt'>
                        </span>Business<span style='letter-spacing:.25pt'>
                        </span>days<span style='letter-spacing:.25pt'> </span>(Mon-Fri)<span
                                style='letter-spacing:.25pt'> </span>from<span style='letter-spacing:.25pt'>
                        </span>the<span style='letter-spacing:.25pt'> </span>date of receipt<span style='letter-spacing:
-.15pt'> </span>of Mobilization Advance<span style='letter-spacing:.05pt'> </span>&amp;<span
                                style='letter-spacing:-.1pt'> </span>Work<span style='letter-spacing:-.15pt'>
                        </span>Contract<span style='letter-spacing:-.15pt'> </span>duly<span
                                style='letter-spacing:-.15pt'> </span>signed.</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Payment<span style='letter-spacing:-.1pt'> </span>Terms:</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:68.8pt;margin-bottom:.0001pt;line-height:115%'><span style='font-family:Wingdings'>§<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                                </span></span><b>Booking<span style='letter-spacing:-.1pt'>
                                </span>fee                                                           </b>-
                        35%<span style='letter-spacing:-.1pt'> </span>of<span style='letter-spacing:
-.1pt'> </span>total</p>

                <p class=MsoBodyText style='margin-top:2.0pt;margin-right:0in;margin-bottom:
0in;margin-left:68.8pt;margin-bottom:.0001pt;line-height:115%'>Design<span style='letter-spacing:-.05pt'> </span>Fees
                </p>

                <p class=MsoListParagraph style='margin-top:1.95pt;margin-right:19.2pt;
margin-bottom:0in;margin-left:68.8pt;margin-bottom:.0001pt;text-indent:-28.45pt;
line-height:115%'><span style='font-family:Wingdings'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                                </span></span><b>On<span style='letter-spacing:-.1pt'> </span>Finalisation of<span
                                        style='letter-spacing:-.05pt'> </span>Furniture<span style='letter-spacing:
-.15pt'> </span>Layout                     </b>- 50% of total<span style='letter-spacing:-3.7pt'> </span>Design fees
                </p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:19.0pt;margin-bottom:
0in;margin-left:68.8pt;margin-bottom:.0001pt;text-indent:-28.45pt;line-height:
115%'><span style='font-family:Wingdings'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                                </span></span><b>After<span style='letter-spacing:-.05pt'> </span>Finalisation
                                of<span style='letter-spacing:-.2pt'> </span>Conceptual<span style='letter-spacing:
-.2pt'> </span>3D<span style='letter-spacing:-.15pt'> </span>Designs       - </b>70%
                        of total<span style='letter-spacing:-3.7pt'> </span>Design<span style='letter-spacing:-.05pt'>
                        </span>Fees<span style='letter-spacing:.1pt'> </span>(ie,
                        before the<span style='letter-spacing:-.05pt'> </span>commencement<span
                                style='letter-spacing:-.2pt'> </span>of site<span style='letter-spacing:-.05pt'>
                        </span>execution)</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:19.0pt;margin-bottom:
0in;margin-left:68.8pt;margin-bottom:.0001pt;text-indent:-28.45pt;line-height:
115%'><span style='font-family:Wingdings'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                                </span></span><b>After<span style='letter-spacing:-.05pt'> </span>Finalisation
                                of<span style='letter-spacing:-.2pt'> </span>GFCs and<span style='letter-spacing:
-.15pt'> </span>3Ds                       - </b>95% of total<span style='letter-spacing:-3.7pt'> </span>Design<span
                                style='letter-spacing:-.05pt'>
                        </span>Fees</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:19.0pt;margin-bottom:
0in;margin-left:68.8pt;margin-bottom:.0001pt;text-indent:-28.45pt;line-height:
115%'><span style='font-family:Wingdings'>§<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                                </span></span><b>After<span style='letter-spacing:-.05pt'> </span>handing<span
                                        style='letter-spacing:-.1pt'>
                                </span>over                                                -
                        </b>5 % of total <span style='letter-spacing:-3.7pt'> </span>Design<span
                                style='letter-spacing:-.05pt'> </span>Fees</p>

                <p class=MsoBodyText style='line-height:115%'>&nbsp;</p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:30.8pt;margin-bottom:
0in;margin-left:40.35pt;margin-bottom:.0001pt;line-height:115%'>The Client
                        shall release respective payment installments within 3 days<span style='letter-spacing:-3.75pt'>
                        </span>from the date<span style='letter-spacing:
-.1pt'> </span>of<span style='letter-spacing:-.15pt'> </span>completion<span style='letter-spacing:-.05pt'>
                        </span>of<span style='letter-spacing:-.15pt'> </span>stage<span style='letter-spacing:-.1pt'> as
                        </span>intimated by the<span style='letter-spacing:
-.05pt'> </span>Designer.</p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:30.8pt;margin-bottom:
0in;margin-left:40.35pt;margin-bottom:.0001pt;line-height:115%'>&nbsp;</p>

                <p class=MsoBodyText style='margin-top:.55pt;line-height:115%'><span
                                style='font-size:10.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:15.55pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;
line-height:115%'><span style='color:#3B3A3A'>3.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b><u>Site Visit.</u> </b>Up to 10 visits to the site, by The
                        Designer’s <b>Design Team<span style='letter-spacing:-3.65pt'>        </span></b> shall
                        be made to ensure suitable progress, quality, and other checks.<span
                                style='letter-spacing:.05pt'> </span>However,<span style='letter-spacing:-.05pt'>
                        </span>the Site<span style='letter-spacing:-.05pt'> </span>Supervisor would<span
                                style='letter-spacing:-.15pt'> </span>be<span style='letter-spacing:-.05pt'> on
                                the Site </span>regularly.</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'>4.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>The price<span style='letter-spacing:2.05pt'> </span>quoted<span
                                style='letter-spacing:1.95pt'> </span>is<span style='letter-spacing:1.95pt'>
                        </span>valid<span style='letter-spacing:1.95pt'> </span>for<span style='letter-spacing:1.95pt'>
                                30 days </span>from<span style='letter-spacing:2.15pt'> </span>the<span
                                style='letter-spacing:2.05pt'> </span>date<span style='letter-spacing:1.95pt'>
                        </span>of<span style='letter-spacing:2.0pt'> </span>Quotation<span
                                style='letter-spacing:1.95pt'>
                        </span>&amp;<span style='letter-spacing:2.05pt'> </span>may<span style='letter-spacing:1.95pt'>
                        </span>be revised at the time of<span style='letter-spacing:-.15pt'> </span>finalisation.</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.85pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-.5in;line-height:115%'>5.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Order<span style='letter-spacing:.2pt'> </span>once<span style='letter-spacing:.25pt'>
                        </span>placed<span style='letter-spacing:.2pt'> </span>cannot<span style='letter-spacing:.25pt'>
                        </span>be<span style='letter-spacing:.2pt'> </span>cancelled.<span style='letter-spacing:.25pt'>
                        </span>In<span style='letter-spacing:.35pt'> </span>case<span style='letter-spacing:.2pt'>
                        </span>of<span style='letter-spacing:.2pt'> </span>cancellation,<span
                                style='letter-spacing:.3pt'> the </span>Fee<span style='letter-spacing:.35pt'>
                        </span>till<span style='letter-spacing:.1pt'> </span>the<span style='letter-spacing:-3.7pt'>
                                         </span>stage<span style='letter-spacing:-.05pt'> </span>of services
                        prepared<span style='letter-spacing:-.05pt'> </span>&amp; rendered shall<span
                                style='letter-spacing:-.15pt'> </span>be paid<span style='letter-spacing:-.15pt'>
                        </span>and<span style='letter-spacing:-.15pt'> </span>cleared.</p>

                <p class=MsoBodyText style='margin-top:.35pt;line-height:115%'><span
                                style='font-size:14.5pt;line-height:115%'>&nbsp;</span></p>

                <h1 align=center style='margin-right:5.05pt;text-align:center;line-height:115%'><u>General<span
                                        style='letter-spacing:-.2pt'> </span>Terms<span style='letter-spacing:.05pt'>
                                </span>&amp;<span style='letter-spacing:-.15pt'> </span>Conditions</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.65pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-.5in;line-height:115%'>1.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><b><u>Scope</u></b>. Implementation Work shall be completed by The
                        Designer as per<span style='letter-spacing:.05pt'> </span>the designs
                        finalised. W will be the day of commencement of Work. All<span style='letter-spacing:.05pt'>
                        </span>Sundays / Holidays / days when work is not
                        permitted to be done will be<span style='letter-spacing:.05pt'> </span>added<span
                                style='letter-spacing:.05pt'> </span>to the<span style='letter-spacing:.05pt'>
                        </span>timeline.<span style='letter-spacing:.05pt'> </span>A Workday is considered as 8<span
                                style='letter-spacing:.05pt'> </span>working hours,<span style='letter-spacing:
.05pt'> </span>excluding 1 hour of mandatory lunch &amp; tea breaks, during the
                        day. All<span style='letter-spacing:.05pt'> </span>restrictions on work time
                        like half-day work, work stoppage due to Force<span style='letter-spacing:.05pt'>
                        </span>Majeure / Govt. Orders / Regulatory bodies’ orders, will be added to<span
                                style='letter-spacing:-.15pt'> </span>the Work Time<span style='letter-spacing:
-.15pt'> </span>Plan.</p>

                <h1 style='margin-top:3.75pt;margin-right:0in;margin-bottom:0in;margin-left:
41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:115%'><span style='font-weight:normal'>2.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><u>Design<span style='letter-spacing:-.1pt'> </span>Finalisation</u>
                        <span style='font-weight:normal'>It is reiterated that once designs are finalised,
                                any changes requested thereafter, causes restart of the entire design process
                                for that area, all over again. Hence, it is in the interest of both parties
                                that due deliberation is given to finalise the designs and thereafter, restrict
                                the scope for change, unless extremely necessary. Charges for the same are
                                listed below:</span>
                </h1>

                <p class=MsoBodyText style='margin-top:.5pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b>Furniture<span style='letter-spacing:.05pt'> </span>Layout</b>-<span
                                style='letter-spacing:
.05pt'> </span>Minor<span style='letter-spacing:.05pt'> </span>changes<span style='letter-spacing:.05pt'>
                        </span>are<span style='letter-spacing:.05pt'> </span>acceptable<span
                                style='letter-spacing:.05pt'> </span>till<span style='letter-spacing:.05pt'>
                        </span>1<span style='letter-spacing:.05pt'> </span>week<span style='letter-spacing:.05pt'>
                        </span>after<span style='letter-spacing:-3.75pt'> </span>finalisation<span style='letter-spacing:
-.2pt'> </span>of<span style='letter-spacing:-.15pt'> </span>layout.<span style='letter-spacing:-.15pt'>
                        </span>Major<span style='letter-spacing:-.15pt'>
                        </span>changes<span style='letter-spacing:-.05pt'> </span>/<span style='letter-spacing:-.4pt'>
                        </span>more<span style='letter-spacing:-.15pt'> </span>than<span style='letter-spacing:-.25pt'>
                        </span>2<span style='letter-spacing:-.2pt'> Minor
                        </span>changes<span style='letter-spacing:-.25pt'> </span>shall<span
                                style='letter-spacing:-.25pt'> </span>be<span style='letter-spacing:-3.75pt'>
                        </span>chargeable
                        @ ₹ 2,000/ per Major Change / more than two Minor Changes, eg, each change in
                        layout of<span style='letter-spacing:.05pt'> </span>furniture, incl<span
                                style='letter-spacing:-.15pt'> </span>modular<span style='letter-spacing:-.1pt'>
                        </span>furniture is<span style='letter-spacing:-.15pt'> </span>considered<span
                                style='letter-spacing:-.05pt'> </span>as<span style='letter-spacing:-.15pt'> </span>a
                        Major Change.</p>

                <p class=MsoBodyText style='margin-top:.25pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b>LV,<span style='letter-spacing:-.7pt'> </span>Electrical<span style='letter-spacing:
-.7pt'> </span>&amp;<span style='letter-spacing:-.7pt'> </span>False<span style='letter-spacing:-.65pt'>
                                </span>Ceiling<span style='letter-spacing:-.7pt'>
                                </span>Plans</b>-<span style='letter-spacing:-.6pt'> </span>Unlimited<span
                                style='letter-spacing:-.7pt'> </span>revisions<span style='letter-spacing:-.7pt'>
                                are </span>allowed<span style='letter-spacing:-.65pt'> </span>in<span
                                style='letter-spacing:-.7pt'> </span>the<span style='letter-spacing:-3.75pt'>
                        </span>drawings
                        until finalisation. However, only 1-time minor change, free<span style='letter-spacing:-3.75pt'>
                        </span>of cost up to 5 days from the date of finalisation
                        of plans, is acceptable. Any change<span style='letter-spacing:.05pt'> </span>thereafter,
                        shall be chargeable @ ₹2,000/ per change. Any additional<span style='letter-spacing:
.05pt'> </span>cost<span style='letter-spacing:-.05pt'> </span>incurred due to<span style='letter-spacing:-.1pt'> the
                        </span>changed<span style='letter-spacing:
-.05pt'> </span>plan,<span style='letter-spacing:-.05pt'> </span>shall<span style='letter-spacing:-.15pt'> </span>be
                        added to<span style='letter-spacing:
-.1pt'> </span>the<span style='letter-spacing:-.05pt'> </span>Bills.</p>

                <p class=MsoBodyText style='margin-top:.35pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b>Fixed
                                Furniture</b>- Unlimited revisions are allowed in the drawings until<span
                                style='letter-spacing:.05pt'> </span>finalisation.<span style='letter-spacing:
-.3pt'> </span>However,<span style='letter-spacing:-.3pt'> </span>only<span style='letter-spacing:-.35pt'>
                        </span>1-time<span style='letter-spacing:-.2pt'>
                        </span>minor<span style='letter-spacing:-.3pt'> </span>change is<span
                                style='letter-spacing:-.25pt'> </span>free<span style='letter-spacing:-.2pt'>
                        </span>of<span style='letter-spacing:-.3pt'> </span>cost<span style='letter-spacing:-.3pt'>
                        </span>up<span style='letter-spacing:-.3pt'> </span>to<span style='letter-spacing:-.05pt'>
                        </span>3<span style='letter-spacing:-3.75pt'> </span>days from the date of finalisation of
                        plans. Any change thereafter shall be<span style='letter-spacing:.05pt'> </span>chargeable
                        @ ₹ 2,000/ per change, provided the material for production<span style='letter-spacing:-3.75pt'>
                        </span>has<span style='letter-spacing:.05pt'> </span>not<span style='letter-spacing:.05pt'>
                        </span>been<span style='letter-spacing:.05pt'> </span>procured<span
                                style='letter-spacing:.05pt'> </span>and/or<span style='letter-spacing:.05pt'>
                        </span>resized<span style='letter-spacing:.05pt'> </span>as<span style='letter-spacing:.05pt'>
                        </span>per<span style='letter-spacing:.05pt'> </span>the<span style='letter-spacing:.05pt'>
                        </span>design<span style='letter-spacing:.05pt'> </span>to<span style='letter-spacing:.05pt'>
                        </span>be<span style='letter-spacing:-3.75pt'> </span>implemented. In case any order has gone
                        into production/material has been procured, the cost for the same, shall be
                        borne by The Client.</p>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:5.75pt;
margin-bottom:0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b>Loose
                                Furniture</b>- Unlimited revisions are allowed in the drawings until<span
                                style='letter-spacing:.05pt'> </span>finalisation.<span style='letter-spacing:
-.3pt'> </span>However,<span style='letter-spacing:-.3pt'> </span>only<span style='letter-spacing:-.35pt'>
                        </span>1-time<span style='letter-spacing:-.2pt'>
                        </span>minor<span style='letter-spacing:-.3pt'> </span>change is free<span
                                style='letter-spacing:-.2pt'> </span>of<span style='letter-spacing:-.3pt'>
                        </span>cost<span style='letter-spacing:-.3pt'> </span>up<span style='letter-spacing:-.3pt'>
                        </span>to<span style='letter-spacing:-.05pt'> </span>3<span style='letter-spacing:-3.75pt'>
                        </span>days
                        from the date of finalisation of plans. Any change thereafter shall be<span
                                style='letter-spacing:.05pt'> </span>chargeable @ ₹ 2,000/ per change. However,
                        NO change is acceptable<span style='letter-spacing:.05pt'> </span>after<span
                                style='letter-spacing:-.05pt'> </span>5 days,<span style='letter-spacing:.05pt'>
                        </span>or once<span style='letter-spacing:-.15pt'> </span>the<span style='letter-spacing:-.1pt'>
                        </span>frame<span style='letter-spacing:-.05pt'> </span>is
                        made,<span style='letter-spacing:.05pt'> </span>whichever is<span style='letter-spacing:-.2pt'>
                        </span>earlier. In case any order has gone into
                        production/material has been procured, the cost for the same, shall be borne by
                        The Client.</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span><b>Major<span style='letter-spacing:-.6pt'> </span>Changes.<span
                                        style='letter-spacing:2.75pt'>
                                </span></b>In<span style='letter-spacing:-.55pt'> </span>case<span
                                style='letter-spacing:-.45pt'> </span>of<span style='letter-spacing:-.6pt'>
                        </span>any<span style='letter-spacing:-.7pt'> </span>major<span style='letter-spacing:-.7pt'>
                        </span>change<span style='letter-spacing:-.5pt'> </span>in the<span
                                style='letter-spacing:-.6pt'> </span>plan<span style='letter-spacing:-.6pt'>
                        </span>after<span style='letter-spacing:-.55pt'> </span>the<span style='letter-spacing:-.6pt'>
                        </span>plans<span style='letter-spacing:-.6pt'> </span>are<span style='letter-spacing:-3.75pt'>
                        </span>frozen<span style='letter-spacing:-.45pt'>
                        </span>and/or<span style='letter-spacing:-.55pt'> </span>work<span
                                style='letter-spacing:-.55pt'> </span>has<span style='letter-spacing:-.55pt'>
                        </span>commenced,<span style='letter-spacing:-.45pt'> </span>will<span
                                style='letter-spacing:-.5pt'> </span>be<span style='letter-spacing:-.55pt'>
                        </span>reassessed,<span style='letter-spacing:
-.45pt'> </span>and<span style='letter-spacing:-.55pt'> </span>considered<span style='letter-spacing:-3.75pt'>
                        </span>as a<span style='letter-spacing:-.15pt'>
                        </span>new design/drawing/work.</p>

                <p class=MsoBodyText style='margin-top:.1pt;line-height:115%'><span
                                style='font-size:10.0pt;line-height:115%'>&nbsp;</span></p>

                <h1 style='margin-top:0in;margin-right:5.75pt;margin-bottom:0in;margin-left:
54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:-14.3pt;
line-height:115%'><span style='font-family:Symbol;font-weight:normal'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Orders
                        once confirmed / closed, cannot be cancelled and are<span style='letter-spacing:
.05pt'> </span>100%<span style='letter-spacing:-.2pt'> </span>payable.</h1>

                <h1 style='margin-right:5.75pt;text-align:justify;line-height:115%'>&nbsp;</h1>

                <p class=MsoBodyText style='margin-top:.5pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'><b>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></b><b><u>3D<span style='letter-spacing:-.15pt'> </span>Visualisation</u></b></p>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.9pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Conceptual
                        Stage- 2 selected design options in 3D for each space as per<span
                                style='letter-spacing:-3.75pt'> </span>views mentioned in<span
                                style='letter-spacing:-.15pt'> </span>Design Contract will<span
                                style='letter-spacing:-.15pt'> </span>be<span style='letter-spacing:-.05pt'>
                        </span>provided.</p>

                <p class=MsoNormal style='margin-right:5.9pt;text-align:justify;line-height:
115%'>&nbsp;</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
0in;line-height:115%'><span lang=EN-IN><img border=0 width=566 height=49
                                        src="Colonelz_Residential%20Int%20Design%20Contract_Mr%20ABC,%20Noida_13122023_files/image002.png"
                                        alt="Please note, major changes in the 3D after finalisation lead to revisions in 2D drawings and the project timeline."></span>
                </p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Detail<span style='letter-spacing:-.65pt'> </span>Finalisation-<span
                                style='letter-spacing:
-.5pt'> </span>2<span style='letter-spacing:-.65pt'> </span>selected<span style='letter-spacing:-.6pt'>
                        </span>finish<span style='letter-spacing:-.6pt'> </span>combinations<span
                                style='letter-spacing:-.45pt'> </span>in<span style='letter-spacing:-.6pt'>
                        </span>3D<span style='letter-spacing:-.45pt'> </span>for<span style='letter-spacing:-.55pt'>
                        </span>each<span style='letter-spacing:-.6pt'> </span>space<span style='letter-spacing:-.55pt'>
                        </span>as<span style='letter-spacing:-3.75pt'> </span>per<span style='letter-spacing:-.05pt'>
                        </span>views
                        mentioned<span style='letter-spacing:-.05pt'> </span>in<span style='letter-spacing:
-.15pt'> </span>Design Contract will<span style='letter-spacing:-.15pt'> </span>be<span style='letter-spacing:-.05pt'>
                        </span>provided.</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;text-indent:
0in;line-height:115%'>&nbsp;</p>

                <p class=MsoListParagraph style='margin-top:.1pt;margin-right:5.75pt;
margin-bottom:0in;margin-left:54.65pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-14.3pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>Revisions.
                        Minor<span style='letter-spacing:-.6pt'> </span>revisions<span style='letter-spacing:-.55pt'>
                        </span>offered<span style='letter-spacing:-.65pt'>
                        </span>until<span style='letter-spacing:-.8pt'> </span>finalisation<span
                                style='letter-spacing:-.55pt'> </span>of<span style='letter-spacing:-.65pt'>
                        </span>design,<span style='letter-spacing:-.65pt'> </span>will<span
                                style='letter-spacing:-.6pt'> </span>be<span style='letter-spacing:-.6pt'>
                        </span>free,<span style='letter-spacing:-3.75pt'>
                        </span>thereafter chargeable. These will be chargeable @₹3500/ per render<span
                                style='letter-spacing:.05pt'> </span>view.</p>

                <p class=MsoBodyText style='margin-top:.25pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:3.2pt;margin-right:5.85pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-.5in;line-height:115%'>4.<span
                                style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Client shall be responsible for any delay caused due to site restrictions
                        /<span style='letter-spacing:.05pt'> </span>hindrances, delay in approving
                        materials, or keeping approvals on hold for any<span style='letter-spacing:
.05pt'> </span>reason.</p>

                <p class=MsoListParagraph style='margin-top:3.2pt;margin-right:5.85pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:0in;line-height:115%'><b><u>Supervision<span style='letter-spacing:
.05pt'> </span>of<span style='letter-spacing:.05pt'> </span>Execution.</u><span style='letter-spacing:.05pt'>
                                </span></b>The<span style='letter-spacing:.05pt'>
                        </span>Designer’s<span style='letter-spacing:.05pt'> </span>team<span
                                style='letter-spacing:.05pt'> </span>shall<span style='letter-spacing:.05pt'>
                        </span>do<span style='letter-spacing:.05pt'> </span>periodic<span style='letter-spacing:.05pt'>
                        </span>supervision<span style='letter-spacing:-.05pt'> </span>and<span
                                style='letter-spacing:-.15pt'> </span>provide<span style='letter-spacing:-.05pt'>
                        </span>regular guidance. Supervision till the Original Timeline planned shall
                        be complementary. <a name="_Hlk135152879">10 Days delay beyond the original
                                timeline, shall be acceptable. Beyond that, there will be a Supervision cost @
                                ₹1,000/ per day, till Handover.</a> <span style='color:black;background:white'> </span>
                </p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.85pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;text-indent:
0in;line-height:115%'>&nbsp;</p>

                <p class=MsoListParagraph style='margin-top:3.75pt;margin-right:5.9pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-.5in;line-height:115%'><b>5.<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></b><b><u>Project Implementation and Completion.</u> </b>Implementation
                        of Work will<span style='letter-spacing:-3.75pt'> </span>depend on the
                        finalisation of Design and Plans. Project Implementation is <b>Phase 2 of the
                                Contract and Commences once the Designs are frozen, i.e. after completion of
                                the DESIGN PHASE, ie Phase I.</b></p>

                <p class=MsoListParagraph style='margin-top:3.75pt;margin-right:5.9pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:0in;line-height:115%'><b>&nbsp;</b></p>

                <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:54.65pt;text-align:justify;text-indent:-14.3pt;line-height:115%;
text-autospace:ideograph-numeric ideograph-other'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>As per the scope discussed till date, the project is likely to be
                        completed within 150 Working days (<b>W+ 150) </b>from the <b>Date of Signing
                                of the Finalised BoQ, Finalised Furniture &amp; other plans and Receipt of
                                Project Implementation Mobilization Advance</b>. In case of a major change in
                        plans, the timeline shall be reassessed. </p>

                <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:54.65pt;text-align:justify;text-indent:-14.3pt;line-height:115%;
text-autospace:ideograph-numeric ideograph-other'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>To Commence W period, all three conditions need to be met, i.e., Signing
                        of this Contract, Signing of finalised BoQ and Payment of Execution Advance to
                        the Company. </p>

                <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:54.65pt;text-align:justify;text-indent:-14.3pt;line-height:115%;
text-autospace:ideograph-numeric ideograph-other'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>W is the day of commencement of Work. Sundays will not be
                        included in Work days. Similarly, Holidays (like Holi)/days when work is not
                        permitted/restrictions are imposed on working, due to any reason, will also be
                        added to the timeline. </p>

                <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:54.65pt;text-align:justify;text-indent:-14.3pt;line-height:115%;
text-autospace:ideograph-numeric ideograph-other'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>The timeline also pertains to the freezing of all designs, except
                        very limited revisions /changes, as elucidated earlier. All changes that may
                        entail changes in the Timeline will be communicated. A detailed timeline shall
                        be shared<b>.</b></p>

                <p class=MsoNormal style='margin-top:0in;margin-right:0in;margin-bottom:12.0pt;
margin-left:54.65pt;text-align:justify;text-indent:-14.3pt;line-height:115%;
text-autospace:ideograph-numeric ideograph-other'><span style='font-family:
Symbol'>·<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>As detailed above, W shall be deemed to commence from the Date of
                        Signing of the finalised BoQ, Finalised Furniture and other Plans and receipt
                        of Project Implementation Mobilization Advance. All delays due to whatsoever
                        reason shall be communicated on the <b>“ <span style=''>${project}</span>”</b>
                        group and preferably on the emails as in this document. After accounting and
                        adjusting for all delays, the Final Completion Date shall be arrived at.</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:56.7pt;margin-bottom:.0001pt;text-align:justify;text-indent:
-16.35pt;line-height:115%'><span style='font-family:Symbol'>·<span
                                        style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span></span>A Workday is considered as 8 working hours, excluding 1 hour of<span
                                style='letter-spacing:.05pt'> </span>mandatory<span style='letter-spacing:-.8pt'>
                        </span>lunch &amp;<span style='letter-spacing:-.9pt'> </span>tea breaks.<span
                                style='letter-spacing:-.85pt'> </span>Work<span style='letter-spacing:-.9pt'>
                        </span>breaks<span style='letter-spacing:-.75pt'> </span>during<span
                                style='letter-spacing:-.9pt'>
                        </span>the<span style='letter-spacing:-.9pt'> </span>day<span style='letter-spacing:
-.9pt'> </span>or<span style='letter-spacing:-.75pt'> </span>as<span style='letter-spacing:-.65pt'>
                        </span>specified<span style='letter-spacing:
-3.75pt'> </span>by the society’s rules &amp; and regulations add to the
                        timeline. The timeline<span style='letter-spacing:.05pt'> </span>also<span
                                style='letter-spacing:.25pt'> </span>pertains<span style='letter-spacing:.35pt'>
                        </span>to<span style='letter-spacing:.35pt'> the </span>freezing<span
                                style='letter-spacing:.2pt'> </span>of<span style='letter-spacing:.35pt'>
                        </span>all<span style='letter-spacing:.25pt'> </span>designs,<span style='letter-spacing:.4pt'>
                        </span>except<span style='letter-spacing:.35pt'> </span>very<span style='letter-spacing:.35pt'>
                        </span>limited<span style='letter-spacing:.35pt'>
                        </span>revisions /changes. All changes that may entail changes in the Timeline
                        will be<span style='letter-spacing:.05pt'> </span>communicated.<span
                                style='letter-spacing:-.1pt'> </span>A<span style='letter-spacing:.05pt'>
                        </span>detailed
                        timeline shall<span style='letter-spacing:-.15pt'> </span>be<span style='letter-spacing:-.05pt'>
                        </span>shared.</p>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:5.75pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-.5in;line-height:115%'>6.<span
                                style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><b><u>Suspension<span style='letter-spacing:.05pt'> </span>/<span
                                                style='letter-spacing:.05pt'> </span>Termination<span style='letter-spacing:
.05pt'> </span>of<span style='letter-spacing:.05pt'> </span>Project</u>.<span style='letter-spacing:.05pt'>
                                </span></b>If<span style='letter-spacing:.05pt'> </span>the<span
                                style='letter-spacing:.05pt'> </span>Client<span style='letter-spacing:.05pt'>
                        </span>suspends<span style='letter-spacing:.05pt'> </span>/<span style='letter-spacing:.05pt'>
                        </span>terminates
                        the work on the project, it will be communicated in writing on<span
                                style='letter-spacing:.05pt'> </span>mail<span style='letter-spacing:-.65pt'>
                        </span>to<span style='letter-spacing:-.5pt'> </span><a href="mailto:biraj@colonelz.com"><b><span
                                                style='color:windowtext;text-decoration:none'>biraj@colonelz.com</span></b><span
                                        style='color:windowtext;text-decoration:none'>.<span style='letter-spacing:
-.45pt'> </span></span></a>All<span style='letter-spacing:-.55pt'> </span>payments<span style='letter-spacing:-.55pt'>
                        </span>for<span style='letter-spacing:-.55pt'> </span>the<span style='letter-spacing:-.55pt'>
                        </span>works<span style='letter-spacing:-.55pt'>
                        </span>done<span style='letter-spacing:-.5pt'> </span>as<span style='letter-spacing:
-.4pt'> </span>per<span style='letter-spacing:-.5pt'> </span>Work<span style='letter-spacing:-3.75pt'>
                        </span>Schedule<span style='letter-spacing:
-.9pt'> </span>will<span style='letter-spacing:-.9pt'> </span>be<span style='letter-spacing:-.85pt'> </span>made<span
                                style='letter-spacing:-1.0pt'> </span>within<span style='letter-spacing:-1.0pt'>
                        </span>two<span style='letter-spacing:-.8pt'> </span>working<span style='letter-spacing:-.85pt'>
                        </span>days,<span style='letter-spacing:-.75pt'>
                        </span>from<span style='letter-spacing:-.8pt'> </span>the<span style='letter-spacing:-.85pt'>
                        </span>date<span style='letter-spacing:-.9pt'> </span>of<span style='letter-spacing:-.8pt'>
                        </span>suspension/cancellation<span style='letter-spacing:-.65pt'> </span>of<span
                                style='letter-spacing:-.75pt'> </span>the<span style='letter-spacing:-.8pt'>
                        </span>project.<span style='letter-spacing:-.75pt'>
                        </span>If<span style='letter-spacing:-.75pt'> </span>No<span style='letter-spacing:
-.75pt'> </span>work<span style='letter-spacing:-.75pt'> </span>is<span style='letter-spacing:-.75pt'>
                        </span>allowed<span style='letter-spacing:-.8pt'>
                        </span>on<span style='letter-spacing:-.75pt'> </span>the<span style='letter-spacing:
-.75pt'> </span>Site<span style='letter-spacing:-.8pt'> </span>for<span style='letter-spacing:-.7pt'> </span>15<span
                                style='letter-spacing:-.8pt'> </span>working<span style='letter-spacing:-3.75pt'>
                        </span>days, by the Client or the Building’s
                        Estate Management, for whatever<span style='letter-spacing:.05pt'> </span>reason,
                        the work shall be deemed as Suspended. In the event of suspension,<span
                                style='letter-spacing:.05pt'> </span>there may be a rate revision in case the
                        prices of input materials go up by 5%<span style='letter-spacing:-.25pt'> </span>or<span
                                style='letter-spacing:-.35pt'> </span>more.<span style='letter-spacing:-.25pt'>
                        </span>If<span style='letter-spacing:-.35pt'> </span>work<span style='letter-spacing:-.3pt'>
                        </span>is<span style='letter-spacing:-.35pt'> </span>still<span style='letter-spacing:-.4pt'>
                        </span>NOT<span style='letter-spacing:-.25pt'> </span>permitted<span
                                style='letter-spacing:-.35pt'> </span>for<span style='letter-spacing:-.2pt'>
                        </span>30<span style='letter-spacing:-.25pt'> </span>days,<span style='letter-spacing:-.3pt'>
                        </span>it<span style='letter-spacing:-.35pt'> </span>will<span style='letter-spacing:-.35pt'>
                        </span>be<span style='letter-spacing:-.25pt'> </span>deemed<span style='letter-spacing:-.35pt'>
                        </span>as <span style='letter-spacing:-3.75pt'> </span>Termination.</p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify'>&nbsp;</p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify'>&nbsp;</p>

                <p class=MsoBodyText style='margin-top:0in;margin-right:5.75pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify'>&nbsp;</p>

                <h1 align=center style='margin-left:5.0pt;text-align:center'><u><span
                                        style='text-decoration:none'>&nbsp;</span></u></h1>

                <h1 align=center style='margin-left:5.0pt;text-align:center'><u>Design<span
                                        style='letter-spacing:-.1pt'> </span>Implementation Payment<span
                                        style='letter-spacing:-.1pt'> </span>Terms &amp;<span style='letter-spacing:
-.2pt'> </span>Conditions</u></h1>

                <p class=MsoBodyText style='margin-top:.4pt;line-height:115%'><b><span
                                        style='font-size:9.5pt;line-height:115%'>&nbsp;</span></b></p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:5.7pt;
margin-bottom:0in;margin-left:41.0pt;margin-bottom:.0001pt;text-align:justify;
text-indent:-.5in;line-height:115%'>1.<span
                                style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Work shall commence within 5 Business days from the date of receipt of<span
                                style='letter-spacing:.05pt'> </span>Mobilization<span style='letter-spacing:
-.05pt'> </span>Advance<span style='letter-spacing:-.05pt'> </span>&amp; Work
                        Contract,<span style='letter-spacing:-.05pt'> </span>duly<span style='letter-spacing:-.15pt'>
                        </span>signed.</p>

                <p class=MsoBodyText style='margin-top:.45pt;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.8pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'>2.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Payment<span style='letter-spacing:2.45pt'> </span>Terms<span
                                style='letter-spacing:2.45pt'> </span>for<span style='letter-spacing:2.55pt'>
                        </span>the<span style='letter-spacing:2.5pt'> </span>execution<span
                                style='letter-spacing:2.45pt'>
                        </span>are<span style='letter-spacing:2.6pt'> </span>as<span style='letter-spacing:
2.65pt'> </span>mentioned<span style='letter-spacing:2.55pt'> </span>below<span style='letter-spacing:2.45pt'>
                        </span>(X<span style='letter-spacing:2.5pt'> </span>being<span style='letter-spacing:2.5pt'>
                        </span>the<span style='letter-spacing:-3.75pt'> </span>completion<span
                                style='letter-spacing:-.05pt'> </span>time):</p>

                <p class=MsoListParagraph style='margin-top:.05pt;margin-right:0in;margin-bottom:
0in;margin-left:1.0in;margin-bottom:.0001pt;text-indent:-.25in;line-height:
115%'>a.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp; </span><b>25%<span style='letter-spacing:.05pt'>
                                </span></b>Mobilization Advance based on<span style='letter-spacing:-.05pt'> the
                        </span>Proposed<span style='letter-spacing:
-.15pt'> </span>Plan.</p>

                <p class=MsoListParagraph style='margin-left:1.0in;text-indent:-.25in;
line-height:115%'>b.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                        </span><b>35%<span style='letter-spacing:.05pt'> </span></b>on<span
                                style='letter-spacing:-.05pt'> </span>W<span style='letter-spacing:-.05pt'>
                        </span>plus<span style='letter-spacing:-.05pt'> </span>1/3<span style='letter-spacing:-.05pt'>
                        </span>X.</p>

                <p class=MsoListParagraph style='margin-left:1.0in;text-indent:-.25in;
line-height:115%'>c.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                        </span><b>35%<span style='letter-spacing:.05pt'> </span></b>on<span
                                style='letter-spacing:-.05pt'> </span>W<span style='letter-spacing:-.05pt'>
                        </span>plus<span style='letter-spacing:-.05pt'> </span>3/4<span style='letter-spacing:-.05pt'>
                        </span>X.</p>

                <p class=MsoListParagraph style='margin-left:1.0in;text-indent:-.25in;
line-height:115%'>d.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;
                        </span><b>5%<span style='letter-spacing:.05pt'> </span></b>on Completion<span
                                style='letter-spacing:-.25pt'> </span>of<span style='letter-spacing:.05pt'> </span>Scope
                        of<span style='letter-spacing:.05pt'> </span>Works.</p>

                <p class=MsoBodyText style='margin-top:.5pt;line-height:115%'><span
                                style='font-size:10.5pt;line-height:115%'>&nbsp;</span></p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:-.5in;line-height:
115%'>3.<span style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>The price quoted for the execution will be deemed valid for the duration
                        of the<span style='letter-spacing:.05pt'> </span>proposed<span style='letter-spacing:-.15pt'>
                        </span>implementation.<span style='letter-spacing:
-.15pt'> </span>However, there<span style='letter-spacing:-.1pt'> </span>may<span style='letter-spacing:-.1pt'>
                        </span>be<span style='letter-spacing:-.15pt'> </span>rate<span style='letter-spacing:-.15pt'>
                        </span>revision<span style='letter-spacing:-.25pt'>
                        </span>in<span style='letter-spacing:-.2pt'> </span>case<span style='letter-spacing:
-.1pt'> </span>the<span style='letter-spacing:-3.75pt'> </span>prices<span style='letter-spacing:-.8pt'> </span>of<span
                                style='letter-spacing:-.8pt'> </span>input<span style='letter-spacing:-.75pt'>
                        </span>materials<span style='letter-spacing:
-.8pt'> </span>go<span style='letter-spacing:-.75pt'> </span>up<span style='letter-spacing:-.95pt'> </span>by<span
                                style='letter-spacing:-.75pt'> </span>10%<span style='letter-spacing:-1.0pt'>
                        </span>or<span style='letter-spacing:-.7pt'> </span>more.<span style='letter-spacing:-.55pt'>
                        </span>GST<span style='letter-spacing:-.7pt'> </span>@<span style='letter-spacing:-.85pt'>
                        </span>18% <span style='letter-spacing:-.7pt'>and
                                any other Govt Levy, will be charged </span>will<span style='letter-spacing:
-.8pt'> </span>be<span style='letter-spacing:-.8pt'> </span>charged, as per
                        actual.</p>

                <p class=MsoListParagraph style='margin-top:0in;margin-right:5.7pt;margin-bottom:
0in;margin-left:41.0pt;margin-bottom:.0001pt;text-indent:0in;line-height:115%'><span
                                style='font-size:9.5pt;line-height:115%'> </span></p>

                <h1 style='margin-left:41.0pt;text-indent:-.5in;line-height:115%'>4.<span
                                style='font:7.0pt "Times New Roman"'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span>Orders<span style='letter-spacing:-.05pt'> </span>once<span style='letter-spacing:-.1pt'>
                        </span>confirmed<span style='letter-spacing:-.15pt'>
                        </span>and<span style='letter-spacing:-.1pt'> </span>closed,<span style='letter-spacing:-.05pt'>
                        </span>cannot<span style='letter-spacing:-.05pt'>
                        </span>be<span style='letter-spacing:-.15pt'> </span>cancelled.</h1>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText><b><span style='font-size:10.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-top:.45pt'>

                <table cellpadding=0 cellspacing=0 align=left>
                        <tr>
                                <td width=96 height=0></td>
                                <td width=169></td>
                                <td width=215></td>
                                <td width=169></td>
                        </tr>
                        <tr>
                                <td height=1></td>
                                <td align=left valign=top><img width=169 height=1
                                                src="Colonelz_Residential%20Int%20Design%20Contract_Mr%20ABC,%20Noida_13122023_files/image003.png">
                                </td>
                                <td></td>
                                <td align=left valign=top><img width=169 height=1
                                                src="Colonelz_Residential%20Int%20Design%20Contract_Mr%20ABC,%20Noida_13122023_files/image004.png">
                                </td>
                        </tr>
                </table>

                <br clear=ALL>
                </p>

                <p class=MsoBodyText style='margin-top:.25pt'><b><span style='font-size:6.0pt'>&nbsp;</span></b></p>

                <p class=MsoBodyText style='margin-top:5.05pt;margin-right:0in;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt'><span style=''>${client_name[0]}</span>                                                                 Ms
                        Naomi<span style='letter-spacing:.05pt'> </span>Sahay</p>

                <p class=MsoBodyText>&nbsp;</p>

                <p class=MsoBodyText style='margin-left:5.0pt'>The
                        Client                                                              The
                        Designer</p>

                <p class=MsoBodyText style='margin-left:5.0pt'>
                                                                                                     For</p>

                <p class=MsoBodyText style='margin-left:5.0pt'>
                                                                                                     Colonelz
                        Constructions Pvt Ltd</p>

                <p class=MsoBodyText><span style='font-size:13.0pt'>&nbsp;</span></p>

                <p class=MsoNormal style='margin-top:10.95pt;margin-right:0in;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt;line-height:13.35pt'><b><span style='color:#212121'>Bank<span
                                                style='letter-spacing:-.05pt'> </span>Details:</span></b></p>

                <p class=MsoBodyText style='margin-left:5.0pt;line-height:13.35pt'><span
                                style='color:#212121'>Bank            -        HDFC Bank Account</span></p>

                <p class=MsoBodyText style='margin-top:.05pt;margin-right:137.1pt;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt'><span style='color:#212121'>A/c
                                Holder    –        </span><span style='color:#BF0000'>COLONELZ CONSTRUCTIONS
                                PVT LTD<span style='letter-spacing:-3.7pt'></p>
                                <p class=MsoBodyText style='margin-top:.05pt;margin-bottom:
0in;margin-left:5.0pt;margin-bottom:.0001pt'><span
                                style='color:#212121'>A/c<span style='letter-spacing:-.05pt'>
                                </span>no.         –</span><span
                                style='font-family:"Times New Roman",serif;color:#212121'>          </span><span
                                style='color:#212121'>50200007351695</span>

                                 </p>

                <p class=MsoBodyText style='margin-left:5.0pt;line-height:13.25pt'><span
                                style='color:#212121'>IFSC             –        HDFC0000043</span></p>

        </div>

</body>

</html>

    `;
        return htmlTemplate;
}


export function commercialContract(
        client,
        city,
        client_name,
        client_phone,
        client_email,
        site_address,
        date,
        quotation,
        cost,
        cost_in_word,
        franchises
) {
        const htmlTemplate = `
  <html>

<head>
        <meta http-equiv=Content-Type content="text/html; charset=utf-8">
        <meta name=Generator content="Microsoft Word 15 (filtered)">
        <title>Microsoft Word - Int Design</title>
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
                        font-family: Verdana;
                        panose-1: 2 11 6 4 3 5 4 4 2 4;
                }

                @font-face {
                        font-family: Tahoma;
                        panose-1: 2 11 6 4 3 5 4 4 2 4;
                }

                /* Style Definitions */
                p.MsoNormal,
                li.MsoNormal,
                div.MsoNormal {
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                h1 {
                        mso-style-link: "Heading 1 Char";
                        margin-top: 0in;
                        margin-right: 0in;
                        margin-bottom: 0in;
                        margin-left: 4.2pt;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                p.MsoTitle,
                li.MsoTitle,
                div.MsoTitle {
                        margin-top: 13.25pt;
                        margin-right: 5.05pt;
                        margin-bottom: 0in;
                        margin-left: 4.2pt;
                        text-align: center;
                        text-autospace: none;
                        font-size: 14.0pt;
                        font-family: "Verdana", sans-serif;
                        font-weight: bold;
                        text-decoration: underline;
                }

                p.MsoBodyText,
                li.MsoBodyText,
                div.MsoBodyText {
                        mso-style-link: "Body Text Char";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                a:link,
                span.MsoHyperlink {
                        color: blue;
                        text-decoration: underline;
                }

                a:visited,
                span.MsoHyperlinkFollowed {
                        color: purple;
                        text-decoration: underline;
                }

                p.MsoAcetate,
                li.MsoAcetate,
                div.MsoAcetate {
                        mso-style-link: "Balloon Text Char";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 8.0pt;
                        font-family: "Tahoma", sans-serif;
                }

                p.MsoListParagraph,
                li.MsoListParagraph,
                div.MsoListParagraph {
                        margin-top: 0in;
                        margin-right: 0in;
                        margin-bottom: 0in;
                        margin-left: 90.05pt;
                        text-indent: -28.5pt;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                p.TableParagraph,
                li.TableParagraph,
                div.TableParagraph {
                        mso-style-name: "Table Paragraph";
                        margin: 0in;
                        text-autospace: none;
                        font-size: 11.0pt;
                        font-family: "Verdana", sans-serif;
                }

                span.BodyTextChar {
                        mso-style-name: "Body Text Char";
                        mso-style-link: "Body Text";
                        font-family: "Verdana", sans-serif;
                }

                span.BalloonTextChar {
                        mso-style-name: "Balloon Text Char";
                        mso-style-link: "Balloon Text";
                        font-family: "Tahoma", sans-serif;
                }

                span.Heading1Char {
                        mso-style-name: "Heading 1 Char";
                        mso-style-link: "Heading 1";
                        font-family: "Verdana", sans-serif;
                        font-weight: bold;
                }

                .MsoChpDefault {
                        font-family: "Calibri", sans-serif;
                }

                .MsoPapDefault {
                        text-autospace: none;
                }

                /* Page Definitions */
                @page WordSection1 {
                        size: 595.5pt 842.0pt;
                        margin: 79.0pt 66.0pt 37.0pt 67.0pt;
                }

                div.WordSection1 {
                        page: WordSection1;
                }

                @page WordSection2 {
                        size: 595.5pt 842.0pt;
                        margin: 69.0pt 66.0pt 37.0pt 67.0pt;
                }

                div.WordSection2 {
                        page: WordSection2;
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

<body>
        <div>
                <div style="-aw-headerfooter-type:header-primary">
                        <p style="margin-top:0pt; margin-bottom:0pt; line-height:10pt"><span
                                        style="font-family:'Times New Roman'; font-size:10pt">&nbsp;</span></p>
                </div>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><img
                                src="https://collegemanage.s3.ap-south-1.amazonaws.com/image001.jpg" width="247"
                                height="247"
                                alt="May be an image of text that says &quot;COLONELZ BUILDING RELATIONSHIPS&quot;"
                                style="-aw-left-pos:0pt; -aw-rel-hpos:column; -aw-rel-vpos:paragraph; -aw-top-pos:0pt; -aw-wrap-type:inline">
                </p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">INTERIOR DESIGN
                                CONSULTANCY</span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline"> </span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">&amp;
                                IMPLEMENTATION </span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">CONTRACT</span>
                </p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline; "></span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline; ">${client}</span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">,
                                ${city}</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:2.85pt; margin-bottom:12pt; text-align:center; font-size:11pt">
                        <span style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">Client</span><span
                                style="width:0.37pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; font-weight:bold">- </span><span
                                style="font-family:Verdana; font-weight:bold; ">${client}</span><span style="font-family:Verdana; font-weight:bold; ">
                                by </span><span
                                style="font-family:Verdana; font-weight:bold; ">Company/${franchises}</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">Designer</span><span
                                style="width:16.98pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; font-weight:bold">-</span><span
                                style="font-family:Verdana; font-weight:bold">Ms. Naomi Sahay</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span style="font-family:Verdana">Date
                        </span><span style="width:6.16pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">- </span><span
                                style="font-family:Verdana; ">${date}</span>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana">Quotation No</span><span
                                style="width:35pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">- </span><span style="font-family:Verdana">CCPL </span><span
                                style="font-family:Verdana">/${quotation}</span>
                             </p>
                <p style="margin-top:0pt; margin-left:108pt; margin-bottom:12pt; text-indent:-106.5pt; font-size:11pt">
                        <span style="font-family:Verdana">Site Address</span><span
                                style="width:37.27pt; text-indent:0pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">- </span><span
                                style="font-family:Verdana; ">${site_address}</span></p>
                <p style="margin-top:0pt; margin-left:108pt; margin-bottom:0pt; text-indent:-106.5pt; line-height:15pt">
                        <span style="font-family:Verdana; font-size:11pt">Client Contact </span>
                        
                         ${client_name
                        .map(
                                (name, index) => `
                               <span
                                style="width:24.88pt; text-indent:0pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; font-size:11pt">-</span><span
                                style="font-family:Verdana; font-size:11pt"> </span>
                                <span
                                style="font-family:Verdana; font-size:11pt; ">${client_name[index]}</span><span
                                style="font-family:Verdana; font-size:11pt; "> </span><span
                                style="font-family:Verdana; font-size:11pt; ">: +91 </span><span
                                style="font-family:Verdana; font-size:11pt; ">${client_phone[index]}; </span><a
                                href="mailto:${client_email[index]}" style="text-decoration:none"><span
                                        style="font-family:'Times New Roman'; font-size:10pt; color:#000000; ">&nbsp;</span><span
                                        style="font-family:Verdana; font-size:11pt; text-decoration:underline; color:#0000ff; ">${client_email[index]}</span></a><span
                                style="font-family:Verdana; font-size:11pt; "> </span></p>
                <p style="margin-top:0pt; margin-left:108pt; margin-bottom:0pt; line-height:15pt"><span
                                style="font-family:Verdana; font-size:11pt; ">&nbsp; </span>
                       
                            `
                        )
                        .join("")}
                           
                        
                       
                <p style="margin-top:0pt; margin-bottom:0pt; line-height:15pt"><span
                                style="font-family:Verdana; font-size:11pt">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span style="font-family:Verdana">Designer
                        </span><span style="font-family:Verdana">Contact&nbsp;&nbsp; - </span><span
                                style="font-family:Verdana">Ms. Naomi Sahay</span>
                                <span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">+91</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">84475</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">00754</span><span style="font-family:Verdana">;</span><span
                                style="font-family:Verdana"> </span><a href="mailto:naomi@colonelz.com"
                                style="text-decoration:none"><span
                                        style="font-family:Verdana; text-decoration:underline; color:#0000ff">naomi@colonelz.com</span></a>
                </p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Scope of
                        </span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Wor</span><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">k</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:4pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">The Scope of work entails Interior Designing </span><span
                                style="font-family:Verdana">&amp; </span><span style="font-family:Verdana">I</span><span
                                style="font-family:Verdana">mplementation </span><span style="font-family:Verdana">by
                                Colonelz Constructions </span><span style="font-family:Verdana">Pvt</span><span
                                style="font-family:Verdana"> Ltd</span><span style="font-family:Verdana">, </span><span
                                style="font-family:Verdana">represented by its Head Designs, </span><span
                                style="font-family:Verdana">Ms</span><span style="font-family:Verdana"> Naomi
                        </span><span style="font-family:Verdana">Sahay</span><span
                                style="font-family:Verdana">,</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">(</span><span style="font-family:Verdana">hereinafter known
                                as </span><span style="font-family:Verdana">“</span><span
                                style="font-family:Verdana">The Designer</span><span
                                style="font-family:Verdana">”</span><span style="font-family:Verdana">), </span><span
                                style="font-family:Verdana">i.e., </span><span style="font-family:Verdana">preparation
                                of all drawings for the execution of </span><span
                                style="font-family:Verdana">w</span><span style="font-family:Verdana">orks
                                for</span><span style="font-family:Verdana"> the </span><span
                                style="font-family:Verdana; "> ${client}</span><span
                                style="font-family:Verdana; "> of </span><span
                                style="font-family:Verdana; ">Company/</span><span
                                style="font-family:Verdana; ">${franchises}</span><span
                                style="font-family:Verdana; ">,</span><span
                                style="font-family:Verdana; "> at </span><span
                                style="font-family:Verdana; "> ${site_address}</span><span
                                style="font-family:Verdana">,</span><span style="font-family:Verdana"> represented by
                                its Director, </span><span style="font-family:Verdana">${client_name[0]
                }</span><span
                                style="font-family:Verdana"> </span><span
                                style="font-family:Verdana"> (</span><span style="font-family:Verdana">hereinafter known
                                as </span><span style="font-family:Verdana">“</span><span
                                style="font-family:Verdana">The Client</span><span
                                style="font-family:Verdana">”</span><span style="font-family:Verdana">)</span><span
                                style="font-family:Verdana">. D</span><span style="font-family:Verdana">etails
                        </span><span style="font-family:Verdana">given </span><span
                                style="font-family:Verdana">above.</span><span style="font-family:Verdana"> </span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt">
               <span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline margin-top:20px">Part
                                I.</span><span style="width:32.37pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">Interior Designing of the complete Space.</span></p>
                <p
                        style="margin-top:0pt; margin-left:72pt; margin-bottom:12pt; text-indent:-72pt; text-align:justify; font-size:11pt">
                        <span style="font-family:Verdana; font-weight:bold; text-decoration:underline">Part
                                II.</span><span
                                style="width:26.37pt; text-indent:0pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">Execution of the finalized Design as Approved by The
                                Client.</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><br
                                style="page-break-before:always; clear:both"></p>
                <p style="margin-top:100pt; margin-bottom:40pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline ">Part I</span>
                </p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">Th</span><span style="font-family:Verdana">is is the
                                Designing Part, which will be covered in 2</span><span style="font-family:Verdana">
                                sections</span><span style="font-family:Verdana">:</span></p>
                <p
                        style="margin-top:0pt; margin-left:72pt; margin-bottom:0pt; text-indent:-72pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Verdana; font-weight:bold">1.</span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; font-weight:bold">Phase I </span><span
                                style="font-family:Verdana; font-weight:bold">–</span><span
                                style="font-family:Verdana; font-weight:bold">Conceptual </span><span
                                style="font-family:Verdana; font-weight:bold">Stage</span><span
                                style="font-family:Verdana; font-weight:bold">, </span><span
                                style="font-family:Verdana">i.e.</span><span style="font-family:Verdana"> Stage
                                1</span><span style="font-family:Verdana">:</span></p>
                <p style="margin-top:0pt; margin-left:72pt; margin-bottom:0pt; line-height:115%; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <ol type="a" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:43.96pt; line-height:115%; padding-left:12.74pt; font-family:Verdana; font-size:11pt">
                                <span style="text-decoration:underline">Presentation Drawings:</span>
                                <ul type="disc" style="margin-right:0pt; margin-left:0pt; padding-left:0pt">
                                        <li
                                                style="margin-left:123.3pt; text-indent:-123.3pt; line-height:normal; font-family:serif; list-style-position:inside; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-list-padding-sml:18.29pt; -aw-number-format:''">
                                                <span style="font:7pt 'Times New Roman'; -aw-list-padding-sml:18.29pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span><span style="font-family:Verdana">Furniture Layout Plan</span>
                                        </li>
                                        <li
                                                style="margin-left:123.3pt; text-indent:-123.3pt; line-height:normal; font-family:serif; list-style-position:inside; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-list-padding-sml:18.29pt; -aw-number-format:''">
                                                <span style="font:7pt 'Times New Roman'; -aw-list-padding-sml:18.29pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span><span style="font-family:Verdana">Presentation with Conceptual
                                                        Pictures &amp; Sketches</span></li>
                                        <li
                                                style="margin-left:123.3pt; text-indent:-123.3pt; line-height:normal; font-family:serif; list-style-position:inside; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-list-padding-sml:18.29pt; -aw-number-format:''">
                                                <span style="font:7pt 'Times New Roman'; -aw-list-padding-sml:18.29pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span><span style="font-family:Verdana">Conceptual </span><span
                                                        style="font-family:Verdana">3D Views:</span></li>
                                </ul>
                        </li>
                </ol>
                <p
                        style="margin-top:0pt; margin-left:92.15pt; margin-bottom:0pt; text-indent:-7.1pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><a name="_Hlk107490554"><span style="font-family:Verdana">Exterior</span><span
                                        style="font-family:Verdana"> </span><span style="font-family:Verdana">x
                                </span><span style="font-family:Verdana">1 angle</span><span
                                        style="font-family:Verdana"> view</span><span style="font-family:Verdana"> with
                                        1-2 design options</span></a></p>
                <p
                        style="margin-top:0pt; margin-left:92.15pt; margin-bottom:12pt; text-indent:-7.1pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Interior</span><span style="font-family:Verdana">
                        </span><span style="font-family:Verdana">x </span><span
                                style="font-family:Verdana">2</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">angle </span><span
                                style="font-family:Verdana">view</span><span style="font-family:Verdana">s</span><span
                                style="font-family:Verdana"> with 1-2 finish options</span><span
                                style="font-family:Verdana"> </span></p>
                <p style="margin-top:0pt; margin-left:28.35pt; margin-bottom:12pt; font-size:11pt"><span
                                style="-aw-bookmark-end:_Hlk107490554"></span><span
                                style="font-family:Verdana">b.</span><span
                                style="width:17.5pt; display:inline-block; -aw-tabstop-align:left; -aw-tabstop-pos:56.7pt">&nbsp;</span><span
                                style="font-family:Verdana; text-decoration:underline">C</span><span
                                style="font-family:Verdana; text-decoration:underline">ivil Work</span><span
                                style="font-family:Verdana; text-decoration:underline"> Drawings:</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Zoning</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Floor Plan</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Elevation</span><span
                                        style="font-family:Verdana">s</span><span style="font-family:Verdana">
                                        w</span><span style="font-family:Verdana">here required.</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Furniture Layout</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Electrical Layout</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Plumbing Layout</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Ceiling</span><span style="font-family:Verdana">
                                </span><span style="font-family:Verdana">Layout</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:85.05pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:18pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana; font-style:italic; text-decoration:underline">(Please note:
                                The spaces shall be defined and finalized as per </span><span
                                style="font-family:Verdana; font-style:italic; text-decoration:underline">the space
                                available </span><span
                                style="font-family:Verdana; font-style:italic; text-decoration:underline">at the
                                site</span><span
                                style="font-family:Verdana; font-style:italic; text-decoration:underline">, and the
                        </span><span style="font-family:Verdana; font-style:italic; text-decoration:underline">final
                                furniture layout)</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana; font-style:italic">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:85.05pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:36pt; margin-bottom:12pt; text-indent:-36pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">2.</span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; font-weight:bold">Phase II –</span><span
                                style="font-family:Verdana; font-weight:bold">GFC</span><span
                                style="font-family:Verdana; font-weight:bold"> Stage:</span></p>
                <p
                        style="margin-top:0pt; margin-left:56.7pt; margin-bottom:12pt; text-indent:-29.57pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Verdana; font-size:12pt">a.</span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; text-decoration:underline">Stage 2: Design Development
                                Phase 1</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Detailed 3D Views (with finalized details):</span>
                        </li>
                </ul>
                <p
                        style="margin-top:0pt; margin-left:92.15pt; margin-bottom:0pt; text-indent:-7.1pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Exterior x </span><span
                                style="font-family:Verdana">2</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">angle views</span></p>
                <p
                        style="margin-top:0pt; margin-left:92.15pt; margin-bottom:12pt; text-indent:-7.1pt; line-height:115%; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Interior</span><span style="font-family:Verdana"> x
                        </span><span style="font-family:Verdana">6</span><span style="font-family:Verdana"> </span><span
                                style="font-family:Verdana">angle views</span></p>
                <p style="margin-top:0pt; margin-left:56.7pt; margin-bottom:12pt; text-indent:-25.99pt; font-size:11pt">
                        <span style="font-family:Verdana; font-size:12pt">b.</span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; text-decoration:underline">Stage </span><span
                                style="font-family:Verdana; text-decoration:underline">3</span><span
                                style="font-family:Verdana; text-decoration:underline">: Good for Construction (GFC)
                                Drawings </span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Furniture Layout</span><span
                                        style="font-family:Verdana"> incorporating all additions and changes
                                        requested</span></li>
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Flooring Layout Plan</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Detailed Space Plan/Furniture Layout</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Floor Finish Detail</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Floor LVL Layout </span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Plumbing</span><span style="font-family:Verdana">
                                        Details</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Water Supply Layout</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Drain Layout</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Wall Elevations</span><span
                                style="font-family:Verdana"> for plumbing points</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Reflected Ceiling Plan</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Ceiling Plan</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Ceiling Lighting Plan </span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Ceiling Finish Detail</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Electrical Drawings </span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Looping Detail </span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Wall </span><span style="font-family:Verdana">Lighting
                        </span><span style="font-family:Verdana">P</span><span style="font-family:Verdana">lan</span>
                </p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Wall Electrical</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Wall </span><span style="font-family:Verdana">Finishes
                                </span><span style="font-family:Verdana">Plan</span></li>
                </ul>
                <p
                        style="margin-top:0pt; margin-left:113.4pt; margin-bottom:12pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Wall Elevations </span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; margin-bottom:12pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Woodwork Details:</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Fixed Furniture</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Wall </span><span
                                style="font-family:Verdana">Paneling</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Loose Furniture</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Moulding &amp; Detailing if any</span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; text-indent:-28.35pt; font-size:11pt">
                        <span style="font-family:Wingdings"></span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Storages Details </span></p>
                <p style="margin-top:0pt; margin-left:113.4pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:56.7pt; margin-bottom:12pt; text-indent:-24.77pt; font-size:11pt">
                        <span style="font-family:Verdana; font-size:12pt">c.</span><span
                                style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana">Stage </span><span
                                style="font-family:Verdana">4</span><span style="font-family:Verdana">: </span><span
                                style="font-family:Verdana">Documents &amp; BOQ</span><span
                                style="font-family:Verdana">s</span><span style="font-family:Verdana"> </span></p>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Light fixtures BOQ</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Furniture BOQ</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Electrical BOQ</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Plumbing BOQ</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Tiling BOQ</span></li>
                        <li
                                style="margin-left:66.76pt; padding-left:18.29pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana">Furnishing BOQ</span></li>
                </ul>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Part
                                II</span><span style="font-family:Verdana"> </span></p>
                <p
                        style="margin-top:0pt; margin-left:7.1pt; margin-bottom:12pt; text-indent:28.9pt; text-align:justify; font-size:11pt">
                        <span style="font-family:Verdana">The Designer shall implement the Design</span><span
                                style="font-family:Verdana"> as </span><span
                                style="font-family:Verdana">finalized</span><span style="font-family:Verdana"> with The
                                Client, with</span><span style="font-family:Verdana"> Quality checks, </span><span
                                style="font-family:Verdana">coordination</span><span style="font-family:Verdana"> and
                                supervision with all teams</span><span style="font-family:Verdana">.</span></p>
                <p
                        style="margin-top:0pt; margin-left:7.1pt; margin-bottom:12pt; text-indent:28.9pt; text-align:justify; font-size:11pt">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Fee
                                Proposal</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">Designing will be done as per the following rate</span><span
                                style="font-family:Verdana">s</span><span style="font-family:Verdana">;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">Total </span><span style="font-family:Verdana">cost for
                        </span><span style="font-family:Verdana">Designing and Supervision shall be</span><span
                                style="font-family:Verdana; color:#202124; background-color:#ffffff"> </span><span
                                style="font-family:Verdana; font-weight:bold; ">INR</span><span
                                style="font-family:Verdana; font-weight:bold; "> </span><span
                                style="font-family:Verdana; font-weight:bold; ">${cost}</span><span
                                style="font-family:Verdana; font-weight:bold">/</span><span
                                style="font-family:Verdana; font-weight:bold">excl</span><span
                                style="font-family:Verdana; font-weight:bold">.</span><span
                                style="font-family:Verdana; font-weight:bold"> taxes</span><span
                                style="font-family:Verdana; font-weight:bold"> (</span><span
                                style="font-family:Verdana; font-weight:bold">Rupees </span><span
                                style="font-family:Verdana; font-weight:bold; ">${cost_in_word} 
                               </span><span style="font-family:Verdana; font-weight:bold"> </span><span
                                style="font-family:Verdana; font-weight:bold">Only)</span><span
                                style="font-family:Verdana; font-weight:bold"> </span><span
                                style="font-family:Verdana">applicable solely to the </span><span
                                style="font-family:Verdana">“</span><span
                                style="font-family:Verdana; ">${client}</span><span
                                style="font-family:Verdana; ">”</span><span
                                style="font-family:Verdana; "> situated at </span><span
                                style="font-family:Verdana; ">“</span><span
                                style="font-family:Verdana; ">${site_address}</span><span
                                style="font-family:Verdana">”</span><span style="font-family:Verdana">.</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">For all </span><span
                                style="font-family:Verdana; ">${client}</span><span
                                style="font-family:Verdana"> at </span><span style="font-family:Verdana">other
                        </span><span style="font-family:Verdana">location</span><span
                                style="font-family:Verdana">s</span><span style="font-family:Verdana">, </span><span
                                style="font-family:Verdana">the contract will be duly modified</span><span
                                style="font-family:Verdana"> based on the Location &amp;</span><span
                                style="font-family:Verdana"> the </span><span style="font-family:Verdana">S</span><span
                                style="font-family:Verdana">cope of work</span><span
                                style="font-family:Verdana">.</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span style="font-family:Verdana">The
                                Client shall release respective payment </span><span
                                style="font-family:Verdana">instalments</span><span style="font-family:Verdana"> within
                                3 days from the date of completion of stage OR intimation from the Designer</span><span
                                style="font-family:Verdana"> as elucidated below:</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><br
                                style="page-break-before:always; clear:both"></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Designing
                                Payment Terms &amp; Condition</span></p>
                <ol type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Design</span><span> </span><span>work </span><span>shall commence within
                                        2</span><span> Business days</span><span> (Mon-Fri)</span><span> from the date
                                        of receipt of Mobilization Advance &amp; Work Contract duly signed.</span></li>
                        <li
                                style="margin-left:15.99pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Payment Terms:</span><span
                                        style="width:16.39pt; display:inline-block">&nbsp;</span>
                                <ul type="square" style="margin-right:0pt; margin-left:0pt; padding-left:0pt">
                                        <li
                                                style="margin-left:9.48pt; text-align:left; line-height:115%; padding-left:18.32pt; font-family:serif; -aw-font-family:'Wingdings'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Booking
                                                        fee</span><span
                                                        style="width:35.38pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="font-family:Verdana">- 35% of total Design Fees</span>
                                        </li>
                                        <li
                                                style="margin-left:9.48pt; text-align:left; line-height:115%; padding-left:18.32pt; font-family:serif; -aw-font-family:'Wingdings'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">On Finalization of
                                                        Furniture Layout</span><span style="font-family:Verdana">
                                                </span><span
                                                        style="width:32.98pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="font-family:Verdana">- 50% of total Design fees</span>
                                        </li>
                                        <li
                                                style="margin-left:9.48pt; text-align:left; padding-left:18.32pt; font-family:serif; -aw-font-family:'Wingdings'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">After Finalization
                                                        of Conceptual 3D Designs </span><span
                                                        style="width:16.64pt; display:inline-block">&nbsp;</span><span
                                                        style="font-family:Verdana; font-weight:bold">- </span><span
                                                        style="font-family:Verdana">70% of total Design Fees
                                                        (</span><span style="font-family:Verdana">ie</span><span
                                                        style="font-family:Verdana">, before the commencement of site
                                                        execution)</span></li>
                                        <li
                                                style="margin-left:9.48pt; text-align:left; line-height:115%; padding-left:18.32pt; font-family:serif; -aw-font-family:'Wingdings'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">After </span><span
                                                        style="font-family:Verdana; font-weight:bold">Finalization</span><span
                                                        style="font-family:Verdana; font-weight:bold"> of GFCs and 3Ds
                                                </span><span
                                                        style="width:2.22pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="font-family:Verdana; font-weight:bold">- </span><span
                                                        style="font-family:Verdana">95% of total Design Fees </span>
                                        </li>
                                        <li
                                                style="margin-left:9.48pt; text-align:left; line-height:115%; padding-left:18.32pt; font-family:serif; -aw-font-family:'Wingdings'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">After handing over
                                                </span><span
                                                        style="width:24.83pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="width:36pt; display:inline-block">&nbsp;</span><span
                                                        style="font-family:Verdana; font-weight:bold">- </span><span
                                                        style="font-family:Verdana">05% of total Design Fees</span></li>
                                </ul>
                        </li>
                </ol>
                <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:0pt; font-size:11pt"><br><a
                                name="_Hlk116898916"><span style="font-family:Verdana">The Client shall release
                                        respective payment </span><span
                                        style="font-family:Verdana">instalments</span><span style="font-family:Verdana">
                                        within 3 days from the date of completion of stage OR intimation from the
                                        Designer.</span></a></p>
                <p
                        style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; font-size:11pt; background-color:#ffffff">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <ol start="3" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; padding-left:20.01pt; font-family:Verdana; font-size:11pt; color:#3b3a3a; background-color:#ffffff">
                                <span style="font-weight:bold; text-decoration:underline; color:#000000">Site
                                        Visit.</span><span style="color:#000000"> A total of 8 site visits </span><span
                                        style="color:#000000">are</span><span style="color:#000000">
                                        included</span><span style="color:#000000"> in the cost</span><span
                                        style="color:#000000">. Any visit thereafter will be chargeable @ ₹</span><span
                                        style="color:#000000">30</span><span style="color:#000000">00/ per visit for 2
                                        hours on site. Every additional 30 </span><span
                                        style="color:#000000">mins</span><span style="color:#000000"> will be charged @
                                        ₹500/ per half an hour. The Designer’s design team shall be visiting as given
                                        above, to ascertain the progress, quality etc. </span></li>
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>The price</span><span> quoted is valid for 30 days from the date of Quotation
                                        &amp; may be revised at the time of finalization. </span><span
                                        style="-aw-bookmark-end:_Hlk116898916"></span></li>
                        <li
                                style="margin-left:15.99pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>GST @ 18% will be additionally charged on the total fee. In case of any Policy
                                        Change by the Govt</span><span>.</span><span>, Taxes &amp; duties will be
                                        charged as per actual.</span></li>
                </ol>
                <p style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ol start="6" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Order once placed cannot be cancelled. In case of cancellation, </span><span>the
                                </span><span>Fee till the stage of </span><span>s</span><span>ervices
                                </span><span>prepared &amp; </span><span>rendered shall be </span><span>paid and
                                        cleared.</span></li>
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>The Designer agrees to abide by ‘</span><span style="font-weight:bold">No Compete
                                        Agreement’,</span><span> in that they will not accept Designing works from any
                                        Competitor Franchise, opening similar Outlets of </span><span
                                        style="">${client}</span><span
                                        style="">, of </span><span
                                        style="">Company/${franchises}</span><span>, for making
                                        similar Food &amp; Beverage Outlet.</span><span> The Site pics will also not be
                                        used on Social Media or elsewhere, for One Year from the date of
                                </span><span>Handover of the Project, by The Designer</span><span>.</span></li>
                </ol>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">General Terms
                                &amp; Conditions</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">General Terms
                                &amp; Conditions</span></p>
                <ol type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold; text-decoration:underline">Scope</span><span>.
                                        Implementa</span><span>tion Work shall be completed </span><span>as per
                                </span><span>the </span><span>plan mutually decided</span><span>, which will be placed
                                        on a Pert Chart</span><span>.&nbsp; </span><span>W</span><span> will be the day
                                        of commencement of Work. All Sundays / days when work is not permitted to be
                                        done will be added to the timeline. </span><span>As the entire work has to be
                                        done between 11 PM to 8 AM, the </span><span>timelines</span><span> will be
                                        worked out accordingly.</span><span> All </span><span>restrictions</span><span>
                                        on work time will be added to</span><span> the Work Plan.</span><span>
                                </span><span>Day to Day </span><span>Handling of the Commercial Site’s Real Estate
                                        Manager or the Building Management will be</span><span> done by Colonelz.
                                        However, in case of any levies, disputes, etc., the same shall be handled by
                                </span><span>the Client.</span></li>
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold; text-decoration:underline">Design Finalisation</span>
                                <ul type="disc" style="margin-right:0pt; margin-left:0pt; padding-left:0pt">
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Furniture
                                                        Layout</span><span style="font-family:Verdana">- Minor changes
                                                        are acceptable till 1 week after </span><span
                                                        style="font-family:Verdana">the </span><span
                                                        style="font-family:Verdana">finalization of layout. Any major
                                                        changes / more than 2 changes shall be chargeable @ ₹
                                                </span><span style="font-family:Verdana">4</span><span
                                                        style="font-family:Verdana">,000/ per major change, </span><span
                                                        style="font-family:Verdana">eg</span><span
                                                        style="font-family:Verdana">, each change in layout of
                                                        furniture, incl modular furniture is considered as a major
                                                        change. </span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">LV, Electrical &amp;
                                                        False Ceiling Plans</span><span style="font-family:Verdana">-
                                                        Unlimited revisions allowed in the drawings until </span><span
                                                        style="font-family:Verdana">finalization</span><span
                                                        style="font-family:Verdana">. However, only 1-time minor changes
                                                        are free of cost up to 5 days from the date of finalization of
                                                        plans. Any change thereafter shall be chargeable @ ₹</span><span
                                                        style="font-family:Verdana">,2,000</span><span
                                                        style="font-family:Verdana">/ per change. Any additional cost
                                                        incurred to change the plan, shall be added to the Bills.</span>
                                        </li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Fixed
                                                        Furniture</span><span style="font-family:Verdana">- Unlimited
                                                        revisions are allowed in the drawings until </span><span
                                                        style="font-family:Verdana">finalization</span><span
                                                        style="font-family:Verdana">. However, only 1-time minor changes
                                                        are free of cost up to 3 days from date of finalization of
                                                        plans. Any change thereafter shall be chargeable @ ₹ 2,000/ per
                                                        change, provided the material for production has not been
                                                        procured and / or resized as per the design to be
                                                        implemented.</span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Loose
                                                        Furniture</span><span style="font-family:Verdana">- Unlimited
                                                        revisions are allowed in the drawings until </span><span
                                                        style="font-family:Verdana">finalization</span><span
                                                        style="font-family:Verdana">. However, only 1-time minor changes
                                                        are free of cost up to 3 days from date of finalization of
                                                        plans. Any change thereafter shall be chargeable @ ₹ 2,000/ per
                                                        change. However, NO change is acceptable after 5 days, or once
                                                        the frame is made, whichever is earlier.</span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Major Changes.
                                                </span><span style="font-family:Verdana"> In case of any major change in
                                                        plan after the plans are frozen and / or work has commenced,
                                                        will be reassessed, and considered as a new design/</span><span
                                                        style="font-family:Verdana"> </span><span
                                                        style="font-family:Verdana">drawing/</span><span
                                                        style="font-family:Verdana"> </span><span
                                                        style="font-family:Verdana">work.</span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana; font-weight:bold">Orders once
                                                        confirmed / closed, cannot be cancelled and are 100%
                                                        payable.</span></li>
                                </ul>
                        </li>
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold; text-decoration:underline">3D Visualisation.</span>
                                <ul type="disc" style="margin-right:0pt; margin-left:0pt; padding-left:0pt">
                                        <li
                                                style="margin-left:9.51pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">Conceptual Stage- 2 selected design
                                                        options in 3D for each space as per views mentioned in Design
                                                        Contract will be provided.</span></li>
                                        <li
                                                style="margin-left:9.51pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">Detail </span><span
                                                        style="font-family:Verdana">Finalization</span><span
                                                        style="font-family:Verdana">- 2 selected finish combinations in
                                                        3D for each space as per views mentioned in Design Contract will
                                                        be provided.</span></li>
                                        <li
                                                style="margin-left:9.51pt; padding-left:4.14pt; font-family:serif; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">Revisions- minor revisions offered
                                                        until finalization of design, will be free, thereafter
                                                        chargeable; these will be chargeable @₹4000/ per render
                                                        view.</span></li>
                                </ul>
                        </li>
                </ol>
                <p style="margin-top:0pt; margin-left:49.65pt; margin-bottom:0pt; text-align:justify; font-size:11pt">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-left:35.45pt; margin-bottom:12pt; text-align:justify; font-size:11pt">
                        <span style="font:7pt 'Times New Roman'"> </span><span
                                style="font-family:Verdana; font-style:italic">Please note major changes in the 3D after
                        </span><span style="font-family:Verdana; font-style:italic">finalization</span><span
                                style="font-family:Verdana; font-style:italic"> lead to revisions in 2D drawings and the
                                project timeline.</span></p>
                <ol start="4" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold">Changes and Approvals. </span></li>
                </ol>
                <p
                        style="margin-top:0pt; margin-left:35.45pt; margin-bottom:12pt; text-indent:-35.45pt; text-align:justify; font-size:11pt">
                        <span style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; font-weight:bold">Changes</span><span
                                style="font-family:Verdana">. Any major change in the Furniture Layout / Toilets /
                                Electrical &amp; other plan, leads to relook of the entire plan, and making of fresh
                                drawings, which adds on to our timeline minimum 3 working days (Designer workdays are
                                Monday to Friday). However, minor changes like an additional switch point at an existing
                                place, which do not need major modifications in the plan, will be acceptable without
                                delay clause. Changes in plans of Furniture and items to be customized, if requested to
                                be changed by The Client, will be at Fresh Cost and added to the timeline also. The
                                Client shall be responsible for any delay caused due to site restrictions / hindrances,
                                etc.</span></p>
                <p
                        style="margin-top:0pt; margin-left:35.45pt; margin-bottom:12pt; text-indent:-35.45pt; text-align:justify; font-size:11pt">
                        <span style="font:7pt 'Times New Roman'">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span><span style="font-family:Verdana; font-weight:bold">Approvals</span><span
                                style="font-family:Verdana">. To keep the pace of work speedy approvals of materials is
                                paramount. Any material, fixtures / fittings like Laminates,&nbsp; ACs, Lights, tiles,
                                electrical switches </span><span style="font-family:Verdana">etc</span><span
                                style="font-family:Verdana; font-weight:bold">,</span><span style="font-family:Verdana">
                                shall be approved by the Client within 3 working days including the day of receiving the
                                necessary files/ samples/ estimates, </span><span
                                style="font-family:Verdana">etc</span><span style="font-family:Verdana"> (files sent
                                during working hours). Any further delay or keeping approvals on hold for any reason
                                shall be added to the Project Timeline. </span></p>
                <ol start="5" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; line-height:115%; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold; text-decoration:underline">Supervision of
                                        Execution.</span><span> </span><span style="background-color:#ffffff">The
                                        Designer’s team shall do periodic supervision and provide regular
                                        guidance.</span></li>
                        <li
                                style="margin-left:16.79pt; margin-bottom:12pt; text-align:justify; padding-left:19.21pt; font-family:Verdana; font-size:11pt; font-weight:bold">
                                <span style="text-decoration:underline">Project Implementation and
                                        Completion.</span><span> </span><span style="font-weight:normal">Implementation
                                        of Work will depend on the </span><span
                                        style="font-weight:normal">finalization</span><span style="font-weight:normal">
                                        of </span><span style="font-weight:normal">the </span><span
                                        style="font-weight:normal">Design and Plans. </span><span>This is Phase 2 of the
                                        Contract and commences once the Designs are frozen. </span>
                                <ul type="disc" style="margin-right:0pt; margin-left:0pt; padding-left:0pt">
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:25.39pt; font-family:serif; font-weight:normal; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">As per the </span><span
                                                        style="font-family:Verdana; font-weight:bold; font-style:italic; text-decoration:underline">scope
                                                        discussed till date</span><span style="font-family:Verdana">,
                                                        the project is likely to be completed within </span><span
                                                        style="font-family:Verdana">50</span><span
                                                        style="font-family:Verdana"> Working days (</span><span
                                                        style="font-family:Verdana; font-weight:bold">W+</span><span
                                                        style="font-family:Verdana; font-weight:bold">50</span><span
                                                        style="font-family:Verdana; font-weight:bold">). </span><span
                                                        style="font-family:Verdana">W</span><span
                                                        style="font-family:Verdana"> shall commence from </span><span
                                                        style="font-family:Verdana">day after the </span><span
                                                        style="font-family:Verdana; font-weight:bold">Date of Signing of
                                                </span><span
                                                        style="font-family:Verdana; font-weight:bold">finalized</span><span
                                                        style="font-family:Verdana; font-weight:bold"> </span><span
                                                        style="font-family:Verdana; font-weight:bold">BoQ</span><span
                                                        style="font-family:Verdana; font-weight:bold">, </span><span
                                                        style="font-family:Verdana; font-weight:bold">Finalized</span><span
                                                        style="font-family:Verdana; font-weight:bold"> Furniture &amp;
                                                        other plans and Receipt of Project Implementation Mobilization
                                                        Advance</span><span style="font-family:Verdana">. In case of
                                                        major change in plans, the timeline shall be reassessed. </span>
                                        </li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:25.39pt; font-family:serif; font-weight:normal; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">W starts from the date of signing of
                                                        this Contract, Signing of </span><span
                                                        style="font-family:Verdana">finalized</span><span
                                                        style="font-family:Verdana"> </span><span
                                                        style="font-family:Verdana">BoQ</span><span
                                                        style="font-family:Verdana"> &amp; payment of Execution Advance
                                                        to the Company, signing of all three documents
                                                        mandatory.</span><span style="font-family:Verdana">&nbsp;
                                                </span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:25.39pt; font-family:serif; font-weight:normal; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">W is the day of commencement of Work.
                                                        Sundays will be included in Workdays. However, Holidays (like
                                                        Holi) / da</span><span style="font-family:Verdana">ys when work
                                                        is not permitted /r</span><span
                                                        style="font-family:Verdana">estrictions imposed on working, due
                                                        to any reason, will be added to the timeline. </span></li>
                                        <li
                                                style="margin-left:9.51pt; margin-bottom:12pt; padding-left:25.39pt; font-family:serif; font-weight:normal; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                                <span style="font-family:Verdana">The timeline also pertains to
                                                </span><span style="font-family:Verdana">the </span><span
                                                        style="font-family:Verdana; font-weight:bold; text-decoration:underline">freezing
                                                        of all designs</span><span style="font-family:Verdana">, except
                                                        very limited revisions /changes, as elucidated earlier. All
                                                        changes which may entail </span><span
                                                        style="font-family:Verdana">a </span><span
                                                        style="font-family:Verdana">change in Timeline will be
                                                        communicated. A detailed timeline shall be shared</span><span
                                                        style="font-family:Verdana; font-weight:bold">.</span></li>
                                </ul>
                        </li>
                </ol>
                <p
                        style="margin-top:0pt; margin-left:36pt; margin-bottom:0pt; text-align:justify; line-height:115%; font-size:11pt">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <ol start="7" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; text-align:justify; line-height:115%; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold">Suspension / Termination of Project. </span><span>If the
                                        Client </span><span>suspends/terminates</span><span> the work on the project, it
                                        will be communicated in writing </span><span>by</span><span> mail to
                                        biraj@colonelz.com. All payments for the works done as per </span><span>the
                                        Work</span><span> Schedule will be made within two working days, from the date
                                        of </span><span>suspension/cancellation</span><span> of the
                                        project</span><span>.</span><span> If No work is allowed on the Site for 15
                                        working days, by the Client or the Society, for whatever reason, the work shall
                                        be deemed as Suspended. If work is still NOT permitted
                                </span><span>for</span><span> 30 </span><span>days</span><span>, it will be deemed as
                                        Termination. </span></li>
                </ol>
                <p
                        style="margin-top:0pt; margin-left:36pt; margin-bottom:12pt; text-align:justify; line-height:115%; font-size:11pt">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold; text-decoration:underline">Design
                                Implementation Payment Terms &amp; Conditions</span></p>
                <p style="margin-top:0pt; margin-bottom:12pt; text-align:center; font-size:11pt"><span
                                style="font-family:Verdana; font-weight:bold">&nbsp;</span></p>
                <ol type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; margin-bottom:12pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Work shall commence within 5 Business days from the date of receipt of
                                        Mobilization Advance &amp; Work Contract, duly signed.</span></li>
                        <li
                                style="margin-left:15.99pt; text-align:justify; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Payment Terms for the execution is as mentioned </span><span>below</span><span> (X
                                        being the completion time):</span></li>
                </ol>
                <ul type="disc" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:46.06pt; text-align:justify; padding-left:25.94pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana; font-weight:bold">25%</span><span
                                        style="font-family:Verdana"> Mobilization Advance based on Proposed Plan.</span>
                        </li>
                        <li
                                style="margin-left:46.06pt; text-align:justify; padding-left:25.94pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana; font-weight:bold">30%</span><span
                                        style="font-family:Verdana"> on W plus </span><span
                                        style="font-family:Verdana">21</span><span style="font-family:Verdana">
                                        X.</span></li>
                        <li
                                style="margin-left:46.06pt; text-align:justify; padding-left:25.94pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana; font-weight:bold">35%</span><span
                                        style="font-family:Verdana"> on W plus </span><span
                                        style="font-family:Verdana">35</span><span style="font-family:Verdana">
                                        X.</span></li>
                        <li
                                style="margin-left:46.06pt; text-align:justify; padding-left:25.94pt; font-family:serif; font-size:11pt; -aw-font-family:'Symbol'; -aw-font-weight:normal; -aw-number-format:''">
                                <span style="font-family:Verdana; font-weight:bold">5%</span><span
                                        style="font-family:Verdana"> on Completion of Scope of Works.</span></li>
                </ul>
                <p style="margin-top:0pt; margin-left:72pt; margin-bottom:0pt; text-align:justify; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <ol start="3" type="1" style="margin:0pt; padding-left:0pt">
                        <li
                                style="margin-left:15.99pt; text-align:justify; line-height:115%; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span>Price quoted for the execution will be deemed valid for the duration of the
                                        proposed implementation. However, there may be rate revision in case the prices
                                        of input materials go up by 10% or more. GST @ 18% will be charged additionally,
                                        on the total fee. In case of any Policy Change by the
                                </span><span>Govt</span><span>, Taxes &amp; duties will be charged as per actual.
                                </span></li>
                        <li
                                style="margin-left:15.99pt; text-align:justify; line-height:115%; padding-left:20.01pt; font-family:Verdana; font-size:11pt">
                                <span style="font-weight:bold">Orders once confirmed and closed, cannot be
                                        cancelled.</span></li>
                </ol>
                <p
                        style="margin-top:0pt; margin-left:36pt; margin-bottom:12pt; text-align:justify; line-height:115%; font-size:11pt">
                        <span style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">__________________</span><span
                                style="width:18.12pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">__________________</span><span
                                style="width:18.12pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">${client_name[0]
                }</span><span
                                style="width:26.39pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">Ms</span><span style="font-family:Verdana">.</span><span
                                style="font-family:Verdana"> </span><span style="font-family:Verdana">Naomi
                                Sahay</span><span style="font-family:Verdana"> </span><span
                                style="width:7.96pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span style="font-family:Verdana">Client
                        </span><span style="width:0.57pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">Princip</span><span
                                style="font-family:Verdana">al</span><span style="font-family:Verdana">
                                Designer</span><span style="width:8.76pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt; background-color:#ffffff"><span
                                style="font-family:Verdana; font-weight:bold; color:#222222">Bank Details: </span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt; background-color:#ffffff"><span
                                style="font-family:Verdana; color:#222222">Bank</span><span
                                style="width:8.38pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">-</span><span
                                style="width:31pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">HDFC</span><span
                                style="font-family:Verdana; color:#222222"> Bank </span><span
                                style="font-family:Verdana; color:#222222">Account</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt; background-color:#ffffff"><span
                                style="font-family:Verdana; color:#222222">A/c Holder </span><span
                                style="width:9.96pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">–</span><span
                                style="font-family:Verdana; color:#222222"> </span><span
                                style="width:25.14pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#c00000">COLONELZ CONSTRUCTIONS PVT LTD</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt; background-color:#ffffff"><span
                                style="font-family:Verdana; color:#222222">A/c no.</span><span
                                style="width:32.25pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">–</span><span
                                style="font-family:Verdana; color:#222222"> </span><span
                                style="width:25.14pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222; background-color:#ffffff">50200007351695</span>
                </p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana; color:#222222">IFSC </span><span
                                style="width:5.98pt; display:inline-block">&nbsp;</span><span
                                style="width:36pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">–</span><span
                                style="font-family:Verdana; color:#222222"> </span><span
                                style="width:25.14pt; display:inline-block">&nbsp;</span><span
                                style="font-family:Verdana; color:#222222">HDFC0000043</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:11pt"><span
                                style="font-family:Verdana; color:#222222">&nbsp;</span></p>
                <p style="margin-top:0pt; margin-bottom:0pt; font-size:12pt"><span
                                style="font-family:Arial; color:#222222">&nbsp;</span></p>
                <div style="-aw-headerfooter-type:footer-primary">
                        <div style="-aw-sdt-tag:''">
                                <p style="margin-top:0pt; margin-bottom:0pt; text-align:right; font-size:10pt"><span
                                                style="-aw-field-start:true"></span><span
                                                style="-aw-field-code:' PAGE   \\* MERGEFORMAT '"></span><span
                                                style="-aw-field-separator:true"></span><span
                                                style="font-family:'Times New Roman'">1</span><span
                                                style="-aw-field-end:true"></span></p>
                        </div>
                        <p style="margin-top:0pt; margin-bottom:0pt; text-align:right; line-height:10pt"><span
                                        style="font-family:Cambria; font-size:10pt">&nbsp;</span></p>
                </div>
        </div>
</body>

</html>
   `;

        return htmlTemplate;
}

