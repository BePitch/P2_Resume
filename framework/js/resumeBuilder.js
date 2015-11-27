function displaybio(){
        var bio = {
            "name" : "Brandon Pitchford",
            "role" : "Business Analyst",
            "contacts" :
                {
                "mobile:":"678-463-2895",
                "email:": "bpitchfo@gmail.com",
                "github:": "bepitch",
                "twitter:": "@bepitch",
                "location:": "Denver"
                },
            "welcomeMessage": "Hello and welcome to the home of Brandon Pitchford",
            "skills": ["SharePoint", "SQL Reporting", "Data Visualization", "SDLC", "Quickbase and Salesforce.com"],
            "bioPic": "images/fry.jpg"
        }
        
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").append(formattedName);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").append(formattedRole);
                
        for (var contact in bio.contacts) {
                        
            var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);  //This is helpful for iterating on both attributes of the object/array. Forum assited me with this. Was helpful and I understand how to save code on this
            $("#topContacts, #footerContacts").append(formattedContact);                                                        
        }  
                
        
        var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcome);
        var formattedPic = HTMLbioPic.replace("%data%","images/fry.jpg");   
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
         "employer": "Sprint",
         "title": "Sales Business Analyst II",
         "location": "Denver, CO",
         "dates": "11/17/014 - Present",
         "description": "Responsible for sales reporting and the creation of systems and tools used by the Sales Organization."
        },
        {
         "employer": "Sprint",
         "title": "Workforce Business Analyst",
         "location": "Denver, CO",
         "dates": "01/01/2010 - 11/16/2014",
         "description": "Served as a SharePoint development Admin and provided reporting to corporate liable call centers employed by over 2,800 employees."
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
             "images":["(insert image array here)", "2nd image here like https://www.image.com"]
            }
        ]
    }
    for (proj in projects.project) {
            $("#projects").append(HTMLprojectStart);
        
            var formattedProject = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
            $(".project-entry:last").append(formattedProject);
            
            var formattedProjDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
            $(".project-entry:last").append(formattedProjDates);
            
            var formattedProjDescrp = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
            $(".project-entry:last").append(formattedProjDescrp);
            
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
