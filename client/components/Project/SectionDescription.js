import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class SectionDescription extends Component {
    render() {
        let descriptionContent = this.props.descriptionContent;

        let title = descriptionContent.title;
        let heading = descriptionContent.heading;
        let description = descriptionContent.description;
        let images = descriptionContent.images ? descriptionContent.images : [];
        let doesHaveImages = images.length ? 'mb-12' : '';

        return(
            <section className="section pt-6 pt-lg-12 pb-6 pb-lg-12">
                <div className={`container ${doesHaveImages}`}>
                    <div className="col-12 col-lg-6 offset-lg-3 text-center pr-0 pl-0">
                        <small className="title text-uppercase text-primary mb-1">{title}</small>
                        <h2 className="text-capitalize mb-3">{heading}</h2>
                        <h4 className="description font-weight-normal text-secondary m-0">{renderHTML(description)}</h4>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {images.map((image, index) => {
                            return (
                                <div className="col-12" key={index}>
                                    <img className="w-100" src={`public/${image.url}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionDescription;