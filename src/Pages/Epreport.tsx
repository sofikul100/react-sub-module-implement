import React, { useState } from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
  PDFViewer,
} from "@react-pdf/renderer";
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
  {
    id: 111,
    name: "Sophia Yellow",
    position: "Customer Service",
    checked: false,
  },
  { id: 112, name: "James Red", position: "Security", checked: false },
  { id: 113, name: "Olivia Pink", position: "Developer", checked: false },
  { id: 114, name: "Daniel Orange", position: "Legal", checked: false },
  {
    id: 115,
    name: "Ava Purple",
    position: "Executive Assistant",
    checked: false,
  },
  { id: 116, name: "William Silver", position: "Operations", checked: false },
  { id: 117, name: "Isabella Gold", position: "Procurement", checked: false },
  {
    id: 118,
    name: "Mason Brown",
    position: "Business Analyst",
    checked: false,
  },
  { id: 119, name: "Mia Black", position: "Project Manager", checked: false },
  { id: 120, name: "Ethan White", position: "Product Manager", checked: false },
];

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 20,
  },
  section: {
    marginBottom: 10,
    padding: 10,
    border: "1px solid #ccc",
  },
  header: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  employeeRow: {
    fontSize: 12,
    marginBottom: 4,
  },
});

// Helper function to chunk the employees array into pages (9 items per page)
const chunkArray = (array: Employee[], size: number): Employee[][] => {
  const result: Employee[][] = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

// Define the PDF Document
const EmployeePDF: React.FC = () => {
  // Paginate employees into chunks of 9 per page
  const pages = chunkArray(employeesData, 9);

  return (
    <Document>
      {pages.map((employees, pageIndex) => (
        <Page key={pageIndex} style={styles.page}>
          <Text style={styles.header}>
            Employee List - Page {pageIndex + 1}
          </Text>
          {employees.map((employee) => (
            <View key={employee.id} style={styles.section}>
              <Text style={styles.employeeRow}>ID: {employee.id}</Text>
              <Text style={styles.employeeRow}>Name: {employee.name}</Text>
              <Text style={styles.employeeRow}>
                Position: {employee.position}
              </Text>
            </View>
          ))}
        </Page>
      ))}
    </Document>
  );
};

// Main component
const EmployeeExcelGenerator: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>(employeesData);
  const [showViewer, setShowViewer] = useState(false);

  const toggleViewer = () => setShowViewer(!showViewer);

  // Function to handle Excel download
  const downloadExcel = () => {
    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    // Convert employee data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(employees);
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Employees");
    // Export the workbook to an Excel file
    XLSX.writeFile(workbook, "employee_list.xlsx");
  };

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">Employee PDF Options</h2>

      {/* Download PDF Button */}
      <PDFDownloadLink document={<EmployeePDF />} fileName="employee_list.pdf">
        {({ loading }: { loading: boolean }) =>
          loading ? "Loading PDF..." : "Download PDF"
        }
      </PDFDownloadLink>

      {/* Download Excel Button */}
      <button
        onClick={downloadExcel}
        className="ml-4 px-4 py-2 bg-green-500 text-white rounded-lg"
      >
        Download Excel
      </button>

      {/* View PDF Button */}
      <button
        onClick={toggleViewer}
        className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
      >
        {showViewer ? "Hide PDF Viewer" : "View PDF"}
      </button>

      {/* Tailwind Modal */}
      {showViewer && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center h-screen w-screen bg-white"
          style={{ maxHeight: "100vh" }}
        >
          <div className="relative w-full h-full">
            {/* Close Button */}
            <button
              onClick={toggleViewer}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              ✖
            </button>
            <div className="h-full w-full p-4 bg-white rounded-lg shadow-lg">
              {/* PDF Viewer with fit to page */}
              <PDFViewer width="100%" height="100%" scaleMode="pageWidth">
                <EmployeePDF />
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeExcelGenerator;
