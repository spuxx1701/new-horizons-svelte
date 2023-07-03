import { get, writable, type Writable } from 'svelte/store';

type StorableType = object | string | number | boolean;

/**
 * `Store` extends `svelte/store/Writable` and offers additional
 * functionality like resetting the value to its initial value, parsing
 * the value or merging a new value.
 */
export interface Store<T = StorableType> extends Writable<T> {
	/**
	 * The initial value of the writable.
	 */
	initialValue: T;
	/**
	 * Returns the value of the store.
	 * @returns
	 */
	get value(): T;
	/**
	 * Returns the value of the store.
	 * @returns
	 */
	get: () => T;
	/**
	 * Merges the given `newValue` into the store's current value.
	 * @param newValue
	 */
	merge: (newValue: Partial<T>) => void;
	/**
	 * Resets the store's current value to its initial value.
	 */
	reset: () => void;
}

/**
 * Creates and returns a new `Store` object.
 * @param initialValue
 * @returns
 */
export function store<T = StorableType>(initialValue: T) {
	const { subscribe, set, update } = writable(
		typeof initialValue === 'object' ? ({ ...initialValue } as T) : initialValue
	);

	const newStore: Store<T> = {
		initialValue,
		get value(): T {
			return get(this);
		},
		get(): T {
			return get(this);
		},
		merge(newValue: Partial<T> | T) {
			if (typeof newValue === 'object') {
				update((value) => {
					return { ...value, ...newValue };
				});
			} else {
				set(newValue);
			}
		},
		reset() {
			set(
				typeof this.initialValue === 'object' ? ({ ...this.initialValue } as T) : this.initialValue
			);
		},
		subscribe,
		set,
		update
	};

	return newStore;
}
