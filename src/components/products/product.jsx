
// // // import React, { useEffect, useState } from "react";
// // // import axios from "axios";
// // // import { FaEdit, FaTrash } from "react-icons/fa";
// // // import Navbar from '../navbar/nav'; 
// // // import Sidebar from '../sidebar/sidebar';

// // // const Products = () => {
// // //   const [products, setProducts] = useState([]);

// // //   // Fetch products from the backend
// // //   useEffect(() => {
// // //     axios.get("http://localhost:2030/products")
// // //       .then(response => setProducts(response.data))
// // //       .catch(error => console.error("Error fetching products:", error));
// // //   }, []);

// // //   // Delete a product by ID
// // //   const handleDelete = (id) => {
// // //     axios.delete(`http://localhost:2030/products/${id}`)
// // //       .then(() => setProducts(products.filter(product => product.id !== id)))
// // //       .catch(error => console.error("Error deleting product:", error));
// // //   };

// // //   return (
// // //     <div className="products-page">
// // //       {/* Sidebar and Navbar */}
// // //       <Sidebar />
// // //       <div className="main-content">
// // //         <Navbar />
// // //         <h1>Product List</h1>

// // //         {/* Product Table */}
// // //         <div className="product-table">
// // //           <table>
// // //             <thead>
// // //               <tr>
// // //                 <th>Id</th>
// // //                 <th>Product Name</th>
// // //                 <th>Sub Category</th>
// // //                 <th>Category</th>
// // //                 <th>Status</th>
// // //                 <th>Action</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody>
// // //               {products.map(product => (
// // //                 <tr key={product.id}>
// // //                   <td>{product.id}</td>
// // //                   <td>{product.product_name}</td>
// // //                   <td>{product.sub_category}</td>
// // //                   <td>{product.category}</td>
// // //                   <td className={product.status === 'Active' ? 'text-green' : 'text-red'}>{product.status}</td>
// // //                   <td>
// // //                     <button onClick={() => console.log(`Edit product ${product.id}`)}>
// // //                       <FaEdit />
// // //                     </button>
// // //                     <button onClick={() => handleDelete(product.id)}>
// // //                       <FaTrash />
// // //                     </button>
// // //                   </td>
// // //                 </tr>
// // //               ))}
// // //             </tbody>
// // //           </table>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Products;
// // import React, { useEffect, useState } from "react";
// // import Sidebar from '../sidebar/sidebar';
// // import Navbar2 from '../navbar/nav.jsx';
// // import { Modal, TextField, Button, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
// // import { FaEdit, FaTrash } from "react-icons/fa";
// // import axios from "axios";

// // const Products = () => {
// //   const [products, setProducts] = useState([]);
// //   const [isEditing, setIsEditing] = useState(false);
// //   const [open, setOpen] = useState(false);
// //   const [editingProduct, setEditingProduct] = useState(null);
// //   const [productName, setProductName] = useState('');
// //   const [subCategory, setSubCategory] = useState('');
// //   const [category, setCategory] = useState('');
// //   const [status, setStatus] = useState('Inactive');

// //   // Fetch products from the backend
// //   useEffect(() => {
// //     axios.get("http://localhost:2030/products")
// //       .then(response => setProducts(response.data))
// //       .catch(error => console.error("Error fetching products:", error));
// //   }, []);

// //   // Delete a product by ID
// //   const handleDelete = (id) => {
// //     axios.delete(`http://localhost:2030/products/${id}`)
// //       .then(() => setProducts(products.filter(product => product.id !== id)))
// //       .catch(error => console.error("Error deleting product:", error));
// //   };

// //   // Open Modal to add/edit product
// //   const handleOpen = () => {
// //     setIsEditing(false);
// //     setEditingProduct(null);
// //     setProductName('');
// //     setSubCategory('');
// //     setCategory('');
// //     setStatus('Inactive');
// //     setOpen(true);
// //   };

// //   // Open edit modal
// //   const handleEdit = (product) => {
// //     setIsEditing(true);
// //     setEditingProduct(product);
// //     setProductName(product.product_name);
// //     setSubCategory(product.sub_category);
// //     setCategory(product.category);
// //     setStatus(product.status);
// //     setOpen(true);
// //   };

// //   // Close the modal
// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   // Handle form submit for add/edit product
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
    
// //     const productData = { product_name: productName, sub_category: subCategory, category, status };

// //     try {
// //       const response = isEditing
// //         ? await axios.put(`http://localhost:2030/products/${editingProduct.id}`, productData)
// //         : await axios.post('http://localhost:2030/products', productData);

