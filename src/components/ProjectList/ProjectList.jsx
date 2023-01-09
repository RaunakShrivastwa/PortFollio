import "./ProjectList.css";
import Projects from "../Project/Project";
import { Project } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl" id="work">

      <div className="pl-texts">
      
        <p className="pl-desc">
         <h1>MY Projects</h1>
          These are My few Application , You can Cheak it 👍👍👍
        </p>
      </div>
      <div className="pl-list">
        {Project.map((item) => (
          <Projects key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;