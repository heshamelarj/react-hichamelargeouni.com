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
                <a href="#" ><i className="fa fa-behance fa-2x"></i></a>
                <a href="#" ><i className="fa fa-facebook fa-2x"></i></a>
                <a href="#"><i className="fa fa-twitter fa-2x"></i></a>
                <a href="#"><i className="fa fa-google fa-2x"></i></a>
                <a href="#"><i className="fa fa-linkedin fa-2x"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}