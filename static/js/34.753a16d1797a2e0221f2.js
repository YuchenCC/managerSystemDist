webpackJsonp([34],{1169:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(928),i=function(t){return t&&t.__esModule?t:{default:t}}(s);a.default={data:function(){return{project:{}}},mixins:[i.default],methods:{loadDetail:function(){},addVisitRecord:function(){console.log("addVisitRecord")}},created:function(){}}},1212:function(t,a,e){a=t.exports=e(867)(),a.push([t.i,".project-detail .tit{padding-top:10px;padding-bottom:10px;margin-bottom:20px;border-bottom:1px solid #ddd}.project-detail .detail-main{margin-left:30px;margin-right:30px}.project-detail .detail-info{margin-top:20px;line-height:1.6}.project-detail .detail-info .sub-label{width:90px;text-align:right;padding-right:10px;color:gray}.project-detail .detail-info .el-col{margin-bottom:10px}","",{version:3,sources:["D:/桌面/personal/project/web-project/src/views/project/detail/index.vue"],names:[],mappings:"AACA,qBACE,iBAAkB,AAClB,oBAAqB,AACrB,mBAAoB,AACpB,4BAA8B,CAC/B,AACD,6BACE,iBAAkB,AAClB,iBAAmB,CACpB,AACD,6BACE,gBAAiB,AACjB,eAAiB,CAClB,AACD,wCACI,WAAY,AACZ,iBAAkB,AAClB,mBAAoB,AACpB,UAAY,CACf,AACD,qCACI,kBAAoB,CACvB",file:"index.vue",sourcesContent:["\n.project-detail .tit {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  margin-bottom: 20px;\n  border-bottom: 1px solid #ddd;\n}\n.project-detail .detail-main {\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.project-detail .detail-info {\n  margin-top: 20px;\n  line-height: 1.6;\n}\n.project-detail .detail-info .sub-label {\n    width: 90px;\n    text-align: right;\n    padding-right: 10px;\n    color: gray;\n}\n.project-detail .detail-info .el-col {\n    margin-bottom: 10px;\n}\n"],sourceRoot:""}])},1234:function(t,a,e){var s=e(1212);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(868)("32ca5a5e",s,!0)},1283:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"project-detail"},[e("div",{staticClass:"tit pl30"},[e("span",{staticClass:"fs18"},[t._v("项目详情")]),t._v(" "),e("div",{staticClass:"fr"},[e("el-button",{attrs:{size:"mini",type:"primary"}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{size:"mini"}},[t._v("更多")])],1)]),t._v(" "),e("div",{staticClass:"detail-main"},[t._m(0),t._v(" "),e("div",{staticClass:"ptb20"},[e("el-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{round:"",type:"primary"}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{round:""}},[t._v("圆形按钮")]),t._v(" "),e("el-button",{attrs:{type:"text"}},[t._v("圆形按钮")])],1),t._v(" "),e("div",{staticClass:"tit plr20"},[t._v("项目信息")]),t._v(" "),e("el-row",{staticClass:"detail-info"},[e("el-col",{attrs:{span:12}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("需求概述：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("预算金额：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("历史供应商：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])]),t._v(" "),e("el-col",{attrs:{span:12}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("竞争产品：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("项目干系人：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])]),t._v(" "),e("el-col",{attrs:{span:24}},[e("div",{staticClass:"df"},[e("div",{staticClass:"sub-label"},[t._v("备注：")]),t._v(" "),e("div",{staticClass:"flex1"},[t._v("fef")])])])],1),t._v(" "),e("div",{staticClass:"tit plr20"},[t._v("拜访记录 "),e("el-button",{staticClass:"fr",attrs:{type:"text"},on:{click:t.addVisitRecord}},[t._v("新建拜访记录")])],1),t._v(" "),e("el-table",{attrs:{data:t.tableParams.list,"header-align":"center",border:""}},[e("el-table-column",{attrs:{label:"拜访目的",prop:"customer_name"}}),t._v(" "),e("el-table-column",{attrs:{label:"拜访对象",prop:"stakeholder_name"}}),t._v(" "),e("el-table-column",{attrs:{label:"推动计划",prop:"stakeholder_contact"}}),t._v(" "),e("el-table-column",{attrs:{label:"拜访人",prop:"progress_name"}}),t._v(" "),e("el-table-column",{attrs:{label:"拜访时间",prop:"create_time"}})],1)],1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"df bb ptb20"},[e("div",{staticClass:"wp20 flex1"},[e("div",{staticClass:"fc-gray"},[t._v("客户名称：")]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"wp20 flex1"},[e("div",{staticClass:"fc-gray"},[t._v("资金来源：")]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"wp20 flex1"},[e("div",{staticClass:"fc-gray"},[t._v("招标方式：")]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"wp20 flex1"},[e("div",{staticClass:"fc-gray"},[t._v("项目负责人：")]),t._v(" "),e("div")]),t._v(" "),e("div",{staticClass:"wp20 flex1"},[e("div",{staticClass:"fc-gray"},[t._v("创建时间：")]),t._v(" "),e("div")])])}]}},912:function(t,a,e){e(1234);var s=e(215)(e(1169),e(1283),null,null);t.exports=s.exports},928:function(t,a,e){"use strict";function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(a,"__esModule",{value:!0});var i=e(216),l=s(i),n=e(369),r=s(n);a.default={data:function(){return{tableServer:{},tableDataList:[],tableSelectionItems:[],tableTotalCount:0,tableOption:{layout:"total, sizes, prev, pager, next, jumper",pageSizeList:[10,20,30,40]},tableParams:{page_size:10,page_num:1}}},mounted:function(){var t=this;this.initTableServer&&this.initTableServer().then(function(){t.requestData()})},computed:{selectedIds:function(){var t=this;return this.tableParams.selectedItems.map(function(a){return a[t.pk]})}},methods:{requestData:function(){var t=this;this.tableServer.loadTableData&&this.tableServer.extraParams.id&&this.tableServer.loadTableData(this.paramsHandler()).then(function(){t.initialTableData(t.tableServer.dataList())})},paramsHandler:function(){return(0,r.default)({},this.tableParams,this.tableServer.extraParams,this.tableServer.searchParams)},initialTableData:function(t){this.tableDataList=t.data_list,this.tableTotalCount=t.total_num,this.tableParams.page_size===t.page_size&&this.tableParams.page_num===t.page_num||(this.$message("当前页数不匹配"),console.log(t),this.tableParams.page_size=t.page_size,this.tableParams.page_num=t.page_num)},handleSizeChange:function(t){t&&t!==this.tableParams.page_size&&(this.tableParams.page_size=t,this.requestData())},handleCurrentChange:function(t){t&&this.tableParams.page_num!==t&&(this.tableParams.page_num=t,this.requestData())},onSelectionChange:function(t){this.tableSelectionItems=[].concat((0,l.default)(t))},assignQuery:function(t){return(0,r.default)({page_num:this.tableParams.pageNum,page_size:this.tableParams.pageSize},t)},onSearch:function(){this.tableParams.pageNum=1,this._loadList()}}}}});
//# sourceMappingURL=34.753a16d1797a2e0221f2.js.map