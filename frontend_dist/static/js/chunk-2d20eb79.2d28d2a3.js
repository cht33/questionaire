(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20eb79"],{b10d:function(t,s,a){"use strict";a.r(s);var r=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("v-container",[a("v-row",{staticClass:"mt-n3",attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-0",attrs:{cols:"8",md:"10"}},[a("base-material-card",{staticClass:"px-5 py-3",attrs:{icon:"mdi-alert-box",title:"标注任务说明",color:"primary"}},[a("v-container",{staticClass:"pt-6"},[a("v-row",[a("v-col",{staticClass:"text-h4",attrs:{cols:"12"}},[t._v(" "+t._s("　　")+"您好！感谢您参加本次标注实验。 本次标注实验总共包括"+t._s(t.questionNum)+"个任务，大约需要花费"+t._s(Math.round(t.questionNum/3))+"分钟时间。 "),a("br"),t._v(" "+t._s("　　")+"本次任务的场景是地图搜索，需要标注的内容是"),a("strong",[t._v("整个搜索过程的满意度")]),t._v("。 每个任务会给尽可能模拟真实的用户输入状态，给出的信息依次为：用户最终点击的地点；用户输入的查询词；查询词对应的返回结果。每个任务分为两个阶段： "),a("br"),t._v(" "+t._s("　　")+"第一个阶段是观看用户完整的搜索过程。页面上会按时间顺序给出用户的查询词及系统中实时返回的结果列表。 如果两个查询词之间间隔超过5秒，会有倒计时提示。在这个阶段中你可以上下滚动屏幕，查看完整列表。但是"),a("strong",[t._v("请勿点击")]),t._v("翻页按钮， 这个阶段是根据用户真实访问时间进行自动翻页。翻到最后一页时会显示用户点击的地点，此时第一阶段结束。 "),a("br"),t._v(" "+t._s("　　")+'第二个阶段是满意度标注。在这个阶段中你需要根据上一阶段来估计用户对整个搜索过程的满意度。满意度共分为5级， 分别是"非常满意"，”比较满意“， ”一般“，”较不满意“和”非常不满意“。在这个阶段中可以随意翻页进行浏览。 ')]),a("v-col",{staticClass:"text-center h1",attrs:{cols:"12"}},[a("v-btn",{staticClass:"mr-0",attrs:{color:"primary"},on:{click:t.question}},[t._v(" 确认 ")])],1)],1)],1)],1)],1)],1)],1)},e=[],i=a("5530"),n=a("2f62"),o=a("4328"),c=a.n(o),u={computed:Object(i["a"])({},Object(n["c"])(["userName","qid","questionNum","drawer"])),methods:{question:function(){var t=this;this.qid!==this.questionNum?this.$axios.post("/api/question",c.a.stringify({userName:this.userName,qid:this.qid})).then((function(s){t.$store.commit("SET_DRAWER",!t.drawer),t.$router.push({name:"任务",params:s.data})})):this.$router.push("thanks")}}},l=u,m=a("2877"),d=a("6544"),v=a.n(d),h=a("8336"),_=a("62ad"),p=a("a523"),b=a("0fd9"),q=Object(m["a"])(l,r,e,!1,null,null,null);s["default"]=q.exports;v()(q,{VBtn:h["a"],VCol:_["a"],VContainer:p["a"],VRow:b["a"]})}}]);
//# sourceMappingURL=chunk-2d20eb79.2d28d2a3.js.map