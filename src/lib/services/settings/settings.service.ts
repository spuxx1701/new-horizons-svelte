import { appConfig } from '$lib/config/app.config';
import { debug } from '../logger';
import { ServiceMixin } from '../service';
import { settings, type Settings } from './settings.store';

const LOCAL_STORAGE_KEY = `${appConfig.localStoragePrefix}settings`;

export class SettingsService extends ServiceMixin<SettingsService>() {
	private settings = settings;

	/**
	 * Loads the settings from `localStorage`,
	 */
	load() {
		const json = localStorage.getItem(LOCAL_STORAGE_KEY);
		if (json) {
			const loadedSettings: Settings = JSON.parse(json);
			if (loadedSettings) settings.merge(loadedSettings);
			debug(`Settings loaded: ${json}`, SettingsService.name);
		}
	}

	/**
	 * Saves the current settings to `localStorage`.
	 */
	save() {
		const json = JSON.stringify(this.settings.value);
		localStorage.setItem(LOCAL_STORAGE_KEY, json);
		debug(`Settings saved: ${json}`, SettingsService.name);
	}
}
