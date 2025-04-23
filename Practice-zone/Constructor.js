// adding a constructor 
// adding function inside a construct

// Initialize a Constructor
function StudentInfo(Name, Roll, Section, Office, CGPA) {
    this.Name = Name;
    this.Roll = Roll;
    this.Section = Section;
    this.Office = Office;
    this.CGPA = CGPA;
}

var student1 = new StudentInfo("Sadiqul Islam", 2054901063, 'A', "Genex InfoSys PLC", 3.45);
var student2 = new StudentInfo("Nasrullah Naum", 2054901065, 'B', "Northern University", 3.75);
var student3 = new StudentInfo("Sajid Fahim", 2054901088, 'C', "Abroad", 3.37);

console.log(student1.CGPA);
console.log(student2.CGPA);
console.log(student3.Office);



//Adding function inside a construct
function StudentInfo(Name, Roll, Section, Office, CGPA) {
    this.Name = Name;
    this.Roll = Roll;
    this.Section = Section;
    this.Office = Office;
    this.CGPA = CGPA;

    this.ShowMe = function () {
        console.log(this.Name);
        console.log(this.Roll);
        console.log(this.Section);
        console.log(this.Office);
        console.log(this.CGPA);
    }



}

var student1 = new StudentInfo("Sadiqul Islam", 2054901063, 'A', "Genex InfoSys PLC", 3.45);
var student2 = new StudentInfo("Nasrullah Naum", 2054901065, 'B', "Northern University", 3.75);
var student3 = new StudentInfo("Sajid Fahim", 2054901088, 'C', "Abroad", 3.37);

student1.ShowMe();