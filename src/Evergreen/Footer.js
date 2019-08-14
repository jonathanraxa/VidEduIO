import React from 'react';

const Footer = () => {
    return (
        <div className="col-md-12 card text-center">
            <div className="card-header">
                Want to see more?
            </div>
            <div className="card-body">
                <h5 className="card-title">Donate to VidEdu's Operation</h5>
                <p className="card-text">Our mission is to embrace technology and create new ways to enhancing how you learn. Help expand our mission!</p>
                <a href="#" className="btn btn-primary">Donate</a>
            </div>
            {/* <div className="card-footer text-muted">
                2 days ago
            </div> */}
        </div>
    )
};

export default Footer;
