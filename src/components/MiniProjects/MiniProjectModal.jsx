import "./MiniProjectModal.css";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaClock,
  FaStar,
} from "react-icons/fa";


function MiniProjectModal({ project, onClose }) {


  if (!project) return null;


  return (

    <div 
      className="modal-overlay"
      onClick={onClose}
    >


      <div
        className="modal-container"
        onClick={(e)=>e.stopPropagation()}
      >


        {/* Close Button */}

        <button
          className="modal-close"
          onClick={onClose}
        >

          <FaTimes />

        </button>



        {/* Header */}

        <div className="modal-header">

          <h2>
            {project.title}
          </h2>


          <p>
            {project.description}
          </p>

        </div>




        {/* Project Image */}

        <div className="modal-image-box">

          <img
            src={project.image}
            alt={project.title}
          />

        </div>





        {/* Project Info */}

        <div className="modal-details">


          <div className="detail-card">

            <FaClock />

            <h4>
              Duration
            </h4>

            <p>
              {project.duration}
            </p>

          </div>



          <div className="detail-card">

            <FaStar />

            <h4>
              Rating
            </h4>

            <p>
              {project.rating}
            </p>

          </div>



        </div>





        {/* Technologies */}

        <h3>
          Technologies
        </h3>


        <div className="tech-list">


          {
            project.technologies?.map((tech)=>(

              <span key={tech}>
                {tech}
              </span>

            ))
          }


        </div>





        {/* Features */}

        <h3>
          Features
        </h3>



        <ul className="feature-list">


          {
            project.features?.map((feature)=>(

              <li key={feature}>

                ✔ {feature}

              </li>

            ))
          }


        </ul>







        {/* Buttons */}


        <div className="modal-buttons">



          {
            project.github &&

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="modal-btn github-btn"
            >

              <FaGithub />

              GitHub

            </a>

          }





          {
            project.live &&

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="modal-btn demo-btn"
            >

              <FaExternalLinkAlt />

              Live Demo


            </a>

          }



        </div>



      </div>


    </div>


  );

}


export default MiniProjectModal;