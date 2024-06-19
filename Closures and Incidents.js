// ==UserScript==
// @name        Closure and Incidents Feed
// @namespace   https://cifp.waze.tools/
// @version     0.1.1.beta
// @author      <a href="https://www.waze.com/en/user/editor/fmondini" target="_blank">fmondini</a>
// @description Closure and Incidents Feed Project (https://cifp.waze.tools/)
// @grant		unsafeWindow
// @run-at		document-idle
// @match       https://waze.com/editor*
// @match       https://waze.com/*/editor*
// @match       https://www.waze.com/editor*
// @match       https://www.waze.com/*/editor*
// @match       https://beta.waze.com/editor*
// @match       https://beta.waze.com/*/editor*
// @homepageURL	https://cifp.waze.tools/
// @updateURL	https://code.waze.tools/repository/9ef6797a-6358-4b31-8147-511099e3419f.user.js
// @downloadURL	https://code.waze.tools/repository/9ef6797a-6358-4b31-8147-511099e3419f.user.js
// @supportURL	https://github.com/fmondini/wazetools-cifp-script
// @icon        data:image/png;base64,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
// @copyright   2023-2024 fmondini
// ==/UserScript==



////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  Start of the section with the parameters that can be modified by the end user
//
//  It's best not to touch anything outside of this section unless you know EXACTLY what to do
//
////////////////////////////////////////////////////////////////////////////////////////////////////

const WCIFP_DEBUG = true; // If TRUE use the browser console to output some detailed info on the process (for development purposes only)
const WCIFP_LHOST = true; // If TRUE change the destination server to "localhost" (for development purposes only)

////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  End of the section with the parameters that can be modified by the end user
//
//  It's best not to touch anything after this line unless you know EXACTLY what to do
//
////////////////////////////////////////////////////////////////////////////////////////////////////



/* globals OpenLayers: true */

