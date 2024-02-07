import React, { useState } from "react";
import "./imageslider.css";
function Imageslider({slides}){
    const [imageIndex,setImageIndex]=useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
    const imagestyle={
        width:"85%",
        height:"500px",
        marginRight:"auto",
        marginLeft:"auto",
        borderRadius: !isHovering? "20px":"50px",
        backgroundImage: `url(${slides[imageIndex].url})`,
        backgroundSize:"contain", 
        backgroundRepeat:"no-Repeat",
        backgroundPosition:"center",
    }
    // const imagehoverstyle={
    //     width:"85%",
    //     height:"500px",
    //     marginRight:"auto",
    //     marginLeft:"auto",
    //     borderRadius:"60px",
    //     backgroundImage:`linear-gradient(to bottom,transparent,50% rgb(23,27,28)),url(${slides[imageIndex].url})`,
    //     backgroundSize:"contain", 
    //     backgroundRepeat:"no-Repeat",
    //     backgroundPosition:"center",
    //     content:`${slides[imageIndex].title}`, 
    // }
    const lefticonstyles={
        fontSize:"2em",
        color:"white",
        position:"absolute",
        top:"50%",
        left:"3%",
        cursor:"pointer"
    }
    const righticonstyles={
        fontSize:"2em",
        color:"white",
        position:"absolute",
        top:"50%",
        left:"96%",
        cursor:"pointer"
    }
    const projectdescriptionstyle={
        textAlign:"center",
        width:"100%",
        height:"auto",
        marginTop:"20px",
    }
    const handleleftclick=()=>{
        if (imageIndex !== 0) {
            setImageIndex(imageIndex - 1);
        } else {
            setImageIndex(slides.length - 1);
        };
    }
    const handlerightclick=()=>{
        setImageIndex((imageIndex + 1) % slides.length);
    }
    return(
        <>
           <div className="imagesliderbody">
           <div ></div>
           <div style={lefticonstyles} onClick={()=>handleleftclick()}>❮</div>
           <div style={righticonstyles} onClick={()=>handlerightclick()}>❯</div>
              <div style={imagestyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}></div>
              <div style={projectdescriptionstyle}>{slides[imageIndex].title}</div>  
           </div>
        </>
    )
}
export default Imageslider;