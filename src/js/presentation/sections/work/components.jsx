import React, {Component} from "react";
import { projects } from '../../../data/seed';
import { projectsIterator } from '../../../data/iterators';
let currentProject = projectsIterator(projects); 
class SectionHeader extends Component {
  render() {
    return (
      <div className="header__grid__row is-grid-row-on-top">
        <div className="header__grid__item-xs-12 header">
          <h3 className="section__h3">#WORK</h3>
        </div>
      </div>
    );
  }
}

class Project extends Component {
  //this is the easy fix to the problem of the bind 
  /*toggleDescription = () => {
     this.props.onProjectHover(this.props.projectId);
  }*/
  toggleOnDescription() {
    this.props.onProjectHover(this.props.projectId);
   
  }
  toggleOffDescription(){
    this.props.onProjectLeave(this.props.projectId);
  }
  constructor(props){
    super(props);
    this.toggleOnDescription =this.toggleOnDescription.bind(this);
    this.toggleOffDescription = this.toggleOffDescription.bind(this);

  }
  render() {
    return (
      
      <div className="project" onMouseEnter={this.toggleOnDescription} onMouseLeave={this.toggleOffDescription} id={"project_#"+this.props.projectId}>
        <div className="project__thumbnail__overlay">
              <div className="project__desc hidden">
                <p>
                  {/*TODO: load description data for every project */}
                  {this.props.projectDesc}
                <a href="#" className="project__thumbnail__button" >More</a>
                </p>
              </div>
        </div>
      </div>
      
    );
  }
}
export class ProjectList extends Component {
  constructor(props){
    super(props);
    this.state = {
      projects : []
    }
  }
  componentDidMount(){
    this.setState({projects : projects})
  }
  toggleOnProjectDescription(projectId){
    console.log(projectId);
    let project = document.getElementById("project_#"+projectId);
    console.log(project);
    
    let elementsList = new Array(project.childNodes);
    let innerElement;
    elementsList.forEach(element => {
      innerElement = element[0].childNodes; 
      if(innerElement[0].classList.contains('hidden')){
        innerElement[0].classList.remove('hidden');
      }
      
    });
   
   
  }
  toggleOffProjectDescription(projectId){
    let project = document.getElementById("project_#" + projectId);
    console.log(project);

    let elementsList = new Array(project.childNodes);
    let innerElement;
    elementsList.forEach(element => {
      innerElement = element[0].childNodes;
      if (innerElement[0].classList.contains('project__desc')) {
        innerElement[0].classList.add('hidden');
      }

    });
  }
  render() {
    const projectsComponents = this.state.projects.map((project) => (
      <Project 
      key = {'project-'+project.id}
      projectId = {project.id}
      projectDesc = {project.desc}
      onProjectHover = {this.toggleOnProjectDescription}
      onProjectLeave = {this.toggleOffProjectDescription}
      />
    ))
    return (
      <div className="work__body__grid">
        <div className="grid__row">
          {projectsComponents}     
        </div>
      </div>
    );
  }
}
export class WorkBody extends Component {
  render() {
    return (
      <div className="work__body">
        <div className="work__body__header">
          <p>my work is a collection of <a href="#"><strong>fron-end</strong></a> 	projects using languages such as <a href="#"><strong>HTML5</strong></a>, <a href=""><strong>CSS3</strong></a> and <a href="#"><strong>JAVASCRIPT</strong></a>  and Frameworks as <a href="#"><strong>VueJs</strong></a>, <a href="#"><strong>Bootstrap 4</strong></a> and <a href="#"><strong>Semantic-ui</strong></a> and also <a href="#"><strong>Back-end</strong> </a> projects using languages : <a href="#"><strong>PHP</strong></a>, <a href="#"><strong>Ruby</strong></a> using Frameworks like <a href="#"><strong>Laravel</strong></a> and <a href="#"><strong>Ruby On Rails</strong></a> </p>
        </div>
        <ProjectList />






      </div>

    );
  }
}
export class SectionWork extends Component{
  render(){
    return (
      <section className="work section" id="work">
        <SectionHeader />
        <WorkBody />
      </section>
    );
  }
}
