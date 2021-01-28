/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zamit_ui5/zamit_ui5/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});