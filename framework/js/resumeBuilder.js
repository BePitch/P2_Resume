$("#mapDiv").append(googleMap);

var bio = {
    "name": "Brandon Pitchford",
    "role": "SQL Data Analyst",
    "contacts": {
        "Mobile:": "678-XXX-XXXX",
        "Email:": "bpitchfo@gmail.com",
        "Github:": "bepitch",
        "Twitter:": "@Misc",
        "location:": "Atlanta, GA"
    },
    "welcomeMessage": "Hello and welcome to the home of Brandon Pitchford",
    "skills": ["SharePoint", "SQL Reporting", "Data Visualization", "SDLC", "Quickbase and Salesforce.com"],
    "bioPic": "images/pitch.png"
};

bio.display = function() {


    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $('#header').prepend(formattedName, formattedRole);


    for (var contact in bio.contacts) {
        if (bio.contacts[contact].length > 0) {
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]); //This is helpful for iterating on both attributes of the object/array. Forum assited me with this. Was helpful and I understand how to save code on this
            $("#topContacts, #footerContacts").append(formattedContact);
        }
    }
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
    $("#header").append(formattedPic);


    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }

};
bio.display();
var work = {
    "jobs": [{
        "employer": "Cricket Wireless",
        "title": "SQL Marketing Database Mgr.",
        "location": "Atlanta, GA",
        "dates": "10/12/2015 - Present",
        "description": "Create and build cross warehouse functional data queries and perform data aggregation via DAX scripts"
    }, {
        "employer": "Sprint",
        "title": "Sales Business Analyst II",
        "location": "Denver, CO",
        "dates": "11/17/2014 - 10/02/2015 (10 Months)",
        "description": "Responsible for sales reporting..."
    }, {
        "employer": "Sprint",
        "title": "Workforce Business Analyst",
        "location": "Denver, CO",
        "dates": "01/01/2010 - 11/16/2014",
        "description": "Served as a SharePoint development Admin while watching Bob Ross"
    }, {
        "employer": "Sprint",
        "title": "Business Continuity Manager",
        "location": "Atlanta, GA",
        "dates": "04/01/2009 - 12/31/2010",
        "description": "Protected the network by creating network nodes and monitoring Everything...Kappa"
    }, {
        "employer": "Sprint",
        "title": "Implementation Project Manager",
        "location": "Atlanta, GA",
        "dates": "08/11/2008 - 04/01/2009",
        "description": " Miscellaneous stuff that earned the company nothing"
    }, {
        "employer": "Tiresplus",
        "title": "Grease Monkey Manager",
        "location": "Augusta, GA",
        "dates": "06/18/2000 - 04/01/2008",
        "description": " Made sure people didn't break stuff, notably people's cars"
    }]
};
work.display = function() {

    for (var job in work.jobs) {
        if (work.jobs[job].employer.length > 0) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedJobDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedJobDate);

            var formattedJobLoc = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedJobLoc);

            var formattedJobDes = HTMLworkDescription.replace("%data%", work.jobs[job].description);
            $(".work-entry:last").append(formattedJobDes);
        }
    }
};
work.display();

var projects = {
    "project": [{
        "title": "Wireless Sales Reporting Tools",
        "dates": "11/17/014 - Present",
        "description": "Responsible for sales reporting and the creation of systems and tools used by the Sales Organization.",
        "images": ["images/doc.png", "images/doc.png"]
    }, {
        "title": "Staffing Management Tool",
        "dates": "02/04/2008 - 11/16/014",
        "description": "Tool built to track peoples attendance in call centers",
        "images": ["images/doc.png", "images/doc.png"]
    }]
};

projects.display = function() {

    for (var project in projects.project) {
        if (projects.project[project].title.length > 0) {
            $("#projects").append(HTMLprojectStart);

            var formattedProject = HTMLprojectTitle.replace("%data%", projects.project[project].title);
            $(".project-entry:last").append(formattedProject);

            var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
            $(".project-entry:last").append(formattedProjDates);

            var formattedProjDescrp = HTMLprojectDescription.replace("%data%", projects.project[project].description);
            $(".project-entry:last").append(formattedProjDescrp);


            for (var image in projects.project[project].images) {
                if (projects.project[project].images.length > 0) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
    }
};
projects.display();

var education = {
    "schools": [{
        "name": "Kennesaw State University",
        "location": "Kennesaw, GA",
        "degree": "B.B.A. Management",
        "dates": "01/07/2006 - 07/12/2008",
        "majors": ["Business Management"],
        "url": "http://www.kennesaw.edu"
    }, {
        "name": "University of Phoenix",
        "location": "Lone Tree, CO",
        "degree": "B.S. Information Technology",
        "dates": "08/07/2013 - 06/05/2015",
        "majors": ["Database and Information Management"],
        "url": "http://www.phoenix.edu"
    }],
    "onlineCourses": [{
        "title": "1) Into to Python Programming",
        "school": "Udacity",
        "dates": "1/3/2014 - 6/3/2014",
        "url": "http://www.udacity.com"
    }, {
        "title": "2) Front-End Web Development Nanodegree",
        "school": "Udacity",
        "dates": "11/20/2015 - Present",
        "url": "http://www.udacity.com"
    }]
};

education.display = function() {

    for (var school in education.schools) {
        if (education.schools[school].name.length > 0) {
            $("#education").append(HTMLschoolStart);

            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

            var formattedSchoolTitle = formattedName + formattedDegree;
            $(".education-entry:last").append(formattedSchoolTitle);


            var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedLocation);
            var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedDate);
            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedMajor);
        }
    }
    $(".education-entry:last").append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        if (education.onlineCourses[course].title.length > 0) {
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);

            var formattedCourseTitle = formattedOnlineTitle + formattedOnlineSchool;
            $(".education-entry:last").append(formattedCourseTitle);
            var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedDates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedURL);
        }
    }
};
education.display();

function inName() {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

var name = $("#name").text();
$('#main').append(internationalizeButton);