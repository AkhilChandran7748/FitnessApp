import FileSaver from 'file-saver';
import { useRef, useEffect } from 'react'
import { saveAs } from 'file-saver'
import * as XLSX from 'xlsx';
export const useIsMount = () => {
    const isMountRef = useRef(true);
    useEffect(() => {
        isMountRef.current = false;
    }, []);
    return isMountRef.current;
};
export const downloadFile = (doclink, name) => {
    FileSaver.saveAs(
        doclink,
        name,
    );
}

const makeTimer = () => {
    //for add management
    setInterval(() => {
        const months = ["January", "February", "March", "April", "May", "June", "July"];

        const random = Math.floor(Math.random() * months.length);
        console.log(random, months[random]);


    }, 1000)
}


export const downloadToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "StudentList.xlsx");
}