(function(t) {
    function e(e) {
        for (var o, i, s = e[0], n = e[1], l = e[2], u = 0, j = []; u < s.length; u++) i = s[u], Object.prototype.hasOwnProperty.call(r, i) && r[i] && j.push(r[i][0]), r[i] = 0;
        for (o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        p && p(e);
        while (j.length) j.shift()();
        return c.push.apply(c, l || []), a()
    }

    function a() {
        for (var t, e = 0; e < c.length; e++) {
            for (var a = c[e], o = !0, s = 1; s < a.length; s++) {
                var n = a[s];
                0 !== r[n] && (o = !1)
            }
            o && (c.splice(e--, 1), t = i(i.s = a[0]))
        }
        return t
    }
    var o = {},
        r = {
            app: 0
        },
        c = [];

    function i(e) {
        if (o[e]) return o[e].exports;
        var a = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(a.exports, a, a.exports, i), a.l = !0, a.exports
    }
    i.m = t, i.c = o, i.d = function(t, e, a) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: a
        })
    }, i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var a = Object.create(null);
        if (i.r(a), Object.defineProperty(a, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) i.d(a, o, function(e) {
                return t[e]
            }.bind(null, o));
        return a
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/";
    var s = window["webpackJsonp"] = window["webpackJsonp"] || [],
        n = s.push.bind(s);
    s.push = e, s = s.slice();
    for (var l = 0; l < s.length; l++) e(s[l]);
    var p = n;
    c.push([0, "chunk-vendors"]), a()
})({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    3159: function(t, e, a) {
        "use strict";
        var o = a("9acb"),
            r = a.n(o);
        r.a
    },
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"), a("551c"), a("f751"), a("097d");
        var o = a("2b0e"),
            r = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    attrs: {
                        id: "app"
                    }
                }, [a("grid"), a("transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [a("router-view", {
                    key: t.$route.path,
                    attrs: {
                        projects: t.projects,
                        awards: t.awards,
                        aboutActive: t.aboutActive,
                        activeProject: t.activeProject,
                        getProjectByUrl: t.getProjectByUrl,
                        funcSwapProject: t.funcSwapProject
                    }
                })], 1), a("ui", {
                    attrs: {
                        projects: t.projects,
                        funcSwapProject: t.funcSwapProject,
                        isAboutActive: t.isAboutActive,
                        activeProject: t.activeProject,
                        aboutActive: t.aboutActive
                    }
                })], 1)
            },
            c = [],
            i = function() {
                var t = this,
                    e = t.$createElement;
                t._self._c;
                return t._m(0)
            },
            s = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "grid"
                }, [a("div", {
                    staticClass: "grid-line grid-1"
                }), a("div", {
                    staticClass: "grid-line grid-3"
                }), a("div", {
                    staticClass: "grid-line grid-4"
                }), a("div", {
                    staticClass: "grid-line grid-8"
                }), a("div", {
                    staticClass: "grid-line grid-10"
                }), a("div", {
                    staticClass: "grid-line grid-11"
                })])
            }],
            n = {
                name: "grid",
                props: {}
            },
            l = n,
            p = (a("e3fe"), a("2877")),
            u = Object(p["a"])(l, i, s, !1, null, "13ec4e09", null),
            j = u.exports,
            d = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("header", {
                    staticClass: "ui"
                }, [a("div", {
                    staticClass: "ui-counter"
                }, [a("div", {
                    staticClass: "ui-counter-nr1"
                }, [0 == this.aboutActive ? a("span", [t._v(t._s(this.activeProject + 1))]) : t._e(), 1 == this.aboutActive ? a("span", [t._v("X")]) : t._e()]), a("div", {
                    staticClass: "ui-counter-slash"
                }, [t._v(" / ")]), a("div", {
                    staticClass: "ui-counter-nr2"
                }, [t._v(t._s(this.projects.length))])]), a("div", {
                    staticClass: "ui-pl-outer"
                }), a("div", {
                    staticClass: "ui-about-btn",
                    on: {
                        click: function(e) {
                            return t.isAboutActive()
                        }
                    }
                }, [a("div", {
                    staticClass: "ui-about-btnRotator"
                }, [a("router-link", {
                    staticClass: "ui-about-word",
                    class: {
                        activeAbout: this.aboutActive
                    },
                    attrs: {
                        to: "/about",
                        exact: ""
                    }
                }, [t._v("about")])], 1)]), a("div", {
                    staticClass: "ui-logo-outer",
                    on: {
                        click: function(e) {
                            return t.funcSwapProject(t.activeProject)
                        }
                    }
                }, [a("router-link", {
                    staticClass: "ui-logo-btn",
                    attrs: {
                        to: "/",
                        exact: ""
                    }
                }, [t._v("home\n        "), a("div", {
                    staticClass: "ui-logo"
                }, [a("svg", {
                    attrs: {
                        id: "Ebene_1",
                        "data-name": "Ebene 1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 187.61 333.58"
                    }
                }, [a("polygon", {
                    attrs: {
                        points: "1.58 291 1.58 170.54 8.58 170.54 8.58 278.08 174.55 169.81 0 62 55.68 0 60.89 4.68 10.8 60.45 187.61 169.64 1.58 291"
                    }
                }), a("path", {
                    attrs: {
                        d: "M10.78,328.57H8.61v-.67a8.24,8.24,0,0,1-3.24.9c-2.67,0-4.25-1.34-4.25-6,0-4.1,1.4-6,4.78-6a23.18,23.18,0,0,1,2.71.28v-4.65h2.17Zm-2.17-2.44V319A25.57,25.57,0,0,0,6,318.79c-2,0-2.72,1.29-2.72,4,0,3.22,1,3.93,2.35,4A10.25,10.25,0,0,0,8.61,326.13Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M20.25,328.57V317.09h2.16v.74a8.08,8.08,0,0,1,3.32-1c3.19,0,3.95,1.72,3.95,5.72v6H27.5v-6.05c0-2.6-.3-3.73-2.21-3.73a7.5,7.5,0,0,0-2.88.69v9.09Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M39,312.19h2.19v16.38H39Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M58.34,319.16a40.42,40.42,0,0,0-4.07-.37c-1.38,0-2.21.35-2.21,1.48,0,.87.53,1.12,2.62,1.47,3,.48,4.07,1.17,4.07,3.42,0,2.69-1.72,3.66-4.53,3.66a30.67,30.67,0,0,1-4.16-.48l.09-1.87s2.72.37,3.89.37c1.75,0,2.53-.37,2.53-1.61,0-1-.49-1.19-2.53-1.52-2.88-.48-4.16-1-4.16-3.4,0-2.57,2.07-3.47,4.25-3.47a29.2,29.2,0,0,1,4.25.48Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M67.59,317.09h2.16v.69a7.47,7.47,0,0,1,3.15-.94c2.94,0,4.3,1.63,4.3,5.86,0,4.65-1.57,6.12-5.08,6.12a14.24,14.24,0,0,1-2.37-.25v5H67.59Zm2.16,2.49v7.08a21,21,0,0,0,2.23.18c2.27,0,3-1.13,3-4.16,0-2.87-.9-3.86-2.44-3.86A7.72,7.72,0,0,0,69.75,319.58Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M88.22,319.05v5c0,2.07.11,2.71,1.42,2.71.65,0,2-.11,2-.11l.11,1.88a18.25,18.25,0,0,1-2.34.28c-2.51,0-3.32-.94-3.32-4.25v-5.52H84.51v-2h1.54v-3.45h2.17v3.45H91.6v2Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M99.23,317.07h8.53V319l-5.9,7.59h5.9v2H99.23v-2l5.91-7.59H99.23Z"
                    }
                }), a("path", {
                    attrs: {
                        d: "M116.62,328.57V312.19h2.16v9.43l1.57-.14,3-4.39h2.46l-3.54,5.34,3.63,6.14h-2.46l-3.08-5-1.61.14v4.83Z"
                    }
                })])])])], 1), a("div", {
                    staticClass: "project-navinfo"
                }, [t._l(t.projects, (function(e, o) {
                    var r;
                    return a("span", {
                        key: e.id,
                        staticClass: "project-nav-outer",
                        class: (r = {}, r["project" + (o + 1)] = !0, r)
                    }, [a("span", {
                        staticClass: "project-nav-entry",
                        on: {
                            click: function(a) {
                                return t.funcSwapProject(e.id - 1)
                            }
                        }
                    }, [a("span", {
                        staticClass: "project-nav-btn",
                        class: {
                            activeNav: t.checkClassAdding(o)
                        }
                    }, [t._v(t._s(e.projectName.substring(0, e.projectName.lastIndexOf(" ")))), e.projectName.split(" ").length > 1 ? a("span", [t._v(" ")]) : t._e()]), a("span", {
                        staticClass: "project-nav-btn project-noBreak",
                        class: {
                            activeNav: t.checkClassAdding(o)
                        }
                    }, [t._v(t._s(e.projectName.substring(e.projectName.lastIndexOf(" ")))), a("span", {
                        staticClass: "project-noRed"
                    }, [t._v(" / ")])])])])
                })), a("div", {
                    staticClass: "project-info-outer"
                }, [a("div", {
                    staticClass: "project-info-mask"
                }, [a("div", {
                    staticClass: "project-info-year project-info"
                }, [t._v(" " + t._s(t.projects[t.activeProject].projectDate) + " ")])]), a("div", {
                    staticClass: "project-info-mask"
                }, [a("div", {
                    staticClass: "project-info-service-1 project-info"
                }, [t._v(" " + t._s(t.projects[t.activeProject].projectService1) + " ")])]), a("div", {
                    staticClass: "project-info-mask"
                }, [a("div", {
                    staticClass: "project-info-service-2 project-info"
                }, [t._v(" " + t._s(t.projects[t.activeProject].projectService2) + " ")])]), a("div", {
                    staticClass: "project-info-mask"
                }, [a("div", {
                    staticClass: "project-info-service-3 project-info"
                }, [t._v(" " + t._s(t.projects[t.activeProject].projectService3) + " ")])])])], 2)])
            },
            m = [],
            v = {
                name: "ui",
                props: ["funcSwapProject", "activeProject", "projects", "isAboutActive", "aboutActive"],
                computed: {},
                methods: {
                    checkActive: function(t) {
                        if (this.activeProject === t) return !0
                    },
                    checkClassAdding: function(t) {
                        if (!0 === this.checkActive(t) && !1 === this.aboutActive) return !0
                    }
                }
            },
            h = v,
            b = (a("e528"), Object(p["a"])(h, d, m, !1, null, "e36bec80", null)),
            _ = b.exports,
            g = a("2346"),
            f = a("2e20"),
            w = a("4afa"),
            y = a.n(w),
            P = a("1157"),
            k = a.n(P),
            C = a("ccae"),
            N = {
                name: "app",
                components: {
                    ui: _,
                    grid: j
                },
                data: function() {
                    return {
                        aboutActive: !1,
                        activeProject: 0,
                        projects: C.projects,
                        awards: C.awards
                    }
                },
                methods: {
                    getProjectByUrl: function(t) {
                        var e;
                        return this.projects.map((function(a) {
                            a.projectUrl === t && (e = a)
                        })), e
                    },
                    isAboutActive: function() {
                        this.$route.path !== "/" + this.$route.params.projID && (this.aboutActive = !0, this.funcSwapAnimationOut(), this.funcInfoVanish())
                    },
                    funcSwapAnimationOut: function() {
                        var t = new g["a"]({}).to(".projectDetail-video", .7, {
                            y: "-200vh",
                            ease: f["d"].easeIn
                        }, 0).staggerFromTo(".projectDetail-name-slider", .7, {
                            x: 0,
                            skewx: "0deg"
                        }, {
                            x: "-100vw",
                            skewX: "90deg",
                            ease: f["d"].easeIn
                        }, .05, 0).staggerTo(".project-info", .3, {
                            y: 0,
                            ease: f["d"].easeOut
                        }, .1, 0).to(".projectDetail-subcontent", .7, {
                            opacity: 0
                        }, 0);
                        return t
                    },
                    funcSwapAboutOut: function() {
                        var t = new g["a"]({}).staggerFromTo(".about-name-slider", .7, {
                            y: 0,
                            scaleY: 1,
                            opacity: 1
                        }, {
                            y: "-100vh",
                            scaleY: 3,
                            opacity: 0,
                            ease: f["d"].easeInOut
                        }, .05, 0).to(".about-pic-outer", .7, {
                            opacity: 0,
                            ease: f["d"].easeInOut
                        }, -.05, 0).to(".about-subcontent", .7, {
                            opacity: 0
                        }, 0);
                        return t
                    },
                    funcSwapInfo: function() {
                        var t = new g["a"]({}).staggerFromTo(".project-info", .3, {
                            y: 25
                        }, {
                            y: 0,
                            ease: f["d"].easeOut
                        }, .1, 0);
                        return t
                    },
                    funcInfoVanish: function() {
                        var t = new g["a"]({}).staggerTo(".project-info", .3, {
                            y: -25,
                            ease: f["d"].easeOut
                        }, .1, 0);
                        return t
                    },
                    funcSwapProject: function(t) {
                        if (this.activeProject == t && 0 == this.aboutActive) return this.activeProject = t, this.$router.push({
                            path: "/".concat(this.projects[t].projectUrl)
                        }), void(this.aboutActive = !1);
                        t < 0 ? t = this.projects.length - 1 : t > this.projects.length - 1 && (t = 0), this.activeProject = t, this.$router.push({
                            path: "/".concat(this.projects[t].projectUrl)
                        }), this.aboutActive = !1, this.funcSwapAnimationOut(), this.funcSwapInfo(), this.funcSwapAboutOut(), k()(".project-nav-entry, .project-noRed, .ui-counter").removeClass("darkgrey")
                    }
                },
                mounted: function() {
                    this.$route.path !== "/" + this.$route.params.projID ? (this.aboutActive = !0, this.funcInfoVanish().seek(1)) : this.activeProject = this.getProjectByUrl(this.$route.params.projID).id - 1, y()({
                        animationTime: 700,
                        accelerationDelta: 30,
                        accelerationMax: 3
                    })
                }
            },
            E = N,
            D = (a("5c0b"), Object(p["a"])(E, r, c, !1, null, null, null)),
            V = D.exports,
            A = a("8c4f"),
            F = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("main", {
                    staticClass: "project"
                }, [a("projectDetail", {
                    attrs: {
                        projects: t.projects,
                        activeProject: t.activeProject,
                        funcSwapProject: t.funcSwapProject,
                        project: this.getProjectByUrl(t.$route.params.projID)
                    }
                })], 1)
            },
            S = [],
            x = function() {
                var t = this,
                    e = this,
                    a = e.$createElement,
                    o = e._self._c || a;
                return o("div", {
                    staticClass: "projectDetail"
                }, [o("div", {
                    staticClass: "projectDetail-intro-outer"
                }, [o("div", {
                    staticClass: "projectDetail-video-container"
                }, [o("video", {
                    staticClass: "projectDetail-video",
                    attrs: {
                        src: e.project.projectIntroVid,
                        autoplay: "",
                        loop: "",
                        muted: "",
                        poster: e.project.projectIntroPic
                    },
                    domProps: {
                        muted: !0
                    }
                })])]), o("div", {
                    staticClass: "projectDetail-name-container"
                }, [o("div", {
                    staticClass: "projectDetail-name-column1-mask"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-row1 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine1) + " ")])]), o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-row2 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine2) + " ")])]), o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-row3 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine3) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-vanisher"
                }, [o("div", {
                    staticClass: "projectDetail-name-column2-mask transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row1 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine1) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-column3-mask transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [e._m(0), o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row2 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine2) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-column2-mask-wide transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [e._m(1), e._m(2), o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row3 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine3) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-column4-mask transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column3 projectDetail-row1 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine1) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-column5-mask transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [e._m(3), o("div", {
                    staticClass: "projectDetail-name-slider"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column4 projectDetail-row2 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine2) + " ")])])])]), o("div", {
                    staticClass: "projectDetail-name-column6-mask-out1 transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column4 projectDetail-row1 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine1) + " ")])])]), o("div", {
                    staticClass: "projectDetail-name-column6-mask-out2 transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [e._m(4), o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column5 projectDetail-row2 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine2) + " ")])])]), o("div", {
                    staticClass: "projectDetail-name-column6-mask-out3 transitionizer"
                }, [o("div", {
                    staticClass: "projectDetail-name-outer"
                }, [e._m(5), e._m(6), o("div", {
                    staticClass: "projectDetail-name-row projectDetail-column6 projectDetail-row3 transitionizer"
                }, [e._v(" " + e._s(e.project.projectNameLine3) + " ")])])])])]), o("div", {
                    staticClass: "projectDetail-subcontent"
                }, [o("div", {
                    staticClass: "projectDetail-text-spacer"
                }), o("div", {
                    staticClass: "projectDetail-text-outer"
                }, [o("div", {
                    staticClass: "projectDetail-text"
                }, [e._v("\n        " + e._s(e.project.projectText) + "\n        "), null != e.project.projectLink ? o("div", {
                    staticClass: "projectDetail-launch-outer"
                }, [o("a", {
                    staticClass: "projectDetail-launch-link",
                    attrs: {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        href: e.project.projectLink
                    }
                }, [e._v("Launch Website")])]) : e._e()])]), e._l(e.project.projectEntries, (function(t, e) {
                    var a;
                    return o("projectSubEntry", {
                        key: e,
                        staticClass: "projectDetail-entry",
                        class: (a = {}, a["projectEntry" + (e + 1)] = !0, a),
                        attrs: {
                            projectEntry: t
                        }
                    })
                })), o("div", {
                    staticClass: "projectDetail-next-outer"
                }, [o("div", {
                    staticClass: "projectDetail-next",
                    on: {
                        click: function() {
                            t.funcSwapProject(t.activeProject + 1)
                        }
                    }
                }, [o("div", {
                    staticClass: "projectDetail-next-1"
                }, [o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))])]), o("div", {
                    staticClass: "projectDetail-next-2"
                }, [o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))]), o("span", {
                    staticClass: "projectDetail-np"
                }, [e._v(" next project ")]), o("span", {
                    staticClass: "projectDetail-npn"
                }, [e._v(e._s(this.projects[this.activeProject + this.projectLoopBack()].projectName))])])])])], 2)])
            },
            I = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column2 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column4 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column5 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column6 projectDetail-row1 transitionizer"
                }, [a("br")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "projectDetail-name-row projectDetail-column6 projectDetail-row1 transitionizer"
                }, [a("br")])
            }],
            T = a("cd29"),
            L = a.n(T),
            z = (a("e62f"), a("b8ec"), function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("section", {
                    staticClass: "projectSubEntry"
                }, [null == t.projectEntry.projectPic ? a("video", {
                    staticClass: "js-lazy projectDetail-entry-video",
                    attrs: {
                        src: t.projectEntry.projectVid,
                        autoplay: "",
                        loop: "",
                        muted: "",
                        poster: t.projectEntry.projectFallbackPic
                    },
                    domProps: {
                        muted: !0
                    }
                }) : t._e(), null == t.projectEntry.projectVid ? a("img", {
                    staticClass: "js-lazy projectDetail-entry-video",
                    attrs: {
                        src: t.projectEntry.projectPic,
                        alt: "projectPic"
                    }
                }) : t._e(), a("div", {
                    staticClass: "projectDetail-entry-name"
                }, [t._v(" " + t._s(t.projectEntry.projectEntryName) + " ")])])
            }),
            O = [],
            H = (a("7514"), {
                name: "project",
                props: ["project", "projects", "activeProject", "getProjectByUrl", "funcSwapProject", "projectEntry"],
                data: function() {
                    return {
                        controllerEntries: null
                    }
                },
                methods: {},
                mounted: function() {
                    var t, e, a;
                    this.controllerEntries = new L.a.Controller, e = new g["a"]({}).fromTo(k()(this.$el).find(".projectDetail-entry-video"), 1, {
                        y: 500,
                        skewY: "20deg"
                    }, {
                        y: 0,
                        skewY: "0deg",
                        ease: f["d"].easeOut
                    }, 0), t = new L.a.Scene({
                        triggerElement: this.$el,
                        triggerHook: 1
                    }), t.setTween(e).addTo(this.controllerEntries), a = new g["a"]({}).fromTo(k()(this.$el).find(".projectDetail-entry-name"), .6, {
                        y: 300,
                        opacity: 0,
                        scaleY: 3,
                        skewY: "10deg"
                    }, {
                        y: 0,
                        opacity: 1,
                        scaleY: 1,
                        skewY: "0deg",
                        ease: f["d"].easeOut
                    }, .2), t = new L.a.Scene({
                        triggerElement: this.$el,
                        triggerHook: .9
                    }), t.setTween(a).addTo(this.controllerEntries)
                },
                beforeDestroy: function() {
                    var t = this;
                    setTimeout((function() {
                        t.controllerEntries.destroy(!0), t.controllerEntries = null
                    }), 700)
                }
            }),
            B = H,
            G = (a("3159"), Object(p["a"])(B, z, O, !1, null, "4fa4b6a2", null)),
            M = G.exports,
            $ = {
                name: "project",
                props: ["project", "projects", "activeProject", "getProjectByUrl", "funcSwapProject"],
                components: {
                    projectSubEntry: M
                },
                data: function() {
                    return {
                        controllerProjects: null
                    }
                },
                methods: {
                    projectLoopBack: function() {
                        return this.projects.length - 1 == this.activeProject ? 1 - this.projects.length : 1
                    }
                },
                mounted: function() {
                    var t, e, a, o;
                    k()("html,body").scrollTop(0), this.controllerProjects = new L.a.Controller;
                    var r = !1;
                    e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-video-container", "transformed").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column2-mask", "slidden2").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column3-mask", "slidden3").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column2-mask-wide", "slidden2").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column4-mask", "slidden6").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column5-mask", "slidden5").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column6-mask-out1", "slidden7").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column6-mask-out2", "slidden6").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.setClassToggle(".projectDetail-name-column6-mask-out3", "slidden4").addTo(this.controllerProjects), e = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99
                    }), e.on("enter", (function() {
                        c()
                    })).on("leave", (function() {
                        i()
                    })).addTo(this.controllerProjects);
                    var c = function() {
                            r = !0, setTimeout((function() {
                                k()(".projectDetail-name-column1-mask").addClass("widened"), k()(".projectDetail-name-vanisher").addClass("vanished")
                            }), 700), setTimeout((function() {
                                r = !1
                            }), 700)
                        },
                        i = function t() {
                            1 == r ? setTimeout((function() {
                                t()
                            }), 10) : (k()(".projectDetail-name-column1-mask").removeClass("widened"), k()(".projectDetail-name-vanisher").removeClass("vanished"))
                        };
                    t = new g["a"]({}).fromTo(".projectDetail-name-container", .8, {
                        y: 0
                    }, {
                        y: "30vh"
                    }, 0), o = new L.a.Scene({
                        triggerElement: ".projectDetail-subcontent",
                        triggerHook: .99,
                        duration: "150%"
                    }), o.setTween(t).addTo(this.controllerProjects), a = new g["a"]({}).fromTo(".projectDetail-text", .8, {
                        y: 800,
                        opacity: 0,
                        scaleY: 3,
                        skewY: "20deg",
                        transformOrigin: "top"
                    }, {
                        y: 0,
                        opacity: 1,
                        scaleY: 1,
                        skewY: "0deg",
                        ease: f["d"].easeOut
                    }, .2), o = new L.a.Scene({
                        triggerElement: ".projectDetail-text-outer",
                        triggerHook: .7
                    }), o.setTween(a).addTo(this.controllerProjects), new g["a"]({
                        repeat: -1
                    }).to(".projectDetail-next-1", 60, {
                        x: "-100%",
                        ease: f["c"].easeNone
                    }, 0).to(".projectDetail-next-2", 60, {
                        x: "-100%",
                        ease: f["c"].easeNone
                    }, 0)
                },
                beforeDestroy: function() {
                    var t = this;
                    setTimeout((function() {
                        t.controllerProjects.destroy(!0), t.controllerProjects = null
                    }), 700)
                }
            },
            U = $,
            R = (a("ecf0"), Object(p["a"])(U, x, I, !1, null, "26b1a44c", null)),
            W = R.exports,
            Y = {
                name: "project",
                components: {
                    projectDetail: W
                },
                props: ["projects", "activeProject", "getProjectByUrl", "funcSwapProject"],
                mounted: function() {
                    var t;
                    t = function() {
                        new g["a"]({}).fromTo(".projectDetail-video", 1, {
                            y: "100vh"
                        }, {
                            y: 0,
                            ease: f["d"].easeOut
                        }, 0).staggerFromTo(".projectDetail-name-slider", 1, {
                            x: "100vw",
                            skewX: "90deg"
                        }, {
                            x: 0,
                            skewX: "0deg",
                            ease: f["d"].easeOut
                        }, .05, 0)
                    }, t()
                },
                methods: {
                    changeActive: function(t) {
                        this.projects[t.id - 1].active = t.isActive
                    }
                }
            },
            q = Y,
            X = (a("6b1c"), Object(p["a"])(q, F, S, !1, null, "30409718", null)),
            Z = X.exports,
            J = function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("main", {
                    staticClass: "about"
                }, [t._m(0), a("div", {
                    staticClass: "about-intro-outer"
                }, [a("div", {
                    staticClass: "about-name-container"
                }, [t._m(1), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6), a("div", {
                    staticClass: "about-pic-hitbox",
                    on: {
                        mouseover: t.hoverPic,
                        mouseleave: t.hoverPicOut
                    }
                }, [a("img", {
                    staticClass: "about-pic2-overlay about-pic-display-overlay",
                    attrs: {
                        src: "/assets/klo_tuer_sp.png",
                        alt: "Daniel Spatzek"
                    }
                })])])]), a("div", {
                    staticClass: "about-subcontent"
                }, [t._m(7), t._m(8), t._m(9), a("div", {
                    staticClass: "about-awards"
                }, [t._m(10), t._l(t.awards, (function(e, o) {
                    return a("div", {
                        key: o,
                        staticClass: "about-awards-entry"
                    }, [a("div", {
                        staticClass: "about-award-org"
                    }, [t._v("\n          " + t._s(e.name) + "\n        ")]), a("div", {
                        staticClass: "about-award-subaward"
                    }, t._l(e.subawards, (function(e, o) {
                        return a("div", {
                            key: o,
                            staticClass: "about-award-subaward-inner"
                        }, [a("span", {
                            staticClass: "about-award-count"
                        }, [t._v(t._s(e.awardcount) + "x")]), t._v(" " + t._s(e.awardname) + "\n          ")])
                    })), 0)])
                }))], 2), t._m(11), t._m(12), a("div", {
                    staticClass: "about-proc-graphics"
                }, [a("div", {
                    staticClass: "about-proc-entry"
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-1",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 141 141"
                    }
                }, [a("path", {
                    attrs: {
                        d: "M0 140h140V0M1 1l139 139",
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-1-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 141 141"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        d: "M0 140h140V0M1 1l139 139",
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2"
                    }
                })])]), t._m(13), a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("Send me a detailed briefing including the following information: who you are / core values / business goals / target group / what you are selling / required features / scope of the project or sitemap / timeframe and deadlines / examples of other sites you like / everything else you think is important")]), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })]), a("div", {
                    staticClass: "about-proc-entry"
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-2",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 140.5 144.87"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M1 2.43v140L139.5 3.93v138.5L1 2.43z"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-2-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 140.5 144.87"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M1 2.43v140L139.5 3.93v138.5L1 2.43z"
                    }
                })])]), t._m(14), a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("I will have an in-depth look at your briefing and evaluate whether the project fits both parties conditions and requirements. If it's a match, we will have a meeting (in person or via Skype/Hangout/etc.) to discuss how to proceed.")]), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })]), a("div", {
                    staticClass: "about-proc-entry",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-3",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 142 142"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M1 1h140v140H1z"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-3-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 142 142"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M1 1h140v140H1z"
                    }
                })])]), t._m(15), a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("We discuss approaches and concepts in order to find the perfect solution for your needs. If necessary, there can be multiple workshops.")]), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })]), a("div", {
                    staticClass: "about-proc-entry",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-4",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 142 142"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        "data-name": "Ebene 1",
                        d: "M1,71A70,70 0,1,1 141,71A70,70 0,1,1 1,71"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-4-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 142 142"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        "data-name": "Ebene 1",
                        d: "M1,71A70,70 0,1,1 141,71A70,70 0,1,1 1,71"
                    }
                })])]), t._m(16), t._m(17), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })]), a("div", {
                    staticClass: "about-proc-entry",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-5",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 165.12 143"
                    }
                }, [a("path", {
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M82.56 2L1.73 142h161.66L82.56 2z"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-5-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 165.12 143"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2",
                        d: "M82.56 2L1.73 142h161.66L82.56 2z"
                    }
                })])]), t._m(18), a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("After approval of the design/mood the respective screendesign will be developed. I will provide a test-link so you can check the current status after each milestone.")]), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })]), a("div", {
                    staticClass: "about-proc-entry",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                }, [a("div", {
                    staticClass: "about-proc-entry-line-h"
                }), a("div", {
                    staticClass: "about-proc-entry-line-v"
                }), a("div", {
                    staticClass: "about-proc-icon"
                }, [a("svg", {
                    staticClass: "about-proc-icon-nonAnts",
                    attrs: {
                        id: "about-proc-icon-6",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 141 141"
                    }
                }, [a("path", {
                    attrs: {
                        d: "M140 141V1H0M1 140L140 1",
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2"
                    }
                })]), a("svg", {
                    staticClass: "about-proc-icon-ants",
                    attrs: {
                        id: "about-proc-icon-6-ants",
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 141 141"
                    }
                }, [a("path", {
                    staticClass: "ants",
                    attrs: {
                        d: "M140 141V1H0M1 140L140 1",
                        fill: "none",
                        stroke: "#e7e7e5",
                        "stroke-miterlimit": "10",
                        "stroke-width": "2"
                    }
                })])]), t._m(19), a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("After developing all parts of the website we continue to test on multiple browsers and devices to fix bugs. Given your final approval the website is ready to be shipped.")]), a("div", {
                    staticClass: "about-proc-entry-hitbox",
                    on: {
                        mouseover: t.hoverGraphic,
                        mouseleave: t.leaveGraphic
                    }
                })])]), t._m(20), t._m(21), a("div", {
                    staticClass: "about-footer-text"
                }, [t._v("\n      How the heck did you get down here? "), a("span", {
                    staticClass: "about-outlined-black hoverRed",
                    on: {
                        click: t.backToTop
                    }
                }, [t._v("Go back up")]), t._v(" and read it all again. Maybe that helps.\n    ")]), t._m(22)])])
            },
            K = [function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-pic-outer"
                }, [a("img", {
                    staticClass: "about-pic",
                    attrs: {
                        src: "/assets/klo_sp.jpg",
                        alt: "Daniel Spatzek"
                    }
                }), a("img", {
                    staticClass: "about-pic2",
                    attrs: {
                        src: "/assets/klo_2_sp.jpg",
                        alt: "Daniel Spatzek"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-name-column1-mask"
                }, [a("div", {
                    staticClass: "about-name-outer"
                }, [a("div", {
                    staticClass: "about-name-slider"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row1"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])]), a("div", {
                    staticClass: "about-name-slider2"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row-sub1"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-name-column1-mask"
                }, [a("div", {
                    staticClass: "about-name-outer"
                }, [a("div", {
                    staticClass: "about-name-row about-row1"
                }, [a("br")]), a("div", {
                    staticClass: "about-name-slider"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row2"
                }, [t._v("meet you! meet you! meet you! meet you! meet you! meet you! meet you! meet you! ")])])]), a("div", {
                    staticClass: "about-name-slider2"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row-sub2"
                }, [t._v("meet you! meet you! meet you! meet you! meet you! meet you! meet you! meet you! ")])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-name-column2-mask"
                }, [a("div", {
                    staticClass: "about-name-outer"
                }, [a("div", {
                    staticClass: "about-column2"
                }, [a("div", {
                    staticClass: "about-name-slider"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row1"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])]), a("div", {
                    staticClass: "about-name-slider2"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row-sub1"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-name-column3-mask"
                }, [a("div", {
                    staticClass: "about-name-outer"
                }, [a("div", {
                    staticClass: "about-column2"
                }, [a("div", {
                    staticClass: "about-name-row about-row1"
                }, [a("br")]), a("div", {
                    staticClass: "about-name-slider"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row2"
                }, [t._v("meet you! meet you! meet you! meet you! meet you! meet you! meet you! meet you! ")])])]), a("div", {
                    staticClass: "about-name-slider2"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row-sub2"
                }, [t._v("meet you! meet you! meet you! meet you! meet you! meet you! meet you! meet you! ")])])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-name-column4-mask"
                }, [a("div", {
                    staticClass: "about-name-outer"
                }, [a("div", {
                    staticClass: "about-column3"
                }, [a("div", {
                    staticClass: "about-name-slider"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row1 about-outlined"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])]), a("div", {
                    staticClass: "about-name-slider2 about-column3"
                }, [a("div", {
                    staticClass: "about-name-slider-loop"
                }, [a("div", {
                    staticClass: "about-name-row about-row-sub1 about-outlined"
                }, [t._v("Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to Nice to ")])])])])])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-pic-hitbox"
                }, [a("img", {
                    staticClass: "about-pic2 about-pic-display",
                    attrs: {
                        src: "/assets/klo_tuer_sp.png",
                        alt: "Daniel Spatzek"
                    }
                })])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-intro noClick"
                }, [t._v("\n      I'm the guy who makes people "), a("span", {
                    staticClass: "about-outlined-black"
                }, [t._v("buy")]), t._v(" your stuff. I do websites, classic print design, branding and development. From time to time I get paid to coach people so they become as awesome as I am (doesn't really work tho).\n    ")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-subtext-outer"
                }, [a("div", {
                    staticClass: "about-subtext"
                }, [t._v("\n        Since you landed here you are probably looking for someone who can build your new website. Well done! You found the man for the job. I can handle projects from scratch (yes, even your logo and brand identity, so don't worry), or projects for established brands that build on preexisting visuals and aesthetics. No matter the size of your project - I can do it all. I am part of a network of creative professionals and agencies capable of handling even the most challenging jobs.\n      ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-contact-1"
                }, [a("span", {
                    staticClass: "about-contact-hl-1"
                }, [t._v("ALREADY CONVINCED? 👇🏼")]), a("br"), a("a", {
                    staticClass: "about-contact-mail-1",
                    attrs: {
                        href: "mailto:office@danielspatzek.com"
                    }
                }, [t._v("office🙊danielspatzek.com ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-awards-hl"
                }, [t._v("No? Ok, I see. Check out my "), a("span", {
                    staticClass: "about-outlined-black"
                }, [t._v("awards & "), a("br"), t._v("recognitions:")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-contact-2"
                }, [a("span", {
                    staticClass: "about-contact-hl-2"
                }, [t._v("DO IT! 👇🏼")]), a("br"), a("a", {
                    staticClass: "about-contact-mail-2",
                    attrs: {
                        href: "mailto:office@danielspatzek.com"
                    }
                }, [t._v("office🙈danielspatzek.com ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-intro"
                }, [t._v("\n      Hmm, you are hard to crack! Surely you want to know more about "), a("span", {
                    staticClass: "about-outlined-black"
                }, [t._v("how I handle a project:")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("1."), a("br"), t._v("Briefing "), a("span", {
                    staticClass: "red"
                }, [t._v("(FREE)")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("2."), a("br"), t._v("Evaluation "), a("span", {
                    staticClass: "red"
                }, [t._v("(FREE)")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("3."), a("br"), t._v("Workshops")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("4."), a("br"), t._v("Design")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-text"
                }, [t._v("This is where the magic happens. I will work on the Art Direction, Concept and Design. Usually I present a "), a("a", {
                    staticClass: "underlined",
                    attrs: {
                        href: "https://en.wikipedia.org/wiki/Mood_board",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v("moodboard")]), t._v(" or 2-3 screens that show the look and feel of the final product. If required further screens will be designed (extra costs).")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("5."), a("br"), t._v("Implementation")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-proc-headline"
                }, [t._v("6."), a("br"), t._v("Quality Assurance")])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-contact-3"
                }, [a("span", {
                    staticClass: "about-contact-hl-3"
                }, [t._v("YOU LIKE THAT? 👇🏼")]), a("br"), a("a", {
                    staticClass: "about-contact-mail-3",
                    attrs: {
                        href: "mailto:office@danielspatzek.com"
                    }
                }, [t._v("office🙉danielspatzek.com ")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-social"
                }, [a("div", {
                    staticClass: "about-social-hl"
                }, [t._v("SOCIAL")]), a("a", {
                    staticClass: "about-social-entry",
                    attrs: {
                        href: "https://twitter.com/SpatzekStudio",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v("Twitter")]), a("br"), a("a", {
                    staticClass: "about-social-entry",
                    attrs: {
                        href: "https://www.facebook.com/spatzekstudio",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v("Facebook")]), a("br"), a("a", {
                    staticClass: "about-social-entry",
                    attrs: {
                        href: "https://www.behance.net/dnlsptzk",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }
                }, [t._v("Behance")])])
            }, function() {
                var t = this,
                    e = t.$createElement,
                    a = t._self._c || e;
                return a("div", {
                    staticClass: "about-imprint"
                }, [a("div", {
                    staticClass: "about-imprint-hl"
                }, [t._v("\n        IMPRINT\n      ")]), a("div", {
                    staticClass: "about-imprint-text"
                }, [t._v("\n        Spatzek Studio e.U."), a("br"), t._v("Am Langen Zaun 19a"), a("br"), t._v("4030 Linz, Austria"), a("br"), t._v("office@danielspatzek.com"), a("br"), t._v("FN 415282 i"), a("br"), t._v("Landesgericht Linz"), a("br"), t._v("UID-Nr.: ATU68611433\n      ")]), a("div", {
                    staticClass: "about-disclaimer-hl"
                }, [t._v("\n        GOOGLE ANALYTICS DISCLAIMER\n      ")]), a("div", {
                    staticClass: "about-disclaimer-text"
                }, [t._v('\n        This website uses Google Analytics, a web analytics service provided by Google, Inc. ("Google"). Google Analytics uses "cookies", which are text files placed on your computer to help the website analyse how visitors use the site. The information generated by the cookie about your use of the website (including your IP address) will be transmitted to and stored by Google on servers in the United States . Google will use this information for the purpose of evaluating your use of the website, compiling reports on website activity for website operators and providing other services relating to website activity and internet usage. Google may also transfer this information to third parties where required to do so by law, or where such third parties process the information on Google\'s behalf. Google will not associate your IP address with any other data held by Google. You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note that if you do this you may not be able to use the full functionality of this website. By using this website, you consent to the processing of data about you by Google in the manner and for the purposes set out above.\n      ')]), a("div", {
                    staticClass: "about-copyright"
                }, [t._v("\n        © 2018 by Spatzek Studio. All Rights Reserved.\n      ")])])
            }],
            Q = a("0a47"),
            tt = a("3b75"),
            et = a.n(tt),
            at = {
                name: "about",
                props: ["projects", "activeProject", "getProjectByUrl", "awards", "aboutActive"],
                data: function() {
                    return {
                        controllerAbout: null
                    }
                },
                methods: {
                    backToTop: function() {
                        k()("html,body").animate({
                            scrollTop: 0
                        }, 2e3)
                    },
                    hoverPic: function() {
                        new g["a"]({}).to(".about-pic2", .5, {
                            opacity: 1,
                            ease: f["c"].easeNone
                        }, 0)
                    },
                    hoverPicOut: function() {
                        new g["a"]({}).to(".about-pic2", .5, {
                            opacity: 0,
                            ease: f["c"].easeNone
                        }, 0)
                    },
                    hoverGraphic: function(t) {
                        new g["a"]({}).to(k()(t.path[1]).find(".about-proc-icon-nonAnts"), .5, {
                            opacity: 0,
                            ease: f["c"].easeNone
                        }, 0).to(k()(t.path[1]).find(".about-proc-icon-ants"), .5, {
                            opacity: 1,
                            ease: f["c"].easeNone
                        }, 0)
                    },
                    leaveGraphic: function(t) {
                        new g["a"]({}).to(k()(t.path[1]).find(".about-proc-icon-nonAnts"), .5, {
                            opacity: 1,
                            ease: f["c"].easeNone
                        }, 0).to(k()(t.path[1]).find(".about-proc-icon-ants"), .5, {
                            opacity: 0,
                            ease: f["c"].easeNone
                        }, 0)
                    },
                    makeItGrey: function() {
                        var t = k()(".about-proc-graphics").offset().top,
                            e = t + k()(".about-proc-graphics").outerHeight(),
                            a = k()(window).scrollTop(),
                            o = a + k()(window).height() / 10;
                        return t < o && e > o
                    }
                },
                mounted: function() {
                    var t, e, a, o, r, c, i = this;
                    k()("html,body").scrollTop(0), this.controllerAbout = new L.a.Controller;
                    var s = function() {
                            k()(".project-nav-entry, .project-noRed, .ui-counter").addClass("darkgrey")
                        },
                        n = function() {
                            k()(".project-nav-entry, .project-noRed, .ui-counter").removeClass("darkgrey")
                        };
                    k()(window).on("resize scroll", (function() {
                        1 == i.makeItGrey() ? s() : n()
                    })), new g["a"]({}).fromTo(".about-subcontent", .5, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, .3), new g["a"]({
                        repeat: -1
                    }).to(".about-name-slider-loop", 30, {
                        x: "-100%",
                        ease: f["c"].easeNone
                    }, 0).to(".about-name-slider-loop2", 30, {
                        x: "-100%",
                        ease: f["c"].easeNone
                    }, 0), new g["a"]({}).fromTo(".about-name-slider", .7, {
                        x: "100vw",
                        skewX: "40deg"
                    }, {
                        x: 0,
                        skewX: 0,
                        ease: f["d"].easeOut
                    }, 0).fromTo(".about-name-slider2", .7, {
                        x: "100vw",
                        skewX: "40deg"
                    }, {
                        x: 0,
                        skewX: 0,
                        ease: f["d"].easeOut
                    }, 0).fromTo(".about-pic-outer", .7, {
                        opacity: 0
                    }, {
                        opacity: 1
                    }, .3), t = new g["a"]({}).fromTo(".about-contact-1", .6, {
                        opacity: 0,
                        x: -200,
                        skewX: "60deg",
                        transformOrigin: "right"
                    }, {
                        opacity: 1,
                        x: 0,
                        skewX: "0deg",
                        ease: Q["a"].easeOut
                    }, 0), e = new L.a.Scene({
                        triggerElement: ".about-contact-1",
                        triggerHook: .9
                    }), e.setTween(t).addTo(this.controllerAbout), a = new g["a"]({}).fromTo(".about-contact-2", .6, {
                        opacity: 0,
                        x: -200,
                        skewX: "60deg",
                        transformOrigin: "right"
                    }, {
                        opacity: 1,
                        x: 0,
                        skewX: "0deg",
                        ease: Q["a"].easeOut
                    }, 0), o = new L.a.Scene({
                        triggerElement: ".about-contact-2",
                        triggerHook: .9
                    }), o.setTween(a).addTo(this.controllerAbout), r = new g["a"]({}).fromTo(".about-contact-3", .6, {
                        opacity: 0,
                        x: -200,
                        skewX: "60deg",
                        transformOrigin: "right"
                    }, {
                        opacity: 1,
                        x: 0,
                        skewX: "0deg",
                        ease: Q["a"].easeOut
                    }, 0), c = new L.a.Scene({
                        triggerElement: ".about-contact-3",
                        triggerHook: .9
                    }), c.setTween(r).addTo(this.controllerAbout), new et.a("about-proc-icon-1", {
                        duration: 200
                    }), new et.a("about-proc-icon-2", {
                        duration: 200
                    }), new et.a("about-proc-icon-3", {
                        duration: 200
                    }), new et.a("about-proc-icon-4", {
                        duration: 200
                    }), new et.a("about-proc-icon-5", {
                        duration: 200
                    }), new et.a("about-proc-icon-6", {
                        duration: 200
                    })
                },
                beforeDestroy: function() {
                    var t = this;
                    setTimeout((function() {
                        t.controllerAbout.destroy(!0), t.controllerAbout = null
                    }), 700), k()(window).off("resize scroll")
                }
            },
            ot = at,
            rt = (a("f26d"), Object(p["a"])(ot, J, K, !1, null, null, null)),
            ct = rt.exports;
        o["a"].use(A["a"]);
        var it = new A["a"]({
            mode: "history",
            base: "/",
            routes: [{
                path: "/about",
                name: "about",
                component: ct
            }, {
                path: "/",
                redirect: "/degenesis"
            }, {
                path: "/home",
                redirect: "/degenesis"
            }, {
                path: "/:projID",
                name: "project",
                component: Z
            }]
        });
        o["a"].config.productionTip = !1, new o["a"]({
            router: it,
            render: function(t) {
                return t(V)
            }
        }).$mount("#app")
    },
    "5c0b": function(t, e, a) {
        "use strict";
        var o = a("e332"),
            r = a.n(o);
        r.a
    },
    "6b1c": function(t, e, a) {
        "use strict";
        var o = a("9661"),
            r = a.n(o);
        r.a
    },
    9661: function(t, e, a) {},
    "9acb": function(t, e, a) {},
    ccae: function(t) {
        t.exports = JSON.parse('{"awards":[{"name":"CSS Design Awards","subawards":[{"awardname":"🏆 Designer of The Year (2018 + 2019)","awardcount":2},{"awardname":"Interactive Designer of The Year (2017)","awardcount":1},{"awardname":"Site of The Year Kudos Award (2017)","awardcount":1},{"awardname":"Site of the Day","awardcount":14},{"awardname":"Part of the judging panel - Senior Judge","awardcount":1}]},{"name":"awwwards","subawards":[{"awardname":"Site of the Day","awardcount":1},{"awardname":"Developer Award","awardcount":4},{"awardname":"Mobile Excellence","awardcount":6},{"awardname":"Independent of the Year Nominee (2017 + 2018 + 2019)","awardcount":3}]},{"name":"FWA","subawards":[{"awardname":"FWA of the Day","awardcount":6}]},{"name":"Communication Arts","subawards":[{"awardname":"Webpick of the Week","awardcount":3}]}],"projects":[{"id":1,"active":false,"projectUrl":"degenesis","projectLink":"https://degenesis.com/","projectName":"Mandhari","projectDate":"2020","projectNameLine1":"Mandhari","projectNameLine2":"Rebirth","projectNameLine3":"Edition","projectIntroVid":"/assets/degenesis_introloop_cc.mp4","projectIntroPic":"/assets/degenesis_header_1707_fallback.jpg","projectService1":"Branding, Website and Store","projectService2":"Design and Concept","projectService3":"Development","projectText":"Mandhari Plants and Designs.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_01.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/degenesis_home_1280_cc.mp4","projectFallbackPic":"/assets/degenesis_home_fallback_1707.jpg","projectPic":null,"projectEntryName":"Home Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_02.jpg","projectEntryName":"Home Section and Mobile Version"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_03.jpg","projectEntryName":"Cultures & Cults Landing Impression"},{"projectVid":"/assets/degenesis_cults_1280_cc.mp4","projectFallbackPic":"/assets/degenesis_cults_fallback_1707.jpg","projectPic":null,"projectEntryName":"Cults Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_04.jpg","projectEntryName":"Cults Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_05.jpg","projectEntryName":"Icons Page with Filter Option"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_06.jpg","projectEntryName":"Stories & Universe Pages"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_07.jpg","projectEntryName":"Gallery & Megamenu"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/degenesis_08.jpg","projectEntryName":"Interactive World Map"},{"projectVid":"/assets/degenesis_map_1280_cc.mp4","projectFallbackPic":"/assets/degenesis_map_fallback_1707.jpg","projectPic":null,"projectEntryName":"Interactive Map Animations"}]},{"id":2,"active":false,"projectUrl":"fallend","projectLink":"https://fabianfallend.com/","projectName":"Fallend","projectDate":"2019","projectNameLine1":"Fabian","projectNameLine2":"Ferdinand","projectNameLine3":"Fallend","projectIntroVid":"/assets/fff_overview_cc.mp4","projectIntroPic":"/assets/fff_overview_fallback_prog.jpg","projectService1":"Branding and Website","projectService2":"Design and Concept","projectService3":"Development","projectText":"Fabian Ferdinand Fallend is a photographer and Kalaschnikow incarnate based in Berlin and Linz (Austria). Starting 2014, after a career as interior designer, he conquered europe with his unique style as photographer. The concept, design and visiuals of the website reflect Fabians personality and show his skillset in an unique way.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p1.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/fff_home_cc.mp4","projectFallbackPic":"/assets/fff_video_fallback_home.jpg","projectPic":null,"projectEntryName":"Cookie Easter-Egg and Home Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p2.jpg","projectEntryName":"Home Section and Mobile Version"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p3.jpg","projectEntryName":"Home, Work and About Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p4.jpg","projectEntryName":"Picture Overview and Visual Impressions"},{"projectVid":"/assets/fff_detail_cc.mp4","projectFallbackPic":"/assets/fff_video_fallback_detail.jpg","projectPic":null,"projectEntryName":"Cookie Easter-Egg and Home Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p5.jpg","projectEntryName":"Work Section Transition and Mobile Version"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/fff_p6.jpg","projectEntryName":"Project Detail Impressions"}]},{"id":3,"active":false,"projectUrl":"burnish","projectLink":"https://burnishcreative.com","projectName":"Burnish","projectDate":"2019","projectNameLine1":"Burnish","projectNameLine2":"Creative","projectIntroVid":"/assets/burnish_loop_cc.mp4","projectIntroPic":"/assets/burnish_01_home.jpg","projectService1":"Branding and Website","projectService2":"Design and Concept","projectService3":"Development","projectText":"Burnish Creative is a full service production and post-production team located in the heart of Miracle Mile in Los Angeles. The concept, design and visuals of the website reflect the quality of Burnish Creative\'s work. Unique effects and transition animations combined with a simple and smooth performance enhance the UX and strengthen the brand.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_01_home.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/burnish_home_cc.mp4","projectFallbackPic":"/assets/burnish_01_home.jpg","projectPic":null,"projectEntryName":"Dynamic Text Highlight Animation"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_02_home2.jpg","projectEntryName":"Home Hover Animation"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_03_overview.jpg","projectEntryName":"Project Overview Page"},{"projectVid":"/assets/burnish_overview_cc.mp4","projectFallbackPic":"/assets/burnish_03_overview.jpg","projectPic":null,"projectEntryName":"Projects Overview Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_04_detail.jpg","projectEntryName":"Project Detail Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_05_detail2.jpg","projectEntryName":"Project Detail Page"},{"projectVid":"/assets/burnish_detail_cc.mp4","projectFallbackPic":"/assets/burnish_04_detail.jpg","projectPic":null,"projectEntryName":"Detail Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_06_about.jpg","projectEntryName":"About Page Hero Section"},{"projectVid":"/assets/burnish_about_cc.mp4","projectFallbackPic":"/assets/burnish_06_about.jpg","projectPic":null,"projectEntryName":"Detail Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_07_info.jpg","projectEntryName":"Capabilities Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_08_facility.jpg","projectEntryName":"Facility Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/burnish_09_team.jpg","projectEntryName":"Team Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/awards_certificate_burnish_tiny.png","projectEntryName":"International Webdesign Awards for the Project"}]},{"id":4,"active":false,"projectUrl":"umsc19","projectLink":"https://ursamajorsupercluster.com","projectName":"UMSC 2019","projectDate":"2019","projectNameLine1":"Ursa","projectNameLine2":"Major","projectNameLine3":"SC19","projectIntroVid":"/assets/umsc19_loop_cc.mp4","projectIntroPic":"/assets/umsc19_contact1_70_sp.jpg","projectService1":"Branding and Website","projectService2":"Design and Concept","projectService3":"Development","projectText":"Ursa Major Supercluster is a digital design studio from Austria. The experimental concept combined with unique aesthetics right at the sweetspot between brutalism, minimalism and modern technologies shows off the capabilities of the new studio.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_home.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/umsc19_home_cc.mp4","projectFallbackPic":"/assets/umsc19_home.jpg","projectPic":null,"projectEntryName":"Interactive Bouncing Projects-Sphere"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_about2_70.jpg","projectEntryName":"About Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_about3_70.jpg","projectEntryName":"Awards Section"},{"projectVid":"/assets/umsc19_detail_cc.mp4","projectFallbackPic":"/assets/umsc19_about3_70.jpg","projectPic":null,"projectEntryName":"Projects Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_detail_70.jpg","projectEntryName":"Project Detail Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_detail2_70.jpg","projectEntryName":"Project Detail Page"},{"projectVid":"/assets/umsc19_contact_cc.mp4","projectFallbackPic":"/assets/umsc19_contact1_70_sp.jpg","projectPic":null,"projectEntryName":"Contact Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_contact1_70_sp.jpg","projectEntryName":"Contact Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc19_contact2_70_sp.jpg","projectEntryName":"Contact Page Hover Interaction"}]},{"id":5,"active":false,"projectUrl":"viita_titan","projectLink":"https://titan.viita-watches.com","projectName":"Viita Titan","projectDate":"2018","projectNameLine1":"Viita","projectNameLine2":"Titan","projectNameLine3":"Watch","projectIntroVid":"/assets/titan_cc.mp4","projectIntroPic":"/assets/titan_fallback_sp.jpg","projectService1":"Design & Concept","projectService2":"Art Direction","projectService3":"Development","projectText":"Promotion website for VIITA Watches latest addition to its smartwatch collection: The VIITA TITAN HRV. To support the Kickstarter campaign, I created an easy-to-use one page website with rich parallax-effects, liquid distortion backgrounds and extensive transition animations. Effect-loaded storytelling leads the user through a scroll-only experience while enhancing the desire to buy the watch with every presented feature.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_01.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/titan_intro_cc_720p.mp4","projectFallbackPic":"/assets/titan_02.jpg","projectPic":null,"projectEntryName":"On-Scroll Parallax Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_intro_tiny.png","projectEntryName":"Watch Introduction Section"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_04.jpg","projectEntryName":"Horizontal Text on Feature Introduction"},{"projectVid":"/assets/titan_features_cc_720p.mp4","projectFallbackPic":"/assets/titan_06.jpg","projectPic":null,"projectEntryName":"Feature-Promotion Section Transition"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_features_tiny.png","projectEntryName":"Watch Feature-Promotion Section"},{"projectVid":"/assets/titan_footer_cc_720p.mp4","projectFallbackPic":"/assets/titan_08.jpg","projectPic":null,"projectEntryName":"Footer Text Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_08.jpg","projectEntryName":"Website Footer"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_08.png","projectEntryName":"Responsive Design for every device"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/titan_awards_tiny.png","projectEntryName":"International Webdesign Awards for the Project"}]},{"id":6,"active":false,"projectUrl":"cargo_the_film","projectLink":"https://cargothefilm2017.com","projectName":"Cargo The Film","projectDate":"2018","projectNameLine1":"Cargo","projectNameLine2":"The","projectNameLine3":"Film","projectIntroVid":"/assets/cargo_cc.mp4","projectIntroPic":"/assets/cargo_fallback_sp.jpg","projectService1":"Design and Concept","projectService2":"Art Direction","projectService3":"Development","projectText":"Cargo is the largest and best performing award winning Bahamian feature film project to date. Initially, my job was limited to print; to design the official movie poster, but was later on extended to the design and execution of Cargo’s official webpage. It is an abstract visualization of social problems in The Bahamas: Hidden underneath the surface you enter a darker side of the beautiful islands: human smuggling. A beautiful landing impression turns into a darker experience after scrolling into the depths of the website.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/cargo_01_80p.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/cargo_intro_cc_720p.mp4","projectFallbackPic":"/assets/cargo_01_80p.jpg","projectPic":null,"projectEntryName":"Sinking Animation on Scroll"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/cargo_actors_tiny.png","projectEntryName":"Actor and Character Introduction"},{"projectVid":"/assets/cargo_actors_cc_720p.mp4","projectFallbackPic":"/assets/cargo_03_80p.jpg","projectPic":null,"projectEntryName":"Actor Section Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/cargo_bts_tiny.png","projectEntryName":"Picture Gallery and Video Presentation"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/cargo_07_80p.jpg","projectEntryName":"Footer Showing Dark Side of The Bahamas"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/cargo_awards_tiny.png","projectEntryName":"International Webdesign Awards for the Project"}]},{"id":7,"active":false,"projectUrl":"walter_spatzek","projectLink":"https://www.fotospatzek.at","projectName":"Walter Spatzek","projectDate":"2018","projectNameLine1":"Walter","projectNameLine2":"Spatzek","projectNameLine3":"Photo","projectIntroVid":"/assets/wsp_cc.mp4","projectIntroPic":"/assets/wsp_fallback_sp.jpg","projectService1":"Branding and Website","projectService2":"Design and Art Direction","projectService3":"Development","projectText":"Walter Spatzek is not only my dad but also a professional photographer with more than 40 years experience. The concept behind this website was to create a balance between high-end technologies, visually impressive effects and an aesthetically pleasing look with high-quality typography. A tailor-made camera focus 3D-effect creates a stunning initial impression while at the same time presenting Walter Spatzek and the quality of his work.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_intro_tiny.png","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/wsp_intro_cc_720p.mp4","projectFallbackPic":"/assets/wsp_intro_tiny.jpg","projectPic":null,"projectEntryName":"Intro and Transition Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_uebergang_80perc_1200px.jpg","projectEntryName":"Menu Transition"},{"projectVid":"/assets/wsp_gallery_cc_720p.mp4","projectFallbackPic":"/assets/wsp_architektur_80perc_1200px.jpg","projectPic":null,"projectEntryName":"Gallery Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_architektur_80perc_1200px.jpg","projectEntryName":"Gallery Architecture"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_impressionen2_80perc_1200px.jpg","projectEntryName":"Gallery Impressions"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_produkte_80perc_1200px.jpg","projectEntryName":"Gallery Products & 3D"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_pic_detail_80perc.jpg","projectEntryName":"Picture Detail"},{"projectVid":"/assets/wsp_about_cc_720p.mp4","projectFallbackPic":"/assets/wsp_about_1200px_tiny.jpg","projectPic":null,"projectEntryName":"About Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_about_1200px_tiny.png","projectEntryName":"About-Page Design"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_mobile_1200px_tiny.png","projectEntryName":"Responsive Design for every device"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/wsp_awards_tiny.png","projectEntryName":"International Webdesign Awards for the Project"}]},{"id":8,"active":false,"projectUrl":"umsc","projectLink":"https://2017.ursamajorsupercluster.com","projectName":"UMSC 2017","projectDate":"2017","projectNameLine1":"Ursa","projectNameLine2":"Major","projectNameLine3":"Supercluster","projectIntroVid":"/assets/umsc_cc.mp4","projectIntroPic":"/assets/umsc_fallback_sp.jpg","projectService1":"Branding and Website","projectService2":"Design and Concept","projectService3":"Development","projectText":"URSA MAJOR SUPERCLUSTER is a digital design studio specialized in unique and eye-pleasing solutions. The basis of the website is the geometrical concept of 4 lines stretching from the corners of the viewport to the current mouse position. This creates 4 triangles, 2 of which reveal their content when moving the cursor to the opposite side. Once understood, the intuitive navigation should be as entertaining as it is fast and efficient.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_01_80p.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/umsc_nav_cc_720p.mp4","projectFallbackPic":"/assets/umsc_01_80p.jpg","projectPic":null,"projectEntryName":"Drag-Navigation Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_intro_tiny.png","projectEntryName":"Cursor based Navigation Concept"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_mobile_home_tiny.png","projectEntryName":"Home and Codex Mobile"},{"projectVid":"/assets/umsc_project_cc_720p.mp4","projectFallbackPic":"/assets/umsc_03_80p.jpg","projectPic":null,"projectEntryName":"Project-Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_03_80p.jpg","projectEntryName":"Project Overview"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_project_tiny.png","projectEntryName":"Project Overview Hover Video"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_05_80p.jpg","projectEntryName":"Project Detail"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_mobile_projects_tiny.png","projectEntryName":"Projects Mobile"},{"projectVid":"/assets/umsc_codex_cc_720p.mp4","projectFallbackPic":"/assets/umsc_06_80p.jpg","projectPic":null,"projectEntryName":"Codex Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_06_80p.jpg","projectEntryName":"Codex Page"},{"projectVid":"/assets/umsc_contact_cc_720p.mp4","projectFallbackPic":"/assets/umsc_07_80p.jpg","projectPic":null,"projectEntryName":"Contact Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_07_80p.jpg","projectEntryName":"Contact Page with hidden GIF"},{"projectVid":"/assets/umsc_about_cc_720p.mp4","projectFallbackPic":"/assets/umsc_08_80p.jpg","projectPic":null,"projectEntryName":"About Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_08_80p.jpg","projectEntryName":"About Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_mobile_about_tiny.png","projectEntryName":"Mobile About Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/umsc_awards_tiny.png","projectEntryName":"International Webdesign Awards for the Project"}]},{"id":9,"active":false,"projectUrl":"thomas_st_john","projectLink":"http://thomasstjohn.com","projectName":"Thomas St. John","projectDate":"2017","projectNameLine1":"Thomas","projectNameLine2":"St.","projectNameLine3":"John","projectIntroVid":"/assets/tsj_cc.mp4","projectIntroPic":"/assets/tsj_fallback_sp.jpg","projectService1":"Webdesign & Concept","projectService2":null,"projectService3":null,"projectText":"Thomas St. John Group is a London and L.A. based accounting firm for artists, entertainers, sports people and the businesses they work with. According to the client\'s briefing I created a visually impressive but unusual intro animation that delivers the brand\'s core message but at the same time disrupts the industry\'s typical aesthetics. Inverted horizontal scrolling intensifies this atypical experience and leads the user through the 5 individual sections of the content.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_01_60p.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/tsj_intro_cc_720p.mp4","projectFallbackPic":"/assets/tsj_01_60p.jpg","projectPic":null,"projectEntryName":"Intro Transition Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_intro_tiny.png","projectEntryName":"On-Scroll Intro Animation"},{"projectVid":"/assets/tsj_about_cc_720p.mp4","projectFallbackPic":"/assets/tsj_about_1200.jpg","projectPic":null,"projectEntryName":"About Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_about_1200.jpg","projectEntryName":"About Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_about_tiny.png","projectEntryName":"About Page Pop-Up Animation"},{"projectVid":"/assets/tsj_clarity_cc_720p.mp4","projectFallbackPic":"/assets/tsj_clarity_fb.jpg","projectPic":null,"projectEntryName":"Clarity Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_clarity_tiny.png","projectEntryName":"Clarity (Services) Page"},{"projectVid":"/assets/tsj_contact_cc_720p.mp4","projectFallbackPic":"/assets/tsj_contact_1200.jpg","projectPic":null,"projectEntryName":"Contact Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_contact_tiny.png","projectEntryName":"Contact Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_join_1200.jpg","projectEntryName":"Join-Us Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/tsj_mobile_1200.png","projectEntryName":"Responsive Design for every device"}]},{"id":10,"active":false,"projectUrl":"dnlsptzk17","projectLink":"https://2017.danielspatzek.com","projectName":"dnlsptzk17","projectDate":"2017","projectNameLine1":"Daniel","projectNameLine2":"Spatzek","projectNameLine3":"2017","projectIntroVid":"/assets/dnlsptzk17_cc.mp4","projectIntroPic":"/assets/dnlsptzk17_fallback_sp.jpg","projectService1":"Webdesign and Concept","projectService2":null,"projectService3":null,"projectText":"Last version of my portfolio website with lots of effects and interactions. The appearance is defined by digital aesthetics like glitches and rectangular elements combined with minimalism as well as a weird picture and typography style. The unique navigational concept leads to the 4 subpages on the four sides of the screen - each with its own distinctive animations and functionalities. The website is powered by technologies like webGL and GSAP.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk_home_1200_80.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/dnlsptzk17_intro_cc_720p.mp4","projectFallbackPic":"/assets/dnlsptzk_home_1200_80.jpg","projectPic":null,"projectEntryName":"Home Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk_projects_overview_1200_80.jpg","projectEntryName":"Project-Overview Page"},{"projectVid":"/assets/dnlsptzk17_projects_cc_720p.mp4","projectFallbackPic":"/assets/dnlsptzk_projects_overview_1200_80.jpg","projectPic":null,"projectEntryName":"Project Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk17_projects_tiny.png","projectEntryName":"Project-Detail Page"},{"projectVid":"/assets/dnlsptzk17_contact_cc_720p.mp4","projectFallbackPic":"/assets/dnlsptzk_contact_1200_80.jpg","projectPic":null,"projectEntryName":"Contact Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk_contact_1200_80.jpg","projectEntryName":"Contact Page"},{"projectVid":"/assets/dnlsptzk17_about_cc_720p.mp4","projectFallbackPic":"/assets/dnlsptzk17_about_tiny.jpg","projectPic":null,"projectEntryName":"About Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk17_about_tiny.png","projectEntryName":"About Page"},{"projectVid":"/assets/dnlsptzk17_news_cc_720p.mp4","projectFallbackPic":"/assets/dnlsptzk_newsblog_1200_80.jpg","projectPic":null,"projectEntryName":"Newsblog Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk_newsblog_1200_80.jpg","projectEntryName":"Newsblog-Overview Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/dnlsptzk_newsblog_detail_1200_80.jpg","projectEntryName":"Newsblog-Detail Page"}]},{"id":11,"active":false,"projectUrl":"hunter_gold","projectLink":null,"projectName":"Hunter & Gold","projectDate":"2016","projectNameLine1":"Hunter","projectNameLine2":"&","projectNameLine3":"Gold","projectIntroVid":"/assets/hg_cc.mp4","projectIntroPic":"/assets/hg_fallback_sp.jpg","projectService1":"Branding and Website","projectService2":"Design and Concept","projectService3":"Art Direction","projectText":"Hunter & Gold is an aspirational Lifestyle Services company located in the heart of London. They offer some of the most exclusive services to their VIP clients who visit London from all over the World. To translate the companies core values into their brand I created a distinctive visual concept entirely based on the legendary golden ratio. From the logo to the website every single graphical element has been proportioned to the golden ratio to deliver high-class aesthetics that perfectly fit the brand\'s values.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_home_1200_70.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_home2_1200_80.jpg","projectEntryName":"Home Manifesto"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_services_intro_1200_70.jpg","projectEntryName":"Services-Intro Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_services_highlights_1200_70.jpg","projectEntryName":"Services-Highlights Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_menu_1200_70.jpg","projectEntryName":"Open Navigation"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/hg_logo_1200_70.jpg","projectEntryName":"Logo Design"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/huntergold_goldenratio_1200px_70p.jpg","projectEntryName":"Golden-Ratio Concept"}]},{"id":12,"active":false,"projectUrl":"renate_rechner","projectLink":"http://www.renaterechner.at","projectName":"Renate Rechner","projectDate":"2016","projectNameLine1":"Renate","projectNameLine2":"Rechner","projectNameLine3":null,"projectIntroVid":"/assets/rr4_cc.mp4","projectIntroPic":"/assets/rr4_fallback_sp.jpg","projectService1":"Branding and Website","projectService2":"Design and Art Direction","projectService3":null,"projectText":"Renate Rechner is an Austrian psychologist focused on positive psychology. Her official website is a unique experience with a concept based on the slogan \'change your perspective\'. Extensive spin animations and numerous micro-animations visiualize a change of perspective while exploring the 5 main sections of the website. This idea was also transferred to the logo and stationary of Renate Rechner.","projectEntries":[{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_home_1200_80.jpg","projectEntryName":"Initial Landing Impression"},{"projectVid":"/assets/rr_intro_cc_720p.mp4","projectFallbackPic":"/assets/rr_home_1200_80.jpg","projectPic":null,"projectEntryName":"Intro and Rotation Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_rotation_tiny.png","projectEntryName":"Rotate-Transition Animation"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_basis_1200_80p.jpg","projectEntryName":"Basis Page"},{"projectVid":"/assets/rr_quint_cc_720p.mp4","projectFallbackPic":"/assets/rr_quintessence_1200_80.jpg","projectPic":null,"projectEntryName":"Quintessence and Activity Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_quintessence_1200_80.jpg","projectEntryName":"Quintessence Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_detail_anim_tiny.png","projectEntryName":"Activity Page Transition Animation"},{"projectVid":"/assets/rr_ref_cc_720p.mp4","projectFallbackPic":"/assets/rr_ref_fb_1200.jpg","projectPic":null,"projectEntryName":"References Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_references_tiny.png","projectEntryName":"References Page"},{"projectVid":"/assets/rr_contact_cc_720p.mp4","projectFallbackPic":"/assets/rr_contact_1200_80jpg.jpg","projectPic":null,"projectEntryName":"Contact Page Animations"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_contact_1200_80jpg.jpg","projectEntryName":"Contact Page"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_logo.jpg","projectEntryName":"Logo Design"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_stationary_tiny.png","projectEntryName":"Stationary Design"},{"projectVid":null,"projectFallbackPic":null,"projectPic":"/assets/rr_awards_tiny.png","projectEntryName":"Contact Page"}]}]}')
    },
    df92: function(t, e, a) {},
    e332: function(t, e, a) {},
    e3fe: function(t, e, a) {
        "use strict";
        var o = a("df92"),
            r = a.n(o);
        r.a
    },
    e528: function(t, e, a) {
        "use strict";
        var o = a("f080"),
            r = a.n(o);
        r.a
    },
    e9ad: function(t, e, a) {},
    ecf0: function(t, e, a) {
        "use strict";
        var o = a("f3cb"),
            r = a.n(o);
        r.a
    },
    f080: function(t, e, a) {},
    f26d: function(t, e, a) {
        "use strict";
        var o = a("e9ad"),
            r = a.n(o);
        r.a
    },
    f3cb: function(t, e, a) {}
});
//# sourceMappingURL=app.3b28a66b.js.map