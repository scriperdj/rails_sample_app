/*
 * =================================================================
 * Copyright 2013-2015 Popcorn Metrics Ltd
 * Terms of use: http://popcornmetrics.com/legal
 * =================================================================
 */
/* New file created automaticaly on S3 for user 2013hz78227@wilp.bits-pilani.ac.in | domain: http://localhost:3000/ */
function _PCM_settingsPrototype() {
}
function _pcmAppendEvents() {
  console.log("in append events");
  //Auto-Generated code:
  //timeStamp: 2015-10-27T10:20:48+00:00
  _PCM.addPageEvent({
      type: "EVENT",
      customData: [
          {
              property: "page view",
              dataSource: "EVENT"
          }
      ],
      path: [
          {
              type: {
                  path: !0,
                  hash: !1,
                  query: !1
              },
              include: !0,
              pattern: "^([\\s\\S]*)$"
          }
      ],
      tools: {
          intercom: !1,
          customerio: !1,
          trakio: !1,
          segmentio: !0,
          woopra: !1,
          kissMetrics: !1,
          mixpanel: !1,
          googleAnalytics: !1
      }
  }),
  _PCM.addEvent({
  	selector: "div:nth-child(1) > section:nth-child(2) > a:nth-child(3)",
  	path: [{
  		type: {
  			path: !0,
  			hash: !1,
  			query: !1
  		},
  		include: !0,
  		pattern: "^((\\/|)(\\/|))$"
  	}],
  	eventName: "signup click",
  	elementContent: {
  		innerText: "SignUp",
  		childElementCount: 0
  	},
  	eventProperties: {
  		eventCategory: "PopcornMetrics",
  		eventAction: "click"
  	},
  	eventData: {
  		data: {
  			"title in page": "selector=div:nth-child(1) > section:nth-child(2) > h1:nth-child(1)"
  		},
  		specialProperties: {},
  		container: {
  			multipleElements: !1
  		},
  		dimensions: {},
  		metrics: {},
  		scope: "SINGLE_HIT"
  	},
  	userProperties: {},
  	trackingRequestId: "5656d86be0ba71fa7b0703ae",
  	identify: !1,
  	register: !1,
  	identityDataLayer: !1,
  	tools: {
  		intercom: !1,
  		customerio: !1,
  		trakio: !1,
  		segmentio: !0,
  		woopra: !1,
  		kissMetrics: !1,
  		mixpanel: !1,
  		googleAnalytics: !1
  	}
  }), _PCM.initialize()
  }
  _PCM_settingsPrototype.prototype = {
  		settings: {
  			account: {
  				domainId: "5656c2fe06b25703007c9331"
  			},
  			ga: {
  				installScript: !1,
  				trackUserId: !1,
  				trackingId: ""
  			},
  			intercom: {
  				isIntercomEnabled: !1,
  				installWidget: !1,
  				appId: ""
  			},
  			dataLayerObj: {},
  			debug: !1,
  			trackPageLoads: !0
  	},
  createScriptTag: function (t, e) {
    var n = document,
    i = t,
    a = n.createElement('script');
    a.type = 'text/javascript',
    a.async = !0,
    a.src = i + e;
    var o = n.getElementsByTagName('script') [0];
    o.parentNode.insertBefore(a, o)
  },
  cacheBustingTimestamp: function () {
    var t = new Date,
    e = t.getTime().toString();
    console.log("cacheBust e=" + e);
    console.log("e.slice(0, 7)=" + e.slice(0, 7));
    return e = e.slice(0, 7) + '000000'
  },
  loadPopcornLib: function (t) {
    console.log("in loadProcorn!");
    _PCM_settings.createScriptTag('/', t + '?v=' + _PCM_settings.cacheBustingTimestamp())
  },
  whenAvailable: function (t, e) {
    console.log("in setting prototype whenAvail");
    var n = 10;
    window.setTimeout(function () {
      window[t] ? e(window[t])  : window.setTimeout(arguments.callee, n)
    }, n)
  }
},
window._PCM_settings = new _PCM_settingsPrototype,
_PCM_settings.loadPopcornLib('popcorn-track-unmin-orig.js'),
_PCM_settings.whenAvailable('_PCM', function () {
  console.log("in whenAvail exec");
  _PCM.supportedBrowser() && (_PCM_settings.settings.trackPageLoads && window._PCM.trackPageLoad('Page Load', _PCM_settings.settings.account.domainId), _pcmAppendEvents())
});
