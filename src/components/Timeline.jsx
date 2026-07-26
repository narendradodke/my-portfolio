import {
  FaGraduationCap,
  FaCode,
  FaLaptopCode,
  FaBullseye,
  FaGlobe
} from "react-icons/fa";




function Timeline(){


const timeline=[


{
id:1,
year:"2024",
icon:<FaGraduationCap />,
title:"Started BCA",
description:
"Started Bachelor of Computer Applications. Learned programming languages like C and C++."
},



{
id:2,
year:"2025",
icon:<FaCode />,
title:"Frontend Development",
description:
"Learned HTML, CSS, JavaScript and RDBMS using MySQL."
},




{
id:3,
year:"2026",
icon:<FaLaptopCode />,
title:"Programming Skills",
description:
"Worked with Java, Python, VB.NET, ASP.NET, PHP and React."
},




{
id:4,
year:"2026",
icon:<FaGlobe />,
title:"Website Development",
description:
"Built Portfolio Website and Hospital Management System."
},




{
id:5,
year:"2027",
icon:<FaBullseye />,
title:"Future Goal",
description:
"Planning to pursue MCA and become a Software Engineer."
}



];




return(


<section
id="timeline"
className="timeline-section animate-on-scroll"
>


<p className="section-subtitle">
My Journey
</p>



<h2>
Experience Timeline
</h2>





<div className="timeline">



{

timeline.map((item)=>(


<div
className="timeline-item"
key={item.id}
>



<div className="timeline-dot">

{item.icon}

</div>





<div className="timeline-content">


<span className="timeline-year">

{item.year}

</span>



<h3>

{item.title}

</h3>




<p>

{item.description}

</p>




</div>




</div>


))


}



</div>




</section>



);


}


export default Timeline;