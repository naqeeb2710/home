import React from 'react';

import {
    Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
    return (
        <Col lg="12" className="mb-4">
            <div className="p-4 bg-white rounded shadow-sm">
                <div className="d-flex align-items-center mb-3">
                    <img
                        src={data.companylogo}
                        alt={data.company}
                        style={{ width: '60px', height: '60px', objectFit: 'contain', marginRight: '20px' }}
                    />
                    <div>
                        <h4 className="font-weight-bold mb-1">{data.role}</h4>
                        <p className="text-muted mb-0">
                            {data.company} • {data.date}
                        </p>
                    </div>
                </div>

                {data.desc && (
                    <div className="mb-3">
                        <ul className="pl-3">
                            {data.desc.map((item, index) => (
                                <li key={index} className="mb-2 text-secondary">{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {data.skills && (
                    <div className="d-flex flex-wrap">
                        {data.skills.map((skill, index) => (
                            <span
                                key={index}
                                className="badge badge-light mr-2 mb-2 p-2 font-weight-normal"
                                style={{ fontSize: '0.9rem', backgroundColor: '#f8f9fa', border: '1px solid #e9ecef' }}
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </Col>
    );
}

export default ExperienceCard;