var document, XMLHttpRequest;
// Requesting data from ProjectData.xml
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ProjectData.xml", false);
xhttp.send();
var projectDataXmlDoc = xhttp.responseXML;
//export {projectDataXmlDoc};

function displayProjectName(n) {
    var x = projectDataXmlDoc.getElementsByTagName("projectName");
    return x[n].childNodes[0].nodeValue;
}


function displayPercentageComplete(n) {
    var x = projectDataXmlDoc.getElementsByTagName("percentageComplete");
    return x[n].childNodes[0].nodeValue;
}


function generateProgressTable(projectsArray){
    var htmlList2 = "";

    // generate table
    for (var n = 0; n < projectsArray.length; n++) {
        console.log(n);
        htmlList2 += "<tr>\n" +
        "              <th scope=\"row\">1</th>\n" +
        "              <td><a >" + displayProjectName(n) + "</a></td>\n" +
        "              <td>\n" +
        "                <div class=\"progress\">\n" +
        "                  <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" " +
        "aria-valuenow=\"" + displayPercentageComplete(n)+ "\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n" +
        "                        style=\"width:65%\">\n" +
        "                    <span class=\"sr-only\">" + displayPercentageComplete(n)+ "% Complete</span>\n" +
        "                  </div>\n" +
        "                </div>\n" +
        "              </td>\n" +
        "            </tr>"

        console.log(htmlList2);
    }

    // setting the innerHtml of the progressTable
    document.getElementById("progressTable").innerHTML = htmlList2;

}



var projectsArray =
    projectDataXmlDoc.getElementsByTagName("projects");


generateProgressTable(projectsArray);
