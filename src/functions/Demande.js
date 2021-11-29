import axios from "axios";

export const getdemande= async (slug) =>
  await axios.get(`http://localhost:8080/demande/getdemande/${slug}`);

export const getalldemandes= async () =>
  await axios.get(`http://localhost:8080/demande/get`);

export const  deletedemande= async (id) =>
  await axios.delete(`http://localhost:8080/demande/delete/${id}`);

export const  getdemandeCount= async () =>
  await axios.get(`http://localhost:8080/demande/count`);

  export const getMesdemande = async (id) => 
  await axios.get("http://localhost:8080/demande/mesdemandes/"+id);

  export const getDemande = async (id) =>
   await axios.get("http://localhost:8080/demande/demande/"+id);

  export const adddemande = async (data) =>
   await axios.post("http://localhost:8080/demande/demande/save", data);

  export const update = async (id) =>
  await axios.put("http://localhost:8080/demande/update/"+id);


  