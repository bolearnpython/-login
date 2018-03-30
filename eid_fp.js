var start_time = (new Date).getTime()
  , _CurrentPageProtocol = "https:" == document.location.protocol ? "https://" : "http://"
  , _JdJrTdRiskDomainName = "gia.jd.com";
function JdJrTdFingerDataStream(f, m, q) {
    if ("undefined" !== typeof f && 0 != f)
        if (void 0 === m && (m = 1),
        void 0 === q && (q = 15),
        !_eidFlag && m < q)
            setTimeout(function() {
                JdJrTdFingerDataStream(f, m, q)
            }, 20 * m),
            m++;
        else {
            if ("undefined" !== typeof jd_risk_token_id && 0 < _JdEid.length && 0 < _JdJrTdRiskFpInfo.length) {
                var t = _jdJrTdCommonsObtainPin();
                0 < t.length && (t = {
                    p: t,
                    fp: _JdJrTdRiskFpInfo,
                    e: _JdEid,
                    ct: (new Date).getTime(),
                    t: jd_risk_token_id,
                    opt: f
                },
                jdJrTdsendJsonpRequest("stream.html", "?c=" + td_collect.tdencrypt(t)))
            }
        }
    else
        throw Error("sourceCode can not be null.");
}
function _jdJrTdRelationEidPin(f) {
    try {
        if (32 <= f.length) {
            var m = _jdJrTdCommonsObtainPin();
            if (0 < m.length) {
                f = {
                    o: _CurrentPageUrl,
                    p: m,
                    e: f,
                    f: _JdJrTdRiskFpInfo
                };
                var m = !1
                  , q = navigator.userAgent
                  , t = (m = 0 < q.indexOf("MSIE 7.0") || 0 < q.indexOf("MSIE 8.0") || 0 < q.indexOf("MSIE 9.0")) ? encodeURIComponent(td_collect.tdencrypt(f)) : td_collect.tdencrypt(f);
                jdJrTdsendJsonpRequest("r.html?v=" + Math.random() + "&d=" + t, "")
            }
        }
    } catch (v) {}
}
function _jdJrTdCommonsObtainPin() {
    var f = "";
    "string" === typeof pin ? f = pin : "object" === typeof pin && "string" === typeof jd_jr_td_risk_pin && (f = jd_jr_td_risk_pin);
    return f
}
if ("undefined" === typeof _jd_load_td_finger_flag) {
    var callEidfingerRisk_3AB9D23F7A4B3C9B = function(f) {
        try {
            32 <= f.length && (_eidFlag = !0,
            _JdEid = f,
            _JdJrRiskClientStorage.set("3AB9D23F7A4B3C9B", f),
            _jdJrTdRelationEidPin(f)),
            _JdJrReleaseResource()
        } catch (m) {}
    }
      , _JdJrReleaseResource = function() {
        var f = document.getElementById("userdata_el");
        f && f.parentNode && f.parentNode.removeChild(f);
        _JdJrRiskClientStorage = _JdJrTdRiskFp = _JdJrRiskClientCollectData = null
    }
      , jdJrTdsendJsonpRequest$27 = function(f, m) {
        try {
            var q = document.createElement("script");
            q.src = _CurrentPageProtocol + _JdJrTdRiskDomainName + "/" + f + m;
            document.body.appendChild(q)
        } catch (t) {}
    }
      , jdJrTdsendCorsRequest = function(f, m, q, t) {
        try {
            var v = navigator.userAgent;
            if (0 < v.indexOf("MSIE") && (0 < v.indexOf("MSIE 7.0") || 0 < v.indexOf("MSIE 8.0") || 0 < v.indexOf("MSIE 9.0")))
                return q += "&g=" + encodeURIComponent(m.g),
                jdJrTdsendJsonpRequest$27("fc.html", q);
            var r;
            try {
                r = new window.XMLHttpRequest
            } catch (d) {}
            if (!r)
                try {
                    r = new window.ActiveXObject("Microsoft.XMLHTTP")
                } catch (d) {}
            if (!r)
                try {
                    r = new window.ActiveXObject("Msxml2.XMLHTTP")
                } catch (d) {}
            if (!r)
                try {
                    r = new window.ActiveXObject("Msxml3.XMLHTTP")
                } catch (d) {}
            r.open("POST", f, !0);
            r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");
            r.onreadystatechange = function() {
                4 === r.readyState && 200 === r.status && t(r.responseText)
            }
            ;
            f = "";
            for (var p in m)
                f += ("" == f ? "" : "&") + (p + "=" + m[p]);
            r.send(f)
        } catch (d) {}
    }
      , td_collect_exe = function() {
        (function() {
            var f = _JdJrTdRiskFp.getData();
            (function(f, q, t) {
                _JdJrRiskClientStorage.get("3AB9D23F7A4B3C9B", function(m) {
                    var r = {
                        pin: _jdJrTdCommonsObtainPin(),
                        oid: f,
                        p: "https:" == document.location.protocol ? "s" : "h",
                        fp: t,
                        v: "2.4.0.1"
                    };
                    try {
                        r.o = _CurrentPageUrl
                    } catch (p) {}
                    void 0 !== m && null !== m && 0 < m.length && (_JdEid = m,
                    _eidFlag = !0);
                    "undefined" != typeof _JdEid && 0 < _JdEid.length && (r.fc = _JdEid);
                    m = !1;
                    m = navigator.userAgent;
                    m = 0 < m.indexOf("MSIE 7.0") || 0 < m.indexOf("MSIE 8.0") || 0 < m.indexOf("MSIE 9.0");
                    try {
                        r.t = jd_risk_token_id
                    } catch (p) {}
                    r = "?a=" + (m ? encodeURIComponent(td_collect.tdencrypt(r)) : td_collect.tdencrypt(r));
                    _JdJrRiskClientCollectData = td_collect.collect();
                    m = [];
                    m.g = td_collect.tdencrypt(q);
                    m.d = _JdJrRiskClientCollectData;
                    jdJrTdsendCorsRequest('http:' + "//" + _JdJrTdRiskDomainName + "/fcf.html" + r, m, r, function(f) {
                        32 <= f.length && (_JdEid = f,
                        _eidFlag = !0,
                        _JdJrRiskClientStorage.set("3AB9D23F7A4B3C9B", f),
                        _jdJrTdRelationEidPin(_JdEid),
                        _JdJrReleaseResource())
                    })
                })
            }
            )("string" === typeof orderId ? orderId : "", f, _JdJrTdRiskFpInfo)
        }
        )()
    }
      , _jd_load_td_finger_flag = !0
      , _jdfp_canvas_md5 = ""
      , _jdfp_webgl_md5 = ""
      , use_breakcollect = !0
      , _CurrentPageUrl = function() {
        var f = document.location.href.toString();
        0 < f.indexOf("?") && (f = f.substring(0, f.indexOf("?")));
        return f = f.substring(_CurrentPageProtocol.length)
    }();
    try {
        "undefined" == typeof _jd_load_td_finger_switch || _jd_load_td_finger_switch || (_jd_load_td_finger_flag = !1)
    } catch (f) {}
    (function() {
        if (_jd_load_td_finger_flag) {
            var f = document.createElement("script");
            f.src = _CurrentPageProtocol + "gia.jd.com/y.html?v=" + Math.random() + "&o=" + _CurrentPageUrl;
            f.async = !1;
            document.body.appendChild(f)
        }
    }
    )();
    (function(f, m, q) {
        "undefined" !== typeof module && module.exports ? module.exports = q() : "function" === typeof define && define.amd ? define(q) : m[f] = q()
    }
    )("JdJrTdRiskFinger", this, function() {
        function f(a) {
            if (null == a || void 0 == a || "" == a)
                return "undefined";
            var c;
            if (null == a || void 0 == a || "" == a)
                c = "";
            else {
                c = [];
                for (var b = 0; b < 8 * a.length; b += 8)
                    c[b >> 5] |= (a.charCodeAt(b / 8) & 255) << b % 32
            }
            a = 8 * a.length;
            c[a >> 5] |= 128 << a % 32;
            c[(a + 64 >>> 9 << 4) + 14] = a;
            a = 1732584193;
            for (var b = -271733879, g = -1732584194, e = 271733878, h = 0; h < c.length; h += 16) {
                var d = a
                  , l = b
                  , f = g
                  , k = e;
                a = q(a, b, g, e, c[h + 0], 7, -680876936);
                e = q(e, a, b, g, c[h + 1], 12, -389564586);
                g = q(g, e, a, b, c[h + 2], 17, 606105819);
                b = q(b, g, e, a, c[h + 3], 22, -1044525330);
                a = q(a, b, g, e, c[h + 4], 7, -176418897);
                e = q(e, a, b, g, c[h + 5], 12, 1200080426);
                g = q(g, e, a, b, c[h + 6], 17, -1473231341);
                b = q(b, g, e, a, c[h + 7], 22, -45705983);
                a = q(a, b, g, e, c[h + 8], 7, 1770035416);
                e = q(e, a, b, g, c[h + 9], 12, -1958414417);
                g = q(g, e, a, b, c[h + 10], 17, -42063);
                b = q(b, g, e, a, c[h + 11], 22, -1990404162);
                a = q(a, b, g, e, c[h + 12], 7, 1804603682);
                e = q(e, a, b, g, c[h + 13], 12, -40341101);
                g = q(g, e, a, b, c[h + 14], 17, -1502002290);
                b = q(b, g, e, a, c[h + 15], 22, 1236535329);
                a = t(a, b, g, e, c[h + 1], 5, -165796510);
                e = t(e, a, b, g, c[h + 6], 9, -1069501632);
                g = t(g, e, a, b, c[h + 11], 14, 643717713);
                b = t(b, g, e, a, c[h + 0], 20, -373897302);
                a = t(a, b, g, e, c[h + 5], 5, -701558691);
                e = t(e, a, b, g, c[h + 10], 9, 38016083);
                g = t(g, e, a, b, c[h + 15], 14, -660478335);
                b = t(b, g, e, a, c[h + 4], 20, -405537848);
                a = t(a, b, g, e, c[h + 9], 5, 568446438);
                e = t(e, a, b, g, c[h + 14], 9, -1019803690);
                g = t(g, e, a, b, c[h + 3], 14, -187363961);
                b = t(b, g, e, a, c[h + 8], 20, 1163531501);
                a = t(a, b, g, e, c[h + 13], 5, -1444681467);
                e = t(e, a, b, g, c[h + 2], 9, -51403784);
                g = t(g, e, a, b, c[h + 7], 14, 1735328473);
                b = t(b, g, e, a, c[h + 12], 20, -1926607734);
                a = m(b ^ g ^ e, a, b, c[h + 5], 4, -378558);
                e = m(a ^ b ^ g, e, a, c[h + 8], 11, -2022574463);
                g = m(e ^ a ^ b, g, e, c[h + 11], 16, 1839030562);
                b = m(g ^ e ^ a, b, g, c[h + 14], 23, -35309556);
                a = m(b ^ g ^ e, a, b, c[h + 1], 4, -1530992060);
                e = m(a ^ b ^ g, e, a, c[h + 4], 11, 1272893353);
                g = m(e ^ a ^ b, g, e, c[h + 7], 16, -155497632);
                b = m(g ^ e ^ a, b, g, c[h + 10], 23, -1094730640);
                a = m(b ^ g ^ e, a, b, c[h + 13], 4, 681279174);
                e = m(a ^ b ^ g, e, a, c[h + 0], 11, -358537222);
                g = m(e ^ a ^ b, g, e, c[h + 3], 16, -722521979);
                b = m(g ^ e ^ a, b, g, c[h + 6], 23, 76029189);
                a = m(b ^ g ^ e, a, b, c[h + 9], 4, -640364487);
                e = m(a ^ b ^ g, e, a, c[h + 12], 11, -421815835);
                g = m(e ^ a ^ b, g, e, c[h + 15], 16, 530742520);
                b = m(g ^ e ^ a, b, g, c[h + 2], 23, -995338651);
                a = v(a, b, g, e, c[h + 0], 6, -198630844);
                e = v(e, a, b, g, c[h + 7], 10, 1126891415);
                g = v(g, e, a, b, c[h + 14], 15, -1416354905);
                b = v(b, g, e, a, c[h + 5], 21, -57434055);
                a = v(a, b, g, e, c[h + 12], 6, 1700485571);
                e = v(e, a, b, g, c[h + 3], 10, -1894986606);
                g = v(g, e, a, b, c[h + 10], 15, -1051523);
                b = v(b, g, e, a, c[h + 1], 21, -2054922799);
                a = v(a, b, g, e, c[h + 8], 6, 1873313359);
                e = v(e, a, b, g, c[h + 15], 10, -30611744);
                g = v(g, e, a, b, c[h + 6], 15, -1560198380);
                b = v(b, g, e, a, c[h + 13], 21, 1309151649);
                a = v(a, b, g, e, c[h + 4], 6, -145523070);
                e = v(e, a, b, g, c[h + 11], 10, -1120210379);
                g = v(g, e, a, b, c[h + 2], 15, 718787259);
                b = v(b, g, e, a, c[h + 9], 21, -343485551);
                a = r(a, d);
                b = r(b, l);
                g = r(g, f);
                e = r(e, k)
            }
            c = [a, b, g, e];
            a = "";
            for (b = 0; b < 4 * c.length; b++)
                a += "0123456789abcdef".charAt(c[b >> 2] >> b % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(c[b >> 2] >> b % 4 * 8 & 15);
            return a
        }
        function m(a, c, b, g, e, h) {
            a = r(r(c, a), r(g, h));
            return r(a << e | a >>> 32 - e, b)
        }
        function q(a, c, b, g, e, h, d) {
            return m(c & b | ~c & g, a, c, e, h, d)
        }
        function t(a, c, b, g, e, h, d) {
            return m(c & g | b & ~g, a, c, e, h, d)
        }
        function v(a, c, b, g, e, h, d) {
            return m(b ^ (c | ~g), a, c, e, h, d)
        }
        function r(a, c) {
            var b = (a & 65535) + (c & 65535);
            return (a >> 16) + (c >> 16) + (b >> 16) << 16 | b & 65535
        }
        var p = {}
          , d = navigator.userAgent.toLowerCase()
          , w = navigator.language || navigator.browserLanguage;
        -1 != d.indexOf("ipad") || -1 != d.indexOf("iphone os") || -1 != d.indexOf("midp") || -1 != d.indexOf("rv:1.2.3.4") || -1 != d.indexOf("ucweb") || -1 != d.indexOf("android") || -1 != d.indexOf("windows ce") || d.indexOf("windows mobile");
        var k = "NA"
          , u = "NA";
        try {
            -1 != d.indexOf("win") && -1 != d.indexOf("95") && (k = "windows",
            u = "95"),
            -1 != d.indexOf("win") && -1 != d.indexOf("98") && (k = "windows",
            u = "98"),
            -1 != d.indexOf("win 9x") && -1 != d.indexOf("4.90") && (k = "windows",
            u = "me"),
            -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.0") && (k = "windows",
            u = "2000"),
            -1 != d.indexOf("win") && -1 != d.indexOf("nt") && (k = "windows",
            u = "NT"),
            -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (k = "windows",
            u = "xp"),
            -1 != d.indexOf("win") && -1 != d.indexOf("32") && (k = "windows",
            u = "32"),
            -1 != d.indexOf("win") && -1 != d.indexOf("nt 5.1") && (k = "windows",
            u = "7"),
            -1 != d.indexOf("win") && -1 != d.indexOf("6.0") && (k = "windows",
            u = "8"),
            -1 == d.indexOf("win") || -1 == d.indexOf("nt 6.0") && -1 == d.indexOf("nt 6.1") || (k = "windows",
            u = "9"),
            -1 != d.indexOf("win") && -1 != d.indexOf("nt 6.2") && (k = "windows",
            u = "10"),
            -1 != d.indexOf("linux") && (k = "linux"),
            -1 != d.indexOf("unix") && (k = "unix"),
            -1 != d.indexOf("sun") && -1 != d.indexOf("os") && (k = "sun os"),
            -1 != d.indexOf("ibm") && -1 != d.indexOf("os") && (k = "ibm os/2"),
            -1 != d.indexOf("mac") && -1 != d.indexOf("pc") && (k = "mac"),
            -1 != d.indexOf("aix") && (k = "aix"),
            -1 != d.indexOf("powerpc") && (k = "powerPC"),
            -1 != d.indexOf("hpux") && (k = "hpux"),
            -1 != d.indexOf("netbsd") && (k = "NetBSD"),
            -1 != d.indexOf("bsd") && (k = "BSD"),
            -1 != d.indexOf("osf1") && (k = "OSF1"),
            -1 != d.indexOf("irix") && (k = "IRIX",
            u = ""),
            -1 != d.indexOf("freebsd") && (k = "FreeBSD"),
            -1 != d.indexOf("symbianos") && (k = "SymbianOS",
            u = d.substring(d.indexOf("SymbianOS/") + 10, 3))
        } catch (a) {}
        var l = "NA"
          , n = "NA"
          , x = "";
        try {
            -1 != d.indexOf("msie") && (l = "ie",
            n = d.substring(d.indexOf("msie ") + 5),
            n.indexOf(";") && (n = n.substring(0, n.indexOf(";"))));
            -1 != d.indexOf("firefox") && (l = "Firefox",
            n = d.substring(d.indexOf("firefox/") + 8));
            -1 != d.indexOf("opera") && (l = "Opera",
            n = d.substring(d.indexOf("opera/") + 6, 4));
            -1 != d.indexOf("safari") && (l = "safari",
            n = d.substring(d.indexOf("safari/") + 7));
            -1 != d.indexOf("chrome") && (l = "chrome",
            n = d.substring(d.indexOf("chrome/") + 7),
            n.indexOf(" ") && (x = n = n.substring(0, n.indexOf(" ")),
            "" != x && x.indexOf(".") && (x = n.substring(0, n.indexOf(".")))));
            -1 != d.indexOf("navigator") && (l = "navigator",
            n = d.substring(d.indexOf("navigator/") + 10));
            -1 != d.indexOf("applewebkit") && (l = "applewebkit_chrome",
            n = d.substring(d.indexOf("applewebkit/") + 12),
            n.indexOf(" ") && (n = n.substring(0, n.indexOf(" "))));
            -1 != d.indexOf("sogoumobilebrowser") && (l = "\u641c\u72d7\u624b\u673a\u6d4f\u89c8\u5668");
            if (-1 != d.indexOf("ucbrowser") || -1 != d.indexOf("ucweb"))
                l = "UC\u6d4f\u89c8\u5668";
            if (-1 != d.indexOf("qqbrowser") || -1 != d.indexOf("tencenttraveler"))
                l = "QQ\u6d4f\u89c8\u5668";
            -1 != d.indexOf("metasr") && (l = "\u641c\u72d7\u6d4f\u89c8\u5668");
            -1 != d.indexOf("360se") && (l = "360\u6d4f\u89c8\u5668");
            -1 != d.indexOf("the world") && (l = "\u4e16\u754c\u4e4b\u7a97\u6d4f\u89c8\u5668");
            -1 != d.indexOf("maxthon") && (l = "\u9068\u6e38\u6d4f\u89c8\u5668")
        } catch (a) {}
        var z = function(a) {
            this.options = this.extend(a, {});
            this.nativeForEach = Array.prototype.forEach;
            this.nativeMap = Array.prototype.map
        };
        z.prototype = {
            extend: function(a, c) {
                if (null == a)
                    return c;
                for (var b in a)
                    null != a[b] && c[b] !== a[b] && (c[b] = a[b]);
                return c
            },
            getData: function() {
                return p
            },
            get: function(a) {
                var c = 1 * n
                  , b = [];
                "ie" == l && 7 <= c ? (b.push(d),
                b.push(w),
                p.userAgent = f(d),
                p.language = w,
                this.browserRedirect(d)) : (b = this.userAgentKey(b),
                b = this.languageKey(b));
                b.push(l);
                b.push(n);
                b.push(k);
                b.push(u);
                p.os = k;
                p.osVersion = u;
                p.browser = l;
                p.browserVersion = n;
                b = this.colorDepthKey(b);
                b = this.screenResolutionKey(b);
                b = this.timezoneOffsetKey(b);
                b = this.sessionStorageKey(b);
                b = this.localStorageKey(b);
                b = this.indexedDbKey(b);
                b = this.addBehaviorKey(b);
                b = this.openDatabaseKey(b);
                b = this.cpuClassKey(b);
                b = this.platformKey(b);
                b = this.hardwareConcurrencyKey(b);
                b = this.audioKey(b);
                b = this.doNotTrackKey(b);
                b = this.pluginsKey(b);
                b = this.canvasKey(b);
                b = this.webglKey(b);
                c = b.join("~~~");
                c = this.x64hash128(c, 31);
                return a(c)
            },
            userAgentKey: function(a) {
                this.options.excludeUserAgent || (a.push(navigator.userAgent),
                p.userAgent = f(navigator.userAgent),
                this.browserRedirect(navigator.userAgent));
                return a
            },
            replaceAll: function(a, c, b) {
                for (; 0 <= a.indexOf(c); )
                    a = a.replace(c, b);
                return a
            },
            browserRedirect: function(a) {
                var c = a.toLowerCase();
                a = "ipad" == c.match(/ipad/i);
                var b = "iphone os" == c.match(/iphone os/i)
                  , g = "midp" == c.match(/midp/i)
                  , e = "rv:1.2.3.4" == c.match(/rv:1.2.3.4/i)
                  , h = "ucweb" == c.match(/ucweb/i)
                  , d = "android" == c.match(/android/i)
                  , l = "windows ce" == c.match(/windows ce/i)
                  , c = "windows mobile" == c.match(/windows mobile/i);
                p.origin = a || b || g || e || h || d || l || c ? "mobile" : "pc"
            },
            languageKey: function(a) {
                this.options.excludeLanguage || (a.push(navigator.language),
                p.language = this.replaceAll(navigator.language, " ", "_"));
                return a
            },
            colorDepthKey: function(a) {
                this.options.excludeColorDepth || (a.push(screen.colorDepth),
                p.colorDepth = screen.colorDepth);
                return a
            },
            screenResolutionKey: function(a) {
                if (!this.options.excludeScreenResolution) {
                    var c = this.getScreenResolution();
                    "undefined" !== typeof c && (a.push(c.join("x")),
                    p.screenResolution = c.join("x"))
                }
                return a
            },
            getScreenResolution: function() {
                return this.options.detectScreenOrientation ? screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height] : [screen.height, screen.width]
            },
            timezoneOffsetKey: function(a) {
                this.options.excludeTimezoneOffset || (a.push((new Date).getTimezoneOffset()),
                p.timezoneOffset = (new Date).getTimezoneOffset() / 60);
                return a
            },
            sessionStorageKey: function(a) {
                !this.options.excludeSessionStorage && this.hasSessionStorage() && (a.push("sessionStorageKey"),
                p.sessionStorage = !0);
                return a
            },
            localStorageKey: function(a) {
                !this.options.excludeSessionStorage && this.hasLocalStorage() && (a.push("localStorageKey"),
                p.localStorage = !0);
                return a
            },
            indexedDbKey: function(a) {
                !this.options.excludeIndexedDB && this.hasIndexedDB() && (a.push("indexedDbKey"),
                p.indexedDb = !0);
                return a
            },
            addBehaviorKey: function(a) {
                document.body && !this.options.excludeAddBehavior && document.body.addBehavior ? (a.push("addBehaviorKey"),
                p.addBehavior = !0) : p.addBehavior = !1;
                return a
            },
            openDatabaseKey: function(a) {
                !this.options.excludeOpenDatabase && window.openDatabase ? (a.push("openDatabase"),
                p.openDatabase = !0) : p.openDatabase = !1;
                return a
            },
            cpuClassKey: function(a) {
                this.options.excludeCpuClass || (p.cpu = this.getNavigatorCpuClass(),
                a.push(p.cpu));
                return a
            },
            platformKey: function(a) {
                p.platform = this.getNavigatorPlatform();
                a.push(p.platform);
                return a
            },
            hardwareConcurrencyKey: function(a) {
                var c = this.getHardwareConcurrency();
                a.push(c);
                p.ccn = c;
                return a
            },
            audioKey: function(a) {
                var c = !0;
                "" != x && !isNaN(x) && 47 > parseInt(x) && (c = !1);
                if (c && (c = window.AudioContext || window.webkitAudioContext)) {
                    var c = new c
                      , b = c.sampleRate.toString();
                    a.push(b);
                    p.asr = b;
                    c.close && c.close()
                }
                return a
            },
            doNotTrackKey: function(a) {
                this.options.excludeDoNotTrack || (p.track = this.getDoNotTrack(),
                a.push(p.track));
                return a
            },
            canvasKey: function(a) {
                var c = !0;
                if (use_breakcollect) {
                    var b = _JdJrRiskClientStorage.jdtdstorage_local_storage("cfjrrval")
                      , g = _JdJrRiskClientStorage.jdtdstorage_local_storage("cfvalmdjrr")
                      , e = _JdJrRiskClientStorage.jdtdstorage_local_storage("timecfjrr");
                    try {
                        b && g && e && 864E5 >= (new Date).getTime() - parseInt(e) && f(b) == g && (c = !1,
                        _jdfp_canvas_md5 = p.canvas = g,
                        a.push(b))
                    } catch (h) {}
                }
                c && !this.options.excludeCanvas && this.isCanvasSupported() && (c = this.getCanvasFp(),
                p.canvas = f(c),
                _jdfp_canvas_md5 = p.canvas,
                a.push(c),
                use_breakcollect && (_JdJrRiskClientStorage.jdtdstorage_local_storage("cfjrrval", c),
                _JdJrRiskClientStorage.jdtdstorage_local_storage("cfvalmdjrr", _jdfp_canvas_md5),
                _JdJrRiskClientStorage.jdtdstorage_local_storage("timecfjrr", (new Date).getTime())));
                return a
            },
            webglKey: function(a) {
                var c = !0;
                if (use_breakcollect) {
                    var b = _JdJrRiskClientStorage.jdtdstorage_local_storage("jrrwebglv")
                      , g = _JdJrRiskClientStorage.jdtdstorage_local_storage("webglvmdjrr")
                      , e = _JdJrRiskClientStorage.jdtdstorage_local_storage("timejrrwg");
                    try {
                        b && g && e && 864E5 >= (new Date).getTime() - parseInt(e) && f(b) == g && (c = !1,
                        _jdfp_webgl_md5 = p.webgl = g,
                        a.push(b))
                    } catch (h) {}
                }
                c && !this.options.excludeWebGL && this.isCanvasSupported() && (c = this.getWebglFp(),
                a.push(c),
                p.webglFp = f(c),
                _jdfp_webgl_md5 = p.webglFp,
                use_breakcollect && (_JdJrRiskClientStorage.jdtdstorage_local_storage("jrrwebglv", c),
                _JdJrRiskClientStorage.jdtdstorage_local_storage("webglvmdjrr", _jdfp_webgl_md5),
                _JdJrRiskClientStorage.jdtdstorage_local_storage("timejrrwg", (new Date).getTime())));
                return a
            },
            pluginsKey: function(a) {
                var c = this.isIE() ? this.getIEPluginsString() : this.getRegularPluginsString();
                a.push(c);
                p.plugins = f(c);
                return a
            },
            getRegularPluginsString: function() {
                return this.map(navigator.plugins, function(a) {
                    var c = this.map(a, function(a) {
                        return [a.type, a.suffixes].join("~")
                    }).join(",");
                    return [a.name, a.description, c].join("::")
                }, this).join(";")
            },
            getIEPluginsString: function() {
                return void 0 !== window.ActiveXObject ? this.map("AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);Scripting.Dictionary;SWCtl.SWCtl;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;Skype.Detection;TDCCtl.TDCCtl;WMPlayer.OCX;rmocx.RealPlayer G2 Control;rmocx.RealPlayer G2 Control.1".split(";"), function(a) {
                    try {
                        return new ActiveXObject(a),
                        a
                    } catch (c) {
                        return null
                    }
                }).join(";") : ""
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (a) {
                    return !0
                }
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (a) {
                    return !0
                }
            },
            hasIndexedDB: function() {
                return !!window.indexedDB
            },
            getNavigatorCpuClass: function() {
                return navigator.oscpu || navigator.cpuClass ? navigator.cpuClass : "NA"
            },
            getNavigatorPlatform: function() {
                return navigator.platform ? navigator.platform : "NA"
            },
            getHardwareConcurrency: function() {
                return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : "NA"
            },
            getDoNotTrack: function() {
                return navigator.doNotTrack || navigator.msDoNotTrack ? navigator.doNotTrack || navigator.msDoNotTrack : "NA"
            },
            getCanvasFp: function() {
                var a = []
                  , c = document.createElement("canvas");
                c.width = 2E3;
                c.height = 200;
                c.style.display = "inline";
                var b = c.getContext("2d");
                b.rect(0, 0, 10, 10);
                b.rect(2, 2, 6, 6);
                a.push("cw:" + (!1 === b.isPointInPath(5, 5, "evenodd") ? "yes" : "no"));
                b.textBaseline = "alphabetic";
                b.fillStyle = "#f60";
                b.fillRect(125, 1, 62, 20);
                b.fillStyle = "#069";
                b.font = "11pt no-real-font-123";
                b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 2, 15);
                b.fillStyle = "rgba(102, 204, 0, 0.2)";
                b.font = "18pt Arial";
                b.fillText("Cwwm aa fjorddbank glbyphs veext qtuiz, \ud83d\ude03", 4, 45);
                b.globalCompositeOperation = "multiply";
                b.fillStyle = "rgb(255,0,255)";
                b.beginPath();
                b.arc(50, 50, 50, 0, 2 * Math.PI, !0);
                b.closePath();
                b.fill();
                b.fillStyle = "rgb(0,255,255)";
                b.beginPath();
                b.arc(100, 50, 50, 0, 2 * Math.PI, !0);
                b.closePath();
                b.fill();
                b.fillStyle = "rgb(255,255,0)";
                b.beginPath();
                b.arc(75, 100, 50, 0, 2 * Math.PI, !0);
                b.closePath();
                b.fill();
                b.fillStyle = "rgb(255,0,255)";
                b.arc(75, 75, 75, 0, 2 * Math.PI, !0);
                b.arc(75, 75, 25, 0, 2 * Math.PI, !0);
                b.fill("evenodd");
                a.push("cfp:" + c.toDataURL());
                return a.join("~")
            },
            getWebglFp: function() {
                var a, c = function(b) {
                    a.clearColor(0, 0, 0, 1);
                    a.enable(a.DEPTH_TEST);
                    a.depthFunc(a.LEQUAL);
                    a.clear(a.COLOR_BUFFER_BIT | a.DEPTH_BUFFER_BIT);
                    return "[" + b[0] + ", " + b[1] + "]"
                };
                a = this.getWebglCanvas();
                if (!a)
                    return null;
                var b = []
                  , g = a.createBuffer();
                a.bindBuffer(a.ARRAY_BUFFER, g);
                var e = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                a.bufferData(a.ARRAY_BUFFER, e, a.STATIC_DRAW);
                g.itemSize = 3;
                g.numItems = 3;
                var e = a.createProgram()
                  , h = a.createShader(a.VERTEX_SHADER);
                a.shaderSource(h, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                a.compileShader(h);
                var d = a.createShader(a.FRAGMENT_SHADER);
                a.shaderSource(d, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                a.compileShader(d);
                a.attachShader(e, h);
                a.attachShader(e, d);
                a.linkProgram(e);
                a.useProgram(e);
                e.vertexPosAttrib = a.getAttribLocation(e, "attrVertex");
                e.offsetUniform = a.getUniformLocation(e, "uniformOffset");
                a.enableVertexAttribArray(e.vertexPosArray);
                a.vertexAttribPointer(e.vertexPosAttrib, g.itemSize, a.FLOAT, !1, 0, 0);
                a.uniform2f(e.offsetUniform, 1, 1);
                a.drawArrays(a.TRIANGLE_STRIP, 0, g.numItems);
                null != a.canvas && b.push(a.canvas.toDataURL());
                b.push("extensions:" + a.getSupportedExtensions().join(";"));
                b.push("w1" + c(a.getParameter(a.ALIASED_LINE_WIDTH_RANGE)));
                b.push("w2" + c(a.getParameter(a.ALIASED_POINT_SIZE_RANGE)));
                b.push("w3" + a.getParameter(a.ALPHA_BITS));
                b.push("w4" + (a.getContextAttributes().antialias ? "yes" : "no"));
                b.push("w5" + a.getParameter(a.BLUE_BITS));
                b.push("w6" + a.getParameter(a.DEPTH_BITS));
                b.push("w7" + a.getParameter(a.GREEN_BITS));
                b.push("w8" + function(a) {
                    var b, c = a.getExtension("EXT_texture_filter_anisotropic") || a.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || a.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return c ? (b = a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                    0 === b && (b = 2),
                    b) : null
                }(a));
                b.push("w9" + a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS));
                b.push("w10" + a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE));
                b.push("w11" + a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS));
                b.push("w12" + a.getParameter(a.MAX_RENDERBUFFER_SIZE));
                b.push("w13" + a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS));
                b.push("w14" + a.getParameter(a.MAX_TEXTURE_SIZE));
                b.push("w15" + a.getParameter(a.MAX_VARYING_VECTORS));
                b.push("w16" + a.getParameter(a.MAX_VERTEX_ATTRIBS));
                b.push("w17" + a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS));
                b.push("w18" + a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS));
                b.push("w19" + c(a.getParameter(a.MAX_VIEWPORT_DIMS)));
                b.push("w20" + a.getParameter(a.RED_BITS));
                b.push("w21" + a.getParameter(a.RENDERER));
                b.push("w22" + a.getParameter(a.SHADING_LANGUAGE_VERSION));
                b.push("w23" + a.getParameter(a.STENCIL_BITS));
                b.push("w24" + a.getParameter(a.VENDOR));
                b.push("w25" + a.getParameter(a.VERSION));
                try {
                    var l = a.getExtension("WEBGL_debug_renderer_info");
                    l && (b.push("wuv:" + a.getParameter(l.UNMASKED_VENDOR_WEBGL)),
                    b.push("wur:" + a.getParameter(l.UNMASKED_RENDERER_WEBGL)))
                } catch (B) {}
                if (!a.getShaderPrecisionFormat)
                    return b.join("\u00a7");
                b.push("w26" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).precision);
                b.push("w27" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMin);
                b.push("w28" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT).rangeMax);
                b.push("w29" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).precision);
                b.push("w30" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMin);
                b.push("w31" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_FLOAT).rangeMax);
                b.push("w32" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).precision);
                b.push("w33" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMin);
                b.push("w34" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT).rangeMax);
                b.push("w35" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).precision);
                b.push("w36" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMin);
                b.push("w37" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT).rangeMax);
                b.push("w38" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).precision);
                b.push("w39" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMin);
                b.push("w40" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT).rangeMax);
                b.push("w41" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).precision);
                b.push("w42" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMin);
                b.push("w43" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT).rangeMax);
                b.push("w44" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).precision);
                b.push("w45" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMin);
                b.push("w46" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT).rangeMax);
                b.push("w47" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).precision);
                b.push("w48" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMin);
                b.push("w49" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT).rangeMax);
                b.push("w50" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).precision);
                b.push("w51" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMin);
                b.push("w52" + a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT).rangeMax);
                b.push("w53" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).precision);
                b.push("w54" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMin);
                b.push("w55" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT).rangeMax);
                b.push("w56" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).precision);
                b.push("w57" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMin);
                b.push("w58" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT).rangeMax);
                b.push("w59" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).precision);
                b.push("w60" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMin);
                b.push("w61" + a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT).rangeMax);
                return b.join("\u00a7")
            },
            isCanvasSupported: function() {
                var a = document.createElement("canvas");
                return !(!a.getContext || !a.getContext("2d"))
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
            },
            getWebglCanvas: function() {
                var a = document.createElement("canvas")
                  , c = null;
                try {
                    c = a.getContext("webgl") || a.getContext("experimental-webgl")
                } catch (b) {}
                c || (c = null);
                return c
            },
            each: function(a, c, b) {
                if (null !== a)
                    if (this.nativeForEach && a.forEach === this.nativeForEach)
                        a.forEach(c, b);
                    else if (a.length === +a.length)
                        for (var g = 0, e = a.length; g < e && c.call(b, a[g], g, a) !== {}; g++)
                            ;
                    else
                        for (g in a)
                            if (a.hasOwnProperty(g) && c.call(b, a[g], g, a) === {})
                                break
            },
            map: function(a, c, b) {
                var g = [];
                if (null == a)
                    return g;
                if (this.nativeMap && a.map === this.nativeMap)
                    return a.map(c, b);
                this.each(a, function(a, h, d) {
                    g[g.length] = c.call(b, a, h, d)
                });
                return g
            },
            x64Add: function(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            },
            x64Multiply: function(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            },
            x64Rotl: function(a, c) {
                c %= 64;
                if (32 === c)
                    return [a[1], a[0]];
                if (32 > c)
                    return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            },
            x64LeftShift: function(a, c) {
                c %= 64;
                return 0 === c ? a : 32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            },
            x64Xor: function(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            },
            x64Fmix: function(a) {
                a = this.x64Xor(a, [0, a[0] >>> 1]);
                a = this.x64Multiply(a, [4283543511, 3981806797]);
                a = this.x64Xor(a, [0, a[0] >>> 1]);
                a = this.x64Multiply(a, [3301882366, 444984403]);
                return a = this.x64Xor(a, [0, a[0] >>> 1])
            },
            x64hash128: function(a, c) {
                a = a || "";
                c = c || 0;
                var b = a.length % 16
                  , g = a.length - b
                  , e = [0, c];
                c = [0, c];
                for (var h, d, l = [2277735313, 289559509], f = [1291169091, 658871167], k = 0; k < g; k += 16)
                    h = [a.charCodeAt(k + 4) & 255 | (a.charCodeAt(k + 5) & 255) << 8 | (a.charCodeAt(k + 6) & 255) << 16 | (a.charCodeAt(k + 7) & 255) << 24, a.charCodeAt(k) & 255 | (a.charCodeAt(k + 1) & 255) << 8 | (a.charCodeAt(k + 2) & 255) << 16 | (a.charCodeAt(k + 3) & 255) << 24],
                    d = [a.charCodeAt(k + 12) & 255 | (a.charCodeAt(k + 13) & 255) << 8 | (a.charCodeAt(k + 14) & 255) << 16 | (a.charCodeAt(k + 15) & 255) << 24, a.charCodeAt(k + 8) & 255 | (a.charCodeAt(k + 9) & 255) << 8 | (a.charCodeAt(k + 10) & 255) << 16 | (a.charCodeAt(k + 11) & 255) << 24],
                    h = this.x64Multiply(h, l),
                    h = this.x64Rotl(h, 31),
                    h = this.x64Multiply(h, f),
                    e = this.x64Xor(e, h),
                    e = this.x64Rotl(e, 27),
                    e = this.x64Add(e, c),
                    e = this.x64Add(this.x64Multiply(e, [0, 5]), [0, 1390208809]),
                    d = this.x64Multiply(d, f),
                    d = this.x64Rotl(d, 33),
                    d = this.x64Multiply(d, l),
                    c = this.x64Xor(c, d),
                    c = this.x64Rotl(c, 31),
                    c = this.x64Add(c, e),
                    c = this.x64Add(this.x64Multiply(c, [0, 5]), [0, 944331445]);
                h = [0, 0];
                d = [0, 0];
                switch (b) {
                case 15:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 14)], 48));
                case 14:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 13)], 40));
                case 13:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 12)], 32));
                case 12:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 11)], 24));
                case 11:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 10)], 16));
                case 10:
                    d = this.x64Xor(d, this.x64LeftShift([0, a.charCodeAt(k + 9)], 8));
                case 9:
                    d = this.x64Xor(d, [0, a.charCodeAt(k + 8)]),
                    d = this.x64Multiply(d, f),
                    d = this.x64Rotl(d, 33),
                    d = this.x64Multiply(d, l),
                    c = this.x64Xor(c, d);
                case 8:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 7)], 56));
                case 7:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 6)], 48));
                case 6:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 5)], 40));
                case 5:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 4)], 32));
                case 4:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 3)], 24));
                case 3:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 2)], 16));
                case 2:
                    h = this.x64Xor(h, this.x64LeftShift([0, a.charCodeAt(k + 1)], 8));
                case 1:
                    h = this.x64Xor(h, [0, a.charCodeAt(k)]),
                    h = this.x64Multiply(h, l),
                    h = this.x64Rotl(h, 31),
                    h = this.x64Multiply(h, f),
                    e = this.x64Xor(e, h)
                }
                e = this.x64Xor(e, [0, a.length]);
                c = this.x64Xor(c, [0, a.length]);
                e = this.x64Add(e, c);
                c = this.x64Add(c, e);
                e = this.x64Fmix(e);
                c = this.x64Fmix(c);
                e = this.x64Add(e, c);
                c = this.x64Add(c, e);
                return ("00000000" + (e[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (e[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }
        };
        return z
    });
    try {
        (function(f) {
            var m = f.document
              , q = f.globalStorage;
            try {
                var t = f.localStorage
            } catch (p) {}
            try {
                var v = f.sessionStorage
            } catch (p) {}
            var r = {
                history: !0,
                java: !1,
                tests: 5,
                silverlight: !1,
                domain: ".jd.com",
                baseurl: _CurrentPageProtocol + _JdJrTdRiskDomainName,
                asseturi: ""
            };
            f.JDJRTDLOCALSTORAGE = function(p) {
                p = p || {};
                var d = {}, w;
                for (w in r) {
                    var k = p[w];
                    d[w] = "undefined" !== typeof k ? k : r[w]
                }
                "function" === typeof d.domain && (d.domain = d.domain(f));
                var u = d.tests
                  , l = d.domain
                  , n = this;
                this._ec = {};
                this.get = function(a, b, g) {
                    n._jdtdstorage(a, b, void 0, void 0, g)
                }
                ;
                this.set = function(a, b) {
                    n._jdtdstorage(a, function() {}, b)
                }
                ;
                this._jdtdstorage = function(a, b, g, e, d) {
                    void 0 === n._jdtdstorage && (n = this);
                    void 0 === e && (e = 1);
                    1 === e && (n.jdtdstorage_database_storage(a, g),
                    n.jdtdstorage_indexdb_storage(a, g),
                    n._ec.userData = n.jdtdstorage_userdata(a, g),
                    n._ec.cookieData = n.jdtdstorage_cookie(a, g),
                    n._ec.localData = n.jdtdstorage_local_storage(a, g),
                    n._ec.globalData = n.jdtdstorage_global_storage(a, g),
                    n._ec.sessionData = n.jdtdstorage_session_storage(a, g),
                    n._ec.windowData = n.jdtdstorage_window(a, g));
                    if (void 0 == g)
                        if ((!("undefined" !== n._ec.userData && n._ec.userData || "undefined" !== n._ec.cookieData && n._ec.cookieData || "undefined" !== n._ec.localData && n._ec.localData || "undefined" !== n._ec.globalData && n._ec.globalData || "undefined" !== n._ec.sessionData && n._ec.sessionData || "undefined" !== n._ec.dbData && n._ec.dbData || "undefined" !== n._ec.idbData && n._ec.idbData) && f.openDatabase && "undefined" === typeof n._ec.dbData || ("indexedDB"in f || (f.indexedDB = f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB)) && ("undefined" === typeof n._ec.idbData || "" === n._ec.idbData)) && e++ < u)
                            setTimeout(function() {
                                n._jdtdstorage(a, b, g, e, d)
                            }, 30);
                        else {
                            var c = n._ec, h = [], k = 0, l, w;
                            n._ec = {};
                            for (w in c)
                                c[w] && "null" !== c[w] && "undefined" !== c[w] && (h[c[w]] = void 0 === h[c[w]] ? 1 : h[c[w]] + 1);
                            for (w in h)
                                h[w] > k && (k = h[w],
                                l = w);
                            void 0 === l || void 0 !== d && 1 === d || n.set(a, l);
                            "function" === typeof b && b(l, c)
                        }
                }
                ;
                this.jdtdstorage_window = function(a, b) {
                    try {
                        if (void 0 !== b) {
                            var c;
                            var e = f.name;
                            if (-1 < e.indexOf("&" + a + "=") || 0 === e.indexOf(a + "=")) {
                                var d = e.indexOf("&" + a + "="), l;
                                -1 === d && (d = e.indexOf(a + "="));
                                l = e.indexOf("&", d + 1);
                                c = -1 !== l ? e.substr(0, d) + e.substr(l + (d ? 0 : 1)) + "&" + a + "=" + b : e.substr(0, d) + "&" + a + "=" + b
                            } else
                                c = e + "&" + a + "=" + b;
                            f.name = c
                        } else
                            return this.getFromStr(a, f.name)
                    } catch (A) {}
                }
                ;
                this.jdtdstorage_userdata = function(a, b) {
                    try {
                        var c = this.createElem("div", "userdata_el", 1);
                        if (c.addBehavior)
                            if (a = a.substring(1),
                            c.style.behavior = "url(#default#userData)",
                            void 0 !== b)
                                c.setAttribute(a, b),
                                c.save(a);
                            else
                                return c.load(a),
                                c.getAttribute(a)
                    } catch (e) {}
                }
                ;
                this.jdtdstorage_lso = function(a, b) {}
                ;
                this.jdtdstorage_png = function(a, b) {}
                ;
                this.jdtdstorage_local_storage = function(a, b) {
                    try {
                        if (t)
                            if (void 0 !== b)
                                t.setItem(a, b);
                            else
                                return t.getItem(a)
                    } catch (g) {}
                }
                ;
                this.jdtdstorage_database_storage = function(a, b) {
                    try {
                        if (f.openDatabase) {
                            var c = f.openDatabase("sqlite_jdtdstorage", "", "jdtdstorage", 1048576);
                            void 0 !== b ? c.transaction(function(c) {
                                c.executeSql("CREATE TABLE IF NOT EXISTS cache(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL, value TEXT NOT NULL, UNIQUE (name))", [], function(a, b) {}, function(a, b) {});
                                c.executeSql("INSERT OR REPLACE INTO cache(name, value) VALUES(?, ?)", [a, b], function(a, b) {}, function(a, b) {})
                            }) : c.transaction(function(b) {
                                b.executeSql("SELECT value FROM cache WHERE name=?", [a], function(a, b) {
                                    n._ec.dbData = 1 <= b.rows.length ? b.rows.item(0).value : ""
                                }, function(a, b) {})
                            })
                        }
                    } catch (e) {}
                }
                ;
                this.jdtdstorage_indexdb_storage = function(a, b) {
                    try {
                        var c = f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB;
                        if (c) {
                            var e = c.open("idb_jdtdstorage", 1);
                            e.onerror = function(a) {}
                            ;
                            e.onupgradeneeded = function() {
                                e.result.createObjectStore("jdtdstorage", {
                                    keyPath: "name"
                                })
                            }
                            ;
                            e.onsuccess = function() {
                                var c = e.result
                                  , d = c.transaction(["jdtdstorage"], "readwrite")
                                  , g = d.objectStore(["jdtdstorage"]);
                                if (void 0 !== b)
                                    g.put({
                                        name: a,
                                        value: b
                                    });
                                else {
                                    var l = g.get(a);
                                    l.onsuccess = function() {
                                        n._ec.idbData = void 0 === l.result ? void 0 : l.result.value
                                    }
                                }
                                d.oncomplete = function() {
                                    c.close()
                                }
                            }
                        }
                    } catch (h) {}
                }
                ;
                this.jdtdstorage_session_storage = function(a, b) {
                    try {
                        if (v)
                            if (void 0 !== b)
                                v.setItem(a, b);
                            else
                                return v.getItem(a)
                    } catch (g) {}
                }
                ;
                this.jdtdstorage_global_storage = function(a, b) {
                    if (q) {
                        var c = this.getHost();
                        try {
                            if (void 0 !== b)
                                q[c][a] = b;
                            else
                                return q[c][a]
                        } catch (e) {}
                    }
                }
                ;
                this.jdtdstorage_silverlight = function(a, b) {}
                ;
                this.encode = function(a) {
                    var b = "", c, e, d, l, k, f, w = 0;
                    for (a = this._utf8_encode(a); w < a.length; )
                        c = a.charCodeAt(w++),
                        e = a.charCodeAt(w++),
                        d = a.charCodeAt(w++),
                        l = c >> 2,
                        c = (c & 3) << 4 | e >> 4,
                        k = (e & 15) << 2 | d >> 6,
                        f = d & 63,
                        isNaN(e) ? k = f = 64 : isNaN(d) && (f = 64),
                        b = b + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(l) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(c) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(k) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(f);
                    return b
                }
                ;
                this.decode = function(a) {
                    var b = "", c, e, d, l, k, f = 0;
                    for (a = a.replace(/[^A-Za-z0-9\+\/\=]/g, ""); f < a.length; )
                        c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
                        e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
                        l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(f++)),
                        c = c << 2 | e >> 4,
                        e = (e & 15) << 4 | l >> 2,
                        d = (l & 3) << 6 | k,
                        b += String.fromCharCode(c),
                        64 !== l && (b += String.fromCharCode(e)),
                        64 !== k && (b += String.fromCharCode(d));
                    return b = this._utf8_decode(b)
                }
                ;
                this._utf8_encode = function(a) {
                    a = a.replace(/\r\n/g, "\n");
                    for (var b = "", c = 0, e = a.length, d; c < e; c++)
                        d = a.charCodeAt(c),
                        128 > d ? b += String.fromCharCode(d) : (127 < d && 2048 > d ? b += String.fromCharCode(d >> 6 | 192) : (b += String.fromCharCode(d >> 12 | 224),
                        b += String.fromCharCode(d >> 6 & 63 | 128)),
                        b += String.fromCharCode(d & 63 | 128));
                    return b
                }
                ;
                this._utf8_decode = function(a) {
                    for (var b = "", c = 0, d = a.length, h, l, k; c < d; )
                        h = a.charCodeAt(c),
                        128 > h ? (b += String.fromCharCode(h),
                        c += 1) : 191 < h && 224 > h ? (l = a.charCodeAt(c + 1),
                        b += String.fromCharCode((h & 31) << 6 | l & 63),
                        c += 2) : (l = a.charCodeAt(c + 1),
                        k = a.charCodeAt(c + 2),
                        b += String.fromCharCode((h & 15) << 12 | (l & 63) << 6 | k & 63),
                        c += 3);
                    return b
                }
                ;
                this.jdtdstorage_history = function(a, b) {}
                ;
                this.createElem = function(a, b, d) {
                    a = void 0 !== b && m.getElementById(b) ? m.getElementById(b) : m.createElement(a);
                    a.style.visibility = "hidden";
                    a.style.position = "absolute";
                    b && a.setAttribute("id", b);
                    d && m.body.appendChild(a);
                    return a
                }
                ;
                this.createIframe = function(a, b) {
                    b = this.createElem("iframe", b, 1);
                    b.setAttribute("src", a);
                    return b
                }
                ;
                this.jdtdstorage_cookie = function(a, b) {
                    if (void 0 !== b)
                        m.cookie = a + "=" + b + "; expires=Tue, 31 Dec 2030 00:00:00 UTC; path=/; domain=" + l;
                    else
                        return this.getFromStr(a, m.cookie)
                }
                ;
                this.getFromStr = function(a, b) {
                    if ("string" === typeof b) {
                        a += "=";
                        b = b.split(/[;&]/);
                        var c, d;
                        for (c = 0; c < b.length; c++) {
                            for (d = b[c]; " " === d.charAt(0); )
                                d = d.substring(1, d.length);
                            if (0 === d.indexOf(a))
                                return d.substring(a.length, d.length)
                        }
                    }
                }
                ;
                this.getHost = function() {
                    return f.location.host.replace(/:\d+/, "")
                }
                ;
                this.toHex = function(a) {
                    for (var b = "", c = a.length, d = 0, h; d < c; ) {
                        for (h = a.charCodeAt(d++).toString(16); 2 > h.length; )
                            h = "0" + h;
                        b += h
                    }
                    return b
                }
                ;
                this.fromHex = function(a) {
                    for (var b = "", c = a.length, d; 0 <= c; )
                        d = c - 2,
                        b = String.fromCharCode("0x" + a.substring(d, c)) + b,
                        c = d;
                    return b
                }
                ;
                this.hasVisited = function(a) {}
                ;
                var x = this.createElem("a", "_ec_rgb_link"), z, a;
                try {
                    z = 1,
                    a = m.createElement("style"),
                    a.styleSheet ? a.styleSheet.innerHTML = "#_ec_rgb_link:visited{display:none;color:#FF0000}" : a.innerHTML ? a.innerHTML = "#_ec_rgb_link:visited{display:none;color:#FF0000}" : a.appendChild(m.createTextNode("#_ec_rgb_link:visited{display:none;color:#FF0000}"))
                } catch (c) {
                    z = 0
                }
                this._getRGB = function(c, b) {
                    if (b && 0 === z)
                        return -1;
                    x.href = c;
                    x.innerHTML = c;
                    m.body.appendChild(a);
                    m.body.appendChild(x);
                    if (m.defaultView) {
                        if (null == m.defaultView.getComputedStyle(x, null))
                            return -1;
                        c = m.defaultView.getComputedStyle(x, null).getPropertyValue("color")
                    } else
                        c = x.currentStyle.color;
                    return c
                }
                ;
                this._testURL = function(a, b) {
                    a = this._getRGB(a);
                    return "rgb(255, 0, 0)" === a || "#ff0000" === a || b && a !== b ? 1 : 0
                }
            }
        }
        )(window)
    } catch (f) {}
    var td_collect = new function() {
        function f() {
            var d = window.webkitRTCPeerConnection || window.mozRTCPeerConnection || window.RTCPeerConnection;
            if (d) {
                var f = function(d) {
                    var l = /([0-9]{1,3}(\.[0-9]{1,3}){3})/;
                    try {
                        var k = l.exec(d)[1];
                        void 0 === m[k] && t.push(k);
                        m[k] = !0
                    } catch (z) {}
                }, k, m = {};
                try {
                    k = new d({
                        iceServers: [{
                            urls: "stun:stun.services.mozilla.com"
                        }]
                    })
                } catch (l) {}
                try {
                    void 0 === k && (k = new d({
                        iceServers: []
                    }))
                } catch (l) {}
                if (k || window.mozRTCPeerConnection)
                    try {
                        k.createDataChannel("chat", {
                            reliable: !1
                        })
                    } catch (l) {}
                k && (k.onicecandidate = function(d) {
                    d.candidate && f(d.candidate.candidate)
                }
                ,
                k.createOffer(function(d) {
                    k.setLocalDescription(d, function() {}, function() {})
                }, function() {}),
                setTimeout(function() {
                    try {
                        k.localDescription.sdp.split("\n").forEach(function(d) {
                            0 === d.indexOf("a=candidate:") && f(d)
                        })
                    } catch (l) {}
                }, 500))
            }
            try {
                navigator.mediaDevices && navigator.mediaDevices.enumerateDevices().then(function(d) {
                    var k = [];
                    d.forEach(function(d) {
                        k.push(d.kind + ";" + d.label + ";" + d.deviceId)
                    });
                    v = k.sort().join("|")
                })
            } catch (l) {}
        }
        function m() {
            function d(d) {
                var k = {};
                m.style.fontFamily = d;
                document.body.appendChild(m);
                k.height = m.offsetHeight;
                k.width = m.offsetWidth;
                document.body.removeChild(m);
                return k
            }
            var f = ["monospace", "sans-serif", "serif"]
              , k = []
              , m = document.createElement("span");
            m.style.fontSize = "72px";
            m.style.visibility = "hidden";
            m.innerHTML = "mmmmmmmmmmlli";
            for (var l = 0; l < f.length; l++)
                k[l] = d(f[l]);
            this.checkSupportFont = function(l) {
                for (var w = 0; w < k.length; w++) {
                    var m = d(l + "," + f[w])
                      , a = k[w];
                    if (m.height !== a.height || m.width !== a.width)
                        return !0
                }
                return !1
            }
        }
        function q(d) {
            var f = {};
            f.name = d.name;
            f.filename = d.filename.toLowerCase();
            f.description = d.description;
            void 0 !== d.version && (f.version = d.version);
            f.mimeTypes = [];
            for (var k = 0; k < d.length; k++) {
                var m = d[k]
                  , l = {};
                l.description = m.description;
                l.suffixes = m.suffixes;
                l.type = m.type;
                f.mimeTypes.push(l)
            }
            return f
        }
        var t = []
          , v = ""
          , r = "Abadi MT Condensed Light;Adobe Fangsong Std;Adobe Hebrew;Adobe Ming Std;Agency FB;Arab;Arabic Typesetting;Arial Black;Batang;Bauhaus 93;Bell MT;Bitstream Vera Serif;Bodoni MT;Bookman Old Style;Braggadocio;Broadway;Calibri;Californian FB;Castellar;Casual;Centaur;Century Gothic;Chalkduster;Colonna MT;Copperplate Gothic Light;DejaVu LGC Sans Mono;Desdemona;DFKai-SB;Dotum;Engravers MT;Eras Bold ITC;Eurostile;FangSong;Forte;Franklin Gothic Heavy;French Script MT;Gabriola;Gigi;Gisha;Goudy Old Style;Gulim;GungSeo;Haettenschweiler;Harrington;Hiragino Sans GB;Impact;Informal Roman;KacstOne;Kino MT;Kozuka Gothic Pr6N;Lohit Gujarati;Loma;Lucida Bright;Lucida Fax;Magneto;Malgun Gothic;Matura MT Script Capitals;Menlo;MingLiU-ExtB;MoolBoran;MS PMincho;MS Reference Sans Serif;News Gothic MT;Niagara Solid;Nyala;Palace Script MT;Papyrus;Perpetua;Playbill;PMingLiU;Rachana;Rockwell;Sawasdee;Script MT Bold;Segoe Print;Showcard Gothic;SimHei;Snap ITC;TlwgMono;Tw Cen MT Condensed Extra Bold;Ubuntu;Umpush;Univers;Utopia;Vladimir Script;Wide Latin".split(";")
          , p = "4game;AdblockPlugin;AdobeExManCCDetect;AdobeExManDetect;Alawar NPAPI utils;Aliedit Plug-In;Alipay Security Control 3;AliSSOLogin plugin;AmazonMP3DownloaderPlugin;AOL Media Playback Plugin;AppUp;ArchiCAD;AVG SiteSafety plugin;Babylon ToolBar;Battlelog Game Launcher;BitCometAgent;Bitdefender QuickScan;BlueStacks Install Detector;CatalinaGroup Update;Citrix ICA Client;Citrix online plug-in;Citrix Receiver Plug-in;Coowon Update;DealPlyLive Update;Default Browser Helper;DivX Browser Plug-In;DivX Plus Web Player;DivX VOD Helper Plug-in;doubleTwist Web Plugin;Downloaders plugin;downloadUpdater;eMusicPlugin DLM6;ESN Launch Mozilla Plugin;ESN Sonar API;Exif Everywhere;Facebook Plugin;File Downloader Plug-in;FileLab plugin;FlyOrDie Games Plugin;Folx 3 Browser Plugin;FUZEShare;GDL Object Web Plug-in 16.00;GFACE Plugin;Ginger;Gnome Shell Integration;Google Earth Plugin;Google Earth Plug-in;Google Gears 0.5.33.0;Google Talk Effects Plugin;Google Update;Harmony Firefox Plugin;Harmony Plug-In;Heroes & Generals live;HPDetect;Html5 location provider;IE Tab plugin;iGetterScriptablePlugin;iMesh plugin;Kaspersky Password Manager;LastPass;LogMeIn Plugin 1.0.0.935;LogMeIn Plugin 1.0.0.961;Ma-Config.com plugin;Microsoft Office 2013;MinibarPlugin;Native Client;Nitro PDF Plug-In;Nokia Suite Enabler Plugin;Norton Identity Safe;npAPI Plugin;NPLastPass;NPPlayerShell;npTongbuAddin;NyxLauncher;Octoshape Streaming Services;Online Storage plug-in;Orbit Downloader;Pando Web Plugin;Parom.TV player plugin;PDF integrado do WebKit;PDF-XChange Viewer;PhotoCenterPlugin1.1.2.2;Picasa;PlayOn Plug-in;QQ2013 Firefox Plugin;QQDownload Plugin;QQMiniDL Plugin;QQMusic;RealDownloader Plugin;Roblox Launcher Plugin;RockMelt Update;Safer Update;SafeSearch;Scripting.Dictionary;SefClient Plugin;Shell.UIHelper;Silverlight Plug-In;Simple Pass;Skype Web Plugin;SumatraPDF Browser Plugin;Symantec PKI Client;Tencent FTN plug-in;Thunder DapCtrl NPAPI Plugin;TorchHelper;Unity Player;Uplay PC;VDownloader;Veetle TV Core;VLC Multimedia Plugin;Web Components;WebKit-integrierte PDF;WEBZEN Browser Extension;Wolfram Mathematica;WordCaptureX;WPI Detector 1.4;Yandex Media Plugin;Yandex PDF Viewer;YouTube Plug-in;zako".split(";");
        this.toJson = "object" === typeof JSON && JSON.stringify;
        this.init = function() {
            f();
            "function" !== typeof this.toJson && (this.toJson = function(d) {
                if (void 0 == d || null == d)
                    return null;
                var f = "{", k;
                for (k in d)
                    f += "'" + k + "':",
                    f = "string" == typeof d[k] ? f + ("'" + d[k] + "'") : f + d[k],
                    f += ",";
                f = f.substring(0, f.length - 1);
                return f + "}"
            }
            )
        }
        ;
        this.minHash = function(d) {
            var f, k, m, l = d.length & 3, n = d.length - l;
            f = void 0;
            for (m = 0; m < n; )
                k = d.charCodeAt(m) & 255 | (d.charCodeAt(++m) & 255) << 8 | (d.charCodeAt(++m) & 255) << 16 | (d.charCodeAt(++m) & 255) << 24,
                ++m,
                k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295,
                k = k << 15 | k >>> 17,
                k = 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295,
                f ^= k,
                f = f << 13 | f >>> 19,
                f = 5 * (f & 65535) + ((5 * (f >>> 16) & 65535) << 16) & 4294967295,
                f = (f & 65535) + 27492 + (((f >>> 16) + 58964 & 65535) << 16);
            k = 0;
            switch (l) {
            case 3:
                k ^= (d.charCodeAt(m + 2) & 255) << 16;
            case 2:
                k ^= (d.charCodeAt(m + 1) & 255) << 8;
            case 1:
                k ^= d.charCodeAt(m) & 255,
                k = 3432918353 * (k & 65535) + ((3432918353 * (k >>> 16) & 65535) << 16) & 4294967295,
                k = k << 15 | k >>> 17,
                f ^= 461845907 * (k & 65535) + ((461845907 * (k >>> 16) & 65535) << 16) & 4294967295
            }
            f ^= d.length;
            f ^= f >>> 16;
            f = 2246822507 * (f & 65535) + ((2246822507 * (f >>> 16) & 65535) << 16) & 4294967295;
            f ^= f >>> 13;
            f = 3266489909 * (f & 65535) + ((3266489909 * (f >>> 16) & 65535) << 16) & 4294967295;
            return (f ^ f >>> 16) >>> 0
        }
        ;
        this.tdencrypt = function(d) {
            d = this.toJson(d);
            d = encodeURIComponent(d);
            var f = "", k, m, l, n, q, p, a = 0;
            do
                k = d.charCodeAt(a++),
                m = d.charCodeAt(a++),
                l = d.charCodeAt(a++),
                n = k >> 2,
                k = (k & 3) << 4 | m >> 4,
                q = (m & 15) << 2 | l >> 6,
                p = l & 63,
                isNaN(m) ? q = p = 64 : isNaN(l) && (p = 64),
                f = f + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(n) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(k) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(q) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(p);
            while (a < d.length);return f + "/"
        }
        ;
        this.collect = function() {
            var d = new Date;
            try {
                var f = document.createElement("div")
                  , k = {}
                  , u = "ActiveBorder ActiveCaption AppWorkspace Background ButtonFace ButtonHighlight ButtonShadow ButtonText CaptionText GrayText Highlight HighlightText InactiveBorder InactiveCaption InactiveCaptionText InfoBackground InfoText Menu MenuText Scrollbar ThreeDDarkShadow ThreeDFace ThreeDHighlight ThreeDLightShadow ThreeDShadow Window WindowFrame WindowText".split(" ");
                if (window.getComputedStyle)
                    for (var l = 0; l < u.length; l++)
                        document.body.appendChild(f),
                        f.style.color = u[l],
                        k[u[l]] = window.getComputedStyle(f).getPropertyValue("color"),
                        document.body.removeChild(f)
            } catch (A) {}
            f = {
                ca: {},
                ts: {},
                m: {}
            };
            u = f.ca;
            u.tdHash = _jdfp_canvas_md5;
            u.webglHash = _jdfp_webgl_md5;
            var n = !1;
            if (window.WebGLRenderingContext) {
                for (var x = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"], z = [], a, l = 0; l < x.length; l++)
                    try {
                        var c = !1;
                        (c = document.createElement("canvas").getContext(x[l], {
                            stencil: !0
                        })) && c && (a = c,
                        z.push(x[l]))
                    } catch (A) {}
                z.length && (n = {
                    name: z,
                    gl: a
                })
            }
            if (n) {
                l = n.gl;
                u.contextName = n.name.join();
                u.webglversion = l.getParameter(l.VERSION);
                u.shadingLV = l.getParameter(l.SHADING_LANGUAGE_VERSION);
                u.vendor = l.getParameter(l.VENDOR);
                u.renderer = l.getParameter(l.RENDERER);
                a = [];
                try {
                    a = l.getSupportedExtensions(),
                    u.extensions = a
                } catch (A) {}
                try {
                    var b = l.getExtension("WEBGL_debug_renderer_info");
                    b && (u.wuv = l.getParameter(b.UNMASKED_VENDOR_WEBGL),
                    u.wur = l.getParameter(b.UNMASKED_RENDERER_WEBGL))
                } catch (A) {}
            }
            f.m.documentMode = document.documentMode;
            f.m.compatMode = document.compatMode;
            b = [];
            u = new m;
            for (l = 0; l < r.length; l++)
                a = r[l],
                u.checkSupportFont(a) && b.push(a);
            f.fo = b;
            var l = {}, b = [], g;
            for (g in navigator)
                "object" != typeof navigator[g] && (l[g] = navigator[g]),
                b.push(g);
            l.enumerationOrder = b;
            l.javaEnabled = navigator.javaEnabled();
            try {
                l.taintEnabled = navigator.taintEnabled()
            } catch (A) {}
            f.n = l;
            var l = navigator.userAgent.toLowerCase(), e;
            if (g = l.match(/rv:([\d.]+)\) like gecko/))
                e = g[1];
            if (g = l.match(/msie ([\d.]+)/))
                e = g[1];
            g = [];
            if (e)
                for (e = "AcroPDF.PDF;Adodb.Stream;AgControl.AgControl;DevalVRXCtrl.DevalVRXCtrl.1;MacromediaFlashPaper.MacromediaFlashPaper;Msxml2.DOMDocument;Msxml2.XMLHTTP;PDF.PdfCtrl;QuickTime.QuickTime;QuickTimeCheckObject.QuickTimeCheck.1;RealPlayer;RealPlayer.RealPlayer(tm) ActiveX Control (32-bit);RealVideo.RealVideo(tm) ActiveX Control (32-bit);rmocx.RealPlayer G2 Control;Scripting.Dictionary;Shell.UIHelper;ShockwaveFlash.ShockwaveFlash;SWCtl.SWCtl;TDCCtl.TDCCtl;WMPlayer.OCX".split(";"),
                l = 0; l < e.length; l++) {
                    var h = e[l];
                    try {
                        var y = new ActiveXObject(h)
                          , b = {};
                        b.name = h;
                        try {
                            b.version = y.GetVariable("$version")
                        } catch (A) {}
                        try {
                            b.version = y.GetVersions()
                        } catch (A) {}
                        b.version && 0 < b.version.length || (b.version = "");
                        g.push(b)
                    } catch (A) {}
                }
            else {
                e = navigator.plugins;
                b = {};
                for (l = 0; l < e.length; l++)
                    h = e[l],
                    b[h.name] = 1,
                    g.push(q(h));
                for (l = 0; l < p.length; l++)
                    y = p[l],
                    b[y] || (h = e[y],
                    h && g.push(q(h)))
            }
            e = "availHeight availWidth colorDepth bufferDepth deviceXDPI deviceYDPI height width logicalXDPI logicalYDPI pixelDepth updateInterval".split(" ");
            h = {};
            for (l = 0; e.length > l; l++)
                y = e[l],
                void 0 !== screen[y] && (h[y] = screen[y]);
            e = ["devicePixelRatio", "screenTop", "screenLeft"];
            b = {};
            for (l = 0; e.length > l; l++)
                y = e[l],
                void 0 !== window[y] && (b[y] = window[y]);
            f.p = g;
            f.w = b;
            f.s = h;
            f.sc = k;
            f.tz = d.getTimezoneOffset();
            f.lil = t.sort().join("|");
            f.wil = v;
            d = {};
            try {
                d.cookie = navigator.cookieEnabled,
                d.localStorage = !!window.localStorage,
                d.sessionStorage = !!window.sessionStorage,
                d.globalStorage = !!window.globalStorage,
                d.indexedDB = !!window.indexedDB
            } catch (A) {}
            f.ss = d;
            f.ts.deviceTime = start_time;
            f.ts.deviceEndTime = (new Date).getTime();
            return this.tdencrypt(f)
        }
    }
      , _JdJrRiskClientCollectData = ""
      , _JdJrRiskClientStorage = null
      , _JdJrTdRiskFp = null
      , _JdJrTdRiskFpInfo = ""
      , _JdEid = ""
      , _eidFlag = !1
      , _JdTdudfp = {};
    (function() {
        _jd_load_td_finger_flag && (_JdJrRiskClientStorage = new JDJRTDLOCALSTORAGE,
        _JdJrTdRiskFp = new JdJrTdRiskFinger,
        _JdJrRiskClientStorage.get("3AB9D23F7A4B3C9B", function(f) {
            void 0 != f && null != f && 32 <= f.length && (_JdEid = f,
            _eidFlag = !0)
        }),
        _JdJrTdRiskFp.get(function(f) {
            _JdJrTdRiskFpInfo = f
        }),
        td_collect.init(),
        "undefined" != typeof document.body && document.body ? setTimeout(td_collect_exe, 100) : td_collect_exe())
    }
    )()
}
function get_eid_fp(){
    return [_JdEid,_JdJrTdRiskFpInfo]
}