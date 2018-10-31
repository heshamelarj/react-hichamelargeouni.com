import React, {Component} from "react";
import { projects } from '../../../data/seed';
import cx from 'classnames'; //import the classname utility cx
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

class InnerProject extends Component{
  render(){
    return(
      <div className="project" onMouseOver={this.props.onProjectHover} onMouseLeave={this.props.onProjectLeave} id={"project_#" + this.props.projectId}>
        <div className="project__thumbnail__container">
          <img src={require(`../../../../img/bg_${this.props.projectId}.jpg`)} className="project__thumbnail__img" alt="project thumbnail" />
        </div>
        <div className="project-title">
          <h3 className="project-tittle__header">{this.props.projectTitle}</h3>
        </div>
          <div className={this.props.classNames}>
            <p>
              {/*TODO: load description data for every project */}
              {this.props.projectDesc}
            </p>
            <a href="#readmore" className="project__thumbnail__button" >Read More</a>
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
  
  handleMouseOver() {   
    this.setState({ isHovering: true });
  }
  handleMouseLeave(){
    this.setState({ isHovering: false });
  }
  constructor(props){
    super(props);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.state = {
      isHovering: false
    }
  }
  render() {
    var classes = cx([
      this.state.isHovering && 'hover',
      !this.state.isHovering && 'project__desc'
    ])
    return (
      <InnerProject 
        projectId = {this.props.projectId}
        projectTitle = {this.props.projectTitle}
        projectDesc = {this.props.projectDesc}
        projectImg = {this.props.imgUrl}
       classNames = { cx(classes) } 
        onProjectHover={this.handleMouseOver }
        onProjectLeave={this.handleMouseLeave }
      />
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
  render() {

    const projectsComponents = this.state.projects.map((project) => (
      <Project 
      key = {'project-'+project.id}
      projectId = {project.id}
      projectTitle= {project.title}
      projectDesc = {project.desc}
      projectImg = {project.imgUrl}
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
          <p>my work is a collection of <a href="#frontend"><strong>fron-end</strong></a> 	projects using languages such as <a href="#html"><strong>HTML5</strong></a>, <a href="#css3"><strong>CSS3</strong></a> and <a href="#js"><strong>JAVASCRIPT</strong></a>  and Frameworks as <a href="#something"><strong>VueJs</strong></a>, <a href="#something"><strong>Bootstrap 4</strong></a> and <a href="#something"><strong>Semantic-ui</strong></a> and also <a href="#something"><strong>Back-end</strong> </a> projects using languages : <a href="#something"><strong>PHP</strong></a>, <a href="#something"><strong>Ruby</strong></a> using Frameworks like <a href="#something"><strong>Laravel</strong></a> and <a href="#something"><strong>Ruby On Rails</strong></a> </p>
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
