import React, { useState } from "react";
import { PDFViewer, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";






const ProductTableWithPDFModal = () => {
  // Predefined list of products
  const products = [
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
    { name: "Product 1", price: "10", description: "A cool product", category: "Electronics", stock: "50", sku: "SKU001", brand: "Brand A", rating: "4.5" },
    { name: "Product 2", price: "20", description: "Another cool product", category: "Clothing", stock: "30", sku: "SKU002", brand: "Brand B", rating: "4.0" },
  ];
  // Create a StyleSheet for the PDF
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title1: {
    fontSize: 20,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "extrabold",
  },
  title2: {
    fontSize: "12px",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 5,
  },
  title3: {
    fontSize: "12px",
    fontWeight: "normal",
    textAlign: "center",
    marginBottom: 5,
  },
  table: {
    width: "100%",
    border: "1px solid gray",
    display: "flex",
    flexDirection: "column",
  },
  tableRow: {
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid gray",
  },
  tableCell: {
    flex: 1,
    padding: 2,
    borderRight: "1px solid gray",
    fontSize: 12,
    textAlign: "left",
    padding: 3,
  },
  headerCell: {
    backgroundColor: "#2E8B57",
    color: "white",
    fontSize: 14,
    textAlign: "left",
    padding: 5,
  },
  lastCell: {
    borderRight: "none", // Remove the right border for the last cell
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    textAlign: "center",
    fontSize: 12,
  },
});

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to chunk the products into arrays of a specific size
  const chunkArray = (arr, chunkSize) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      result.push(arr.slice(i, i + chunkSize));
    }
    return result;
  };

  const productChunks = chunkArray(products, 17); // Chunk products into groups of 17

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Product List</h1>

      {/* Button to open modal */}
      <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate PDF
      </button>

      {/* PDF Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg w-full px-4 pb-4 max-w-7xl">
            <div className="flex items-center justify-between py-2 px-2">
              <h2 className="text-xl font-semibold">Generated Product List</h2>
              <button onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white mt-2 rounded-full px-2">
                x
              </button>
            </div>
            <div className="mt-1 h-[500px]">
              {/* Render the PDF within the modal */}
              <PDFViewer style={{ width: "100%", height: "100%" }}>
                <Document>
                  {productChunks.map((chunk, pageIndex) => (
                    <Page key={pageIndex} size="A4" style={styles.container} orientation="landscape">
                      <View>
                        <View>
                          <Text style={styles.title1}>Company Name Here</Text>
                          <Text style={styles.title2}>Gorat, Ashulia, Savar, Dhaka-1341, Bangladesh.</Text>
                          <Text style={styles.title3}>All Product List Report - Page {pageIndex + 1} of {productChunks.length}</Text>
                        </View>

                        <View style={styles.table}>
                          {/* Table Header */}
                          <View style={styles.tableRow}>
                            {["SL", "Name", "Price", "Description", "Category", "Stock", "SKU", "Brand", "Rating"].map((header, index) => (
                              <View key={index} style={[styles.tableCell, styles.headerCell]}>
                                <Text>{header}</Text>
                              </View>
                            ))}
                          </View>
                          {/* Table Rows */}
                          {chunk.map((product, index) => (
                            <View key={index} style={styles.tableRow}>
                              <View style={styles.tableCell}>
                                <Text>{index + 1 + pageIndex * 17}</Text> {/* Serial number */}
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.name}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>${product.price}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.description}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.category}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.stock}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.sku}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.brand}</Text>
                              </View>
                              <View style={styles.tableCell}>
                                <Text>{product.rating}</Text>
                              </View>
                            </View>
                          ))}
                        </View>

                        {/* Footer with page numbers */}
                       
                      </View>
                    </Page>
                  ))}
                </Document>
              </PDFViewer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductTableWithPDFModal;
