import React from "react";

function ProjectDetails(props) {
  //   console.log(props);
  const id = props.match.params.id;

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project {id}</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Laudantium, repellendus, aperiam earum recusandae magni deleniti at
            libero nam, ipsa delectus consectetur quaerat quam. Molestias dolor
            excepturi explicabo nobis! Ducimus, cupiditate!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by WishDev</div>
          <div>12 May 2020, 7.20PM</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
