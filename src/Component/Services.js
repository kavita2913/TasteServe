import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import BuildIcon from '@mui/icons-material/Build';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import './services.css'; // Import your CSS file

const Services = () => {
    return (
        <div className="outer-container">
            <div className="box-container">
                <div className="why-choose-section">
                    <h2>“Why should You go ahead with Me?”</h2>
                    <div className="reasons-container">
                        <div className="reason">
                            <StarIcon className="icon"  style={{ fontSize: '20px'}} /><span className="text">Quality Service</span>
                        </div>
                        <div className="reason">
                            <BuildIcon className="icon" style={{ fontSize: '20px'}}/>  <span className="text">Innovative Solutions</span>
                        </div>
                        <div className="reason">
                            <ThumbUpIcon className="icon" style={{ fontSize: '20px'}}/> <span className="text">Customer Satisfaction</span>
                        </div>
                        <div className="reason">
                            <TimelapseIcon className="icon" style={{ fontSize: '20px'}}/> <span className="text">On-Time Delivery</span>
                        </div>
                        <div className="reason">
                            <MonetizationOnIcon className="icon" style={{ fontSize: '20px'}}/> <span className="text">Cost-Effective Solutions</span>
                        </div>
                        <div className="reason">
                            <PeopleAltIcon className="icon" style={{ fontSize: '20px'}}/> <span className="text">Dedicated Support Team</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
