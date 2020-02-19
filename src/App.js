import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import { Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';

import {
  manufacturersFromJSON,
  modelsFromJSON,
  generationsFromJSON,
  enginesFromJSON
} from './data/import'


function App() {

  const [manufacturer, setManufacturer] = useState('No manufacturer');
  const [model, setModel] = useState('No Model');
  const [generation, setGeneration] = useState("No generation")
  const [engine, setEngine] = useState("No Engine")

  useEffect(() => {
    console.log(manufacturer)
  }, [manufacturer])
  return (
    <div className="App" >
      <Form style={{ height: `100vh`, width: `100%`, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, padding: `5px` }}>
        <Row form >
          <Col md={6}>
            <FormGroup>
              <Label for="manufacturer">Manufacturer</Label>
              <Input type="select" name="selectManufacturer" onChange={(e) => setManufacturer(e.target.value)} id="manufacturer">
                <BuildManufacturersList />
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="model">Model</Label>
              <Input type="select" name="selectModel" onChange={(e) => setModel(e.target.value)} id="model">
                {manufacturer && <BuildModelsList manufacturerName={manufacturer} />}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="generation">Generation</Label>
              <Input type="select" name="selectGeneration" onChange={(e) => setGeneration(e.target.value)} id="generation">
                {model && <BuildGenerationsList modelName={model} />}
              </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="engine">Engine</Label>
              <Input type="select" name="selectEngine" onChange={(e) => setEngine(e.target.value)} id="engine">
                {generation && <BuildEngineList generationName={generation} />}
              </Input>
            </FormGroup>
          </Col>
        </ Row>
      </Form>
    </div >
  );
}



const BuildManufacturersList = () => {
  return manufacturersFromJSON().map((manufacturer) => {
    return (
      <option key={manufacturer.id}>
        {manufacturer.name}
      </option>
    )
  })
}

const BuildModelsList = (_manufacturerName) => {
  let manufacturer = getManufacturerByName(_manufacturerName);
  console.log(manufacturer);
  let models = [];
  if (manufacturer !== undefined) {
    modelsFromJSON().forEach(model => {
      if (model.manufacturer_id === manufacturer.id) {
        models.push(model)
      }
    });
    console.log(models);

    return models.map((model) => {
      return (
        <option key={model.id}>
          {model.name}
        </option>
      )
    })
  } else {
    return `toto`
  }
}

const BuildGenerationsList = (_modelName) => {
  let model = getModelByName(_modelName);
  console.log(model);
  let generations = [];
  if (model !== undefined) {
    generationsFromJSON().forEach(generation => {
      if (generation.model_id === model.id) {
        generations.push(generation)
      }
    });
    console.log(generations);

    return generations.map((generation) => {
      return (
        <option key={generation.id}>
          {generation.name}
        </option>
      )
    })
  } else {
    return `toto`
  }
}

const BuildEngineList = (_generationName) => {
  let generation = getGenerationByName(_generationName);
  console.log(generation);
  let engines = [];
  if (generation !== undefined) {
    enginesFromJSON().forEach(engine => {
      if (engine.generation_id === generation.id) {
        engines.push(engine)
      }
    });
    console.log(engines);
    return engines.map((engine) => {
      return (
        <option key={engine.id}>
          {engine.name}
        </option>
      )
    })
  } else {
    return `toto`
  }
}


function getManufacturerByName(props) {
  let findedManufacturer;
  manufacturersFromJSON().forEach((manufacturer) => {
    if (manufacturer.name === props.manufacturerName) {
      findedManufacturer = manufacturer
    }
  });
  return findedManufacturer
}

function getModelByName(props) {
  let findedModel;
  modelsFromJSON().forEach((model) => {
    if (model.name === props.modelName) {
      findedModel = model
    }
  });
  return findedModel
}

function getGenerationByName(props) {
  let findedGeneration;
  generationsFromJSON().forEach((generation) => {
    if (generation.name === props.generationName) {
      findedGeneration = generation
    }
  });
  return findedGeneration
}


export default App;
