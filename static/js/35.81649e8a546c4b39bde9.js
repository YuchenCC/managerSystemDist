webpackJsonp([35],{1164:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(218),i=s(l),r=a(141),n=s(r),o=a(217),u=s(o),c=a(928),_=s(c),m=a(142),p=s(m);e.default={data:function(){return{detail:{id:"",plan_title:"",creator_name:"",start_time:null,end_time:null,create_time:null,plan_content:"",is_summary:1,plan_summary:"",attaches:[],plan_state:"",visit_records:[]}}},mixins:[_.default],mounted:function(){this.getDetail()},methods:{getDetail:function(){function t(){return e.apply(this,arguments)}var e=(0,u.default)(i.default.mark(function t(){var e,a;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this,t.next=3,p.default.plan.getPlanDetail(e.$route.params.planId);case 3:a=t.sent,e.detail=(0,n.default)({},e.detail,a);case 5:case"end":return t.stop()}},t,this)}));return t}(),toNewPlan:function(){this.$router.push({name:"planNew"})}}}},1205:function(t,e,a){e=t.exports=a(867)(),e.push([t.i,"","",{version:3,sources:[],names:[],mappings:"",file:"Detail.vue",sourceRoot:""}])},1227:function(t,e,a){var s=a(1205);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);a(868)("4cd8bec5",s,!0)},1265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"plan-detail"},[a("div",{staticClass:"gan-box"},[a("el-row",{staticClass:"tit box-flex",attrs:{type:"flex",align:"middle"}},[a("i",{staticClass:"el-icon-date fs30 mr10"}),t._v(" "),a("div",{staticClass:"flex-one"},[a("div",{staticClass:"fs20"},[t._v(t._s(t.detail.plan_title))]),t._v(" "),a("div",{staticClass:"tit-info fc9"},[a("span",{staticClass:"mr20"},[t._v(t._s(t.detail.creator_name))]),t._v(" "),a("span",{staticClass:"mr20"},[t._v(t._s(t._f("dateFormat")(t.detail.start_time))+"'~'"+t._s(t._f("dateFormat")(t.detail.end_time)))]),t._v(" "),a("span",[t._v(t._s(t._f("dateFormat")(t.detail.create_time)))])])])]),t._v(" "),a("el-form",{staticClass:"form-text f13 mt15",attrs:{"label-width":"85px",size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"计划内容："}},[a("p",[t._v(t._s(t.detail.plan_content))])])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"附件："}},[a("ul",t._l(t.detail.attaches,function(e,s){return 1==e.attach_type?a("li",{key:s},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.attach_name))])]):t._e()}))])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"计划总结："}},[a("p",[t._v(t._s(t.detail.plan_summary))])])],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:22}},[a("el-form-item",{attrs:{label:"附件："}},[a("ul",t._l(t.detail.attaches,function(e,s){return 2==e.attach_type?a("li",{key:s},[a("a",{attrs:{href:"javascript:;"}},[t._v(t._s(e.attach_name))])]):t._e()}))])],1)],1)],1),t._v(" "),a("div",{staticClass:"visit-log mt15"},[a("div",{staticClass:"tit box-flex"},[a("div",{staticClass:"fs20 flex-one"},[t._v("拜访记录("+t._s(t.detail.visit_records.length)+")")]),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:t.toNewPlan}},[t._v("新建拜访记录")])],1),t._v(" "),a("el-table",{attrs:{data:t.detail.visit_records,"header-align":"center",border:"","header-row-class-name":"header-center"}},[a("el-table-column",{attrs:{label:"拜访客户",prop:"customer_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"所属项目",prop:"project_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"拜访目的",prop:"visit_purpose"}}),t._v(" "),a("el-table-column",{attrs:{label:"客户联系人",prop:"linkman_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"推动计划",prop:"visit_promote"}}),t._v(" "),a("el-table-column",{attrs:{label:"拜访人",prop:"creator_name"}}),t._v(" "),a("el-table-column",{attrs:{label:"拜访时间",prop:"visit_time"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(t._f("dateFormat")(e.row.visit_time)))])]}}])})],1)],1)],1)])},staticRenderFns:[]}},907:function(t,e,a){a(1227);var s=a(215)(a(1164),a(1265),null,null);t.exports=s.exports},928:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(216),i=s(l),r=a(369),n=s(r);e.default={data:function(){return{tableServer:{},tableDataList:[],tableSelectionItems:[],tableTotalCount:0,tableOption:{layout:"total, sizes, prev, pager, next, jumper",pageSizeList:[10,20,30,40]},tableParams:{page_size:10,page_num:1}}},mounted:function(){var t=this;this.initTableServer&&this.initTableServer().then(function(){t.requestData()})},computed:{selectedIds:function(){var t=this;return this.tableParams.selectedItems.map(function(e){return e[t.pk]})}},methods:{requestData:function(){var t=this;this.tableServer.loadTableData&&this.tableServer.extraParams.id&&this.tableServer.loadTableData(this.paramsHandler()).then(function(){t.initialTableData(t.tableServer.dataList())})},paramsHandler:function(){return(0,n.default)({},this.tableParams,this.tableServer.extraParams,this.tableServer.searchParams)},initialTableData:function(t){this.tableDataList=t.data_list,this.tableTotalCount=t.total_num,this.tableParams.page_size===t.page_size&&this.tableParams.page_num===t.page_num||(this.$message("当前页数不匹配"),console.log(t),this.tableParams.page_size=t.page_size,this.tableParams.page_num=t.page_num)},handleSizeChange:function(t){t&&t!==this.tableParams.page_size&&(this.tableParams.page_size=t,this.requestData())},handleCurrentChange:function(t){t&&this.tableParams.page_num!==t&&(this.tableParams.page_num=t,this.requestData())},onSelectionChange:function(t){this.tableSelectionItems=[].concat((0,i.default)(t))},assignQuery:function(t){return(0,n.default)({page_num:this.tableParams.pageNum,page_size:this.tableParams.pageSize},t)},onSearch:function(){this.tableParams.pageNum=1,this._loadList()}}}}});
//# sourceMappingURL=35.81649e8a546c4b39bde9.js.map