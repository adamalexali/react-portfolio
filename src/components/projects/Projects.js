import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Projects extends Component {
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  render() {
    return (
      <div id='allProjects' className='sectionContainer'>
        <div>
          <Link to={'/projects/modpod'}>Modpod</Link>
        </div>
        <div>
          <Link to={'/projects/echo'}>ECHO</Link>
        </div>
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            pariatur quae reiciendis quasi. Praesentium, asperiores sint alias
            quo reprehenderit molestias voluptatibus harum nihil ullam placeat
            libero, magni similique ea numquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Eius, alias quod rerum optio soluta
            fuga accusamus adipisci necessitatibus ea tempora debitis
            consequuntur doloribus delectus laborum non. Voluptate culpa
            consequuntur saepe. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic iure repudiandae ipsam alias a cumque harum
            excepturi iste quasi mollitia. Aut consectetur nulla dolores
            suscipit fugiat a iure qui at! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Placeat culpa odit cumque alias,
            deleniti incidunt aliquid est cupiditate inventore, similique ipsam
            maxime voluptatum perferendis temporibus non harum? Debitis, ipsum
            optio. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quia pariatur quae reiciendis quasi. Praesentium, asperiores sint
            alias quo reprehenderit molestias voluptatibus harum nihil ullam
            placeat libero, magni similique ea numquam. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Eius, alias quod rerum optio
            soluta fuga accusamus adipisci necessitatibus ea tempora debitis
            consequuntur doloribus delectus laborum non. Voluptate culpa
            consequuntur saepe. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic iure repudiandae ipsam alias a cumque harum
            excepturi iste quasi mollitia. Aut consectetur nulla dolores
            suscipit fugiat a iure qui at! Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Placeat culpa odit cumque alias,
            deleniti incidunt aliquid est cupiditate inventore, similique ipsam
            maxime voluptatum perferendis temporibus non harum? Debitis, ipsum
            optio.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
