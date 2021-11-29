import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Input} from 'antd';
export const Form = ({ onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
          <Row>
              <Col>
              <Input className="form-control-lg"
          id="name"
          placeholder="Prénom*" 
          required/>
        </Col>
        <Col>
        <Input className="form-control-lg"
          id="lname"
          placeholder="Nom*" 
          required/>
        </Col>
        </Row>
      </div>
      <br/>
      <div className="form-group">
        
        <Input className="form-control-lg"
          id="email"
          placeholder="Email*" 
          type="email"
          required/>
        <br/><br/>
        <Input prefix="(+212)" className="form-control-lg" id="tel"
          placeholder="Téléphone*" required/>
        <br/>
        <br/>
        <select
         className="form-select form-select-md mb-3"
          defaultValue="ville"
          id="ville"
          required
        >
        <option>Choisissez une ville </option>
        <option>Tanger</option>
        <option>Tetouan</option>
        <option>Martil</option>
        <option>Mdiq</option>
        <option>Fnideq</option>
        <option>Assilah</option>
        <option>Chefchaouen</option>
        <option>Ksar Sghir</option>
        </select>
        <select
        required
          defaultValue="catégorie"
          id="categorie"
          className="form-select form-select-md mb-3"
        >
        <option>Choisissez une catégorie </option>
        <option>Electricité</option>
        <option>Plomberie</option>
        <option>Electroménager</option>
        </select>
      </div>
      <br/>
      <div className="form-group">
        <button className="form-control btn btn-danger" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};
export default Form;
