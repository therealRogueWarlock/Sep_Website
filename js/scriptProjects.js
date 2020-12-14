var document, XMLHttpRequest;

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
        htmlList2 += "<div class=row align-items-center m-2 bg-white>";
        //Display Project Names over Tables
        htmlList2 += "<div class='col-md-4 border border-solid text-center text-md-left p-3'>";
        htmlList2 += "<h3>" + displayProjectName(n) + "</h3></div>";
        htmlList2 += "<div class='col-md-4 border border-solid text-center text-md-left p-3'>";
        htmlList2 += "<b>" + displayProjectDescription(n) + "</b></div>";
        //Display Project Information over Tables
        htmlList2 += "</div><div class='row align-items-center m-2'>";

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-2 border border-solid text-center text-md-left p-3'>";
        htmlList2 += "<b>Start:</b> " + displayProjectStartDate(n) + "</div>";

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-3 border border-solid text-center text-md-left p-3'>";
        htmlList2 += "<b>Deadline:</b> " + displayProjectDeadline(n) + "</div>";

        htmlList2 += "<div class='bg-light col-md col-lg-3 col-xl-3 border border-solid text-center text-md-left p-3'>";
        htmlList2 += "<b>Status:</b> " + displayPercentageComplete(n) + "% complete</div>";
        //Project Information END
        //htmlList2 += "</div><div class='row align-items-center m-2'>";
        //Table Creation
        htmlList2 += "<div class='col-xl-4'><table id=Project class='bg-light'" + n + ">";

        var requirements = projectsArray[n].getElementsByTagName("requirements");

        //Sæt data ind i projekt.
        htmlList2 += "<tr> <td>Requirement</td> <td>Priority</td> <td>Estimated Time</td> <td>Status</td> <td>Description</td> </tr>";
        for (var j = counterFinish; j < (requirements.length + counterFinish); j++) {
            // console.log("Display requirement iteration: " + j);
            htmlList2 += "<tr><td>" + displayRequirementName(j) + "</td><td>" + displayPriority(j) + "</td><td>" + displayRequirementTimeEstimate(j) + "</td><td>" + displayStatus(j) + "</td><td>" + displayRequirementDescription(j) + "</td></tr>"
            counter++;
        }

        htmlList2 += "</table></div></div>";
        //Used for counting through the total list!
        counterFinish = counter;


    }
    target.innerHTML = htmlList2;
}







//Function for generating the list
/*
function generateProjectTable(projectsArray, target, projectDataXmlDoc) {
    var htmlList2 = "<tr><td><b>Requirement name</b></td><td><b>Priority</b></td><td><b>Time estimate</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>";

    for (var n = 0; n < projectsArray.length; n++) {
        htmlList2 += "<tr><td>" + displayRequirementName(n) + "</td><td>" + displayPriority(n) + "</td><td>" + displayRequirementTimeEstimate(n) + "</td><td>" + displayStatus(n) + "</td><td>" + displayRequirementDescription(n) + "</td></tr>"
    }
    target.innerHTML = htmlList2;
}
*/

/*
function generateProjectTableTest(projectsArray, target, projectDataXmlDoc) {
    var htmlList2;   

    
    for (var j = 0; j <projectsArray.length; n++)
        {
            //Få en counter af projekter inde i dette projekt!
            htmlList2 += "<table id=Project" + n + ">";
            
    for (var n = 0; n < projectsArray.length; n++) {
        htmlList2 += "<tr><td><b>Requirement name</b></td><td><b>Priority</b></td><td><b>Time estimate</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>"; 
        
        htmlList2 += "<tr><td>" + displayRequirementName(n) + "</td><td>" + displayPriority(n) + "</td><td>" + displayRequirementTimeEstimate(n) + "</td><td>" + displayStatus(n)  + "</td><td>" + displayRequirementDescription(n) + "</td></tr>";
    }
            htmlList2 += "</table>"
            
         }
    target.innerHTML = htmlList2;
}
*/
/*
function getAmountOfRequirementsInsideProjects(giveMeArray, target, projectDataXmlDoc) {

    var htmlList2 = "<tr><td><b>Requirement name</b></td><td><b>Priority</b></td><td><b>Time estimate</b></td><td><b>Status</b></td><td><b>Description</b></td></tr>";

    for (var n = 0; n < giveMeArray.length; n++) {
        var requirements = giveMeArray[n].getElementsByTagName("requirements");
        console.log(requirements.length);



        for (var j = 0; j < requirements.length; j++) {
            htmlList2 += "<tr><td>" + displayRequirementName(j, projectDataXmlDoc) + "</td><td>" + displayPriority(j, projectDataXmlDoc) + "</td><td>" + displayRequirementTimeEstimate(j, projectDataXmlDoc) + "</td><td>" + displayStatus(j, projectDataXmlDoc) + "</td><td>" + displayRequirementDescription(j, projectDataXmlDoc) + "</td></tr>"
            //Kalder på 1,2,3,1,2,1,2,3 (Men skal kalde på 1,2,3 og så 1,2 og så 1,2)
        }

    }
    target.innerHTML = htmlList2;
    //Nu får vi antal requirements under hvert projekt, vi skal lave et tabel, der bruger DISSE requirements!!


}
*/


// table objects
var requirementList = document.getElementById("RequirementList");

// Requesting data from ProjectData.xml
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "ProjectData.xml", false);
xhttp.send();
var projectDataXmlDoc = xhttp.responseXML;


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
