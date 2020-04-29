const MONTHS = {
	"01": "January",
	"02": "February",
	"03": "March",
	"04": "April",
	"05": "May",
	"06": "June", 
	"07": "July",
	"08": "August",
	"09": "September",
	"10": "August",
	"11": "November",
	"12": "December"
}

export const formatDate = (dateString) => {
	const splitDateString = dateString.split('-');

	const year = splitDateString[0];
	const month = splitDateString[1];
	const day = splitDateString[2];

	const date = `${MONTHS[month]} ${day}, ${year}`;

	return date;
};

export const formatTime = (timeString) => {
	const splitTime = timeString.split(':');

	const hour = splitTime[0];
	const minutes = splitTime[1];

	let formmatHour;
	let dayNight;

	if(+hour <= 11) { 
		if(+hour <= 10) {
			if(+hour === 0) {
				formmatHour = "12";
			} else {
				formmatHour = hour[1];
			}
		} else {
			formmatHour = hour;
		}

		dayNight = "AM";
	} else {
		formmatHour = +hour - 12;
		if(formmatHour === 0) {
			formmatHour = "12";
		}
		dayNight = "PM";
	}
	const time = `${formmatHour}:${minutes} ${dayNight}`;
	
	return time;
}
























