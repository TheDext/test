import React, { useEffect, useState } from "react";
import App from "../App";
import httpService from "../services/http.service";

const AppLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const { data } = await httpService.post("/product");
      setProducts(data)
    } catch (error) {
    }
  };

  useEffect(() => {
    getProducts();

  }, []);
  useEffect(() => {
    if (products.length) {
      setIsLoading(false)
    }
  }, [products])

  return <App isLoading={isLoading}/>;
};

export default AppLoader;
