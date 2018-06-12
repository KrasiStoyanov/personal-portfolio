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
        let marginBottomImages = descriptionContent.imageMarginBottom ? descriptionContent.imageMarginBottom : 0;
        let textAlignmentClass = descriptionContent.textAlignmentClass ? descriptionContent.textAlignmentClass : '';
        let colWidth = descriptionContent.colWidth ? descriptionContent.colWidth : 6;
        let colOffset = descriptionContent.colOffset ? descriptionContent.colOffset : 3;
        let className = descriptionContent.className ? descriptionContent.className : '';

        return(
            <section className={`section ${className} pt-6 pt-lg-12 pb-6 pb-lg-12`}>
                <div className={`container ${doesHaveImages}`}>
                    <div className="row">
                        <div className={`col-12 col-lg-${colWidth} offset-lg-${colOffset} text-center pr-sm-0 pl-sm-0`}>
                            <small className="title text-uppercase text-primary mb-1">{title}</small>
                            <h2 className="text-capitalize mb-3">{heading}</h2>
                            <h4 className={`description font-weight-normal text-secondary ${textAlignmentClass} m-0`}>{renderHTML(description)}</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {images.map((image, index) => {
                            if (images.length - 1 === index) {
                                marginBottomImages = 0;
                            }
                            return (
                                <div className={`col-12 p-0 mb-${marginBottomImages}`} key={index}>
                                    <img className="w-100" src={`public/${image}`} />
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