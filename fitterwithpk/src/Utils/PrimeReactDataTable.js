import React, { useEffect, useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdArrowDown,
  IoMdArrowUp,
} from "react-icons/io";
import { Paginator } from "primereact/paginator";
import NoData from "./NoData";
import { InputText } from "primereact/inputtext";
import { Skeleton } from "primereact/skeleton";


const PrimeReactDataTable = ({
  data,
  columns,
  onRowSelect,
  onCellSelect,
  selectionMode = "single",
  showGridlines = false,
  rowsPerPage = 10,
  dynamicPagination = false,
  getData = () => { },
  noDataText = "",
  customClass = "",
  showPaginationBottom = false,
  stylePagination = {},
  editMode = "",
  onRowEditComplete,
  loading = false,
}) => {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(rowsPerPage);
  const [totalRecords, setTotalRecords] = useState(0);


  useEffect(() => {
    if (dynamicPagination && data?.count) {
      setTotalRecords(data.count);
    } else {
      setTotalRecords(data.length);
    }
  }, [data]);

  const customSortIcon = ({ sortOrder }) => {
    return sortOrder === 1 ? (
      <IoMdArrowUp className="text-secondary" />
    ) : (
      <IoMdArrowDown className="text-secondary" />
    );
  };

  const onPageChange = (event) => {
    if (dynamicPagination) {
      getData({ page: event.page + 1 }, true);
    }

    setFirst(event.first);
    setRows(event.rows);
  };

  const onInputChange = (e) => {
    let newPage = parseInt(e.target.value, 10);
    if (!isNaN(newPage) && newPage >= 1 && newPage <= totalPages) {
      setFirst((newPage - 1) * rows);

      if (dynamicPagination) {
        getData({ page: newPage }, true);
      }
    }
  };

  const textEditor = (options) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e) => options.editorCallback(e.target.value)}
      />
    );
  };

  const selectEditor = (options, dropDownData) => {
    return (
     
      <></>
    );
  };

   {/* <PrimeReactSelect
        value={options.value}
        options={dropDownData}
        onChange={(e) => options.editorCallback(e.target.value)}
      /> */}

  const paginatedData = dynamicPagination
    ? data?.results || []
    : data.slice(first, first + rows);
  const totalPages = dynamicPagination
    ? Math.ceil(data.count / rows)
    : Math.ceil(data.length / rows);
  const currentPage = Math.floor(first / rows) + 1;

  return paginatedData?.length > 0 ? (
    <div className={`position-relative ${customClass}`}>
      <DataTable
        value={loading ? [...Array(paginatedData.length)].map(() => 'Skeltons') : paginatedData}
        dataKey="id"
        stripedRows
        showGridlines={showGridlines}
        selectionMode={selectionMode}
        cellSelection={onCellSelect ? true : false}
        onRowSelect={onRowSelect ? onRowSelect : null}
        onCellSelect={onCellSelect ? onCellSelect : null}
        editMode={editMode}
        onRowEditComplete={onRowEditComplete}
        sortIcon={customSortIcon}
      >{

          loading ?

            columns.map((col, index) => {
              return <Column
                className={index == 0 ? "leftbor" : ""}
                key={index}
                field={null}
                header={<Skeleton width="80px" />}
                body={<Skeleton width="100%" height="2rem" />}
              />
            })

            :

            columns.map((col, index) => {
              return <Column
                className={index == 0 ? "leftbor" : ""}
                key={index}
                field={col.field_name}
                editor={(options) => {
                  switch (col.editComponent) {
                    case "text":
                      return textEditor(options);
                    case "select":
                      return selectEditor(options, col.dropDownData);
                    default:
                      return "";
                  }
                }}
                sortable={col.sortable}
                header={col.header}
                body={col.template ? col.template : null}
                rowEditor={index == columns.length - 1 ? true : false}
              />
            })

        }

      </DataTable>
      {totalPages > 1 && (
        <div
          className={`custom-paginator-container ${showPaginationBottom ? "custom-paginator-bottom" : ""
            }`}
          style={stylePagination}
        >
          <Paginator
            first={first}
            rows={rowsPerPage}
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template={{
              layout: "PrevPageLink CurrentPageReport  NextPageLink",
              PrevPageLink: (options) => (
                <button
                  className="prev-button"
                  onClick={options.onClick}
                  disabled={options.disabled}
                >
                  <IoIosArrowBack fontSize={25} />
                </button>
              ),
              CurrentPageReport: () => (
                <div className="custom-page-report">
                  <span className="total-pages">Page </span>
                  <input
                    type="number"
                    value={currentPage}
                    onChange={onInputChange}
                    className="custom-page-input"
                  />
                  <span className="total-pages"> of {totalPages}</span>
                </div>
              ),
              NextPageLink: (options) => (
                <button
                  className="next-button"
                  onClick={options.onClick}
                  disabled={options.disabled}
                >
                  <IoIosArrowForward fontSize={25} />
                </button>
              ),
            }}
          />
        </div>
      )}
    </div>
  ) : (
    <NoData data={{ title: noDataText ? noDataText : "No data Found" }} />
  );
};

export default PrimeReactDataTable;

//usage

// Define columns for CustomDataTable
/* const columnHelper = [
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
                <span className="italic">{rowData.name}</span>
            </div>
        );
    }
    },
    {
      header: "Description",
      field_name: "description",
    },
    {
      header: "Created By",
      field_name: "created_by",
    },
  ]; 

 <PrimeReactDataTable
                data={department}
                columns={columnHelper}
                onRowSelect={(clickData)=>{
                  console.log("row data",clickData);
                }}
                onCellSelect={(cellData)=>{
                    console.log("cell data",cellData);
                }}  
              />
 */
