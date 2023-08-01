/*!
 * Bazaarvoice bv-loader v13.6.4
 * Wed Jan 05 2022 11:37:30 GMT+0000 (Coordinated Universal Time)
 *
 * Capabilities:
 *
 *   api@0.8.0
 *   inline_ratings@2.2.3
 *   rating_summary@2.55.0
 *   ratings@0.1.23
 *   review-highlights@0.1.1
 *   review_highlights@3.3.0
 *   reviews@0.4.0
 *   swat-submission@4.5.2
 *
 * http://bazaarvoice.com
 *
 * Copyright 2022 Bazaarvoice. All rights reserved.
 *
 */
(()=>{
    var e = {
        353: (e,t,n)=>{
            "use strict";
            n.d(t, {
                M: ()=>s
            });
            var r, o = n(788), a = n.n(o), i = n(920), s = function() {
                var e = {
                    timeout: 6e4
                };
                return r || (r = new i((function(t, n) {
                    a().loadScript("https://analytics-static.ugc.bazaarvoice.com/prod/static/3/bv-analytics.js", e, (function(e) {
                        e ? n(e) : t()
                    }
                    ))
                }
                )))
            }
        }
        ,
        426: (e,t,n)=>{
            var r = n(422)
              , o = r.document && (r.document.currentScript || r.document.querySelector('script[src*="bv.js"]'));
            e.exports = o
        }
        ,
        621: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>dt
            });
            var r, o, a = n(690), i = n(304), s = n(611), c = n.n(s), u = n(318), l = n(886), f = n(422), d = "ADDED", p = "REMOVED", m = ["data-bv-show", "name"], h = [], v = "", g = new WeakMap, y = function(e, t) {
                return e.matches ? e.matches(t) : e.msMatchesSelector(t)
            }, b = function(e) {
                var t = g.get(e);
                t && (t.watches.forEach((function(t) {
                    (0,
                    t.callback)(p, e)
                }
                )),
                t.observer.disconnect(),
                g.delete(e))
            }, w = function(e) {
                return new f.MutationObserver((function(t) {
                    t.forEach((function(t) {
                        y(e, v) ? function(e, t) {
                            g.get(e).watches.forEach((function(n) {
                                (0,
                                n.callback)("UPDATED", e, t)
                            }
                            ))
                        }(e, t) : b(e)
                    }
                    ))
                }
                ))
            }, E = function(e, t) {
                var n, r = h.filter((function(t) {
                    var n = t.selector;
                    return y(e, n)
                }
                )), o = r.reduce((function(e, t) {
                    var n = t.attributes
                      , r = void 0 === n ? [] : n;
                    return e.concat(r)
                }
                ), []), a = r;
                g.has(e) ? (n = g.get(e).observer,
                t && (a = [t])) : n = w(e),
                n.observe(e, {
                    attributes: !0,
                    attributeFilter: o.length ? o : void 0
                }),
                g.set(e, {
                    watches: r,
                    observer: n
                }),
                a.forEach((function(t) {
                    (0,
                    t.callback)(d, e)
                }
                ))
            }, S = function(e) {
                for (var t = e.length, n = 0; n < t; n++) {
                    for (var r = e[n], o = r.addedNodes, a = o.length, i = 0; i < a; i++) {
                        var s = o[i];
                        if ((s.matches || s.msMatchesSelector) && y(s, v))
                            E(s);
                        else if (s.querySelectorAll) {
                            var c = s.querySelectorAll(v);
                            if (c.length > 0)
                                for (var u = 0; u < c.length; u++)
                                    E(c[u])
                        }
                    }
                    for (var l = r.removedNodes, f = l.length, d = 0; d < f; d++) {
                        var p = l[d];
                        if ((p.matches || p.msMatchesSelector) && y(p, v))
                            b(p);
                        else if (p.querySelectorAll) {
                            var m = p.querySelectorAll(v);
                            if (m.length > 0)
                                for (var h = 0; h < m.length; h++)
                                    b(m[h])
                        }
                    }
                    if ("attributes" === r.type) {
                        var g = r.target;
                        (g.matches || g.msMatchesSelector) && y(g, v) && E(g)
                    }
                }
            }, O = function(e) {
                var t = e.selector;
                h.push(e),
                v += "" === v ? t : ",".concat(t),
                function(e) {
                    var t = f.document.querySelectorAll(e.selector);
                    Array.prototype.forEach.call(t, (function(t) {
                        E(t, e)
                    }
                    ))
                }(e)
            };
            r = document,
            o = {
                subtree: !0,
                childList: !0,
                attributes: !0,
                attributeFilter: m
            },
            new f.MutationObserver(S).observe(r, o);
            var T = n(5)
              , _ = n.n(T)
              , x = {}
              , k = {
                get: function(e) {
                    return x[e]
                }
            };
            _().call(k);
            O({
                selector: 'meta[name^="'.concat("bv:", '"]'),
                attributes: ["name", "content"],
                callback: function(e, t) {
                    var n = t.name.replace(new RegExp("^".concat("bv:")), "");
                    e === p ? (delete x[n],
                    delete k[n]) : x[n] = t.getAttribute("content"),
                    k.trigger("change", n)
                }
            });
            var N = function() {
                return k
            }
              , C = n(920);
            u.Z.global = {},
            (0,
            l.Z)(u.Z.global, {
                client: a.Z.deployment.client,
                dataEnvironment: a.Z.dataEnvironment,
                serverEnvironment: a.Z.serverEnvironment,
                locale: a.Z.deployment.locale,
                anonymous: !c()(a.Z.domains, n.g.location.hostname).get("thirdPartyCookieEnabled"),
                siteId: a.Z.deployment.site,
                virtualEnvironment: a.Z.deployment.virtualEnvironment,
                ponyfills: {
                    Promise: C
                },
                SystemJS: {},
                meta: N()
            }),
            (0,
            l.Z)(u.Z.global, {
                loadUserSegment: (0,
                i.vd)()
            }),
            Object.freeze(u.Z.global);
            const P = u.Z.global;
            var A = n(388)
              , j = n.n(A)
              , B = "cookies"
              , Z = N()
              , V = {}
              , L = !a.Z.cookiesOptIn
              , R = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : L
                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default";
                V.cookies = {
                    consent: e,
                    source: t
                }
            }
              , I = {};
            _().call(I);
            var M = function(e) {
                if (e === B) {
                    var t = Z.get(B);
                    void 0 === t ? R() : R("true" === t.toLowerCase(), "site"),
                    I.trigger("change", B)
                }
            };
            Z.on("change", M),
            M(B),
            Object.defineProperty(I, B, {
                get: function() {
                    return V.cookies
                },
                set: function(e) {
                    R(e && !0 === e.consent, "manual"),
                    I.trigger("change", B)
                }
            });
            const D = I;
            var q = n(426)
              , U = n.n(q)
              , z = /[,\s]\s*/
              , F = "bvCallback"
              , W = function() {
                if (!U())
                    return [];
                var e = U().getAttribute("data-bv-preload");
                return e ? e.split(z) : []
            }()
              , $ = U() && U().getAttribute("data-bv-callback") || F
              , H = U() && U().getAttribute("data-bv-display-code")
              , Q = U() && U().getAttribute("data-bv-hostname");
            function J() {
                return (J = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            var X = n(422)
              , G = c()(a.Z.domains, X.location.hostname);
            const K = function(e) {
                var t = e.commonData
                  , n = e.name
                  , r = e.source
                  , o = J({}, t);
                o.locale = a.Z.deployment.locale,
                o.deploymentZone = a.Z.deployment.site;
                var i = {
                    name: n,
                    client: a.Z.deployment.client,
                    display: H || a.Z.displayCode,
                    environment: a.Z.vpc,
                    source: r,
                    staging: "stg" === a.Z.dataEnvironment || "qa" === a.Z.vpc,
                    anonymous: P.anonymous,
                    brandDomain: G.get("firstPartyCookieEnabled") ? G.get("domain") : "",
                    commonData: o,
                    privacy: D
                }
                  , s = new (j())(i);
                return "europe" === a.Z.piiDataRegion && s.setEU(!0),
                a.Z.webAnalyticsIntegrationConfigs && a.Z.webAnalyticsIntegrationConfigs.length && a.Z.webAnalyticsIntegrationConfigs.forEach((function(e) {
                    s.configureSCIProvider(e.name, e)
                }
                )),
                s
            };
            const Y = K({
                commonData: {
                    bvProduct: "bv-loader",
                    bvProductVersion: a.Z.scoutVersion
                },
                name: "bv-loader",
                source: "bv-loader"
            });
            var ee = n(197);
            if ("undefined" != typeof window) {
                var te = new RegExp(a.Z.paths.root);
                window.addEventListener("error", (function(e) {
                    var t = e.error
                      , n = e.filename;
                    te.test(n) && (Y.trackError({
                        message: t.message || t,
                        stack: t.stack,
                        type: "BV Loader Uncaught ".concat(t.name || "Error")
                    }),
                    (0,
                    ee.Z)().then((function(e) {
                        e(t)
                    }
                    )))
                }
                ))
            }
            var ne = n(916)
              , re = void 0
              , oe = 0
              , ae = function(e) {
                ne.mark(e)
            }
              , ie = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                    t[n] = arguments[n];
                return t.join("_")
            }
              , se = ie("BV", "PERF", "MARK")
              , ce = function e(t) {
                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    r[o - 1] = arguments[o];
                if (r.length) {
                    var a = ie(t, r.shift());
                    return e.call.apply(e, [re, a].concat(r))
                }
                var i = []
                  , s = []
                  , c = function(e) {
                    ae(e ? ie(t, e) : t);
                    var n = ne.getEntriesByType("mark")
                      , r = n[n.length - 1];
                    return i.push(r),
                    r
                }
                  , u = function(e) {
                    return function() {
                        var n = c("end");
                        ne.measure(t);
                        var r = ne.getEntriesByType("measure")
                          , o = r[r.length - 1];
                        return Object.defineProperties(o, {
                            startTime: {
                                configurable: !0,
                                enumerable: !0,
                                value: e.startTime,
                                writable: !1
                            },
                            duration: {
                                configurable: !0,
                                enumerable: !0,
                                value: n.startTime - e.startTime,
                                writable: !1
                            }
                        }),
                        i.push(n),
                        s.push(o),
                        n
                    }
                }
                  , l = {
                    createMark: {
                        configurable: !0,
                        enumerable: !0,
                        value: e.bind(re, t)
                    },
                    marks: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return i
                        }
                    },
                    measures: {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                            return s
                        }
                    },
                    start: {
                        configurable: !0,
                        enumerable: !0,
                        value: function() {
                            return u(c("start"))
                        }
                    }
                };
                return Object.defineProperties(c, l),
                c
            };
            const ue = function(e) {
                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
                    n[r - 1] = arguments[r];
                return ce.call.apply(ce, [re, ie(se, e || ++oe)].concat(n))
            };
            var le = n(334);
            function fe() {
                return (fe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            var de = n(422)
              , pe = function(e) {
                return e.map((function(e) {
                    return fe({}, e, {
                        value: String(e.value)
                    })
                }
                ))
            }
              , me = function(e) {
                return Object.keys(e).map((function(t) {
                    return {
                        name: t,
                        value: e[t]
                    }
                }
                )).filter((function(e) {
                    return void 0 !== e.value
                }
                ))
            }
              , he = function(e) {
                return e && e !== Math.floor(e) ? Number(e.toFixed(2)) : e
            }
              , ve = function(e, t) {
                var n = {}
                  , r = t ? u.Z._render.layouts[e].perfMark : u.Z[e].perfMark
                  , o = ne.getEntriesByType("resource").filter((function(t) {
                    return !!t.name.match(le.Z.appNameRegex(e)) || !!t.name.match(le.Z.layoutNameRegex(e))
                }
                )).shift();
                if (r.bvShow.marks.length && (n.bvShowProcessed = he(r.bvShow.marks[0].startTime)),
                r.load.measures.length && (n.loadTime = he(r.load.measures[0].duration),
                n.loadStart = he(r.load.measures[0].startTime)),
                !t && r.configure.measures.length && (n.configurationTime = he(r.configuration.measures[0].duration)),
                r.render.measures.length && (n.avgRender = he(r.render.measures.reduce((function(e, t) {
                    return e + t.duration
                }
                ), 0) / r.render.measures.length),
                n.render = r.render.measures.map((function(e) {
                    return he(e.duration)
                }
                )),
                n.renderStart = r.render.measures.map((function(e) {
                    return he(e.startTime)
                }
                ))),
                o) {
                    var a = o.fetchStart
                      , i = o.transferSize
                      , s = o.responseEnd
                      , c = o.requestStart;
                    n.fetchStart = he(a),
                    n.responseEnd = he(s),
                    c && (n.transferSize = i,
                    n.ttfb = he(a - c))
                }
                return pe(me(n))
            }
              , ge = function() {
                var e = {}
                  , t = ne.getEntriesByType("resource")
                  , n = ne.getEntriesByType("paint")
                  , r = {
                    totalPageRequests: 0,
                    totalBVRequests: 0,
                    totalCachedBVResources: 0,
                    totalCachedOtherResources: 0,
                    totalCumulativeLoadTime: 0,
                    totalCumulativeBVLoadTime: 0,
                    totalActualOtherLoadTime: 0,
                    totalActualBVLoadTime: 0,
                    totalNumOfBVScripts: 0,
                    totalNumOfBVAPIRequests: 0,
                    totalNumOfBVStylesheets: 0,
                    totalNumOfBVImages: 0,
                    totalNumOfOtherBVHTTPRequests: 0,
                    totalNumOfOtherScripts: 0,
                    totalNumOfOtherStylesheets: 0,
                    totalNumOfOtherImages: 0,
                    totalNumOfOtherHTTPRequests: 0,
                    totalNumOfHTTP2Resources: 0,
                    totalNumOfHTTP2BVResources: 0,
                    pageStatus: document.readyState
                }
                  , o = function(t, n) {
                    var r = n.fetchStart
                      , o = n.responseEnd
                      , a = n.requestStart
                      , i = n.responseStart;
                    e["".concat(t, "-fetchStart")] && (t = "".concat(t, "(2)")),
                    e["".concat(t, "-fetchStart")] = he(r),
                    e["".concat(t, "-responseEnd")] = he(o),
                    a && (e["".concat(t, "-ttfb")] = he(i - a))
                };
                if (t.length) {
                    var a = 0
                      , i = 0
                      , s = 0;
                    t.forEach((function(t) {
                        var n = t.name
                          , c = t.fetchStart
                          , l = t.duration
                          , f = t.responseEnd
                          , d = t.transferSize
                          , p = t.initiatorType
                          , m = t.nextHopProtocol
                          , h = n.toLowerCase().includes("bv") || n.toLowerCase().includes("bazaarvoice");
                        n.toLowerCase().includes("sid.gif") || n.toLowerCase().includes("st.gif") || n.toLowerCase().includes("a.gif") || (r.totalPageRequests++,
                        d && (e["".concat(n, "-transferSize")] = d),
                        f && s++,
                        n.toLowerCase().includes("components.js") ? o("components.js", t) : n.toLowerCase().includes("bv.js") ? o("bv.js", t) : n.match(le.Z.renderRegex) && (o("render.js", t),
                        e.renderParseComplete = he(u.Z._render.perfMark.parseComplete.marks[0].startTime)),
                        r.totalCumulativeLoadTime += he(l),
                        m.includes("2") && (r.totalNumOfHTTP2Resources++,
                        (n.includes("bv") || n.includes("bazaarvoice")) && r.totalNumOfHTTP2BVResources++),
                        h ? (r.totalBVRequests++,
                        "css" === p ? r.totalNumOfBVStylesheets++ : "script" === p ? r.totalNumOfBVScripts++ : "img" === p ? r.totalNumOfBVImages++ : "xmlhttprequest" === p || "" === p ? r.totalNumOfBVAPIRequests++ : r.totalNumOfOtherBVHTTPRequests++) : "css" === p ? r.totalNumOfOtherStylesheets++ : "script" === p ? r.totalNumOfOtherScripts++ : "img" === p ? r.totalNumOfOtherImages++ : r.totalNumOfOtherHTTPRequests++,
                        h ? (r.totalCumulativeBVLoadTime += l,
                        l <= 10 && r.totalCachedBVResources++,
                        c > i ? (r.totalActualBVLoadTime += l,
                        i = f) : f > i && c < i && (r.totalActualBVLoadTime += f - i,
                        i = f)) : (l <= 10 && r.totalCachedOtherResources++,
                        c > a ? (r.totalActualOtherLoadTime += l,
                        a = f) : f > a && c < a && (r.totalActualOtherLoadTime += f - a,
                        a = f)))
                    }
                    )),
                    fe(e, r, {
                        totalCumulativeLoadTime: he(r.totalCumulativeLoadTime),
                        totalCumulativeBVLoadTime: he(r.totalCumulativeBVLoadTime),
                        totalCumulativeOtherLoadTime: he(r.totalCumulativeLoadTime - r.totalCumulativeBVLoadTime),
                        totalActualBVLoadTime: he(r.totalActualBVLoadTime),
                        totalActualOtherLoadTime: he(r.totalActualOtherLoadTime),
                        totalNumOfHTTP1Resources: t.length - r.totalNumOfHTTP2Resources,
                        totalNumOfHTTP1BVResources: r.totalBVRequests - r.totalNumOfHTTP2BVResources,
                        percentResourcesLoaded: he(s / r.totalPageRequests * 100)
                    })
                }
                return n.length && n.forEach((function(t) {
                    var n = t.name.split("-").map((function(e, t) {
                        return t > 0 ? "".concat(e[0].toUpperCase()).concat(e.slice(1, e.length)) : e
                    }
                    )).join("");
                    e[n] = he(t.startTime)
                }
                )),
                pe(me(e))
            }
              , ye = n(974)
              , be = "bv_metrics"
              , we = function() {
                return ye.create(be, !0, 72e5 / 864e5),
                !0
            }
              , Ee = !!ye.read(be) || !Math.floor(1e3 * Math.random()) && we();
            const Se = function(e, t, n, r) {
                if (Ee && t.length) {
                    we();
                    var o = {
                        type: "performance",
                        name: "Display",
                        scope: e,
                        metrics: t
                    };
                    n && (o.bvProduct = n),
                    r && (o.bvProductVersion = r),
                    Y.trackEvent("Diagnostic", o)
                }
            };
            var Oe = n(423)
              , Te = {}
              , _e = {}
              , xe = n.n(Oe)()(Array)
              , ke = function(e, t) {
                e.filter((function(e) {
                    return !e.dataset.bvReady
                }
                )).forEach((function(e) {
                    var n = e.dataset.bvShow;
                    Te[n] && Te[n].forEach((function(r) {
                        if ("spotlights" === n && t) {
                            var o = e.parentElement;
                            e.removeAttribute("data-bv-ready"),
                            o.replaceChild(e.cloneNode(!1), e)
                        } else
                            r(e),
                            e.dataset.bvReady = !0
                    }
                    ))
                }
                ))
            }
              , Ne = function(e) {
                e.filter((function(e) {
                    return e.dataset.bvReady
                }
                )).forEach((function(e) {
                    var t = e.dataset.bvShow;
                    _e[t] && _e[t].forEach((function(t) {
                        t(e),
                        delete e.dataset.bvReady
                    }
                    ))
                }
                ))
            }
              , Ce = function(e, t) {
                Te[e] || (Te[e] = []),
                Te[e].push(t),
                function(e) {
                    return xe.then((function(t) {
                        var n = document.querySelectorAll("[".concat("data-bv-show", "]"));
                        return t.prototype.filter.call(n, (function(t) {
                            return !e || t.dataset.bvShow === e
                        }
                        ))
                    }
                    ))
                }(e).then(ke)
            }
              , Pe = ["data-bv-product-id", "data-bv-productId", "data-bv-productid", "data-bv-show", "data-bv-subject-id"]
              , Ae = a.Z.apps.reduce((function(e, t) {
                var n = t.publicName;
                return e[t.name] = n,
                e
            }
            ), {})
              , je = Object.keys(Ae).reduce((function(e, t) {
                return e[Ae[t]] = function() {}
                ,
                e
            }
            ), {})
              , Be = function(e, t, r) {
                var o = e.config.name
                  , a = Ae[o]
                  , i = r.bvShow = r.createMark("bvShow");
                a && (je[a] = function() {
                    t()(),
                    e.ready((function() {
                        i.start(),
                        Ce(a, (function(t) {
                            n.g.BV && n.g.BV.Spotlights && "spotlights" === a && delete n.g.BV.Spotlights,
                            e.trigger("container_added", t)
                        }
                        )),
                        function(e, t) {
                            _e[e] || (_e[e] = []),
                            _e[e].push(t)
                        }(a, (function(t) {
                            e.trigger("container_removed", t)
                        }
                        ))
                    }
                    )),
                    je[a] = function() {}
                }
                )
            }
              , Ze = function(e) {
                e.forEach((function(e) {
                    var t = e.dataset.bvShow;
                    je[t] && je[t]()
                }
                ))
            }
              , Ve = n(788)
              , Le = n.n(Ve)
              , Re = n(920);
            function Ie() {
                return (Ie = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }
                ).apply(this, arguments)
            }
            var Me = n(422)
              , De = Me.console
              , qe = !1;
            function Ue() {
                return function() {
                    var e = Me.$BV || []
                      , t = {
                        _apiQueue: [],
                        log: function() {
                            De && De.log && De.log(arguments)
                        },
                        push: function(e) {
                            qe || function() {
                                if (!a.Z.isConversations && (Q && (a.Z.legacyScoutUrl = a.Z.legacyScoutUrl.replace(/^(https?:\/\/)([^/]+)/, "$1".concat(Q))),
                                H && (a.Z.legacyScoutUrl = a.Z.legacyScoutUrl.replace(/\/+([^/]+)\/bvapi.js/, "/".concat(H, "/bvapi.js"))),
                                /\[HOSTNAME\]/.test(a.Z.legacyScoutUrl) || /\[DISPLAYCODE\]/.test(a.Z.legacyScoutUrl)))
                                    throw Error('Could not determine display code and hostname. Contact Bazaarvoice Support to configure your implementation, or provide explicit "data-bv-display-code" and "data-bv-hostname" attributes.');
                                qe = !0,
                                Le().loadScript(a.Z.legacyScoutUrl)
                            }(),
                            t._apiQueue.push(e)
                        }
                    }
                      , n = x.userToken || void 0;
                    n && t._apiQueue.push(["configure", "global", {
                        userToken: n
                    }]),
                    e.forEach((function(e) {
                        t.push(e)
                    }
                    ));
                    return ["ui", "configure", "container", "ready", "SI.trackProductPageView", "SI.trackGenericPageView", "SI.trackTransactionPageView", "SI.disable", "SI.enable", "SI.setDebugEnabled", "SI.trackConversion", "DSI.trackBVPageView", "DSI.trackProduct", "DSI.trackTransaction"].forEach((function(e) {
                        !function(e, n) {
                            for (var r, o = n.split("."), a = o.pop(), i = o.shift(); i; )
                                e = e[i] = e[i] || {},
                                i = o.shift();
                            e[a] = (r = n.replace(/\./g, "_"),
                            function() {
                                for (var e, n = [r], o = 0, a = arguments.length; o < a; o++)
                                    n.push(arguments[o]);
                                return "ui" !== r ? t.push(n) : ((e = n[3] = n[3] || {}).loadedDeferred = e.loadedDeferred || new ze,
                                t.push(n),
                                e.loadedDeferred.promise())
                            }
                            )
                        }(t, e)
                    }
                    )),
                    t
                }()
            }
            function ze() {
                var e = this;
                this.promiseRef = new Re((function(t, n) {
                    Ie(e, {
                        resolve: t,
                        reject: n
                    })
                }
                ))
            }
            ze.prototype.promise = function() {
                return this.promiseRef
            }
            ;
            var Fe = "color: #0b6392; font-size:1.1em; text-decoration:none; font-weight:normal;"
              , We = n.g.location.hostname
              , $e = c()(a.Z.domains, We);
            function He() {
                !function(e) {
                    if (!e.isValid)
                        throw "Bazaarvoice is not configured for the domain ".concat(We, ".")
                }($e),
                function(e) {
                    if (e && e.src) {
                        var t = le.Z.parseClient(e.src)
                          , n = t && t.toLowerCase();
                        if (t && t !== n) {
                            var r = e.src.replace("/deployments/".concat(t), "/deployments/".concat(n));
                            console.warn("%cYou are using a cased client name (%c".concat(t, "%c) in the bv.js URL.\n        Please use this URL instead: %c").concat(r, "%c.\n        For details, see the Conversations Implementation section of https://knowledge.bazaarvoice.com."), Fe, "color:black; font-size:1.1em; font-weight:bold;", Fe, "font-size:1.0em; font-weight:lighter;", Fe)
                        }
                    }
                }(U())
            }
            var Qe = n(424)
              , Je = n.n(Qe)
              , Xe = n(920);
            function Ge(e, t, n, r) {
                return r.load.end(),
                e && ((0,
                ee.Z)().then((function(t) {
                    t(e)
                }
                )),
                n.processReady(e)),
                new Xe((function(e) {
                    "interactive" === document.readyState ? e() : document.addEventListener("DOMContentLoaded", (function() {
                        e()
                    }
                    ))
                }
                )).then((function() {
                    var e;
                    Se(t.name, (e = t.name,
                    ve(e, !1)), t.name, t.version)
                }
                ))
            }
            function Ke(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                        return;
                    var n = []
                      , r = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return Ye(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return Ye(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function Ye(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var et = document.createElement("script")
              , tt = window.navigator.userAgent.toLowerCase()
              , nt = {
                noModule: "noModule"in et,
                isFirefox: !!~tt.indexOf("firefox"),
                isChrome: !!~tt.indexOf("chrome")
            };
            nt.isSafari = !nt.isChrome && !!~tt.indexOf("safari"),
            nt.doModernLoad = nt.isSafari && nt.noModule ? function() {
                var e = tt.match(/macintosh.+mac os x (\d+)_(\d+)_\d+\)/)
                  , t = tt.match(/version\/(\d+)\.\d+\.\d+ safari\/\d+\.\d+\.\d/);
                if (e) {
                    var n = Ke(e, 3)
                      , r = n[1]
                      , o = n[2];
                    if (Number(r) >= 10 && Number(o) >= 13 && t) {
                        var a = Ke(t, 2)[1];
                        return Number(a) >= 11
                    }
                    return !1
                }
                return !0
            }() : !nt.noModule && nt.isFirefox ? function() {
                var e = tt.match(/(?:firefox\/)([\d.]+)/);
                if (e && e.length) {
                    var t = Ke(e, 2)[1];
                    return Number(t) > 54
                }
                return !1
            }() : nt.noModule;
            const rt = nt;
            var ot = n.g.BV
              , at = function(e) {
                return e && e.split(",").map((function(e) {
                    return e.trim()
                }
                )) || []
            }(x.disabled);
            function it(e, t) {
                var r = t.createMark("register", e.name);
                r.end = r.start();
                var o = new (Je())({
                    name: e.name
                });
                u.Z.registerProperty(e.name, o);
                var a = t.createMark("app", e.name)
                  , i = a.createMark("configure")
                  , s = a.createMark("load")
                  , c = a.createMark("render");
                a.configure = i,
                a.load = s,
                a.render = c,
                u.Z[e.name].perfMark = a;
                var l = u.Z[e.name]._analytics = K({
                    name: e.name,
                    source: "bv-loader"
                });
                ot.global.loadUserSegment.then((function(e) {
                    l.setCommonData({
                        displaySegment: e
                    })
                }
                )),
                "api" === e.name && (u.Z[e.name].analytics = l),
                o.setErrorHandler((function(t, r) {
                    return function(e, t, r) {
                        t instanceof Error || (t = new Error(t));
                        var o = n.g.console;
                        o && o.error && o.error(t),
                        u.Z[e]._analytics.trackError({
                            message: t.message || t,
                            stack: t.stack,
                            type: "BV Application ".concat(r.event, " ").concat(t.name || "Error")
                        }),
                        (0,
                        ee.Z)().then((function(n) {
                            r.app = e,
                            n(t, {
                                extra: r
                            })
                        }
                        ))
                    }(e.name, t, r)
                }
                ));
                var f = function() {
                    at.some((function(t) {
                        return ~[e.name, e.publicName].indexOf(t)
                    }
                    )) ? Y.trackEvent("Feature", {
                        type: "Used",
                        name: "AppDisabled",
                        detail1: e.name
                    }) : function(e, t, n) {
                        n.load.end = n.load.start();
                        var r = e.sourcePath;
                        if (e.legacyPath && !rt.doModernLoad && (r = e.legacyPath),
                        Le().loadScript(r, {
                            timeout: 6e4
                        }, (function(r) {
                            Ge(r, e, t, n)
                        }
                        )),
                        e.configUrl) {
                            var o = n.createMark("load", "config");
                            o.end = o.start(),
                            Le().loadScript(e.configUrl, {
                                timeout: 3e4
                            }, (function() {
                                o.end()
                            }
                            ))
                        }
                    }(e, o, a),
                    f = function() {}
                };
                if (W.some((function(t) {
                    return t === e.name
                }
                )) || !e.defer)
                    f();
                else {
                    var d = o.configure
                      , p = o.ready
                      , m = o.render
                      , h = function(e, t) {
                        return f(),
                        o.configure = d,
                        o.ready = p,
                        o.render = m,
                        o[e].apply(this, t)
                    };
                    ["configure", "ready", "render"].forEach((function(e) {
                        o[e] = function() {
                            return h.call(this, e, arguments)
                        }
                    }
                    ))
                }
                Be(o, (function() {
                    return f
                }
                ), a),
                r.end()
            }
            _().call(Je().prototype);
            var st = n(353)
              , ct = n(920);
            function ut(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                        return;
                    var n = []
                      , r = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return lt(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return lt(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function lt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            n(183);
            var ft = n(422);
            const dt = function() {
                var e = ft.document
                  , t = ue("bv_loader");
                He(),
                t.end = t.start();
                var n;
                ft.navigator.userAgent.indexOf("MSIE") > -1 || ft.navigator.userAgent.indexOf("Trident/");
                if (u.Z.privacy = D,
                u.Z.pixel = K({
                    commonData: {
                        bvProduct: "pixel"
                    },
                    name: "pixel",
                    source: "bv-loader"
                }),
                a.Z.isCurationsEnabled) {
                    ft.crl8 = ft.crl8 = ft.crl8 || {};
                    var r = !1
                      , o = []
                      , i = function() {
                        r = !0,
                        o.forEach((function(e) {
                            e()
                        }
                        ))
                    };
                    ft.crl8.ready = function(e) {
                        r ? e() : o.push(e)
                    }
                }
                (a.Z.apps.forEach((function(e) {
                    return it(e, t)
                }
                )),
                u.Z.curations && u.Z.curations.on("curations_loaded", i),
                O({
                    selector: "[data-bv-show]",
                    attributes: Pe,
                    callback: function(e, t) {
                        var n = [t];
                        e === d ? (Ze(n),
                        ke(n)) : e === p ? Ne(n) : (Ze(n),
                        Ne(n),
                        ke(n, !0))
                    }
                }),
                ft.$BV && "ui"in ft.$BV || a.Z.isPreview || (ft.$BV = Ue()),
                "container" === (x.pageType || void 0) && (a.Z.isConversations ? ft.$BV.container("global", {}) : ft.$BV.ui("submission_container", {})),
                (0,
                st.M)(),
                $) && (ft[$] ? m(ft[$]) : Object.defineProperty(ft, $, {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        n = e,
                        m(e)
                    }
                }));
                t.end();
                var s = ut(t.measures, 1)[0]
                  , c = s.duration
                  , l = s.startTime
                  , f = l + c;
                try {
                    Y.trackEvent("Diagnostic", {
                        name: "timeToRunScout",
                        type: "Performance",
                        startTime: l.toFixed(4),
                        endTime: f.toFixed(4),
                        elapsedMs: c.toFixed(4)
                    })
                } catch (e) {}
                function m(e) {
                    if ("function" != typeof e)
                        throw Error("The BV Callback must be a function.");
                    setTimeout((function() {
                        e.call(null, u.Z)
                    }
                    ))
                }
                Ee && (new ct((function(t) {
                    "interactive" === e.readyState ? t() : e.addEventListener("DOMContentLoaded", (function() {
                        t()
                    }
                    ))
                }
                )).then((function() {
                    Se("page", function() {
                        var e = de.devicePixelRatio
                          , t = de.innerHeight
                          , n = de.innerWidth
                          , r = de.navigator
                          , o = {
                            devicePixelRatio: e,
                            screenHeight: t,
                            screenWidth: n
                        };
                        r.connection && (o.effectiveType = r.connection.effectiveType,
                        o.downlink = r.connection.downlink);
                        var a = ne.getEntriesByType("navigation").shift();
                        return a && ["connectEnd", "connectStart", "domainLookupStart", "domainLookupEnd", "domComplete", "domInteractive", "domContentLoadedEventStart", "fetchStart", "loadEventEnd", "requestStart", "responseStart", "responseEnd", "secureConnectionStart"].forEach((function(e) {
                            o[e] = he(a[e])
                        }
                        )),
                        pe(me(o))
                    }()),
                    Se("bv-loader", function() {
                        var e = {}
                          , t = ne.getEntriesByType("resource").filter((function(e) {
                            return !!e.name.match(le.Z.bvLoaderRegex)
                        }
                        )).shift();
                        t && ["connectEnd", "connectStart", "domainLookupStart", "domainLookupEnd", "domComplete", "domInteractive", "domContentLoadedEventStart", "fetchStart", "loadEventEnd", "requestStart", "responseStart", "responseEnd", "secureConnectionStart"].forEach((function(n) {
                            e[n] = he(t[n])
                        }
                        ));
                        var n, r, o = (n = "requestedApp",
                        r = a.Z.apps.map((function(e) {
                            return e.name
                        }
                        )),
                        r.map((function(e) {
                            return {
                                name: n,
                                value: e
                            }
                        }
                        ))).concat(me(e));
                        return pe(o)
                    }())
                }
                )),
                window.addEventListener("unload", (function() {
                    for (var e in Se("resources", ge()),
                    ft.BV._render.layouts)
                        Se("render", ve(e, !0), e)
                }
                )))
            }
        }
        ,
        690: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>r
            });
            const r = {
                deployment: {
                    client: "builders",
                    site: "main_site",
                    environment: "production",
                    locale: "en_ZA"
                },
                dataEnvironment: "prod",
                serverEnvironment: "prod",
                vpc: "prod",
                piiDataRegion: "unitedStates",
                cookiesOptIn: !1,
                displayCode: "15736",
                domains: [{
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".builders.co.za"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".bazaarvoice.com"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".local.builders.co.za"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".aws.builders.co.za"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".qa.aws.builders.co.za"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: "translate.googleusercontent.com"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: "webcache.googleusercontent.com"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: "translate.baiducontent.com"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: ".bazaarvoice.com"
                }, {
                    firstPartyCookieEnabled: !0,
                    thirdPartyCookieEnabled: !0,
                    domain: "localhost"
                }],
                scoutVersion: "13.6.4",
                splitTestingEnabled: !1,
                isConversations: !0,
                isPreview: !1,
                legacyScoutUrl: "https://display.ugc.bazaarvoice.com/static/builders/main_site/en_ZA/bvapi.js",
                paths: {
                    root: "https://apps.bazaarvoice.com",
                    splitTests: "https://apps.bazaarvoice.com/splitTests.json",
                    componentTemplate: "https://apps.bazaarvoice.com/components/components-<%= version %>.min.js",
                    renderTemplate: "https://apps.bazaarvoice.com/render/render-<%= version %>.min.js",
                    layoutRoot: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/layouts"
                },
                render: {},
                webAnalyticsIntegrationConfigs: [],
                apps: [{
                    name: "api",
                    version: "0.8.0",
                    defer: !1,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/api/api-0.8.0.js",
                    legacyPath: "https://apps.bazaarvoice.com/apps/api/api-0.8.0.legacy.js",
                    publicName: "api",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/api-config.js"
                }, {
                    name: "inline_ratings",
                    version: "2.2.3",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/inline_ratings/inline_ratings-2.2.3.js",
                    legacyPath: null,
                    publicName: "inline_rating",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/inline_ratings-config.js"
                }, {
                    name: "rating_summary",
                    version: "2.55.0",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/rating_summary/rating_summary-2.55.0.js",
                    legacyPath: null,
                    publicName: "rating_summary",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/rating_summary-config.js"
                }, {
                    name: "ratings",
                    version: "0.1.23",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/ratings/ratings-0.1.23.js",
                    legacyPath: null,
                    publicName: "ratings",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/ratings-config.js"
                }, {
                    name: "review-highlights",
                    version: "0.1.1",
                    defer: !0,
                    hasConfig: !1,
                    sourcePath: "https://apps.bazaarvoice.com/apps/review-highlights/review-highlights-0.1.1.js",
                    legacyPath: null,
                    publicName: "review-highlights"
                }, {
                    name: "review_highlights",
                    version: "3.3.0",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/review_highlights/review_highlights-3.3.0.js",
                    legacyPath: null,
                    publicName: "review_highlights",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/review_highlights-config.js"
                }, {
                    name: "reviews",
                    version: "0.4.0",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/reviews/reviews-0.4.0.js",
                    legacyPath: null,
                    publicName: "reviews",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/reviews-config.js"
                }, {
                    name: "swat-submission",
                    version: "4.5.2",
                    defer: !0,
                    hasConfig: !0,
                    sourcePath: "https://apps.bazaarvoice.com/apps/swat-submission/swat-submission-4.5.2.js",
                    legacyPath: null,
                    publicName: "multi_submission",
                    configUrl: "https://apps.bazaarvoice.com/deployments/builders/main_site/production/en_ZA/swat-submission-config.js"
                }]
            }
        }
        ,
        318: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>l
            });
            var r = n(530)
              , o = n.n(r)
              , a = n(690)
              , i = n(422)
              , s = console.warn.bind(console)
              , c = ["API_BASE_URL", "Date", "_bvapijs", "_internal", "_options", "_staticAssetRegistry", "configure", "define", "easyXDM", "extensions", "global", "initialData", "name", "options", "performance", "pixel", "privacy", "_private", "registerProperty", "_render", "requestAnimationFrame", "require", "requirejs", "serverRender", "_spotlightsConfig", "Spotlights", "staticAssetLoader", "ud", "ui"].concat(a.Z.apps.map((function(e) {
                return e.name
            }
            )));
            if ("Proxy"in i) {
                var u = i.Proxy;
                i.BV = new u(i.BV || {},{
                    set: function(e, t, n) {
                        return ~c.indexOf(t) || s("Unexpected property '".concat(t, "' assigned to window.BV. Valid assignment to the BV variable requires approval from the BV Loader Team.")),
                        e[t] = n,
                        !0
                    }
                })
            }
            const l = o().namespace("BV")
        }
        ,
        334: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>a
            });
            var r = n(690)
              , o = new RegExp("/deployments/([^/]+)/(?:[^/]+/){3}bv\\.js");
            const a = {
                appNameRegex: function(e) {
                    return new RegExp("".concat(r.Z.paths.root, "/apps/").concat(e, "/").concat(e, "-[^/]+.js"))
                },
                layoutNameRegex: function(e) {
                    return new RegExp("".concat(r.Z.paths.layoutRoot, "/").concat(e, ".json"))
                },
                renderRegex: r.Z.deployment.local ? new RegExp("render.js") : new RegExp("".concat(r.Z.paths.root, "/render/render-[^/]+.js")),
                bvLoaderRegex: o,
                parseClient: function(e) {
                    var t = o.exec(e);
                    if (t)
                        return t[1]
                },
                errorReportPath: "".concat(r.Z.paths.root, "/errors")
            }
        }
        ,
        183: (e,t,n)=>{
            "use strict";
            n.r(t);
            var r = n(318)
              , o = n(886)
              , a = n(197);
            r.Z._private = {},
            (0,
            o.Z)(r.Z._private, {
                ponyfills: r.Z.global.ponyfills,
                SystemJS: r.Z.global.SystemJS,
                loadUserSegment: r.Z.global.loadUserSegment,
                errorReporter: a.Z
            }),
            Object.freeze(r.Z._private)
        }
        ,
        197: (e,t,n)=>{
            "use strict";
            n.d(t, {
                Z: ()=>g
            });
            var r = n(753)
              , o = n.n(r)
              , a = n(690)
              , i = n(390)
              , s = n(304)
              , c = n(334)
              , u = n(353)
              , l = n(920)
              , f = n(306).i8
              , d = n(422);
            function p(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.extra
                  , r = t.renderVersion
                  , o = t.componentsVersion
                  , a = t.component
                  , i = (0,
                u.M)().then((function() {
                    return m(e, {
                        extra: n,
                        renderVersion: r,
                        componentsVersion: o,
                        component: a
                    })
                }
                )).catch((function() {
                    return m(e, {
                        extra: n,
                        renderVersion: r,
                        componentsVersion: o,
                        component: a
                    })
                }
                ));
                return i.then((function(e) {
                    return h(e)
                }
                ))
            }
            function m(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                  , n = t.extra
                  , r = t.renderVersion
                  , o = t.componentsVersion
                  , c = t.component
                  , u = v(e)
                  , l = {
                    timestamp: new Date(Date.now()).toISOString(),
                    logger: "bv.js",
                    platform: "javascript",
                    sdk: {
                        name: "bv-loader",
                        version: f
                    },
                    level: "error",
                    release: f,
                    tags: {
                        components_release: o,
                        bv_loader_release: f,
                        render_release: r,
                        client: a.Z.deployment.client,
                        deployment_zone: a.Z.deployment.site,
                        data_environment: a.Z.dataEnvironment,
                        locale: a.Z.deployment.locale,
                        component: c,
                        load_id: d.BVA ? d.BVA.loadId : void 0
                    },
                    environment: a.Z.serverEnvironment,
                    exception: u,
                    extra: n
                }
                  , p = (0,
                i.detect)();
                return p && (l.contexts = {
                    browser: {
                        name: p.name,
                        version: p.version
                    }
                }),
                (0,
                s.vd)().then((function(e) {
                    Object.defineProperty(l.tags, "bv_segment", {
                        value: e
                    })
                }
                )).then((function() {
                    return l
                }
                ))
            }
            function h(e) {
                var t = new XMLHttpRequest;
                return new l((function(n, r) {
                    t.onreadystatechange = function() {
                        if (t.readyState === XMLHttpRequest.DONE)
                            if (200 === t.status) {
                                var e;
                                try {
                                    e = JSON.parse(t.responseText)
                                } catch (e) {
                                    r("Unable to JSON.parse server response: ".concat(t.responseText, "."))
                                }
                                n(e)
                            } else
                                r("The call to the server was not successful.")
                    }
                    ,
                    t.open("POST", c.Z.errorReportPath),
                    t.timeout = 1e4,
                    t.ontimeout = function() {
                        t.abort()
                    }
                    ,
                    t.setRequestHeader("Content-Type", "application/json"),
                    t.send(JSON.stringify(e))
                }
                ))
            }
            function v(e) {
                var t = function(e) {
                    var t;
                    try {
                        t = o().parse(e)
                    } catch (e) {
                        return
                    }
                    return {
                        frames: t.map((function(e) {
                            return {
                                filename: e.fileName,
                                function: e.functionName,
                                lineno: e.lineNumber,
                                colno: e.columnNumber
                            }
                        }
                        ))
                    }
                }(e);
                return {
                    type: e.name,
                    value: e.message,
                    stacktrace: t
                }
            }
            const g = function() {
                return new l((function(e) {
                    e(p)
                }
                ))
            }
        }
        ,
        886: (e,t,n)=>{
            "use strict";
            function r(e, t) {
                Object.keys(t).forEach((function(n) {
                    void 0 !== t[n] && Object.defineProperty(e, n, {
                        value: t[n]
                    })
                }
                ))
            }
            n.d(t, {
                Z: ()=>r
            })
        }
        ,
        304: (e,t,n)=>{
            "use strict";
            n.d(t, {
                vd: ()=>w
            });
            var r = n(974)
              , o = n.n(r)
              , a = n(318)
              , i = n(690)
              , s = n(920)
              , c = new Map;
            var u = n(920);
            function l(e, t) {
                return function(e) {
                    if (Array.isArray(e))
                        return e
                }(e) || function(e, t) {
                    if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                        return;
                    var n = []
                      , r = !0
                      , o = !1
                      , a = void 0;
                    try {
                        for (var i, s = e[Symbol.iterator](); !(r = (i = s.next()).done) && (n.push(i.value),
                        !t || n.length !== t); r = !0)
                            ;
                    } catch (e) {
                        o = !0,
                        a = e
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (o)
                                throw a
                        }
                    }
                    return n
                }(e, t) || function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return f(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return f(e, t)
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            function f(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++)
                    r[n] = e[n];
                return r
            }
            var d = n(422)
              , p = "baseline"
              , m = 864e5
              , h = 5184e6
              , v = "bv_segment"
              , g = Math.random();
            function y() {
                return function(e) {
                    var t = c.get(e);
                    if (t)
                        return t;
                    var n = new XMLHttpRequest;
                    return t = new s((function(t, r) {
                        n.onreadystatechange = function() {
                            if (n.readyState === XMLHttpRequest.DONE)
                                if (200 === n.status) {
                                    var e;
                                    try {
                                        e = JSON.parse(n.responseText)
                                    } catch (e) {
                                        r("Unable to JSON.parse server response: ".concat(n.responseText, "."))
                                    }
                                    t(e)
                                } else
                                    r("The call to the server was not successful.")
                        }
                        ,
                        n.open("GET", e, !0),
                        n.timeout = 1e4,
                        n.ontimeout = function() {
                            n.abort()
                        }
                        ,
                        n.send()
                    }
                    )),
                    c.set(e, t),
                    t
                }(i.Z.paths.splitTests).then((function(e) {
                    return e.tests
                }
                ), (function() {
                    return []
                }
                ))
            }
            function b(e) {
                var t;
                try {
                    var n = e.filter((function(e) {
                        return t = e,
                        !(new Date(t.start).getTime() + (t.duration || h) < Date.now() || t.forceExpire);
                        var t
                    }
                    ))
                      , r = n.filter((function(e) {
                        var t = e.clients
                          , n = e.deploymentZones;
                        if (!t)
                            return !1;
                        return n ? -1 !== n.indexOf(a.Z.global.siteId) && -1 !== t.indexOf(a.Z.global.client) : -1 !== t.indexOf(a.Z.global.client)
                    }
                    ))
                      , o = n.filter((function(e) {
                        return !e.clients
                    }
                    ))
                      , i = r.length > 0 ? r : o;
                    i.sort((function(e, t) {
                        return new Date(e.startDate) - new Date(t.startDate)
                    }
                    )),
                    t = i.shift()
                } catch (e) {
                    throw new Error("Something went wrong when choosing a split test.\n      Please ensure that all defined tests are valid. ".concat(e))
                }
                return t
            }
            function w() {
                if (!i.Z.splitTestingEnabled)
                    return u.resolve(p);
                var e, t = (e = "bv_segment",
                d.location.search.substr(1).split("&").filter((function(t) {
                    return t.split("=")[0] === e
                }
                )).map((function(e) {
                    return e.split("=")[1]
                }
                ))[0]);
                if (t)
                    return u.resolve(t);
                var n = o().read(v);
                if (n) {
                    var r;
                    try {
                        r = JSON.parse(n)
                    } catch (e) {}
                    if (r) {
                        var a = r.segment;
                        if (a) {
                            var s = u.resolve(a);
                            return s.then((function() {
                                return e = r.testId,
                                void y().then((function(t) {
                                    var n = l(t.filter((function(t) {
                                        return t.id === e
                                    }
                                    )), 1)[0];
                                    n && n.forceExpire && o().remove(v)
                                }
                                ));
                                var e
                            }
                            )),
                            s
                        }
                    }
                }
                return y().then(b).then((function(e) {
                    if (!e)
                        return p;
                    var t = new Date(e.start).getTime();
                    if (t <= Date.now()) {
                        var n = function(e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12096e5
                              , n = Date.now() - e;
                            return (t - n) / m
                        }(t, e.duration);
                        if (n > 0) {
                            var r = e.id
                              , a = function() {
                                for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = 0, n = Object.keys(e).sort(); n.length; ) {
                                    var r = n.pop()
                                      , o = e[r];
                                    if (g <= t + o)
                                        return r;
                                    t += o
                                }
                                return p
                            }(e.splits)
                              , i = JSON.stringify({
                                testId: r,
                                segment: a
                            });
                            return o().create(v, i, n),
                            a || p
                        }
                    }
                }
                ))
            }
        }
        ,
        388: function(e, t) {
            var n, r, o;
            r = [],
            void 0 === (o = "function" == typeof (n = function() {
                function e(e) {
                    if (!(e = e || {}).name || "string" != typeof e.name)
                        throw new TypeError("config.name is required and must be string");
                    this.name = e.name,
                    this.commonData = e.commonData || {},
                    this._verify(),
                    this.q.push(["create", e]);
                    for (var t, n, r = ["Staging", "Audience", "Anonymous"], o = 0; o < r.length; o++)
                        ((n = e[(t = r[o]).toLowerCase()]) || e.hasOwnProperty(t.toLowerCase())) && this["set" + t](n);
                    e.validationCallback && this.enableValidation(e.validationCallback),
                    !1 === e.timing && this.disableTiming(),
                    e.brandDomain && this.setBrandDomain(e.brandDomain),
                    e.eventClassFilter && this.setEventClassFilter(e.eventClassFilter)
                }
                return function() {
                    function t() {
                        for (var e = n(arguments), t = 1; t < e.length; t++)
                            if (null !== e[t] && "object" == typeof e[t])
                                for (var r in e[t])
                                    e[t].hasOwnProperty(r) && (e[0][r] = e[t][r]);
                        return e[0]
                    }
                    function n(e) {
                        return Array.prototype.slice.call(e)
                    }
                    function r(e, t, n) {
                        var r, o, a = t || 250;
                        return function() {
                            var t = n || this
                              , i = +new Date
                              , s = arguments;
                            r && i < r + a ? (clearTimeout(o),
                            o = setTimeout((function() {
                                r = i,
                                e.apply(t, s)
                            }
                            ), a)) : (r = i,
                            e.apply(t, s))
                        }
                    }
                    var o = ["setClient", "setDisplay", "setAnonymous", "setBrandDomain", "setSource", "setEnvironment", "setAudience", "setStaging", "setEventClassFilter", "setEU"]
                      , a = {};
                    function i(e) {
                        return function() {
                            this._verify();
                            var t = n(arguments);
                            t.unshift(e),
                            t.push(this.name),
                            this.q.push(t)
                        }
                    }
                    for (var s, c = 0; c < o.length; c++)
                        a[s = o[c]] = i(s);
                    t(a, {
                        _verify: function() {
                            window._bvaq = window._bvaq || [],
                            this.q = window._bvaq
                        },
                        _flushBatch: r((function() {
                            this._verify(),
                            this.q.push(["flushBatch", this.name])
                        }
                        )),
                        loadScript: function(e) {
                            var t = e || "latest"
                              , n = document.createElement("script");
                            n.type = "text/javascript",
                            n.async = !0;
                            var r = "http:";
                            "https:" === window.location.protocol && (r = "https:");
                            var o = "analytics-static.ugc.bazaarvoice.com";
                            n.src = r + "//" + o + "/prod/static/" + t + "/bv-analytics.js";
                            var a = document.getElementsByTagName("script")[0];
                            a.parentNode.insertBefore(n, a)
                        },
                        setCommonData: function(e) {
                            t(this.commonData, e)
                        },
                        configureSCIProvider: function(e, t) {
                            this._verify(),
                            this.q.push(["configureSCIProvider", e, t, this.name])
                        },
                        enableValidation: function(e) {
                            this._verify(),
                            this.q.push(["enableValidation", e, this.name])
                        },
                        disableValidation: function() {
                            this._verify(),
                            this.q.push(["disableValidation", this.name])
                        },
                        enableTiming: function() {
                            this._verify(),
                            this.q.push(["enableTiming", this.name])
                        },
                        disableTiming: function() {
                            this._verify(),
                            this.q.push(["disableTiming", this.name])
                        },
                        addMeta: function(e, t) {
                            this._verify(),
                            this.q.push(["addMeta", e, t, this.name])
                        },
                        removeMeta: function(e) {
                            this._verify(),
                            this.q.push(["removeMeta", e, this.name])
                        },
                        trackEvent: function(e, n) {
                            this._verify(),
                            this.q.push(["addBatchItem", e, t({}, this.commonData, n), this.name]),
                            this._flushBatch()
                        },
                        trackPageView: function(e) {
                            this._verify(),
                            this.q.push(["trackPageView", t({}, this.commonData, e), this.name])
                        },
                        trackError: function(e) {
                            this._verify(),
                            this.q.push(["trackEvent", "Error", t({}, this.commonData, e), this.name])
                        },
                        trackConversion: function(e) {
                            this._verify(),
                            this.q.push(["trackConversion", t({}, this.commonData, e), this.name])
                        },
                        trackTransaction: function(e) {
                            this._verify(),
                            this.q.push(["trackTransaction", t({}, this.commonData, e), this.name])
                        },
                        trackImpression: function(e) {
                            this._verify(),
                            this.trackEvent("Impression", t({}, this.commonData, e), this.name)
                        },
                        doNotTrack: function(e) {
                            this._verify(),
                            this.q.push(["doNotTrack", e, this.name])
                        }
                    }),
                    t(e.prototype, a),
                    function() {
                        var n, r = [], o = 0, a = 250;
                        function i(e, n) {
                            if (!(e = t({
                                minPixels: 100,
                                minTime: 5e3
                            }, e)).containerId)
                                throw new Error("No containerId specified.");
                            e.observerId = o++;
                            var a = function(t) {
                                c(e.observerId),
                                n(t)
                            };
                            return e.callback = a,
                            r.push(e),
                            s(),
                            e.observerId
                        }
                        function s() {
                            var e = "number" == typeof n;
                            r.length >= 1 && !e ? n = setInterval(d, a) : 0 === r.length && e && (clearInterval(n),
                            n = null)
                        }
                        function c(e) {
                            for (var t = 0; t < r.length; t++)
                                r[t].observerId === e && (r.splice(t, 1),
                                s())
                        }
                        function u() {
                            var e = window.document && window.document.documentElement;
                            return {
                                height: window.innerHeight || e.clientHeight,
                                width: window.innerWidth || e.clientWidth
                            }
                        }
                        function l(e) {
                            var t, n = e.getBoundingClientRect(), r = u().height;
                            return n.top <= 0 ? (t = Math.max(n.top + n.height, 0),
                            t = Math.min(t, r)) : n.top >= r ? 0 : Math.min(r - n.top, n.height)
                        }
                        function f(e) {
                            var t, n = e.getBoundingClientRect(), r = u().width;
                            return n.left <= 0 ? (t = Math.max(n.left + n.width, 0),
                            t = Math.min(t, r)) : n.left >= r ? 0 : Math.min(r - n.left, n.width)
                        }
                        function d() {
                            for (var e, t, n, o = 0; o < r.length; o++)
                                n = r[o],
                                e = document.getElementById(n.containerId),
                                t = +new Date,
                                e ? f(e) <= 0 || l(e) < n.minPixels ? delete n.inViewAt : n.inViewAt ? t - n.inViewAt > n.minTime && n.callback() : (n.inViewAt = t,
                                0 === n.minTime && n.callback()) : delete n.inViewAt
                        }
                        function p(e) {
                            this.id = e
                        }
                        p.prototype.remove = function() {
                            c(this.id)
                        }
                        ,
                        e.prototype.trackEventWhenVisible = function(e, n) {
                            var r = this;
                            if (!e || "string" != typeof e.cl)
                                throw new TypeError("data.cl must exist and be a string");
                            return new p(i(n, (function() {
                                var n = t({}, r.commonData, e);
                                r.trackEvent(n.cl, n)
                            }
                            )))
                        }
                        ,
                        e.prototype.trackInView = function(e, n) {
                            var r = this;
                            return new p(i(n = t({}, n, {
                                minTime: 0
                            }), (function() {
                                var n = t({}, r.commonData, e, {
                                    name: "InView",
                                    type: "Used",
                                    interaction: "0"
                                });
                                r.trackEvent("Feature", n)
                            }
                            )))
                        }
                        ,
                        e.prototype.trackViewedCGC = function(e, n) {
                            var r = this;
                            return new p(i(n, (function() {
                                var n = t({}, r.commonData, e, {
                                    name: "ViewedUGC",
                                    type: "Used",
                                    interaction: "1"
                                });
                                r.trackEvent("Feature", n)
                            }
                            )))
                        }
                    }()
                }(),
                e
            }
            ) ? n.apply(t, r) : n) || (e.exports = o)
        },
        424: (e,t,n)=>{
            var r = n(920);
            function o(e, t, n) {
                if ("function" != typeof t)
                    throw new Error("A function must be provided to process the queue");
                var r = e.length;
                function o() {
                    var r = e.shift();
                    n ? t(r) : setTimeout((function() {
                        t(r)
                    }
                    ), 0)
                }
                for (; e.length > 0; )
                    o();
                return r
            }
            function a(e) {
                return this.config = e,
                this._readyQueue = [],
                this._renderQueue = [],
                this._configQueue = [],
                this._promise = new r(function(e, t) {
                    this._resolve = e,
                    this._reject = t
                }
                .bind(this)),
                this
            }
            a.prototype.ready = function(e) {
                return "function" == typeof e && this._readyQueue.push(e),
                this._promise
            }
            ,
            a.prototype.render = function(e) {
                return this._renderQueue.push(e)
            }
            ,
            a.prototype.configure = function(e) {
                return this._configQueue.push(e)
            }
            ;
            var i = function(e, t) {
                "function" == typeof t && t(e, this)
            };
            a.prototype.processReady = function(e) {
                var t = i.bind(this, e);
                o.call(this, this._readyQueue, t, !0),
                this._readyQueue.push = t,
                this.ready = function(e) {
                    return t(e),
                    this._promise
                }
                ,
                e ? this._reject(e) : this._resolve(this)
            }
            ,
            a.prototype.processQueue = function(e) {
                o.call(this, this._renderQueue, e),
                this.render = this._renderQueue.push = e
            }
            ,
            a.prototype.processConfig = function(e) {
                o.call(this, this._configQueue, e, !0),
                this.configure = this._configQueue.push = e
            }
            ,
            e.exports = a
        }
        ,
        974: (e,t,n)=>{
            var r = n(422);
            e.exports = {
                create: function(e, t, n, o, a) {
                    var i = new Date;
                    i.setTime(i.getTime() + 24 * n * 60 * 60 * 1e3);
                    var s = n ? ";expires=" + i.toGMTString() : ""
                      , c = encodeURIComponent(e) + "=" + encodeURIComponent(t) + s + ";path=/" + (o ? ";domain=" + o : "") + (a ? ";secure" : "");
                    r.document.cookie = c
                },
                read: function(e) {
                    var t, n = encodeURIComponent(e) + "=", o = r.document.cookie.split(";");
                    for (t = 0; t < o.length; t++) {
                        for (var a = o[t]; " " === a.charAt(0); )
                            a = a.substring(1, a.length);
                        if (0 === a.indexOf(n))
                            return decodeURIComponent(a.substring(n.length, a.length))
                    }
                    return null
                },
                remove: function(e) {
                    this.create(e, "", -1)
                }
            }
        }
        ,
        411: (e,t,n)=>{
            var r = n(422).Date
              , o = r && r.now
              , a = "function" == typeof o;
            function i() {
                return o.call(r)
            }
            function s() {
                return (new r).getTime()
            }
            e.exports = {
                now: function() {
                    return (a ? i : s)()
                }
            }
        }
        ,
        611: e=>{
            function t(e, t) {
                if ("." === e.charAt(0) && t) {
                    var n = ("." + t).lastIndexOf(e);
                    return n >= 0 && n === 1 + t.length - e.length
                }
                return t === e || t === "www." + e
            }
            e.exports = function(e, n) {
                var r = {}
                  , o = {
                    isValid: !1,
                    get: function(e) {
                        return r[e]
                    }
                }
                  , a = function(e, n) {
                    for (var r = 0; r < e.length; r++)
                        if (t(e[r].domain, n))
                            return e[r]
                }(e, n);
                if (a) {
                    for (var i in o.isValid = !0,
                    a)
                        a.hasOwnProperty(i) && (r[i] = a[i]);
                    r.domain.match(/^(\.\d+){4}$/) && (r.domain = r.domain.substr(1))
                }
                return o
            }
        }
        ,
        5: (e,t,n)=>{
            var r = Array.prototype
              , o = r.indexOf
              , a = r.slice;
            function i(e) {
                n.g.console.error(e)
            }
            function s(e) {
                this.eventErrorHandler = e
            }
            function c(e, t) {
                var n, r, o = this.events = this.events || {}, a = e.split(/\s+/), i = a.length;
                for (n = 0; n < i; n++)
                    o[r = a[n]] = o[r] || [],
                    o[r].push(t);
                return this
            }
            function u(e, t) {
                var n = function() {
                    this.off(e, n),
                    t.apply(this, a.call(arguments))
                };
                return this.on(e, n),
                this
            }
            function l(e, t) {
                var n, r, o, a, i, s = this.events;
                if (s) {
                    for (r = 0,
                    a = (i = e.split(/\s+/)).length; r < a; r++)
                        (n = i[r])in s != !1 && -1 !== (o = t ? d(s[n], t) : 0) && s[n].splice(o, 1);
                    return this
                }
            }
            function f(e) {
                var t, n, r = this.events;
                if (r && e in r != !1) {
                    for (t = a.call(arguments, 1),
                    n = r[e].length - 1; n >= 0; n--)
                        try {
                            r[e][n].apply(this, t)
                        } catch (n) {
                            (this.eventErrorHandler || i).call(this, n, {
                                event: e,
                                data: t
                            })
                        }
                    return this
                }
            }
            function d(e, t) {
                var n, r;
                if (o && e.indexOf === o)
                    return e.indexOf(t);
                for (n = 0,
                r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }
            e.exports = function() {
                return this.on = c,
                this.off = l,
                this.trigger = this.emit = f,
                this.one = this.once = u,
                this.setErrorHandler = s,
                this
            }
        }
        ,
        423: (e,t,n)=>{
            var r, o = n(920), a = n(10), i = {}, s = /function\s+([^\(\s]+)/;
            e.exports = function(e) {
                return new o((function(t) {
                    a((function() {
                        var n = e.name;
                        n || (n = s.exec(e.toString())[1]),
                        r || ((r = document.createElement("iframe")).src = "about:blank",
                        r.style.display = "none",
                        r.height = "0",
                        r.width = "0",
                        r.tabIndex = "-1",
                        r.title = "empty",
                        r.className = "hidden",
                        document.body.appendChild(r)),
                        i[n] || (i[n] = r.contentWindow[n]),
                        t(i[n])
                    }
                    ))
                }
                ))
            }
        }
        ,
        422: (e,t,n)=>{
            "use strict";
            e.exports = function() {
                if ("undefined" != typeof globalThis)
                    return globalThis;
                if ("undefined" != typeof window)
                    return window;
                if ("undefined" != typeof self)
                    return self;
                if (void 0 !== n.g)
                    return n.g;
                throw new Error("unable to locate global object")
            }()
        }
        ,
        788: (e,t,n)=>{
            var r = n(422)
              , o = n(530)
              , a = r.document
              , i = {};
            function s() {
                return a.getElementsByTagName("script")[0]
            }
            function c(e) {
                return !e || "loaded" === e || "complete" === e || "uninitialized" === e
            }
            function u(e, t, n) {
                if (!e || "string" != typeof e)
                    throw new Error("`url` must be a string");
                if (t.namespaceName && "string" != typeof t.namespaceName)
                    throw new Error("`options.namespaceName` must be a string");
                if (t.forceLoad && "boolean" != typeof t.forceLoad)
                    throw new Error("`options.forceLoad` must be a boolean");
                if ("number" != typeof t.timeout)
                    throw new Error("`options.timeout` must be a number");
                if (n && "function" != typeof n)
                    throw new Error("`callback` must be a function")
            }
            e.exports = {
                _clearLoadedUrls: function(e) {
                    e ? o.namespace(e).loadedUrls = {} : i = {}
                },
                loadScript: function(e, t, n) {
                    var r, l = i;
                    if ("function" == typeof t && (n = t,
                    t = null),
                    (t = t || {}).timeout = t.timeout || 1e4,
                    u(e, t, n),
                    t.namespaceName && (r = o.namespace(t.namespaceName),
                    l = r.loadedUrls || {}),
                    t.forceLoad || !l[e]) {
                        var f, d = a.createElement("script"), p = !1;
                        if (t.attributes)
                            for (f in t.attributes)
                                d.setAttribute(f, t.attributes[f]);
                        d.onreadystatechange = d.onload = function() {
                            !p && c(d.readyState) && h()
                        }
                        ,
                        d.onerror = function() {
                            p || h(new Error("Error: could not load " + e))
                        }
                        ;
                        var m = setTimeout((function() {
                            p || h(new Error("Error: script timeout " + e))
                        }
                        ), t.timeout);
                        setTimeout((function() {
                            d.src = e;
                            var t = s();
                            t.parentNode.insertBefore(d, t)
                        }
                        ), 0)
                    } else
                        "function" == typeof n && n();
                    function h(o) {
                        p = !0,
                        clearTimeout(m),
                        d.onload = d.onreadystatechange = d.onerror = null,
                        d.parentNode.removeChild(d),
                        o || (l[e] = !0,
                        t.namespaceName ? r.loadedUrls = l : i = l),
                        "function" == typeof n && n(o)
                    }
                },
                loadStyleSheet: function(e, t, n) {
                    var l, f = i;
                    if ("function" == typeof t && (n = t,
                    t = null),
                    (t = t || {}).timeout = t.timeout || 1e4,
                    u(e, t, n),
                    "injectionNode"in t && !(t.injectionNode instanceof r.Element))
                        throw new Error("`options.injectionNode` must be a DOM node");
                    if (t.namespaceName && (l = o.namespace(t.namespaceName),
                    f = l.loadedUrls || {}),
                    t.forceLoad || !f[e]) {
                        var d, p = a.createElement("link"), m = !1;
                        if (t.attributes)
                            for (d in t.attributes)
                                p.setAttribute(d, t.attributes[d]);
                        p.onreadystatechange = p.onload = function() {
                            !m && c(p.readyState) && v()
                        }
                        ,
                        p.onerror = function() {
                            m || v(new Error("Error: could not load " + e))
                        }
                        ;
                        var h = setTimeout(p.onerror, t.timeout);
                        setTimeout((function() {
                            p.media = "only x",
                            p.rel = "stylesheet",
                            p.type = "text/css",
                            p.href = e,
                            setTimeout((function() {
                                p.media = "all"
                            }
                            ), 0);
                            var n = t.injectionNode || s().parentNode;
                            try {
                                n.appendChild(p)
                            } catch (e) {
                                v(new Error("Error: could not append LINK element"))
                            }
                        }
                        ), 0)
                    } else
                        "function" == typeof n && n();
                    function v(r) {
                        m = !0,
                        clearTimeout(h),
                        p.onload = p.onreadystatechange = p.onerror = null,
                        r || (f[e] = !0,
                        t.namespaceName ? l.loadedUrls = f : i = f),
                        "function" == typeof n && n(r)
                    }
                }
            }
        }
        ,
        530: (e,t,n)=>{
            var r = n(422);
            function o(e) {
                this.name = e
            }
            o.prototype.registerProperty = function(e, t) {
                if (this.hasOwnProperty(e))
                    throw new Error("Cannot register " + e + " because a property with that name already exists on window." + this.name);
                return this[e] = t,
                this
            }
            ,
            e.exports = {
                namespace: function(e) {
                    if (void 0 === r[e])
                        Object.defineProperty(r, e, {
                            value: new o(e)
                        });
                    else {
                        if ("object" != typeof r[e])
                            throw new Error("Namespace " + e + " cannot be created. A non-object variable is already assigned to window." + e);
                        if (!(r[e]instanceof o))
                            for (var t in o.call(r[e], e),
                            o.prototype)
                                r[e][t] = o.prototype[t]
                    }
                    return r[e]
                }
            }
        }
        ,
        921: e=>{
            e.exports = {
                timeline: []
            }
        }
        ,
        453: (e,t,n)=>{
            var r = n(422)
              , o = n(921).timeline
              , a = r.performance
              , i = a && a.getEntries
              , s = "function" == typeof i;
            function c() {
                return i.call(a)
            }
            function u() {
                return o
            }
            e.exports = {
                getEntries: function() {
                    return (s ? c : u)()
                }
            }
        }
        ,
        966: (e,t,n)=>{
            var r = n(422)
              , o = n(453).getEntries
              , a = r.performance
              , i = a && a.getEntriesByName
              , s = "function" == typeof i;
            function c(e, t) {
                return i.call(a, e, t)
            }
            function u(e, t) {
                if (0 === arguments.length)
                    throw new TypeError("Failed to execute 'getEntriesByName' on 'Performance': 1 argument required, but only 0 present.");
                return o().filter((function(n) {
                    if (n.name === e && (void 0 === t || n.entryType === t))
                        return n
                }
                ))
            }
            e.exports = {
                getEntriesByName: function(e, t) {
                    var n = arguments.length > 0
                      , r = s ? c : u;
                    return n ? r(e, t) : r()
                }
            }
        }
        ,
        105: (e,t,n)=>{
            var r = n(422)
              , o = n(453).getEntries
              , a = r.performance
              , i = a && a.getEntriesByType
              , s = "function" == typeof i;
            function c(e) {
                return i.call(a, e)
            }
            function u(e) {
                if (0 === arguments.length)
                    throw new TypeError("Failed to execute 'getEntriesByType' on 'Performance': 1 argument required, but only 0 present.");
                return o().filter((function(t) {
                    return t.entryType === e
                }
                ))
            }
            e.exports = {
                getEntriesByType: function(e) {
                    var t = arguments.length > 0
                      , n = s ? c : u;
                    return t ? n(e) : n()
                }
            }
        }
        ,
        916: (e,t,n)=>{
            e.exports.getEntries = n(453).getEntries,
            e.exports.getEntriesByName = n(966).getEntriesByName,
            e.exports.getEntriesByType = n(105).getEntriesByType,
            e.exports.now = n(755).now,
            e.exports.mark = n(202).mark,
            e.exports.measure = n(165).measure
        }
        ,
        202: (e,t,n)=>{
            var r = n(422)
              , o = n(755)
              , a = n(921).timeline
              , i = r.performance
              , s = i && i.mark
              , c = "function" == typeof s
              , u = {
                navigationStart: 1,
                unloadEventStart: 1,
                unloadEventEnd: 1,
                redirectStart: 1,
                redirectEnd: 1,
                fetchStart: 1,
                domainLookupStart: 1,
                domainLookupEnd: 1,
                connectStart: 1,
                connectEnd: 1,
                secureConnectionStart: 1,
                requestStart: 1,
                responseStart: 1,
                responseEnd: 1,
                domLoading: 1,
                domInteractive: 1,
                domContentLoadedEventStart: 1,
                domContentLoadedEventEnd: 1,
                domComplete: 1,
                loadEventStart: 1,
                loadEventEnd: 1
            };
            function l(e) {
                return s.call(i, e)
            }
            function f(e) {
                if (arguments.length < 1)
                    throw new SyntaxError("Cannot set mark without a name");
                if (e in u)
                    throw new SyntaxError('Cannot set mark with reserved name "' + e + '"');
                var t = {
                    entryType: "mark",
                    name: e,
                    startTime: o.now(),
                    duration: 0
                };
                a.push(t)
            }
            e.exports = {
                mark: function(e) {
                    var t = arguments.length > 0
                      , n = c ? l : f;
                    return t ? n(e) : n()
                }
            }
        }
        ,
        165: (e,t,n)=>{
            var r = n(422)
              , o = n(755).now
              , a = n(105).getEntriesByType
              , i = n(921).timeline
              , s = r.performance
              , c = s && s.measure
              , u = "function" == typeof c;
            function l(e, t, n) {
                return void 0 === t ? c.call(s, e) : void 0 === n ? c.call(s, e, t) : c.call(s, e, t, n)
            }
            function f(e, t, n) {
                if (arguments.length < 1)
                    throw new TypeError("Failed to execute 'measure' on 'Performance': 1 argument required, but only 0 present.");
                var r, s = a("mark"), c = 0, u = o();
                if (void 0 !== t) {
                    if (!(r = s.filter((function(e) {
                        return e.entryName === t
                    }
                    ))).length)
                        throw new Error("Failed to execute 'measure' on 'Performance': The mark '" + t + "' does not exist.");
                    c = r[r.length - 1].startTime
                }
                if (void 0 !== n) {
                    if (!(r = s.filter((function(e) {
                        return e.entryName === n
                    }
                    ))).length)
                        throw new Error("Failed to execute 'measure' on 'Performance': The mark '" + n + "' does not exist.");
                    u = r[r.length - 1].startTime
                }
                var l = {
                    entryType: "measure",
                    name: e,
                    startTime: c,
                    duration: u - c
                };
                i.push(l)
            }
            e.exports = {
                measure: function(e, t, n) {
                    var r = arguments.length > 0
                      , o = u ? l : f;
                    return r ? o(e, t, n) : o()
                }
            }
        }
        ,
        755: (e,t,n)=>{
            var r = n(422)
              , o = n(411)
              , a = r.performance
              , i = a && a.now
              , s = "function" == typeof i
              , c = o.now();
            function u() {
                return i.call(a)
            }
            function l() {
                return o.now() - c
            }
            a && a.timing && "number" == typeof a.timing.navigationStart && (c = a.timing.navigationStart),
            e.exports = {
                now: function() {
                    return (s ? u : l)()
                }
            }
        }
        ,
        920: (e,t,n)=>{
            var r = n(422);
            if (void 0 !== r.Promise && r.Promise.toString().match(/\[native code]/))
                e.exports = r.Promise;
            else {
                var o = setTimeout;
                function a() {}
                function i(e) {
                    if ("object" != typeof this)
                        throw new TypeError("Promises must be constructed via new");
                    if ("function" != typeof e)
                        throw new TypeError("not a function");
                    this._state = 0,
                    this._handled = !1,
                    this._value = void 0,
                    this._deferreds = [],
                    d(e, this)
                }
                function s(e, t) {
                    for (; 3 === e._state; )
                        e = e._value;
                    0 !== e._state ? (e._handled = !0,
                    i._immediateFn((function() {
                        var n = 1 === e._state ? t.onFulfilled : t.onRejected;
                        if (null !== n) {
                            var r;
                            try {
                                r = n(e._value)
                            } catch (e) {
                                return void u(t.promise, e)
                            }
                            c(t.promise, r)
                        } else
                            (1 === e._state ? c : u)(t.promise, e._value)
                    }
                    ))) : e._deferreds.push(t)
                }
                function c(e, t) {
                    try {
                        if (t === e)
                            throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if (t instanceof i)
                                return e._state = 3,
                                e._value = t,
                                void l(e);
                            if ("function" == typeof n)
                                return void d((r = n,
                                o = t,
                                function() {
                                    r.apply(o, arguments)
                                }
                                ), e)
                        }
                        e._state = 1,
                        e._value = t,
                        l(e)
                    } catch (t) {
                        u(e, t)
                    }
                    var r, o
                }
                function u(e, t) {
                    e._state = 2,
                    e._value = t,
                    l(e)
                }
                function l(e) {
                    2 === e._state && 0 === e._deferreds.length && i._immediateFn((function() {
                        e._handled || i._unhandledRejectionFn(e._value)
                    }
                    ));
                    for (var t = 0, n = e._deferreds.length; t < n; t++)
                        s(e, e._deferreds[t]);
                    e._deferreds = null
                }
                function f(e, t, n) {
                    this.onFulfilled = "function" == typeof e ? e : null,
                    this.onRejected = "function" == typeof t ? t : null,
                    this.promise = n
                }
                function d(e, t) {
                    var n = !1;
                    try {
                        e((function(e) {
                            n || (n = !0,
                            c(t, e))
                        }
                        ), (function(e) {
                            n || (n = !0,
                            u(t, e))
                        }
                        ))
                    } catch (e) {
                        if (n)
                            return;
                        n = !0,
                        u(t, e)
                    }
                }
                i.prototype.catch = function(e) {
                    return this.then(null, e)
                }
                ,
                i.prototype.then = function(e, t) {
                    var n = new this.constructor(a);
                    return s(this, new f(e,t,n)),
                    n
                }
                ,
                i.all = function(e) {
                    var t = Array.prototype.slice.call(e);
                    return new i((function(e, n) {
                        if (0 === t.length)
                            return e([]);
                        var r = t.length;
                        function o(a, i) {
                            try {
                                if (i && ("object" == typeof i || "function" == typeof i)) {
                                    var s = i.then;
                                    if ("function" == typeof s)
                                        return void s.call(i, (function(e) {
                                            o(a, e)
                                        }
                                        ), n)
                                }
                                t[a] = i,
                                0 == --r && e(t)
                            } catch (e) {
                                n(e)
                            }
                        }
                        for (var a = 0; a < t.length; a++)
                            o(a, t[a])
                    }
                    ))
                }
                ,
                i.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === i ? e : new i((function(t) {
                        t(e)
                    }
                    ))
                }
                ,
                i.reject = function(e) {
                    return new i((function(t, n) {
                        n(e)
                    }
                    ))
                }
                ,
                i.race = function(e) {
                    return new i((function(t, n) {
                        for (var r = 0, o = e.length; r < o; r++)
                            e[r].then(t, n)
                    }
                    ))
                }
                ,
                i._immediateFn = "function" == typeof setImmediate && function(e) {
                    setImmediate(e)
                }
                || function(e) {
                    o(e, 0)
                }
                ,
                i._unhandledRejectionFn = function(e) {
                    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
                }
                ,
                e.exports = i
            }
        }
        ,
        10: e=>{
            function t(e, t) {
                document.body && (t.disconnect(),
                e())
            }
            e.exports = function(e) {
                if (document.body)
                    e();
                else {
                    var n = new MutationObserver((function() {
                        t(e, n)
                    }
                    ));
                    n.observe(document.documentElement, {
                        childList: !0,
                        subtree: !0
                    }),
                    t(e, n)
                }
            }
        }
        ,
        390: function(e, t) {
            "use strict";
            var n = this && this.__spreadArrays || function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                    e += arguments[t].length;
                var r = Array(e)
                  , o = 0;
                for (t = 0; t < n; t++)
                    for (var a = arguments[t], i = 0, s = a.length; i < s; i++,
                    o++)
                        r[o] = a[i];
                return r
            }
            ;
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var r = function(e, t, n) {
                this.name = e,
                this.version = t,
                this.os = n
            };
            t.BrowserInfo = r;
            var o = function(e) {
                this.version = e,
                this.name = "node",
                this.os = process.platform
            };
            t.NodeInfo = o;
            var a = function() {
                this.bot = !0,
                this.name = "bot",
                this.version = null,
                this.os = null
            };
            t.BotInfo = a;
            var i = [["aol", /AOLShield\/([0-9\._]+)/], ["edge", /Edge\/([0-9\._]+)/], ["yandexbrowser", /YaBrowser\/([0-9\._]+)/], ["vivaldi", /Vivaldi\/([0-9\.]+)/], ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/], ["samsung", /SamsungBrowser\/([0-9\.]+)/], ["silk", /\bSilk\/([0-9._-]+)\b/], ["miui", /MiuiBrowser\/([0-9\.]+)$/], ["beaker", /BeakerBrowser\/([0-9\.]+)/], ["edge-chromium", /Edg\/([0-9\.]+)/], ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/], ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/], ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/], ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/], ["fxios", /FxiOS\/([0-9\.]+)/], ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/], ["opera", /Opera\/([0-9\.]+)(?:\s|$)/], ["opera", /OPR\/([0-9\.]+)(:?\s|$)/], ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/], ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/], ["ie", /MSIE\s(7\.0)/], ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/], ["android", /Android\s([0-9\.]+)/], ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/], ["safari", /Version\/([0-9\._]+).*Safari/], ["facebook", /FBAV\/([0-9\.]+)/], ["instagram", /Instagram\s([0-9\.]+)/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/], ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/], ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]]
              , s = [["iOS", /iP(hone|od|ad)/], ["Android OS", /Android/], ["BlackBerry OS", /BlackBerry|BB10/], ["Windows Mobile", /IEMobile/], ["Amazon OS", /Kindle/], ["Windows 3.11", /Win16/], ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/], ["Windows 98", /(Windows 98)|(Win98)/], ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/], ["Windows XP", /(Windows NT 5.1)|(Windows XP)/], ["Windows Server 2003", /(Windows NT 5.2)/], ["Windows Vista", /(Windows NT 6.0)/], ["Windows 7", /(Windows NT 6.1)/], ["Windows 8", /(Windows NT 6.2)/], ["Windows 8.1", /(Windows NT 6.3)/], ["Windows 10", /(Windows NT 10.0)/], ["Windows ME", /Windows ME/], ["Open BSD", /OpenBSD/], ["Sun OS", /SunOS/], ["Chrome OS", /CrOS/], ["Linux", /(Linux)|(X11)/], ["Mac OS", /(Mac_PowerPC)|(Macintosh)/], ["QNX", /QNX/], ["BeOS", /BeOS/], ["OS/2", /OS\/2/], ["Search Bot", /(nuhk)|(Googlebot)|(Yammybot)|(Openbot)|(Slurp)|(MSNBot)|(Ask Jeeves\/Teoma)|(ia_archiver)/]];
            function c(e) {
                var t = "" !== e && i.reduce((function(t, n) {
                    var r = n[0]
                      , o = n[1];
                    if (t)
                        return t;
                    var a = o.exec(e);
                    return !!a && [r, a]
                }
                ), !1);
                if (!t)
                    return null;
                var o = t[0]
                  , s = t[1];
                if ("searchbot" === o)
                    return new a;
                var c = s[1] && s[1].split(/[._]/).slice(0, 3);
                return c ? c.length < 3 && (c = n(c, function(e) {
                    for (var t = [], n = 0; n < e; n++)
                        t.push("0");
                    return t
                }(3 - c.length))) : c = [],
                new r(o,c.join("."),u(e))
            }
            function u(e) {
                for (var t = 0, n = s.length; t < n; t++) {
                    var r = s[t]
                      , o = r[0];
                    if (r[1].test(e))
                        return o
                }
                return null
            }
            function l() {
                return "undefined" != typeof process && process.version ? new o(process.version.slice(1)) : null
            }
            t.detect = function(e) {
                return e ? c(e) : "undefined" != typeof navigator ? c(navigator.userAgent) : l()
            }
            ,
            t.parseUserAgent = c,
            t.detectOS = u,
            t.getNodeVersion = l
        },
        753: function(e, t, n) {
            var r, o, a;
            !function(i, s) {
                "use strict";
                o = [n(508)],
                void 0 === (a = "function" == typeof (r = function(e) {
                    var t = /(^|@)\S+\:\d+/
                      , n = /^\s*at .*(\S+\:\d+|\(native\))/m
                      , r = /^(eval@)?(\[native code\])?$/;
                    return {
                        parse: function(e) {
                            if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"])
                                return this.parseOpera(e);
                            if (e.stack && e.stack.match(n))
                                return this.parseV8OrIE(e);
                            if (e.stack)
                                return this.parseFFOrSafari(e);
                            throw new Error("Cannot parse given Error object")
                        },
                        extractLocation: function(e) {
                            if (-1 === e.indexOf(":"))
                                return [e];
                            var t = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(e.replace(/[\(\)]/g, ""));
                            return [t[1], t[2] || void 0, t[3] || void 0]
                        },
                        parseV8OrIE: function(t) {
                            return t.stack.split("\n").filter((function(e) {
                                return !!e.match(n)
                            }
                            ), this).map((function(t) {
                                t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                var n = t.replace(/^\s+/, "").replace(/\(eval code/g, "(")
                                  , r = n.match(/ (\((.+):(\d+):(\d+)\)$)/)
                                  , o = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1)
                                  , a = this.extractLocation(r ? r[1] : o.pop())
                                  , i = o.join(" ") || void 0
                                  , s = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
                                return new e({
                                    functionName: i,
                                    fileName: s,
                                    lineNumber: a[1],
                                    columnNumber: a[2],
                                    source: t
                                })
                            }
                            ), this)
                        },
                        parseFFOrSafari: function(t) {
                            return t.stack.split("\n").filter((function(e) {
                                return !e.match(r)
                            }
                            ), this).map((function(t) {
                                if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")),
                                -1 === t.indexOf("@") && -1 === t.indexOf(":"))
                                    return new e({
                                        functionName: t
                                    });
                                var n = /((.*".+"[^@]*)?[^@]*)(?:@)/
                                  , r = t.match(n)
                                  , o = r && r[1] ? r[1] : void 0
                                  , a = this.extractLocation(t.replace(n, ""));
                                return new e({
                                    functionName: o,
                                    fileName: a[0],
                                    lineNumber: a[1],
                                    columnNumber: a[2],
                                    source: t
                                })
                            }
                            ), this)
                        },
                        parseOpera: function(e) {
                            return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
                        },
                        parseOpera9: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = t.message.split("\n"), o = [], a = 2, i = r.length; a < i; a += 2) {
                                var s = n.exec(r[a]);
                                s && o.push(new e({
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[a]
                                }))
                            }
                            return o
                        },
                        parseOpera10: function(t) {
                            for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = t.stacktrace.split("\n"), o = [], a = 0, i = r.length; a < i; a += 2) {
                                var s = n.exec(r[a]);
                                s && o.push(new e({
                                    functionName: s[3] || void 0,
                                    fileName: s[2],
                                    lineNumber: s[1],
                                    source: r[a]
                                }))
                            }
                            return o
                        },
                        parseOpera11: function(n) {
                            return n.stack.split("\n").filter((function(e) {
                                return !!e.match(t) && !e.match(/^Error created at/)
                            }
                            ), this).map((function(t) {
                                var n, r = t.split("@"), o = this.extractLocation(r.pop()), a = r.shift() || "", i = a.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                a.match(/\(([^\)]*)\)/) && (n = a.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                var s = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                return new e({
                                    functionName: i,
                                    args: s,
                                    fileName: o[0],
                                    lineNumber: o[1],
                                    columnNumber: o[2],
                                    source: t
                                })
                            }
                            ), this)
                        }
                    }
                }
                ) ? r.apply(t, o) : r) || (e.exports = a)
            }()
        },
        508: function(e, t) {
            var n, r, o;
            !function(a, i) {
                "use strict";
                r = [],
                void 0 === (o = "function" == typeof (n = function() {
                    function e(e) {
                        return !isNaN(parseFloat(e)) && isFinite(e)
                    }
                    function t(e) {
                        return e.charAt(0).toUpperCase() + e.substring(1)
                    }
                    function n(e) {
                        return function() {
                            return this[e]
                        }
                    }
                    var r = ["isConstructor", "isEval", "isNative", "isToplevel"]
                      , o = ["columnNumber", "lineNumber"]
                      , a = ["fileName", "functionName", "source"]
                      , i = ["args"]
                      , s = r.concat(o, a, i);
                    function c(e) {
                        if (e instanceof Object)
                            for (var n = 0; n < s.length; n++)
                                e.hasOwnProperty(s[n]) && void 0 !== e[s[n]] && this["set" + t(s[n])](e[s[n]])
                    }
                    c.prototype = {
                        getArgs: function() {
                            return this.args
                        },
                        setArgs: function(e) {
                            if ("[object Array]" !== Object.prototype.toString.call(e))
                                throw new TypeError("Args must be an Array");
                            this.args = e
                        },
                        getEvalOrigin: function() {
                            return this.evalOrigin
                        },
                        setEvalOrigin: function(e) {
                            if (e instanceof c)
                                this.evalOrigin = e;
                            else {
                                if (!(e instanceof Object))
                                    throw new TypeError("Eval Origin must be an Object or StackFrame");
                                this.evalOrigin = new c(e)
                            }
                        },
                        toString: function() {
                            var e = this.getFileName() || ""
                              , t = this.getLineNumber() || ""
                              , n = this.getColumnNumber() || ""
                              , r = this.getFunctionName() || "";
                            return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + n + ")" : "[eval]:" + t + ":" + n : r ? r + " (" + e + ":" + t + ":" + n + ")" : e + ":" + t + ":" + n
                        }
                    },
                    c.fromString = function(e) {
                        var t = e.indexOf("(")
                          , n = e.lastIndexOf(")")
                          , r = e.substring(0, t)
                          , o = e.substring(t + 1, n).split(",")
                          , a = e.substring(n + 1);
                        if (0 === a.indexOf("@"))
                            var i = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(a, "")
                              , s = i[1]
                              , u = i[2]
                              , l = i[3];
                        return new c({
                            functionName: r,
                            args: o || void 0,
                            fileName: s,
                            lineNumber: u || void 0,
                            columnNumber: l || void 0
                        })
                    }
                    ;
                    for (var u = 0; u < r.length; u++)
                        c.prototype["get" + t(r[u])] = n(r[u]),
                        c.prototype["set" + t(r[u])] = function(e) {
                            return function(t) {
                                this[e] = Boolean(t)
                            }
                        }(r[u]);
                    for (var l = 0; l < o.length; l++)
                        c.prototype["get" + t(o[l])] = n(o[l]),
                        c.prototype["set" + t(o[l])] = function(t) {
                            return function(n) {
                                if (!e(n))
                                    throw new TypeError(t + " must be a Number");
                                this[t] = Number(n)
                            }
                        }(o[l]);
                    for (var f = 0; f < a.length; f++)
                        c.prototype["get" + t(a[f])] = n(a[f]),
                        c.prototype["set" + t(a[f])] = function(e) {
                            return function(t) {
                                this[e] = String(t)
                            }
                        }(a[f]);
                    return c
                }
                ) ? n.apply(t, r) : n) || (e.exports = o)
            }()
        },
        306: e=>{
            "use strict";
            e.exports = {
                i8: "13.6.4"
            }
        }
    }
      , t = {};
    function n(r) {
        var o = t[r];
        if (void 0 !== o)
            return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r].call(a.exports, a, a.exports, n),
        a.exports
    }
    n.n = e=>{
        var t = e && e.__esModule ? ()=>e.default : ()=>e;
        return n.d(t, {
            a: t
        }),
        t
    }
    ,
    n.d = (e,t)=>{
        for (var r in t)
            n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (e,t)=>Object.prototype.hasOwnProperty.call(e, t),
    n.r = e=>{
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    (()=>{
        var e = n(422);
        if (e.BV && e.BV._private) {
            console && console.warn && console.warn("BV Loader should only be called once per page.")
        } else
            n(621).Z()
    }
    )()
}
)();
//# sourceURL=https://apps.bazaarvoice.com/bv.js
