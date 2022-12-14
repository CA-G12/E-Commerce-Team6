/* eslint-disable no-nested-ternary */
import axios from 'axios';
import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import Filter from '../../components/FIlter/Filter';
import Products from '../../components/products/products';
// eslint-disable-next-line import/no-named-as-default
import Search from '../../components/search/search';
import './Catalog.css';
import { getProducts, getProductsNames } from '../../helper/requests';

// const datat = [{ id: 5, name: 'test', image: 'test', price: 10 }];

function Catalog() {
  const [data, setData] = useState([]);
  const [filterProduct, setFilterProduct] = useState({
    category: [],
    price: 100,
    search: '',
  });
  const [names, setNames] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchProduct = async () => {
      try {
        const res = await getProducts(filterProduct, controller);
        setData(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
    return () => {
      controller.abort();
    };
  }, [filterProduct]);

  useEffect(() => {
    const fetchCategory = async () => {
      const res = await axios.get('/api/v1/category');
      const arr = res.data.map((ele) => ({
        name: ele.name,
        id: ele.id,
        selected: false,
      }));
      setFilterProduct((prevState) => ({ ...prevState, category: arr }));
    };
    fetchCategory();
  }, []);

  useEffect(() => {
    getProductsNames().then((res) => {
      setNames(res.names);
    });
  }, []);

  return (
    <section className="products-catalog">
      <Filter
        filterProduct={filterProduct}
        setFilterProduct={setFilterProduct}
      />
      {data.msg ? (
        <h1>{data.msg}</h1>
      ) : !data.length ? (
        <h1>loading...</h1>
      ) : (
        <section className="products-container">
          <Search names={names} setFilterProduct={setFilterProduct} />
          <Products data={data} />
        </section>
      )}
    </section>
  );
}

export default Catalog;
