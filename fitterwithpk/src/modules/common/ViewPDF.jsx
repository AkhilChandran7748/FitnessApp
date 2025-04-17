import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import UserSideBar from '../user/UserSideBar';
import UserMobileFooter from '../user/UserMobileFooter';
import AdminSideBar from '../admin/AdminSideBar';
import MobileFooter from '../admin/AdminMobileFooter';

pdfjs.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.8.69/pdf.worker.min.mjs';

const ViewPDF = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { path,adminView } = location.state || {};

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    return (
        <>
           {adminView ? <AdminSideBar/> : <UserSideBar />} 
            <div className="container fit_app_section mt-2">
                <div className="row justify-content-center">
                    <div className="col-12 text-center">
                        <div style={{ overflow: 'auto', maxWidth: '100%', border: '1px solid #ccc', borderRadius: '8px', padding: '10px' }}>
                            <Document
                                file={path}
                                onLoadSuccess={onDocumentLoadSuccess}
                                loading={<div>Loading PDF...</div>}
                            >
                                <Page 
                                    pageNumber={pageNumber}
                                    width={Math.min(800, window.innerWidth - 40)}
                                />
                            </Document>
                        </div>
                    </div>
                </div>
                {adminView ? <MobileFooter/> : <UserMobileFooter />}
            </div>
        </>
    );
};

export default ViewPDF;
