import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./aBitOfStylingSoItAintUgly.css";

const ProductPage = () => {
  const [checked, setChecked] = useState([]);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    console.log(value);
    if (checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter((e) => e !== value));
    }
  };

  // const alldelete = async () => {
  //   //console.log(isChecked);
  //   if (checked.length !== 0) {
  //     const responce = await axios.post(
  //       `http://localhost/devopsdeveloper/user/deletecheckboxuser`,
  //       JSON.stringify(checked)
  //     );
  //     setDelmsg(responce.data.msg);
  //     setTimeout(() => {
  //       history.push("/user");
  //     }, 2000);
  //   } else {
  //     alert("please Select at least one check box !");
  //   }
  // };

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = {};
    await axios
      .all([
        axios.get("http://localhost/scandiwebphp/api/item/readBook.php"),
        axios.get("http://localhost/scandiwebphp/api/item/readDVD.php"),
        axios.get("http://localhost/scandiwebphp/api/item/readFurniture.php"),
      ])
      .then(
        (res) => {
          const book = res[0].data;
          const dvd = res[1].data;
          const furniture = res[2].data;
          data = [...book, ...dvd, ...furniture];
        }
        // axios.spread((book, dvd, furniture) => {
        //   data = [...book, ...dvd, ...furniture];
        // })
      )
      .catch((err) => console.log(err));

    setItems(data);
  };

  return (
    <div>
      <h1>Products Page</h1>
      <div className="container">
        <div className="grid">
          {items.map((item) => (
            <div key={item.id} className="item-display">
              <div className="item">
                <input
                  type="checkbox"
                  className="delete-checkbox"
                  checked={checked.isChecked}
                  onChange={handleCheckbox}
                />
                <p>SKU: {item.sku}</p>
                <h4>Name: {item.name}</h4>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <button className="btn btn-add">
            <Link to="/add-product" className="link">
              <span className="btn-text">ADD</span>
              <span className="btn-icon">
                <ion-icon name="add-outline"></ion-icon>
              </span>
            </Link>
          </button>
          <button
            className="btn btn-delete"
            // onClick={alldelete}
          >
            <span className="btn-text">MASS DELETE </span>
            <span className="btn-icon">
              <ion-icon name="trash-outline"></ion-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
