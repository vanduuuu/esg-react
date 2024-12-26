import React from 'react';
import { Link } from 'react-router-dom';
import './Blogcard.css'; // Updated styles
import authorpic from '../../assets/Amarben-Patni.webp';

const Blogcard = ({
  image,
  date,
  tag,
  title,
  desc,
  author,
  detailPage,
}) => {
  return (
    <div className="col-lg-6 mb-3 col-md-12">
      <div className="card blog-card-horizontal">
        <div className="row g-0">
          <div className="col-md-5">
            <div className="blog-image">
              <img src={image} alt={title} />
              <div className="tag">{tag}</div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="blog-content">
              <div className="blog-header d-flex justify-content-between align-items-center">
                <span className="date">
                  <strong>Published Date:</strong> {date}
                </span>
                <button className="btn btn-sm">
                  <i className="fa fa-share-alt"></i>
                </button>
              </div>
              <div className="blog-title">{title}</div>
              <p className="blog-desc">
                {desc} <Link to={detailPage}>Read More</Link>
              </p>
              <div className="blog-footer">
                <div className="blog-avatar d-flex align-items-center">
                  <img src={authorpic} alt={author} />
                  <span>{author}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