// //       if (response.status === 200 || response.status === 201) {
// //         setProducts(prev => isEditing
// //           ? prev.map(p => (p.id === editingProduct.id ? response.data : p))
// //           : [...prev, response.data]);
// //         handleClose();
// //         alert(isEditing ? 'Product updated successfully!' : 'Product added successfully!');
// //       } else {
// //         alert('Failed to submit product');
// //       }
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       alert('An error occurred');
// //     }
// //   };

// //   return (
// //     <div className="flex flex-col w-full overflow-x-hidden pr-1">
// //       <Navbar2 />
// //       <div className="flex  gap-x-9 justify-between items-start">
// //         <Sidebar />
// //         <div className="h-screen w-full flex flex-col gap-4">
// //           <div className="flex items-center p-2 justify-between gap-x-8">
// //             <div className="flex items-center gap-x-3 w-full">
// //               <b className="text-2xl">Products</b>
// //             </div>
// //             <Button variant="contained" color="primary" onClick={handleOpen} className="bg-purple-950 whitespace-nowrap text-white border-2 p-2 rounded-lg">
// //               Add Product
// //             </Button>
// //           </div>

// //           {/* Product Table */}
// //           <div className="overflow-x-auto">
// //             <table className="w-full border-collapse">
// //               <thead>
// //                 <tr className="bg-purple-950 text-white">
// //                   <th className="p-3 border text-left">ID</th>
// //                   <th className="p-3 border text-left">Product Name</th>
// //                   <th className="p-3 border text-left">Sub Category</th>
// //                   <th className="p-3 border text-left">Category</th>
// //                   <th className="p-3 border text-left">Status</th>
// //                   <th className="p-3 border text-left">Action</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {products.map(product => (
// //                   <tr key={product.id} className="border-b hover:bg-gray-200">
// //                     <td className="p-3">{product.id}</td>
// //                     <td className="p-3">{product.product_name}</td>
// //                     <td className="p-3">{product.sub_category}</td>
// //                     <td className="p-3">{product.category}</td>
// //                     <td className={product.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{product.status}</td>
// //                     <td className="p-3">
// //                       <button onClick={() => handleEdit(product)} className="text-2xl px-2 py-1 rounded">
// //                         <FaEdit />
// //                       </button>
// //                       <button onClick={() => handleDelete(product.id)} className="text-2xl px-2 py-1 rounded">
// //                         <FaTrash />
// //                       </button>
// //                     </td>
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Modal for Adding/Editing Product */}
// //           <Modal open={open} onClose={handleClose}>
// //             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-96">
// //               <h2 className="text-center text-xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
              
// //               <form onSubmit={handleSubmit} className="space-y-4">
// //                 <TextField
// //                   label="Product Name"
// //                   fullWidth
// //                   variant="outlined"
// //                   value={productName}
// //                   onChange={(e) => setProductName(e.target.value)}
// //                   required
// //                 />
// //                 <TextField
// //                   label="Sub Category"
// //                   fullWidth
// //                   variant="outlined"
// //                   value={subCategory}
// //                   onChange={(e) => setSubCategory(e.target.value)}
// //                   required
// //                 />
// //                 <TextField
// //                   label="Category"
// //                   fullWidth
// //                   variant="outlined"
// //                   value={category}
// //                   onChange={(e) => setCategory(e.target.value)}
// //                   required
// //                 />
// //                 <div className="flex items-center justify-between">
// //                   <label htmlFor="status">Status:</label>
// //                   <Switch
// //                     checked={status === 'Active'}
// //                     onChange={() => setStatus(status === 'Active' ? 'Inactive' : 'Active')}
// //                   />
// //                   <span>{status}</span>
// //                 </div>

// //                 <Button type="submit" variant="contained" color="primary" className="w-full">
// //                   {isEditing ? 'Update Product' : 'Add Product'}
// //                 </Button>
// //               </form>
// //             </div>
// //           </Modal>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Products;
// import React, { useEffect, useState } from "react";
// import Sidebar from '../sidebar/sidebar';
// import Navbar2 from '../navbar/nav.jsx';
// import { Modal, TextField, Button, Switch } from '@mui/material';
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [open, setOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [productName, setProductName] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [category, setCategory] = useState('');
//   const [status, setStatus] = useState('Inactive');

//   // Fetch products from the backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:2030/products");
//       setProducts(response.data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // Delete a product by ID
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`http://localhost:2030/products/${id}`);
//       setProducts(products.filter(product => product.id !== id));
//     } catch (error) {
//       console.error("Error deleting product:", error);
//     }
//   };

