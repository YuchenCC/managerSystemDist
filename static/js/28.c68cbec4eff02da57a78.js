webpackJsonp([28],{1156:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(218),r=l(n),i=a(141),s=l(i),u=a(217),o=l(u),c=a(142),m=l(c),d=a(928),f=l(d),p=a(929),v=a(8),b=a(1187);t.default={data:function(){return{industryType:[],dateRange:"",customerLevel:p.customerLevel,customerDetail:b.configData,detailRule:b.configRule,form:{dateRange:"",operateSelect:"",searchInput:""},detailVisible:!1}},mixins:[f.default],methods:{_loadList:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(){var t,a,l;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,a=(0,v.removeEmpty)((0,s.default)({},t.query)),e.next=4,m.default.customer.getCustomerList(t.assignQuery(a));case 4:l=e.sent,t.initialTableData(l.rows,l.total);case 6:case"end":return e.stop()}},e,this)}));return e}(),toEdit:function(e){this.$router.push({name:"planEdit",params:{planId:e.id}})},toDel:function(){function e(e){return t.apply(this,arguments)}var t=(0,o.default)(r.default.mark(function e(t){var a,l;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this,e.next=3,m.default.customer.checkIsDelCustomer(t.row.id);case 3:l=e.sent,l.result?this.$confirm("此操作将永久删除该客户, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){m.default.customer.delCustomerById(t.row.id).then(function(e){a._loadList()})}):a.$message({message:"该客户不可删除",type:"warning"});case 5:case"end":return e.stop()}},e,this)}));return e}(),toOpen:function(){},onRangeChange:function(e){this.query.startTime=e[0]||"",this.query.endTime=e[1]||""},exportExcel:function(){},toNewCustomer:function(e){this.detailVisible=!0,this.detailRule=b.configRule,e&&e.id?this.customerDetail=e:this.customerDetail=b.configData}}}},1187:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configData=t.configRule=t.contactData=t.contactRule=void 0;var l=a(930),n=function(e){return e&&e.__esModule?e:{default:e}}(l);t.contactRule={linkman_name:[n.default.max({max:20,message:"最多不能超过20个字"}),n.default.min({min:2,message:"至少2个字"})],linkman_contact:[{validator:n.default.phone}]},t.contactData={linkman_name:"",linkman_contact:"",linkman_post:"",is_primary:0},t.configRule={customer_name:[n.default.required({message:"请输入客户名称"}),n.default.max({max:50,message:"最多不能超过50个字"}),n.default.min({min:2,message:"至少2个字"})],social_credit_code:[n.default.required({message:"请输入社会信用代码"})],industry_type_id:[n.default.required({message:"请选择行业大类"})],industry_subtype_id:[n.default.required({message:"请选择行业子类"})],linkmen:[{linkman_name:[n.default.required({message:"请输入姓名"}),n.default.max({max:20,message:"最多不能超过20个字"}),n.default.min({min:2,message:"至少2个字"})],linkman_contact:[{validator:n.default.phone}],linkman_post:[n.default.required({message:"请输入联系人职务"})]}]},t.configData={customer_name:"1111",social_credit_code:"1111",customer_level:1,industry_type_id:"1111",industry_subtype_id:"1111",linkmen:[{linkman_name:"",linkman_contact:"",linkman_post:"",is_primary:1}],province_id:11,city_id:1,address:"1111",website:"1111",turnover:11.2,staff_num:20,primary_business:"1111",business_licence_img:"1111",attaches:[],customer_summary:"1111"}},1276:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"customer-list"},[a("el-form",{ref:"form",attrs:{model:e.form,inline:!0,size:"small"}},[a("el-form-item",{attrs:{prop:""}},[a("el-date-picker",{staticClass:"w240",attrs:{type:"daterange",align:"right",placeholder:"选择日期范围",clearable:!1,size:"small"},on:{change:e.onRangeChange},model:{value:e.form.dateRange,callback:function(t){e.$set(e.form,"dateRange",t)},expression:"form.dateRange"}})],1),e._v(" "),a("el-form-item",{attrs:{prop:""}},[a("el-input",{attrs:{placeholder:"操作人"},model:{value:e.form.searchInput,callback:function(t){e.$set(e.form,"searchInput",t)},expression:"form.searchInput"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})])],1),e._v(" "),a("el-form-item",{attrs:{label:"操作类型："}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.operateSelect,callback:function(t){e.$set(e.form,"operateSelect",t)},expression:"form.operateSelect"}},[a("el-option",{attrs:{label:"WEB",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"iOS",value:"2"}}),e._v(" "),a("el-option",{attrs:{label:"Android",value:"3"}}),e._v(" "),a("el-option",{attrs:{label:"微信",value:"4"}})],1)],1)],1),e._v(" "),a("el-table",{attrs:{data:e.tableParams.list,"header-align":"center",border:"","header-row-class-name":"header-center"}},[a("el-table-column",{attrs:{label:"客户名称",prop:"customer_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"联系人",prop:"linkman_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"所属行业",prop:"industry_type_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"所在地",prop:"city_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"客户级别",prop:"customer_level"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("customerLevel")(t.row.customer_level)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"负责人",prop:"director_name"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",prop:"create_time",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e._f("dateFormat")(t.row.create_time)))])]}}])}),e._v(" "),a("el-table-column",{staticClass:"tc",attrs:{label:"操作",fixed:"right",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"mini"},on:{click:e.toOpen}},[e._v("\n          服务开通\n        ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},nativeOn:{click:function(a){e.toNewCustomer(t.row)}}},[e._v("\n          编辑\n        ")]),e._v(" "),a("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(a){e.toDel(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),e.tableParams.totalCount?a("el-pagination",{staticClass:"mt15",attrs:{"current-page":e.tableParams.currentPage,"page-sizes":e.tableParams.pageSizeList,"page-size":e.tableParams.pageSize,layout:e.tableParams.layout,total:e.tableParams.totalCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}):e._e()],1)},staticRenderFns:[]}},898:function(e,t,a){var l=a(215)(a(1156),a(1276),null,null);e.exports=l.exports},928:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(216),r=l(n),i=a(369),s=l(i);t.default={data:function(){return{tableServer:{},tableDataList:[],tableSelectionItems:[],tableTotalCount:0,tableOption:{layout:"total, sizes, prev, pager, next, jumper",pageSizeList:[10,20,30,40]},tableParams:{page_size:10,page_num:1}}},mounted:function(){var e=this;this.initTableServer&&this.initTableServer().then(function(){e.requestData()})},computed:{selectedIds:function(){var e=this;return this.tableParams.selectedItems.map(function(t){return t[e.pk]})}},methods:{requestData:function(){var e=this;this.tableServer.loadTableData&&this.tableServer.extraParams.id&&this.tableServer.loadTableData(this.paramsHandler()).then(function(){e.initialTableData(e.tableServer.dataList())})},paramsHandler:function(){return(0,s.default)({},this.tableParams,this.tableServer.extraParams,this.tableServer.searchParams)},initialTableData:function(e){this.tableDataList=e.data_list,this.tableTotalCount=e.total_num,this.tableParams.page_size===e.page_size&&this.tableParams.page_num===e.page_num||(this.$message("当前页数不匹配"),console.log(e),this.tableParams.page_size=e.page_size,this.tableParams.page_num=e.page_num)},handleSizeChange:function(e){e&&e!==this.tableParams.page_size&&(this.tableParams.page_size=e,this.requestData())},handleCurrentChange:function(e){e&&this.tableParams.page_num!==e&&(this.tableParams.page_num=e,this.requestData())},onSelectionChange:function(e){this.tableSelectionItems=[].concat((0,r.default)(e))},assignQuery:function(e){return(0,s.default)({page_num:this.tableParams.pageNum,page_size:this.tableParams.pageSize},e)},onSearch:function(){this.tableParams.pageNum=1,this._loadList()}}}},929:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.planType=[{value:1,label:"日计划"},{value:2,label:"周计划"},{value:3,label:"月计划"}],t.planState=[{value:1,label:"草稿"},{value:2,label:"已发布"},{value:3,label:"删除"}],t.supportType=[{value:1,label:"资金"},{value:2,label:"技术支持"},{value:3,label:"协访"},{value:4,label:"其他"}],t.customerLevel=[{value:"",label:"全部客户级别"},{value:1,label:"VIP"},{value:2,label:"重要客户"},{value:3,label:"普通客户"}],t.capitalTypes=[{value:1,label:"自筹"},{value:2,label:"政府拨款"},{value:3,label:"其他"}],t.tenderTypes=[{value:1,label:"公开招标"},{value:2,label:"邀标"},{value:3,label:"竞争性谈判"},{value:4,label:"单一来源采购"},{value:5,label:"其他"}],t.roleTypes=[{value:1,label:"项目经办人"},{value:2,label:"经办负责人"},{value:3,label:"分管领导"},{value:4,label:"关键人"}],t.projectProgressTypes=[{value:"1",label:"初步洽谈"},{value:"2",label:"方案提交"},{value:"3",label:"立项"},{value:"4",label:"招标"},{value:"5",label:"运行调试"},{value:"6",label:"汇款"}],t.serviceStates=[{value:1,label:"运行中"},{value:2,label:"待审核"},{value:3,label:"审核拒绝"}]},930:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(371),n=function(e){return e&&e.__esModule?e:{default:e}}(l),r=function(e,t,a){var l=/^\d{7,12}$/;""!=t&&l.test(t)?a():a(new Error("请输入正确的联系号码"))},i=function(e,t,a){""==t||0==t.length?a(new Error("请选择时间")):a()},s=function(e,t,a){"object"==(void 0===t?"undefined":(0,n.default)(t))&&(new Date).valueOf()<=t.valueOf()?a(new Error("不能选将来时间")):a()},u=function(e,t,a){var l=/^\d{1,7}(\.\d{1,2})?$/;t&&""!=t&&!l.test(t)?a(new Error("整数小于7位且小数点不能超过两位")):a()},o=function(e,t,a){var l=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/;null==t||""==t||l.test(t)?a():a(new Error("身份证号码格式有误"))},c=function(e,t,a,l){return l.c_name&&e.field==e.file?(""==t?a(new Error("该字段不能为空")):a(),!1):void a()},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,a=void 0===t?"不能为空":t,l=e.trigger;return{required:!0,message:a,trigger:void 0===l?"blur":l}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,a=void 0===t?"string":t,l=e.message,n=void 0===l?"不能多于1位":l,r=e.trigger,i=void 0===r?"blur":r,s=e.max;return{type:a,max:void 0===s?1:s,message:n,trigger:i}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,a=void 0===t?"string":t,l=e.message,n=void 0===l?"不能少于1位":l,r=e.trigger,i=void 0===r?"blur":r,s=e.min;return{type:a,min:void 0===s?1:s,message:n,trigger:i}};t.default={idCard:o,phone:r,required:m,max:d,min:f,pointLimit:u,cargoSection:c,curDateLimit:s,dataRange:i}}});
//# sourceMappingURL=28.c68cbec4eff02da57a78.js.map