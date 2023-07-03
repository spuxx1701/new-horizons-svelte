import { SettingsService } from '$lib/services/settings';

/**
 * Bootstraps the application.
 */
export function bootstrap() {
	SettingsService.instance.load();
}
