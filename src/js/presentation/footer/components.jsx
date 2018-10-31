import React, {Component} from 'react';
export class Footer extends Component{
  render(){
    return(
      <footer>
        <div className="footer__grid__row">
          <div className="footer__grid__item-xs-6">
            <div className="footer__inner">
              <div className="footer__inner__copyright">
                <p>Copyright &copy; 2018</p>
              </div>
              <div className="footer__inner__social social__grid">
                <a href="#behance" ><i className="fa fa-behance fa-2x"></i></a>
                <a href="#fb" ><i className="fa fa-facebook fa-2x"></i></a>
                <a href="#twitter"><i className="fa fa-twitter fa-2x"></i></a>
                <a href="#google"><i className="fa fa-google fa-2x"></i></a>
                <a href="#linkedin"><i className="fa fa-linkedin fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}