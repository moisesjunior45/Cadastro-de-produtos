import { useState, useEffect } from "react";

// Hook personalizado para fazer requisições HTTP

export const useRequest = (url) => {
  // Estados para armazenar dados e configurações
  const [data, setData] = useState([]);
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);
  const [itemId, setItemId] = useState(null);

  // Função para configurar a requisição HTTP
  const httpConfig = (data, method, id = null) => {
    if (method === "POST" || method === "PUT") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setMethod(method);
      if (id) setItemId(id);
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  // useEffect para fazer requisição GET
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const json = await res.json();

      setData(json);
    };
    fetchData();
  }, [url, callFetch]);

  // useEffect para fazer requisições POST, PUT e DELETE
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST" || method === "PUT") {
        let fetchOptions = [
          method === "PUT" ? `${url}/${itemId}` : url,
          config,
        ];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === "DELETE") {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }

      setCallFetch(json);
    };

    if (method) {
      httpRequest();
    }
  }, [config, method, url, itemId]);

  return { data, httpConfig };
};
