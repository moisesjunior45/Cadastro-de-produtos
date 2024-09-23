import "./Produtos.css";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

// Hooks
import { useState } from "react";
import { useRequest } from "../../hooks/useRequest";

const url = "http://localhost:3000/products";

const Produtos = () => {
  const { data: products, httpConfig } = useRequest(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product = {
      name,
      price,
    };

    if (editId) {
      httpConfig(product, "PUT", editId);
    } else {
      httpConfig(product, "POST");
    }

    setName("");
    setPrice("");
    setEditId(null);
  };

  const handleEdit = (product) => {
    setName(product.name);
    setPrice(product.price);
    setEditId(product.id);
  };

  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  const handleCancel = () => {
    setName("");
    setPrice("");
  };

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div className="form">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Nome</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  placeholder="Digite o nome do produto"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div className="form-group">
                <label>Valor</label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  placeholder="Digite o valor do produto"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                {editId ? "Atualizar" : "Salvar"}
              </button>
              <button className="btn btn-secondary ms-2" onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="mt-5">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Nome do produto</th>
              <th scope="col">Valor</th>
              <th scope="col">Opções</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>R$ {product.price}</td>
                    <td>
                      <FontAwesomeIcon
                        icon={faPenToSquare}
                        className="icons"
                        onClick={() => handleEdit(product)}
                      />
                      <FontAwesomeIcon
                        icon={faDeleteLeft}
                        className="icons"
                        onClick={() => handleRemove(product.id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Produtos;
