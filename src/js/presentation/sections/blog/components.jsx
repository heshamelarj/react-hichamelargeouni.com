import React, { Component } from "react";
import { blogs } from '../../../data/seed';
class SectionHeader extends Component {
  render() {
    return (
      <div className="header__grid__row is-grid-row-on-top">
        <div className="header__grid__item-xs-12 header">
          <h3 className="section__h3">#BLOG</h3>
        </div>
      </div>
    );
  }
}
class Blog extends Component{
  render(){
   
    return(
      <div className="post">
        <div className="post__inner__body">
          {/* <Blog nextBlog={nextBlog.value}/> */}
          <div className="post__body__thumbnail">
            <div className="post__body__thumbnail__img">
              <img src={require(`../../../../img/bg_${this.props.blogId}.jpg`)} alt="post thumnail"/>
            </div>
            <div className="blog__body__content__header">
              <a href="#blogtitle"> <h4>{this.props.blogTitle}</h4> </a>
              <small>{this.props.blogDate}</small>
            </div>
          </div>
          <div className="post__body__centent">
            <div className="post__body__content__body">
              <p>
                {this.props.blogDesc}
                <a href="#readmore">Read More</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
class BlogList extends Component{
  constructor(props){
    super(props);
    this.state= {
      blogPosts: []
    }
  }
  componentDidMount(){

    const sortedPosts = blogs.sort((a,b)=> (
      new Date(a.date) - new Date(b.date)
      ));
    this.setState({ blogPosts: sortedPosts})
  }

  render(){
    // let nextBlog = currentBlog.next();
    
    const BlogComponents = this.state.blogPosts.map((blog) => (
    <Blog 
      key = {"blog-"+blog.id}
      blogId= {blog.id}
      blogImgUrl={blog.thumbnailImgUrl}
      blogTitle={blog.title}
      blogDate={blog.date}
      blogDesc={blog.description}

      />
    ));
    return (
      <div className="blog__body">
        <div className="grid__row">

          {BlogComponents}


        </div>
      </div>
    );
  }
  
}

export class SectionBlog extends Component {
  render() {
    return (
      <section className="blog section" id="blog">
        <SectionHeader />
        <BlogList />

      </section>
    );
  }
}
