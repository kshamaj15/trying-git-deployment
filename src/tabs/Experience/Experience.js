import React, { useState } from "react";
import Dew from '../../assets/dew.png';
import Wipro from '../../assets/wipro.png';
import './Experience.scss'; 

const Experience = () => {
    const [companies, setCompanies] = useState([{
        name: 'Dew Solutions',
        designation: 'Software Engineer',
        url: 'https://www.dewsolutions.in/',
        from: 'April 2020',
        to: 'present',
        logo: Dew
    },{
        name: 'Wipro',
        url: 'https://www.wipro.com/',
        designation: 'Project Engineer',
        from: 'July 2018',
        to: 'March 2020',
        logo: Wipro
    }])
    return (
        <div className="mx-3 tab tab-experience">
            <h1>Experience</h1>
            <div className="tab-experience-list">
            {companies.map((company, i) => {
                return (
                    <div className="tab-experience-list-item p-4"  key={i}>
                        <a href={company.url} target="_blank"><img src={company.logo} height="100px" style={{borderRadius: '38px'}} alt="img"/></a>
                        <strong>{company.name}</strong>
                        <span>{company.designation}</span>
                        <span>{company.from} - {company.to}</span>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default Experience;
