import React, { useState, useRef, useEffect } from 'react';
import { Galleria } from 'primereact/galleria';
import { getWeeklyGalleryList } from '../user/UserServices';
import UserSideBar from '../user/UserSideBar';
import UserMobileFooter from '../user/UserMobileFooter';
import { useLocation } from 'react-router-dom';

export default function GalleryList() {

    const location = useLocation();
    const { selectedData, visible } = location.state || {};
    const [activeIndex, setActiveIndex] = useState(0);
    const galleria = useRef(null);
    const [progressImageList, setProgressImageList] = useState([]);

    const getData = (selectedData) => {

        console.log("Gallery Selected Data", location.state);

        let reqParam = {};
        if (selectedData) reqParam = { IdUser: selectedData.IdUser };
        getWeeklyGalleryList(reqParam).then((res) => {
            let images = res.data.data.map((element, idx) => ({
                itemImageSrc: `https://api.fitwithpk.com/uploads/weekly/${element}`,
                thumbnailImageSrc: `https://api.fitwithpk.com/uploads/weekly/${element}`,
                alt: `Image ${idx + 1}`,
                title: `Image ${idx + 1}`
            }));

            setProgressImageList(images)

        });
    };

    useEffect(() => {
        getData(selectedData);
    }, [selectedData]);




    const itemTemplate = (item) => (
        <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />
    );

    const thumbnailTemplate = (item) => (
        <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block' }} />
    );

    return (
        <>
            <UserSideBar />
            <div className="container fit_app_section mt-2">
                <div className="card flex flex-column align-items-center">
                    <Galleria
                        ref={galleria}
                        value={progressImageList}
                        numVisible={7}
                        style={{ maxWidth: '100%' }}
                        activeIndex={activeIndex}
                        onItemChange={(e) => setActiveIndex(e.index)}
                        circular
                        fullScreen
                        showItemNavigators
                        showThumbnails={false}
                        item={itemTemplate}
                        thumbnail={thumbnailTemplate}
                    />

                    <div className="grid" style={{ maxWidth: '100%' }}>
                        {progressImageList.map((image, index) => (
                            <div className="col-3" key={index}>
                                <img
                                    src={image.thumbnailImageSrc}
                                    alt={image.alt}
                                    style={{ cursor: 'pointer', width: '100%' }}
                                    onClick={() => {
                                        setActiveIndex(index);
                                        galleria.current.show();
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <UserMobileFooter />
        </>
    );
}
