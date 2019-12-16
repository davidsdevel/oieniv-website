const showAlert = message => ({
	type: "SHOW_ALERT",
	message

});

const hideAlert = () => ({
	type: "HIDE_ALERT"

});

const newEvent = () => ({
	type: "NEW"
});

const editEvent = (data) => ({
	type: "EDIT",
	...data
});

const closeEdit = () => ({
	type: "CLOSE"
});

const login = () => ({
	type: "LOGIN"
});

const logout = () => ({
	type: "LOGOUT"
});

export {
	showAlert,
	hideAlert,
	editEvent,
	newEvent,
	closeEdit,
	login,
	logout
};
