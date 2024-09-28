
import React, { useState, useEffect } from 'react';
import Sidebar from '../sidebar/sidebar';
import Navbar2 from '../navbar/nav.jsx';
import { BiCategoryAlt } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Modal, TextField, Button, Switch, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import axios from 'axios';
import { useTable } from 'react-table';

const Subcategory = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSubCategory, setEditingSubCategory] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  const [categorySequence, setCategorySequence] = useState('');
  const [status, setStatus] = useState('Inactive');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [data, setData] = useState([]);

  // Delete Modal States
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [subCategoryToDelete, setSubCategoryToDelete] = useState(null);

  // Fetch sub-categories on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:2030/sub-categories');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  // Table Columns
  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Sub Category Name',
        accessor: 'sub_category_name',
      },
      {
        Header: 'Category Name',
        accessor: 'category_name',
      },
      {
        Header: 'Image',
        accessor: 'image_url',
        Cell: ({ cell: { value } }) => <img src={`http://localhost:2030${value}`} alt="SubCategory" width={50} height={50} />,
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ cell: { value } }) => <span className={value === 'Active' ? 'text-green-500' : 'text-red-500'}>{value}</span>,
      },
      {
        Header: 'Sequence',
        accessor: 'category_sequence',
      },
      {
        Header: 'Action',
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleEdit(row.original)} className="text-2xl px-2 py-1 rounded">
              <FaEdit />
            </button>
            <button onClick={() => openDeleteModal(row.original)} className="text-2xl px-2 py-1 rounded">
              <RiDeleteBin6Line />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  // Initialize Table
  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

  // Event Handlers
  const handleEdit = (subCategory) => {
    setIsEditing(true);
    setEditingSubCategory(subCategory);
    setSubCategoryName(subCategory.sub_category_name);
    setCategoryName(subCategory.category_name);
    setCategorySequence(subCategory.category_sequence);
    setStatus(subCategory.status);
    setImagePreview(`http://localhost:2030${subCategory.image_url}`);
    setOpen(true);
  };

  const openDeleteModal = (subCategory) => {
    setSubCategoryToDelete(subCategory);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setSubCategoryToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDelete = async () => {
    if (subCategoryToDelete) {
      try {
        

        await axios.delete(`http://localhost:2030/delete-subcategory/${subCategoryToDelete.id}`);

        // await axios.delete(`http://localhost:2030/delete-subcategory/${subCategoryToDelete.id}`);
        const response = await axios.get('http://localhost:2030/fetch-subcategories');
        setData(response.data);
        closeDeleteModal(); 
        alert('Sub-category deleted successfully');
      } catch (error) {
        console.error('Error deleting sub-category:', error);
        alert('Failed to delete sub-category');
      }
    }
  };

  // Modal Handlers for Adding/Editing
  const handleOpen = () => {
    setIsEditing(false);
    setEditingSubCategory(null);
    setSubCategoryName('');
    setCategoryName('');
    setCategorySequence('');
    setStatus('Inactive');
    setImagePreview(null);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImage(null);
    setImagePreview(null);
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
   console.log("handle sumbit is triggered",event)
    const formData = new FormData();
    formData.append('sub_category_name', subCategoryName);
    formData.append('category_name', categoryName);
    formData.append('category_sequence', String(categorySequence));
    formData.append('status', status);
    formData.append("categorySequence", categorySequence)
    if (image) {
      formData.append('image', image);
    }
    console.log(formData,"form data")
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = isEditing
        ? await fetch(`http://localhost:2030/update-subcategory/${editingSubCategory?.id}`, {
            method: 'PUT',
            body: formData,
          })
        : await fetch('http://localhost:2030/sub-categories', {
            method: 'POST',
            body: formData,
          });
      console.log(response,"response.... post res in frontend ")
      if (response.ok) {
        alert(isEditing ? 'Sub-category updated successfully!' : 'Sub-category added successfully!');
        const dataResponse = await axios.get('http://localhost:2030/sub-categories');
        setData(dataResponse.data);
      } else {
        alert('Failed to submit sub-category');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred');
    }

    handleClose();
  };

  return (
    <div className="flex flex-col w-full overflow-x-hidden pr-1">
      <Navbar2 />
      <div className="flex  gap-x-9 justify-between items-start">
        <Sidebar />
        <div className="h-screen w-full flex flex-col gap-4">
          <div className="flex items-center p-2 justify-between gap-x-8">
            <div className="flex items-center gap-x-3 w-full">
              <BiCategoryAlt className="text-4xl" />
              <b className="text-2xl">Sub Categories</b>
              <div className="max-w-90 border-3 flex items-center rounded-lg p-1">
                <CiSearch className="text-2xl" />
                <input className="border-none outline-none w-full" type="search" placeholder="Search Sub-category" />
              </div>
            </div>
            <Button variant="contained" color="primary" onClick={handleOpen} className="bg-purple-950 whitespace-nowrap text-white border-2 p-2 rounded-lg">
              Add Sub-category
            </Button>
          </div>

          {/* Modal for Adding/Editing Sub-category */}
          <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-lg p-6 w-96">
              <h2 id="modal-title" className="text-center text-xl font-bold mb-4">
                {isEditing ? 'Edit Sub-category' : 'Add Sub-category'}
              </h2>
            
            {/* form data .................. */}
            <form onSubmit={handleSubmit} className="space-y-4">
            <TextField 
            label="Sub-category Name" 
            fullWidth 
            variant="outlined" 
            value={subCategoryName} 
            onChange={(e) => setSubCategoryName(e.target.value)} 
            required 
          />
          <TextField 
            label="Category Name" 
            fullWidth 
            variant="outlined" 
            value={categoryName} 
            onChange={(e) => setCategoryName(e.target.value)} 
            required 
          />
          <TextField 
            label="Sequence" 
            type="number" 
            fullWidth 
            variant="outlined" 
            value={categorySequence} 
            onChange={(e) => setCategorySequence(parseFloat(e.target.value) || '')} 
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

<div className="border-2 border-dashed border-gray-400 rounded-lg p-4">
  <label className="block text-center mb-2">Upload Image</label>
  <input type="file" onChange={handleImageUpload} />
  {imagePreview && <img src={imagePreview} alt="Sub-category Preview" className="mx-auto mt-2" width={100} height={100} />}
</div>

<Button 
  type="submit" 
  variant="contained" 
  color="primary" 
  className="w-full"
>
  {isEditing ? 'Update Sub-category' : 'Add Sub-category'}
</Button>
m             </form>

            </div>
             </Modal>

          {/* Delete Confirmation Dialog */}
          <Dialog open={isDeleteModalOpen} onClose={closeDeleteModal}>
            <DialogTitle>Confirm Delete</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to delete the sub-category: <strong>{subCategoryToDelete?.sub_category_name}</strong>?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={closeDeleteModal} color="primary">
                Cancel
              </Button>
              <Button onClick={confirmDelete} color="secondary" autoFocus>
                Delete
              </Button>
            </DialogActions>
          </Dialog>

          {/* Sub-category Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()} className="bg-purple-950 text-white">
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()} className="p-3 border text-left">
                        {column.render('Header')}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="border-b hover:bg-gray-200">
                      {row.cells.map((cell) => (
                        <td {...cell.getCellProps()} className="p-3">
                          {cell.render('Cell')}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subcategory;