(function() {

'use strict';

/**
 * -------------------------------------------------------------------------------------------------
 *  Console helpers class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_ConsoleClass {

	constructor(scriptName) {
		this.PRINT_PREFIX = '[' + scriptName.toUpperCase() + ']'; // LOG Prefix for the console
		this.DEBUG_PREFIX = '[DEBUG]'; // LOG Prefix for the debug console
	}

	Print(msg) { console.log(this.PRINT_PREFIX + ' ' + msg); }
	PrintObj(name, obj) { console.log(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	PrintWrn(msg) { console.warn(this.PRINT_PREFIX + ' ' + msg); }
	PrintWrnObj(name, obj) { console.warn(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	PrintErr(msg) { console.error(this.PRINT_PREFIX + ' ' + msg); }
	PrintErrObj(name, obj) { console.error(this.PRINT_PREFIX + ' ' + name + ': %o', obj); }
	Debug(msg) { if (WCIFP_DEBUG) { this.Print(this.DEBUG_PREFIX + ' ' + msg); } }
	DebugObj(name, obj) { if (WCIFP_DEBUG) { this.PrintObj(this.DEBUG_PREFIX + ' ' + name, obj); } }
	DebugGroupStart(groupText) { if (WCIFP_DEBUG) { console.groupCollapsed(this.DEBUG_PREFIX + ' ' + groupText); } }
	DebugGroupEnd() { if (WCIFP_DEBUG) { console.groupEnd(); } }
}

/**
 * -------------------------------------------------------------------------------------------------
 *  Configuration class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_ConfigClass {

	#groupEditParameter = "CIFP_GRPID"; // Must be THE SAME as the one in the WebApp
	#scriptStartDateTime = new Date().getTime();
	#updateIntervalMillis = 60 * 60 * 24 * 1000 * 7; // 7 days in millis;
	#cifpConfig = {}; // JSON Config object, to be initialized in GetConfigFromServer()

	/**
	 * Initialize script
	 */
	InitScript() {

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.InitScript(START)');
		WCIFP_CONSOLE.DebugObj('WCIFP_ConfigClass.InitScript(): GM_info', GM_info);

		// Warns the user if the development parameters are still active

		if (WCIFP_DEBUG) {
			WCIFP_CONSOLE.PrintWrn('DEBUG MODE ACTIVATED');
		}

		if (WCIFP_LHOST) {
			WCIFP_CONSOLE.PrintWrn('## WARNING ## LHOST MODE ACTIVATED');
			WCIFP_CONSOLE.PrintWrn('## WARNING ## DESTINATION SERVER: "' + WCIFP_APPCONF.GetRemoteServerUrl() + '"');
		}

		// Show some more info

		WCIFP_CONSOLE.Print('Detected Browser Language: "' + (window.navigator.language || window.navigator.userLanguage) + '"');

		// Prepares the Trusted Type Policy, then the whole show begins...

		try {

			WCIFP_TTYPPOL.CreatePolicy();
			WCIFP_APPCONF.GetConfigFromServer();

		} catch(err) {
			WCIFP_CONSOLE.PrintErrObj('WCIFP_ConfigClass.InitScript()', err);
		}

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.InitScript(-END-)');
	}

	/**
	 * Get CIFP Config Object
	 */
	GetCifpConfig() {
		return(this.#cifpConfig);
	}

	/**
	 * Set CIFP Config Object
	 */
	SetCifpConfig(cfgData) {
		this.#cifpConfig = cfgData;
	}

	/**
	 * Get Remote Server URL
	 */
	GetRemoteServerUrl() {
		return(
			(WCIFP_LHOST ? 'http://localhost:8080/' : 'https://') + 'cifp.waze.tools'
		);
	}

	/**
	 * Get Remote Config from CIFP Server
	 */
	GetConfigFromServer() {

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.GetConfigFromServer(START)');

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.GetConfigFromServer(): Interval: ' + this.#updateIntervalMillis / 1000 + ' secs.');

		try {

			//
			// Time to update the script configuration?
			//

			var currentDatTim = new Date().getTime();
			var cfgLastUpdate = WCIFP_STORAGE.GetUpdateTime();

			if (!Number.isInteger(cfgLastUpdate)) {
				cfgLastUpdate = '0';
			}

			if ((currentDatTim - cfgLastUpdate) > this.#updateIntervalMillis) {

				//
				// Refresh cfg
				//

				WCIFP_CONSOLE.Print('The configuration is old and needs to be updated');

				var cfgUrl = WCIFP_APPCONF.GetRemoteServerUrl() + '/api/getcfg';

				unsafeWindow.jQuery.ajax({

					url: cfgUrl,
					dataType: 'jsonp',
					data: { callback: '?' },

					beforeSend: function(xhr, settings) {
						WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.GetConfigFromServer(): Calling ' + cfgUrl);
					},

					success: function(result) {

						if (result.rc == 200) {

							WCIFP_CONSOLE.Print('New configuration retrieved from CIFP server');
							WCIFP_APPCONF.SetCifpConfig(result);
							WCIFP_CONSOLE.DebugObj('WCIFP_ConfigClass.GetConfigFromServer(): [success] WCIFP_APPCONF.GetCifpConfig()', WCIFP_APPCONF.GetCifpConfig());

							WCIFP_STORAGE.SetUpdateTime(currentDatTim);
							WCIFP_STORAGE.SetUpdateData(WCIFP_APPCONF.GetCifpConfig());

							WCIFP_APPCONF.ActivateConfig();

						} else {

							WCIFP_CONSOLE.PrintErr('Error retrieving configuration from CIFP server');

							WCIFP_CONSOLE.PrintErrObj('WCIFP_ConfigClass.GetConfigFromServer(): [error} result', result);
							alert('Cannot initialize CIFP Script: result: ERROR ' + result.rc + '\n' + result.error);
						}
					},

					error(xhr)	{
						WCIFP_CONSOLE.PrintErrObj('WCIFP_ConfigClass.GetConfigFromServer(): [error] xhr', xhr);
						alert('Cannot initialize CIFP Script: xhr: ' + xhr.statusText + ' ' + xhr.status);
					}
				});

			} else {

				WCIFP_CONSOLE.Print('No need to update the config, I\'ll use the latest one received @ ' + new Date(cfgLastUpdate).toLocaleString());
				this.SetCifpConfig(WCIFP_STORAGE.GetUpdateData());
				WCIFP_CONSOLE.DebugObj('WCIFP_ConfigClass.GetConfigFromServer(): WCIFP_APPCONF.GetCifpConfig()', this.GetCifpConfig());

				this.ActivateConfig();
			}

		} catch(err) {
			WCIFP_CONSOLE.PrintErrObj('ERROR', err);
			WCIFP_CONSOLE.PrintErrObj('unsafeWindow', unsafeWindow);
		}

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.GetConfigFromServer(-END-)');
	}

	/**
	 * Activate CFG
	 */
	ActivateConfig() {

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.ActivateConfig(START)');

		this.AddButtonToWME();

		WCIFP_CONSOLE.Print(GM_info.script.name + ' version ' + GM_info.script.version + ' started in ' + (new Date().getTime() - this.#scriptStartDateTime) + ' msec');
		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.ActivateConfig(-END-)');
	}

	/**
	 * Check if it's an existing group edit
	 */
	GetGroupIdToUpdate() {

		var wmeUrl = new URL(unsafeWindow.location.href);
		var groupId = wmeUrl.searchParams.get(this.#groupEditParameter);

		if (groupId == null) {
			groupId = ''; // Clean for the payload
		}

		if (groupId != '') {
			WCIFP_CONSOLE.DebugObj('WCIFP_ConfigClass.RunningUnderGroupEditing(): groupId', groupId);
		}

		return(groupId);
	}

	/**
	 * Create and setup WME button
	 */
	AddButtonToWME() {

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.AddButtonToWME(START)');

		const groupId = WCIFP_APPCONF.GetGroupIdToUpdate();

		//
		// Create WME button
		//

		const WCIFP_btnStart_ID = 'btnCifpStartID';

		// Button

		var WCIFP_btnObj = document.createElement('wz-button');

		WCIFP_btnObj.id = WCIFP_btnStart_ID;
		WCIFP_btnObj.size = 'sm';
		WCIFP_btnObj.color = 'clear-icon';
		WCIFP_btnObj.style = 'padding: 0px'; // 'padding-left: 16px';
		WCIFP_btnObj.className = 'wz-button clear-icon sm with-icon';

		document.getElementById('search').appendChild(WCIFP_btnObj);

		// Icon

		var WCIFP_btnIco = document.createElement('i');

		WCIFP_btnIco.className = 'w-icon w-icon-closure';
		WCIFP_btnIco.style = 'color: FireBrick';

		WCIFP_btnObj.appendChild(WCIFP_btnIco);

		// Text

		WCIFP_btnObj.appendChild(document.createTextNode(groupId == '' ? 'CIFP' : 'Update'));

		// Title

		WCIFP_btnObj.title = (groupId == '' ? 'Create' : 'Update') + ' CIFP Closures Group';

		//
		// Set Click Listener
		//

		WCIFP_btnObj.addEventListener('click', function() {

			try {

				const currentUserName = unsafeWindow.W.loginManager.user.getUsername();
				const firstSelectedFeature = unsafeWindow.W.selectionManager.getSelectedFeatures()[0]; // First only
				const dataArray = WCIFP_FEATURE.getSelectedArray(); // Throws an exception if no segment(s) selected

				WCIFP_HTMLOBJ.uiShowFormSubmit(dataArray.length);

				// Event Listener for: SUBMIT

				document.getElementById(WCIFP_HTMLOBJ.getFormSubmitBtnSendID()).addEventListener('click', function() {

					const groupId = WCIFP_APPCONF.GetGroupIdToUpdate();

					// Default

					var mapCenter_EPSG900913 = unsafeWindow.W.controller.map.getCenter();

					var mapCenter_EPSG4326 = new OpenLayers.LonLat(mapCenter_EPSG900913.lon, mapCenter_EPSG900913.lat).transform(
						new OpenLayers.Projection('EPSG:900913'),
						new OpenLayers.Projection('EPSG:4326')
					);

					var wmeEnv = unsafeWindow.W.app.getAppRegionCode();
					var wmeZoom = unsafeWindow.W.map.getZoom();
					var wmeLat = mapCenter_EPSG4326.lat;
					var wmeLng = mapCenter_EPSG4326.lon;

					// Parse Wme URL and overwrite (if exists)

					const wmeUrlArray = unsafeWindow.document.location.href.split('?');
					const wmeUrlParam = wmeUrlArray[1].split('&');

					var wmeKey, wmeVal;

					wmeUrlParam.forEach(function(param) {
						wmeKey = param.split('=')[0];
						wmeVal = param.split('=')[1];
						if (wmeKey == 'env') wmeEnv = wmeVal;
						if (wmeKey == 'lat') wmeLat = wmeVal;
						if (wmeKey == 'lon') wmeLng = wmeVal;
						if (wmeKey == 'zoomLevel') wmeZoom = wmeVal;
					});

					// Create Payload

					const payload = {
						'source'  : GM_info.script.version,
						'apiKey'  : WCIFP_STORAGE.GetApiKey(),
						'user'    : currentUserName,
						'city'    : WCIFP_FEATURE.getCity(firstSelectedFeature),
						'state'   : WCIFP_FEATURE.getState(firstSelectedFeature),
						'country' : WCIFP_FEATURE.getCountry(firstSelectedFeature),
						'ctryIso' : WCIFP_FEATURE.getCountryCode(firstSelectedFeature),
						'wmeEnv'  : wmeEnv,
						'wmeLat'  : parseFloat(wmeLat),
						'wmeLng'  : parseFloat(wmeLng),
						'wmeZoom' : parseInt(wmeZoom),
						'groupId' : groupId,
						'data'    : dataArray
					};

					WCIFP_CONSOLE.DebugObj('WCIFP_ConfigClass.AddButtonToWME(CLICK): payload', payload);
					WCIFP_SERVLET.SendPayload(groupId, payload);
					WCIFP_HTMLOBJ.uiCloseAllOpenDivs();
				});

				// Event Listener for: CANCEL

				document.getElementById(WCIFP_HTMLOBJ.getFormSubmitBtnBackID()).addEventListener('click', function() {
					WCIFP_HTMLOBJ.uiCloseAllOpenDivs();
				});

			} catch(err) {

				WCIFP_CONSOLE.PrintErrObj('ERROR', err);
				WCIFP_HTMLOBJ.uiMsgError(WCIFP_APPCONF.GetCifpConfig().Errors.lblHal9000, err);
			}
		});

		WCIFP_CONSOLE.Debug('WCIFP_ConfigClass.AddButtonToWME(-END-)');
	}

}

/**
 * -------------------------------------------------------------------------------------------------
 *  Trusted Types class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_TrustedTypesClass {

	#trustedTypesPolicy = null;
	#trustedTypesPolicyName = 'CIFPTrustedPolicy';

	/**
	 * Get Trusted Types Policy
	 */
	GetTrustedTypesPolicy() {
		return(this.#trustedTypesPolicy);
	}

	/**
	 * Create Trusted Types Policy
	 */
	CreatePolicy() {

		if (window.trustedTypes && window.trustedTypes.createPolicy) {

			this.#trustedTypesPolicy = window.trustedTypes.createPolicy(this.#trustedTypesPolicyName, {
				createHTML: (string) => string,
				createScriptURL(url) {
					return url;
				}
			});

			WCIFP_CONSOLE.DebugObj('WCIFP_TrustedTypesClass.CreatePolicy(): this.#trustedTypesPolicy', this.#trustedTypesPolicy);
		}
	}

	/**
	 * Check TrustedTypes Enable
	 */
	isTrustedTypesEnabled() {

		var rc = false;

		try {

			if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
				rc = true;
			} else if (navigator.userAgent.match(/edg/i)) {
				rc = true;
			} else if (navigator.userAgent.match(/safari/i)) {
				rc = false;
			} else if (navigator.userAgent.match(/firefox|fxios/i)) {
				rc = false;
			} else if (navigator.userAgent.match(/opr\//i)) {
				rc = true;
			}

		} catch(err) {

			WCIFP_CONSOLE.PrintErrObj('WCIFP_TrustedTypesClass.isTrustedTypesEnabled()', err);
			WCIFP_CONSOLE.PrintErrObj('WCIFP_TrustedTypesClass.isTrustedTypesEnabled(): window.trustedTypes', window.trustedTypes);
		}

		WCIFP_CONSOLE.DebugObj('WCIFP_TrustedTypesClass.isTrustedTypesEnabled(): rc', rc);

		return(rc);
	}
}

/**
 * -------------------------------------------------------------------------------------------------
 *  Local Storage helpers class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_LocalStorageClass {

	#keywApiKey = 'WCIFP_ApiKey';
	#keywLastUpdateTime = 'WCIFP_LastUpdateTime'; // Last cfg update datetime keyword
	#keywLastUpdateData = 'WCIFP_LastUpdateData'; // Last cfg update json data keyword

	GetApiKey() { var apiKey = localStorage.getItem(this.#keywApiKey); return((apiKey == null) ? '' : apiKey); }
	SetApiKey(apiKey) { localStorage.setItem(this.#keywApiKey, apiKey); }

	GetUpdateTime() { return(parseInt(localStorage.getItem(this.#keywLastUpdateTime))); }
	SetUpdateTime(datetime) { localStorage.setItem(this.#keywLastUpdateTime, datetime); }

	GetUpdateData() { return(JSON.parse(localStorage.getItem(this.#keywLastUpdateData))); }
	SetUpdateData(jsondata) { localStorage.setItem(this.#keywLastUpdateData, JSON.stringify(jsondata)); }
}

/**
 * -------------------------------------------------------------------------------------------------
 *  HTML styles class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_HtmlObjectsClass {

	#fontDefaultName = 'Rubik';

	#divApiKeyBackID = 'WCIFP_ApiKeyBackID';
	#divApiKeyForeID = 'WCIFP_ApiKeyForeID';
	#divFormSubmitBackID = 'WCIFP_FormSubmitBackID';
	#divFormSubmitForeID = 'WCIFP_FormSubmitForeID';
	#divPleaseWaitID = 'WCIFP_PleaseWaitID';

	#divSeparator = '<div style="height: 1px; background-color: #bbbbbb"></div>';
	#styleModalBackground = 'position:fixed; display:block; z-index:10998; top:0px; left:0px; width:100%; height:100%; background-color:rgba(0, 0, 0, 0.7)';
	#styleCenteredDiv = 'position:fixed; display:block; z-index:10999; background-color:white; padding:0px; top:50%; left:50%; -webkit-transform:translate(-50%, -50%); transform:translate(-50%, -50%);';

	getButtonApiKeyID()			{ return('WCIFP_ButtonApiKeyID');		}
	getButtonApiKeyCloseID()	{ return('WCIFP_ButtonApiKeyCloseID');	}
	getButtonApiKeySaveID()		{ return('WCIFP_ButtonApiKeySaveID');	}
	getInputApiKeyID()			{ return('WCIFP_InputApiKeyID');		}
	getFormSubmitBtnBackID()	{ return('WCIFP_FormSubmitBtnBackID');	}
	getFormSubmitBtnSendID()	{ return('WCIFP_FormSubmitBtnSendID');	}
	getNewGidBtnCloseID()		{ return('WCIFP_NewGidBtnCloseID');		}
	getErrorMsgBtnCloseID()		{ return('WCIFP_ErrorMsgBtnCloseID');	}
	getCifpGidEditUrl(gid)		{ return(WCIFP_APPCONF.GetRemoteServerUrl() + '/manage/gid_edit.jsp?gid=' + gid); }

	/**
	 * Create a button
	 */
	#uiGetButtonHtml(id, value, title) {

		return(
			'<input ' +
				'type="button" ' +
				'id="' + id + '" ' +
				'title="' + title + '" ' +
				'value="' + value + '" ' +
				'style="' +
					'color: black;' +
					'background-color: white;' +
					'margin: 0px;' +
					'cursor: pointer;' +
					'padding-left: 8px;' +
					'padding-right: 8px;' +
					'padding-top: 4px;' +
					'padding-bottom: 4px;' +
					'border-style: solid;' +
					'border-color: gray;' +
					'border-width: 1px;' +
					'border-radius: 4px;' +
					'box-shadow: 2px 2px 4px gray;' +
				'"' +
			'>'
		);
	}

	/**
	 * (private) Generate the UI Header DIV
	 */
	#uiGetHeaderHtml(showApiKeyBtn) {

		return(
			'<div style="padding: 8px; background-color: #eeeeee">' +
				'<table width="100%" border="0">' +
					'<tr>' +
						'<td width="80px">' +
							'<a href="https://waze.tools/" target="_blank"><img src="' + GM_info.script.icon + '" title="Waze.Tools Suite"></a>' +
						'</td>' +
						'<td align="left">' +
							'<table width="100%" border="0">' +
								'<tr>' +
									'<td ColSpan="2">' +
										'<div style="font-size: 180%; font-weight: bold; padding-top:8px;">' + GM_info.script.name + '</div>' +
									'</td>' +
								'</tr>' +
								'<tr>' +
									'<td>' +
										'<div style="font-size: 120%; font-style: italic; padding-top:4px">Version ' + GM_info.script.version + ' (' + GM_info.userAgentData.platform + ')</div>' +
										'<div style="font-style: italic; padding-top:2px">Made with love &amp; passion by ' + GM_info.script.author + '</div>' +
									'</td>' +
									'<td style="align="right" valign="bottom">' +
										(showApiKeyBtn
											? this.#uiGetButtonHtml(this.getButtonApiKeyID(), '&#128273;', 'Enter API-KEY')
											: ''
										) +
									'</td>' +
								'</tr>' +
							'</table>' +
						'</td>' +
					'</tr>' +
				'</table>' +
			'</div>' +
			this.#divSeparator
		);
	}

	/**
	 * (private) Generate the UI for confirmation form
	 */
	#uiGetConfirmFormHtml(groupId, segsNumber) {

		return(

			'<div style="font-family: ' + this.#fontDefaultName + '">' +

				this.#uiGetHeaderHtml(true) +

				'<div style="background-color: white">' +
					'<div style="padding: 8px">' +
						'<div style="font-size:120%;" align="center">' + (
							groupId == ''
								? 'You are creating a <b>new</b> closure group of <b>' + segsNumber + '</b> segments'
								: 'You are <b>updating</b> an existing closure group'
						) +
						'</div>' +
						'<div style="padding: 2px"></div>' +
						'<div style="font-size:110%; font-style: italic;" align="center">' +
							'Please confirm the action by clicking the <b>Submit</b> button' +
						'</div>' +
					'</div>' +
				'</div>' +

				this.#divSeparator +

				'<div style="padding: 8px; background-color: #eeeeee">' +
					'<table width="100%" border="0">' +
						'<tr>' +
							'<td width="15%" align="left">' +
								this.#uiGetButtonHtml(this.getFormSubmitBtnBackID(), 'Abort', '') +
							'</td>' +
							'<td width="70%" align="center">' +
								'<div style="font-size: 90%; font-style: italic">' + WCIFP_APPCONF.GetCifpConfig().About.lblBugsRpt + '</div>' +
							'</td>' +
							'<td width="15%" align="right">' +
								this.#uiGetButtonHtml(this.getFormSubmitBtnSendID(), 'Submit', '') +
							'</td>' +
						'</tr>' +
					'</table>' +
				'</div>' +

			'</div>'
		);
	}

	/**
	 * (private) Generate the UI NewGID DIV
	 */
	#uiGetNewGidHtml(gid) {

		return(

			'<div style="font-family: ' + this.#fontDefaultName + '">' +

				this.#uiGetHeaderHtml() +

				'<div style="background-color:white">' +
					'<div style="padding:16px">' +
						'<div style="font-size:150%; font-style:italic; color:ForestGreen" align="center">' +
							WCIFP_APPCONF.GetCifpConfig().Results.lblGrpHeadOK +
						'</div>' +
						'<div style="padding:8px"></div>' +
						'<div style="font-size:120%;" align="center">' +
							'The following <b>GroupID</b> has been saved:<br>' +
							'<a style="font-family:monospaced; color:SteelBlue; font-weight:bold" href="' + this.getCifpGidEditUrl(gid) + '" target="_blank">' + gid + '</a>' +
						'</div>' +
						'<div style="padding:8px"></div>' +
						'<div style="font-size:120%;" align="center">' +
							WCIFP_APPCONF.GetCifpConfig().Results.lblGrpNextOK +
						'</div>' +
					'</div>' +
				'</div>' +

				this.#divSeparator +

				'<div style="padding:8px; background-color: #eeeeee" align="center">' +
					this.#uiGetButtonHtml(this.getNewGidBtnCloseID(), 'Close', '') +
				'</div>' +

			'</div>'
		);
	}

	/**
	 * (private) Generate the UI API-KEY DIV
	 */
	#uiGetApiKeyHtml() {

		return(

			'<div style="font-family: ' + this.#fontDefaultName + '">' +

				this.#uiGetHeaderHtml() +

				'<div style="background-color:white">' +
					'<div style="padding:16px">' +
						'<div style="font-size:150%; font-style:italic; color:ForestGreen" align="center">' +
							WCIFP_APPCONF.GetCifpConfig().Messages.lblApiKeyHead +
						'</div>' +
						'<div style="padding:8px"></div>' +
						'<div style="font-size:120%;" align="center">' +
							'<input id="' + this.getInputApiKeyID() + '" style="font-family:monospace" size="36" maxsize="36" value="' + WCIFP_STORAGE.GetApiKey() + '">' +
						'</div>' +
						'<div style="padding:8px"></div>' +
					'</div>' +
				'</div>' +

				this.#divSeparator +

				'<div style="padding:8px; background-color: #eeeeee">' +
					'<table width="100%" border="0">' +
						'<tr>' +
							'<td align="left">' +
								this.#uiGetButtonHtml(this.getButtonApiKeyCloseID(), 'Close', '') +
							'</td>' +
							'<td align="right">' +
								this.#uiGetButtonHtml(this.getButtonApiKeySaveID(), 'Save', '') +
							'</td>' +
						'</tr>' +
					'</table>' +
				'</div>' +

			'</div>'
		);
	}

	/**
	 * Show API-KEY input Dialog
	 */
	uiShowApiKeyDialog() {

		// Transparent background (for the modal effect)

		var divApiKeyBack = document.createElement('div');

		divApiKeyBack.id = this.#divApiKeyBackID;
		divApiKeyBack.style.cssText = this.#styleModalBackground;

		unsafeWindow.jQuery('#map').append(divApiKeyBack);

		// Form UI

		var divApiKeyFore = document.createElement('div');

		divApiKeyFore.id = this.#divApiKeyForeID;
		divApiKeyFore.style.cssText = this.#styleCenteredDiv;

		divApiKeyFore.innerHTML = WCIFP_TTYPPOL.isTrustedTypesEnabled()
			? WCIFP_TTYPPOL.GetTrustedTypesPolicy().createHTML(this.#uiGetApiKeyHtml())
			: this.#uiGetApiKeyHtml()
		;

		unsafeWindow.jQuery('#map').append(divApiKeyFore);

		// Api-Key Close Listener

		document.getElementById(WCIFP_HTMLOBJ.getButtonApiKeyCloseID()).addEventListener('click', function() {
			divApiKeyBack.remove();
			divApiKeyFore.remove();
		});

		// Api-Key Save Listener

		document.getElementById(WCIFP_HTMLOBJ.getButtonApiKeySaveID()).addEventListener('click', function() {
			WCIFP_STORAGE.SetApiKey(document.getElementById(WCIFP_HTMLOBJ.getInputApiKeyID()).value);
			divApiKeyBack.remove();
			divApiKeyFore.remove();
		});

		// Input focus

		document.getElementById(this.getInputApiKeyID()).focus();
		document.getElementById(this.getInputApiKeyID()).select();
	}

	/**
	 * Create & show submit form
	 */
	uiShowFormSubmit(segsNumber) {

		WCIFP_CONSOLE.Debug('WCIFP_HtmlObjectsClass.uiShowFormSubmit(START)');

		const groupId = WCIFP_APPCONF.GetGroupIdToUpdate();

		// Transparent background (for the modal effect)

		var divSubmitBack = document.createElement('div');

		divSubmitBack.id = this.#divFormSubmitBackID;
		divSubmitBack.style.cssText = this.#styleModalBackground;

		unsafeWindow.jQuery('#map').append(divSubmitBack);

		// Form UI

		var divSubmitFore = document.createElement('div');

		divSubmitFore.id = this.#divFormSubmitForeID;
		divSubmitFore.style.cssText = this.#styleCenteredDiv;

		divSubmitFore.innerHTML = WCIFP_TTYPPOL.isTrustedTypesEnabled()
			? WCIFP_TTYPPOL.GetTrustedTypesPolicy().createHTML(this.#uiGetConfirmFormHtml(groupId, segsNumber))
			: this.#uiGetConfirmFormHtml(groupId, segsNumber)
		;

		unsafeWindow.jQuery('#map').append(divSubmitFore);

		// Api-Key Open Listener

		document.getElementById(WCIFP_HTMLOBJ.getButtonApiKeyID()).addEventListener('click', function() {
			WCIFP_HTMLOBJ.uiShowApiKeyDialog();
		});

		WCIFP_CONSOLE.Debug('WCIFP_HtmlObjectsClass.uiShowFormSubmit(-END-)');
	}

	/**
	 * Show new gid created message
	 */
	uiMsgNewGidCreated(gid) {

		const divNewGidMsgID = 'WCIFP_divNewGidMsgID';

		var divNewGid = document.createElement('div');
		divNewGid.id = divNewGidMsgID;
		divNewGid.style.cssText = this.#styleCenteredDiv;

		divNewGid.innerHTML =
			this.#uiGetNewGidHtml(gid) +
			this.#divSeparator
		;

		unsafeWindow.jQuery('#map').append(divNewGid);

		document.getElementById(this.getNewGidBtnCloseID()).addEventListener('click', function() {
			unsafeWindow.jQuery('#' + divNewGidMsgID).remove();
		});
	}

	/**
	 * Generate Error Message DIV
	 */
	uiGetErrorMsgHtml(head, body) {

		return(

			'<div style="font-family: ' + this.#fontDefaultName + '">' +

				this.#uiGetHeaderHtml() +

				'<div style="background-color:white">' +
					'<div style="padding:16px">' +
						'<div style="font-size:150%; font-style:italic; color:Crimson" align="center">' + head + '</div>' +
						'<div style="padding:8px"></div>' +
						'<div style="font-size:125%;" align="center">' + body + '</div>' +
						'<div style="padding:8px"></div>' +
						'<div style="font-size:100%; font-style:italic; " align="center">' + WCIFP_APPCONF.GetCifpConfig().Errors.lblSeeConsole + '</div>' +
					'</div>' +
				'</div>' +

				this.#divSeparator +

				'<div style="padding:8px; background-color: #eeeeee" align="center">' +
					this.#uiGetButtonHtml(this.getErrorMsgBtnCloseID(), 'Close', '') +
				'</div>' +

			'</div>'
		);
	}

	/**
	 * Show Error message
	 */
	uiMsgError(head, body) {

		const divErrorMsgID = 'WCIFP_divErrorMsgID';

		var divErrorMsg = document.createElement('div');

		divErrorMsg.id = divErrorMsgID;
		divErrorMsg.style.cssText = this.#styleCenteredDiv;
		divErrorMsg.innerHTML = this.uiGetErrorMsgHtml(head, body);

		unsafeWindow.jQuery('#map').append(divErrorMsg);

		document.getElementById(this.getErrorMsgBtnCloseID()).addEventListener('click', function() {
			unsafeWindow.jQuery('#' + divErrorMsgID).remove();
		});
	}

	/**
	 * Show "please wait" UI
	 */
	uiPleaseWaitShow() {

		const divWaitUI =
			'<div style="font-family: ' + this.#fontDefaultName + '">' +
				this.#uiGetHeaderHtml() +
				'<div style="padding: 16px; background-color: white" align="center">' +
					'<div style="font-size:150%; font-weight: bold">' + WCIFP_APPCONF.GetCifpConfig().Messages.lblGrpSaving + '</div>' +
					'<div style="font-size:120%">' + WCIFP_APPCONF.GetCifpConfig().Messages.lblPleaseWait + '</div>' +
				'</div>' +
			'</div>'
		;

		var divWait = document.createElement('div');

		divWait.id = this.#divPleaseWaitID;
		divWait.style.cssText = this.#styleCenteredDiv;

		divWait.innerHTML = WCIFP_TTYPPOL.isTrustedTypesEnabled()
			? WCIFP_TTYPPOL.GetTrustedTypesPolicy().createScriptURL(divWaitUI)
			: divWaitUI
		;

		unsafeWindow.jQuery('#map').append(divWait);
	}

	/**
	 * Dismiss "please wait" UI
	 */
	uiPleaseWaitDismiss() {
		unsafeWindow.jQuery('#' + this.#divPleaseWaitID).remove();
	}

	/**
	 * Closes all open CIFP windows
	 */
	uiCloseAllOpenDivs() {

		WCIFP_CONSOLE.Debug('WCIFP_HtmlObjectsClass.uiCloseAllOpenDivs(START)');

		unsafeWindow.jQuery('#' + this.#divFormSubmitForeID).remove();
		unsafeWindow.jQuery('#' + this.#divFormSubmitBackID).remove();

		WCIFP_CONSOLE.Debug('WCIFP_HtmlObjectsClass.uiCloseAllOpenDivs(-END-)');
	}

}

/**
 * -------------------------------------------------------------------------------------------------
 *  Remote Servlet Class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_RemoteServletClass {

	/**
	 * Add/Update a group to CIFP server (or localhost if WCIFP_LHOST is true)
	 * groupId == '' -> create
	 * groupId == '<GroupIdHere>' -> update
	 */
	SendPayload(groupId, payload) {

		const apiRemoteUrl = (WCIFP_APPCONF.GetRemoteServerUrl() + (
			groupId == ''
				? '/api/group/create'
				: '/api/group/update'
			)
		);

		WCIFP_CONSOLE.DebugObj('WCIFP_RemoteServletClass.SendPayload(): apiRemoteUrl', apiRemoteUrl);

		unsafeWindow.jQuery.ajax({

			url: apiRemoteUrl,
			dataType: 'jsonp',

			data: {
				payload: JSON.stringify(payload),
				callback: '?'
			},

			beforeSend: function(xhr) {

				WCIFP_CONSOLE.DebugObj('WCIFP_RemoteServletClass.SendPayload(): [beforeSend] JSON.stringify(payload)', JSON.stringify(payload));
				WCIFP_HTMLOBJ.uiPleaseWaitShow()
			},

			success: function(result) {

				WCIFP_CONSOLE.DebugObj('WCIFP_RemoteServletClass.SendPayload(): [Success] result', result);

				if (result.status == 'OK') {

					WCIFP_CONSOLE.Print('New GID ' + result.gid + ' created from ' + payload.data.length + ' segments');
					WCIFP_HTMLOBJ.uiMsgNewGidCreated(result.gid);

				} else {

					WCIFP_CONSOLE.PrintErr(WCIFP_APPCONF.GetCifpConfig().Results.lblGrpHeadKO + ' - result.error: ' + result.error);
					WCIFP_HTMLOBJ.uiMsgError(WCIFP_APPCONF.GetCifpConfig().Results.lblGrpHeadKO, result.error);
				}
			},

			error(xhr) {

				WCIFP_CONSOLE.PrintErr(WCIFP_APPCONF.GetCifpConfig().Results.lblGrpHeadKO + ' - ' + xhr.statusText + ' ' + xhr.status);
				WCIFP_CONSOLE.PrintErrObj('WCIFP_RemoteServletClass.SendPayload(): [AJAX ERROR] xhr', xhr);
				WCIFP_CONSOLE.PrintErrObj('WCIFP_RemoteServletClass.SendPayload(): [AJAX ERROR] xhr.getAllResponseHeaders()', xhr.getAllResponseHeaders());
				WCIFP_HTMLOBJ.uiMsgError(WCIFP_APPCONF.GetCifpConfig().Results.lblGrpHeadKO, xhr.statusText + ' ' + xhr.status);
	        },

			complete() {

				WCIFP_HTMLOBJ.uiPleaseWaitDismiss()
			}
		});
	}

}

/**
 * -------------------------------------------------------------------------------------------------
 * Feature Object(s) process class
 * -------------------------------------------------------------------------------------------------
 */
class WCIFP_FeatureClass {

	/**
	 * Get an array of selected objects data
	 * Throws an exception if no segment(s) selected
	 */
	getSelectedArray() {

		var i, selectedFeatureType = '', dataArray = [];
		const selectedFeatures = unsafeWindow.W.selectionManager.getSelectedFeatures();

		WCIFP_CONSOLE.DebugObj('WCIFP_FeatureClass.getSelectedArray(): selectedFeatures', selectedFeatures);

		for (i = 0; i < selectedFeatures.length; i++) {

			selectedFeatureType = this.getType(selectedFeatures[i]);

			if (selectedFeatureType == 'segment') {

				dataArray.push({
					'sid'      : this.getId(selectedFeatures[i]),
					'street'   : this.getStreet(selectedFeatures[i]),
					'polyline' : this.getPolyline(selectedFeatures[i])
				});
			}
		}

		WCIFP_CONSOLE.DebugObj('WCIFP_FeatureClass.getSelectedArray()', dataArray);

		if (dataArray.length == 0) {
			throw WCIFP_APPCONF.GetCifpConfig().Errors.lblNoSelObj
		}

		return(dataArray);
	}

	/**
	 * Get object id
	 */
	getId(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.attributes.id);
	}

	/**
	 * Get object type
	 */
	getType(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.type);
	}

	/**
	 * Get object street
	 */
	getStreet(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.getAddress(unsafeWindow.W.model).getStreet().getName());
	}

	/**
	 * Get object city
	 */
	getCity(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.getAddress(unsafeWindow.W.model).getCity().getName());
	}

	/**
	 * Get object state (or province)
	 */
	getState(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.getAddress(unsafeWindow.W.model).getState().getName());
	}

	/**
	 * Get object country
	 */
	getCountry(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.getAddress(unsafeWindow.W.model).getCountry().getName());
	}

	/**
	 * Get object country ISO code
	 */
	getCountryCode(SelectedFeatureElement) {
		return(SelectedFeatureElement._wmeObject.getAddress(unsafeWindow.W.model).getCountry().toJSON().abbr);
	}

	/**
	 * Get object WME region
	 */
	getRegion(SelectedFeatureElement) {
		return(unsafeWindow.W.app.getAppRegionCode());
	}

	/**
	 * Get object polyline
	 */
	getPolyline(SelectedFeatureElement) {

		var i, selPolyline = '', selCoordsArray = [], selPointsArray = [];

		selCoordsArray = SelectedFeatureElement.geometry.coordinates;

		for (i=0; i<selCoordsArray.length; i++) {

			selPointsArray = selCoordsArray[i];

			if (i > 0) {
				selPolyline += ', ';
			}

			selPolyline += (selPointsArray[1].toFixed(5) + ' ' + selPointsArray[0].toFixed(5));
		}

		return(selPolyline);
	}

}

////////////////////////////////////////////////////////////////////////////////////////////////////
//
//  ENTRY POINT - Script execution starts here
//
////////////////////////////////////////////////////////////////////////////////////////////////////

const WCIFP_CONSOLE = new WCIFP_ConsoleClass('WCIFP');

try {
	var WCIFP_APPCONF = new WCIFP_ConfigClass();
	var WCIFP_TTYPPOL = new WCIFP_TrustedTypesClass();
	var WCIFP_STORAGE = new WCIFP_LocalStorageClass();
	var WCIFP_HTMLOBJ = new WCIFP_HtmlObjectsClass();
	var WCIFP_SERVLET = new WCIFP_RemoteServletClass();
	var WCIFP_FEATURE = new WCIFP_FeatureClass();

} catch(err) {

	WCIFP_CONSOLE.PrintErrObj('MAIN: ERROR', err);
}

document.addEventListener('wme-ready',
	WCIFP_APPCONF.InitScript,
	{
		once: true
	}
);

////////////////////////////////////////////////////////////////////////////////////////////////////
//
// SCRIPT END - So long, and thanks for all the fish.
//
////////////////////////////////////////////////////////////////////////////////////////////////////

})();
