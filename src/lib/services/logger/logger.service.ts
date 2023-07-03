import { ServiceMixin } from '../service';
import { settings } from '../settings';
import { MessageType, type LogEntry, applog } from './logger.store';

export class Logger extends ServiceMixin<Logger>() {
	/**
	 * Logs a `debug` message.
	 * @param message The message.
	 * @param context (optional) The context.
	 */
	debug(message: string, context?: string) {
		if (!this.isDebugMode) return;
		const logEntry = this.createLogEntry({ message, context, type: MessageType.debug });
		console.debug(this.parseLogEntry(logEntry));
	}

	/**
	 * Logs an `info` message.
	 * @param message The message.
	 * @param context (optional) The context.
	 */
	info(message: string, context?: string) {
		const logEntry = this.createLogEntry({ message, context, type: MessageType.info });
		if (this.isDebugMode) {
			console.log(this.parseLogEntry(logEntry));
		}
	}

	/**
	 * Logs a `success` message.
	 * @param message The message.
	 * @param context (optional) The context.
	 */
	success(message: string, context?: string) {
		const logEntry = this.createLogEntry({ message, context, type: MessageType.success });
		if (this.isDebugMode) {
			console.log(this.parseLogEntry(logEntry));
		}
	}

	/**
	 * Logs a `warning` message.
	 * @param message The message.
	 * @param context (optional) The context.
	 */
	warning(message: string, context?: string, error?: unknown | Error) {
		const logEntry = this.createLogEntry({
			message,
			context,
			type: MessageType.warning,
			error: error as Error
		});
		if (this.isDebugMode) {
			console.warn(this.parseLogEntry(logEntry));
		}
	}

	/**
	 * Logs an `error` message.
	 * @param message The message.
	 * @param context (optional) The context.
	 */
	error(message: string, context?: string, error?: unknown | Error) {
		const logEntry = this.createLogEntry({
			message,
			context,
			type: MessageType.error,
			error: error as Error
		});
		if (this.isDebugMode) {
			console.error(this.parseLogEntry(logEntry));
		}
	}

	/**
	 * Parses the given `LogEntry` to a console-friendly string.
	 * @param logEntry The log entry.
	 * @returns The string output.
	 */
	parseLogEntry(logEntry: LogEntry) {
		let output = `[${logEntry.type.toUpperCase()}]  [${logEntry.date.toISOString()}]`;
		if (logEntry.context) {
			output += ` [${logEntry.context}]`;
		}
		output += ` ${logEntry.message}`;
		return output;
	}

	private createLogEntry(newLogEntry: {
		message: string;
		type: MessageType;
		context?: string;
		error?: Error;
	}) {
		const logEntry: LogEntry = { ...newLogEntry, date: new Date() };
		applog.merge([logEntry]);
		return logEntry;
	}

	private get isDebugMode() {
		return settings.value.debug;
	}
}
/**
 * Logs a `debug` message.
 * @param message The message.
 * @param context (optional) The context.
 */
export const debug = (message: string, context?: string) => {
	Logger.instance.debug(message, context);
};
/**
 * Logs an `info` message.
 * @param message The message.
 * @param context (optional) The context.
 */
export const info = (message: string, context?: string) => {
	Logger.instance.info(message, context);
};
/**
 * Logs a `success` message.
 * @param message The message.
 * @param context (optional) The context.
 */
export const success = (message: string, context?: string) => {
	Logger.instance.success(message, context);
};
/**
 * Logs a `warning` message.
 * @param message The message.
 * @param context (optional) The context.
 */
export const warning = (message: string, context?: string, error?: unknown | Error) => {
	Logger.instance.warning(message, context, error);
};
/**
 * Logs an `error` message.
 * @param message The message.
 * @param context (optional) The context.
 */
export const error = (message: string, context?: string, error?: unknown | Error) => {
	Logger.instance.error(message, context, error);
};
