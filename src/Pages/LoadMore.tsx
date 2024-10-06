import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion

// Define the product type based on API response
interface Product {
  title: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); // State to store products
  const [skip, setSkip] = useState<number>(0); // State to track how many products have been skipped
  const [isLoading, setIsLoading] = useState<boolean>(false); // Loading state
  const [hasMore, setHasMore] = useState<boolean>(true); // To disable load more if no products left

  const limit = 10; // Number of products to load per request
  const hasMounted = useRef(false); // Ref to track if component has mounted

  // Function to fetch products from the API
  const fetchProducts = async () => {
    console.log("product fetched");
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
      );
      const data = await response.json();

      // Update products
      setProducts((prevProducts) => [...prevProducts, ...data.products]);

      // If the number of products fetched is less than the limit, no more products are left
      if (data.products.length < limit) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load products", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial products on component mount
  useEffect(() => {
    if (!hasMounted.current) {
      fetchProducts(); // Only fetch products once on mount
      hasMounted.current = true; // Set to true after first fetch
    }
  }, []); // Empty dependency array to ensure it runs only once

  // Handle Load More button click
  const handleLoadMore = () => {
    setSkip((prevSkip) => prevSkip + limit); // Increment skip by 4
    fetchProducts(); // Fetch the next set of products
  };

  // Animation variants for products
  const productVariants = {
    hidden: { opacity: 0, y: -40 }, // Start hidden and slightly moved down
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Fade in and move up smoothly
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="product-item border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={productVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-700">Price: <span className="font-bold">${product.price}</span></p>
          </motion.div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="mt-6 text-center">
          <button 
            onClick={handleLoadMore} 
            disabled={isLoading} 
            className={`px-4 py-2 rounded-md text-white transition duration-200 
              ${isLoading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} 
              focus:outline-none focus:ring focus:ring-blue-300`}
          >
            {isLoading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
