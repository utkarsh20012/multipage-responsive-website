import React, { useContext, useReducer } from "react";
import data from "./data";

const AppContext = React.createContext();

const initialState = {
  name: "",
  image: "",
  services: data,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HOME_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
    case "ABOUT_UPDATE":
      return {
        ...state,
        name: action.payload.name,
        image: action.payload.image,
      };
    default:
      return state;
  }
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateHomePage = () => {
    dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "Gautam Technical",
        image: "./images/hero.svg",
      },
    });
  };

  const updateAboutPage = () => {
    dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "Utkarsh Gautam",
        image: "./images/about1.svg",
      },
    });
  };

  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };


// node_modules