//   // Open Modal to add/edit product
//   const handleOpen = () => {
//     resetForm(); // Ensure form is reset when opening the modal
//     setOpen(true);
//   };

//   // Open edit modal
//   const handleEdit = (product) => {
//     setIsEditing(true);
//     setEditingProduct(product);
//     setProductName(product.product_name);
//     setSubCategory(product.sub_category);
//     setCategory(product.category);
//     setStatus(product.status);
//     setOpen(true);
//   };

//   // Reset form fields
//   const resetForm = () => {
//     setIsEditing(false);
//     setEditingProduct(null);
//     setProductName('');
//     setSubCategory('');
//     setCategory('');
//     setStatus('Inactive');
//   };

//   // Close the modal and reset form
//   const handleClose = () => {
//     setOpen(false);
//     resetForm();
//   };

//   // Handle form submit for add/edit product
//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const productData = { product_name: productName, sub_category: subCategory, category, status };

//     try {
//       const response = isEditing
//         ? await axios.put(`http://localhost:2030/products/${editingProduct.id}`, productData)
//         : await axios.post('http://localhost:2030/products', productData);

//       if (response.status === 200 || response.status === 201) {
//         // Update product list based on add or edit operation
//         if (isEditing) {
//           setProducts(prev => prev.map(p => (p.id === editingProduct.id ? response.data : p)));
//         } else {
//           setProducts(prev => [...prev, response.data]);
//         }

//         handleClose();
//         alert(isEditing ? 'Product updated successfully!' : 'Product added successfully!');
//       } else {
//         alert('Failed to submit product');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert('An error occurred');
//     }
//   };

//   return (
//     <div className="flex flex-col w-full overflow-x-hidden pr-1">
//       <Navbar2 />
//       <div className="flex  gap-x-9 justify-between items-start">
//         <Sidebar />
//         <div className="h-screen w-full flex flex-col gap-4">
//           <div className="flex items-center p-2 justify-between gap-x-8">
//             <div className="flex items-center gap-x-3 w-full">
//               <b className="text-2xl">Products</b>
//             </div>
//             <Button variant="contained" color="primary" onClick={handleOpen} className="bg-purple-950 whitespace-nowrap text-white border-2 p-2 rounded-lg">
//               Add Product
//             </Button>
//           </div>

//           {/* Product Table */}
//           <div className="overflow-x-auto">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-purple-950 text-white">
//                   <th className="p-3 border text-left">ID</th>
//                   <th className="p-3 border text-left">Product Name</th>
//                   <th className="p-3 border text-left">Sub Category</th>
//                   <th className="p-3 border text-left">Category</th>
//                   <th className="p-3 border text-left">Status</th>
//                   <th className="p-3 border text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {products.map(product => (
//                   <tr key={product.id} className="border-b hover:bg-gray-200">
//                     <td className="p-3">{product.id}</td>
//                     <td className="p-3">{product.product_name}</td>
//                     <td className="p-3">{product.sub_category}</td>
//                     <td className="p-3">{product.category}</td>
//                     <td className={product.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{product.status}</td>
//                     <td className="p-3">
//                       <button onClick={() => handleEdit(product)} className="text-2xl px-2 py-1 rounded">
//                         <FaEdit />
//                       </button>
//                       <button onClick={() => handleDelete(product.id)} className="text-2xl px-2 py-1 rounded">
//                         <FaTrash />
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           {/* Modal for Adding/Editing Product */}
//           <Modal open={open} onClose={handleClose}>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-96">
//               <h2 className="text-center text-xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
              
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <TextField
//                   label="Product Name"
//                   fullWidth
//                   variant="outlined"
//                   value={productName}
//                   onChange={(e) => setProductName(e.target.value)}
//                   required
//                 />
//                 <TextField
//                   label="Sub Category"
//                   fullWidth
//                   variant="outlined"
//                   value={subCategory}
//                   onChange={(e) => setSubCategory(e.target.value)}
//                   required
//                 />
//                 <TextField
//                   label="Category"
//                   fullWidth
//                   variant="outlined"
//                   value={category}
//                   onChange={(e) => setCategory(e.target.value)}
//                   required
//                 />
//                 <div className="flex items-center justify-between">
//                   <label htmlFor="status">Status:</label>
//                   <Switch
//                     checked={status === 'Active'}
//                     onChange={() => setStatus(status === 'Active' ? 'Inactive' : 'Active')}
//                   />
//                   <span>{status}</span>
//                 </div>

