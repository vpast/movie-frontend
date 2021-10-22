import Link from "next/link";
import { Fragment } from "react";

const MovieNavigator = ({ title, items }) => {
  return (
    <section className="after-head d-flex section-text-white position-relative">
      <div
        className="d-background"
        data-image-src="http://via.placeholder.com/1920x1080"
        data-parallax="scroll"
      />
      <div className="d-background bg-black-80" />
      <div className="top-block top-inner container">
        <div className="top-block-content">
          <h1 className="section-title">{title}</h1>
          <div className="page-breadcrumbs">
            {items.map((item, index) => {
              if (item.url) {
                return (
                  <Fragment key={index}>
                    <Link href={item.url}>
                      <a className="content-link">{item.title}</a>
                    </Link>
                    <span className="text-theme mx-2">
                      <i className="fas fa-chevron-right" />
                    </span>
                  </Fragment>
                );
              } else {
                return <span key={index}>{item.title}</span>;
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieNavigator;
