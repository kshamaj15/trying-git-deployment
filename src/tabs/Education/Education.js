import React from 'react';
import sgsits from '../../assets/sgsits.png';
import mp from '../../assets/mp.jpg';
import './Education.scss';

const Education = () => {
    return (
        <div className="tab mx-3 tab-education">
            <h1>Education</h1>
            <div className="tab-education-list">
                <div className="tab-education-list-item">
                    <a className="p-4" href="http://www.sgsits.ac.in/" target="_blank"><img src={sgsits} height="100px" style={{borderRadius: '38px'}} alt="img"/></a>
                    <h5>Bachlor Of Engineering</h5>
                    <p><strong>7.45 CGPA</strong></p>
                    <p>2014 - 2018</p>
                </div>
                <div className="tab-education-list-item">
                    <span className="p-4"><img src={mp} height="100px" style={{borderRadius: '38px'}} alt="img"/></span>
                    <h5>High School</h5>
                    <p>
                        <span className="pr-5">10th: <strong>84.6%</strong></span>
                        <span>12th: <strong>87.4%</strong></span>
                    </p>
                    <p>2009 - 2013</p>
                </div>                          
            </div>
        </div>
    )
}

export default Education;