//                 <Button type="submit" variant="contained" color="primary" className="w-full">
//                   {isEditing ? 'Update Product' : 'Add Product'}
//                 </Button>
//               </form>
//             </div>
//           </Modal>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Products;
import React, { useEffect, useState } from "react";
import Sidebar from '../sidebar/sidebar';
import Navbar2 from '../navbar/nav.jsx';
import { Modal, TextField, Button, Switch } from '@mui/material';
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productName, setProductName] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [category, setCategory] = useState('');
  const [status, setStatus] = useState('Inactive');

  // Fetch products from the backend
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:2030/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete a product by ID
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:2030/products/${id}`);
      setProducts(products.filter(product => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // Open Modal to add/edit product
  const handleOpen = () => {
    resetForm(); // Ensure form is reset when opening the modal
    setOpen(true);
  };

  // Open edit modal
  const handleEdit = (product) => {
    setIsEditing(true);
    setEditingProduct(product);
    setProductName(product.product_name);
    setSubCategory(product.sub_category);
    setCategory(product.category);
    setStatus(product.status);
    setOpen(true);
  };

  // Reset form fields
  const resetForm = () => {
    setIsEditing(false);
    setEditingProduct(null);
    setProductName('');
    setSubCategory('');
    setCategory('');
    setStatus('Inactive');
  };

  // Close the modal and reset form
  const handleClose = () => {
    setOpen(false);
    resetForm();
  };

  // Handle form submit for add/edit product
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const productData = { product_name: productName, sub_category: subCategory, category, status };

    try {
      const response = isEditing
        ? await axios.put(`http://localhost:2030/products/${editingProduct.id}`, productData)
        : await axios.post('http://localhost:2030/products', productData);

      if (response.status === 200 || response.status === 201) {
        // Update product list based on add or edit operation
        if (isEditing) {
          setProducts(prev => prev.map(p => (p.id === editingProduct.id ? response.data : p)));
        } else {
          setProducts(prev => [...prev, response.data]);
        }

        handleClose();
        alert(isEditing ? 'Product updated successfully!' : 'Product added successfully!');
      } else {
        alert('Failed to submit product');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred');
    }
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden pr-1">
      <Navbar2 />
      <div className="flex  gap-x-9 justify-between items-start">
        <Sidebar />
        <div className="h-screen w-full flex flex-col gap-4">
          <div className="flex items-center p-2 justify-between gap-x-8">
            <div className="flex items-center gap-x-3 w-full">
              <b className="text-2xl">Products</b>
            </div>
            <Button variant="contained" color="primary" onClick={handleOpen} className="bg-purple-950 whitespace-nowrap text-white border-2 p-2 rounded-lg">
              Add Product
            </Button>
          </div>

          {/* Product Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-950 text-white">
                  <th className="p-3 border text-left">ID</th>
                  <th className="p-3 border text-left">Product Name</th>
                  <th className="p-3 border text-left">Sub Category</th>
                  <th className="p-3 border text-left">Category</th>
                  <th className="p-3 border text-left">Status</th>
                  <th className="p-3 border text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-b hover:bg-gray-200">
                    <td className="p-3">{product.id}</td>
                    <td className="p-3">{product.product_name}</td>
                    <td className="p-3">{product.sub_category}</td>
                    <td className="p-3">{product.category}</td>
                    <td className={product.status === 'Active' ? 'text-green-500' : 'text-red-500'}>{product.status}</td>
                    <td className="p-3">
                      <button onClick={() => handleEdit(product)} className="text-2xl px-2 py-1 rounded">
                        <FaEdit />
                      </button>
                      <button onClick={() => handleDelete(product.id)} className="text-2xl px-2 py-1 rounded">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal for Adding/Editing Product */}
          <Modal open={open} onClose={handleClose}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-96">
              <h2 className="text-center text-xl font-bold mb-4">{isEditing ? 'Edit Product' : 'Add Product'}</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <TextField
                  label="Product Name"
                  fullWidth
                  variant="outlined"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  required
                />
                <TextField
                  label="Sub Category"
                  fullWidth
                  variant="outlined"
                  value={subCategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                  required
                />
                <TextField
                  label="Category"
                  fullWidth
                  variant="outlined"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                />
                <div className="flex items-center justify-between">
                  <label htmlFor="status">Status:</label>
                  <Switch
                    checked={status === 'Active'}
                    onChange={() => setStatus(status === 'Active' ? 'Inactive' : 'Active')}
                  />
                  <span>{status}</span>
                </div>

                <Button type="submit" variant="contained" color="primary" className="w-full">
                  {isEditing ? 'Update Product' : 'Add Product'}
                </Button>
              </form>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Products;
