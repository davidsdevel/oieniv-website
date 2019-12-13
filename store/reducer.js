import { createStore, combineReducers } from "redux";

let appAlertInitial = {
	show: false,
	message: ""
}

const appAlert = (state = appAlertInitial, action) => {
  switch(action.type) {
	  case "SHOW_ALERT":
			return {
				...state,
				show: true,
				message: action.message,
			}
		case "HIDE_ALERT":
			return {
				...state,
				show: false
			}
		default: return state;
	}
}

let adminEventsState = {
	editting: false,
	preview: false,
	name: "",
	description: "",
	location: "",
	date: "",
	time: "",
	image: "",
	church: "",
	ID: ""
};

const adminEvents = (state = adminEventsState, action) => {
	switch(action.type) {
		case "NEW":
			return {
				editting: true,
				preview: false,
				name: "",
				description: "",
				location: "",
				date: "",
				time: "",
				image: "",
				church: ""
			};
		case "EDIT":
			return {
				editting: true,
				preview: true,
				name: action.name,
				description: action.description,
				location: action.location,
				date: action.date,
				time: action.time,
				image: action.image,
				church: action.church,
				ID: action.ID
			}
		case "CLOSE":
			return {
				editting: false,
				name: "",
				description: "",
				location: "",
				date: "",
				time: "",
				image: "",
				church: ""
			};
		default: return state;
	}
}

let reducer = combineReducers({
	appAlert,
	adminEvents
});

export default createStore(reducer);