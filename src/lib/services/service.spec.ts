import { describe, expect, it } from 'vitest';
import { ServiceMixin } from './service';

describe('Utilities', () => {
	describe('Service', () => {
		it('should properly instantiate the service', () => {
			class TestService extends ServiceMixin<TestService>() {}

			const instance = TestService.instance;
			expect(instance).toBeDefined();
			expect(instance).toBe((TestService as unknown as { _instance: TestService })._instance);
		});
	});
});
