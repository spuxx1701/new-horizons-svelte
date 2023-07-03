export interface IService {
	get instance(): IService;
}

/**
 * Extending `ServiceMixin` will turn the inheriting class into a singleton object.
 */
export function ServiceMixin<TService>() {
	return class Service {
		protected static _instance: TService;
		/**
		 * The constructor needs to be protected to prevent direct construction calls.
		 */
		// eslint-disable-next-line @typescript-eslint/no-empty-function
		protected constructor() {}
		/**
		 * Returns the instance of the service.
		 */
		public static get instance(): TService {
			if (!Service._instance) {
				Service._instance = new this() as TService;
			}
			return Service._instance;
		}
	};
}
