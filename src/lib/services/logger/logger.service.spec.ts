import { afterEach, describe, expect, it, vitest } from 'vitest';
import { settings } from '../settings';
import { debug, info, success, warning, error } from './logger.service';
import { applog, MessageType } from './logger.store';

describe('Services', () => {
	describe('Logger', () => {
		afterEach(() => {
			settings.reset();
			applog.reset();
			vitest.resetAllMocks();
		});

		describe('debug', () => {
			it('should create a message if debug mode is enabled', () => {
				settings.merge({ debug: true });
				debug('hello world');
				expect(applog.value.length).toBe(1);
				expect(applog.value[0].message).toBe('hello world');
			});

			it('should not create a message if debug mode is disabled', () => {
				settings.merge({ debug: false });
				debug('hello world');
				expect(applog.value.length).toBe(0);
			});
		});

		describe('info', () => {
			it("should log an 'info' message", () => {
				const logSpy = vitest.spyOn(global.console, 'log');

				info('hello world', 'SomeContext');
				expect(applog.value.length).toBe(1);
				const actual = applog.value[0];
				expect(actual.message).toBe('hello world');
				expect(actual.context).toBe('SomeContext');
				expect(actual.type).toBe(MessageType.info);
				expect(actual.date).toBeDefined();
				expect(actual.error).toBeUndefined();
				expect(logSpy).toHaveBeenCalledTimes(1);
			});
		});

		describe('success', () => {
			it("should log a 'success' message", () => {
				success('hello world');
				expect(applog.value.length).toBe(1);
				expect(applog.value[0].type).toBe(MessageType.success);
			});
		});

		describe('warning', () => {
			it("should log a 'warning' message", () => {
				warning('hello world');
				expect(applog.value.length).toBe(1);
				expect(applog.value[0].type).toBe(MessageType.warning);
			});
		});

		describe('error', () => {
			it("should log an 'error' message", () => {
				error('hello world');
				expect(applog.value.length).toBe(1);
				expect(applog.value[0].type).toBe(MessageType.error);
			});
		});
	});
});
