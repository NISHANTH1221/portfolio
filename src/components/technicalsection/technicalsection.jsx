import React from "react";
import "./technicalsection.css";
import htmlicon from "../../assets/icons8-html.svg"
import cssicon  from "../../assets/icons8-css.svg"
import jsicon  from "../../assets/icons8-javascript.svg"
import reacticon from "../../assets/icons8-react-js.svg"
import mongodbicon from "../../assets/icons8-mongodb.svg"
import nodeicon from "../../assets/icons8-nodejs.svg"
import mysqlicon from "../../assets/icons8-mysql.svg"
import expressicon from "../../assets/icons8-express-js.svg"
import jwticon from "../../assets/icons8-jwt.svg"
import pythonicon from  "../../assets/icons8-python.svg"
import nextjs from "../../assets/icons8-nextjs.svg"
import tailwindcss from "../../assets/icons8-tailwindcss.svg"
import prisma from "../../assets/icons8-prisma-orm.svg"
import typescript from "../../assets/icons8-typescript.svg"


const Icons = [
    {
        name : "NextJS",
        icon : nextjs
    },
    {
        name : "TailwindCSS",
        icon : tailwindcss
    },
    {
        name : "Prisma",
        icon : prisma
    },
    {
        name: "Typescript",
        icon : typescript
    },
    {
        name : "React JS",
        icon : reacticon
    },
    {
        name : "Express JS",
        icon : expressicon
    },
    {
        name : "Node JS",
        icon : nodeicon
    },
    {
        name : "MongoDB",
        icon : mongodbicon
    },
    {
        name : "Python",
        icon : pythonicon
    },
    {
        name : "JavaScript",
        icon : jsicon
    }
]
const TechnicalSection= () => {
    return (
        <>
            <div className='technicalskills'>
                 <div className='technicalskillsheading'>
                    <p>
                      Technical Skills
                    </p>
                 </div>
                 <div className='skillsiconsdiv'>
                    {
                        Icons.map((icon)=>{
                            return(
                                <div className='iconsdiv' key={icon.name}>
                                    <div className='icon'>
                                        <img src={icon.icon}/>
                                    </div>
                                    <div className='skillname'>
                                    <p>{icon.name}</p>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                 </div>
            </div>
        </>
    );
}
 
export default TechnicalSection