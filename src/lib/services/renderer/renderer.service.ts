import { Theme } from '$lib/config/theme.config';
import { debug } from '../logger';
import { ServiceMixin } from '../service';

export class Renderer extends ServiceMixin<Renderer>() {
	/**
	 * Applies the given theme to the document.
	 * @param theme The theme.
	 */
	applyTheme(theme: Theme) {
		document.documentElement.className = `theme-${Theme[theme]}`;
		debug(`Applied theme: ${Theme[theme]}`, Renderer.name);
	}
}
