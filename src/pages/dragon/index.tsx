import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import {
  faEdit,
  faDragon,
  faArrowCircleLeft,
  faSave,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import { ContainerIcons, ListDragon } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DragonList } from "../../types/Dragons";
import Container from "../../components/Container/styles";
import TextField from "@material-ui/core/TextField";

const Dragon = (props: any) => {
  const [dragonDetails, setDragonDetails] = useState<DragonList>();
  const [isEdit, setIsEdit] = useState(false);
  const [wasDeleted, setWasDeleted] = useState(false);

  useEffect(() => {
    setDragonDetails({
      ...props.location.state,
    });
    setWasDeleted(false);
  }, [props]);

  useEffect(() => {
    if (wasDeleted) {
      props.history.goBack();
    }
  }, [props, wasDeleted]);

  if (!dragonDetails) return null;

  const formatDate = (date: any) => {
    return new Date(date).toDateString();
  };

  const changeHandler = (event: any) => {
    const { id, value } = event.target;
    setDragonDetails({ ...dragonDetails, [id]: value });
  };

  const goBackHandler = () => {
    props.history.goBack();
  };

  const saveDragonHandler = () => {
    props.saveDragon(dragonDetails);
    setIsEdit(false);
  };

  const deleteDragonHandler = () => {
    props.deleteDragon(dragonDetails.id);
    setWasDeleted(true);
  };
  const editDragonHandler = () => {
    setIsEdit(!isEdit);
  };
  const editMode = () => {
    return (
      <>
        <TextField
          value={dragonDetails.name}
          onChange={changeHandler}
          required
          id="name"
          label="Name"
          variant="outlined"
          color="secondary"
        />
        <TextField
          value={dragonDetails.type}
          onChange={changeHandler}
          required
          id="type"
          label="type"
          variant="outlined"
          color="secondary"
        />
      </>
    );
  };
  const infoMode = () => {
    return (
      <>
        <p className="dragonDetailsType">type: {dragonDetails.type}</p>
        <h2>{dragonDetails.name}</h2>
      </>
    );
  };

  const setDisplayMode = () => {
    switch (isEdit) {
      case true:
        return editMode();
      case false:
        return infoMode();
    }
  };

  if (!dragonDetails) return null;

  let listDragonsView = (
    <ListDragon>
      <div className="Dragon">
        <div className="first-row-info">
          <span className="id">{dragonDetails.id}</span>
          <span className="createdAt">
            {formatDate(dragonDetails.createdAt)}
          </span>
        </div>
        {setDisplayMode()}
      </div>
    </ListDragon>
  );
  return (
    <>
      <Container>
        <FontAwesomeIcon icon={faDragon} size="5x" />
        {listDragonsView}
        <ContainerIcons>
          <FontAwesomeIcon
            onClick={goBackHandler}
            icon={faArrowCircleLeft}
            size="2x"
          />
          <FontAwesomeIcon
            onClick={editDragonHandler}
            icon={faEdit}
            size="2x"
          />
          {isEdit && (
            <FontAwesomeIcon
              onClick={saveDragonHandler}
              icon={faSave}
              size="2x"
            />
          )}
          {!isEdit && (
            <FontAwesomeIcon
              onClick={deleteDragonHandler}
              icon={faTrashAlt}
              size="2x"
            />
          )}
        </ContainerIcons>
        <div>{props.error && <p>{props.error}</p>}</div>
      </Container>
    </>
  );
};

const mapStateToProps = (state: {
  dragon: { successMessage: any; error: any };
}) => {
  return {
    successMessage: state.dragon.successMessage,
    error: state.dragon.error,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    saveDragon: (dragonDetails: any) =>
      dispatch(actions.saveDragon(dragonDetails)),
    deleteDragon: (dragonId: any) => dispatch(actions.deleteDragon(dragonId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);
