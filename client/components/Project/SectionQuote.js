import React, { Component } from 'react';

class SectionQuote extends Component {
    render() {
        let quoteContent = this.props.quoteContent;
        let logo = this.props.logo;
        let quote = quoteContent.quote;

        return(
            <section className="section quote pt-6 pt-lg-12">
                <div className={`container-fluid text-center`}>
                    <div className="row align-items-center justify-content-center">
                        <div className="image-wrapper col-12 col-lg-6 h-100 d-flex align-items-center justify-content-center bg-primary">
                            <img className="logo" src={`public/${logo}`} alt=""/>
                        </div>
                        <div className="quote-wrapper col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center h-100">
                            {quote.map((line) => {
                                return (
                                    <div key={line} className="line-wrapper">
                                        <h2 className="line mb-0 color-white font-weight-normal text-capitalize">{line}</h2>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionQuote;