(this["webpackJsonpv1-charity-web"]=this["webpackJsonpv1-charity-web"]||[]).push([[0],{106:function(e,s,t){},377:function(e,s,t){},390:function(e,s,t){},420:function(e,s,t){},473:function(e,s,t){},475:function(e,s,t){},509:function(e,s,t){"use strict";t.r(s);t(112),t(121),t(122),t(123),t(124),t(125),t(126),t(127),t(128),t(129),t(130),t(131),t(132),t(133),t(134),t(174),t(176),t(177),t(178),t(179),t(180),t(182),t(136),t(185),t(186),t(63),t(190),t(191),t(193),t(194),t(195),t(196),t(197),t(198),t(202),t(203),t(204),t(205),t(206),t(207),t(208),t(142),t(143),t(210),t(212),t(213),t(214),t(215),t(216),t(217),t(218),t(219),t(220),t(221),t(222),t(223),t(224),t(225),t(226),t(145),t(227),t(228),t(229),t(230),t(231),t(232),t(233),t(234),t(235),t(237),t(239),t(240),t(242),t(243),t(244),t(246),t(247),t(248),t(249),t(250),t(251),t(252),t(254),t(255),t(256),t(257),t(258),t(259),t(260),t(261),t(262),t(97),t(263),t(264),t(265),t(266),t(272),t(273),t(274),t(275),t(276),t(277),t(279),t(280),t(281),t(282),t(283),t(284),t(285),t(286),t(149),t(289),t(290),t(151),t(291),t(292),t(293),t(294),t(82),t(295),t(296),t(299),t(300),t(301),t(302),t(303),t(304),t(305),t(306),t(307),t(308),t(309),t(310),t(311),t(312),t(313),t(314),t(315),t(316),t(317),t(318),t(319),t(320),t(321),t(322),t(328),t(329),t(330),t(331),t(332),t(333),t(334),t(335),t(336),t(337),t(338),t(339),t(340),t(341),t(342),t(343),t(344),t(345),t(346),t(347),t(348),t(349),t(350),t(351),t(352),t(353),t(354),t(355),t(356),t(357),t(358),t(359),t(360),t(361),t(363),t(364),t(104),t(367),t(368),t(369),t(371),t(158);var a=t(2),c=t.n(a),n=t(107),i=t.n(n),o=(t(420),t(159),t(421),t(469),t(473),t(61)),l=t(21),r=t(161),d=t(60),j=(t(475),t(4)),m=(t(377),t(0));var b=function(){var e=Object(a.useState)(!1),s=Object(j.a)(e,2),t=s[0],c=s[1];return Object(m.jsxs)("header",{className:"headerWrap",children:[Object(m.jsx)("button",{className:"logoTop",onClick:function(){return window.location.href="/"}}),Object(m.jsxs)("div",{className:"headerRight",children:[Object(m.jsxs)("div",{className:"sns",children:[Object(m.jsx)("a",{href:"https://twitter.com/KmonsterCNFT",target:"_blank",className:"twitter",rel:"noreferrer"}),Object(m.jsx)("a",{href:"mailto:cardanocomm@gmail.com",target:"_blank",className:"gmail",rel:"noreferrer"})]}),Object(m.jsxs)("div",{className:"nav",children:[Object(m.jsxs)(o.b,{to:"/roadmap",className:"roadmap",children:[Object(m.jsx)("div",{className:"navIcon"}),Object(m.jsx)("div",{className:"navText",children:"Roadmap"})]}),Object(m.jsxs)(o.b,{to:"/guide",className:"guide",children:[Object(m.jsx)("div",{className:"navIcon"}),Object(m.jsx)("div",{className:"navText",children:"Guide"})]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"hamburger",onClick:function(){return c(!0)}}),Object(m.jsxs)("div",{className:"submenu",style:{display:t?"block":"none"},children:[Object(m.jsx)("div",{className:"close",onClick:function(){return c(!1)}}),Object(m.jsxs)("div",{className:"moNav",children:[Object(m.jsxs)(o.b,{to:"/roadmap",className:"roadmap",children:[Object(m.jsx)("div",{className:"navIcon"}),Object(m.jsx)("div",{className:"navText",children:"Roadmap"})]}),Object(m.jsxs)(o.b,{to:"/guide",className:"guide",children:[Object(m.jsx)("div",{className:"navIcon"}),Object(m.jsx)("div",{className:"navText",children:"Guide"})]})]}),Object(m.jsxs)("div",{className:"moSns",children:[Object(m.jsx)("a",{href:"https://twitter.com/KmonsterCNFT",target:"_blank",className:"twitter",rel:"noreferrer"}),Object(m.jsx)("a",{href:"mailto:cardanocomm@gmail.com",target:"_blank",className:"gmail",rel:"noreferrer"})]})]})]})]})]})},h=t(7),u=t(30),O=t.n(u),x=t(84),p=(t(106),t(393));t.n(p).a.create({baseURL:"https://cnft-donation.io",timeout:18e4,headers:{}});var v=function(e){var s=e.data,t=e.open,c=e.onClose,n=(e.onAction,Object(a.useState)({nftNameKor:"",imgUrl:"",age:"",description:"",nftPrice:"",targetQuantity:0,mintCount:0,closed:!1})),i=Object(j.a)(n,2),o=i[0],l=i[1],r=Object(a.useState)(!1),d=Object(j.a)(r,2),b=d[0],u=d[1],O=Object(a.useState)(0),x=Object(j.a)(O,2),p=x[0],v=x[1],g=Object(a.useState)(!1),N=Object(j.a)(g,2);return N[0],N[1],Object(a.useEffect)((function(){if(s)return l(Object(h.a)({},s)),v(s.remain),null===s.closed||s.closed||(s.targetQuantity-s.mintCount<=0?u(!0):u(!1)),function(){return clearInterval(null)}}),[s]),Object(m.jsxs)("div",{className:"popupWrap",style:{display:t?"block":"none"},children:[Object(m.jsxs)("div",{className:"popup1",style:{display:t?"block":"none"},children:[Object(m.jsx)("button",{className:"popupClose",onClick:function(){c()}}),Object(m.jsxs)("div",{className:"popupLeft",children:[!0===o.closed&&Object(m.jsx)("div",{className:"closed",style:{display:"block"}}),!0===b&&Object(m.jsx)("div",{className:"soldOut",style:{display:"block"}}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{className:"popupImg",children:Object(m.jsx)("img",{src:o.imgUrl,alt:"copy url"})})]}),Object(m.jsxs)("div",{className:"popupRight",children:[Object(m.jsx)("div",{className:"popupTitle",children:o.name}),Object(m.jsxs)("div",{className:"popupText",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"popupSubtitle",children:"Age"}),Object(m.jsx)("span",{children:o.age})]}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"popupSubtitle",children:"Story"})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("span",{children:o.description})}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("br",{})}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"popupSubtitle",children:"Remain"}),Object(m.jsx)("span",{className:"blue",children:p})]})]})]})]}),Object(m.jsx)("div",{className:"popupBg",onClick:function(){c()}})]})},g=t(394),N=t.n(g);var f=function(e){var s=e.data,t=e.quantityData,c=e.open,n=e.onClose,i=Object(a.useState)({address:"",nftPrice:""}),o=Object(j.a)(i,2),l=o[0],r=o[1];return Object(a.useEffect)((function(){s&&r(Object(h.a)({},s))}),[c]),Object(m.jsxs)("div",{className:"popupWrap",style:{display:c?"block":"none"},children:[Object(m.jsxs)("div",{className:"popup2",style:{display:c?"block":"none"},children:[Object(m.jsx)("button",{className:"popupClose",onClick:function(){return n()}}),Object(m.jsx)("div",{className:"popupTitle",children:"Pending payment confirmation"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{className:"popupText",children:["Your order has been approved. ",Object(m.jsx)("br",{}),"Send Ada using the information below."]}),Object(m.jsx)("div",{className:"popupCode",style:{display:"inline-block"},children:Object(m.jsx)(N.a,{value:l.address,size:150})}),Object(m.jsxs)("div",{className:"popupText",children:[Object(m.jsx)("div",{className:"popupSubtitle",children:"Address"}),Object(m.jsxs)("div",{className:"popupBox",children:[Object(m.jsx)("input",{type:"text",readOnly:!0,value:l.address}),Object(m.jsx)("button",{className:"btnCopy",onClick:function(){return navigator.clipboard.writeText(l.address)},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"})})})]}),Object(m.jsx)("div",{className:"popupSubtitle",children:"Amount"}),Object(m.jsxs)("div",{className:"popupBox",children:[Object(m.jsx)("input",{type:"text",readOnly:!0,value:15*t.quantity})," ADA",Object(m.jsx)("button",{className:"btnCopy",onClick:function(){return navigator.clipboard.writeText(l.nftPrice/1e6)},children:Object(m.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(m.jsx)("path",{d:"M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"})})})]}),Object(m.jsx)("div",{className:"popupSubtitle",children:"Important"}),Object(m.jsxs)("div",{className:"popupBox red",style:{textAlign:"left"},children:["* You must use a Cardano Shelley-Era wallet such as",Object(m.jsx)("a",{href:"https://daedaluswallet.io/",target:"_blank",rel:"noreferrer",children:"Daedalus"}),",",Object(m.jsx)("a",{href:"https://yoroi-wallet.com/",target:"_blank",rel:"noreferrer",children:"Yoroi"}),Object(m.jsx)("br",{}),"* It might take a minute your addressTransaction to be reflected after payment.",Object(m.jsx)("br",{}),"* It is based on the order in which Ada is transferred to the server wallet, ",Object(m.jsx)("br",{}),"\xa0\xa0\xa0\xa0 not the order in which the purchase button was pressed.",Object(m.jsx)("br",{}),"* If the purchase fails or the amount does not match, ",Object(m.jsx)("br",{}),"\xa0\xa0\xa0\xa0The amount transferred will be automatically refunded excluding fees.",Object(m.jsx)("br",{})]})]})]}),Object(m.jsx)("div",{className:"popupBg",onClick:function(){return n()}})]})};var y=function(e){var s=e.data,t=e.open,c=e.onClose,n=e.onAction,i=Object(a.useState)({nftNameKor:"",imgUrl:"",age:"",description:"",nftPrice:"",targetQuantity:0,mintCount:0,closed:!1}),o=Object(j.a)(i,2),l=o[0],r=o[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),u=(b[0],b[1]),O=Object(a.useState)(1),x=Object(j.a)(O,2),p=x[0],v=x[1];return Object(a.useEffect)((function(){s&&(r(Object(h.a)({},s)),s.targetQuantity-s.mintCount<=0?u(!0):u(!1))}),[s]),Object(m.jsxs)("div",{className:"popupWrap",style:{display:t?"block":"none"},children:[Object(m.jsxs)("div",{className:"popup3",style:{display:t?"block":"none"},children:[Object(m.jsx)("button",{className:"popupClose",onClick:function(){v(1),c()}}),Object(m.jsxs)("div",{className:"buyNumber",children:[Object(m.jsx)("div",{className:"popupTitle",children:"Quantity"}),Object(m.jsxs)("div",{className:"quantity",children:[Object(m.jsx)("button",{className:"quantity-button quantity-down",onClick:function(){p>1&&v(p-1)}}),Object(m.jsx)("input",{readOnly:!0,type:"number",min:"1",max:"10",step:"1",value:p}),Object(m.jsx)("button",{className:"quantity-button quantity-up",onClick:function(){p<10&&v(p+1)}}),Object(m.jsx)("div",{className:"quantity-nav"})]})]}),Object(m.jsxs)("div",{className:"popupText",children:[Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"popupSubtitle",children:"Quantity"}),Object(m.jsx)("span",{className:"blue",children:p})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"popupSubtitle",children:"Price"}),Object(m.jsxs)("span",{className:"blue",children:[15*p,"ADA"]})]}),Object(m.jsx)("button",{className:"btnBuy",onClick:function(){s.quantity=p,v(1),n(l)},children:"BUY"})]})]}),Object(m.jsx)("div",{className:"popupBg",onClick:function(){v(1),c()}})]})},w={kr:{title:"\ud504\ub85c\uc81d\ud2b8 \uc815\ubcf4",desc:"\ub3d9\uc544\uc2dc\uc544\uc5d0\ub294 \ub9ce\uc740 \uc2e0\ud654, \uc124\ud654, \ub3d9\ud654\uac00 \uc788\uc2b5\ub2c8\ub2e4.<br/>\n    \uc774 \uc774\uc57c\uae30 \uc18d\uc5d0\ub294 \ub9ce\uc740 \uc2e0\uacfc \uc694\uad34\ub4e4\uc774 \ub4f1\uc7a5\ud558\uace0 \uc0ac\ub78c\ub4e4\uacfc \ud568\uaed8\ud558\uba70 \uc0c8\ub85c\uc6b4 \uc774\uc57c\uae30\ub4e4\uc744 \ucc3d\uc870\ud558\uc600\uc2b5\ub2c8\ub2e4.<br/>\n    \uc774 \uc774\uc57c\uae30\ub4e4\uc774 Cardano\uc640 \ub9cc\ub098 Cardanian\uacfc \ud568\uaed8 \uc0c8\ub85c\uc6b4 \ub3d9\ud654\ub97c \uc368\ub0b4\ub824 \uac11\ub2c8\ub2e4.<br/>\n    K-MONSTERZ\ub97c \ud1b5\ud574 \uc2e0, \uc694\uc815, \uc694\uad34\ub4e4\uc774 \ub2f9\uc2e0\uc744 \ub9cc\ub098 \uc0c8\ub85c\uc6b4 \uac00\uce58\ub97c \ub9cc\ub4e4\uc5b4 \ub0bc \uac83 \uc785\ub2c8\ub2e4.<br/>\n    \ub2f9\uc2e0\ub9cc\uc744 \uc9c0\ud0a4\ub294 \uc2e0\uc744 \uac00\uc9c0\uc138\uc694.<br/>\n    \ub2f9\uc2e0\ub9cc\uc744 \uc704\ud558\ub294 \uc694\uc815\uc744 \uac00\uc9c0\uc138\uc694.<br/>\n    \ub2f9\uc2e0\uacfc \ud568\uaed8 \ub180\uace0 \uc2f6\uc740 \uc694\uad34\uac00 \uc788\uc2b5\ub2c8\ub2e4.<br/>\n    K-MONSTERZ\uc758 CNFT\ub294 \uc131\uc7a5\ud558\ub294 \uc2a4\ud1a0\ub9ac\ub97c \uac00\uc9c0\uace0 \uc788\uc2b5\ub2c8\ub2e4.<br/>\n    \uae30\ub300\ud558\uc138\uc694. \uc774\uc81c \uc0c8\ub85c\uc6b4 \uc138\uacc4\uac00 Cardano\ub85c \ub4e4\uc5b4\uc635\ub2c8\ub2e4."},jp:{title:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u3064\u3044\u3066",desc:"\u6771\u30a2\u30b8\u30a2\u306b\u306f\u591a\u304f\u306e\u795e\u8a71\u3001\u7269\u8a9e\u3001\u304a\u3068\u304e\u8a71\u304c\u4f1d\u308f\u3063\u3066\u304d\u307e\u3059\u3002<br/> \n    \u3053\u306e\u7269\u8a9e\u3067\u306f\u3001\u591a\u304f\u306e\u795e\u3005\u3084\u5996\u602a\u304c\u767b\u5834\u3057\u3001\u4eba\u3005\u3068\u306e\u65b0\u3057\u3044\u7269\u8a9e\u3092\u5275\u9020\u3057\u307e\u3057\u305f\u3002<br/> \n    \u3053\u306e\u8a71\u3005\u3068\u30ab\u30eb\u30c0\u30ce\u304c\u51fa\u4f1a\u3063\u3066<br/> \n    \u65b0\u3057\u3044\u8a71\u3092\u4f5c\u308b\u30ab\u30eb\u30c0\u30cb\u30a2\u30f3\u3068\u7dd2\u306b\u65b0\u3057\u3044\u7ae5\u8a71\u3092\u66f8\u304d\u4e0b\u308d\u3057\u307e\u3059\u3002<br/> \n    K-MONSTERZ\u3092\u901a\u3058\u3066\u3001\u795e\u3005\u3001\u5996\u7cbe\u3001\u30e2\u30f3\u30b9\u30bf\u30fc\u304c\u3042\u306a\u305f\u306b\u51fa\u4f1a\u3044\u3001\u65b0\u3057\u3044\u4fa1\u5024\u3092\u751f\u307f\u51fa\u3059\u3067\u3057\u3087\u3046\u3002<br/> \n    \u3042\u306a\u305f\u306e\u305f\u3081\u3060\u3051\u306e\u795e\u3092\u6240\u6709\u3057\u3066\u304f\u3060\u3055\u3044\u3002<br/> \n    \u3042\u306a\u305f\u3060\u3051\u3092\u5b88\u308b\u5996\u7cbe\u3092\u6240\u6709\u3057\u3066\u304f\u3060\u3055\u3044\u3002<br/> \n    \u3042\u306a\u305f\u3068\u4e00\u7dd2\u306b\u904a\u3073\u305f\u3044\u5996\u602a\u304c\u3044\u307e\u3059\u3002<br/> \n    K-MONSTERZ\u306eCNFT\u306b\u306f\u6210\u9577\u3059\u308b\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u6301\u3063\u3066\u3044\u307e\u3059\u3002<br/> \n    \u5f85\u3057\u3066\u3066\u304f\u3060\u3055\u3044\u3002\u4eca\u3001\u65b0\u3057\u3044\u4e16\u754c\u304c\u30ab\u30eb\u30c0\u30ce\u306b\u3084\u3063\u3066\u304d\u307e\u3059\u3002"},en:{title:"About the project",desc:"There are many myths, tales and fairy tales in East Asia.<br/>\n    In this story, many gods and youkai appeared and created new stories with people.<br/>\n    These stories meet Cardano and work with Cardanian to write a new fairy tale.<br/>\n    Through K-MONSTERZ, gods, fairies, and monsters will meet you and create new values.<br/>\n    Have a god who protects only you.<br/>\n    Have a fairy just for you.<br/>\n    There are youkai who want to play with you.<br/>\n    K-MONSTERZ's CNFT has a growing story.<br/>\n    To expect. Now a new world is coming to Cardano."}},C=Object(d.b)({key:"languageState",default:"en"}),I=(Object(d.c)({key:"languageData",set:function(e,s){return(0,e.set)(C,s)}}),{"GUMI (Common)":{id:1,closed:!0,name:"GUMI (Common)",imgUrl:"img/gumi(N).png",age:"7(400)Years",description:"She is a nine-tailed fox who can only become a human when he meets someone who truly loves him. Gumi, who has a lively personality, has only had unrequited love for 400 years. Gumi, who has always had unrequited love because of her young appearance, becomes infinitely shy in front of the person she likes. Can Gumi meet a human who loves her in Cardano?",remain:29},"GUMI (Rare)":{id:2,closed:!0,name:"GUMI (Rare)",imgUrl:"img/gumi(R).png",age:"7(400)Years",description:"She is a nine-tailed fox who can only become a human when he meets someone who truly loves him. Gumi, who has a lively personality, has only had unrequited love for 400 years. Gumi, who has always had unrequited love because of her young appearance, becomes infinitely shy in front of the person she likes. Can Gumi meet a human who loves her in Cardano?",remain:0},"DOBI (Common)":{id:3,closed:!0,name:"DOBI (Common)",imgUrl:"img/dobi(N).png",age:"7(400)Years",description:"It is a DOKAEBI that is born from things. This DOKAEBI was born from a sword on the battlefield. Born from the sword of a young soldier, his wish for play is strongly projected. The DOKAEBI is looking for a friend to play with him genuinely. Can the DOKAEBI meet a human who loves him in Cardano?",remain:52},"DOBI (Rare)":{id:4,closed:!0,name:"DOBI (Rare)",imgUrl:"img/dobi(R).png",age:"7(400)Years",description:"It is a DOKAEBI that is born from things. This DOKAEBI was born from a sword on the battlefield. Born from the sword of a young soldier, his wish for play is strongly projected. The DOKAEBI is looking for a friend to play with him genuinely. Can the DOKAEBI meet a human who loves him in Cardano?",remain:0}}),T={"GUMI (Common)":{id:9,closed:!1,name:"GUMI (Common)",imgUrl:"img/gumi2(N).png",age:"16(409)Years",description:"GUMI's tail, which had not grown before, began to grow. GUMI found someone she loved so much in Cardano. Gumi, who has become seven tails, greets you. Can you be the love of Gumi? Remember that you have to be with all the times of Gumi to become the true love of Gumi.",remain:400},"GUMI (Rare)":{id:6,closed:!1,name:"GUMI (Rare)",imgUrl:"img/gumi2(R).png",age:"16(409)Years",description:"GUMI's tail, which had not grown before, began to grow. GUMI found someone she loved so much in Cardano. Gumi, who has become seven tails, greets you. Can you be the love of Gumi? Remember that you have to be with all the times of Gumi to become the true love of Gumi.",remain:200},"DOBI (Common)":{id:5,closed:!1,name:"DOBI (Common)",imgUrl:"img/dobi2(N).png",age:"16(109)Years",description:"DOBI, born of a sword, has a sword in his hand. He's now fighting like a game. It depends on Cardano's choice whether DOBI will become a true warrior or a monster. Remember, the only person who watched all his times is the one who can guide DOBI's fight right.",remain:400},"DOBI (Rare)":{id:8,closed:!1,name:"DOBI (Rare)",imgUrl:"img/dobi2(R).png",age:"16(109)Years",description:"DOBI, born of a sword, has a sword in his hand. He's now fighting like a game. It depends on Cardano's choice whether DOBI will become a true warrior or a monster. Remember, the only person who watched all his times is the one who can guide DOBI's fight right.",remain:200},"KIMCHASA (Unique)":{id:7,closed:!1,name:"KIMCHASA (Unique)",imgUrl:"img/kimchasa(U).png",age:"18(1004)Years",description:"KIMCHASA is an angel who manages death. He has absolute power over death. This angel peacefully leads the soul of the dead to the afterlife. KIMCHASA hates confusion that destroys peace like war.So he's monitoring the DOBI. If DOBI becomes a monster in Cardano, KIMCHASA wants to kill his soul.",remain:200}},k=["January","February","March","April","May","June","July","August","September","October","November","December"];var A=function(){var e=new Date(Date.UTC(2021,9,3,13,0,0)),s=new Date,t=Object(a.useState)(),c=Object(j.a)(t,2),n=c[0],i=c[1],o=Object(a.useState)(0),l=Object(j.a)(o,2),r=(l[0],l[1],Object(d.d)(C)),b=e.getTime()-Date.now(),h=Math.floor(b/864e5),u=Math.floor(b%864e5/36e5),p=Math.floor(b%36e5/6e4),g=Math.floor(b%6e4/1e3);u<10&&(u="0"+u),p<10&&(p="0"+p),g<10&&(g="0"+g);var N="".concat(h,"Days ").concat(u,":").concat(p,":").concat(g),A=Object(a.useState)(null),M=Object(j.a)(A,2),S=(M[0],M[1],e.getMonth()!==s.getUTCMonth()||e.getDate()<s.getUTCDate()),D=Object(a.useState)(!1),B=Object(j.a)(D,2),U=B[0],R=B[1],G=Object(a.useState)(null),K=Object(j.a)(G,2),E=K[0],q=K[1],H=Object(a.useState)(!1),W=Object(j.a)(H,2),Y=W[0],F=W[1],P=Object(a.useState)(null),_=Object(j.a)(P,2),z=_[0],Q=_[1],Z=Object(a.useState)(!1),J=Object(j.a)(Z,2),L=J[0],V=J[1],X=Object(a.useState)({}),$=Object(j.a)(X,2),ee=$[0];$[1],setInterval((function(){var s=e.getTime()-Date.now(),t=Math.floor(s/864e5),a=Math.floor(s%864e5/36e5),c=Math.floor(s%36e5/6e4),n=Math.floor(s%6e4/1e3);a<10&&(a="0"+a),c<10&&(c="0"+c),n<10&&(n="0"+n),i("".concat(t,"Days ").concat(a,":").concat(c,":").concat(n))}),1e3),Object(a.useEffect)((function(){Object(x.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}),[]);var se=function(e){V(!1),F(!0),Q(e)};return Object(m.jsx)("div",{className:"main",children:Object(m.jsxs)("div",{className:"contentsWrap",children:[Object(m.jsxs)("div",{className:"mainImg",children:[Object(m.jsxs)("div",{className:"characterWrap",children:[Object(m.jsxs)("div",{className:"mainTitle",style:{display:S?"none":"block"},children:["COMING SOON",Object(m.jsx)("br",{}),Object(m.jsxs)("span",{className:"countDate",children:[k[e.getUTCMonth()]," ",e.getUTCDate(),"th ",e.getUTCHours()+(e.getUTCHours()>12?"PM":"AM")," (UTC)"]})]}),Object(m.jsxs)("div",{className:"mainTitle2",style:{display:S?"block":"none"},children:[Object(m.jsx)("b",{children:"Series2"}),Object(m.jsx)("br",{}),Object(m.jsxs)("span",{className:"mainSubtitle",children:["Teenage and Special NFT",Object(m.jsx)("br",{})]}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("span",{className:"countDate",children:[k[e.getUTCMonth()]," ",e.getUTCDate(),"th ",e.getUTCHours()+(e.getUTCHours()>12?"PM":"AM")," (UTC)"]}),Object(m.jsx)("p",{className:"countDown",children:void 0===n?N:n})]})]}),Object(m.jsx)("div",{className:"character"})]}),Object(m.jsx)("div",{className:"mainBottom"})]}),Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsx)("div",{className:"contentsTitle",children:w[r].title}),Object(m.jsx)("div",{className:"contentsText",dangerouslySetInnerHTML:{__html:w[r].desc}}),Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsx)("div",{className:"contentsTitle",children:"Series 2"}),Object(m.jsxs)("div",{className:"contentsBox",children:[Object(m.jsxs)("div",{className:"collection",onClick:function(){q(T["GUMI (Common)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"soldOut"}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/gumi2(N).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"GUMI (Common)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(T["GUMI (Rare)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"soldOut"}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/gumi2(R).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"GUMI (Rare)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(T["DOBI (Common)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"soldOut"}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/dobi2(N).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"DOBI (Common)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(T["DOBI (Rare)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"soldOut"}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/dobi2(R).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"DOBI (Rare)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(T["KIMCHASA (Unique)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"soldOut"}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/kimchasa(U).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"KIMCHASA (Unique)"})]})]}),Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsx)("div",{className:"contentsTitle",children:"Series 1"}),Object(m.jsxs)("div",{className:"contentsBox",children:[Object(m.jsxs)("div",{className:"collection",onClick:function(){q(I["GUMI (Common)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"closed",style:{display:"block"}}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/gumi(N).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"GUMI (Common)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(I["GUMI (Rare)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"closed",style:{display:"block"}}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/gumi(R).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"GUMI (Rare)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(I["DOBI (Common)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"closed",style:{display:"block"}}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/dobi(N).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"DOBI (Common)"})]}),Object(m.jsxs)("div",{className:"collection",onClick:function(){q(I["DOBI (Rare)"]),R(!0)},children:[Object(m.jsxs)("div",{className:"collectionImg",children:[Object(m.jsx)("div",{className:"closed",style:{display:"block"}}),Object(m.jsx)("div",{className:"imgArea",children:Object(m.jsx)("img",{src:"img/dobi(R).png",alt:"copy url"})})]}),Object(m.jsx)("div",{className:"collectionText",children:"DOBI (Rare)"})]})]}),Object(m.jsx)(y,{data:ee,open:L,onClose:function(){V(!1)},onAction:function(){return se()}}),Object(m.jsx)(v,{data:E,open:U,onClose:function(){return R(!1)},onAction:function(e){return se(e)}}),Object(m.jsx)(f,{data:z,quantityData:ee,open:Y,onClose:function(){return F(!1)}})]}),Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsx)("div",{className:"blackArea"})]})})},M=(t(390),t.p+"static/media/guide3.e97f5e47.png"),S=t.p+"static/media/guide4.79d60c7a.png",D=t.p+"static/media/guide5.6f7f1cba.png";var B=function(){return Object(m.jsxs)("div",{className:"guide",children:[Object(m.jsxs)("div",{className:"contentsWrap",children:[Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsxs)("div",{className:"guideWrap",children:[Object(m.jsx)("div",{className:"contentsTitle",children:"Guide"}),Object(m.jsx)("div",{className:"contentsText",children:"1. Click the buy button."}),Object(m.jsx)("div",{className:"guideImg",children:Object(m.jsx)("img",{src:D,alt:"guide1"})}),Object(m.jsx)("div",{className:"contentsText",children:"2. After choosing the quantity, Click the buy button."}),Object(m.jsx)("div",{className:"guideImg",children:Object(m.jsx)("img",{src:S,alt:"guide2"})}),Object(m.jsxs)("div",{className:"contentsText",children:["3. Copy both the Amount and the Wallet Address.",Object(m.jsx)("br",{})," Send the Amount to the Wallet Address from your Yoroi or Daedalus wallet."]}),Object(m.jsx)("div",{className:"guideImg",children:Object(m.jsx)("img",{src:M,alt:"guide3"})}),Object(m.jsx)("div",{className:"contentsText",children:"4. Wait for your transaction to process."}),Object(m.jsx)("div",{className:"contentsText",children:"5. If the purchase was successful, NFT will be sent to the wallet address that payment was sent from."}),Object(m.jsx)("div",{className:"contentsText",children:"6. If the purchase fails or the amount does not match, The amount transferred will be automatically refunded excluding fees."}),Object(m.jsx)("div",{className:"contentsText",children:Object(m.jsx)("span",{children:"* It is based on the order in which Ada is transferred to the server wallet, not the order in which the purchase button was pressed."})})]})]}),Object(m.jsx)("div",{className:"blackArea"})]}),Object(m.jsx)("div",{className:"guideBg",children:Object(m.jsx)("div",{className:"guideBottom"})})]})};var U=function(){return Object(m.jsxs)("div",{className:"guide",children:[Object(m.jsxs)("div",{className:"contentsWrap",children:[Object(m.jsxs)("div",{className:"contents",children:[Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsx)("div",{className:"blackArea"}),Object(m.jsxs)("div",{className:"guideWrap",children:[Object(m.jsx)("div",{className:"contentsTitle",children:"Roadmap"}),Object(m.jsxs)("div",{className:"contentsText",children:["Our NFTs are designed to purchase NFTs that are finally sold only after continuing to purchase by series.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Our goal is to make short animations.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The characters of these NFTs appear.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"The final NFT buyer of the series is embodied as a character in the anime.",Object(m.jsx)("br",{}),Object(m.jsx)("br",{}),"Please remember our goals."]})]})]}),Object(m.jsx)("div",{className:"blackArea"})]}),Object(m.jsx)("div",{className:"guideBg",children:Object(m.jsx)("div",{className:"guideBottom"})})]})};var R=function(){return Object(m.jsx)("footer",{className:"footerWrap",children:Object(m.jsxs)("div",{className:"footerArea",children:[Object(m.jsx)("div",{className:"footerTop",children:Object(m.jsx)("button",{className:"logoBottom",onClick:function(){return window.location.href="/"}})}),Object(m.jsx)("div",{className:"footerBottom",children:Object(m.jsxs)("address",{children:["Team K-Monster",Object(m.jsx)("br",{}),"Copyright \u24d2 Team K-Monster. All rights reserved",Object(m.jsx)("br",{})]})})]})})};var G=function(){return Object(m.jsx)(o.a,{children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(b,{}),r.isIE||r.isEdge?alert("IE / Edge is not supported. Download Chrome/Opera/Firefox"):null,Object(m.jsx)(l.a,{exact:!0,path:"/",component:A}),Object(m.jsx)(l.a,{path:"/Guide",component:B}),Object(m.jsx)(l.a,{path:"/Roadmap",component:U}),Object(m.jsx)(R,{})]})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[509,1,2]]]);
//# sourceMappingURL=main.3c766910.chunk.js.map