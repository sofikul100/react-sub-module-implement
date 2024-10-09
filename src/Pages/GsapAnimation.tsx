import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
const GSAPAnimation = () => {
  const [visibleSidebar, setVisibleSidebar] = useState(null); // Set initial state to 'products'
  const [isHovering, setIsHovering] = useState(false); // State to track hover

  const [barTogggle, SetbarToggle] = useState(true);

  const productSidebarRef = useRef(null);
  const orderSidebarRef = useRef(null);
  const firstSidebarRef = useRef(null);
  const productTextRef = useRef(null);
  const orderTextRef = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    if (visibleSidebar === "products") {
      // Slide-in product sidebar and slide-out order sidebar
      gsap.to(productSidebarRef.current, {
        opacity: 1,
        x: 0,
        width: "220px",
        duration: 0.3,
        onComplete: () => {
          gsap.set(productTextRef.current, { visibility: "visible" });
          gsap.to(productTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
      gsap.to(orderSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "220px",
        duration: 0.3,
        onStart: () => {
          gsap.to(orderTextRef.current, { opacity: 0, duration: 0.4 });
          gsap.set(orderTextRef.current, { visibility: "hidden" });
        },
      });
    } else if (visibleSidebar === "orders") {
      // Slide-in order sidebar and slide-out product sidebar
      gsap.to(orderSidebarRef.current, {
        opacity: 1,
        x: 0,
        width: "220px",
        duration: 0.3,
        onComplete: () => {
          gsap.set(orderTextRef.current, { visibility: "visible" });
          gsap.to(orderTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
      gsap.to(productSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "220px",
        duration: 0.3,
        onStart: () => {
          gsap.to(productTextRef.current, { opacity: 0, duration: 0.4 });
          gsap.set(productTextRef.current, { visibility: "hidden" });
        },
      });
    } else {
      // Slide-out both sidebars
      gsap.to(productSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "220px",
        duration: 0.3,
        onStart: () => {
          gsap.to(productTextRef.current, { opacity: 0, duration: 0.4 });
          gsap.set(productTextRef.current, { visibility: "hidden" });
        },
      });
      gsap.to(orderSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "50px",
        duration: 0.3,
        onStart: () => {
          gsap.to(orderTextRef.current, { opacity: 0, duration: 0.4 });
          gsap.set(orderTextRef.current, { visibility: "hidden" });
        },
      });
    }
  }, [visibleSidebar]);

  const handleMouseEnter = (sidebar: any) => {
    setVisibleSidebar(sidebar);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isHovering) {
        setVisibleSidebar(null);
      }
    }, 200);
  };

  const handleSidebarHover = () => {
    setIsHovering(true);
  };

  const handleSidebarLeave = () => {
    setIsHovering(false);
    setVisibleSidebar(null); // This can be changed based on your desired behavior
  };

  const toggleSidebar = () => {
    // hide and show both sidebar products and order sidebar
    SetbarToggle(!barTogggle);

    if (barTogggle == true) {
      gsap.to(productSidebarRef.current, {
        opacity: 1,
        x: 0,
        width: "220px",
        duration: 0.4,
        onComplete: () => {
          gsap.set(productTextRef.current, { visibility: "visible" });
          gsap.to(productTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
      gsap.to(orderSidebarRef.current, {
        opacity: 1,
        x: 0,
        width: "220px",
        duration: 0.4,
        onComplete: () => {
          gsap.set(orderTextRef.current, { visibility: "visible" });
          gsap.to(orderTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
    } else {
      gsap.to(productSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "220px",
        duration: 0.4,
        onComplete: () => {
          gsap.set(productTextRef.current, { visibility: "visible" });
          gsap.to(productTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
      gsap.to(orderSidebarRef.current, {
        opacity: 0,
        x: -220,
        width: "220px",
        duration: 0.4,
        onComplete: () => {
          gsap.set(orderTextRef.current, { visibility: "visible" });
          gsap.to(orderTextRef.current, { opacity: 1, duration: 0.4 });
        },
      });
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        ref={firstSidebarRef}
        style={styles.firstSidebar}
        className="bg-sky-900 shadow-xl"
      >
        <nav className="flex flex-col items-centers space-y-2">
          <a
            className="mt-12  tracking-widest text-[12px] m-auto text-center hover:bg-sky-600 transition-all duration-300 px-4 py-4"
            href="#"
            style={styles.link}
            title="Products"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            HR
          </a>
          <a
            href="#"
            className="tracking-widest text-[12px]  m-auto text-center hover:bg-sky-600 transition-all duration-300 px-4 py-4"
            style={styles.link}
            title="Orders"
            onMouseEnter={() => handleMouseEnter("orders")}
            onMouseLeave={handleMouseLeave}
          >
            PAYROLL
          </a>
          <a
            href="#"
            style={styles.link}
            title="Customers"
            className="tracking-widest text-[12px]  m-auto text-center hover:bg-sky-600 transition-all duration-300 px-4 py-4"
          >
            INVENTORY
          </a>
          <a
            href="#"
            style={styles.link}
            title="Reports"
            className="tracking-widest text-[12px] m-auto text-center hover:bg-sky-600 transition-all duration-300 px-4 py-4"
          >
            OTHERS
          </a>
          <a
            href="#"
            style={styles.link}
            title="Settings"
            className="tracking-widest text-[12px] m-auto text-center hover:bg-sky-600 transition-all duration-300 px-4 py-4"
          >
            SETTINGS
          </a>
        </nav>
      </div>

      {/* Product Sidebar */}
      <div
        ref={productSidebarRef}
        style={{
          ...styles.productSidebar,
          opacity: visibleSidebar === "products" ? 1 : 0,
          transform:
            visibleSidebar === "products"
              ? "translateX(0)"
              : "translateX(-220px)",
          pointerEvents: visibleSidebar === "products" ? "auto" : "none",
        }}
        className="bg-white shadow-lg"
        onMouseEnter={handleSidebarHover}
        onMouseLeave={handleSidebarLeave}
      >
        <nav className="mt-10 ">
          <div
            ref={productTextRef}
            style={{ opacity: 1, visibility: "visible" }}
            className=" flex flex-col px-2 py-2"
          >
            {/* Make visible by default */}
            <a href="#" title="Product List">
              📋 Product List
            </a>
            <a href="#" title="Add Product">
              ➕ Add Product
            </a>
          </div>
        </nav>
      </div>

      {/* Order Sidebar */}
      <div
        ref={orderSidebarRef}
        style={{
          ...styles.orderSidebar,
          opacity: visibleSidebar === "orders" ? 1 : 0,
          transform:
            visibleSidebar === "orders"
              ? "translateX(0)"
              : "translateX(-220px)",
          pointerEvents: visibleSidebar === "orders" ? "auto" : "none",
        }}
        className="bg-white shadow-lg"
        onMouseEnter={handleSidebarHover}
        onMouseLeave={handleSidebarLeave}
      >
        <nav className="mt-10">
          <div ref={orderTextRef} style={{ opacity: 0, visibility: "hidden" }}>
            <a href="/order-list" title="Order List">
              📋 Order List
            </a>
            <a href="/create-order" title="Create Order">
              ➕ Create Order
            </a>
          </div>
        </nav>
      </div>

      <div>
        <h1> ERP COMMUNITY </h1>
      </div>
      {/* Header */}
      <header style={styles.header} className="bg-sky-900 shadow-sm">
        <div style={styles.headerIcons}>
          <span onClick={toggleSidebar} style={styles.icon}>
            &#9776; {/* Bar icon to toggle both sidebars */}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main style={styles.main}>
        <div style={styles.content}>
          <h1>Main Content Area</h1>
          <p>This is where the main content will go.</p>
        </div>
      </main>

      {/* Footer */}
      <footer style={styles.footer} className="bg-sky-900 tracking-widest">
        <p>&copy; 2024 Admin Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Basic styles for the admin template
const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    color: "#fff",
    fontSize: "20px",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  headerTitle: {
    margin: 0,
    fontSize: "24px",
    marginLeft: "30px",
  },
  headerIcons: {
    display: "flex",
    alignItems: "center",
  },
  icon: {
    cursor: "pointer",
    fontSize: "24px",
    marginRight: "10px",
  },
  firstSidebar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "50px",
    height: "100%",

    color: "#fff",
    padding: "10px 0",
    boxSizing: "border-box",
    zIndex: 4, // Ensure it's above other sidebars
  },
  productSidebar: {
    position: "fixed",
    top: 0,
    left: "50px",
    width: "220px", // Start with reduced width
    height: "100%",
    color: "#000",
    padding: "10px 0",
    boxSizing: "border-box",
    transition: "opacity 0.5s ease, transform 0.5s ease, width 0.5s ease",
    zIndex: 1,
    scrollY: "scroll", // Appear below the first sidebar
  },
  orderSidebar: {
    position: "fixed",
    top: 0,
    left: "50px",
    width: "220px", // Start with reduced width
    height: "100%",
    color: "#000",
    padding: "10px 0",
    boxSizing: "border-box",
    transition: "opacity 0.5s ease, transform 0.5s ease, width 0.5s ease",
    zIndex: 1, // Appear below the first sidebar
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",

    fontSize: "13px",
    writingMode: "vertical-lr",
    textOrientation: "mixed",
    whiteSpace: "nowrap",
  },
  main: {
    flex: 1,
    marginLeft: "47px",
    padding: "20px",
    paddingTop: "60px",
    backgroundColor: "#f4f4f4",
    overflowY: "auto",
  },
  content: {
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "2px",
  },
  footer: {
    color: "#fff",
    fontSize: "11px",
    padding: "8px 20px",
    position: "absolute",
    bottom: 0,
    left: 28,
    right: 0,
    zIndex: 4,
    textTransform: "uppercase",
  },
};

export default GSAPAnimation;
