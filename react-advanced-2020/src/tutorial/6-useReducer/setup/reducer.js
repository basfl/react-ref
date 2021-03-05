export const reducer = (state, action) => {
    console.log("state", state);
    console.log("action", action);
    if (action.type === "ADD_ITEM") {
      console.log("ADD_ITEM");
      const newItems = [...state.people, action.payload];
      //const newItems=state.people.concat(action.payload)
      return {
        ...state,
        people: newItems,
        isModalOpen: true,
        modalContent: "item added",
      };
    }
    if (action.type === "NO_VALUE") {
      return {
        ...state,
        isModalOpen: true,
        modalContent: "Please enter value",
      };
    }
    if (action.type === "CLOSE_MODAL") {
      return {
        ...state,
        isModalOpen: false,
      };
    }
    if (action.type === "REMOVE_ITEM") {
      const newPeople = state.people.filter((person) => {
        return person.id !== action.payload;
      });
      return {
        ...state,
        people: newPeople,
      };
    }
    throw new Error("No action found");
  };