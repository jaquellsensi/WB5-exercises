let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
    ];

    // When does PROG200 start? using find() or filter()
    let prog200 = courses.find(function(course) {
        return course.CourseId === "PROG200";
    });
    //console.log(prog200.StartDate);

    // What is the title of PROJ500 course?
    let proj500 = courses.find(function(course) {
        return course.CourseId === "PROJ500";
    });
    //console.log(proj500.Title);

    // What are the titles of the courses that cost $50.00 or less?
    let lessThan50 = courses.filter(function(course) {
        return course.Fee <= 50;
    });
    //console.log(lessThan50);

    // What classes meet in "Classroom 1"?
    let classroom1 = courses.filter(function(course) {
        return course.Location === "Classroom 1";
    });
    //console.log(classroom1);
