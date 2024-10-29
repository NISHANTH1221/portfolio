import "./resumesection.css"

const WorkExperienceArray = [
    {
        id: 1,
        timestamp : "Jun 2023- Nov 2023",
        role : "Web Developer Intern",
        company : "Algomatix Technologies Pvt Ltd",
        description : "I've created a website which will be used by the company to rent out warehouse's space under their command"
    }
]

const EducationDetails  = [
    {
        id: 1,
        timestamp : "Dec 2021- May 2025",
        role : "Electronics and Communication Engineering",
        company : "National Institute of Technology, Delhi",
        description : "CGPA : 8.08"
    },
    {
        id: 2,
        timestamp : "Aug 2022- May 2025",
        role : "Artificial Intelligence and Machine Learning",
        company : "National Institute of Technology, Delhi",
    }
]


const ResumeComponent = () => {
    return (
        <div id="resume" className='resumesection'>
                <div className='resumeheading'>
                    <p>My Resume</p>
                </div>
                <div className='resumecontent'>
                  <div className='workexperiencecontent'>
                    <div className='workheading'>
                        <p>Experience</p>
                    </div>
                    {
                        WorkExperienceArray.map((experience, index) => {
                            return(
                                <div key={experience.id}>
                                    <div className='workyear'>
                                        <div className='circle'>{experience.id}</div>
                                        <div>
                                            <p>
                                            {experience.timestamp}
                                            </p>
                                        </div>
                                    
                                    </div>
                                    <div className='role'>
                                        <div className='rolename'>
                                        <p>{experience.role}</p>
                                        </div>
                                        <div className='companyname'>
                                        {experience.company}
                                        </div>
                                        <div className='rolework'>
                                        <p1>{experience.description ?? ""}</p1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                  </div>
                  <div className='educationcontent'>
                      <div className='educationheading'>
                          <p>Education</p>
                      </div>
                      {
                        EducationDetails.map((education) => {
                            return(
                                <div key={education.id}>
                                    <div className='workyear'>
                                        <div className='circle'>{education.id}</div>
                                        <div>
                                            <p>
                                            {education.timestamp}
                                            </p>
                                        </div>
                                    
                                    </div>
                                    <div className='role'>
                                        <div className='rolename'>
                                        <p>{education.role}</p>
                                        </div>
                                        <div className='companyname'>
                                        {education.company}
                                        </div>
                                        <div className='rolework'>
                                        <p1>{education.description}</p1>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                      }
                  </div>
                </div>
              </div>
    );
}
 
export default ResumeComponent;