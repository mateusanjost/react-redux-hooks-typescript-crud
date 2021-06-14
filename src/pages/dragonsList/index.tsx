import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import NewDragon from "../newDragon/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faDragon } from "@fortawesome/free-solid-svg-icons";
import { DragonList } from "./styles";
import Container from "../../components/Container/styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

const DragonsList = (props: { history: { pathname: string; state: any; }[]; loading: any; dragonsList: { map: (arg0: (dragon: any) => JSX.Element) => JSX.Element; }; error: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
  const [isAddingNew, setIsAddingNew] = useState(false);

  const onClickDragonHandler = (event: { id: string; }) => {
    props.history.push({ pathname: `/dragon/${event.id}`, state: event });
  };

  const addNewDragonHandler = () => {
    setIsAddingNew(!isAddingNew);
  };

  let list = <p>Loading</p>;
  if (!props.loading) {
    list = props.dragonsList.map((dragon: { id: string; name: string; }) => (
      <div key={dragon.id} className="dragon">
        <FontAwesomeIcon icon={faDragon} />
        <li onClick={onClickDragonHandler.bind(this, dragon)}>{dragon.name}</li>
        <VisibilityIcon onClick={onClickDragonHandler.bind(this, dragon)} />
      </div>
    ));
  }

  return (
    <Container>
      <DragonList>
        <FontAwesomeIcon icon={faDragon} size="5x" />
        <ul>{list}</ul>
        <hr />
        {!isAddingNew && (
          <FontAwesomeIcon
            onClick={addNewDragonHandler}
            icon={faPlus}
            style={{ marginRight: 2 }}
          />
        )}
        {isAddingNew && <NewDragon />}
        {props.error && <p>{props.error}</p>}
      </DragonList>
    </Container>
  );
};

const mapStateToProps = (state: { dragonList: { dragons: any; loading: any; error: any; wasUpdate: any; }; dragon: { wasCreated: any; }; }) => {
  return {
    dragonsList: state.dragonList.dragons,
    loading: state.dragonList.loading,
    error: state.dragonList.error,
    wasCreated: state.dragon.wasCreated,
    wasUpdate: state.dragonList.wasUpdate,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onGetDragonsList: () => dispatch(actions.getDragonsList()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DragonsList);
