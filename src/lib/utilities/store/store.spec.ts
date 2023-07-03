import { describe, expect, it } from 'vitest';
import { store } from './store';

describe('Utility', () => {
	describe('Store', () => {
		it('should properly create an object store', () => {
			const object = store({ foo: 'bar' });
			expect(object).toBeDefined();
			expect(object.get()).toEqual({ foo: 'bar' });
		});

		it('should properly create a non-object store', () => {
			const number = store(42);
			expect(number).toBeDefined();
			expect(number.get()).toEqual(42);
		});

		it('should properly merge and reset an object', () => {
			const object = store({ foo: 'bar' });
			object.merge({ foo: 'hello world' });
			expect(object.get().foo).toBe('hello world');
			object.reset();
			expect(object.get().foo).toBe('bar');
		});

		it('should properly merge and reset a non-object', () => {
			const string = store('foo');
			string.merge('bar');
			expect(string.get()).toBe('bar');
			string.reset();
			expect(string.get()).toBe('foo');
		});
	});
});
