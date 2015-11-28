function displaybio(){
        var bio = {
            "name" : "Brandon Pitchford",
            "role" : "SQL Data Analyst",
            "contacts" :
                {
                "Mobile:":"678-XXX-XXXX",
                "Email:": "bpitchfo@gmail.com",
                "Github:": "bepitch",
                "Twitter:": "@Misc",
                "Location:": "Atlanta, GA"
                },
            "welcomeMessage": "Hello and welcome to the home of Brandon Pitchford",
            "skills": ["SharePoint", "SQL Reporting", "Data Visualization", "SDLC", "Quickbase and Salesforce.com"],
            "bioPic": "images/fry.jpg"
        }
        
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $('#header').prepend(formattedName, formattedRole);
                
        for (var contact in bio.contacts) {      
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);  //This is helpful for iterating on both attributes of the object/array. Forum assited me with this. Was helpful and I understand how to save code on this
            $("#topContacts, #footerContacts").append(formattedContact);                                                        
        }    
        
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
        var formattedPic = HTMLbioPic.replace("%data%","images/self.jpg");   
        $("#header").append(formattedPic);
        
        
        if (bio.skills.length > 0){
            $("#header").append(HTMLskillsStart);
            
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
            $("#skills").append(formattedSkill);  
        }
        
        }
displaybio();

function displaywork(){
    var work = {
    "jobs": [
        {
         "employer": "Cricket Wireless",
         "title": "SQL Marketing Database Mgr.",
         "location": "Atlanta, GA",
         "dates": "10/12/2015 - Present",
         "description": "Create and build cross warehouse functional data queries and perform data aggregation via DAX scripts"
        },
        {
         "employer": "Sprint",
         "title": "Sales Business Analyst II",
         "location": "Denver, CO",
         "dates": "11/17/2014 - 10/02/2015 (10 Months)",
         "description": "Responsible for sales reporting and the creation of systems and tools used by the Sales Organization."
        },
        {
         "employer": "Sprint",
         "title": "Workforce Business Analyst",
         "location": "Denver, CO",
         "dates": "01/01/2010 - 11/16/2014",
         "description": "Served as a SharePoint development Admin and provided reporting to corporate liable call centers employed by over 2,800 employees."
        },
        {
         "employer": "Sprint",
         "title": "Business Continuity Manager",
         "location": "Atlanta, GA",
         "dates": "04/01/2009 - 12/31/2010",
         "description": ""
        },
        {
         "employer": "Sprint",
         "title": "Implementation Project Manager",
         "location": "Atlanta, GA",
         "dates": "08/11/2008 - 04/01/2009",
         "description": ""
        }
        
    ]
}
    for (job in work.jobs) {
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
displaywork();

function displayprojects(){
    var projects = {
        "project": [
            {
             "title": "Wireless Sales Reporting Tools",
             "dates": "11/17/014 - Present",
             "description": "Responsible for sales reporting and the creation of systems and tools used by the Sales Organization.",
             "images":["images/doc.png", "images/doc.png"]
            }
        ]
    }
    for (project in projects.project) {
            $("#projects").append(HTMLprojectStart);
        
            var formattedProject = HTMLprojectTitle.replace("%data%", projects.project[project].title);
            $(".project-entry:last").append(formattedProject);
            
            var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[project].dates);
            $(".project-entry:last").append(formattedProjDates);
            
            var formattedProjDescrp = HTMLprojectDescription.replace("%data%", projects.project[project].description);
            $(".project-entry:last").append(formattedProjDescrp);
            
            if (projects.project[project].images.length > 0) {
                for (image in projects.project[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.project[project].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
    }
    }
}
displayprojects();

function displayeducation(){
var education = {
    "schools": [
        {
        "name" :"Kennesaw State University",
        "location": "Kennesaw, GA",
        "degree": "B.B.A.",
        "majors":["Business Management"],
        "url":"http://www.kennesaw.edu"
        },
        {
        "name" :"University of Phoenix",
        "location": "Lone Tree, CO",
        "degree": "B.S. Information Technology",
        "majors": ["Database and Information Management"],
        "url": "http://www.phoenix.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Into to Python Programming",
            "school": "Udacity",
            "dates": "1/3/2014 - 6/3/2014",
            "url": "http://www.udacity.com"
        }
    ]
}
}

function inName() {
    var name = window.name;
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    
    return name[0] +" "+name[1];
}
var name = $("#name").text();
$('#main').append(internationalizeButton);

$("#mapDiv").append(googleMap);