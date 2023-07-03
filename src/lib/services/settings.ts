import { ServiceMixin } from './service';
import type { Theme } from './theme-manager';
import { writable, type Writable } from 'svelte/store';

export interface UserSettings {
	theme: Theme;
}

export const DEFAULT_USER_SETTINGS: UserSettings = {
	theme: 0
};

export class Settings extends ServiceMixin<Settings>() {
	private _settings = writable({ ...DEFAULT_USER_SETTINGS });

  update(settings: Partial<UserSettings>) {
    this._settings.update((currentSettings: UserSettings) => { ...currentSettings, settings });
  }

	get userSettings(): Writable<UserSettings> {
		return this._userSettings;
	}

	set userSettings(userSettings: Partial<UserSettings>) {
		this._userSettings.update((currentUserSettings: UserSettings) => {
			return { ...currentUserSettings, userSettings };
		});
		console.log(this._userSettings);
	}

  subscribe = this._userSettings.subscribe;
}
