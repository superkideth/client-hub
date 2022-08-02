import React, { createContext, useReducer, useContext } from "react";

const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

const globalReducer = (state, action) => {
	switch (action.type) {
		case "ADD_USER": {
			return {
				...state,
				user: action.user,
			};
		}

		case "ADD_DISPLAYS": {
			return {
				...state,
				displays: action.displays,
			};
		}

		case "ADD_DISPLAY": {
			return {
				...state,
				display: action.display,
			};
		}

		case "ADD_LOADING": {
			return {
				...state,
				loading: action.loading,
			};
		}

		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
};

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(globalReducer, {
		user:
			window.localStorage.getItem("user") === null
				? null
				: JSON.parse(window.localStorage.getItem("user")),
		displays:
			window.localStorage.getItem("displays") === null
				? null
				: JSON.parse(window.localStorage.getItem("displays")),
		display: null,
		loading: false,
	});

	return (
		<GlobalDispatchContext.Provider value={dispatch}>
			<GlobalStateContext.Provider value={state}>
				{children}
			</GlobalStateContext.Provider>
		</GlobalDispatchContext.Provider>
	);
};

// Custom Hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);
