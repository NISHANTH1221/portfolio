import React from "react";
import "./projects.css";
import Imageslider from "./imageslider";
function Projects(){
    const slides=[
        {
            url:"/portfolio/image-1.png",
            title:"Discover a revolutionary platform that transforms the storage landscape in India. WarehouseHub is your go-to destination for efficient warehousing and inventory management. For customers, we offer a diverse range of warehouses categorized into Dry Freezer, and Chiller, ensuring tailored storage solutions. Partners enjoy a seamless onboarding experience, empowering them to add and manage warehouses effortlessly. Admins maintain oversight, verifying partners and facilitating collaborative inventory management. With transparent inventory tracking, users gain real-time insights and historical data for informed decision-making. WarehouseHub is not just a platform; it's a dynamic ecosystem, redefining how businesses approach storage solutions. Welcome to the future of warehousing!"
        },
        {
            url:"/portfolio/image-2.png",
            title:"I've buit this portfolio entirely from scratch using React Js and CSS. This profile is version 1 of my portfolio and I am planning to update my website in some time. Currently working on some AI tools ideas."
        },
        {
            url:"/portfolio/image-3.jpeg",
            title:"Working on better AI projects"
        }
    ];
    return(
        <>
            <div className="projects">
                <div className="projectsheading">
                     <p>Projects</p>
                </div>
                <div className="projectscontent">
                    <Imageslider slides={slides}/>
                </div>
            </div>
        </>
    )
}

export default  Projects;