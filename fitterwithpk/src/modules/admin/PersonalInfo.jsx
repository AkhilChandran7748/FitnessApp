import React from "react";
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';

const PersonalInfo = ({ client }) => {
    return (
        <div className="container mt-4">
            <Card className="p-3">
                <div className="row align-items-center">

                   
                    <div className="col-12 col-md-8 text-center text-md-start mb-4 mb-md-0">
                        <h5 className="mb-3">{client?.Name || "Unknown User"}</h5>

                        <div className="mb-3 d-flex justify-content-center justify-content-md-start gap-3">
                            <a href={client?.Whatsapp || "#"} target="_blank" rel="noopener noreferrer">
                                <i className="pi pi-whatsapp text-success" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                            <a href={client?.Twitter || "#"} target="_blank" rel="noopener noreferrer">
                                <i className="pi pi-twitter text-info" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                            <a href={client?.Instagram || "#"} target="_blank" rel="noopener noreferrer">
                                <i className="pi pi-instagram text-danger" style={{ fontSize: '1.5rem' }}></i>
                            </a>
                        </div>

                        <div className="mb-2">
                            <strong>Email:</strong> <br />
                            {client?.Email || "N/A"}
                        </div>

                        <div className="d-flex justify-content-around justify-content-md-start gap-5 mt-3">
                            <div>
                                <strong>Start Date</strong>
                                <div>{client?.StartDate || "N/A"}</div>
                            </div>
                            <div>
                                <strong>Weight</strong>
                                <div>{client?.CurrentWeight ? `${client.CurrentWeight} kg` : "N/A"}</div>
                            </div>
                        </div>
                    </div>

                 
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end">
                        <Image
                            src={client?.ProfilePicture || "/images/rounded_profile.webp"}
                            alt="Profile"
                            imageStyle={{
                                borderRadius: '50%',
                                width: '120px',
                                height: '120px',
                                objectFit: 'cover'
                            }}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default PersonalInfo;
