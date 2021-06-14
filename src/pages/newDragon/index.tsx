import React, { useState } from "react";
import { connect } from "react-redux";
import { updateObject } from "../../shared/utility";
import * as actions from "../../store/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import Container from "../../components/Container/styles";
import { ContainerNewDragon } from "./styles";

const NewDragon = (props: {
  createDragon: (arg0: {
    name: string;
    type: string;
    createdAt: string;
    histories: any[];
  }) => void;
  error: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal;
}) => {
  const [newDragon, setNewDragon] = useState({
    name: "",
    type: "",
    createdAt: new Date().toString(),
    histories: [],
  });

  const submitHandler = (event: { preventDefault: () => void }) => {
    
    if (newDragon.name.length > 0 && newDragon.type.length > 0) {
      const creationDate = new Date().toString();
      const histories: any = [];
      const newDragonUpdate = updateObject(newDragon, {
        createdAt: creationDate,
        histories: histories,
      });
      setNewDragon({ ...newDragonUpdate });
      props.createDragon(newDragon);
    }
    event.preventDefault();
  };

  const changeHandler = (event: { target: { id: any; value: any } }) => {
    const { id, value } = event.target;
    setNewDragon({ ...newDragon, [id]: value });
  };

  return (
    <Container>
      <ContainerNewDragon>
      <div className="NewDragon">
        <TextField
          onChange={changeHandler}
          required
          id="name"
          label="Name"
          variant="outlined"
          color="secondary"
        />

        <TextField
          onChange={changeHandler}
          required
          id="type"
          label="Type"
          variant="outlined"
          color="secondary"
        />

        <span onClick={submitHandler}>
          <FontAwesomeIcon icon={faSave} className="saveButton" size="2x" />
        </span>
        <div>{props.error && <p>{props.error}</p>}</div>
      </div>
      </ContainerNewDragon>
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  return {
    error: state.dragon.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    createDragon: (newDragon: any) => dispatch(actions.createDragon(newDragon)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewDragon);
