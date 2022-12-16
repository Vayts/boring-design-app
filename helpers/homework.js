import moment from 'moment';
import { getNotification } from '@src/notifications/notification';

export function homeworkParser(deadlines) {
	const sorted = {};
	if (deadlines.length) {
		deadlines.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).forEach((el) => {
			const date = moment(el.deadline).format('DD.MM.YYYY');
			if (sorted[date]) {
				sorted[date].homeworks.push(el);
			} else {
				sorted[date] = { homeworks: [el] };
			}
		});
	}
	return sorted;
}

export async function getHomework(axiosPrivate, link) {
	try {
		const response = await axiosPrivate(`/student/download/homework/${link}`, {
			decompress: false,
			responseType: 'arraybuffer',
		});
		const url = window.URL.createObjectURL(new Blob([response.data]));
		const downloadLink = document.createElement('a');
		downloadLink.href = url;
		downloadLink.setAttribute('download', link);
		document.body.appendChild(downloadLink);
		downloadLink.click();
		document.body.removeChild(downloadLink);
	} catch {
		getNotification('Something went wrong', 'error');
	}
}
