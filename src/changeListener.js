/**
 * @typedef {Function} ext.popups.ChangeListener
 * @param {Object} prevState The previous state
 * @param {Object} state The current state
 */

/**
 * Registers a change listener, which is bound to the
 * [store](http://redux.js.org/docs/api/Store.html).
 *
 * A change listener is a function that is only invoked when the state in the
 * [store](http://redux.js.org/docs/api/Store.html) changes. N.B. that there
 * may not be a 1:1 correspondence with actions being dispatched to the store
 * and the state in the store changing.
 *
 * See [Store#subscribe](http://redux.js.org/docs/api/Store.html#subscribe)
 * for more information about what change listeners may and may not do.
 *
 * @param {Redux.Store} store
 * @param {ext.popups.ChangeListener} callback
 */
module.exports = function ( store, callback ) {
	// This function is based on the example in [the documentation for
	// Store#subscribe](http://redux.js.org/docs/api/Store.html#subscribe),
	// which was written by Dan Abramov.

	var state;

	store.subscribe( function () {
		var prevState = state;

		state = store.getState();

		if ( prevState !== state ) {
			callback( prevState, state );
		}
	} );
};
