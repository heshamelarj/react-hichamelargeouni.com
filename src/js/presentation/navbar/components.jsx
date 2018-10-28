import React, { Component } from "react";
export class ResponsiveMenu extends Component{
  render() {
    return (
      <div className="menu__fullscreen " id="menu__fullscreen">	
				<div className="menu__fullscreen--close">
					<a className="menu__fullscreen__menu--close" id="closeFullscreenMenu" dangerouslySetInnerHTML = {{__html :'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="43px" viewBox="0 0 70 43" enable-background="new 0 0 70 43" xml:space="preserve"> <rect id="rect" x="1" y="1" fill="none" stroke="#C68952" stroke-width="2" stroke-miterlimit="10" width="68" height="41"/> <g class="menu-bars"> <line id="bar-3" fill="none" stroke="#C68952" stroke-width="5" stroke-miterlimit="10" x1="6" y1="11.5" x2="64" y2="11.5"/> <line id="bar-2" fill="none" stroke="#C68952" stroke-width="5" stroke-miterlimit="10" x1="6" y1="21.5" x2="64" y2="21.5"/> <line id="bar-1" fill="none" stroke="#C68952" stroke-width="5" stroke-miterlimit="10" x1="6" y1="31.5" x2="64" y2="31.5"/> </g> </svg>'}}></a>
				</div>			
				<div id="menuDropDown" className="menu__fullscreen__body">
						 <nav className="menu__fullscreen__nav">
							 <ul className="menu__fullscreen__inner__nav">
									 <li className="menu__fullscreen__inner__nav__item">
											 <a href="#about" className="menu__fullscreen__inner__nav__link">ABOUT</a>
										</li>							
										<li className="menu__fullscreen__inner__nav__item">
												 <a href="#work" className="menu__fullscreen__inner__nav__link">WORK</a>
										</li>
										<li className="menu__fullscreen__inner__nav__item">
												 <a href="#blog" className="menu__fullscreen__inner__nav__link">BLOG</a>
										</li>
										<li className="menu__fullscreen__inner__nav__item">
												 <a href="#contact" className="menu__fullscreen__inner__nav__link">CONTACT</a>
										</li>
							 </ul>
						 </nav>
				</div>
    </div>
    );
  }
}
class Logo extends Component {
  render(){
    return (
      <React.Fragment>
        <div className = "logo" >
          <li className = "header__nav__item__logo" >
          {/* //TODO: manage route to index */}
            <a href = "index.html"
            className = "header__nav__item__logo__link"
            dangerouslySetInnerHTML = 
            {{__html: '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="175px"height = "48px" viewBox = "0 0 175 48" enable-background = "new 0 0 175 48" xml:space="preserve" class="logo-svg" ><polyline id = "H" fill = "none" stroke = "#333233" stroke-width = "9" stroke-miterlimit = "10" points = "10.5,42 10.5,5.951 10.51,22.5 32.51,22.5 32.5,5.951 32.5,42 " /><rect id="rect" x="1.5" y="1.5" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" width="67" height="45"/> <g id="f-name" class="f-name"> <polyline id = "I" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="72.174,18.5 74.5,17.89 74.5,7.701 72.174,7.5 76,7.5 " /> <line fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" x1="76" y1="18.5" x2="72" y2="18.5"/> <path fill="#333233" d="M87.117,9.536l-0.16-0.21c-0.052-0.065-0.11-0.152-0.156-0.198c-0.077-0.037-0.131-0.069-0.192-0.117c-0.197-0.142-0.404-0.265-0.623-0.373l-0.001-0.001l0.517,0.231l-0.435-0.126l-0.585-0.116C85.183,8.585,84.85,8.558,84.5,8.545c-0.682-0.009-1.355,0.063-1.956,0.256c-0.297,0.1-0.586,0.217-0.832,0.376c-0.134,0.068-0.255,0.15-0.361,0.245c-0.114,0.087-0.233,0.171-0.321,0.283c-0.209,0.194-0.367,0.434-0.522,0.679l-0.193,0.4c-0.058,0.139-0.092,0.295-0.143,0.44c-0.105,0.289-0.127,0.631-0.185,0.952l-0.024,0.513l-0.007,0.128l0.021,0.064L80,12.913v0.016v0.004c0,0.119,0-0.158,0-0.128v0.009l0.002,0.303l0.046,0.607c0.011,0.097,0.01,0.211,0.026,0.294l0.057,0.211c0.071,0.281,0.126,0.569,0.272,0.847c0.096,0.303,0.282,0.521,0.432,0.771c0.2,0.201,0.361,0.44,0.615,0.588c0.216,0.188,0.5,0.303,0.766,0.444l0.449,0.15c0.019,0.008,0.115,0.038,0.071,0.028l0.148,0.034l0.297,0.069l-0.151-0.025c0.493,0.053,0.976,0.097,1.428,0.112c0.228,0.01,0.43-0.01,0.646-0.01c0.206-0.014,0.386-0.056,0.581-0.076c0.172-0.056,0.344-0.101,0.511-0.161l0.234-0.122c0.077-0.045,0.164-0.062,0.234-0.13l0.223-0.17c0.073-0.062,0.156-0.095,0.223-0.179l0.429-0.438l1.967,1.66l-0.644,0.675c-0.099,0.116-0.247,0.208-0.372,0.311l-0.393,0.298c-0.124,0.106-0.288,0.172-0.434,0.255l-0.453,0.232c-0.312,0.124-0.638,0.22-0.958,0.312c-0.314,0.05-0.641,0.115-0.949,0.139c-0.298,0.01-0.612,0.034-0.899,0.025c-0.579-0.014-1.122-0.059-1.655-0.111l-0.067-0.006l-0.085-0.019l-0.298-0.066l-0.149-0.033c-0.142-0.036-0.141-0.042-0.219-0.065l-0.708-0.233c-0.463-0.216-0.931-0.423-1.349-0.753c-0.443-0.28-0.796-0.696-1.145-1.083c-0.297-0.429-0.611-0.859-0.785-1.331c-0.228-0.45-0.361-0.954-0.477-1.465l-0.088-0.38c-0.021-0.116-0.025-0.206-0.038-0.311l-0.066-0.606l-0.15-0.303L77,12.953v-0.022l0.119-0.044l0.062-0.088l0.036-0.176l0.045-0.705c0.071-0.477,0.118-0.958,0.274-1.439c0.076-0.24,0.142-0.482,0.237-0.718l0.332-0.701c0.264-0.448,0.553-0.895,0.927-1.272c0.171-0.205,0.374-0.371,0.577-0.537c0.199-0.176,0.41-0.326,0.633-0.455c0.433-0.287,0.9-0.493,1.366-0.664c0.468-0.174,0.938-0.301,1.412-0.397c0.473-0.091,0.946-0.141,1.418-0.172c0.463-0.016,0.942-0.015,1.453,0.027l0.623,0.05l0.76,0.117l0.226,0.041L87.791,6h0.001c0.354,0,0.679,0.617,0.973,0.975c0.167,0.216,0.331,0.454,0.478,0.686c0.053,0.097,0.077,0.163,0.117,0.247l0.109,0.239L87.117,9.536z"/> <polyline id="H-mini" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="98.5,19 98.5,6.601 98.136,12.382 91.12,12.399 90.5,6.601 90.5,19" /> <polyline id="A" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="103.176,14.903 109.331,14.905 110.97,19.201 106.573,7.5 106.023,7.5 101.485,19.201 	" /> <polyline id="M" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="123.416,19.164 123.485,6.601 123.177,6.785 119.552,15.5 119.002,15.5 115.235,6.5 114.685,6.5 114.616,19.113 	" /></g> <g id = "l-name" class = "l-name" ><polygon id="E_4_" fill="#333233" points="46,37 46,24 64,24 64,20 46,20 46,10 64,10 64,6 40,6 40,42 64,42 64,37 	" /><polyline id="L_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="80,39.5 74.16,39.5 73.404,39.5 73.5,38.541 73.5,28 	" /><line id="dash_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" x1="80" y1="35.5" x2="85" y2="35.5" /><path id="A_1_" fill="#333233" d="M89.264,36.092l4.281,0.006l1.722,4.643l1.799-0.004L92.869,28.59l-2.651,0.022l-4.371,12.148l1.775-0.003L89.264,36.092z M91.085,31.272l0.795-0.007l1.259,3.644l-3.366,0.007L91.085,31.272z" /><path id="R_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" d="M107.455,40.351l-4.135-4.923l-3.271-0.039c0,0,5.877,1.092,5.694-2.832c-0.164-3.519-3.058-3.477-4.649-3.197c-0.607,0.107-1.137,0.262-1.137,0.262l-0.458-0.47v-0.55V40" /><path id="G_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" d="M115.41,34.926l3.601,0.285l0.799,0.081l-0.122,3.916l-0.35,0.903c0,0-3.468,2.121-7.364-0.784c-1.488-1.679-2.912-6.673,0.635-9.067c2.616-1.765,5.12-1.121,6.386-0.452c0.451,0.238,0.723,0.444,0.723,0.444" /><polygon id="E_1_" fill="#333233" points="131,30 131,28 123,28 123,40 131,40 131,39 125,39 125,35 131,35 131,33 125,33 125,30" /><path id="O_2_" fill="#333233" d="M138.052,28.601c-2.987,0-5.408,2.832-5.408,6.325c0,3.493,2.421,6.325,5.408,6.325c2.987,0,5.408-2.832,5.408-6.325C143.46,31.433,141.039,28.601,138.052,28.601z M138.049,39.525c-2.189,0-3.964-2.086-3.964-4.66s1.775-4.66,3.964-4.66c2.189,0,3.964,2.086,3.964,4.66S140.238,39.525,138.049,39.525z" /><path id="U_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" d="M147.056,28.929l0.127,11.337c0,0,1.716,0.244,3.519,0.252c2.033,0.008,4.177-0.28,4.177-0.28l-0.123-11.346" /><polyline id="N_2_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="166.5,29 166.5,40.701 165.796,39.632 159.535,30.382 158.5,29.151 158.5,40 	" /><polyline id="I_1_" fill="none" stroke="#333233" stroke-width="3" stroke-miterlimit="10" points="174,40.5 169.41,40.5 171.5,40.151 171.5,29.701 169.41,29.5 174,29.5 	" /></g> </svg>'}}>
            </a> 
          </li>
        </div>
              <li className="header__nav__item">
                  <a href="#" className="header__nav__item__link">ABOUT</a>
                </li>
                <li className="header__nav__item">
                  <a href="#" className="header__nav__item__link">BLOG</a>
                </li>
                <li className="header__nav__item">
                  <a href="#" className="header__nav__item__link">WORK</a>
                </li>
                <li className="header__nav__item">
                  <a href="#" className="header__nav__item__link">CONTACT</a>
                </li>
                <a className="menu" id="iconMenu">
                  <li className="header__nav__item__menu" dangerouslySetInnerHTML = {{__html :'<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="70px" height="43px" viewBox="0 0 70 43" enable-background="new 0 0 70 43" xml:space="preserve"> <g class="menu-bars"> <line id="bar-3" fill="none" stroke="#333233" stroke-width="5" stroke-miterlimit="10" x1="6" y1="11.5" x2="64" y2="11.5"/> <line id="bar-2" fill="none" stroke="#333233" stroke-width="5" stroke-miterlimit="10" x1="6" y1="21.5" x2="64" y2="21.5"/> <line id="bar-1" fill="none" stroke="#333233" stroke-width="5" stroke-miterlimit="10" x1="6" y1="31.5" x2="64" y2="31.5"/> </g> </svg>'}}>
                  </li>
                </a>
      </React.Fragment>
    );
  }
}
export class Navbar extends Component {
  render(){
    return (
         <nav className="header">
          <ul className = "header__nav" >
            <Logo />
          
          </ul>
        </nav>
    );
  }
}
