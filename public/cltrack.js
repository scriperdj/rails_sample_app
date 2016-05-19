(function e(t, n, r) {
	function s(o, u) {
		if (!n[o]) {
			if (!t[o]) {
				var a = typeof require == "function" && require;
				if (!u && a) return a(o, !0);
				if (i) return i(o, !0);
				var f = new Error("Cannot find module '" + o + "'");
				throw f.code = "MODULE_NOT_FOUND",
				f
			}
			var l = n[o] = {
				exports: {}
			};
			t[o][0].call(l.exports, function (e) {
				var n = t[o][1][e];
				return s(n ? n: e)
			},
			l, l.exports, e, t, n, r)
		}
		return n[o].exports
	}
	var i = typeof require == "function" && require;
	for (var o = 0; o < r.length; o++) s(r[o]);
	return s
})({
		start : [function (require, module, exports) {
			var appHost = "localhost" //Eg: customerlabs.co
			var appUrl = "http://localhost:8000";
			var AddEvent = require('add_event');
			var AddListeners = require('add_listeners');
			var Utils = require('utils');
			window.gbVar = {};
			window.gbVar.elementPropertyType = ['strong', 'textarea', 'input', 'p', 'a', 'div', 'span','h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'caption', 'legend', 'th', 'title' ];
		  var events = new AddEvent();
			var attach_listeners = new AddListeners();
			var utils = new Utils();
			var observeDOM = utils.getObserver();
			var queries = utils.getValuesFromUrl();
			/**
			* List of events from difined from visualizer.
			*/
			var CONFIG_EVENTS = [];
			/**
			* List of Lifecycle stages defined.
			*/
			window.gbVar.LIFECYCLE_STAGES = [];
			window.track_events = [];
			var add_dod = function(e){
				urlPath = "localhost:8000"
				console.log("inside dod");
				a = document.createElement('script');
				m = document.getElementsByTagName('script')[1];
				a.src = '//'+urlPath.toString()+'/static/js/dod.js';
				m.parentNode.insertBefore(a, m);
				a = document.createElement('link');
				a.type="text/css";
				a.href='//'+urlPath+'/static/css/dod.css';
				a.rel="stylesheet";
				el = document.getElementsByTagName('head')[0];
				el.appendChild(a);
				/*		function whenAvailable(name, callback) {
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
					});*/
			};

			var start_tracking = function(){
				/**
				* Set User Id with exp date as 1 yr and extend the date for each req.
				*/
				if(utils.getCookie('cl_uid')[0]!= undefined){
					utils.setCookie('cl_uid',utils.getCookie('cl_uid')[0],365);
					window.gbVar.cl_uid = utils.getCookie('cl_uid')[0];
					window.gbVar.cl_vTyp = "Returning";
				}else{
					utils.setCookie('cl_uid',"CL."+utils.Bd()+"."+utils.Bd()+"."+utils.Bd()+"."+utils.Bd(),365);
					window.gbVar.cl_uid = utils.getCookie('cl_uid')[0];
					window.gbVar.cl_vTyp = "New";
				}

				/**
				* Set the source of visit (refferer or from url)
				*/

				if (queries){
					var utmSource = queries.utm_source ? queries.utm_source  : "";
				}
				var reffer = encodeURIComponent(document.referrer);
				console.log("Referer=" + reffer);
				console.log("location host=" + location.host);
				console.log("index of loc=" + decodeURIComponent(reffer).indexOf(location.host));
				var Source = utmSource ? utmSource : (decodeURIComponent(reffer).indexOf(location.host) == -1 ? (reffer ? reffer : "Direct") : "Direct");
				/**
				* Set Session Id with exp time as 30 min and extend the time for each req.
				*/
				if(utils.getCookie('cl_sid')[0]!= undefined){
					utils.setCookie('cl_sid',utils.getCookie('cl_sid')[0],1);
					window.gbVar.cl_sid = utils.getCookie('cl_sid')[0];
					window.gbVar.cl_source = utils.getCookie('cl_source')[0];
					console.log("Old session renewed!");
					/**
					*If source of visit is different then change the session & source cookie
					*/
					console.log("Source=" + decodeURIComponent(Source));
					console.log("Source from cookie=" + decodeURIComponent(window.gbVar.cl_source));
					if (decodeURIComponent(Source) != decodeURIComponent(window.gbVar.cl_source)){
						utils.setCookie('cl_sid',"CL."+utils.Bd()+"."+utils.Bd(),1);
						window.gbVar.cl_sid = utils.getCookie('cl_sid')[0];
						utils.setCookie('cl_source',Source,1);
						window.gbVar.cl_source = utils.getCookie('cl_source')[0];
						var cl_ev_list = [];
						utils.setCookie('cl_ev_lst',cl_ev_list,1);
						console.log("source change! new session !");
					}
		    }else{
					utils.setCookie('cl_sid',"CL."+utils.Bd()+"."+utils.Bd(),1);
					window.gbVar.cl_sid = utils.getCookie('cl_sid')[0];
					utils.setCookie('cl_source',Source,1);
					window.gbVar.cl_source = utils.getCookie('cl_source')[0];
					var cl_ev_list = [];
					utils.setCookie('cl_ev_lst',cl_ev_list,1);
					console.log("New session after 30 min inactive");
				}

				console.log("window.gbVar.cl_uid=" + window.gbVar.cl_uid);
				console.log("window.gbVar.cl_sid=" + window.gbVar.cl_sid);
				console.log("window.gbVar.cl_vTyp=" + window.gbVar.cl_vTyp);

				/**
				* Initialize
				* 1) eventsBucket object
				* 2) list of events for current session
				* 3) Initialize current path variables
				* 4) Find the events for current path and
				*    Add listeners for each events from the visualizer
				*/
				window.gbVar.initialize = (function(){
					return function(){
							window.gbVar.eventsBucket = {
							        pageEvents: [],
							        allEvents: [],
							        currentPath: {},
							};

							var ev = decodeURIComponent(utils.getCookie('cl_ev_lst')[0]);
							window.gbVar.sess_events_list = (ev == "" ? [] : decodeURIComponent(utils.getCookie('cl_ev_lst')[0]).split(','));
							console.log("->list of ev for current session=" + window.gbVar.sess_events_list);

							window.gbVar.eventsBucket.currentPath = utils.splitUrl();

							CONFIG_EVENTS.forEach(function(clevent) {
								events.add(clevent);
							});
							attach_listeners.findElements(window.gbVar.eventsBucket, document);
						}
				})();

				window.gbVar.initialize();
				_cl.track('pageview');

				/**
				* Initialize variables if there is some change in DOM.
				*/
				observeDOM( document ,function(){
				    console.log('dom changed');
						window.setTimeout(window.gbVar.initialize(), 10);
				});
				/**
				* Check if the URL changed and trigger pageview event.
				*/
				var oldLocation = location.href;
				setInterval(function() {
						if(location.href != oldLocation) {
								console.log('url changed');
								_cl.track('pageview');
								window.setTimeout(window.gbVar.initialize(), 10);
								oldLocation = location.href
						}
				}, 1000); // check every second


				/**
				* Send tracking object to server if,
				* 1) If its been a minute after page load
				* 2) Before page unload.
				*/
				setInterval(attach_listeners.sendObj, 60000);
				window.addEventListener("beforeunload", function (e){attach_listeners.sendObj();return null;});

				/**
				* Call the appropriate function from the global queue
				*/
				var clq = window['_cl'] || [];
				var cl = require('./');
				while (clq && clq.length > 0) {
					var args = clq.shift();
					var method = args.shift();
					if (cl[method]) cl[method].apply(cl, args);
				}
				/**
				* Replace global queue with cl.
				*/
				window['_cl'] = cl;
				/**
				* Process pending events
				*/
				pendingEnc = decodeURIComponent(utils.getCookie('pendingData')[0]);
				if (pendingEnc != 'undefined'){
					console.log("pending=" + atob(pendingEnc));
					eventData = window.atob(pendingEnc);
					eventObj = JSON.parse(eventData);
					console.log("eventData=" + eventObj.eventName);
					var elements = document.querySelectorAll(eventObj.successData.selector);
					if (elements.length > 0){
						for (var i=0, element; element = elements[i]; i++){
							//if(element.textContent.replace(/\s/g, '') == eventObj.successData.innerText.replace(/\s/g, '')){
								_cl.track(eventObj.eventName, eventObj.customProperties);
								console.log("pending processed!");
								document.cookie = 'pendingData' + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
							//}

						};
					}
				}

			};
			var define_events = false,msg;
			var callback = function(e){
				console.log("callback called!");
				if (e.origin === appUrl){
					if(e.data.scope == "DEFINE"){
						define_events = true;
						msg=e;
					}
				}
			};

			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
			eventer(messageEvent, callback, false);
			//var body_tag = document.getElementsByTagName('body')[0];
			window._cl_messenger_added = "true";
			console.log("define_events=" + define_events);
			console.log("window.frameElement=" + (window.self !== window.top));
			var frameParent = document.referrer ? new URL(document.referrer).hostname : ""
			console.log("frameParent=" + frameParent);
			if( frameParent == appHost){
				console.log("frameParent is matching");
			};
			setTimeout(function(){ (define_events || ((window.self !== window.top) && (frameParent == appHost))) ? add_dod(msg) : start_tracking(); }, 100);



				// Observe a specific DOM element:
			/*	setTimeout(function(){observeDOM( document ,function(){
						console.log('dom changed');
						var message = {
							scope : "DOM_CHANGE",
     				};
						parent.postMessage(message, "*");
				})},1000); */

		},{"./":2}],

		2: [function(require, module, exports) {

			var cl = require('cl.js-core');
			module.exports = cl;

		}, {"cl.js-core":4}],

		4: [function(require, module, exports) {

			var ClObj = require('./cl');

			var cl = module.exports = exports = new ClObj();

			cl.require = require;

		}, {"./cl":5}],

		5: [function(require, module, exports) {

			var _cl = window['_cl'];
			exports = module.exports = ClObj;
			window.trackObj = [];
			function ClObj() {};
			var Utils = require('utils');
			var utils = new Utils();

			/**
			* Attach other values to the attributes sent for tracking
			*/
			ClObj.prototype.track = function(event, properties, options, fn) {
			  console.log("ClObj track! > " + event);
				var processEvents = require('process_events');
				var process_events = new processEvents();
				o={},o.event=event;
				o.attributes= properties ? properties : {};
				o.tstamp=1*new Date();
				lsid_change = process_events.trackPush(o);
				console.log("lsid_change= " + lsid_change);
			  return this;
			};

			/**
			* Send the Identify object to server.
			*/
			ClObj.prototype.identify = function(id, traits, options, fn){
				o = {};
				if (id != undefined){
					o.id = id;
				};
				if (traits != undefined){
					o.traits = traits;
				};
				o.uid = window.gbVar.cl_uid;

				o.lsid = (lsid = utils.getCookie('cl_lsid')[0]) != undefined ? lsid : 0

				console.log("Identify>>> " + JSON.stringify(o));
				if (btoa) {
				//	var url = '//ec2-50-16-40-137.compute-1.amazonaws.com';
					var url = '//io.customerlabs.co';
					identifyData = btoa(encodeURIComponent(escape(JSON.stringify(o))));
					var params = "identify=" + identifyData;
					var request = utils.createCORSRequest('POST', url );

					request.onreadystatechange = function() {
					  if (request.readyState == 4 && request.status == 200) {
							var id = utils.getCookie('cl_uid')[0];
							if ((id != request.responseText) && (request.responseText != "false")){
								console.log("id not equal, setting id to one from es");
								utils.setCookie('cl_uid',request.responseText,365);
								window.gbVar.cl_uid = request.responseText;
							}
					  }
					};
					if (request) {
							request.send(params);
					}
				}
			};

			ClObj.prototype.noConflict = function(){
			  window['_cl'] = _cl;
			  return this;
			};

		}, {}],

		getElementsValues : [function (require, module, exports) {
			var getElementsValues = function(){};

			var indexOf = function (needle) {
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
            } else if (indexOf.call(window.gbVar.elementPropertyType, tagName.toLowerCase()) !== -1){
							//	console.log("inner!!!>" + object.textContent)
                return  object.textContent;
              }
          } else if (typeof object === "string" || typeof object === "boolean") {
			//			console.log("in string!!!");
              return object;
          }
      };

			function getMultipleElementsContainer(targetNode, parentContainerObj){
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
			};

			module.exports = getElementsValues = (function () {
				getElementsValues.prototype.getVals = function(objects, targetNode, parentContainerObj) {
					var multipleElementsObj = {multipleElements: false, containerNode: false};
		         if (parentContainerObj !== undefined && targetNode !== undefined) {
			//			console.log("targetNode=" + JSON.stringify(targetNode));
			//			console.log("parentContainerObj=" + JSON.stringify(parentContainerObj));
		             multipleElementsObj = getMultipleElementsContainer(targetNode, parentContainerObj);
		         }
					var valuesObjects = {};
			//		console.log("objects=" + JSON.stringify(objects));
					for (var index in objects.data){
			//			console.log("index=" + index);
						//console.log("objects[index]=" + objects.data[index]);
	             // get Element from selector
	             objects[index] = getElementObj(objects.data[index], multipleElementsObj);
				//		console.log("objects[index]=" + objects[index]);
	             // get Values from the Element
	             valuesObjects[index] = getElementValue(objects[index]);
				//		console.log("valuesObjects[index]=" + JSON.stringify(valuesObjects[index]));
    			}
      		return valuesObjects;
				}
				return getElementsValues;
			})();

		}, {}],

		process_events : [function (require, module, exports) {
			var processEvents = function(){};
			var Utils = require('utils');
			var utils = new Utils();
			var deviceType = function(){
				var type = "Desktop";
				if(typeof window.orientation !== 'undefined'){
					type = "Mobile";
				}
				return type;
			}

			var screenSize = function(){
				var size = '';
        if (screen.width) {
            width = (screen.width) ? screen.width : '';
            height = (screen.height) ? screen.height : '';
            size += '' + width + " x " + height;
        }
				return size;
			}

			var browserName = function() {
				var sBrowser = "unknown";
        var sUsrAg = navigator.userAgent;

				if((verOffset = sUsrAg.indexOf("Edge")) > -1) {
						version = sUsrAg.substring(verOffset + 5);
            sBrowser = "Microsoft Edge"; // + version ;
        } else if ((verOffset = sUsrAg.indexOf("MSIE")) > -1) {
					  version = sUsrAg.substring(verOffset + 5);
            sBrowser = "Microsoft Internet Explorer";// + version;
        } else if((verOffset = sUsrAg.indexOf("Chrome")) > -1) {
						version = sUsrAg.substring(verOffset + 7);
            sBrowser = "Google Chrome" ;//+ version;
        } else if ((verOffset = sUsrAg.indexOf("Firefox")) > -1) {
						version = sUsrAg.substring(verOffset + 8);
            sBrowser = "Mozilla Firefox";// + version;
        } else if ((verOffset = sUsrAg.indexOf("Android")) > -1) {
						version = sUsrAg.substring(verOffset + 8);
            sBrowser = "Android" ;//+ version;
        } else if ((verOffset = sUsrAg.indexOf("BlackBerry")) > -1) {
						version = sUsrAg.substring(verOffset + 11);
            sBrowser = "BlackBerry";// + version;
        } else if ((verOffset = sUsrAg.indexOf("Opera Mini")) > -1) {
						version = sUsrAg.substring(verOffset + 11);
						if ((verOffset = sUsrAg.indexOf('Version')) != -1) {
                version = sUsrAg.substring(verOffset + 8);
            }
            sBrowser = "Opera Mini";// + version;
        } else if ((verOffset = sUsrAg.indexOf("IEMobile")) > -1) {
						version = sUsrAg.substring(verOffset + 9);
            sBrowser = "Microsoft Internet Explorer Mobile";// + version;
        } else if (sUsrAg.indexOf('Trident/') != -1) {
            version = sUsrAg.substring(sUsrAg.indexOf('rv:') + 3);
						sBrowser = 'Microsoft Internet Explorer';// + version;
        } else if ((verOffset = sUsrAg.indexOf("Safari")) > -1) {
						version = sUsrAg.substring(verOffset + 7);
						if ((verOffset = sUsrAg.indexOf('Version')) != -1) {
                version = sUsrAg.substring(verOffset + 8);
            }
            sBrowser = "Apple Safari";// + version;
        } else if ((verOffset = sUsrAg.indexOf("Opera")) > -1) {
            version = sUsrAg.substring(verOffset + 6);
            if ((verOffset = sUsrAg.indexOf('Version')) != -1) {
                version = sUsrAg.substring(verOffset + 8);
            }
						sBrowser = "Opera";// + version ;
        } // Other browsers
        else if ((nameOffset = sUsrAg.lastIndexOf(' ') + 1) < (verOffset = sUsrAg.lastIndexOf('/'))) {
					version = sUsrAg.substring(verOffset + 1);
					sBrowser = sUsrAg.substring(nameOffset, verOffset) + ' ' + version;
          if (sBrowser.toLowerCase() == sBrowser.toUpperCase()) {
							sBrowser = navigator.appName;
          }
        }

        return sBrowser;
			};
			var osName = function(){
				var oSName="Unknown OS";
				var sUsrAg = navigator.userAgent;

				var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
						{s:'Windows', r:/Windows/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Linux', r:/(Linux|X11)/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(sUsrAg)) {
							oSName = cs.s;
                break;
            }
        }
        return oSName;
			};

			var sourceType = function(){
				var type = "Unknown";
				var source = decodeURIComponent(window.gbVar.cl_source);
				var sourceStrings = [
            {s:'Paid', r:new RegExp("Facebook", 'i')},
            {s:'Paid', r:new RegExp("Adwords", 'i')},
            {s:'Paid', r:new RegExp("Linkedin", 'i')},
            {s:'Paid', r:new RegExp("Twitter", 'i')}
        ];
				for (var id in sourceStrings) {
            var cs = sourceStrings[id];
            if (cs.r.test(source)) {
								type = cs.s;
                break;
            }
        }
				return type;
			}

			var valueTrack = function(){
				var param = {};
				function getParameterByName(name) {
				    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
				    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
				        results = regex.exec(location.search);
				    return results === null ? results : decodeURIComponent(results[1].replace(/\+/g, " "));
				}
				if (val = getParameterByName('matchtype')){
					param.matchtype = val;
				}
				if (val = getParameterByName('network')){
					param.network = val;
				}
				if (val = getParameterByName('device')){
					param.device = val;
				}
				if (val = getParameterByName('devicemodel')){
					param.devicemodel = val;
				}
				if (val = getParameterByName('creative')){
					param.creative = val;
				}
				if (val = getParameterByName('keyword')){
					param.keyword = val;
				}
				if (val = getParameterByName('placement')){
					param.placement = val;
				}
				if (val = getParameterByName('target')){
					param.target = val;
				}
				if (val = getParameterByName('adposition')){
					param.adposition = val;
				}
				return param;
			}

			var evProperties = function() {

				var sBrowser = browserName();
				var os   = osName();
				var res   = screenSize();
				var src_type = sourceType();
				var v_trk = valueTrack();
				var device_type = deviceType();
				var path     = window.location.href;
				var eventProperties = {
            uid:window.gbVar.cl_uid,
						sid:window.gbVar.cl_sid,
						src: decodeURIComponent(window.gbVar.cl_source),
						src_typ: src_type,
						val_trk: v_trk,
						v_typ:window.gbVar.cl_vTyp,
						title: document.title,
						link: path,
						browser:sBrowser, platform:os, mobile_desktop: device_type,
						screen_size: res
        };
				return eventProperties;
			};

			var checkLifecycle = function(){
				var lyf = 0;
				for ( s in window.gbVar.LIFECYCLE_STAGES){
					var stage = window.gbVar.LIFECYCLE_STAGES[s];
					var stage_events = stage.events.split(" > ");
			//		console.log("stage events = " + stage_events);
					if ((ind = window.gbVar.sess_events_list.indexOf(stage_events[0])) > -1){
				//		console.log("ind= " + ind);
						var len = stage_events.length;
				//		console.log("len=" + len)
						var evnts_match = false;
						for (i = 0; i < len; i++){
					//		console.log("window.gbVar.sess_events_list[ind]= " + window.gbVar.sess_events_list[ind]);
					//		console.log("stage_events[i] = " + stage_events[i]);
							if(window.gbVar.sess_events_list[ind] == stage_events[i]){
								evnts_match = true;
								ind++;
							} else {
								evnts_match = false;
								break;
							}
						}
						if (evnts_match){
							lyf = stage.LSID
						}
					}
				};
				console.log(">>lyf = " + lyf);
				return lyf;
			}

			module.exports = processEvents = (function () {

				processEvents.prototype.trackPush = function (cl_event){
						var update_lsid = false;
						properties = evProperties();
						for (key in properties){
							cl_event[key] = properties[key];

						}

						window.gbVar.sess_events_list.push(cl_event.event.replace(/\s+/g, '_').toLowerCase());
						utils.setCookie('cl_ev_lst',window.gbVar.sess_events_list);
						cl_event.lsid = checkLifecycle();o={},o.lsid=cl_event.lsid;
						//Set LSID for thie 1st time
						if(utils.getCookie('cl_lsid')[0]== undefined){
							if (cl_event.lsid != 0){
								utils.setCookie('cl_lsid',cl_event.lsid, 365);
								window.gbVar.lsid = utils.getCookie('cl_lsid')[0];
								update_lsid = true;
							} else {
								window.gbVar.lsid = cl_event.lsid;
							}

						} else {
							console.log("lsid is in cookie");
							old_lsid = utils.getCookie('cl_lsid')[0];
							window.gbVar.lsid = old_lsid;
							//Reset LSID if the its higher.
							if (cl_event.lsid > old_lsid){

								console.log("new lsid is greater");
								utils.setCookie('cl_lsid',cl_event.lsid, 365);
								window.gbVar.lsid = utils.getCookie('cl_lsid')[0];
								update_lsid = true;

							}
						}
						console.log("Event Obj =" + JSON.stringify(cl_event));
						window.track_events.push(cl_event);
						return update_lsid;
				};

				processEvents.prototype.process = function(eventObj, propertiesObj) {
					_cl.track(eventObj.eventName, propertiesObj.customProperties);

				}

				return processEvents;
			})();
		},{}],

		add_listeners : [function (require, module, exports) {
			var addListeners = function(){};
			var getValues = require('getElementsValues');
			var processEv = require('process_events');
			var Utils = require('utils');
			var utils = new Utils();
			var process_event = new processEv();
			var getElementsVals = new getValues();
			var eventProperties = function(targetNode, eventObj) {
			  var customProperties = getElementsVals.getVals(eventObj.eventData, targetNode, eventObj.eventData.container);
				return {customProperties: customProperties};
			};

			var sendEvents = function(targetNode, eventObj){
		//		console.log("eventObj=" + JSON.stringify(eventObj));
				var propertiesObj = eventProperties(targetNode, eventObj);
				// send events
				if(eventObj.identify == false){
					process_event.process(eventObj, propertiesObj);
				} else if(eventObj.identify == true){
					//alert("identify")
					eventData = {};
					eventData.eventName = eventObj.eventName;
					eventData.customProperties = propertiesObj.customProperties;
					eventData.successData = eventObj.successData;
					data = btoa(JSON.stringify(eventData));
				//	alert("encode= " + data + "   >>>>decode=" + atob(data))
					utils.setCookie("pendingData",data,1);
				}

			};

			var attachListeners = function(e, ev){
				e.forEach(function(event){
				//	console.log("event=" + JSON.stringify(event));
					var eventAction = ev.eventProperties.eventAction;
					var clAttrib = event.element.getAttribute('_cl_tracker_added');
					if(!clAttrib){
						event.element.setAttribute('_cl_tracker_added', "true");
						if (event.element.addEventListener){
						//	console.log("listner add! ev.eventData=" + JSON.stringify(ev.eventData));
							event.element.addEventListener(eventAction, function (evt){
								console.log("callback for event triggered!!!");
								console.log("ev.identify=" + ev.identify);
								sendEvents(evt.currentTarget, ev);


							}, false);
						}
		        else if (event.element.attachEvent) event.element.attachEvent('on' + eventAction, function (evt){
					//		console.log("callback for event triggered!!!");
							sendEvents(evt.currentTarget, ev);
						});
					}

				});

			};

			module.exports = addListeners = (function () {
				addListeners.prototype.sendObj = function (){
						console.log("window.track_events.length=" + window.track_events.length);
						if (window.track_events.length > 0){
							if (btoa) {
								console.log("JSON.stringify window.track_events=" + JSON.stringify(window.track_events));
								var url = '//io.customerlabs.co';
								//var url = '//d3lz29zz7oy9j6.cloudfront.net';
								eventData = btoa(encodeURIComponent(escape(JSON.stringify(window.track_events))));
								var request = utils.createCORSRequest('POST', url);
								var params = "data=" + eventData;
								if (request) {
										request.send(params);
										window.track_events = [];
								}
						}
					}
					return null;
				};

				addListeners.prototype.findElements = function(eventsBucket, scope) {
					eventsBucket.allEvents.forEach(function(e){
		//				console.log('e.selector=' + e.selector);
						var elements = scope.querySelectorAll(e.selector);
		//				console.log("elements=" + elements[0]);
		//				console.log('len=' + elements.length);
						if (elements.length > 0){
							var eventsToAttach = [];
							for (var i=0, element; element = elements[i]; i++){
								eventsToAttach.push({element: element, eventData: e.eventData, DOMready: true});
							};
							if (eventsToAttach.length > 0){
                attachListeners(eventsToAttach, e);
              }
						}
					});
				};
				return addListeners;
			})();
		}, {}],

		utils : [function (require, module, exports) {
			var utils = function(){};
			function getPath(url, type) {
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
			module.exports = utils = (function () {
				utils.prototype.getObserver = function(){
						var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
								eventListenerSupported = window.addEventListener;

						return function(obj, callback){
								if( MutationObserver ){
										// define a new observer
										var obs = new MutationObserver(function(mutations, observer){
												if( mutations[0].addedNodes.length || mutations[0].removedNodes.length )
														callback();
										});
										// have the observer observe foo for changes in children
										obs.observe( obj, { childList:true, subtree:true });
								}
								else if( eventListenerSupported ){
										obj.addEventListener('DOMNodeInserted', callback, false);
										obj.addEventListener('DOMNodeRemoved', callback, false);
								}
						}
				};
				utils.prototype.createCORSRequest = function(method, url) {
					var xhr = new XMLHttpRequest();
		      if ("withCredentials" in xhr) {
			      try{
							xhr.open(method, url, false);
						} catch(e){
							console.log('Error sending HTTP GET request!');
							return false;
						}

		      } else if (typeof XDomainRequest !== "undefined") {
			      xhr = new XDomainRequest();
						try{
							xhr.open(method, url);
						} catch(e){
							console.log('Error sending HTTP GET request!');
							return false;
						}

		      } else {
			      xhr = null;
		      }
					xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				  return xhr;
				};
				utils.prototype.splitUrl = function() {
					var origin = window.location.origin;
            var url = window.location.href;
            var fullPath = url.split(origin)[1];
            return {path: getPath(fullPath, "path"),
                    pathWithHash: getPath(fullPath, "hash"),
                    pathWithQuery: getPath(fullPath, "query")
                   };
				};
				utils.prototype.getCookie = function(name) {
					var b = [], c = document['cookie']['split'](";");
					a = new RegExp("^\\s*" + name + "=\\s*(.*?)\\s*$");
					for (var d = 0, len = c['length']; d < len; d++) {
			        var e = c[d]["match"](a);
			        e && b["push"](e[1])
			    }
			    return b
				};
				utils.prototype.getValuesFromUrl = function () {
				  var query = location.search.substr(1);

					if(query){
						var result = {};
						query.split("&").forEach(function(part) {
					    var item = part.split("=");
					    result[item[0]] = decodeURIComponent(item[1]);
					  });
					}

				  return result;
				};

				utils.prototype.setCookie = function(cookieName, value, expirydays, path, domain, secure) {
					var expiryDate;
			    if (!navigator.cookieEnabled) {
			        return;
			    }
			    if (expirydays!=1) {
			        expiryDate = new Date();
			        expiryDate.setTime(expiryDate.getTime() + (expirydays * 86400000));
			    }else{
			        expiryDate = new Date();
			        expiryDate.setTime(expiryDate.getTime() + (expirydays * 1800000));
			    }
			    document.cookie = cookieName + "=" + encodeURIComponent(value)
														+ (expirydays ? ";expires=" + expiryDate.toGMTString() : "")
														+ ";path=" + (path || "/") + (domain ? ";domain=" + domain : "")
													  + (secure ? ";secure" : "");
				}
				//Return random generated series of numbers
				utils.prototype.Bd = function() {
		      try {
		        var a = new Uint32Array(1);
		        window.crypto.getRandomValues(a);
		        return a[0] & 2147483647
		      } catch (b) {
		        return Math.round(2147483647 * Math.random())
		      }
		    };

				return utils;
			})();
		}, {}],

		add_event : [function (require, module, exports) {
			var addEvent = function (){};
			var assignMatchPath = function (type) {
				if (type.query) {
            return getPathObj.query;
        }
        if (type.hash) {
            return getPathObj.hash;
        }
				return getPathObj.path;
			};

			var getPathObj = {
				path: function() {
					return window.gbVar.eventsBucket.currentPath.path;
				},
				query: function() {
					return window.gbVar.eventsBucket.currentPath.pathWithQuery;
				},
				hash: function() {
					return window.gbVar.eventsBucket.currentPath.pathWithHash;
				}
			};

			module.exports = addEvent = (function () {
				addEvent.prototype.add = function (clEvent) {
					var include = false,
					fireMatches = false,
					dontFireMatches = false;
					for (var i = 0; i < clEvent.path.length; i++) {
								var pattern = new RegExp (clEvent.path[i].pattern, 'i');
								var matchPath = assignMatchPath(clEvent.path[i].type);
								if (clEvent.path[i].include) {
                    if(pattern.test(matchPath())){
                        fireMatches = true;
                    }
                } else {
										if(pattern.test(matchPath())){
												dontFireMatches = true;
										}
								}
					}
					if (dontFireMatches) {
						include = false;
          } else {
              if (fireMatches) {
								include = true;
              }
          }
					clEvent.isBlocked = false;
					clEvent.firedElements = [];
					if (include){
						window.gbVar.eventsBucket.allEvents.push(clEvent);
					}

  			}

				return addEvent;
			})();

		},{}]

	},
{},['start']);
