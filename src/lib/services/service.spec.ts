import { describe, expect, it } from 'vitest';
import { Service } from './service';

describe('Utilities', () => {
	describe('Service', () => {
		it('should properly instantiate the service', () => {
			const service = Service.instance;
			expect(service).toBeInstanceOf(Service);
			expect(service).toBe((Service as unknown as { _instance: Service })._instance);
		});
	});
});
