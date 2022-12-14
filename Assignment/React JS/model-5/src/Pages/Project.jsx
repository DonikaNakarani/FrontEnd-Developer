import React from 'react'

function Project() {
    return (
        <div className = "container-fluid py-5">
            <div className="container">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-6">
                        <h6 className="text-secondary font-weight-semi-bold text-uppercase mb-3">Our Projects</h6>
                        <h1 className="section-title mb-3">Visit Our Awesome Cleaning Projects</h1>
                    </div>
                    <div className="col-lg-6 text-center text-lg-right">
                        <ul className="list-inline mb-2" id="portfolio-flters">
                            <li className="btn btn-sm btn-outline-primary m-1 active" data-filter="*">All</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".first">Complete</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".second">Running</li>
                            <li className="btn btn-sm btn-outline-primary m-1" data-filter=".third">Upcoming</li>
                        </ul>
                    </div>
                </div>
                <div className="row m-0 portfolio-container">
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-1.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-2.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-3.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item first">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-4.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item second">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-5.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 p-0 portfolio-item third">
                        <div className="position-relative overflow-hidden">
                            <div className="portfolio-img">
                                <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt />
                            </div>
                            <div className="portfolio-text bg-primary">
                                <h4 className="font-weight-bold mb-4">Project Name</h4>
                                <div className="d-flex align-items-center justify-content-center">
                                    <a className="btn btn-sm btn-secondary m-1" href>
                                        <i className="fa fa-link" />
                                    </a>
                                    <a className="btn btn-sm btn-secondary m-1" href="img/portfolio-6.jpg" data-lightbox="portfolio">
                                        <i className="fa fa-eye" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
  )
}

export default Project