import React, { useState } from "react";

const EmployeeTable = () => {
  // Sample employee data
  const [employees, setEmployees] = useState([
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
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectAll, setSelectAll] = useState(false); // State for 'Select All'

  // Calculate selected employees count
  const selectedCount = employees.filter((employee) => employee.checked).length;
  const totalCount = employees.length;

  // Handle search submit
  const handleSearch = (e: any) => {
    e.preventDefault();

    const searchId = parseInt(searchTerm);

    let found = false;

    const updatedEmployees = employees.map((employee) => {
      if (employee.id === searchId) {
        found = true;
        return { ...employee, checked: !employee.checked }; // Toggle the checkbox
      }
      return employee;
    });

    if (found) {
      const selectedEmployee = updatedEmployees.find((employee) => employee.id === searchId);
      
      // Ensure selectedEmployee is defined before using it
      if (selectedEmployee) {
        // Move the selected employee to the top
        const filteredEmployees = updatedEmployees.filter((employee) => employee.id !== searchId);
        setEmployees([selectedEmployee, ...filteredEmployees]);
      }
    } else {
      window.alert("Employee ID not found!");
    }

    setSearchTerm("");
  };

  // Handle individual checkbox changes
  const handleCheckboxChange = (id: any) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id === id) {
        return { ...employee, checked: !employee.checked }; // Toggle the checkbox state
      }
      return employee;
    });

    setEmployees(updatedEmployees);

    // If any checkbox is unchecked, make sure to uncheck the 'Select All' as well
    const allChecked = updatedEmployees.every((emp) => emp.checked);
    setSelectAll(allChecked);

    // Move the checked employee to the top
    const checkedEmployee = updatedEmployees.find(emp => emp.id === id && emp.checked);
    if (checkedEmployee) {
      const filteredEmployees = updatedEmployees.filter(emp => emp.id !== id);
      setEmployees([checkedEmployee, ...filteredEmployees]);
    }
  };

  // Handle 'Select All' checkbox change
  const handleSelectAllChange = () => {
    const updatedEmployees = employees.map((employee) => ({
      ...employee,
      checked: !selectAll, // Set all employees' checked state to match the 'Select All'
    }));

    setEmployees(updatedEmployees);
    setSelectAll(!selectAll); // Toggle the 'Select All' state
  };

  // Handle form submission and log selected employees to the console
  const handleSubmit = (e: any) => {
    e.preventDefault();

    const selectedEmployees = employees.filter((employee) => employee.checked);
    console.log("Selected Employees:", selectedEmployees);
  };

  return (
    <div className="mx-4">
      {/* Search bar */}
      <form onSubmit={handleSearch}>
        <div className="flex items-center">
          <input
            type="text"
            className="border mt-4 px-2 py-2 w-[30%] rounded-sm text-[13px]"
            placeholder="Write Employee Id And Press Enter."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="ml-4 mt-4">
            <span className="text-gray-600">
              {selectedCount} selected / {totalCount} total
            </span>
          </div>
        </div>
      </form>

      {/* Employee table */}
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-sky-100">
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-600 font-semibold">
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={handleSelectAllChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />&nbsp;
                  Select All
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-600 font-semibold">
                  Employee ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-600 font-semibold">
                  Name
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 text-left text-gray-600 font-semibold">
                  Position
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 border-b border-gray-200">
                    <input
                      type="checkbox"
                      checked={employee.checked}
                      onChange={() => handleCheckboxChange(employee.id)}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {employee.id}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {employee.name}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {employee.position}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          type="submit"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Submit 
        </button>
      </form>
    </div>
  );
};

export default EmployeeTable;
