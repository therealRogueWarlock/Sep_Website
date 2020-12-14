var document, XMLHttpRequest;

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ProjectData.xml", false);
xhttp.send();
var projectDataXmlDoc = xhttp.responseXML;

//Generating the functions for getting and returning projects data
function displayRequirementName(n) {
    var x = projectDataXmlDoc.getElementsByTagName("requirementName");
    return x[n].childNodes[0].nodeValue;
}

function displayPriority(n) {
    var x = projectDataXmlDoc.getElementsByTagName("priority");
    return x[n].childNodes[0].nodeValue;
}

function displayRequirementTimeEstimate(n) {
    var x = projectDataXmlDoc.getElementsByTagName("requirementTimeEstimate");
    return x[n].childNodes[0].nodeValue;
}

function displayPercentageComplete(n) {
    var x = projectDataXmlDoc.getElementsByTagName("percentageComplete");
    return x[n].childNodes[0].nodeValue;
}

function displayStatus(n) {
    var x = projectDataXmlDoc.getElementsByTagName("status");
    return x[n].childNodes[0].nodeValue;
}

function displayRequirementDescription(n) {
    var x = projectDataXmlDoc.getElementsByTagName("requirementDescription");
    return x[n].childNodes[0].nodeValue;
}

function displayProjectName(n) {
    var x = projectDataXmlDoc.getElementsByTagName("projectName");
    return x[n].childNodes[0].nodeValue;
}

function displayProjectDescription(n) {
    var x = projectDataXmlDoc.getElementsByTagName("projectDescription");
    return x[n].childNodes[0].nodeValue;
}

function displayProjectStartDate(n) {
    var x = projectDataXmlDoc.getElementsByTagName("projectStartDate")[n];
    return xmlToDate(x);
}

function displayProjectDeadline(n) {
    var x = projectDataXmlDoc.getElementsByTagName("projectDeadline")[n];
    return xmlToDate(x, n);
}

function xmlToDate(xmlDate, n) {
    return xmlDate.getElementsByTagName("day")[0].innerHTML + "/" + xmlDate.getElementsByTagName("month")[0].innerHTML + "-" + xmlDate.getElementsByTagName("year")[0].innerHTML;
}


var htmlList2 = "";
var counter = 0;
var counterFinish = 0;




function generateProjectTableTest(projectsArray, target, projectDataXmlDoc) {
    for (var n = 0; n < projectsArray.length; n++) {
        //Få en counter af projekter inde i dette projekt!
        htmlList2 += "<div class='row align-items-center m-2 bg-secondary'>"; //<ROW>
        //Display Project Names over Tables
        htmlList2 += "<div class='col-md-4 text-center text-md-left p-3'>"; //<COL>
        htmlList2 += "<h3>" + displayProjectName(n) + "</h3></div>"; //</COL>
        htmlList2 += "<div class='col-md-4 text-center text-md-left p-3'>"; //<COL>
        htmlList2 += "<b>" + displayProjectDescription(n) + "</b></div>"; //</COL>
        //Display Project Information over Tables
        htmlList2 += "</div><div class='row align-items-center m-2'>"; //</ROW><ROW>

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-3 text-center text-md-left p-3'>"; //<COL>
        htmlList2 += "<b>Start:</b> " + displayProjectStartDate(n) + "</div>"; //</COL>

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-3 border border-solid text-center text-md-left p-3'>"; //<COL>
        htmlList2 += "<b>Deadline:</b> " + displayProjectDeadline(n) + "</div>"; //</COL>

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-3 border border-solid text-center text-md-left p-3'>"; //<COL>
        htmlList2 += "<b>Status:</b> " + displayPercentageComplete(n) + "% complete</div>"; //</COL>
        //Project Information END
        htmlList2 += "<div class='col-lg-12 col-xl'>"; //<COL>
        //Table Creation
        htmlList2 += "<table id=Project class='bg-light'" + n + ">"; //<TABLE>

        var requirements = projectsArray[n].getElementsByTagName("requirements");

        //Sæt data ind i projekt.
        htmlList2 += "<tr> <td>Requirement</td> <td>Priority</td> <td>Estimated Time</td> <td>Status</td> <td>Description</td> </tr>";
        for (var j = counterFinish; j < (requirements.length + counterFinish); j++) {
            // console.log("Display requirement iteration: " + j);
            htmlList2 += "<tr><td>" + displayRequirementName(j) + "</td><td>" + displayPriority(j) + "</td><td>"
                + displayRequirementTimeEstimate(j) + "</td><td>" + displayStatus(j) + "</td><td>" + displayRequirementDescription(j) + "</td></tr>"
            counter++;
        }

        htmlList2 += "</table></div></div>"; //</TABLE></COL></ROW>
        //Used for counting through the total list!
        counterFinish = counter;


    }
    target.innerHTML = htmlList2;
}

// table objects
var requirementList = document.getElementById("RequirementList");


// fetching array of projects from ProjectData.xml
var projectsArray = projectDataXmlDoc.getElementsByTagName("projects");

// Generating project tables!
generateProjectTableTest(projectsArray, requirementList, projectDataXmlDoc);

// This gets all requirements inside of projectsArray[1] - VIGTIG!!!!!!
//var requirementTest2 = projectsArray[1].getElementsByTagName("requirements")
//console.log(requirementTest2)

//Den skal target requirements inde i de forskellige projekter! - noget i stil af det under???
//var requirementsArray = projectDataXmlDoc.getElementsByTagName("requirements");
//console.log("Projects total: " + projectsArray.length);
//console.log("Requirements total: " + requirementsArray.length);


// Generate table with projectinformation information from ProjectData.xml
