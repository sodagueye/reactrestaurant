// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/style.css"
// import { MdDelete } from "react-icons/md";
// import { MdEdit } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";
// export default function Home() {
//   const [data, setData] = useState([]);
//   const navigation = useNavigate();

//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch(
//           "https://tache-de-validition-nodejs-1-lhb5.onrender.com/admin/liste-produits"
//         );
//         const resultat = await response.json();
//         setData(resultat);
//         console.log(resultat);
//       } catch {
//         console.log("error");
//       }
//     }

//     getData();
//   }, []);

//   async function handleSubmit(id) {
//     const conf = window.confirm("Confirmer la suppression");
//     if (conf) {
//       try {
//         await axios.delete(
//           `https://tache-de-validition-nodejs-1-lhb5.onrender.com/admin/liste-produits/${id}`
//         );
//         alert("Deleted successfully");
//         setData(data.filter((item) => item._id !== id));
//       } catch (error) {
//         console.error("There was an error deleting the item!", error);
//       }
//     }
//   }

//   return (
//     <div className="container mt-5">
//       <div className="d-flex justify-content-between align-items-center">
//         <button
//           onClick={() => navigation("/ajout")}
//           className="btn  btn-ajout shadow"
//           style={{ backgroundColor: "#91725d", color: "white" }}
//         >
//           Ajouter
//         </button>
//         <div className="research d-flex gap-0">
//             <input
//               className="input-research "
//               type="text"
//               placeholder="Rechercher"
//             />
//             <div className="icon-search d-flex justify-content-center align-items-center">
//               <IoSearch />
//             </div>
//           </div>
//       </div>
//       <table className="table shadow table-hover ">
//         <thead>
//           <tr>
//             <th
//               style={{ backgroundColor: "#91725d", color: "white" }}
//               scope="col"
//             >
//               Plats
//             </th>
//             <th
//               style={{ backgroundColor: "#91725d", color: "white" }}
//               scope="col"
//             >
//               Nom
//             </th>
//             <th
//               style={{ backgroundColor: "#91725d", color: "white" }}
//               scope="col"
//             >
//               Description
//             </th>
//             <th
//               style={{ backgroundColor: "#91725d", color: "white" }}
//               scope="col"
//             >
//               Prix
//             </th>
//             <th
//               style={{ backgroundColor: "#91725d", color: "white" }}
//               scope="col"
//             >
//               Actions
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item._id}>
//               <td>
//                 <img src={item.image} alt="" style={{ width: "50px" }} />
//               </td>
//               <td>{item.name}</td>
//               <td>{item.description}</td>
//               <td>{item.price}</td>
//               <td>
//                 <button className="btn btn-warning me-1 ">
//                   <Link className="text-white" to={`/update/${item._id}`}>
//                   <MdEdit />
//                   </Link>
//                 </button>
//                 <button
//                   className="btn btn-danger me-1"
//                   onClick={() => handleSubmit(item._id)}
//                 >
//                   <MdDelete />
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Modal, Button, Form } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";

function ProduitAjout() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");
  const [editingProductId, setEditingProductId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Nombre de produits par page

  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          console.error(error);
        },
        async () => {
          const imageUrl = await getDownloadURL(uploadTask.snapshot.ref);
          saveProduct(imageUrl);
        }
      );
    } else {
      saveProduct();
    }
  };

  const saveProduct = async (imageUrl = "") => {
    const productData = {
      name,
      description,
      price,
      image: imageUrl,
      category,
    };

    try {
      if (editingProductId) {
        await axios.patch(
          `https://tache-de-validition-nodejs-7.onrender.com/admin/liste-produits/${editingProductId}`,
          productData
        );
        setEditingProductId(null);
      } else {
        await axios.post(
          "https://tache-de-validition-nodejs-7.onrender.com/admin/liste-produits",
          productData
        );
      }
      setName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setCategory("");
      fetchProducts();
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://tache-de-validition-nodejs-7.onrender.com/admin/liste-produits");
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (product) => {
    setName(product.name);
    setDescription(product.description);
    setPrice(product.price);
    setCategory(product.category);
    setEditingProductId(product._id);
    setShowModal(true);
  };

  const handleDeleteClick = (id) => {
    setProductToDelete(id);
    setShowDeleteModal(true);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://tache-de-validition-nodejs-7.onrender.com/admin/liste-produits/${productToDelete}`
      );
      fetchProducts();
      setShowDeleteModal(false);
      setProductToDelete(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCategoryFilterChange = (e) => {
    setFilterCategory(e.target.value);
  };

  // Get current products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filterCategory
    ? products.filter((product) => product.category === filterCategory)
    : products.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(products.length / productsPerPage);

  return (
    <div className="">
      <div className="">
        <div className="d-flex justify-content-end mt-3">
          <Button
            style={{ backgroundColor: "#91725d" }}
            className="border-0 mt-3"
            onClick={() => setShowModal(true)}
          >
            Ajouter Produit
          </Button>
        </div>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Nom du produit</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Prix</Form.Label>
                <Form.Control
                  className="inpputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  className="inputControl"
                  style={{ border: "3px, solid #91725d" }}
                  type="file"
                  onChange={handleImageChange}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Catégorie</Form.Label>
                <Form.Control
                  className="inputControl"
                  style={{ border: "3px, solid #91725d" }}
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  required
                >
                  <option value="">Sélectionnez une catégorie</option>
                  <option value="plats senegalais">Plats Sénégalais</option>
                  <option value="fastfood">Fastfood</option>
                  <option value="boissons">Boissons</option>
                  <option value="desserts">Desserts</option>
                  <option value="cuisine d'ailleurs">Cuisine d'ailleurs</option>
                </Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-center mb-5">
                <Button
                  style={{ backgroundColor: "#91725d" }}
                  className="border-0 mt-3"
                  type="submit"
                >
                  {editingProductId ? "Modifier Produit" : "Ajouter Produit"}
                </Button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>

        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirmation de suppression</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Êtes-vous sûr de vouloir supprimer ce produit ?
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setShowDeleteModal(false)}
            >
              Annuler
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Supprimer
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      <table className="mt-5">
        <thead style={{ backgroundColor: "#91725d" }}>
          <tr>
            <th style={{ backgroundColor: "#91725d" }}>Nom</th>
            <th style={{ backgroundColor: "#91725d" }}>Description</th>
            <th style={{ backgroundColor: "#91725d" }}>Prix</th>
            <th style={{ backgroundColor: "#91725d" }}>Image</th>
            <th style={{ backgroundColor: "#91725d" }}>Catégorie</th>
            <th style={{ backgroundColor: "#91725d" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentProducts.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>
                {product.image && (
                  <img src={product.image} alt={product.name} width="100" />
                )}
              </td>
              <td>{product.category}</td>
              <td>
                <button
                  onClick={() => handleEdit(product)}
                  className="border-0 mx-2   p-2 rounded-2 bg-transparent"
                >
                  <MdEdit className="text-warning " />
                </button>
                <button
                  onClick={() => handleDeleteClick(product._id)}
                  className="border-0  p-2 rounded-2 bg-transparent"
                >
                  <MdDelete className="text-danger" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination d-flex justify-content-center my-5 gap-2">
        <Button
          disabled={currentPage === 1}
          style={{ backgroundColor: "#91725d" }}
          className="border-0"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Précédent
        </Button>
        <Button
          disabled={currentPage === totalPages}
          style={{ backgroundColor: "#91725d" }}
          className="border-0"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Suivant
        </Button>
      </div>
    </div>
  );
}

export default ProduitAjout;
