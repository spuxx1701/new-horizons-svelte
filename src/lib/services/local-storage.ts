import { ServiceMixin } from './service';

export const PREFIX = 'newhorizons-';

export class LocalStorage extends ServiceMixin<LocalStorage>() {
	readTheme(): Theme {
		const storedTheme = localStorage.getItem(PREFIX + 'theme');
		if (storedTheme && isValidTheme(parseInt(storedTheme))) {
			return parseInt(storedTheme);
		} else {
			return Theme.default;
		}
	}

	setTheme(theme: Theme) {
		this.theme = theme;
		localStorage.setItem(PREFIX + 'theme', theme.toString());
	}
}
