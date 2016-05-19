/* =================================================================
 * Copyright 2013-2015 Popcorn Metrics Ltd
 * Terms of use: http://popcornmetrics.com/legal
 * =================================================================
 */
console.log("pcm called!!");
function _PCM_prototype() {};

_PCM_prototype.prototype = {
    mutationCount: 0,
    elementPropertyType: ['strong', 'textarea', 'input', 'p', 'a', 'div', 'span','h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'caption', 'legend', 'th', 'title' ],
    registeredListeners: [],
    delay: 200,
    mutationsBucket: [],
    eventsBucket: {
        pageEvents: [],
        allEvents: [],
        currentPath: {},
        currentPathEvents: [],
    },

    // initalize tracking of objects
    initialize: function() {
        try {
            console.log("in intialize!");
            // Grab and store UserIdFromCookie
            _PCM.getUserIdfromCookie();

            // define Navigation Delay
            _PCM.setNavigationDelay();

            // Create Md5 enconding function to encode user id's
            _PCM.createMd5(this);

            // filter pageEvents to this page only relevant events
            var pageEventsBucket = _PCM.filterPageEventsBucket(this.eventsBucket.pageEvents);

            // Initialize Google Analytics script, google user id and set dimensions
            _PCM.initializeTools.ga(pageEventsBucket);

            // Initialize Intercom and identify logged in users
            _PCM.initializeTools.intercom();

            // Send Page Events - Page Views, Google User Id, Dimensions
            _PCM.processPageEvents(pageEventsBucket);

            // Process any pending identity call set in the cookie from a login /signup event
            _PCM.processPendingIdentityCall();

            // Filter events bucket to this page only relevant events
            var eventsBucket = _PCM.filterEventsBucket(this.eventsBucket.allEvents);

            // Attach events to rendered elements
            this.attachToElementsRendered(eventsBucket, document);

            // Create mutation observer to listen and attach elements mutations
            this.createMutationObserver();
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    getEventByName: function (eventName){
        try {
            var list = [];
            for (var i = 0, event; event = _PCM.eventsBucket.allEvents[i]; i++) {
                if (event.eventName.toLowerCase() == eventName.toLowerCase()) {
                    list.push(event);
                }
            }
            return list;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    returnDataLayerValue: function (objectString) {
        try {
            if (typeof objectString == "string") {
                if (typeof eval(objectString) !== "undefined") {
                    var result = eval(objectString);
                    if (typeof result !== "string") {
                        result = JSON.stringify(result);
                    }
                    return result;
                }
            }
            return false;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    createObject: function(objectString) {
        try {
            var items = objectString.split(".");
            var object = window;
            for (var i = 0; i < items.length; i++) {
                if (typeof object[items[i]] == "undefined") {
                    return false;
                } else {
                    object = object[items[i]];
                }
            }
            return object;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    verifyDataLayerObject: function (objectString){
        try {
            if (typeof objectString == "string") {
                var items = objectString.split(".");
                var object = "window";
                for (var i = 0; i < items.length; i++) {
                    if (items[i].substr(items[i].length - 2) == "('" || items[i].substr(items[i].length - 2) == '("' ){
                        if (items[i+1] !== "undefined") {
                            items[i] = items[i] + '.' + items[i + 1];
                            items.splice(i+1, 1);
                        }
                    }
                    object += "." + items[i];
                    if (typeof eval(object) == "undefined") {
                        return false;
                    }
                }
                return true;
            } else {
                return false;
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    verifyObject: function(objectString) {
        try {
            if (typeof objectString == "string") {
                var items = objectString.split(".");
                var object = window;
                for (var i = 0; i < items.length; i++) {
                    if (items[i].substr(items[i].length - 2) == "('" || items[i].substr(items[i].length - 2) == '("' ){
                        if (items[i+1] !== "undefined") {
                            items[i] = items[i] + '.' + items[i + 1];
                            items.splice(i+1, 1);
                        }
                    }
                    if (typeof object[items[i]] == "undefined") {
                        return false;
                    } else {
                        object = object[items[i]];
                    }
                }
                return true;
            }
            return false;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
        }
    },

    // install and initialize tools
    initializeTools: {
        ga: function(pageEvents) {
            try {
                // install GA script
                if (_PCM.verifyObject("_PCM_settings.settings.ga.installScript")) {
                    if (_PCM_settings.settings.ga.installScript) {
                        if (!_PCM.verifyObject("ga")) {

                            // Install Google Analytics script -- CURRENTLY DISABLED
                            /* _PCM.install.ga();

                               _PCM_settings.whenAvailable("ga", function() {
                               if (_PCM.verifyObject("_PCM_settings.settings.ga.trackingId")) {
                               ga('create', _PCM_settings.settings.ga.trackingId, 'auto');
                               _PCM.processPageEvents(pageEvents);
                               }
                               });
                            */
                            return false;
                        }
                    }
                }

            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        intercom: function() {
            try {
                if (_PCM.verifyObject("_PCM_settings.settings.intercom.isIntercomEnabled")) {
                    if (_PCM_settings.settings.intercom.isIntercomEnabled) {
                        if (_PCM_settings.settings.intercom.appId !== "") {
                            if (typeof Intercom === "function") {
                                _PCM_settings.settings.intercom.userId = _PCM.cookie.get('_pcm_id');
                                if (_PCM_settings.settings.intercom.userId !== null && _PCM_settings.settings.intercom.userId !== undefined) {
                                    window.intercomSettings = {
                                        user_id: _PCM_settings.settings.intercom.userId,
                                        app_id: _PCM_settings.settings.intercom.appId
                                    };
                                    if (_PCM.verifyObject("_PCM_settings.settings.intercom.installWidget")) {
                                        if (_PCM_settings.settings.intercom.installWidget == true) {
                                            window.intercomSettings.widget = {activator: '#IntercomDefaultWidget'};
                                            //window.Intercom('reattach_activator');
                                        }
                                    }
                                    _PCM.log("Booting Intercom...");
                                    window.Intercom('boot', window.intercomSettings);

                                } else {
                                    if (_PCM.verifyObject("_PCM_settings.settings.intercom.installWidget")) {
                                        if (_PCM_settings.settings.intercom.installWidget == true) {
                                            window.intercomSettings = {
                                                app_id: _PCM_settings.settings.intercom.appId,
                                                widget: { activator: '#IntercomDefaultWidget'}
                                            };
                                            window.Intercom('reattach_activator');
                                            window.Intercom('update', intercomSettings);
                                        } else {
                                            _PCM.log("Intercom not booted: anonymous user");
                                        }
                                    } else {
                                        _PCM.log("Intercom not booted: anonymous user");
                                    }
                                }
                            } else {
                                _PCM.install.intercom();
                                _PCM_settings.whenAvailable("Intercom", function() {
                                    _PCM.initializeTools.intercom();
                                });
                            }
                        }
                    }
                }
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        }
    },

    // Log to console if in debug mode
    log: function(message, type) {
        try {
            if (_PCM.verifyObject("_PCM_settings.settings.debug")) {
                if (_PCM_settings.settings.debug) {
                    if (type == "error") {
                        console.error(message);
                    } else {
                        console.log(message);
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    // Send Page Load event to PCM
    trackPageLoad: function (eventName) {
        try {
          console.log("in trackPageLoad");
            var sBrowser = _PCM.getBrowserName();
            var oSName   = _PCM.getOSName();
            var path     = _PCM.getCurrentPath();
            var eventData = {
                eventName: eventName,
                path : path,
                eventData: {},
                sessionProperties: {browser:sBrowser, os:oSName }
            };
            _PCM.registerEvent(eventData);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }

    },

    // Attach listener to element
    attachToElement: function (element, eventData) {
        try {
            var eventAction = eventData.eventProperties.eventAction;
            if (element.getAttribute("_pcm-track-type")) {
                return;
            }
            // set _pcm-track-type attribute in the element
            _PCM.setPcmTrackAttribute(element);

            //add listener to element
            _PCM.registeredListeners.push({
                element: element,
                handler: _PCM.listenerHandler(eventAction, element, eventData)
            });
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    listenerHandler: function (eventAction, element, eventData) {
        return _PCM.listener.add(element, eventAction, function(evt) {
            try {
              console.log("event callback function");
                if (element.getAttribute("_pcm-track-type") === "basic" ) {
                    _PCM.sendEvents(evt.currentTarget, eventData);
                    return;
                }
                if (element.getAttribute("_pcm-track-type") === "nav" ) {

                    // If we've rethrown, its already logged. clear flag. done.
                    if (element.getAttribute("_pcmRUN")) {
                        element.removeAttribute("_pcmRUN");
                        return;
                    }
                    // First run through.
                    else {

                        // intra tab page change:
                        if (_PCM.sameTab(element, eventAction, evt) ){
                            evt.preventDefault();
                            evt.stopPropagation();
                            element.setAttribute("_pcmRUN", "NAV-SAME-TAB");
                            _PCM.sendEvents(evt.currentTarget, eventData);
                            setTimeout(function() {
                                element.click();
                            }, _PCM.delay);
                            return;
                        }
                        else {
                            _PCM.sendEvents(evt.currentTarget, eventData);
                            return;
                        }

                    }
                }
                else {
                    var isInIframe = (window.location != window.parent.location) ? true : false;
                    if (isInIframe) {
                        _PCM.sendEvents(evt.currentTarget, eventData);
                        _PCM.waitForm(_PCM.delay*2);
                        return;
                    }
                    else {
                        _PCM.sendEvents(evt.currentTarget, eventData);
                        _PCM.waitForm(_PCM.delay);
                        return;
                    }
                }
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        });
    },

    listener: (function() {
        var i = 1,
        listeners = {};
        return {
            add: function(element, event, handler) { //, capture) {
                try {
                  console.log("listener added!!");
                    if (element.addEventListener) element.addEventListener(event, handler);
	                else if (element.attachEvent) element.attachEvent('on' + event, handler);
                    listeners[i] = {element: element,
                                    event: event,
                                    handler: handler
                                    //capture: capture
                                   };
                    _PCM.log("added Listener for node: ");
                    return i++
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },
            remove: function(id) {
                try {
                    if (id in listeners) {
                        var h = listeners[id];
                        if (h.element.removeEventListener) {
                            h.element.removeEventListener(h.event, h.handler);
                        }
                        else if (h.element.dettachEvent) {
                            h.element.dettachEvent('on' + h.event, h.handler);
                        }
                        _PCM.log("removed Listeners for node: ");
                        delete listeners[id];
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        }
    })(),

    // If it's in an iFrame, then send the events to parent
    sendEventsToParent: function(targetNode, eventObj) {
        try {
            var eventProperties = _PCM.unpack.eventProperties(targetNode, eventObj);
            var message = {
                origin: window.location.origin,
                message: "SEND_EVENT",
                scope:  "popcornlib",
                eventObj: {
                    userProperties: eventProperties.userProperties,
                    eventData: {
                        data: eventProperties.customProperties,
                        dimensions: eventProperties.customProperties.dimensions,
                        metrics: eventProperties.customProperties.metrics,
                        specialProperties: eventProperties.specialProperties,
                    },
                    eventName: eventObj.eventName,
                    eventProperties: eventObj.eventProperties,
                    identify: eventObj.identify,
                    register: eventObj.register,
                    tools: eventObj.tools
                }
            };
            parent.postMessage(message, '*');
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    sendPageEvent: function (event, tool) {
        try {
            if (event.type == "GA_USER_ID" && tool == "googleAnalytics" && event.customData.length > 0) {
                if (_PCM.verifyObject("_PCM.set." + tool + ".userId")) {
                    _PCM.set[tool].userId(event);
                    event.fired[tool] = true;
                }
            } else if (event.type == "SET_DIMENSION" && tool == "googleAnalytics" && event.customData.length > 0) {
                if (_PCM.verifyObject("_PCM.set." + tool + ".pageDimensions")) {
                    _PCM.set[tool].pageDimensions(event);
                    event.fired[tool] = true;
                }
            } else if (event.type == "PAGE_VIEW") {
                if (_PCM.verifyObject("_PCM.trackPageView." + tool)) {
                    _PCM.trackPageView[tool](event);
                }
            } else if (event.type == "EVENT") {
                if (_PCM.verifyObject("_PCM.trackPageEvent." + tool)) {
                    _PCM.trackPageEvent[tool](event);
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    processPendingIdentityCall: function () {
        try {
            var identitySet = _PCM.cookie.get('_pcm_identity');
            if (_PCM.objectExists(identitySet) && identitySet == "true") {
                var eventName = _PCM.cookie.get('_pcm_identity_event');
                if (_PCM.objectExists(eventName)) {
                    var event = _PCM.getEventByName(eventName);
                    if (event.length > 0) {
                        var eventObj = event[0];
                        _PCM.sendEvents(document.body, eventObj);
                        _PCM.cookie.set('_pcm_identity', "false", 360, true);
                        _PCM.cookie.set('_pcm_identity_event', "", 360, true);
                    }
                }
            }

            /*
              var identityRaw = _PCM.cookie.get('_pcm_identity_obj');
              var identityArray = identityRaw.split('-;-');
              if (_PCM.verifyObject("Array.isArray")) {
              if (Array.isArray(identityArray)) {
              if (identityArray.length > 0) {
              var eventName = identityArray[0];
              var eventObj = _PCM.getEventByName(eventName);
              var identityVariables = identityArray.shift();
              var dataLayer = {};
              var propertiesObj = {
              dimensions: _PCM.unpack.dimensions(eventObj.eventData),
              metrics: _PCM.unpack.metrics(eventObj.eventData),
              scope: _PCM.unpack.scope(eventObj.eventData),
              customProperties: {},
              specialProperties: {},
              userProperties: {}
              }
              for (var i = 0, variable; variable = identityVariables[i]; i++) {
              if (_PCM.verifyDataLayerObject(variable)){
              dataLayer[variable] = _PCM.returnDataLayerValue(variable);
              }
              }
              if (eventObj.identity) {
              _PCM.createUserCredentials(propertiesObj.userProperties);
              }
              _PCM.processEvents(eventObj, propertiesObj);
              }
              }
              }*/
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    processUnmatchedPageEvents: function () {
        try {
            if (_PCM.verifyObject("_PCM.eventsBucket.pageEvents")) {
                var pageEventsBucket = _PCM.filterPageEventsBucket(_PCM.eventsBucket.pageEvents);
                _PCM.processPageEvents(pageEventsBucket);
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    processPageEvents: function (events) {
        try {
            if (_PCM.verifyObject("Array.isArray")) {
                if (Array.isArray(events)) {
                    if (events.length > 0) {
                        for (var i = 0, event; event = events[i]; i++) {
                            for (var tool in event.tools) {
                                if (!event.fired[tool]) {
                                    if (event.tools[tool]) {
                                        _PCM.sendPageEvent(event, tool);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    sendEvents: function(targetNode, eventObj) {
        try {
            if (eventObj.isBlocked) {
                return;
            } else {
                eventObj.isBlocked = true;
                setTimeout(function (args) {
                    var eventObj = args[0];
                    eventObj.isBlocked = false;
                }.bind(this, [eventObj]), 100);
            }
            var isInIframe = (window.location != window.parent.location) ? true : false;
            if (isInIframe){
                _PCM.sendEventsToParent(targetNode, eventObj);
            } else {
                if (_PCM.objectExists(eventObj.identityDataLayer)) {
                    if (eventObj.identityDataLayer == true) {
                        var identitySet = _PCM.cookie.get('_pcm_identity');
                        if (!_PCM.objectExists(identitySet) || identitySet == "false") {
                            _PCM.cookie.set('_pcm_identity', 'true', 1, true);
                            _PCM.cookie.set('_pcm_identity_event', eventObj.eventName, 1, true);
                            return;
                        }
                    }
                }
                var propertiesObj = _PCM.unpack.eventProperties(targetNode, eventObj);
                if (eventObj.identify){
                    if (propertiesObj.userProperties !== undefined) {
                        _PCM.createUserCredentials(propertiesObj.userProperties);
                        if (eventObj.identityDataLayer == true) {
                            var userId = _PCM.cookie.get('_pcm_id');
                            if (userId == false || userId == "false") {
                                setTimeout(function (args) {
                                    var eventObj = args[0];
                                    _PCM.cookie.set('_pcm_identity', 'true', 1, true);
                                    _PCM.cookie.set('_pcm_identity_event', eventObj.eventName, 1, true);
                                    _PCM.processPendingIdentityCall();
                                }.bind(this, [eventObj]), 2000);
                                return;
                            }
                        }
                    }
                }

                // send events to destination tools
                _PCM.processEvents(eventObj, propertiesObj);
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },
    processEvents: function (eventObj, propertiesObj) {
        try {
            _PCM.trackEvent.googleAnalytics (eventObj, propertiesObj);
            _PCM.trackEvent.mixpanel        (eventObj, propertiesObj);
            _PCM.trackEvent.kissMetrics     (eventObj, propertiesObj);
            _PCM.trackEvent.woopra          (eventObj, propertiesObj);
            _PCM.trackEvent.segmentio       (eventObj, propertiesObj);
            _PCM.trackEvent.trakio          (eventObj, propertiesObj);
            _PCM.trackEvent.customerio      (eventObj, propertiesObj);
            _PCM.trackEvent.intercom        (eventObj, propertiesObj);
            _PCM.trackEvent.popcornmetrics  (eventObj, propertiesObj);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    send: {
        googleAnalytics: {
            pageView: function (response) {
                try {
                    if (typeof ga === "function") {
                        _PCM.log('Logging page view to [ga] ');
                        if (typeof ga.getAll === "function" && typeof ga.getAll()[0] !== "undefined") {
		                    ga(ga.getAll()[0].get('name') + '.send', 'pageview');
                            response(true);
                        } else {
                            ga('send', 'pageview');
                            response(true);
                        }
                    }
                    else if (typeof __gaTracker === "function") {
                        _PCM.log('Logging page view to [__gaTracker] ');
		                __gaTracker('send', 'pageview');
                        response(true);
                    }
                    else if (typeof _gaq === "object" && typeof _gaq.push === "function") {
                        _PCM.log('Logging pageview to [_gaq]');
		                _gaq.push(['_trackPageview']);
                        response(true);
	                } else {
                        response(false);
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            event: function(eventCategory, eventName, eventInfo, response) {
                try {
                    if (typeof ga === "function" && typeof ga.getAll === "function" && typeof ga.getAll()[0] !== "undefined") {
                        _PCM.log('Logging event to [ga]: ' + eventName + ', eventInfo: ' + JSON.stringify(eventInfo) );
                        //if (typeof ga.getAll === "function" && typeof ga.getAll()[0] !== "undefined") {
		                ga(ga.getAll()[0].get('name') + '.send', 'event', eventCategory, eventName, eventInfo);
                        if (typeof response == "function") {
                            response(true);
                        }
                        //} else {
                        //    ga('send', 'event', eventCategory, eventName, eventInfo);
                        // }
                    }
                    else if (typeof __gaTracker === "function" && typeof __gaTracker.getAll && typeof __gaTracker.getAll()[0] !== "undefined") {
                        _PCM.log('Logging event to [__gaTracker]: '  + ', eventInfo: ' + JSON.stringify(eventInfo) );
		                __gaTracker('send', 'event', eventCategory, eventName, eventInfo);
                        if (typeof response == "function") {
                            response(true);
                        }
                    }
                    else if (typeof _gaq === "object" && typeof _gaq.push === "function") {
                        _PCM.log('Logging event to [_gaq]: ' + eventName);
		                _gaq.push(['_trackEvent', eventCategory, eventName, eventInfo.eventLabel]);
                        if (typeof response == "function") {
                            response(true);
                        }
	                }
                    else if (typeof ga === "function") {
                        _PCM.log('Logging event to [ga]: ' + eventName + ', eventInfo: ' + JSON.stringify(eventInfo) );
                        ga('send', 'event', eventCategory, eventName, eventInfo);
                        if (typeof response == "function") {
                            response(true);
                        }
                    } else {
                        if (typeof response == "function") {
                            response(false);
                        }
                    }
                }
                catch (e) {
                    _PCM.registerError("Google Analytics", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            dimensions: function (dimension, value) {
                try {
                    if (typeof ga === "function") {
                        _PCM.log('Setting Dimension in [ga]: ' + dimension + ', value: ' + value);
                        //if (typeof ga.getAll === "function" && typeof ga.getAll()[0] !== "undefined") {
		                //    ga(ga.getAll()[0].get('name') + '.set', dimension, value);
                        //} else {
                        ga('set', dimension, value);;
                        //}
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },
            userId: function (userId) {
                try {
                    if (typeof ga === "function") {
                        _PCM.log('Setting UserId in [ga]');
                        //if (typeof ga.getAll === "function" && typeof ga.getAll()[0] !== "undefined") {
		                //    ga(ga.getAll()[0].get('name') + '.set', '&uid', userId);
                        //} else {
                        ga('set', '&uid', userId);
                        //}
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        woopra: {
            event: function (eventName, properties) {
                try {

                    if (typeof woopra === "object") {
                        woopra.track (eventName, properties, function() {
                            _PCM.log('Logging event to [woopra]: ' + eventName + ', customProperties: ' + JSON.stringify(properties));
                        });
                    }
                }
                catch (e) {
                    _PCM.registerError("Woopra", e);
                    _PCM.log("Error sending to Woopra API" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },

        mixpanel: {
            event: function (eventName, properties, response) {
                try {
                    if (typeof mixpanel === "object") {
                        var _mp = _PCM.get.mixpanel.libName();
                        _mp.track (eventName, properties, function () {
                            _PCM.log('Logging event to [_mp]: ' + eventName + ', customProperties: ' + JSON.stringify(properties));
                        });
                        if (typeof response == "function") {
                            response(true);
                        }
                    } else {
                        if (typeof response == "function") {
                            response(false);
                        }
                    }
                }
                catch (e) {
                    _PCM.registerError("Mixpanel", e);
                    _PCM.log("Error sending to Mixpanel API" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            append: function (listName, value) {
                try {
                    if (typeof mixpanel === "object") {
                        var _mp = _PCM.get.mixpanel.libName();
                        _mp.people.append(listName, value, function () {
                            _PCM.log('Appending list in user profile to [_mp]: ' + listName + ', value: ' + (value));
                        });
                    }
                }
                catch (e) {
                    _PCM.registerError("Mixpanel", e);
                    _PCM.log("Error sending to Mixpanel API" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            increment: function (property, count) {
                try {
                    if (typeof mixpanel === "object") {
                        var _mp = _PCM.get.mixpanel.libName();
                        _mp.people.increment(property, count, function () {
                            _PCM.log('Increment property to [_mp]: ' + property + ', count: ' + (count));
                        });
                    }
                }
                catch (e) {
                    _PCM.registerError("Mixpanel", e);
                    _PCM.log("Error sending to Mixpanel API" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        }
    },

    trackPageEvent: {
        googleAnalytics: function (event) {
            try {
                var eventInfo = {eventLabel: 'page name: ' +  document.title + ', url: ' + window.location.pathname};
                _PCM.send.googleAnalytics.event('PopcornMetrics', event.customData[0].property, eventInfo, function (response){
                    event.fired.googleAnalytics = response;
                });
            }
            catch(e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        mixpanel: function (event) {
            try {
                var properties = {
                    'page name': document.title,
                    'url' : window.location.pathname
                };
                _PCM.send.mixpanel.event(event.customData[0].property, properties, function (response) {
                    event.fired.mixpanel = response;
                });
                _PCM.send.mixpanel.append('pages_visited', properties['page name']);
                _PCM.send.mixpanel.increment('page_views', 1);
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }

        }
    },

    trackPageView: {
        googleAnalytics: function (event) {
            try {
                _PCM.send.googleAnalytics.pageView(function (response) {
                    event.fired.googleAnalytics = response;
                });
            }
            catch(e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        }
    },

    trackEvent: {
        popcornmetrics: function(eventObj, propertiesObj) {
            try {
                var eventProperties = _PCM.get.pcm.sessionProperties();
                eventProperties.eventName = eventObj.eventName;
                eventProperties.eventData = propertiesObj.customProperties;
                _PCM.registerEvent(eventProperties, eventObj.trackingRequestId);
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        googleAnalytics: function(eventObj, propertiesObj) {
            if (eventObj.tools.googleAnalytics === true) {
                try {
                    // We set the google user id (if enabled by the user) based on the email encoded
                    // We set the dimensions from the custom properties only, not user properties or specialproperties
                    _PCM.set.googleAnalytics.PCMuserId(eventObj);
                    var scope = propertiesObj.scope;
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties);
                    var userProperties = _PCM.createNewObject(propertiesObj.userProperties);
                    var specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);
                    var eventInfo = {};

                    // Set Event Label
                    eventInfo = _PCM.set.googleAnalytics.label(customProperties, eventInfo);

                    // Set Dimensions
                    eventInfo = _PCM.set.googleAnalytics.eventDimensions(propertiesObj.dimensions, scope, customProperties, eventInfo);

                    // Set metrics
                    eventInfo = _PCM.set.googleAnalytics.metrics(propertiesObj.metrics, scope, customProperties, eventInfo);

                    // Send event to Google Analytics
                    _PCM.send.googleAnalytics.event(eventObj.eventProperties.eventCategory, eventObj.eventName, eventInfo);

                }
                catch (e) {
                    _PCM.registerError("Google Analytics", e);
                    _PCM.log("Error sending to Google Analytics API" + e.message, "error");
                }
            }
        },

        woopra: function (eventObj, propertiesObj) {
            if (eventObj.tools.woopra === true && typeof woopra === "object") {
                try {
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties);
                    var userProperties = _PCM.createNewObject(propertiesObj.userProperties);
                    var specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);

                    userProperties = _PCM.unpack.woopra.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    if (containsUserProperties) {

                        // Set alias or identify (register or login)
                        if (eventObj.identify ===  true && userProperties.email) {
                            if (eventObj.register === true) {
                                userProperties["created"] = new Date();
			                }
                            woopra.identify(userProperties).push(function () {
                                _PCM.log('Setting Identity to [woopra]: ' + ', userProperties: ' + JSON.stringify(userProperties));
                            });
                        }

                        // set user Properties
                        woopra.identify(userProperties).push(function() {
                            _PCM.log('Setting User Properties to [woopra]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                        });
                    }

                    // set revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        customProperties = revenueObj.customProperties;
                        var revenue = revenueObj.revenue;
                        var now = new Date();
                        now = now.toISOString();
                        _PCM.send.woopra.event('revenue', {
                            revenue: revenue,
                            time: now
                        });
                    }

                    // track event
                    _PCM.send.woopra.event(eventObj.eventName, customProperties);
                }
                catch (e) {
                    _PCM.registerError("Woopra", e);
                    _PCM.log("Error sending to Woopra API" + e.message, "error");
                }
            }
        },

        mixpanel: function(eventObj, propertiesObj) {
            if (eventObj.tools.mixpanel === true && typeof mixpanel === "object") {
                try {
                    var _mp = _PCM.get.mixpanel.libName();

                    // create new properties objects
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties);
                    var userProperties = _PCM.createNewObject(propertiesObj.userProperties);
                    var specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);

                    // unpack user Properties
                    userProperties = _PCM.unpack.mixpanel.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    if (containsUserProperties) {

                        // Set alias or identify (register or login)
                        if (eventObj.identify === true) {
                            var ids = _PCM.unpack.identityIds(propertiesObj.userProperties);
                            if (ids.length > 0) {
                                if (eventObj.register === true) {
                                    userProperties["$created"] = new Date();
			                        for (var i = 0; i < ids.length; i++) {
                                        _mp.alias(ids[i]);
                                    }
				                } else {
                                    _mp.identify(ids[0]);
                                }
                            }
                        }

                        // set user Properties
                        _mp.people.set(userProperties, function() {
                            _PCM.log('Setting User Properties to [_mp]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                        });
                    }

                    // set revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        customProperties = revenueObj.customProperties;
                        var revenue = revenueObj.revenue;
                        var now = new Date();
                        now = now.toISOString();
                        _mp.people.track_charge(revenue, {
                            '$time': now
                        });
                    }

                    // track event
                    _PCM.send.mixpanel.event(eventObj.eventName, customProperties);
	            }
                catch (e) {
                    _PCM.registerError("Mixpanel", e);
                    _PCM.log("Error sending to Mixpanel API" + e.message, "error");
                }
            }
        },


        trakio: function(eventObj, propertiesObj) {
            if (eventObj.tools.trakio === true && typeof trak === "object") {
                try {
                    var trakio = trak.io,

                    // create new properties object
                    customProperties = _PCM.createNewObject(propertiesObj.customProperties),
                    userProperties = _PCM.createNewObject(propertiesObj.userProperties),
                    specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);

                    // unpack user Properties
                    userProperties = _PCM.unpack.trakio.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    if (containsUserProperties) {

                        // If register or login call identify with id (same as calling alias)
                        var ids = _PCM.unpack.identityIds(propertiesObj.userProperties);
                        if (eventObj.identify === true){
                            if (eventObj.register === true) {
                                trakio.sign_out();
                                userProperties["created"] = new Date();
                            }
                            trakio.identify(ids, userProperties, function() {
                                _PCM.log('Setting User Properties to [_trakio]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                            });

                        } else {
                            trakio.identify(userProperties, function() {
                                _PCM.log('Setting User Properties to [_trakio]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                            });
                        }
                    }

                    // set revnue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        var revenue = revenueObj.revenue;
                        customProperties["revenue"] = revenue;
                    }

                    // track event
                    trakio.track(eventObj.eventName, customProperties, function(data){
                        _PCM.log('Logging event to [_trakio]: ' + eventObj.eventName  + ', customProperties: ' + JSON.stringify(customProperties));
                    });
                }
                catch (e) {
                    _PCM.registerError("Trak.io", e);
                    _PCM.log("Error sending to Trak.io API" + e.message, "error");
                }
            }
        },

        customerio: function(eventObj, propertiesObj) {
            if (eventObj.tools.customerio === true && typeof _cio === "object") {
                try {

                    // create new properties objects
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties),
                    userProperties = _PCM.createNewObject(propertiesObj.userProperties),
                    specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);

                    // unpack user Properties
                    userProperties = _PCM.unpack.customerio.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    // get user id from cookie
                    var userId = _PCM.get.pcm.userId();
                    if (containsUserProperties) {
                        var ids = _PCM.unpack.identityIds(propertiesObj.userProperties);
                        // identity user with id
                        if (eventObj.identify === true) {
                            if (ids.length > 0) {
                                if (ids.length > 1) {
                                    if ("usr_field_id" in propertiesObj.userProperties) {
                                        userProperties["id"] = propertiesObj.userProperties.usr_field_id;
                                    } else if ("usr_field_id_email" in propertiesObj.userProperties) {
                                        userProperties["id"] = propertiesObj.userProperties.usr_field_id_email;
                                    } else {
                                        userProperties["id"] = ids[0];
                                    }
                                } else {
                                    userProperties["id"] = ids[0];
                                }
                            }
                            if (eventObj.register) {
                                userProperties["created_at"] = userProperties["updated_at"];
                            }
                        }
                        if (userProperties["id"] == undefined) {
                            if (userId !== undefined) {
                                userProperties["id"] = userId;
                            }
                        }
                        _cio.identify(userProperties);
                        _PCM.log('Setting User Properties to [_customerio]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                    }

                    // set revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        var revenue = revenueObj.revenue;
                        customProperties["revenue"] = revenue;
                    }

                    // track event
                    _cio.track(eventObj.eventName, customProperties);
                    _PCM.log('Logging event to [_customerio]: ' + eventObj.eventName  + ', customProperties: ' + JSON.stringify(customProperties));
                }
                catch (e) {
                    _PCM.registerError("Customer.io", e);
                    _PCM.log("Error sending to Customer.io API" + e.message, "error");
                }
            }
        },

        intercom: function(eventObj, propertiesObj) {
            if (eventObj.tools.intercom === true && typeof Intercom === "function") {
                try {
                    // create new properties objects
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties),
                    userProperties = _PCM.createNewObject(propertiesObj.userProperties),
                    specialProperties = _PCM.createNewObject(propertiesObj.specialProperties),
                    bootDelay = false;

                    // unpack user Properties
                    userProperties = _PCM.unpack.intercom.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    // if it contains User Properties - Update or create user
                    if (containsUserProperties && userProperties['app_id'] !== undefined && userProperties['user_id'] !== undefined) {

                        // Check if PopcornMetrics should create users in Intercom
                        var allowPCMtoCreateUsers = false;
                        if (_PCM_settings.settings.intercom.appId !== '' && _PCM_settings.settings.intercom.appId !== undefined && _PCM_settings.settings.intercom.appId !== null) {
                            allowPCMtoCreateUsers = true;
                        }

                        // If register create a new user and boot intercom, if login, update user
                        if (eventObj.identify === true && allowPCMtoCreateUsers) {
                            //if (eventObj.register == true || window.intercomSettings == undefined) {
                            Intercom('shutdown');
                            bootDelay = 200;
                            if (eventObj.register) {userProperties.created_at = userProperties.updated_at;}
                            window.intercomSettings = userProperties;
                            Intercom('boot', userProperties);
                            //} else {
                            //    window.intercomSettings = userProperties;
                            //    Intercom('update', userProperties);
                            //}
                        } else {
                            Intercom('update', userProperties);
                        }
                    }

                    // set revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        var revenue = revenueObj.revenue;
                        customProperties["price"] = {
                            currency: "usd",
                            amount: revenue
                        }
                    }

                    // send event
                    if (bootDelay) {
                        setTimeout(function(args) {
                            var eventName = args[0];
                            var customProperties = args[1];
                            Intercom('trackEvent', eventName);
                            _PCM.log('Logging event to [_intercom]: ' + eventName  + ', customProperties: ' + JSON.stringify(customProperties));
                        }.bind(this, [eventObj.eventName, customProperties]), bootDelay);
                    } else {
                        Intercom('trackEvent', eventObj.eventName, customProperties);
                        _PCM.log('Logging event to [_intercom]: ' + eventObj.eventName  + ', customProperties: ' + JSON.stringify(customProperties));
                    }
                }
                catch (e) {
                    _PCM.registerError("Intercom", e);
                    _PCM.log("Error sending to Intercom API" + e.message, "error");
                }
            }
        },

        kissMetrics: function(eventObj, propertiesObj) {
	        if (eventObj.tools.kissMetrics === true && typeof _kmq === "object" && typeof _kmq.push === "function") {
                try {

                    // create new properties objects
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties),
                    userProperties = _PCM.createNewObject(propertiesObj.userProperties),
                    specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);

                    // unpack user Properties
                    userProperties = _PCM.unpack.kissMetrics.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    if (containsUserProperties) {

                        if (eventObj.identify === true) {
                            var ids = _PCM.unpack.identityIds(propertiesObj.userProperties);
                            if ( ids.length > 0 ) {
                                if (eventObj.register === true) {
                                    userProperties["created"] = new Date();
                                    for (var i = 0; i< ids.length; i++) {
                                        _kmq.push(['alias', KM.i(), ids[i]]);
                                    }
                                } else {
                                    _kmq.push(['identify', ids[0]]);
                                }
                            }
                        }

                        _kmq.push(['set', userProperties], function() {
                            _PCM.log('Setting User Properties to [_kmq]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                        });
                    }

                    // set revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        var revenue = revenueObj.revenue;
                        customProperties["Billing Amount"] = revenue;
                    }

                    // send event
                    _kmq.push(['record', eventObj.eventName, customProperties, function(){
                        _PCM.log('Logging event to [_kmq]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(customProperties));
                    }]);
                }
                catch (e) {
                    _PCM.registerError("KISSmetrics", e);
                    _PCM.log("Error sending to KISSmetrics API" + e.message, "error");
                }
            }
        },

        segmentio: function(eventObj, propertiesObj) {
	        if (eventObj.tools.segmentio === true && typeof analytics === "object" && typeof analytics.track === "function") {
                try {
                    // create new properties objects
                    var customProperties = _PCM.createNewObject(propertiesObj.customProperties),
                    userProperties = _PCM.createNewObject(propertiesObj.userProperties),
                    specialProperties = _PCM.createNewObject(propertiesObj.specialProperties);
                    // unpack user properties
                    userProperties = _PCM.unpack.segmentio.userData(userProperties);

                    // check if user Properties is not empty
                    var containsUserProperties = !_PCM.isObjectEmpty (propertiesObj.userProperties);

                    if (containsUserProperties) {

                        if (eventObj.identify === true) {
                            var ids = _PCM.unpack.identityIds(propertiesObj.userProperties);
                            if (ids.length > 0) {
                                if (eventObj.register === true) {
                                    userProperties["created"] = new Date();
                                    analytics.alias(id[0], function () {
                                        _PCM.log('Setting Alias to [_segment]: ' + id[0]);
                                        _PCM.set.segmentio.identify(userProperties);
                                    });
                                    if (ids.length > 1 ) {
                                        for (var i = 1; i < ids.length ; i++) {
                                            analytics.alias(ids[i], function () {
                                                _PCM.log('Setting Alias to [_segment]: ' + ids[i]);
                                            });
                                        }
                                    }
                                } else {
                                    analytics.identify(ids[0], userProperties);
                                }
                            }
                        } else {

                            // Set user Properties
                            analytics.identify(userProperties, function() {
                                _PCM.log('Setting User Properties to [_segment]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(userProperties));
                            });
                        }
                    }

                    // set Dimensions
                    var dimensions = propertiesObj.dimensions;
                    _PCM.set.segmentio.dimensions(dimensions, customProperties);

                    // set Revenue
                    var revenueObj = _PCM.unpack.revenueValues(customProperties, specialProperties);
                    if (revenueObj.trackRevenue) {
                        var revenue = revenueObj.revenue;
                        customProperties["revenue"] = revenue;
                    }

                    // track event
	 	            analytics.track(eventObj.eventName, customProperties, function(){
                        _PCM.log('Logging event to [seg.io]: ' + eventObj.eventName + ', customProperties: ' + JSON.stringify(customProperties));
                    });
	            }
                catch (e) {
                    _PCM.registerError("Segment", e);
                    _PCM.log("Error sending to Segment API" + e.message, "error");
                }
            }
        }
    },

    createNewObject: function(object) {
        try {
            var newObject = {};
            for (var index in object) {
                newObject[index] = object[index];
            }
            return newObject;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },


    install:  {
        //DISABLED GA INSTALLATION
        /* ga: (function(i,s,o,g,r,a,m){
           i['GoogleAnalyticsObject']=r;
           i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();
           a=s.createElement(o), m=s.getElementsByTagName(o)[0]; a.async=1; a.src=g; m.parentNode.insertBefore(a,m)
           })(window,document,'script','//www.google-analytics.com/analytics.js','ga'), */

        intercom: (function() {
            var w=window;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;
            _PCM_settings.createScriptTag('https://widget.intercom.io/widget/',_PCM_settings.settings.intercom.appId);

        })
    },


    isObjectEmpty: function (object) {
        try {
            if (JSON.stringify(object) === "{}" || object == undefined || object == null || typeof object !== 'object') {
                return true;
            }  else {
                return false;
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },
    unpack: {
        customProperties: function (eventPackage) {
            try {
                if (eventPackage.data) {
                    return _PCM.createNewObject(eventPackage.data);
                }
                return {};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        specialProperties: function (eventPackage) {
            try {
                if (eventPackage.specialProperties) {
                    return _PCM.createNewObject(eventPackage.specialProperties);
                }
                return {};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        userProperties: function (eventPackage) {
            try {
                if (eventPackage) {
                    return _PCM.createNewObject(eventPackage);
                }
                return {};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        dimensions: function (eventPackage) {
            try {
                if (eventPackage.dimensions) {
                    return eventPackage.dimensions;
                }
                return {};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        metrics: function (eventPackage) {
            try {
                if (eventPackage.metrics) {
                    return eventPackage.metrics;
                }
                return {};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        scope: function (eventPackage) {
            try {
                if (eventPackage.scope) {
                    return eventPackage.scope;
                }
                return 'SINGLE_HIT';
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        eventProperties: function(targetNode, eventObj) {
            try {
                var userProperties = _PCM.getElementsValues(_PCM.unpack.userProperties(eventObj.userProperties));
                var customProperties = _PCM.getElementsValues(_PCM.unpack.customProperties(eventObj.eventData), targetNode, eventObj.eventData.container);
                var specialProperties = _PCM.getElementsValues(_PCM.unpack.specialProperties(eventObj.eventData), targetNode, eventObj.eventData.container);
                var dimensions = _PCM.unpack.dimensions(eventObj.eventData);
                var metrics = _PCM.unpack.metrics(eventObj.eventData);
                var scope = _PCM.unpack.scope(eventObj.eventData);

                return {userProperties: userProperties, customProperties: customProperties, specialProperties: specialProperties, dimensions: dimensions, metrics: metrics, scope: scope};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        revenueValues: function(customProperties, specialProperties) {
            try {
                var trackRevenue = false;
                var revenue = 0;
                if (specialProperties !== null && specialProperties !== undefined && JSON.stringify(specialProperties) !== {}) {
                    for (index in specialProperties) {
                        if (index.indexOf("=") !== 1) {
                            if (index.split("=")[0] == "REVENUE") {
                                customProperties[index.split("=")[1]] = specialProperties[index];
                                trackRevenue = true;
                                revenue += specialProperties[index];
                            }
                        }
                    }
                }
                return {trackRevenue: trackRevenue, customProperties: customProperties, revenue: revenue};
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        identityIds: function (object) {
            try {
                var ids = [];
                for (item in object) {
                    if (item.indexOf("usr_field_id") !== -1) {
                        ids.push(object[item]);
                    }
                }
                return ids;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },
        woopra: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object) {
                        if (index === "usr_field_email"){
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["first_name"] = object["usr_field_f_name"];
                        } else if (index === "usr_field_l_name")  {
                            userData["last_name"] = object["usr_field_l_name"];
                        } else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];
                        } else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index.toLowerCase()] = object[index];
                            }
                        }
                    }

                    if ((!userData.name || userData.name === undefined) && (!userData["first_name"] || userData["first_name"] === undefined) && (userData["last_name"] || userData["last_name"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData.username || userData.username === undefined)) {
                        if (userData.first_name && userData.first_name !== "" && userData.first_name !== undefined) {
                            userData.name = userData.first_name;
                            if (userData.last_name && userData.last_name !== "" && userData.last_name !== undefined) {
                                userData.name = userData.name + " " + userData.last_name;
                            }
                        }
                    }
                    userData["last_update"] = new Date();
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },

        mixpanel: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object) {
                        if (index === "usr_field_email"){
                            userData["$email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["$first_name"] = object["usr_field_f_name"];
                        } else if (index === "usr_field_l_name")  {
                            userData["$last_name"] = object["usr_field_l_name"];
                        } else if (index === "usr_field_name")  {
                            userData["$name"] = object["usr_field_name"];
                        } else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData["$first_name"] || userData["$first_name"] === undefined) && (userData["$last_name"] || userData["$last_name"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }

                    userData["last_update"] = new Date();
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },

        trakio: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object){
                        if (index === "usr_field_email")  {
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["first_name"] = object["usr_field_f_name"];
                        }
                        else if (index === "usr_field_l_name")  {
                            userData["last_name"] = object["usr_field_l_name"];
                        }
                        else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];
                        }
                        else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData["first_name"] || userData["first_name"] === undefined) && (userData["last_name"] || userData["last_name"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    userData["last_update"] = new Date();
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        segmentio: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object){
                        if (index === "usr_field_email")  {
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["firstName"] = object["usr_field_f_name"];
                        }
                        else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];

                        } else if (index === "usr_field_l_name")  {
                            userData["lastName"] = object["usr_field_l_name"];
                        }
                        else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData["firstName"] || userData["firstName"] === undefined) && (userData["lastName"] || userData["lastName"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    userData["last_update"] = new Date();
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        kissMetrics: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object){
                        if (index === "usr_field_email")  {
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["first_name"] = object["usr_field_f_name"];
                        }
                        else if (index === "usr_field_l_name")  {
                            userData["last_name"] = object["usr_field_l_name"];
                        }
                        else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];
                        }
                        else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData["first_name"] || userData["first_name"] === undefined) && (userData["last_name"] || userData["last_name"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    userData["last_update"] = new Date();
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        customerio: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object){
                        if (index === "usr_field_email")  {
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username") {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["first_name"] = object["usr_field_f_name"];
                        }
                        else if (index === "usr_field_l_name")  {
                            userData["last_name"] = object["usr_field_l_name"];
                        } else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];
                        }
                        else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    if ((!userData.name || userData.name === undefined) && (!userData["first_name"] || userData["first_name"] === undefined) && (userData["last_name"] || userData["last_name"] === undefined)) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    if (!Date.now) {
                        Date.now = function() { return new Date().getTime(); };
                    }
                    var unixDate = Math.round(Date.now()/1000);
                    userData["updated_at"] = unixDate;
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        intercom: {
            userData: function (object) {
                try {
                    var userData = {};
                    for (var index in object){
                        if (index === "usr_field_email")  {
                            userData["email"] = object["usr_field_email"];
                        }
                        else if (index === "usr_field_username")  {
                            userData["username"] = object["usr_field_username"];
                        }
                        else if (index === "usr_field_f_name")  {
                            userData["first_name"] = object["usr_field_f_name"];
                        }
                        else if (index === "usr_field_l_name")  {
                            userData["last_name"] = object["usr_field_l_name"];
                        } else if (index === "usr_field_name")  {
                            userData["name"] = object["usr_field_name"];
                        }
                        else {
                            if (index.indexOf("usr_field_id") == -1){
                                userData[index] = object[index];
                            }
                        }
                    }
                    var containsId = _PCM.checkIfContainsIdFields(object);
                    if (containsId) {
                        if (object["usr_field_id"] && object["usr_field_id"] !== null && object["usr_field_id"] !== "" && object["usr_field_id"] !== undefined) {
                            userData["user_id"] = object["usr_field_id"];
                        } else if (object["usr_field_id_email"] && object["usr_field_id_email"] !== null && object["usr_field_id_email"] !== "" && object["usr_field_id_email"] !== undefined) {
                            userData["user_id"] = object["usr_field_id_email"];
                        } else if (object["usr_field_id_login"] && object["usr_field_id_login"] !== null && object["usr_field_id_login"] !== "" && object["usr_field_id_login"] !== undefined) {
                            userData["user_id"] = object["usr_field_id_login"];
                        }
                    } else {
                        var userId = _PCM.get.pcm.userId();
                        if (userId !== undefined) {
                            userData["user_id"] = userId;
                        }
                    }
                    if (userData.first_name && userData.first_name !== "") {
                        userData.name = userData.first_name;
                        if (userData.last_name && userData.last_name !== "") {
                            userData.name = userData.name + " " + userData.last_name;
                        }
                    }
                    if (!userData.name || userData.name === undefined) {
                        if (userData.username && userData.username !== "" && userData.username !== undefined) {
                            userData.name = userData.username;
                        }
                    }
                    if (!Date.now) {
                        Date.now = function() { return new Date().getTime(); };
                    }
                    var unixDate = Math.round(Date.now()/1000);
                    userData["updated_at"] = unixDate;
                    if (_PCM_settings.settings.intercom !== undefined && _PCM_settings.settings.intercom !== null) {
                        if (_PCM_settings.settings.intercom.appId !== '' && _PCM_settings.settings.intercom.appId !== undefined && _PCM_settings.settings.intercom.appId !== null) {
                            userData.app_id = _PCM_settings.settings.intercom.appId;
                        }
                    }

                    // If we don't have an app_id, then try to read from the intercomSettings
                    if (userData["app_id"] == undefined || userData["app_id"] == null || userData["app_id"] == "") {
                        if (window.intercomSettings) {
                            var settings = window.intercomSettings;
                            if (settings["app_id"] && (settings["email"] || settings["user_id"]) ) {
                                userData["app_id"] = settings["app_id"];
                                if (settings["user_id"]) {
                                    userData["user_id"] = settings["user_id"];
                                } else if (settings["email"]) {
                                    userData["email"] = settings["email"];
                                }
                            }
                        }
                    }
                    return userData;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        }
    },

    getUserIdfromCookie: function() {
        try {
            _PCM_settings.settings.userId = _PCM.cookie.get('_pcm_id');
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    get: {
        pcm: {
            domainId: function() {
                try {
                    return _PCM_settings.settings.account.domainId
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },
            userId:  function() {
                try {
                    if (_PCM.verifyObject("_PCM_settings.settings.userId")) {
                        return _PCM_settings.settings.userId
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },
            sessionProperties: function() {
                try {
                    var sBrowser = _PCM.getBrowserName();
                    var oSName   = _PCM.getOSName();
                    var browserVersion = _PCM.browserVersion();
                    var path     = _PCM.getCurrentPath();
                    var eventSessionProperties = {
                        path     : path,
                        sessionProperties: { browser:sBrowser, OS:oSName, version: browserVersion }
                    };

                    return eventSessionProperties;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },

        mixpanel: {
            libName: function() {
                try {
                    if (mixpanel._i && mixpanel._i[0][2] &&  (mixpanel._i[0][2] != 'mixpanel')  ) {
                        return mixpanel[mixpanel._i[0][2]];
                    }
                    return mixpanel;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        }
    },

    // Setting Identity should move from the .track to .set
    set: {
        pcm: {
            userId: function(id) {
                try {
                    _PCM_settings.settings.userId = id;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },
        segmentio: {
            identify: function (userProperties) {
                analytics.identify(userProperties, function () {
                    _PCM.log('Setting User Properties to [_segment]: customProperties: ' + JSON.stringify(userProperties));
                });
            },

            dimensions: function(dimensions, customProperties) {
                try {
                    var dimensionData = {};
                    var hasDimensions = false;
                    for (var dimension in dimensions) {
                        dimensionData[dimension] = customProperties[dimension];
                        hasDimensions = true;
                    }
                    if (hasDimensions) {
                        _PCM.log('Applying Custom Dimensions: ' + JSON.stringify(dimensionData));
                        analytics.identify(dimensionData);
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        },

        googleAnalytics: {
            userId: function (event) {
                if (event.customData[0].dataSource == "COOKIE") {
                    var user_id = _PCM.get.pcm.userId();
                    if (user_id !== null) {

                        _PCM.send.googleAnalytics.userId(user_id);
                        event.fired.googleAnalytics = true;
                    }
                } else if (event.customData[0].dataSource == "DATA_LAYER") {
                    var dataLayerString = event.customData[0].data;
                    if (_PCM.verifyDataLayerObject(dataLayerString)) {
                        var dataLayerObj = _PCM.returnDataLayerValue(dataLayerString);
                        if (dataLayerObj) {
                            if (typeof dataLayerObj !== "object") {
                                _PCM.send.googleAnalytics.userId(dataLayerObj);
                                event.fired.googleAnalytics = true;
                            }
                        }
                    }
                }
            },

            PCMuserId: function (eventObj) {
                try {
                    if(eventObj.identify){
                        if (_PCM.verifyObject("_PCM_settings.settings.ga.trackUserId")) {
                            if(_PCM_settings.settings.ga.trackUserId){
                                _PCM.send.googleAnalytics.userId(_PCM.get.pcm.userId());
                            }
                        }
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            label: function(customProperties, eventInfo) {
                try {
                    var eventString = "";
                    var string = "";
	                for (var index in customProperties) {
                        if (typeof customProperties[index] !== "object") {
		                    if(_PCM.checkEmailRegex(customProperties[index])){
                                string = "not_allowed_to_send_emails";
                            } else {
                                string = customProperties[index];
                            }
                            eventString += index + ": " + string + ", ";
	                    }
                    }
                    if (eventString === ""){
                        eventString = "Path: " + window.location.pathname;
                    }
                    eventInfo['eventLabel'] = eventString;
                    return eventInfo;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            pageDimensions: function (event) {
                try {
                    for (var j = 0, data; data = event.customData[j]; j++) {
                        var dimension = 'dimension' + data.data[data.property].dimensions.ga;
                        var value = false;
                        if (data.dataSource == "DATA_LAYER") {
                            var dataLayerString = data.data[data.property].dataLayer;
                            if (_PCM.verifyDataLayerObject(dataLayerString)) {
                                var dataLayerObj = _PCM.returnDataLayerValue(dataLayerString);
                                if (dataLayerObj) {
                                    if (typeof dataLayerObj !== "object") {
                                        value = dataLayerObj;
                                    }
                                }
                            }
                        } else if (data.dataSource == "PAGE_TITLE") {
                            if (_PCM.verifyObject("document.title")) {
                                value = window.document.title;
                            }
                        }

                        if (!value) {
                            value = "EMPTY";
                        } else {
                            event.fired.googleAnaltics = true;
                            _PCM.send.googleAnalytics.dimensions(dimension, value);
                            //_PCM.send.googleAnalytics.event('PopcornMetrics', 'SET DIMENSION', {eventLabel: 'Dimension: ' + data.property + ', value: ' + value});
                        }
                    }
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            eventDimensions: function(dimensions, scope, customProperties, eventInfo) {
                try {
                    for (var dimension in dimensions) {
                        if (dimensions[dimension].dimensions.ga){
                            _PCM.log('Custom Dimension[' + dimensions[dimension].dimensions.ga + '] is: ' + customProperties[dimension]);
                            if (scope === 'EVERY_HIT') {
                                ga('set','dimension'+ dimensions[dimension].dimensions.ga, customProperties[dimension]);
                            }
                            else {
                                eventInfo['dimension'+ dimensions[dimension].dimensions.ga] = customProperties[dimension];
                            }
                        }
                    }
                    return eventInfo;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            },

            metrics: function(metrics, scope, customProperties, eventInfo) {
                try {
                    for (var metric in metrics) {
                        if (metrics[metric].metrics.ga){
                            _PCM.log('Custom Metric [' + metrics[metric].metrics.ga + '] is: ' + customProperties[metric]);
                            if (scope === 'EVERY_HIT') {
                                ga('set','metric'+ metrics[metric].metrics.ga, Number(customProperties[metric]) );
                            }
                            else {
                                eventInfo['metric'+ metrics[metric].metrics.ga] = Number(customProperties[metric]);
                            }
                        }
                    }
                    return eventInfo;
                }
                catch (e) {
                    _PCM.registerError("PCM", e);
                    _PCM.log("Error in PCM" + e.message, "error");
                    // HANDLE EXCEPTION BLOCK HERE
                }
            }
        }
    },

    findParentForm: function(el) {
        try {
            // Check if element is inside a link (e.g. an image inside a link)
            // NOTE: If no link or form found, stops at BODY
            while(el && (typeof el.tagName == 'undefined' || !_PCM.isTagName(el,'FORM') )) {
                el = el.parentNode;
                if (el != null) {
                    if (_PCM.isTagName(el,'BODY') ||_PCM.isTagName(el,'FORM')) {
                        return el;
                    }
                } else {
                    return document.body;
                }
            }
            return el;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkForParentAnchorTag: function(el) {
        try {
            // Check if element is inside a link (e.g. an image inside a link)
            // NOTE: If no link or form found, stops at BODY

            var original = el;
            while(el && (typeof el.tagName == 'undefined' || !_PCM.isTagName(el,'A') || !el.href)) {
                el = el.parentNode;
                if (el != null) {
                    if (_PCM.isTagName(el,'A') || el.href) {
                        return el;
                    }
                    if (_PCM.isTagName(el,'BODY') || el.href) {
                        return original;
                    }
                }
                return original;
            }
            return original;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    setPcmTrackAttribute: function(element) {
        try {
            if (_PCM.findParentForm(element).tagName.toUpperCase() === 'FORM') {
                element.setAttribute("_pcm-track-type", "form");
            }
            else if (_PCM.checkForParentAnchorTag(element).tagName.toUpperCase() === 'A') {
                var anchor = _PCM.checkForParentAnchorTag(element);
                var navType = 'basic';
                if (anchor.href) {
                    if (!_PCM.startsWith(anchor.getAttribute("href"),'#') && anchor.getAttribute("href") !== '' && anchor.getAttribute('href').indexOf("void") === -1) {
                        navType = 'nav';
                    }
                }
                element.setAttribute("_pcm-track-type", navType);
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkIfContainsIdFields: function (properties) {
        try {
            for (property in properties) {
                if (property.indexOf("usr_field_id") !== -1) {
                    return true;
                }
            }
            return false;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    createUserCredentials: function(user){
        try {
            var containsId = _PCM.checkIfContainsIdFields(user);
            var hash_id = false;
            if (containsId) {
                // encode ids
                for (property in user) {
                    if (property.indexOf("usr_field_id") !== -1) {
                        if (user[property] !== false) {
                            hash_id = _PCM.encodeMd5(user[property]);
                            user[property] = hash_id;
                        }
                    }
                }

                // set cookie id
                if ("usr_field_id" in user) {
                    hash_id = user["usr_field_id"];
                } else if ("usr_field_id_login" in user) {
                    hash_id = user["usr_field_id_login"];
                } else if ("usr_field_id_email" in user) {
                    hash_id = user["usr_field_id_email"];
                }
                _PCM.cookie.set("_pcm_id", hash_id, 360, true);
                _PCM.set.pcm.userId(hash_id);
            }
            return true;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getMultipleElementsContainer: function (targetNode, parentContainerObj) {
        try {
            var multipleElements = false;
            if (parentContainerObj.multipleElements == true){
                if (parentContainerObj.parentContainerIndex != undefined) {
                    var containerNode = targetNode;
                    var index = parentContainerObj.parentContainerIndex
                    while (index>0) {
                        containerNode = containerNode.parentElement;
                        index--;
                    }
                    multipleElements = true;
                }
            }
            return {containerNode: containerNode, multipleElements: multipleElements};
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getElementsValues: function(objects, targetNode, parentContainerObj) {
        try {

            // defining Functions
            function getElementObj (object, multipleElementsObj) {
                if (typeof object === "string"){
                    if(object.indexOf("selector=") == 0){
                        object = document.querySelector(object.split("selector=")[1]);
                    } else if(object.indexOf("selector.container=") == 0){
                        if (multipleElementsObj.multipleElements == true){
                            object = multipleElementsObj.containerNode.querySelector(object.split("selector.container=")[1]);
                        } else {
                            object = "unable to get property";
                        }
                    } else if (object.indexOf("dataLayer=") == 0) {
                        var dataLayerVariable = object.split("dataLayer=")[1];
                        if (dataLayerVariable !== "") {
                            //if(_PCM_settings.settings.dataLayerObj){
                            // var dataLayerObj = _PCM_settings.settings.dataLayerObj;
                            if (_PCM.verifyDataLayerObject(dataLayerVariable)){
                                var dataLayerValue = _PCM.returnDataLayerValue(dataLayerVariable);
                                if (_PCM.objectExists(dataLayerValue)) {
                                    object = dataLayerValue;
                                //if (dataLayerObj[dataLayerVariable]){
                                //    object = dataLayerObj[dataLayerVariable];
                                } else {
                                    object = false;
                                    _PCM.log("Data Layer Variable =" + dataLayerVariable + " not available");
                                }
                            } else {
                                object = false;
                                _PCM.log("Data Layer Object not available");
                            }
                        } else {
                            object = false;
                            _PCM.log("Data Layer Object not available");
                        }
                    }
                }
                return object
            };

            function getElementValue (object) {
                if (typeof object === "object" && object !== null){
                    var tagName = object.tagName;
                    if (tagName === "SELECT"){
                        return object.selectedIndex == -1 ? "none" : object.options[object.selectedIndex].text;
                    } else if (tagName === "INPUT"){
                        if (object.type === "checkbox"){
                            if (object.checked){
                                return "checked: true";
                            } else {
                                return "checked: false";
                            }
                        } else if (object.type === "radio"){
                            if (object.checked){
                                return "selected: true";
                            } else {
                                return "selected: false";
                            }
                        } else {
                            return  object.value;
                        }
                    } else if (tagName === "TEXTAREA"){
                        return  object.value;
                    } else if (_PCM.indexOf.call(_PCM.elementPropertyType, tagName.toLowerCase()) !== -1){
                        return  object.innerText;
                    }
                } else if (typeof object === "string" || typeof object === "boolean") {
                    return object;
                }
            };

            function getSpecialPropertiesValues(index, object) {
                // Just REVENUE for now
                if (index.indexOf("=") !== -1) {
                    if (index.split("=")[0] == "REVENUE"){
                        var revenue = 0;
                        if (object !== null && object !== undefined && object !== "") {
                            revenue = object.match(/[-+]?\d*(\.|\,)\d+|\d+/ig);
                            if( Object.prototype.toString.call( revenue ) === '[object Array]' ) {
                                revenue = revenue[0];
                            }
                            if (typeof revenue == "string") {
                                revenue = revenue.replace(",",".");
                                revenue = parseFloat(revenue);
                                return revenue;
                            }
                        }
                    }
                }
                return object;
            };

            // End of functions

            var multipleElementsObj = {multipleElements: false, containerNode: false};
            if (parentContainerObj !== undefined && targetNode !== undefined) {
                multipleElementsObj = _PCM.getMultipleElementsContainer(targetNode, parentContainerObj);
            }

            var valuesObjects = {};

            for (var index in objects){
                // get Element from selector
                objects[index] = getElementObj(objects[index], multipleElementsObj);
                // get Values from the Element
                valuesObjects[index] = getElementValue(objects[index]);

                // get Special Properties Values
                valuesObjects[index] = getSpecialPropertiesValues(index, valuesObjects[index]);

            }
            return valuesObjects;

        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }

    },


    waitForm: function(ms) {
        try {
            ms += new Date().getTime();
            while (new Date() < ms){}
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    startsWith: function(str, find) {
        try {
            return str.indexOf(find) == 0;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    sameTab: function(el, eventAction, evt) {
        try {
            return eventAction === 'click' && el.target !== '_blank' && !_PCM.specialKey(evt) ;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    isTagName: function(el, type) {
        try {
            if (el){
                if (typeof el.tagName !== "undefined") {
                    return el.tagName.toUpperCase() == type.toUpperCase();
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkEmailRegex: function(email){
        try {
            var regex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ig);
            return regex.test(email);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    specialKey: function(e) {
        try {
            // NOTE: Ignoring event button https://developer.mozilla.org/en-US/docs/Web/API/event.button
            if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) {
                return true;
            }
            if (e.which == 2) {
                return true;
            }
            return false;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    registerError: function(type, error, eventData) {
        try {
            if (!eventData) {
                eventData = {
                    trackingRequestId: null,
                    eventName: null
                }
            }
            var sessionData = _PCM.get.pcm.sessionProperties();
            data = {
                eventName: eventData.eventName,
                trackingRequestId: eventData.trackingRequestId,
                sessionProperties: sessionData.sessionProperties,
                path: sessionData.path,
                errors: [{
                    tool: type,
                    message: error.message,
                    name: error.name,
                    stack: error.stack
                }]
            };
            var domainId = _PCM.get.pcm.domainId();
            var url = '//popcornmetricsendpoint.herokuapp.com/trackingerrors/';
            if (btoa) {
                data = btoa(encodeURIComponent(escape(JSON.stringify(data))));
	            var request = _PCM.createCORSRequest('GET', url + domainId + "/?data=" + data);
	            if (request) {
                    request.send();
	            }
            }
        }
        catch (e) {
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    createCORSRequest: function(method, url) {
	    try {
            var xhr = new XMLHttpRequest();
	        if ("withCredentials" in xhr) {
		        xhr.open(method, url, true);
	        } else if (typeof XDomainRequest !== "undefined") {
		        xhr = new XDomainRequest();
		        xhr.open(method, url);
	        } else {
		        xhr = null;
	        }
	        return xhr;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    registerEvent: function(eventData, trackingRequestId) {
        try {
            if (btoa) {
                var domainId = _PCM.get.pcm.domainId();
                var url = '//popcornmetricsendpoint.herokuapp.com/countevent/';
                _PCM.log('Logging event to [_pcm]: ' + eventData.eventName + ", eventData: " + JSON.stringify(eventData));
                eventData = btoa(encodeURIComponent(escape(JSON.stringify(eventData))));
	            var request = _PCM.createCORSRequest('GET', url + domainId + "/" + trackingRequestId + "/?data=" + eventData);
	            if (request) {
                    request.send();
	            }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getCurrentPath: function() {
        try {
            var path = window.location.pathname;
            return path;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getBrowserName: function() {
        try {
            var sBrowser = "unknown";
            var sUsrAg = navigator.userAgent;

            if(sUsrAg.indexOf("Chrome") > -1) {
                sBrowser = "Google Chrome";
            } else if (sUsrAg.indexOf("Safari") > -1) {
                sBrowser = "Apple Safari";
            } else if (sUsrAg.indexOf("Opera") > -1) {
                sBrowser = "Opera";
            } else if (sUsrAg.indexOf("Firefox") > -1) {
                sBrowser = "Mozilla Firefox";
            } else if (sUsrAg.indexOf("MSIE") > -1) {
                sBrowser = "Microsoft Internet Explorer";
            }
            return sBrowser;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getOSName: function() {
        try {
            var oSName="Unknown OS";
            if (navigator.appVersion.indexOf("Win")!=-1) oSName="Windows";
            if (navigator.appVersion.indexOf("Mac")!=-1) oSName="MacOS";
            if (navigator.appVersion.indexOf("X11")!=-1) oSName="UNIX";
            if (navigator.appVersion.indexOf("Linux")!=-1) oSName="Linux";
            return oSName;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    handleMessages: function(e) {
        try {
      //    console.log("in handleMessages!");
            if (e.data.scope !== null && e.data.scope !== undefined){
                if (e.data.scope == "popcornlib"){
                    if (e.data.origin !== null && e.data.origin !== undefined){
                        if (e.origin == e.data.origin){
                            if (e.data.message == "SEND_EVENT"){
                                _PCM.respondiFrameMessage(e);
                            }
                        }
                    }
                } else if (e.data.scope == "editorlib"){
                    if (e.data.message == "CHECK_IF_SCRIPT_IS_INSTALLED_AND_START_TRACKING"){
                        _PCM.getEditorLib(e, e.data.debug);
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    respondiFrameMessage: function(e){
        try {
            _PCM.sendEvents(null, e.data.eventObj);
            _PCM.waitForm(_PCM.delay);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    cacheBustingTimestamp: function() {
        try {
            var date = new Date();
            var ms = date.getTime().toString();
            ms = ms.slice(0,7) + "000000";
            return ms;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getEditorLib: function(e, debug){
        try {
            /* Get Editor Lib */
            function editorLib(u, debug){
                var d = document, p = '//localhost:8000/';
                if (debug) {
                    if (window.location.origin.indexOf("https") !== 0) {
                        p = '//localhost:8000/';
                    }
                    u = 'static/js/editorlib_unchange.js';
                }
                var s = d.createElement('script');s.type='text/javascript';s.async=true;s.src=p+u+'?v=' + _PCM.cacheBustingTimestamp();
                var e = d.getElementsByTagName('script')[0]; e.parentNode.insertBefore(s,e);
            };
            editorLib('static/js/editorlib_unchange.js', debug);

            function whenAvailable(name, callback) {
                var interval = 10;
                window.setTimeout(function() {
                    if (window[name]) {
                        callback(window[name]);
                    } else {
                        window.setTimeout(arguments.callee, interval);
                    }
                }, interval);
            };

            whenAvailable ("_PCM_editor", function loadEditorLib() {
                window._PCM_editor.start(e);
            });
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    whenTagAvailable: function (tag, callback) {
        try {
            var interval = 10;
            window.setTimeout(function() {
                if (document.getElementsByTagName(tag).length) {
                    callback(true);
                } else {
                    window.setTimeout(arguments.callee, interval);
                }
            }, interval);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    messageEventListener: function(callback) {
	    try {
        console.log("in messageEventListener!");
            var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	        var eventer = window[eventMethod];
	        var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
        //  console.log("messageEvent=" + messageEvent);
        //  console.log("callback=" + callback);
	        eventer(messageEvent, callback, false);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    indexOf: function (needle) {
        try {
            if(typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1, index = -1;

                    for(i = 0; i < this.length; i++) {
                        if(this[i] === needle) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
            }
            return indexOf.call(this, needle);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    setNavigationDelay: function() {
        try {
            var browser = _PCM.getBrowserName();
            if (browser == "Apple Safari") {
                if (_PCM_settings.settings.intercom.isIntercomEnabled) {
                    _PCM.delay = 300;
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    addPageEvent: function (newEvent) {
        try {
            for (var i = 0, condition; condition = newEvent.path[i]; i++) {
                newEvent.path[i].pattern = new RegExp (condition.pattern, 'i');
                newEvent.path[i].matchPath = this.assignMatchPath(condition.type);
            }
            newEvent.fired = {};
            for (var tool in newEvent.tools) {
                if (newEvent.tools[tool] == true) {
                    newEvent.fired[tool] = false;
                }
            }
            this.eventsBucket.pageEvents.push(newEvent);
            return newEvent;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    addEvent: function (newEvent) {
        try {
            for (var i = 0, condition; condition = newEvent.path[i]; i++) {
                newEvent.path[i].pattern = new RegExp (condition.pattern, 'i');
                newEvent.path[i].matchPath = this.assignMatchPath(condition.type);
            }
            newEvent.isBlocked = false;
            newEvent.firedElements = [];
            this.eventsBucket.allEvents.push(newEvent);
            return newEvent;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    filterPageEventsBucket: function(bucket) {
        try {
            var currentPathBucket = [];
            for (var i = 0, event; event = bucket[i]; i++) {
                for (tool in event.fired) {
                    if (!event.fired[tool]){
                        if (this.matchesPath(event.path)) {
                            currentPathBucket.push(event);
                        }
                    }
                }
            }
            return currentPathBucket;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    filterEventsBucket: function(bucket) {
        try {
            var currentPathBucket = [];
            if (_PCM.checkIfPathHasChanged()) {
                this.eventsBucket.currentPath = this.splitUrl();
                for (var i = 0, event; event = bucket[i]; i++) {
                    if (this.matchesPath(event.path)) {
                        currentPathBucket.push(event);
                    } else {
                        for (var j = 0, node; node = event.firedElements[j]; j++) {
                            node.removeAttribute('_pcm-request-id');
                            node.removeAttribute('_pcm-track-type');
                            event.firedElements.splice(j, 1);
                            _PCM.removeListener(node);
                            _PCM.log("removed Node for event: " + event.eventName);
                        }
                    }
                }
                this.eventsBucket.currentPathEvents = currentPathBucket;
                return currentPathBucket;
            } else {
                return _PCM.eventsBucket.currentPathEvents;
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    createMutationObserver: function() {
        try {
            var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
            if (MutationObserver) {
                _PCM.whenTagAvailable('body', function () {
                    var config = {attributes: false, childList: true, subtree: true},
                    target = document.getElementsByTagName('body')[0],
                    observer;

                    observer = new MutationObserver(function(e) {
                        _PCM.onMutation.call(this, e);
                        _PCM.log("mutation record");
                    });
                    if (typeof target !== "object") {
                        target = document.body;
                    }
                    if (typeof target == "object" && target !== null) {
                        if (typeof target.tagName == "string") {
                            if (target.tagName.toLowerCase() == "body") {
                                observer.observe(target, config);
                            }
                        }
                    }
                });
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    onMutation: function(mutations) {
        try {
            _PCM.processUnmatchedPageEvents();
            if (_PCM.checkIfPathHasChanged()) {
                var eventsBucket = _PCM.filterEventsBucket(_PCM.eventsBucket.allEvents);
                setTimeout(function(args) {
                    try {
                        _PCM.checkUnmatchedEvents(args[0]);
                    }
                    catch (e) {
                        _PCM.registerError("PCM", e);
                        _PCM.log("Error in PCM" + e.message, "error");
                        // HANDLE EXCEPTION BLOCK HERE
                    }
                }.bind(this, [eventsBucket]), 1000);
            }
            var addedNodes = [];
            var removedNodes = [];
            mutations.forEach(function( mutation ) {
                if( mutation.removedNodes !== null && mutation.removedNodes.length > 0 ) {
                    removedNodes.push({removedNodes: mutation.removedNodes, target: mutation.target, addedNodes: []});
                }
                if (mutation.addedNodes !== null && mutation.addedNodes.length > 0) {
                    addedNodes.push ({addedNodes: mutation.addedNodes, target: mutation.target, removedNodes: []});
                }
            });
            var newMutations = [].concat(removedNodes, addedNodes);
            _PCM.mutationCount++;
            var mutationId = _PCM.mutationCount;
            _PCM.log("mutation record with id: " + mutationId + " ready for process, total mutations: " + newMutations.length);
            _PCM.mutationsBucket.push({id: mutationId, mutations : newMutations})
            _PCM.processMutationsQueue(mutationId, newMutations, this);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    processMutationsQueue: function (id, mutations, scope) {
        try {
            (function next() {
                _PCM.log("mutation id: " + id + ", mutations length: " + mutations.length);
                if(mutations.length > 0) {
                    if (mutations.length > 40) {
                        _PCM.log('processing mutation with querySelector, id: ' + id);
                        _PCM.attachToElementsRendered( _PCM.eventsBucket.currentPathEvents, document);
                    } else {
                        var mutation = mutations.shift();
                        _PCM.log ("mutation Object for id: " + id);
                        _PCM.processMutation.apply(scope || {}, [next].concat(mutation, Array.prototype.slice.call(arguments, 0)));
                    }
                }
            })();
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    processMutation: function (callback, mutation) {
        try {
            var newNodes    = mutation.addedNodes;
            var removedNodes    = mutation.removedNodes;
            var targetNode = mutation.target;
            _PCM.log('added Nodes length: ' + newNodes.length + " removed Nodes length: " + removedNodes.length);
            if( removedNodes !== null && removedNodes.length > 0 ) {
                setTimeout(function(args) {
                    try {
                        var nodes = args[0];
                        var callback = args[1];
                        _PCM.checkRemovedNodesRecursively(nodes);
                        callback();
                    }
                    catch (e) {
                        _PCM.registerError("PCM", e);
                        _PCM.log("Error in PCM" + e.message, "error");
                        // HANDLE EXCEPTION BLOCK HERE
                    }
                }.bind(this, [removedNodes, callback]), 1);
            }

            if( newNodes !== null && newNodes.length > 0 ) {
                var eventsBucket = _PCM.eventsBucket.currentPathEvents;
                var totalNodes = newNodes.length;
                if (totalNodes > 40) {
                    _PCM.log('processing mutation with querySelector');
                    _PCM.attachToElementsRendered(eventsBucket, targetNode);
                    callback();
                } else {
                    for (var i=0, node; node = newNodes[i]; i++) (function(i) {
                        setTimeout(function(args){
                            try {
                                if (_PCM.isElement(args[0])){
                                    _PCM.checkChildNodesRecursively(_PCM.toArray(args[0]), args[1]);
                                }
                                if (args[2] == i+1) {
                                    var callback = args[3];
                                    callback();
                                }
                            }
                            catch (e) {
                                _PCM.registerError("PCM", e);
                                _PCM.log("Error in PCM" + e.message, "error");
                                // HANDLE EXCEPTION BLOCK HERE
                            }
                        }.bind(this, [node, eventsBucket, totalNodes, callback]), 1);
                    })(i);
                }
            }

        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkChildNodesRecursively: function(nodes, eventsBucket) {
        try {
            for (var j=0, event; event = eventsBucket[j]; j++){
                for (var i=0, node; node = nodes[i]; i++) {
                    //if (node.tagName !== "DIV") {
                    if (_PCM.matchesElement(node, event)) {
                        if(event.firedElements.indexOf(node) == -1){
                            if (!node.hasAttribute("_pcm-track-type")) {
                                _PCM.attachEvents(_PCM.toArray({ element: node, eventData: event, DOMready: false }));
                            }
                        }
                    }
                    //}
                    if (node.childNodes.length > 0) {
                        var eventArray = _PCM.toArray(event);
                        _PCM.checkChildNodesRecursively(node.childNodes, eventArray);
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkRemovedNodesRecursively: function(nodes) {
        try {
            for (var i=0, node; node = nodes[i]; i++) {
                if (_PCM.isElement(node)) {
                    if (node.hasAttribute("_pcm-track-type")) {
                        _PCM.unbindNode(node);
                    }
                    if (node.childNodes.length > 0) {
                        _PCM.checkRemovedNodesRecursively(node.childNodes);
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    attachToElementsRendered: function(eventsBucket, scope){
        try {
            for (var j=0, eventData; eventData = eventsBucket[j]; j++) (function(j) {
                setTimeout(function(args){
                    try {
                        var eventData = args[0];
                        var scope = args[1];
                        if (scope == undefined || scope == null) { scope = document };
                        var elements = scope.querySelectorAll(eventData.selector);
                        if (elements.length > 0){
                            var eventsToAttach = [];
                            for (var i=0, element; element = elements[i]; i++){
                                if (!element.hasAttribute("_pcm-track-type") || element.getAttribute('_pcm-request-id') !== eventData.trackingRequestId) {
                                    if (eventData.elementContent !== undefined && eventData.elementContent !== null) {
                                        if (!eventData.eventData.container.multipleElements) {
                                            if (eventData.elementContent.innerText) {
                                                if (typeof element.textContent !== "undefined") {
                                                    if ( [element.textContent.replace(/\n/ig,""), element.textContent.replace(/\W+/ig,"")].indexOf(eventData.elementContent.innerText) == -1 ) {
                                                        continue;
                                                    }
                                                }
                                            }
                                        }
                                        if (eventData.elementContent.childElementCount) {
                                            if (eventData.elementContent.childElementCount !== element.childElementCount) {
                                                continue;
                                            }
                                        }
                                    }
                                    eventsToAttach.push({element: elements[i], eventData: eventData, DOMready: true});
                                }
                            }
                            if (eventsToAttach.length > 0){
                                _PCM.attachEvents(eventsToAttach);
                            }
                        }
                    }
                    catch (e) {
                        _PCM.registerError("PCM", e);
                        _PCM.log("Error in PCM" + e.message, "error");
                        // HANDLE EXCEPTION BLOCK HERE
                    }
                }.bind(this, [eventData, scope]), 1);
            })(j);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    checkUnmatchedEvents: function(events) {
        try {
            var unattachedEvents = [];
            for (var i = 0, event; event = events[i]; i++) {
                if (event.firedElements.length < 1) {
                    unattachedEvents.push(event);
                }
            }
            if (unattachedEvents.length > 0) {
                _PCM.attachToElementsRendered(unattachedEvents, document);
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    unbindNode: function(node) {
        try {
            var trackingRequestId = node.getAttribute('_pcm-request-id');
            if (trackingRequestId !== null){
                for (var i = 0, event; event = _PCM.eventsBucket.allEvents[i]; i++) {
                    if (trackingRequestId === event.trackingRequestId) {
                        for (var j = 0, element; element = event.firedElements[j]; j++) {
                            if (element == node){
                                event.firedElements.splice(j, 1);
                                _PCM.removeListener(node);
                                _PCM.log("removed Node for event: " + event.eventName);
                                break;
                            }
                        }
                        break;
                    }
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    removeListener: function(node) {
        try {
            for (var i = 0, listener; listener = _PCM.registeredListeners[i]; i++) {
                if (listener.element === node) {
                    _PCM.listener.remove(listener.handler);
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    attachEvents: function(events) {
        try {
            for (var i=0, event; event = events[i]; i++){
                var eventData = event.eventData;
                var node = event.element;
                node.setAttribute('_pcm-request-id', eventData.trackingRequestId);
                eventData.firedElements.push(node);
                window._PCM.attachToElement(node, eventData);
                if (event.DOMready){
                    _PCM.log("eventName = " + eventData.eventName + " | DOM Ready");
                } else {
                    _PCM.log("eventName = " + eventData.eventName + " | mutation");
                }
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    toArray: function(elements) {
        try {
            if (elements.constructor !== Array) {
                var array = [elements];
                return array;
            }
            return elements;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    matchesElement: function(el, event){
        try {
            var selector = event.selector;
            if (event.elementContent !== undefined && event.elementContent !== null) {
                if (!event.eventData.container.multipleElements) {
                    if (event.elementContent.innerText) {
                        if (typeof el.textContent !== "undefined") {
                            if ( [el.textContent.replace(/\n/ig,""), el.textContent.replace(/\W+/ig,"")].indexOf(event.elementContent.innerText) == -1 ) {
                                return false;
                            }
                        }
                    }
                }
                if (event.elementContent.childElementCount) {
                    if (event.elementContent.childElementCount !== el.childElementCount) {
                        return false;
                    }
                }
            }
            var matches = HTMLElement.prototype.matches || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector
                || HTMLElement.prototype.msMatchesSelector;
            return el instanceof HTMLElement && matches.call(el, selector);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    matchesPath: function(path){
        try {
            var fireMatches = false;
            var dontFireMatches = false;
            var matches = false;
            for (var i = 0, condition; condition = path[i]; i++) {
                if (condition.include) {
                    // If include is true means FIRE on the page if matches
                    if(condition.pattern.test(condition.matchPath())){
                        fireMatches = true;
                    }
                } else {
                    // If include is false means DONT FIRE on the page if matches
                    if(condition.pattern.test(condition.matchPath())){
                        dontFireMatches = true;
                    }
                }
            }
            if (dontFireMatches) {
                matches = false;
            } else {
                if (fireMatches) {
                    matches = true;
                }
            }
            return matches;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    cookie: {
        set: function (name, value, days, cross_subdomain){
            try {
                var cdomain = "", expires = "";
                if (cross_subdomain) {
                    var matches = document.location.hostname.match(/[a-z0-9][a-z0-9\-]+\.[a-z\.]{2,6}$/i)
                    , domain = matches ? matches[0] : '';
                    if (document.location.hostname.split('.').length > 3) {
                        domain = document.location.hostname;
                    }
                    cdomain   = ((domain) ? "; domain=." + domain : "");
                }
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime()+(days*24*60*60*1000));
                    var expires = "; expires="+date.toGMTString();
                }
                document.cookie = name+"="+value+expires+"; path=/"+cdomain;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },
        get: function (name) {
            try {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for(var i=0;i < ca.length;i++) {
                    var c = ca[i];
                    while (c.charAt(0)==' ') c = c.substring(1,c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
                }
                return null;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },
        remove: function (name, cross_subdomain){
            try {
                this.set(name,"",-1, cross_subdomain);
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        }
    },

    assignMatchPath: function (type) {
        try {
            if (type.query) {
                return this.getPathObj.query;
            }
            if (type.hash) {
                return this.getPathObj.hash;
            }
            return this.getPathObj.path;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    getPathObj: {
        path: function() {
            try {
                return _PCM.eventsBucket.currentPath.path;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        query: function() {
            try {
                return _PCM.eventsBucket.currentPath.pathWithQuery;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        },

        hash: function() {
            try {
                return _PCM.eventsBucket.currentPath.pathWithHash;
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        }
    },

    isElement: function(o){
        try {
            return (
                typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
                o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
            );
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    splitUrl: function() {
        try {
            var origin = window.location.origin;
            var url = window.location.href;
            var fullPath = url.split(origin)[1];
            return {path: getPath(fullPath, "path"),
                    pathWithHash: getPath(fullPath, "hash"),
                    pathWithQuery: getPath(fullPath, "query")
                   };
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }

        function getPath(url, type) {
            try {
                if (url !== null && url !== undefined) {
                    var indexHash = (url.indexOf('#') > 0) ? url.indexOf('#') : url.length;
                    var indexQuery = (url.indexOf('?') > 0) ? url.indexOf('?') : url.length;
                    if (type == "hash") {
                        if (indexHash > indexQuery) {
                            return url.substring(0, indexQuery) + url.substring(indexHash);
                        } else {
                            return url.substring(0, indexQuery);
                        }
                    }
                    if (type == "path") {
                        if (indexHash > indexQuery) {
                            return url.substring(0, indexQuery);
                        } else {
                            return url.substring(0, indexHash);
                        }
                    }
                    if (type == "query") {
                        return url;
                    }
                }
            }
            catch (e) {
                _PCM.registerError("PCM", e);
                _PCM.log("Error in PCM" + e.message, "error");
                // HANDLE EXCEPTION BLOCK HERE
            }
        };
    },

    checkIfPathHasChanged: function() {
        try {
            if (JSON.stringify(this.splitUrl()) === JSON.stringify(this.eventsBucket.currentPath)) {
                return false;
            } else {
                return true;
            }
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    createMd5: function(){
        try {
            // CREATE MD5 function -- credits to blueimp.net
            // use as _PCM.encodeMd5(string)
            !function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}a.encodeMd5=t}(this);
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    browserVersion: function(){
        try {
            var ua= navigator.userAgent, tem,
            M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if(/trident/i.test(M[1])){
                tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE '+(tem[1] || '');
            }
            if(M[1]=== 'Chrome'){
                tem= ua.match(/\bOPR\/(\d+)/)
                if(tem!= null) return 'Opera '+tem[1];
            }
            M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
            if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
            return M;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    },

    objectExists: function (object) {
        if (object !== null && object !== "null" && object !== undefined && object !== "undefined") {
            return true;
        } else {
            return false;
        }
    },

    supportedBrowser: function(){
        try {
            // Allowed Versions
            // Internet Explorer >= 9
            // Chrome >= 4
            var browser = _PCM.browserVersion();
            if (browser[0] == "MSIE") {
                if (parseInt(browser[1]) < 9) {
                    return false;
                }
            } else if (browser[0] == "Chrome") {
                if (parseInt(browser[1]) < 4 ) {
                    return false;
                }
            }
            return true;
        }
        catch (e) {
            _PCM.registerError("PCM", e);
            _PCM.log("Error in PCM" + e.message, "error");
            // HANDLE EXCEPTION BLOCK HERE
        }
    }

};

console.log("b4 new proto");
window._PCM = new _PCM_prototype();

try {
  console.log("in try b4 messageEv");
    _PCM.messageEventListener(_PCM.handleMessages);
}
catch (e) {
    _PCM.registerError("PCM", e);
    _PCM.log("Error in PCM" + e.message, "error");
    // HANDLE EXCEPTION BLOCK HERE
}
