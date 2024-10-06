import React, { useState } from "react";
import * as XLSX from "xlsx"; // Import the xlsx library

// Define the Employee type
interface Employee {
  id: number;
  name: string;
  position: string;
  checked: boolean;
}

// Employee data (initial state)
const employeesData: Employee[] = [
  { id: 101, name: "John Doe", position: "HR", checked: false },
  { id: 102, name: "Jane Smith", position: "Payroll", checked: false },
  { id: 103, name: "Sam Wilson", position: "Developer", checked: false },
  { id: 104, name: "Emily Davis", position: "Designer", checked: false },
  { id: 105, name: "Michael Brown", position: "Marketing", checked: false },
  { id: 106, name: "Chris Green", position: "Sales", checked: false },
  { id: 107, name: "Lisa White", position: "HR", checked: false },
  { id: 108, name: "David Black", position: "Finance", checked: false },
  { id: 109, name: "Laura Blue", position: "IT Support", checked: false },
  { id: 110, name: "Kevin Grey", position: "Admin", checked: false },
  { id: 111, name: "Sophia Yellow", position: "Customer Service", checked: false },
  { id: 112, name: "James Red", position: "Security", checked: false },
  { id: 113, name: "Olivia Pink", position: "Developer", checked: false },
  { id: 114, name: "Daniel Orange", position: "Legal", checked: false },
  { id: 115, name: "Ava Purple", position: "Executive Assistant", checked: false },
  { id: 116, name: "William Silver", position: "Operations", checked: false },
  { id: 117, name: "Isabella Gold", position: "Procurement", checked: false },
  { id: 118, name: "Mason Brown", position: "Business Analyst", checked: false },
  { id: 119, name: "Mia Black", position: "Project Manager", checked: false },
  { id: 120, name: "Ethan White", position: "Product Manager", checked: false },
];

// Main component
const EmployeeExcelGenerator: React.FC = () => {
  const [employees] = useState<Employee[]>(employeesData);

  // Function to handle Excel download
  const downloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();

    // Add company name and address
    const companyName = "Your Company Name";
    const address = "123 Company Address, City, Country";
    const reportTitle = "Employee List Report";

    // Create an empty worksheet
    const worksheetData = [
      [companyName],
      [address],
      [reportTitle],
      [], // Empty row for spacing
      ["ID", "Name", "Position"], // Headers for the employee data
    ];

    // Convert the employee data into rows
    employees.forEach(employee => {
      worksheetData.push([employee.id, employee.name, employee.position]);
    });

    // Create the worksheet from the data
    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

    // Set styles for the header row
    const headerCellRange = XLSX.utils.decode_range(worksheet['!ref']);
    for (let col = headerCellRange.s.c; col <= headerCellRange.e.c; col++) {
      const cell = worksheet[XLSX.utils.encode_cell({ r: 4, c: col })]; // Header row index is 4
      if (cell) {
        cell.s = {
          fill: {
            fgColor: { rgb: "FFD700" }, // Header background color
          },
          font: {
            bold: true,
          },
          alignment: {
            horizontal: "center",
          },
        };
      }
    }

    // Set row heights
    const rowHeight = 20; // Set desired height for rows
    for (let row = headerCellRange.s.r; row <= headerCellRange.e.r; row++) {
      worksheet['!rows'] = worksheet['!rows'] || [];
      worksheet['!rows'][row] = { hpx: rowHeight };
    }

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");

    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, "employee_list.xlsx");
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Employee Excel Generator</h2>

      {/* Download Excel Button */}
      <button
        onClick={downloadExcel}
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Download Excel
      </button>
    </div>
  );
};

export default EmployeeExcelGenerator;
