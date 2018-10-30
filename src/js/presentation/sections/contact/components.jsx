import React, { Component } from "react";
class SectionHeader extends Component {
  render() {
    return (
      <div className="header__grid__row is-grid-row-on-top">
        <div className="header__grid__item-xs-12 header">
          <h3 className="section__h3">#CONTACT</h3>
        </div>
      </div>
    );
  }
}
class ContactForm extends Component{
  render(){
    return(
      <form>
        <div className="contact__body__grid__item-xs-12">
          <div className="contact__body__input__group">
            <input type="text" id="name" placeholder="Your Name"/>
        </div>
        </div>
        <div className="contact__body__grid__item-xs-12">
          <div className="contact__body__input__group">
            <input type="email" id="email" placeholder="Your Email"/>
          </div>
        </div>
        <div className="contact__body__grid__item-xs-12">
          <div className="contact__body__input__group">
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="contact__body__form__controls">
          <input type="submit" name="send" id="send" value="SEND"/>
          <input type="button" name="cancel" id="cancel" value="Cancel" />
        </div>					
      </form>
    );
  }
}
class ContactBody extends Component{
  render()
  {
    return(
      <div className="contact__body" >
        <div className="grid__row">
          <div className="contact__body__inner">
            <ContactForm />
          </div>
        </div>
      </div>

    );
  }
}
export class SectionContact extends Component{
  render(){
    return(
      <section className="contact section" id="contact">
        <SectionHeader />
        <ContactBody />
      </section>
    );
  }
}