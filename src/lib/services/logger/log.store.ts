import { store } from '$lib/utilities/store';

export enum MessageType {
	debug = 'debug',
	info = 'info',
	success = 'success',
	warning = 'warning',
	error = 'error'
}

export interface LogEntry {
	type: MessageType;
	date: Date;
	message: string;
	context?: string;
	error?: Error;
}

export const settings = store([] as LogEntry[]);
