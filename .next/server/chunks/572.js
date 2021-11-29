"use strict";
exports.id = 572;
exports.ids = [572];
exports.modules = {

/***/ 9572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "swr"
var external_swr_ = __webpack_require__(549);
var external_swr_default = /*#__PURE__*/__webpack_require__.n(external_swr_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./components/Spotify.js








function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
function Spotify({ navigation  }) {
    const spotifyRefreshInterval = 60 * 1000; //60,000ms = 60s = 1min
    const fetcher = (url)=>fetch(url).then((r)=>r.json()
        )
    ;
    // TODO: convert SWR use to useEffect
    // cannot assign any variable name to useSWR, only data, error are valid
    const spotifyData = external_swr_default()('/api/spotify', fetcher, {
        refreshInterval: spotifyRefreshInterval
    }).data;
    console.log(spotifyData);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
            as: "div",
            className: "ml-3 relative",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu.Button, {
                        className: "bg-transparent flex text-white font-semibold rounded-full pl-3 pr-3 p-1 hover:bg-black ",
                        children: [
                            (spotifyData === null || spotifyData === void 0 ? void 0 : spotifyData.isPlaying) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: "hidden lg:block h-8 whitespace-pre",
                                children: [
                                    spotifyData.title,
                                    " "
                                ]
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-8 p-1",
                                fill: "currentColor",
                                viewBox: "0 0 16 16",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.669 11.538a.498.498 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686zm.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858zm.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288z"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition, {
                    as: external_react_.Fragment,
                    enter: "transition ease-out duration-100",
                    enterFrom: "transform opacity-0 scale-95",
                    enterTo: "transform opacity-100 scale-100",
                    leave: "transition ease-in duration-75",
                    leaveFrom: "transform opacity-100 scale-100",
                    leaveTo: "transform opacity-0 scale-95",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu.Items, {
                        className: "origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                                children: ({ active  })=>{
                                    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: (spotifyData === null || spotifyData === void 0 ? void 0 : spotifyData.isPlaying) ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            href: spotifyData.songUrl,
                                            className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    src: spotifyData.albumImageUrl,
                                                    alt: spotifyData.album
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "font-bold",
                                                    children: spotifyData.title
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    children: [
                                                        "(",
                                                        spotifyData.artist,
                                                        ")"
                                                    ]
                                                })
                                            ]
                                        }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: 'block px-4 py-2 text-sm text-gray-700',
                                            children: "Probably Sleeping."
                                        })
                                    }));
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Menu.Item, {
                                children: ({ active  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        href: "https://open.spotify.com/user/shivampoddar1997",
                                        className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700'),
                                        children: "Open Spotify profile ↗️"
                                    })
                            })
                        ]
                    })
                })
            ]
        })
    }));
};

;// CONCATENATED MODULE: ./components/Header.js










function Header_classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
let navigation = [
    {
        name: 'Home',
        href: '',
        current: false
    },
    {
        name: 'Blog',
        href: '/blog',
        current: false
    },
    {
        name: 'Projects',
        href: '#',
        current: false
    },
    {
        name: 'About',
        href: '#',
        current: false
    },
    {
        name: 'Contact',
        href: '#',
        current: false
    }, 
];
function Header({ current_page  }) {
    navigation.map((item)=>{
        if (item.name === current_page) {
            navigation[0].current = true;
        }
    });
    const spotifyRefreshInterval = 30 * 1000; //30,000ms = 30s
    const fetcher = (url)=>fetch(url).then((r)=>r.json()
        )
    ;
    // TODO: convert SWR use to useEffect
    // cannot assign any variable name to useSWR, only data, error are valid
    const spotifyData = external_swr_default()('/api/spotify', fetcher, {
        refreshInterval: spotifyRefreshInterval
    }).data;
    console.log(spotifyData);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure, {
                as: "nav",
                className: "bg-gray-600",
                children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative flex items-center justify-between h-16",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-y-0 left-0 flex items-center sm:hidden",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Disclosure.Button, {
                                                className: "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Open main menu"
                                                    }),
                                                    open ? /*#__PURE__*/ jsx_runtime_.jsx(outline_.XIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    }) : /*#__PURE__*/ jsx_runtime_.jsx(outline_.MenuIcon, {
                                                        className: "block h-6 w-6",
                                                        "aria-hidden": "true"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex-1 flex items-center justify-center sm:items-stretch sm:justify-start",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "flex-shrink-0 flex items-center",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        className: "block lg:hidden h-8 w-auto text-white font-bold font-mono",
                                                        children: " shivam_poddar "
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "hidden sm:block sm:ml-6",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex space-x-4",
                                                        children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                href: item.href,
                                                                className: Header_classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium'),
                                                                "aria-current": item.current ? 'page' : undefined,
                                                                children: item.name
                                                            }, item.name)
                                                        )
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Spotify, {
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure.Panel, {
                                className: "sm:hidden",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "px-2 pt-2 pb-3 space-y-1",
                                    children: navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Disclosure.Button, {
                                            as: "a",
                                            href: item.href,
                                            className: Header_classNames(item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium'),
                                            "aria-current": item.current ? 'page' : undefined,
                                            children: item.name
                                        }, item.name)
                                    )
                                })
                            })
                        ]
                    })
            })
        })
    }));
};


/***/ })

};
;