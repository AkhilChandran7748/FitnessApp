import React from "react";
import AdminSideBar from "./AdminSideBar";
import PrimeReactDataTable from "../../Utils/PrimeReactDataTable";
const AdminHome = () => {

    const department = [
        {
            "id": 4,
            "name": "Engineering",
            "description": null,
            "created_by": null
        },
        {
            "id": 6,
            "name": "Management",
            "description": null,
            "created_by": null
        },
        {
            "id": 8,
            "name": "Product Testing",
            "description": null,
            "created_by": null
        },
        {
            "id": 10,
            "name": "Research and Development",
            "description": "R&D",
            "created_by": null
        },
        {
            "id": 3,
            "name": "Sales",
            "description": null,
            "created_by": null
        }
    ]


    const columnHelper = [
        {
            header: "ID",
            field_name: "id",
        },
        {
            header: "Department Name",
            field_name: "name",
            template: (rowData) => {
                return (
                    <div className="flex align-items-center gap-2">
                        <span className="text-info">{rowData.name}</span>
                    </div>
                );
            }
        },
        {
            header: "Description",
            field_name: "description",
        },
    ];


    return (<>
        <AdminSideBar />

        //Basil1112@github

        <div className="container-fluid fit_app_section">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 col-sm-12 col-md-12">
                    <PrimeReactDataTable
                        data={department}
                        columns={columnHelper}
                        onRowSelect={(clickData) => {
                            console.log("row data", clickData);
                        }}
                        onCellSelect={(cellData) => {
                            console.log("cell data", cellData);
                        }}
                    />
                </div>
            </div>
        </div>



    </>)
}
export default AdminHome