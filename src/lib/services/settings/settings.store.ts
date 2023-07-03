import { Theme } from '$lib/config/theme.config';
import { store } from '$lib/utilities/store';

export interface Settings {
	theme: Theme;
	debug: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
	theme: Theme.default,
	debug: true
};

export const settings = store({ ...DEFAULT_SETTINGS });
