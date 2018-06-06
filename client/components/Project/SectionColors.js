import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class SectionColors extends Component {
    render() {
        let colorsContent = this.props.colorsContent;
        let logo = this.props.logo;

        let title = colorsContent.title;
        let heading = colorsContent.heading;
        let description = colorsContent.description;
        let images = colorsContent.images;
        let colors = colorsContent.colors;

        return(
            <section className="colors section pt-6 pt-lg-12 pb-6 pb-lg-12">
                <div className='container pr-0 pl-0'>
                    <div className="row">
                        <div className="col-12 col-lg-6 offset-lg-3 text-center">
                            <small className="title text-uppercase text-primary mb-1">{title}</small>
                            <h2 className="text-capitalize mb-3">{heading}</h2>
                            <h4 className="description font-weight-normal text-secondary m-0">{renderHTML(description)}</h4>
                        </div>
                        <div className="mt-12 col-12 d-flex flex-row align-items-center justify-content-center">
                            <div className="colors-wrapper">
                                {colors.map((color, index) => {
                                    if (index % 2 === 0) {
                                        let nextColor = colors[index + 1];

                                        return (
                                            <div key={index} className="wrapper">
                                                <div className="color" style={{backgroundColor: `#${color}`}}></div>
                                                <div className="color" style={{backgroundColor: `#${nextColor}`}}></div>
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div className="logo-wrapper">
                                <img src={`public/${logo}`}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionColors;