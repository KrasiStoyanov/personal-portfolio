import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class SectionDescription extends Component {
    render() {
        let approachContent = this.props.approachContent;

        let title = approachContent.title;
        let heading = approachContent.heading;
        let description = approachContent.description;
        let images = approachContent.images;

        return(
            <section className="section approach pt-6 pt-lg-12 pb-6 pb-lg-12">
                <div className='container pr-sm-0 pl-sm-0'>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-5 text-center text-sm-left mb-sm-0 d-flex flex-column justify-content-center">
                            <small className="title text-uppercase text-primary mb-1">{title}</small>
                            <h2 className="text-capitalize mb-3">{heading}</h2>
                            <h4 className="description font-weight-normal text-secondary m-0">{renderHTML(description)}</h4>
                        </div>
                        <div className="images-wrapper col-12 col-lg-6 d-flex align-items-center justify-content-center">
                            <div className="square">
                                {images.map((image, index) => {
                                    return (
                                        <div key={index} className="image-wrapper">
                                            <img src={`public/${image}`}/>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionDescription;