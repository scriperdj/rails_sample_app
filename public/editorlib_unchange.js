function _pcmEditorPrototype() {};

_pcmEditorPrototype.prototype = {
    getCurrentTarget: {},
    events: [],
    preventBubbling: false,
    hoverOverlay: {},
    hoverFormOverlay: {},
    repeatedOverlays: [],
    propertyOverlay: {},
    trackingStatus: "EVENTS",
    blockOverlays: false,
    advancedTracking: {
        div: false,
        span: false,
        input: false,
        select: false
    },
    elementTypes:  ['select', 'div', 'span', 'select', 'button', 'input', 'a', 'textarea', 'img', 'video'],
    propertyTypes: ['strong', 'select', 'textarea', 'input', 'p', 'a', 'div', 'span','h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'caption', 'legend', 'th', 'title' ],
    getParentUrl: null,

    start:  function (e){
        this.eventListener(window, "message", this.respondMessage);
        this.initializeJquery();
        this.respondMessage(e);
        this.addOverlaysCSS();
        this.createHoverOverlay();
        this.createHoverFormOverlay();
        this.createBackgroundOverlays();
        this.createPropertyOverlay();
        this.checkIfElementsAreVisible();
    },

    elementOrParentIsFixed: function(element) {
        if (_PCM_editor.jQuery) {
            var pcmJquery = _PCM_editor.jQuery;
        } else {
            var pcmJquery = $;
        }

        if (typeof pcmJquery !== "undefined") {
            var $element = pcmJquery(element);
            var $checkElements = $element.add($element.parents());
            var isFixed = false;
            $checkElements.each(function(){
                if (pcmJquery(this).css("position") === "fixed") {
                    isFixed = true;
                    return isFixed;
                }
            });
        } else {
            return false;
        }
        return isFixed;
    },

    checkIfElementsAreVisible: function() {
        setInterval(function() {
            if (_PCM_editor.jQuery) {
                var pcmJquery = _PCM_editor.jQuery;
            } else {
                var pcmJquery = $;
            }

            var events = _PCM_editor.events;
            for (var i = 0, event; event = events[i]; i++) {
                for (var j = 0, object; object = event.overlays[j]; j++) {
                    var id = object.id;
                    var elements = document.querySelectorAll('[data-pcm-overlay-id="' + id + '"]');
                    if (elements.length > 0) {
                        for (var k = 0, el; el = elements[k]; k++) {
                            if ( pcmJquery(el).is(":visible") || pcmJquery(el).children().is(":visible") ) {
                                pcmJquery(object.container).show();
                                _PCM_editor.setOverlay(el, object,false);
                            } else {
                                pcmJquery(object.container).hide();
                            }
                        }
                    } else {
                        pcmJquery(object.container).hide();
                    }
                }
            }
        }, 100);
    },

    eventListener: function(el, event, callback) {
        var eventMethod = el.addEventListener ? "addEventListener" : "attachEvent";
        var eventer = el[eventMethod];
        var event = eventMethod == "attachEvent" ? "on" + event : event;
        eventer.call(el, event, callback, false);
    },

    addOverlaysCSS: function(){
        var sheet = (function() {
            var style = document.createElement("style");
            style.appendChild(document.createTextNode(""));
            document.head.appendChild(style);
            return style.sheet;
        })();
        sheet.insertRule(".pcm-overlay { border: none !important; filter: alpha(opacity=20) !important; margin:0 !important; min-height: 0 !important; min-width: 0 !important; opacity: 0.20 !important; padding: 0 !important;} ", 0);
        sheet.insertRule(".pcm-overlay-background { border: none !important; filter: alpha(opacity=50) !important; margin:0 !important; min-height: 0 !important; min-width: 0 !important; opacity: 0.50 !important; padding: 0 !important; background: black !important; z-index: 1000000000 !important; pointer-events: none !important; position: fixed !important}", 0);
        sheet.insertRule(".pcm-overlay-container {border: none !important; margin:0 !important; padding: 0 !important; pointer-events: none !important} ", 0);
        sheet.insertRule(".pcm-outline-bar { border: none !important; margin: 0 !important; min-height: 0 !important; min-width: 0 !important; padding: 0 !important; } ", 0);
        sheet.insertRule(".pcm-outline-bar-shadow { rgb(153, 153, 153) 3px 3px 5px !important; -webkit-box-shadow: rgb(153, 153, 153) 3px 3px 5px !important}", 0);

        sheet.insertRule(".pcm-overlay-container.pcm-saved > .pcm-overlay {background: #3875D7 !important} ", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover > .pcm-overlay {background: rgb(60, 226, 119) !important} ", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover-form > .pcm-overlay {background: white !important; opacity: 0.20 !important; filter: alpha(opacity=20) !important} ", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover-repeated > .pcm-overlay {background: yellow !important; opacity: 0.20 !important; filter: alpha(opacity=20) !important} ", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-property> .pcm-overlay {background: white !important} ", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-saved > .pcm-outline-bar { background: #3875D7 !important}", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover > .pcm-outline-bar { background: rgb(60, 226, 119) !important}", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover-form > .pcm-outline-bar { background: white !important}", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-hover-repeated > .pcm-outline-bar { background: yellow !important}", 0);
        sheet.insertRule(".pcm-overlay-container.pcm-property > .pcm-outline-bar { background: white !important}", 0);
    },

    getEvent: function(id) {
        var events = this.events;
        for (var i = 0, event; event = events[i]; i++){
            if (id == event.id) {
                return event;
            }
        }
        return false;
    },

    removeEvent: function (eventId) {
        var event = this.getEvent(eventId);
        if (event) {
            for (var i = 0, overlay; overlay = event.overlays[i]; i++) {
                overlay.container.parentNode.removeChild(overlay.container);
            }
            this.events = this.events.filter(function(object) {
                return object.id !== event.id;
            });
            var elements = document.querySelectorAll('[data-pcm-event-id="' + eventId + '"]');
            for (var i = 0, element; element = elements[i]; i++) {
                this.setElementLocalId(element, null, null, null);
            }
        }
    },

    addEvent: function(el, formNode, eventId, type) {
        var event = this.getEvent(eventId);
        if (el.getAttribute('data-pcm-overlay-id') == null) {
            var overlayId = this.generateNewLocalId();
            if (!event) {
                event = this.createNewEventObject({id: eventId});
            }
            overlayObject = this.appendEventOverlay(event,  overlayId);
            this.setOverlay(el, overlayObject,false);
            this.setElementLocalId(el, type, eventId, overlayId);
        }
        if (formNode) {
            this.addEvent(formNode, false, eventId, "form");
        }
    },

    createOverlayObject: function() {
        var container = document.createElement("DIV");
        var window = document.createElement("DIV");
        var barTop = document.createElement("DIV");
        var barLeft = document.createElement("DIV");
        var barRight = document.createElement("DIV");
        var barBottom = document.createElement("DIV");

        container.className = "pcm-overlay-container";
        window.className = "pcm-overlay";
        barTop.className = "pcm-outline-bar";
        barLeft.className = "pcm-outline-bar";
        barRight.className = "pcm-outline-bar pcm-outline-bar-shadow";
        barBottom.className = "pcm-outline-bar pcm-outline-bar-shadow";
        container.appendChild(window);
        container.appendChild(barTop);
        container.appendChild(barLeft);
        container.appendChild(barRight);
        container.appendChild(barBottom);

        return {
            container: container,
            window: window,
            bar: {
                top: barTop,
                left: barLeft,
                right: barRight,
                bottom: barBottom
            }
        };
    },

    appendEventOverlay: function(event, overlayId) {
        var overlay = this.createOverlayObject();
        overlay.container.className = "pcm-overlay-container pcm-saved";
        overlay.container.setAttribute('pcm-event-id', event.id);
        overlay.container.setAttribute('pcm-overlay-id', overlayId);
        overlay.id = overlayId;
        document.body.parentNode.insertBefore(overlay.container, document.body.nextSibling);
        event.overlays.push(overlay);
        return overlay;

    },

    createBackgroundOverlays: function() {
        var top = document.createElement("DIV");
        var bottom = document.createElement("DIV");
        var left = document.createElement("DIV");
        var right = document.createElement("DIV");
        top.className = "pcm-overlay-background";
        bottom.className = "pcm-overlay-background";
        left.className = "pcm-overlay-background";
        right.className = "pcm-overlay-background";
        var overlay = {
            top: top,
            bottom: bottom,
            right: right,
            left: left
        }
        document.body.parentNode.insertBefore(overlay.top, document.body.nextSibling);
        document.body.parentNode.insertBefore(overlay.bottom, document.body.nextSibling);
        document.body.parentNode.insertBefore(overlay.left, document.body.nextSibling);
        document.body.parentNode.insertBefore(overlay.right, document.body.nextSibling);
        this.backgroundOverlay = overlay;
    },

    createHoverOverlay: function() {
        var overlay = this.createOverlayObject();
        overlay.container.className = "pcm-overlay-container pcm-hover";
        document.body.parentNode.insertBefore(overlay.container, document.body.nextSibling);
        this.hoverOverlay = overlay;
    },

    createHoverFormOverlay: function() {
        var overlay = this.createOverlayObject();
        overlay.container.className = "pcm-overlay-container pcm-hover-form";
        document.body.parentNode.insertBefore(overlay.container, document.body.nextSibling);
        this.hoverFormOverlay = overlay;
    },

    createRepeatedOverlay: function() {
        var overlay = this.createOverlayObject();
        overlay.container.className = "pcm-overlay-container pcm-hover-repeated";
        document.body.parentNode.insertBefore(overlay.container, document.body.nextSibling);
        overlay.container.setAttribute('pcm-overlay-id', "repeated");
        this.repeatedOverlays.push(overlay);
        return overlay;
    },

    createPropertyOverlay: function() {
        var overlay = this.createOverlayObject();
        overlay.container.className = "pcm-overlay-container pcm-property";
        document.body.parentNode.insertBefore(overlay.container, document.body.nextSibling);
        this.propertyOverlay = overlay;
    },

    createNewEventObject: function(data) {
        var eventObject = {
            id: data.id,
            overlays: []
        };
        this.events.push(eventObject);
        return eventObject;
    },

    setCurrentTarget: function(element, formElement, type) {
        if (formElement) {
            this.getCurrentTarget["form"] = formElement;
        } else {
            this.getCurrentTarget["form"] = false;
        }
        this.getCurrentTarget[type] = element;
    },

    removeCurrentTarget: function() {
        this.getCurrentTarget = {};
    },

    getZindex: function(node) {
        if (node !== null && node !== undefined) {
            var styleProp = "z-index";
            if (window.getComputedStyle) {
                if (document.defaultView.getComputedStyle(node, null) !== null) {
                    var y = document.defaultView.getComputedStyle(node,null).getPropertyValue(styleProp);
                } else {
                    return 0;
                }
            } else if (node.currentStyle) {
                var y = x.currentStyle[styleProp];
            }
            if (y == null || y == "auto") { y = 0 };
            return parseInt(y);
        } else {
            return 0;
        }
    },

    setOverlaysInRepeatedElements: function(selector) {
        var elements = document.querySelectorAll(selector);
        for (var index = 0; index < elements.length; index++){
            var el = elements[index];
            if (el !== null){
                overlayObject = this.createRepeatedOverlay();
                this.setOverlay(el, overlayObject, false);
            }
        }
    },


    setOverlay: function(node, overlay, showBackground){
        if (node !== null && node !== undefined) {
            var box = this.getOffsetRect(node);
            var zIndex = 0;
            var tagName = node.tagName;
            var currentNode = node;
            while (tagName !== 'BODY') {
                var currentIndex = this.getZindex(currentNode);
                if (currentIndex > zIndex) {
                    zIndex = currentIndex;
                }
                currentNode = currentNode.parentElement;
                tagName = currentNode.tagName;
            }
            // store the elements box dimensions and position
            var isFixed = this.elementOrParentIsFixed(node);
            // If the element is fixed in the page set the overlay as fixed
            if (isFixed) {
                overlay.container.style.position = "fixed";
                overlay.window.style.position = "relative";
                overlay.bar.left.style.position = "absolute";
                overlay.bar.right.style.position = "absolute";
                overlay.bar.top.style.position = "absolute";
                overlay.bar.bottom.style.position = "absolute";

                // the top and left position is set to the top of the viewport
                //overlay.window.style.top = box.top + "px";
                //overlay.window.style.left = box.left + "px";
                box.top = box.raw.top;
                box.left = box.raw.left;

            } else {
                overlay.container.style.position = "absolute";
                overlay.window.style.position = "relative";
                overlay.bar.left.style.position = "absolute";
                overlay.bar.right.style.position = "absolute";
                overlay.bar.top.style.position = "absolute";
                overlay.bar.bottom.style.position = "absolute";

            }

            // set the z-index of the overlay to be on top of the element
            overlay.container.style.zIndex = parseInt(zIndex) + 1;
            overlay.window.style.zIndex = parseInt(zIndex) + 1;
            overlay.bar.top.style.zIndex =  parseInt(zIndex) + 1;
            overlay.bar.left.style.zIndex =  parseInt(zIndex) + 1;
            overlay.bar.right.style.zIndex =  parseInt(zIndex) + 1;
            overlay.bar.bottom.style.zIndex =  parseInt(zIndex) + 1;

            // show the container and set his position and size
            overlay.container.style.display = "block";
            overlay.container.style.top = box.top + "px";
            overlay.container.style.left = box.left + "px";
            overlay.window.style.width = box.width + "px";
            overlay.window.style.height = box.height + "px";

            // Top Bar
            overlay.bar.top.style.display = "block";
            overlay.bar.top.style.top = "0px";
            overlay.bar.top.style.left = "0px";
            overlay.bar.top.style.width = parseInt(box.width) + "px";
            overlay.bar.top.style.height = "3px";

            // Left Bar
            overlay.bar.left.style.display = "block";
            overlay.bar.left.style.top = "0px";
            overlay.bar.left.style.left = "0px";
            overlay.bar.left.style.height = parseInt(box.height)  + "px";
            overlay.bar.left.style.width = "3px";

            // Right Bar
            overlay.bar.right.style.display = "block";
            overlay.bar.right.style.top = "0px";
            overlay.bar.right.style.left = box.width + "px";
            overlay.bar.right.style.height = parseInt(box.height)  + "px";
            overlay.bar.right.style.width = "3px";

            // Bottom Bar
            overlay.bar.bottom.style.display = "block";
            overlay.bar.bottom.style.top = box.height+ "px";
            overlay.bar.bottom.style.left = "0px";
            overlay.bar.bottom.style.width = parseInt(box.width) + 3 + "px";
            overlay.bar.bottom.style.height = "3px";
            if (showBackground) {
                this.showOverlayBackground(box);
            }
        }
    },

    showOverlayBackground: function(box) {

        _PCM_editor.backgroundOverlay.top.style.display = "block";
        _PCM_editor.backgroundOverlay.top.style.top = "0px";
        _PCM_editor.backgroundOverlay.top.style.left = "0px";
        _PCM_editor.backgroundOverlay.top.style.height = box.raw.top + "px";
        _PCM_editor.backgroundOverlay.top.style.width = "100vw";

        _PCM_editor.backgroundOverlay.bottom.style.display = "block";
        _PCM_editor.backgroundOverlay.bottom.style.top = parseInt(box.raw.top) + parseInt(box.height) + 3 +"px";
        _PCM_editor.backgroundOverlay.bottom.style.left = "0px";
        _PCM_editor.backgroundOverlay.bottom.style.height = "100vh"; // Needs checking
        _PCM_editor.backgroundOverlay.bottom.style.width = "100vw";

        _PCM_editor.backgroundOverlay.left.style.display = "block";
        _PCM_editor.backgroundOverlay.left.style.top = box.raw.top + "px";
        _PCM_editor.backgroundOverlay.left.style.left = "0px";
        _PCM_editor.backgroundOverlay.left.style.height = parseInt(box.height) + 3 + "px";
        _PCM_editor.backgroundOverlay.left.style.width = box.raw.left + "px";

        _PCM_editor.backgroundOverlay.right.style.display = "block";
        _PCM_editor.backgroundOverlay.right.style.top = box.raw.top + "px";
        _PCM_editor.backgroundOverlay.right.style.left = parseInt(box.raw.left) + parseInt(box.width) + 3 + "px";
        _PCM_editor.backgroundOverlay.right.style.height = parseInt(box.height) + 3 + "px"
        _PCM_editor.backgroundOverlay.right.style.width = "100vw";
    },

    hideOverlayBackground: function() {
        if (!_PCM_editor.blockOverlays) {
            _PCM_editor.backgroundOverlay.top.style.display = "none";
            _PCM_editor.backgroundOverlay.bottom.style.display = "none";
            _PCM_editor.backgroundOverlay.left.style.display = "none";
            _PCM_editor.backgroundOverlay.right.style.display = "none";
        }
    },

    removeRepeatedOverlays: function () {
        for (var i = 0, overlay; overlay = this.repeatedOverlays[i]; i++) {
            overlay.container.parentNode.removeChild(overlay.container);
        }
        this.repeatedOverlays = [];
    },

    hideOverlay: function(overlay){
        if (!_PCM_editor.blockOverlays) {
            overlay.container.style.display = "none";
            overlay.bar.top.style.display = "none";
            overlay.bar.left.style.display = "none";
            overlay.bar.right.style.display = "none";
            overlay.bar.bottom.style.display = "none";
            this.hideOverlayBackground();
        }
    },

    sendMessageToIframes: function(data) {
        var message = data.message;
        var events = data.events;
        var status = data.status;
        var iFrames = document.querySelectorAll("iFrame");
        if (iFrames.length > 0 ){
            for (var i = 0; i < iFrames.length; i++){
                var iFrameSrc = iFrames[i].src;
                if (!_PCM_editor.checkValidSrcRegex(iFrameSrc)){
                    iFrameSrc = '*';
                }
                var iFrameMessage = {destination: window.location.origin, message: message, events: events, status: status};
                if (iFrames[i].getBoundingClientRect().height != 0 && iFrames[i].getBoundingClientRect().width != 0) {
                    if (_PCM_editor.validIframe(iFrames[i].src) == true) {
                        iFrames[i].contentWindow.postMessage(iFrameMessage, iFrameSrc);
                    }
                }
            }
        }
    },

    sendMessageFromIframe: function(e) {
        if ((e.data.message == "ANSWER_PROPERTY_SELECTED" || e.data.message == "ANSWER_SELECTED_ELEMENT_DATA") && window.location != window.parent.location){
            var message = e.data;
            message.frameOrigin = window.location.origin;
            var iFrames = document.querySelectorAll("iFrame");
            if (iFrames.length > 0 ){
                for (var i = 0; i < iFrames.length; i++){
                    if (iFrames[i].contentWindow == e.source){
                        var frameRect = iFrames[i].getBoundingClientRect();
                        message.clientX += frameRect.left;
                        message.clientY += frameRect.top;
                    }
                }
            }
            if (_PCM_editor.getParentUrl == null){_PCM_editor.setParentUrl = "http://www.popcornmetrics.com"};
            parent.postMessage(message, _PCM_editor.getParentUrl);
        }
    },

    checkValidSrcRegex: function(string) {
        var regex = new RegExp(/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])?/ig);
        return regex.test(string);
    },

    validIframe: function(src) {
        if (typeof src == "string"){
            if (src.indexOf(['twitter','facebook']) == -1) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    },

    setMessageToParent: function(message){
        return {
            message: message,
            frameOrigin: window.location.origin,
            frameHref: window.location.href,
            frameHash: window.location.hash
        }
    },
    setTrackingStatus: function(status){
        this.trackingStatus = status;
    },

    setParentUrl: function(e) {
        if(e.data.destination !== null && e.data.destination !== undefined){
            this.getParentUrl = e.data.destination;
        }
    },

    addListenersToElementsForProperties: function(e, elementTypes, message){
        var data = e.data;
        for (var type = 0;  type < elementTypes.length; type++) {
            var elementType = elementTypes[type];
            var el = document.querySelectorAll(elementType);
            for (var index = 0; index < el.length; index++) {
                this.eventListener(el[index], "contextmenu", this.rightClickEventHandler);
                this.eventListener(el[index], "click", this.clickEventHandler);
                this.eventListener(el[index], "mouseover", this.mouseoverEventHandlerForProperties);
                this.eventListener(el[index], "mouseout", this.mouseoutEventHandlerForProperties);
            }
        }
    },

    addListenersToElements: function(e, timeout, elementTypes, message){
        var data = e.data;
        window.setTimeout(function(){
            if (message.message =="ANSWER_LISTENERS_UPDATED" && data.events){
                _PCM_editor.updateEventsStatus(data.events, "update");
            } else if(data.events){
                _PCM_editor.updateEventsStatus(data.events, "new");
            }

            _PCM_editor.preventPopups();
            _PCM_editor.eventListener(document.body, "click", _PCM_editor.clickEventHandler);
            _PCM_editor.eventListener(document.body, "contextmenu", _PCM_editor.clickEventHandler);
            for (var type = 0;  type < elementTypes.length; type++) {
                var elementType = elementTypes[type];
                var el = document.querySelectorAll(elementType);
                for (var index = 0; index < el.length; index++) {
                    _PCM_editor.eventListener(el[index], "contextmenu", _PCM_editor.rightClickEventHandler);
                    _PCM_editor.eventListener(el[index], "click", _PCM_editor.clickEventHandler);
                    _PCM_editor.eventListener(el[index], "mouseover", _PCM_editor.mouseoverEventHandler);
                    _PCM_editor.eventListener(el[index], "mouseout", _PCM_editor.mouseoutEventHandler);
                }
            }
            e.source.postMessage(message, e.origin);
        }, timeout);
    },

    getFormNode: function(node) {
        if (typeof node.tagName === "string"){
            var nodeTag = node.tagName.toLowerCase();
            while (nodeTag !== 'form' && nodeTag !== 'body' && nodeTag !== "ngs:newrelicrumheader") {
                node = node.parentElement;
                nodeTag = node.tagName.toLowerCase();
            }
            if (nodeTag == 'body' || nodeTag == "ngs:newrelicrumheader") {
                return false;
            } else {
                return node;
            }
        }
    },

    cleanAllBorders: function() {
        var elements = document.querySelectorAll("[data-pcm-event-id]");
        for (var i = 0, el; el = elements[i]; i++){
            if (_PCM_editor.getCurrentTarget["event"] !== el) {
                _PCM_editor.removeEvent(el.getAttribute('data-pcm-event-id'));
            }
        }
    },

    updateEventsStatus: function (events, option){
        if (typeof events === "object"){
            if (Array.isArray(events)){
                if (option == "new") {
                    //if (events.length > 1) {
                    _PCM_editor.cleanAllBorders();
                }
                for (var i = 0; i < events.length; i++){
                    var appendEvent = false;
                    if (events[i]._gen_pathMatchConditions !== undefined || events[i]._gen_pathMatchConditions !== null) {
                        if(_PCM_editor.matchesPath(events[i]._gen_pathMatchConditions)){
                            appendEvent = true;
                        }
                    } else {
                        if (events[i].winLocPath === window.location.pathname || events[i]._gen_winLocPath === "all-pages"){
                            appendEvent = true;
                        }
                    }
                    if (appendEvent) {
                        var elements = document.querySelectorAll(events[i]._gen_selector);
                        for (var index = 0; index < elements.length; index++){
                            var el = elements[index];
                            if (el !== null){
                                if (events[i]._gen_elementContent.length > 0) {
                                    if (!events[i]._gen_multipleElements) {
                                        if (events[i]._gen_elementContent[0].innerText !== "") {
                                            if (typeof el.textContent !== "undefined") {
                                                if ( [el.textContent.replace(/\n/ig,""), el.textContent.replace(/\W+/ig,"")].indexOf(events[i]._gen_elementContent[0].innerText) == -1 ) {
                                                    continue;
                                                }
                                            }
                                        }
                                    }
                                    if (parseInt(events[i]._gen_elementContent[0].childElementCount) !== -1) {
                                        if (parseInt(events[i]._gen_elementContent[0].childElementCount) !== el.childElementCount) {
                                            continue;
                                        }
                                    }
                                }
                                var node = document.querySelector(events[i]._gen_selector);
                                if (typeof node.tagName === "string"){
                                    var formNode = false;
                                    if (events[i]._gen_eventType !== "simple") {
                                        formNode = this.getFormNode(node);
                                        if (!formNode) {
                                            formNode = false;
                                        } else if (formNode.parentElement.tagName.toLowerCase() === "body") {
                                            formNode = false;
                                        }
                                    }
                                    if(events[i].status === "deleted"){
                                        this.removeEvent(events[i].localId);
                                    } else {
                                        this.addEvent(el, formNode, events[i].localId, events[i]._gen_eventType);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },

    preventPopups: function() {
        window.open = function () {
            console.log("window prevented from opening!");
        }
        window.alert = function () {
            console.log("alert prevented from opening!");
        }
        window.confirm = function () {
            console.log("confirm prevented from opening!");
        }
        window.prompt = function () {
            console.log("prompt prevented from opening!");
        }
    },

    initializeJquery: function(){
        var installJquery = true;
        if (typeof $ !== "undefined") {
            if (typeof $.fn !== "undefined") {
                if (typeof $.fn.jquery == "string") {
                    installJquery = false;
                    this.jQuery = $;
                }
            }
        }
        if (typeof jQuery !== "undefined") {
            if (typeof jQuery.fn !== "undefined") {
                if (typeof jQuery.fn.jquery == "string") {
                    installJquery = false;
                    this.jQuery = jQuery;
                }
            }
        }
        if (installJquery) {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = "//code.jquery.com/jquery-latest.min.js";
            document.getElementsByTagName('body')[0].appendChild(script);
            this.jQuery = false;
        }
    },

    generateNewLocalId: function(){
        var delim = "-";
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + delim + S4() + delim + S4() + delim + S4() + delim + S4() + S4() + S4());
    },

    getOffsetRect: function(el) {
        while ((el.getBoundingClientRect().height === 0 || el.getBoundingClientRect().width === 0) && el.parentElement.tagName !== "BODY"){
            el = el.parentElement;
        }
        var box = el.getBoundingClientRect();
        var body = document.body;
        var docElem = document.documentElement;
        var scrollTop = window.pageYOffset || docElem.scrollTop || body.scrollTop;
        var scrollLeft = window.pageXOffset || docElem.scrollLeft || body.scrollLeft;
        var clientTop = docElem.clientTop || body.clientTop || 0;
        var clientLeft = docElem.clientLeft || body.clientLeft || 0;
        var top  = box.top +  scrollTop - clientTop;
        var left = box.left + scrollLeft - clientLeft;
        var width = box.width;
        var height = box.height;
        return { top: Math.round(top), left: Math.round(left), width: Math.round(width), height: Math.round(height), raw: {top: box.top, left: box.left} }
    },

    mouseoverEventHandler: function(event) {
        if(_PCM_editor.trackingStatus == "EVENTS" && this == event.currentTarget && !_PCM_editor.preventBubbling){
            if ((!_PCM_editor.advancedTracking.div && indexOf.call(['div'], this.tagName.toLowerCase()) !== -1 ) || ( !_PCM_editor.advancedTracking.select && indexOf.call(['select'], this.tagName.toLowerCase()) !== -1  ) || (!_PCM_editor.advancedTracking.span && indexOf.call(['span'], this.tagName.toLowerCase()) !== -1)) {
                return;
            }
            if (indexOf.call(_PCM_editor.elementTypes, this.tagName.toLowerCase()) !== -1 ) {
                _PCM_editor.preventBubbling = true;
            }
            var node = event.currentTarget;
            var nodeTag = node.tagName.toLowerCase();
            while (nodeTag !== 'form' && nodeTag !== 'body' && nodeTag !== "ngs:newrelicrumheader") {
                node = node.parentElement;
                nodeTag = node.tagName.toLowerCase();
            }
            if (nodeTag === 'form'){
                if (node.name === "aspnetForm" || node.id ==="aspnetForm") {
                    node = event.currentTarget;
                    nodeTag = node.tagName.toLowerCase();
                }
                if (_PCM_editor.checkForSavedElement(event.currentTarget)){
                    if (event.currentTarget.getAttribute("data-pcm-type") !== "form") {
                        _PCM_editor.setCurrentTarget(event.currentTarget, false, "event");
                        nodeTag = event.currentTarget.tagName.toLowerCase();
                    } else {
                        _PCM_editor.setCurrentTarget(event.currentTarget, node, "event");
                    }
                } else {
                    if (node.getAttribute("data-pcm-type") !== "form") {
                        _PCM_editor.setCurrentTarget(event.currentTarget, node, "event");
                    } else {
                        _PCM_editor.setCurrentTarget(event.currentTarget, false, "event");
                    }
                }
            }

            if (nodeTag !== 'form') {
                _PCM_editor.setCurrentTarget(event.currentTarget, false, "event");
                _PCM_editor.setOverlay(event.currentTarget, _PCM_editor.hoverOverlay,false);
            } else {
                if(_PCM_editor.advancedTracking.span || _PCM_editor.advancedTracking.div || _PCM_editor.advancedTracking.select || this.tagName.toLowerCase() === "input" || this.tagName.toLowerCase() === "img" || this.tagName.toLowerCase() === "button" || (this.tagName.toLowerCase() === "a" && (this.href !== undefined && this.href !== ""))){
                    if (_PCM_editor.advancedTracking.input || this.type == "button" || this.type == "submit" || this.onclick !== null || this.src !== (null || undefined || "")){
                        if(node.offsetHeight === 0) {
                            node = node.parentElement;
                        }
                        if (node.getAttribute("data-pcm-type") == "form") {
                            if (node.getAttribute("data-pcm-event-id") === event.currentTarget.getAttribute("data-pcm-event-id")) {
                                _PCM_editor.setOverlay(node,  _PCM_editor.hoverFormOverlay,false);
                            }
                        } else {
                            _PCM_editor.setOverlay(node,  _PCM_editor.hoverFormOverlay,false);
                        }
                        _PCM_editor.setOverlay(event.currentTarget,  _PCM_editor.hoverOverlay,false);
                    }
                }
            }
        }
    },

    mouseoverEventHandlerForProperties: function(event) {
        if(_PCM_editor.trackingStatus == "PROPERTIES"){
            event.stopPropagation();
            _PCM_editor.setCurrentTarget(event.currentTarget,false,  "property");
            _PCM_editor.setOverlay(event.currentTarget, _PCM_editor.propertyOverlay, true);
        }
    },

    mouseoutEventHandlerForProperties: function(event) {
        if(!_PCM_editor.checkForSavedElement(this)){
            _PCM_editor.hideOverlay(_PCM_editor.propertyOverlay);
        }
    },

    mouseoutEventHandler: function(event) {
        if ((!_PCM_editor.advancedTracking.div && indexOf.call(['div'], this.tagName.toLowerCase()) !== -1 ) || (!_PCM_editor.advancedTracking.span && indexOf.call(['span'], this.tagName.toLowerCase()) !== -1) || ( !_PCM_editor.advancedTracking.select && indexOf.call(['select'], this.tagName.toLowerCase()) !== -1  )) {
            return;
        }
        if (_PCM_editor.blockOverlays) {
            event.preventDefault();
            event.stopPropagation();
        }
        _PCM_editor.preventBubbling = false;
        if(_PCM_editor.trackingStatus == "EVENTS" && this == event.currentTarget){
            //_PCM_editor.removeCurrentTarget();
            var node = event.currentTarget;
            var nodeTag = node.tagName.toLowerCase();
            while (nodeTag !== 'form' && nodeTag !== 'body' && nodeTag !== "ngs:newrelicrumheader") {
                node = node.parentElement;
                nodeTag = node.tagName.toLowerCase();
            }
            if (nodeTag === 'form'){
                if (node.name === "aspnetForm" || node.id ==="aspnetForm") {
                    node = event.currentTarget;
                    nodeTag = node.tagName.toLowerCase();
                }
            }
            if (nodeTag !== 'form') {
                _PCM_editor.hideOverlay(_PCM_editor.hoverOverlay);
            } else {
                if(_PCM_editor.advancedTracking.span || _PCM_editor.advancedTracking.div || _PCM_editor.advancedTracking.select || this.tagName.toLowerCase() === "input" || this.tagName.toLowerCase() === "img" || this.tagName.toLowerCase() === "button" || (this.tagName.toLowerCase() === "a" && (this.href !== undefined && this.href !== ""))){
                    if (_PCM_editor.advancedTracking.input || this.type == "button" || this.type == "submit" || this.onclick !== null || this.src !== (null || undefined || "")){
                        if(node.offsetHeight === 0) {
                            node = node.parentElement;
                        }
                        _PCM_editor.hideOverlay(_PCM_editor.hoverFormOverlay);
                        _PCM_editor.hideOverlay(_PCM_editor.hoverOverlay);
                    }
                }
            }
        }
    },

    setElementLocalId: function (element, type, eventId, overlayId) {
        if (eventId !== null) {
            element.setAttribute("data-pcm-event-id", eventId);
            element.setAttribute("data-pcm-overlay-id", overlayId);
            element.setAttribute("data-pcm-type", type);
        } else {
            if (element.getAttribute("data-pcm-event-id") !== null){
                element.removeAttribute("data-pcm-event-id");
                element.removeAttribute("data-pcm-overlay-id");
                element.removeAttribute("data-pcm-type");
            }
        }
    },

    checkForSavedElement: function(element){
        if (element.hasAttribute("data-pcm-event-id")) {
            return true;
        } else {
            return false;
        }
    },

    clickEventHandler: function(event) {
        var targetNode = event.currentTarget;
        if (!event.which && event.button) {
            if (event.button & 1) event.which = 1 // Left
            else if (event.button & 4) event.which = 2 // Middle
            else if (event.button & 2) event.which = 3 // Right
        }

        if (event.which == 1) {
            if (targetNode.target == "_blank") {
                targetNode.target = "_self";
                targetNode.href = "";
            }
        }
        if (event.which == 3) {
            event.preventDefault();
            event.stopPropagation();
        }
        if(_PCM_editor.trackingStatus == "EVENTS"){
            if (_PCM_editor.getParentUrl == '' || _PCM_editor.getParentUrl == undefined){_PCM_editor.getParentUrl = "http://www.popcornmetrics.com"};
            parent.postMessage({
                message: "ANSWER_CLOSE_CONTEXT_MENU",
                frameOrigin: window.location.origin
            }, _PCM_editor.getParentUrl);
        }
    },

    splitUrl: function() {
        var origin = window.location.origin;
        var url = window.location.href;
        var fullPath = url.split(origin)[1];
        return {
            fullPath: fullPath,
            path: getPath(fullPath, "path"),
            pathWithHash: getPath(fullPath, "hash"),
            pathWithQuery: getPath(fullPath, "query")
        };

        function getPath(url, type) {
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
    },

    getPath: function(pattern, path) {
        if (pattern.indexOf('#') !==  -1 ) {
            return path.pathWithHash;        }
        if (pattern.indexOf('?') !== -1 || pattern.indexOf('&') !== -1) {
            return path.pathWithQuery;
        }
        return path.path;
    },

    matchesPath: function(patterns){
        var fireMatches = false;
        var dontFireMatches = false;
        var matches = false;
        for (var i = 0, condition; condition = patterns[i]; i++) {
            var pattern = _PCM_editor.createPatternMatchRegex (condition.pattern);
            var patternRegExp = new RegExp(pattern, 'i');
            var path = _PCM_editor.getPath(condition.pattern, _PCM_editor.splitUrl());
            if (condition.include) {
                // If include is true means FIRE on the page if matches
                if(patternRegExp.test(path)){
                    fireMatches = true;
                }
            } else {
                // If include is false means DONT FIRE on the page if matches
                if(patternRegExp.test(path)){
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
    },

    createPatternMatchRegex: function(pattern) {
        var starRegExp = new RegExp('\\*', 'ig');
        var templateRegExp = {
            conditionalSlash: "(\\/|)",
            star: "[\\s\\S]*",
            start: "^(",
            end :")$"
        };
        pattern = pattern.replace(/\s/ig, '');
        if (pattern.indexOf('/') === 0) {
            pattern = pattern.slice(1);
        }
        if (pattern.lastIndexOf('/') == pattern.length -1) {
            pattern = pattern.slice(0, -1);
        }
        pattern = _PCM_editor.escapeSpecialCharsRegExp(pattern);
        if (pattern.indexOf('*') !== 0) {
            pattern = templateRegExp.conditionalSlash + pattern;
        }
        if (pattern.lastIndexOf('*') !== pattern.length - 1) {
            pattern = pattern + templateRegExp.conditionalSlash;
        }
        pattern = pattern.replace(starRegExp, templateRegExp.star);
        pattern = templateRegExp.start + pattern + templateRegExp.end;
        return pattern;
    },

    escapeSpecialCharsRegExp: function(pattern) {
        var specialChars = ['\\/', '\\?', '\\+', '\\.'];
        for (var i = 0, token; token = specialChars[i]; i++) {
            var regex = new RegExp(token, 'ig');
            pattern = pattern.replace(regex, token);
        }
        return pattern;
    },

    checkIfTrackingIsAllowed: function() {
        var isTrackingAllowed = true;
        if(_PCM_editor.trackingStatus == "EVENTS" || _PCM_editor.trackingStatus == "REPEATED"){
            if (_PCM_editor.trackingStatus == "EVENTS") {
                var targetNode = _PCM_editor.getCurrentTarget["event"];
            } else {
                var targetNode = _PCM_editor.getCurrentTarget["repeated"];
            }
            if (targetNode.tagName === "INPUT") {
                if (_PCM_editor.advancedTracking.input) {
                    var avoidInputType = ['password'];
                } else {
                    var avoidInputType = ['text', 'checkbox', 'date', 'datetime', 'email', 'file', 'number','password','radio','search','time','week'];
                }
                if (indexOf.call(avoidInputType, targetNode.type) !== -1) {
                    isTrackingAllowed = false;
                }
            }
            if (indexOf.call(_PCM_editor.elementTypes, targetNode.tagName.toLowerCase()) === -1 ) {
                isTrackingAllowed = false;
            }
        } else {
            var targetNode = _PCM_editor.getCurrentTarget["property"];
            if (indexOf.call(_PCM_editor.propertyTypes, targetNode.tagName.toLowerCase()) === -1 ) {
                isTrackingAllowed = false;
            }
        }
        return isTrackingAllowed;
    },

    rightClickEventHandler: function(event) {
        if ((!_PCM_editor.advancedTracking.div && indexOf.call(['div'], this.tagName.toLowerCase()) !== -1 ) || (!_PCM_editor.advancedTracking.span && indexOf.call(['span'], this.tagName.toLowerCase()) !== -1) || ( !_PCM_editor.advancedTracking.select && indexOf.call(['select'], this.tagName.toLowerCase()) !== -1  )) {
            return;
        }
        var isTrackingAllowed = _PCM_editor.checkIfTrackingIsAllowed();

        // check if the element is in the list of allowed tags
        if(isTrackingAllowed) {

            // initalize local variables
            var parentUrl = _PCM_editor.getParentUrl;
            event.stopPropagation();
            event.preventDefault();

            if(_PCM_editor.trackingStatus == "EVENTS"){
                var trackingSelectors = _PCM_editor.getTrackingSelectors.event(event);
            } else if(_PCM_editor.trackingStatus == "PROPERTIES"){
                var trackingSelectors = _PCM_editor.getTrackingSelectors.property(event);
            }

            // build message to postMessage back to the app
            var message = _PCM_editor.buildReturnMessage(event, trackingSelectors)

            // if parent Url is not defined, then update it
            if (_PCM_editor.getParentUrl == '' || _PCM_editor.getParentUrl == undefined){_PCM_editor.getParentUrl = "http://www.popcornmetrics.com"};

            // block the overlays
            _PCM_editor.blockOverlays = true;

            // post message back to the app
            parent.postMessage(message, parentUrl);

        }
    },

    getTrackingSelectors: {
        event: function (event) {
            var targetNode = _PCM_editor.getCurrentTarget["event"];
            var node = targetNode;

            var formAttributes = {
                isElementInForm: false,
                formNode: {},
                fields: { inputs: [], labels: [], submits:[] },
                fieldsSelectors: []
            }
            var targetElementSelectors = {};

            // define the structure of the selector
            var selectorType = {
                id : true,
                attributes : true,
                childIndex : true,
                classes : false
            };

            // if it's an Ember app, then don't use id
            if (typeof Ember == "object"){
                selectorType.id = false
            };

            var multipleElementsSelectors = {
                elementSelector: null,
                containerSelector: null
            };

            var similarElementsSelector = {
                selector: null,
                parentContainerLevel: null
            };

            // Check if element is inside a form and capture form submits and inputs
            formAttributes = _PCM_editor.buildSelectors.getFormNode(formAttributes, node);

            // check if we have stored the current form element
            // if not it means we have a previous saved event to that element as a simple event and not as a form
            if (!_PCM_editor.getCurrentTarget["form"]) { formAttributes.isElementInForm = false };

            // If element is inside form
            if (formAttributes.isElementInForm) {

                // Highligh form
                _PCM_editor.showOverlayBackground(_PCM_editor.getOffsetRect(_PCM_editor.getCurrentTarget["form"]));

                var formNodeTag = formAttributes.formNode.tagName.toLowerCase();

                // build submitList, labelList and inputList
                formAttributes = _PCM_editor.buildSelectors.getFormFields(formAttributes);

                // get formSelectors
                var formSelectors = _PCM_editor.buildSelectors.formSelectors (formAttributes, selectorType, true);

                // get local Id
                var elementLocalId = _PCM_editor.buildSelectors.getElementLocalId (formAttributes.formNode);
            } else {
                // highlight event element
                _PCM_editor.showOverlayBackground(_PCM_editor.getOffsetRect(_PCM_editor.getCurrentTarget["event"]));

                // build labelList and inputList
                formAttributes = _PCM_editor.buildSelectors.getFormFields(formAttributes);

                // get formSelectors
                var formSelectors = _PCM_editor.buildSelectors.formSelectors (formAttributes, selectorType, false);

                // get local Id
                var elementLocalId = _PCM_editor.buildSelectors.getElementLocalId (targetNode);
            }


            // TO REMOVE ONCE WE START USING THE LISTENERS IN CARD CONTAINERS
            similarElementsSelector = _PCM_editor.buildSelectors.similarElementsPath(targetNode, true);
            var isElementInAcard = similarElementsSelector.isElementInAcard;
            if (!isElementInAcard) {
                similarElementsSelector = _PCM_editor.buildSelectors.similarElementsPath(targetNode, isElementInAcard);
            }

            // get nodeSelectors
            var targetElementSelectors = _PCM_editor.buildSelectors.nodeSelectors (targetNode, selectorType);

            // get multiple Elements Selectors
            multipleElementsSelectors = _PCM_editor.buildSelectors.multipleElementsSelector(targetNode, isElementInAcard);

            return {
                targetNode: targetNode,
                elementLocalId: elementLocalId,
                targetElementSelectors: targetElementSelectors,
                similarElementsSelector: similarElementsSelector,
                multipleElementsSelectors: multipleElementsSelectors,
                formAttributes: formAttributes
            };
        },

        property: function(event) {
            var targetNode = _PCM_editor.getCurrentTarget["property"];
            // define the structure of the selector
            var selectorType = {
                id : true,
                attributes : true,
                childIndex : true,
                classes : false
            };

            // if it's an Ember app, then don't use id
            if (typeof Ember == "object"){
                selectorType.id = false
            };

            // get nodeSelectors
            var targetElementSelectors = _PCM_editor.buildSelectors.nodeSelectors (targetNode, selectorType);

            // get multiple Elements Selectors
            var isElementInAcard  = _PCM_editor.buildSelectors.similarElementsPath(targetNode, true).isElementInAcard;
            multipleElementsSelectors = _PCM_editor.buildSelectors.multipleElementsSelector(targetNode, isElementInAcard);

            return {
                targetNode: targetNode,
                targetElementSelectors: targetElementSelectors,
                multipleElementsSelectors: multipleElementsSelectors
            };
        }
    },

    buildReturnMessage: function(event, trackingSelectors) {
        var message =  {
            _gen_elementContent: [trackingSelectors.targetElementSelectors._gen_elementContent],
            _gen_elementTag: trackingSelectors.targetElementSelectors._gen_elementTag,
            _gen_eventAction: trackingSelectors.targetElementSelectors._gen_eventAction,
            _gen_winLocPath: trackingSelectors.targetElementSelectors._gen_winLocPath,
            _gen_selector: trackingSelectors.targetElementSelectors._gen_selector,
            clientY: event.clientY,
            clientX: event.clientX,
            frameOrigin:  window.location.origin,
            selectors: [{
                type: "action",
                containsMultipleElements: false,
                scope: "document",
                selector: trackingSelectors.targetElementSelectors._gen_selector
            },{
                type: "action",
                containsMultipleElements: false,
                scope: "container",
                selector: trackingSelectors.multipleElementsSelectors.elementSelector
            },{
                type: "container",
                containsMultipleElements: true,
                scope: "document",
                selector: trackingSelectors.multipleElementsSelectors.containerSelector
            }]
        };
        if (_PCM_editor.trackingStatus == "EVENTS") {
            message.localId = trackingSelectors.elementLocalId;
            message.formData =  trackingSelectors.formAttributes.fieldsSelectors;
            message.isElementInForm = trackingSelectors.formAttributes.isElementInForm;
            message._gen_selectorNoAttributes = trackingSelectors.targetElementSelectors._gen_selectorNoAttributes;
            message._gen_similarElementsSelector = trackingSelectors.similarElementsSelector.selector;
            message._gen_parentContainerLevel = trackingSelectors.similarElementsSelector.parentContainerLevel;
            message.selectors.push({
                type: "action",
                containsMultipleElements: true,
                scope: "document",
                selector: trackingSelectors.similarElementsSelector.selector
            });
            message.message = "ANSWER_SELECTED_ELEMENT_DATA";
        } else {
            message.message = "ANSWER_PROPERTY_SELECTED";
            message.textContent = trackingSelectors.targetNode.textContent;
        }
        return message;
    },

    buildSelectors: {
        getFormNode: function(formAttributes, node) {
            var attributes = _PCM_editor.buildSelectors.crawlForForm(node, false);
            if (!attributes.isElementInForm) {
                var attributes = _PCM_editor.buildSelectors.crawlForForm(node, "modal");
            }
            formAttributes.isElementInForm = attributes.isElementInForm;
            formAttributes.formNode = attributes.node;
            return formAttributes;
        },

        crawlForForm: function(node, referenceAttribute){
            var nodeTag = node.tagName.toLowerCase();
            while (nodeTag !== 'form' && nodeTag !== 'body' && nodeTag !== "ngs:newrelicrumheader") {
                if (referenceAttribute) {
                    if (typeof node.className == "string" && typeof node.id == "string") {
                        if (node.className.indexOf(referenceAttribute) !== -1 || node.id.indexOf(referenceAttribute) !== -1) {
                            break;
                        }
                    }
                }
                node = node.parentElement;
                nodeTag = node.tagName.toLowerCase();
            }
            if (node.parentElement.tagName.toLowerCase() === "body"){
                nodeTag = 'body';
            }
            if (nodeTag == 'form') {
                return {
                    isElementInForm: true,
                    node: node
                };
            } else {
                return {
                    isElementInForm: false,
                    node: node
                };
            }
        },

        nodeSelectors: function (targetNode, selectorType) {
            var selectorNotUnique = false;
            var elementSelectors = {};
            elementSelectors = _PCM_editor.buildSelectors.getElementAttributes(targetNode, selectorType);
            if (selectorNotUnique) {
                selectorType.classes = true;
                selectorNotUnique = false;
                elementSelectors = _PCM_editor.buildSelectors.getElementAttributes(targetNode, selectorType);
                selectorType.classes = false;
            }
            elementSelectors._gen_selectorNoAttributes = _PCM_editor.buildSelectors.getElementAttributes(targetNode, {
                id: true,
                attributes: false,
                childIndex: true,
                classes: false
            })["_gen_selector"];

            return elementSelectors;
        },

        getFormFields: function (formAttributes) {
            nextChildInForm(formAttributes.formNode);
            return formAttributes;

            function nextChildInForm(node) {
                if (_PCM_editor.jQuery) {
                    var pcmJquery = _PCM_editor.jQuery;
                } else {
                    var pcmJquery = $;
                }

                var localChildrenList = pcmJquery(node).children();
                for (var index = 0; index < localChildrenList.length; index++) {
                    if (typeof localChildrenList[index] === "object") {
                        if(localChildrenList[index].type !== "hidden"){
                            if (localChildrenList[index].tagName.toLowerCase() === "input"){
                                if (localChildrenList[index].type == "button" || localChildrenList[index].type == "submit" || localChildrenList[index].onclick !== null || localChildrenList[index].src !== (null || undefined || "")){
                                    formAttributes.fields.submits.push(localChildrenList[index]);
                                } else {
                                    if (localChildrenList[index].type !== "password"){
                                        formAttributes.fields.inputs.push(localChildrenList[index]);
                                    }
                                }
                            } else if (localChildrenList[index].tagName.toLowerCase() === "label") {
                                formAttributes.fields.labels.push(localChildrenList[index]);
                            } else if (localChildrenList[index].tagName.toLowerCase() === "button") {
                                formAttributes.fields.submits.push(localChildrenList[index]);
                            } else if (localChildrenList[index].tagName.toLowerCase() === "select"){
                                formAttributes.fields.inputs.push(localChildrenList[index]);
                            } else {
                                if (localChildrenList[index].children.length > 0) {
                                    nextChildInForm(localChildrenList[index]);
                                }
                            }
                        }
                    }
                }
            }
        },

        formSelectors: function(formAttributes, selectorType, hiddenFields) {
            if (_PCM_editor.jQuery) {
                var pcmJquery = _PCM_editor.jQuery;
            } else {
                var pcmJquery = $;
            }

            var selectorNotUnique = false;
            var inputList = formAttributes.fields.inputs;
            var labelList = formAttributes.fields.labels;
            for (var i = 0; i < inputList.length; i++) {
                if (!hiddenFields) {
                    if (!pcmJquery(inputList[i]).is(":visible")) {
                        continue;
                    }
                }
                var localElementAttributes = _PCM_editor.buildSelectors.getElementAttributes(inputList[i], selectorType);
                if (selectorNotUnique) {
                    selectorType.classes = true;
                    selectorNotUnique = false;
                    localElementAttributes = _PCM_editor.buildSelectors.getElementAttributes(inputList[i], selectorType);
                    selectorType.classes = false;
                }

                var continueSearchLabel = true;
                var localSelector = localElementAttributes._gen_selector;
                for (var index = 0; index < labelList.length; index++){
                    if ((inputList[i].id === labelList[index].htmlFor && inputList[i].id !== "") || (inputList[i].name === labelList[index].htmlFor && inputList[i].name !== "")){
                        var localFormElement = {
                            _gen_label: labelList[index].textContent,
                            _gen_selector: localSelector
                        };
                        continueSearchLabel = false;
                        break;
                    }
                }
                if (continueSearchLabel){
                    if (inputList[i].placeholder) {
                        var localFormElement = {
                            _gen_label: inputList[i].placeholder,
                            _gen_selector: localSelector
                        };
                    } else if (inputList[i].name) {
                        var localFormElement = {
                            _gen_label: inputList[i].name,
                            _gen_selector: localSelector
                        };
                    } else if (inputList[i].tagName.toLowerCase() == "select"){
                        if(inputList[i].selectedIndex != -1){
                            var localFormElement = {
                                _gen_label: inputList[i].options[inputList[i].selectedIndex].text,
                                _gen_selector: localSelector
                            };
                        } else {
                            var localFormElement = {
                                _gen_label: "input number " + i+1,
                                _gen_selector: localSelector
                            }
                        }
                    } else {
                        var localFormElement = {
                            _gen_label: "input number " + i+1,
                            _gen_selector: localSelector
                        }
                    }
                }
                formAttributes.fieldsSelectors.push(localFormElement);
            }
            return formAttributes;
        },

        checkForMultipleNodesSameHeight: function(nodesList, referenceElement) {
            if (referenceElement) {
                if (typeof referenceElement.getBoundingClientRect == "function") {
                    var referenceHeight = referenceElement.getBoundingClientRect().height;
                } else {
                    return -1;
                }
            }
            var elementsCount = 0;
            if (nodesList.length > 1) {
                for (var i = 0, el; el = nodesList[i]; i++) {
                    if (el) {
                        if (typeof el.getBoundingClientRect == "function"){
                            if (referenceHeight == el.getBoundingClientRect().height && el.className.indexOf('pcm-') == -1) {
                                elementsCount++;
                            }
                        }
                    }
                }
            }
            return elementsCount;
        },

        addLevelToSelectorPath: function(node, nodeSelectorPath, selectorType) {
            var selector = "";
            var nodeSelector = "";
            var nodeTag = node.tagName.toLowerCase();
            if (node.tagName.toUpperCase() !== "BODY") {
                for (var type in selectorType){
                    if (selectorType[type]) {
                        selector = _PCM_editor.buildSelectors.getNodeSelector(node, type)[0];
                        var nodeSelector = nodeSelector + selector;
                    }
                }
                if (nodeSelectorPath !== ""){
                    nodeSelectorPath = nodeTag + nodeSelector + " > " + nodeSelectorPath;
                } else {
                    nodeSelectorPath = nodeTag + nodeSelector;
                }
            } else if(node.tagName.toUpperCase() === "BODY"){
                nodeSelectorPath = "body" + " > " + nodeSelectorPath;
            }
            return nodeSelectorPath;
        },

        multipleElementsContainerSelector: function(originalNode){
            var node = originalNode;
            var nodeSelectorPath = "";
            var nodesList = "";
            var nodeSelectorPath = "";
            var addNextLevel = true;
            var elementsCount = 0;
            var selectorType = {childIndex: true};

            while (addNextLevel) {
                if (elementsCount == 0) {
                    selectorType = {childIndex: false}
                } else {
                    selectorType = {childIndex: true, id: true};
                }
                nodeSelectorPath = _PCM_editor.buildSelectors.addLevelToSelectorPath(node, nodeSelectorPath, selectorType);
                var nodeTag = node.tagName.toLowerCase();
                if (nodeTag == "body" || nodeTag == "ngs:newrelicrumheader") { break }
                nodesList = document.querySelectorAll(nodeSelectorPath);
                if (elementsCount == 0) {
                    elementsCount = _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode);
                } else {
                    if (elementsCount == _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode)) {
                        if (nodesList.length == elementsCount){
                            addNextLevel = false;
                        }
                    }
                }
                node = node.parentElement;
            }
            return nodeSelectorPath;
        },


        // This function will be decrepated once we adopt the events for the cards container -- We'll use getMultipleElementsSelector instead

        similarElementsPath: function(originalNode, checkForChildren){
            // This function returns the selector for multiple objects with the body as scope

            var node = originalNode;
            var nodeSelectorPath = "";
            var nodesList = "";
            var lastSelector = "";
            var nodeSelectorPath = "";
            var addNextLevel = true;
            var elementsCount = 0;
            var selectorType = {childIndex: true};
            var nodesLengthControl = false;
            var nodesLength = 1;
            var level = 0;
            var parentContainerLevel = 0;

            while (addNextLevel) {
                nodeSelectorPath = _PCM_editor.buildSelectors.addLevelToSelectorPath(node, nodeSelectorPath, selectorType);
                var nodeTag = node.tagName.toLowerCase();
                if (nodeTag == "body" || nodeTag == "ngs:newrelicrumheader") {
                    break;
                }
                nodesList = document.querySelectorAll(nodeSelectorPath);

                if (elementsCount == 0) {
                    elementsCount = _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode);
                    if (nodesLengthControl) {
                        nodesLength = elementsCount;
                    }
                } else {
                    if (elementsCount !== _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode)) {
                        if(nodeSelectorPath.indexOf !== -1 ){
                            var defineContainer = false;
                            if (checkForChildren) {
                                if (node.children.length > 1){
                                     defineContainer = true;
                                }
                            } else {
                                defineContainer = true;
                            }
                            if (defineContainer) {
                                parentContainerLevel = level;
                                var index = nodeSelectorPath.indexOf(">");
                                nodeSelectorPath = nodeTag + " > " + nodeSelectorPath.slice(index + 2);
                                nodesList = document.querySelectorAll(nodeSelectorPath);
                                addNextLevel = false;
                                if (nodesList.length > nodesLengthControl) {
                                    nodesLengthControl = true;
                                    addNextLevel = true;
                                    selectorType = {childIndex: true, id: true, attributes: true};
                                };
                                elementsCount = 0;
                            }
                        }
                    }
                }
                if (nodesList.length == nodesLength) {
                    addNextLevel = false;
                }
                level++;
                node = node.parentElement;
            }
            if (nodeTag == "ngs:newrelicrumheader") {
                nodeSelectorPath = nodeSelectorPath.slice(nodeSelectorPath.indexOf('>') + 2);
            }
            nodesList = document.querySelectorAll(nodeSelectorPath);
            var isElementInAcard = true;
            if (nodesList.length < 2) { isElementInAcard = false};
            return {selector: nodeSelectorPath, parentContainerLevel: parentContainerLevel, isElementInAcard: isElementInAcard};
        },

        multipleElementsSelector: function(originalNode, checkForChildren){
            // This function returns the selector for the containers of the node, and the selector for the node with the scope of the container
            // E.g. A button inside a pintrest style card -> returns the selector for all similar cards, and the selector for the button to use in container.querySelector(button_selector)

            var node = originalNode;
            var level = 0;
            var nodeSelectorPath = "";
            var nodesList = "";
            var nodeSelectorPath = "";
            var addNextLevel = true;
            var elementsCount = 0;
            var selectorType = {childIndex: true};

            while (addNextLevel) {
                level++;
                nodeSelectorPath = _PCM_editor.buildSelectors.addLevelToSelectorPath(node, nodeSelectorPath, selectorType);
                var nodeTag = node.tagName.toLowerCase();
                if (nodeTag == "body" || nodeTag == "ngs:newrelicrumheader") { break }
                nodesList = document.querySelectorAll(nodeSelectorPath);

                if (elementsCount == 0 && nodesList.length > 0) {
                    elementsCount = _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode);
                } else {
                    if (elementsCount !== _PCM_editor.buildSelectors.checkForMultipleNodesSameHeight(nodesList, originalNode)) {
                        if(nodeSelectorPath.indexOf !== -1 ){
                            var defineContainer = false;
                            if (checkForChildren) {
                                if (node.children.length > 1){
                                    defineContainer = true;
                                }
                            } else {
                                defineContainer = true;
                            }
                            if (defineContainer) {
                                addNextLevel = false;
                                var index = nodeSelectorPath.indexOf(">");
                                nodeSelectorPath = nodeTag + " > " + nodeSelectorPath.slice(index + 2);
                                var container = originalNode;
                                while (level>1) {
                                    container = container.parentElement;
                                    level--;
                                }
                            }
                        }
                    }
                }
                node = node.parentElement;
            }
            if (container != undefined) {
                var containerSelector = _PCM_editor.buildSelectors.multipleElementsContainerSelector(container);
            } else {
                var containerSelector = "body";
            }
            return {
                elementSelector: nodeSelectorPath,
                containerSelector: containerSelector
            }
        },

        getElementAttributes: function(targetNode, selectorType) {
            var node = targetNode;
            var score = 0;
            var level = 0;
            var elementInnerHtml = node.innerHTML;
            var nodesList = "";
            var nodeSelector = "";
            var nodeSelectorPath = "";
            var windowLocationPath = _PCM_editor.splitUrl();
            var nodeTag = node.tagName.toLowerCase();

            while ((nodesList.length > 1 || nodesList === "") || score <= 10) {
                level++;
                //if (level > 7) {selectorType.childIndex = false;}
                nodeSelector = "";
                nodeTag = node.tagName.toLowerCase();
                if (nodeTag !== "body" || nodeTag !== "ngs:newrelicrumheader") {
                    for (var type in selectorType){
                        if (selectorType[type]) {
                            selectorForType = _PCM_editor.buildSelectors.getNodeSelector(node, type);
                            selector = selectorForType[0];
                            score = score + selectorForType[1];
                            nodeSelector = nodeSelector + selector;
                            if (nodeSelector.match(/\^/ig) !== null && nodeSelector.match(/\n/ig) !== null) {
                                nodeSelector = nodeSelector.replace(/\^/ig, "*");
                                nodeSelector = nodeSelector.replace(/\n/ig, "");
                                nodeSelector = nodeSelector.replace(/\s/ig, '');
                            }
                            nodesList = document.querySelectorAll(nodeTag + nodeSelector);
                            if (nodesList.length <  2 && score > 9) {
                                break;}
                        }
                    }
                    if (nodeSelectorPath !== ""){
                        nodeSelectorPath = nodeTag + nodeSelector + " > " + nodeSelectorPath;
                        score = score + 1;
                    } else {
                        nodeSelectorPath = nodeTag + nodeSelector;
                        score = score + 1;
                    }
                } else if(node.tagName.toLowerCase() === "body" || node.tagName.toLowerCase() == "ngs:newrelicrumheader"){
                    selectorNotUnique = true;
                    nodeSelectorPath = "body" + " > " + nodeSelectorPath;
                    break;
                }
                node = node.parentElement;
                nodesList = document.querySelectorAll(nodeSelectorPath);
            }
            var innerText = "";
            if (targetNode.tagName !== "SELECT") {
                var innerText = targetNode.textContent.replace(/\W+/ig,"");
            }

            return {
                _gen_selector: nodeSelectorPath,
                _gen_elementContent: { innerText: innerText, childElementCount: targetNode.childElementCount },
                _gen_elementTag: targetNode.tagName.toLowerCase(),
                _gen_winLocPath: windowLocationPath,
                _gen_eventAction: "click"
            };
        },

        cropUrlafterString: function(attributeValue, string){
            if (attributeValue.indexOf(string) !== -1){
                attributeValue = attributeValue.slice(0, attributeValue.indexOf(string));
            }
            return attributeValue;
        },

        getNodeSelector: function(node, selectorType) {
            if (_PCM_editor.jQuery) {
                var pcmJquery = _PCM_editor.jQuery;
            } else {
                var pcmJquery = $;
            }
            var score = 0;
            var nodeSelector = "";
            if (selectorType === "id") {
                if (node.id !== "" && node.id !== undefined && node.id.match(/\d/) == null) {
                    nodeSelector = "[id='" + node.id + "']";
                    score = score + 100;
                }
            } else if (selectorType === "attributes") {
                var nodeAttributes = "";
                var attribute = "";
                var attributeValue = "";
                var attributesProperties = {
                    a        : ['title', ], //'href'],
                    button   : ['title', 'form', 'name', 'type', 'value'],
                    div      : ['title'],
                    form     : ['title', 'name'],
                    img      : ['title', 'alt', 'src'],
                    input    : ['title', 'alt', 'form', 'name', 'src', 'type', 'value'],
                    label    : ['title', 'form'],
                    li       : ['title', 'value'],
                    nav      : ['title'],
                    ol       : ['title'],
                    span     : ['title'],
                    table    : ['title'],
                    textarea : ['title', 'form', 'name'],
                    ul       : ['title'],
                    video    : ['title', 'src']
                }
                for (tag in attributesProperties) {
                    if (node.tagName.toLowerCase() === tag) {
                        for (var i = 0; i < attributesProperties[tag].length; i++) {
                            attribute = attributesProperties[tag][i];
                            if (node.hasAttribute(attribute)) {
                                attributeValue = node.getAttribute(attribute);
                                if (attributeValue != "" && attributeValue != undefined && attributeValue != null){
                                    score = score + 4;
                                    if (attribute === "href" || attribute === "src") {
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '? ');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, ';');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '=');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '.jpg');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '.png');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '.svg');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '.tiff');
                                        attributeValue = _PCM_editor.buildSelectors.cropUrlafterString(attributeValue, '.gif');

                                        nodeAttributes = nodeAttributes + "[" + attribute + "^='" + attributeValue  + "']";
                                    }
                                }
                            }
                        }
                    }
                }
                nodeSelector = nodeAttributes;
            } else if (selectorType === "classes") {
                var nodeClass = "";
                var avoidClassList = [
                    "disabled", "enabled", "hover", "selected", "checked", "unchecked"
                ];
                for (index = 0; index < node.classList.length; index++) {
                    if (indexOf.call(avoidClassList, node.classList[index]) === -1){
                        nodeClass = nodeClass + "." + node.classList[index];
                        score = score + 2;
                    }
                }
                nodeSelector = nodeClass;
            } else if (selectorType === "childIndex") {
                var childIndex = "";
                var nthIndex = pcmJquery(node).index() + 1;
                if (typeof nthIndex !== "undefined" && nthIndex > 0){
                    childIndex = ":nth-child(" + nthIndex + ")";
                    nodeSelector = childIndex;
                    score = score + 3;
                }
            }
            return [nodeSelector, score];
        },

        getElementLocalId: function (node) {
            if (node.getAttribute("data-pcm-event-id") !== null) {
                return node.getAttribute("data-pcm-event-id");
            } else {
                return null;
            }
        }
    },

    respondMessage: function (e) {

        // Define the parentUrl based on the parent window call
        _PCM_editor.setParentUrl(e);

        // Check if the message was sent from an iFrame
        if (e.data.message == "CHECK_IF_SCRIPT_IS_INSTALLED_SENT_FROM_IFRAME"){
            _PCM_editor.sendMessageFromIframe(e);
        }

        // Check if the call is from popcornmetrics
        if (e.origin == _PCM_editor.getParentUrl) {

            // Define elements tags to track with our tracker tool
            var elementTypes = _PCM_editor.elementTypes;
            var elementPropertyTypes = _PCM_editor.propertyTypes;
            var data = e.data;

            // Check for the message from the parent (Tracker Tool)
            if ( data.message === "CHECK_IF_SCRIPT_IS_INSTALLED_AND_START_TRACKING" || data.message === "START_TRACKING_ON_HASH_CHANGE" || data.message === "UPDATE_LISTENERS_ON_ELEMENTS" ){
                _PCM_editor.sendMessageToIframes(data);
                if(data.message === "UPDATE_LISTENERS_ON_ELEMENTS"){
                    var message = _PCM_editor.setMessageToParent('ANSWER_LISTENERS_UPDATED');
                    timeout = 1;
                } else {
                    var message =_PCM_editor.setMessageToParent('ANSWER_SCRIPT_IS_INSTALLED_AND_TRACKING_LIVE');
                    if (_PCM.verifyObject("_PCM_settings.settings.account.domainId")) {
                        message.domainId = _PCM_settings.settings.account.domainId;
                    }
                    if (data.message === "START_TRACKING_ON_HASH_CHANGE"){
                        timeout = 1000;
                    } else {
                        timeout = 1;
                        window.onhashchange = function(){
                            message = _PCM_editor.setMessageToParent('ANSWER_HASH_CHANGED');
                            parent.postMessage(message, e.origin);
                        };
                    }
                }
                _PCM_editor.addListenersToElements(e, timeout, elementTypes, message);

            } else if(data.message === 'REFRESH_TRACKING'){
                _PCM_editor.removeCurrentTarget();
                _PCM_editor.updateEventsStatus(data.events, "new");

            } else if(data.message === 'ENABLE_ADVANCED_TRACKING'){
                _PCM_editor.advancedTracking.div = true;
                _PCM_editor.advancedTracking.input = true;
                _PCM_editor.advancedTracking.select = true;
                _PCM_editor.advancedTracking.span = true;
            } else if(data.message === 'DISABLE_ADVANCED_TRACKING'){
                _PCM_editor.advancedTracking.div = false;
                _PCM_editor.advancedTracking.input = false;
                _PCM_editor.advancedTracking.select = false;
                _PCM_editor.advancedTracking.span = false;
            } else if(data.message === 'CHANGE_ELEMENT_STATUS'){
                _PCM_editor.sendMessageToIframes(data);
                _PCM_editor.updateEventsStatus(data.events, "update");
                var message = _PCM_editor.setMessageToParent('ANSWER_TRACKING_REFRESHED');
                e.source.postMessage(message, e.origin);

            } else if(data.message === 'REMOVE_BACKGROUND_OVERLAY'){
                _PCM_editor.blockOverlays = false;
                _PCM_editor.hideOverlay(_PCM_editor.propertyOverlay);
                _PCM_editor.hideOverlayBackground();
                if (data.options == "remove_all") {
                    _PCM_editor.hideOverlay(_PCM_editor.hoverOverlay);
                    _PCM_editor.hideOverlay(_PCM_editor.hoverFormOverlay);
                    _PCM_editor.removeRepeatedOverlays();
                }
                if (data.options == "insert_background_on_event"){
                    _PCM_editor.showOverlayBackground(_PCM_editor.getOffsetRect(_PCM_editor.getCurrentTarget["event"]));
                    _PCM_editor.blockOverlays = true;
                }

            } else if(data.message === 'CHANGE_OVERLAY_TO_ELEMENT'){
                _PCM_editor.showOverlayBackground(_PCM_editor.getOffsetRect(_PCM_editor.getCurrentTarget["event"]));
                _PCM_editor.setOverlay(_PCM_editor.getCurrentTarget["event"],  _PCM_editor.hoverOverlay,false);

            } else if(data.message === 'CHANGE_TRACKING_STATUS'){
                _PCM_editor.sendMessageToIframes(data);
                _PCM_editor.setTrackingStatus(data.status);

            } else if (data.message == "CHECK_IF_SCRIPT_IS_INSTALLED") {
                var message = _PCM_editor.setMessageToParent('ANSWER_SCRIPT_IS_INSTALLED');
                e.source.postMessage(message, e.origin);

            } else if (data.message == "TRACK_ELEMENTS_FOR_PROPERTY_CAPTURE"){
                _PCM_editor.hideOverlayBackground();
                _PCM_editor.sendMessageToIframes(data);
                var message = _PCM_editor.setMessageToParent('ANSWER_READY_TO_TRACK_PROPERTIES');
                _PCM_editor.setTrackingStatus("PROPERTIES");
                _PCM_editor.addListenersToElementsForProperties(e, _PCM_editor.propertyTypes, message);

            } else if(data.message === 'REMOVE_REPEATED_OVERLAYS'){
                _PCM_editor.removeRepeatedOverlays();

            } else if (data.message == "SHOW_REPEATED_OVERLAYS") {
                _PCM_editor.sendMessageToIframes(data);
                var message = _PCM_editor.setMessageToParent('ANSWER_READY_TO_TRACK_REPEATED_ELEMENT');
                _PCM_editor.setOverlaysInRepeatedElements(data.data);

            } else if (data.message == "GET_DATA_LAYER_OBJECT") {
                var message = _PCM_editor.setMessageToParent('ANSWER_DATA_LAYER_OBJECT');
                message.dataLayerObj = {};
                if (data.dataLayerName){
                    if (window[data.dataLayerName]) {
                        message.dataLayerObj = window[data.dataLayerName];
                    }
                }
                e.source.postMessage(message, e.origin);
            }
        }
    }
}

window._PCM_editor = new _pcmEditorPrototype();

function indexOf(needle) {
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
};
