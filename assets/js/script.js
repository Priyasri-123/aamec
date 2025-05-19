// script.js

// Sample array of faculty members
const facultyMembers = [
    { name: 'Dr. K. Velmurugan', designation: 'Professor / Head', qualification: 'ME,MBA,Ph.D.', specialization: 'Software Engineering',profileLink: 'https://a.storyblok.com/f/286279/x/56b0f2e0f5/hod-sir.pdf'},
    { name: 'Dr. G. Nanthakumar	', designation: 'Professor', qualification: 'ME,Ph.D.', specialization: 'Mobile Computing',profileLink:'https://a.storyblok.com/f/286279/x/28a9867f8c/faculty-profilegn.pdf' },
    { name: 'Dr. T. Vigneswari', designation: 'Associate Professor', qualification: 'B.E., M.Tech(Project Management)M.E(CSE)., Ph.D.,', specialization: 'Distributed Systems, Internet of Things',profileLink:'https://a.storyblok.com/f/286279/x/fc2c683d70/faculty-profilee-vg.pdf' },
    { name: 'Mr. R.Arunachalam', designation: 'Assistant professor', qualification: 'M.E.', specialization: 'Software Engineering',profileLink:'https://a.storyblok.com/f/286279/x/90f00e909c/arunachalam-sir.pdf' },
    { name: 'Mr. P. Manikanda Prabu', designation: 'Asst. Professor', qualification: 'M.E.(Ph.D)', specialization: 'Compiler Design',profileLink:'https://a.storyblok.com/f/286279/x/3e66f53609/manikandaprabu-profile.pdf' },
    { name: 'Ms. K. Karthika', designation: 'Asst. Professor', qualification: 'M.E.', specialization: 'Database Management Systems',profileLink:'https://a.storyblok.com/f/286279/x/81cd970da1/karthika-k-faculty-profile.pdf' },
    { name: 'Mr. K. Pazhanivel', designation: 'Asst. Professor', qualification: 'M.E.', specialization: 'Computer Networks',profileLink:'https://a.storyblok.com/f/286279/x/023448cbdf/k-pazhanivel-profile.pdf' },
    { name: 'Mr. P. Dinesh', designation: 'Asst. Professor', qualification: 'M.E.', specialization: 'Design and Analysis of Algorithms',profileLink:'https://a.storyblok.com/f/286279/x/9808f74ad9/dinesh-p-profile-1-19-7-2024.pdf' },
    { name: 'Mrs. G. Kalaiselvi', designation: 'Asst. Professor', qualification: 'M.E.(Ph.D)', specialization: 'Computer Architecture',profileLink:'https://a.storyblok.com/f/286279/x/5ad323e10b/faculty-profile_gk.pdf' },
    { name: 'Mrs. P. Elakkiya', designation: 'Asst. Professor', qualification: 'M.E.', specialization: 'Python Programming',profileLink:'https://a.storyblok.com/f/286279/x/30c47f2e8f/pe_faculty-profile.pdf' },
    { name: 'Mrs. K. Nithiya', designation: 'Asst. Professor', qualification: 'M.E.', specialization: 'Python Programming',profileLink:'https://a.storyblok.com/f/286279/x/f733ba9ee2/nithya.pdf' },
    { name: 'Mrs. J. B. Pradeepa', designation: 'Asst. Professor', qualification: 'M.Tech', specialization: 'Java Programming',profileLink:'https://a.storyblok.com/f/286279/x/43c154d8b2/pradeepa-mam.pdf' },
    { name: 'Mrs.K.Suganthi', designation: 'Asst. Professor', qualification: 'M.Tech.(Ph.D)', specialization: 'Networks Security',profileLink:'https://a.storyblok.com/f/286279/x/b7b1398c7c/ks_faculty_profile-1.pdf' }
    
];

// Function to display faculty members
function displayFaculty(facultyMembers) {
    const facultyListDiv = document.getElementById('faculty-list');
    facultyListDiv.innerHTML = ''; // Clear previous content

    facultyMembers.forEach(member => {
        // Create faculty container
        const facultyDiv = document.createElement('div');
        facultyDiv.className = 'faculty';

        // Create faculty name element
        const nameElement = document.createElement('div');
        nameElement.className = 'faculty-name';
        nameElement.textContent = member.name;

        // Create designation element
        const designationElement = document.createElement('div');
        designationElement.textContent = `Designation: ${member.designation}`;

        // Create qualification element
        const qualificationElement = document.createElement('div');
        qualificationElement.textContent = `Qualification: ${member.qualification}`;

        // Create specialization element
        const specializationElement = document.createElement('div');
        specializationElement.textContent = `Specialization: ${member.specialization}`;

        // Create profile link element
        const linkElement = document.createElement('a');
        linkElement.href = member.profileLink;
        linkElement.textContent = 'View Profile';
        linkElement.target = "_blank"; // Open link in a new tab

        // Append all elements to the faculty container
        facultyDiv.appendChild(nameElement);
        facultyDiv.appendChild(designationElement);
        facultyDiv.appendChild(qualificationElement);
        facultyDiv.appendChild(specializationElement);
        facultyDiv.appendChild(linkElement); // Append link at the end


        // Append faculty container to the faculty list
        facultyListDiv.appendChild(facultyDiv);
    });
}

// Call the function to display faculty members
displayFaculty(facultyMembers);
