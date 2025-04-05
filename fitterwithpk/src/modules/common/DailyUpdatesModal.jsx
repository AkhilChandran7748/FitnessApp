import React from "react";
import { Dialog } from 'primereact/dialog';

import { Image } from 'primereact/image';
import { Carousel } from 'primereact/carousel';
const DailyUpdatesModal = ({ visible, data = [], setVisible }) => {
    console.log(data, 'data');

    const dataTemplate = (item) => {
        let images = item.FileName ? item.FileName.split(',') : []
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">

                <div>
                    <h1>{item.DataRange}</h1>
                </div>
                <div className="rowC">

                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/chest_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">Weight</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.Weight} kg.</h6>
                            <h6 className="mt-0 mb-3">{item.WeightDifference}</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/chest_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">BodyFat</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.BodyFat} </h6>
                            <h6 className="mt-0 mb-3">{item.BodyFatDifference}</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/waist_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">Waist</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.Waist} in.</h6>
                            <h6 className="mt-0 mb-3">{item.WaistDifference} in.</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/hip_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">BodyHip</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.BodyHip} in.</h6>
                            <h6 className="mt-0 mb-3">{item.BodyHipDifference} in.</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/neck_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">Neck</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.Neck} in.</h6>
                            <h6 className="mt-0 mb-3">{item.NeckDifference} in.</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/chest_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">Chest</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.Chest} in.</h6>
                            <h6 className="mt-0 mb-3">{item.ChestDifference} in.</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/upper_arm_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">UpperArm</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.UpperArm} in.</h6>
                            <h6 className="mt-0 mb-3">{item.UpperArmDifference} in.</h6>
                        </span>
                    </div>
                    <div className="card rowC margin-r-5p">
                        <span className="mb-3">
                            <img height={50} width={50} src={`/icons/thigh_measure.png`} alt={"chest"} className="w-6 shadow-2" />
                            <h5 className="mb-1">Quadriceps</h5>
                        </span>
                        <span>

                            <h6 className="mt-0 mb-3">{item.Quadriceps} in.</h6>
                            <h6 className="mt-0 mb-3">{item.QuadricepsDifference} in.</h6>
                        </span>
                    </div>


                </div>
                <div >
                    <div >
                        <h3>Progress Images</h3>
                        <div className="rowC">
                            {images.map((i) => <div className="margin-r-10p" >
                                <Image src={i} alt="Image" width="250" preview />
                            </div>)}
                        </div>

                    </div></div>
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <Dialog position={'top'} header={" Weekly Updates"} visible={visible} style={{ width: '100vw' }} onHide={() => { if (!visible) return; setVisible(false); }}>
                <div className="card">
                    <Carousel value={data} numVisible={1} numScroll={1} itemTemplate={dataTemplate} />
                </div>
            </Dialog>
        </div>
    )
}
export default DailyUpdatesModal