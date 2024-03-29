/**
 * Creates an instance of the settings change listener.
 *
 * @param {Object} boundActions
 * @param {Object} render function that renders a jQuery el with the settings
 * @return {ext.popups.ChangeListener}
 */
module.exports = function ( boundActions, render ) {
	var settings;

	return function ( prevState, state ) {
		if ( !prevState ) {
			// Nothing to do on initialization
			return;
		}

		// Update global modal visibility
		if (
			prevState.settings.shouldShow === false &&
			state.settings.shouldShow === true
		) {
			// Lazily instantiate the settings UI
			if ( !settings ) {
				settings = render( boundActions );
				settings.appendTo( document.body );
			}

			// Update the UI settings with the current settings
			settings.setEnabled( state.preview.enabled );

			settings.show();
		} else if (
			prevState.settings.shouldShow === true &&
			state.settings.shouldShow === false
		) {
			settings.hide();
		}

		// Update help visibility
		if ( prevState.settings.showHelp !== state.settings.showHelp ) {
			settings.toggleHelp( state.settings.showHelp );
		}
	};
};
