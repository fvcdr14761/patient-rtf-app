function generateRTF() {
  let text = document.getElementById("input").value;

  // Convert each line to an RTF paragraph
  let rtfContent = text
    .split("\n")
    .map(line => line.trim() + "\\par")
    .join("\n");

  // RTF document template
  const rtf =
`{\\rtf1\\ansi
{\\fonttbl{\\f0 Arial;}}
\\margl720\\margr720\\margt720\\margb720
\\f0\\fs24
\\pard\\sa200\\sb200\\box\\brdrs\\brdrw20
${rtfContent}
}`;

  const blob = new Blob([rtf], { type: "text/rtf" });
  const url = URL.createObjectURL(blob);

  // Trigger file download
  const link = document.createElement("a");
  link.href = url;
  link.download = "PatientList.rtf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
