import axios from "axios";


export const getallcandidature= async () =>
  await axios.get(`http://localhost:8080/candidature/getAll`);

export const addcandidature = async (data) =>
  await axios.post("http://localhost:8080/candidature/save", data);

export const getcandidature = async (id) =>
   await axios.get("http://localhost:8080/candidature/getcandidature/"+id);

export const  deletecandidature= async (id) =>
   await axios.delete(`http://localhost:8080/candidature/delete/${id}`);

export const  getcandidatureCount= async () =>
   await axios.get(`http://localhost:8080/candidature/count`);