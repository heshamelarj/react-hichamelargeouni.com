/*--------------------------------------------------------------------------------------------------
                          ||            IMPORTS                   ||
----------------------------------------------------------------------------------------------------*/
import React, { Component } from "react";
// import {ResponsiveMenu} from './navbar/components';
import {Navbar} from './navbar/components';
import {SectionAbout} from './sections/about/components';
import {SectionWork} from "./sections/work/components";
import {SectionBlog} from "./sections/blog/components";
import {SectionContact} from "./sections/contact/components";
import {Footer} from './footer/components';
import "../../fonts/font-awesome.min.css";
import "../../scss/styles.scss";
/*----------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------*/
class App extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <ResponsiveMenu /> */}
        <Navbar />
        <SectionAbout />
        {/*TODO: some for loop here  */}
        <SectionWork />
        <SectionBlog />
        <SectionContact />
        <Footer />
      </React.Fragment>
    );
  }
}


export default App;
