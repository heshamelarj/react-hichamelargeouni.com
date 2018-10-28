import React, { Component } from "react";

class AboutMePicture extends Component {
  render() {
    return (
      <div className="about__grid__item-xs-4">
        <div className="about__img">
          <img src={require('../../../../img/aboutMePicture.jpg')} />
        </div>
      </div>
    );
  }
}
class AboutMeIntro extends Component {
  render() {
    return (
      <div className="about__grid__item-xs-12">
        <div className="about__text">
          <h3 className="about__text__header animate-typewriter-0">Welcome!</h3>
          <div className="about__text__item-xs-12">
            <p className="line-1 animate-typewriter-1">My name is HICHAM EL-ARGEOUNI .</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-2 animate-typewriter-2">I'm a fullstack web Developper.</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-3 animate-typewriter-3">Currently i Live in Oujda-Morocco.</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-4 animate-typewriter-4">My website is a three main sections :</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-5 animate-typewriter-5">Section One : my recent  <a href="#work">work</a>.</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-6 animate-typewriter-6">Section Two : my recent <a href="#blog">blog posts</a>.</p>
          </div>
          <div className="about__text__item-xs-12">
            <p className="line-7 animate-typewriter-7">Section Three : is the <a href="#contact">contact form</a>.</p>
          </div>
        </div>
      </div>
    );
  }
}
export class SectionAbout extends Component {
  render() {
    return (
      <section className="about section" id="about">
        <div className="about__inner">
          <div className="overlay__about">
            <div className="about__grid__row">
              <React.Fragment>
                <AboutMePicture />
                <AboutMeIntro />
              </React.Fragment>
            </div>
          </div>
        </div>
      </section>
    );
  }
}