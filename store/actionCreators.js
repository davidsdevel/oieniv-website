const showAlert = (message) =>{
	return {
		type: "SHOW_ALERT",
		message
	};
};

const hideAlert = () => {
	return {
		type: "HIDE_ALERT"
	};
};

const newEvent = () => {
	return {
		type: "NEW"
	}
};
const editEvent = (data) => ({
	type: "EDIT",
	...data
});

const closeEdit = () => ({
	type: "CLOSE"
})

export { showAlert, hideAlert, editEvent, newEvent, closeEdit };