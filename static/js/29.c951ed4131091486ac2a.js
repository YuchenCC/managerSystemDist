webpackJsonp([29],{1065:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configData=t.configRule=t.contactData=t.contactRule=void 0;var l=i(930),a=function(e){return e&&e.__esModule?e:{default:e}}(l);t.contactRule={linkman_name:[a.default.max({max:20,message:"最多不能超过20个字"}),a.default.min({min:2,message:"至少2个字"})],linkman_contact:[{validator:a.default.phone}]},t.contactData={linkman_name:"",linkman_contact:"",linkman_post:"",is_primary:0},t.configRule={customer_name:[a.default.required({message:"请输入客户名称"}),a.default.max({max:50,message:"最多不能超过50个字"}),a.default.min({min:2,message:"至少2个字"})],social_credit_code:[a.default.required({message:"请输入社会信用代码"})],industry_type_id:[a.default.required({message:"请选择行业大类"})],industry_subtype_id:[a.default.required({message:"请选择行业子类"})],linkmen:[{linkman_name:[a.default.required({message:"请输入姓名"}),a.default.max({max:20,message:"最多不能超过20个字"}),a.default.min({min:2,message:"至少2个字"})],linkman_contact:[{validator:a.default.phone}],linkman_post:[a.default.required({message:"请输入联系人职务"})]}]},t.configData={customer_name:"1111",social_credit_code:"1111",customer_level:1,industry_type_id:"1111",industry_subtype_id:"1111",linkmen:[{linkman_name:"",linkman_contact:"",linkman_post:"",is_primary:1}],province_id:11,city_id:1,address:"1111",website:"1111",turnover:11.2,staff_num:20,primary_business:"1111",business_licence_img:"1111",attaches:[],customer_summary:"1111"}},1069:function(e,t,i){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(218),o=l(a),n=i(217),r=l(n),s=i(141),m=l(s),d=i(930),u=(l(d),i(1065)),c=i(142),p=l(c);t.default={data:function(){return{detailForm:{},detailFormRule:u.configRule,fileList:[]}},props:{value:{type:Boolean,default:!1},customerDetail:{type:Object,default:function(){return{}}}},mounted:function(){},watch:{value:function(e,t){var i=this;i.detailForm=(0,m.default)({},i.customerDetail),e?i.customerDetail&&i.customerDetail.id?i.editContactForm():this.initContactForm():this.resetForm()}},methods:{dialogClose:function(){this.dialogVisible=!1,this.$emit("input",!1)},confirm:function(){function e(){return t.apply(this,arguments)}var t=(0,r.default)(o.default.mark(function e(){var t=this;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.$refs.detailForm.validate(function(e){if(!e)return!1;var i=(0,m.default)({},t.detailForm);t.detailForm.id?p.default.customer.putEditCustomer(i).then(function(){t.dialogClose(),t.$emit("reload-list")}):p.default.customer.postNewCustomer(i).then(function(){t.dialogClose(),t.$emit("reload-list")})});case 1:case"end":return e.stop()}},e,this)}));return e}(),save:function(){},addContactor:function(){this.detailForm.linkmen.push((0,m.default)({},u.contactData,{is_primary:0})),this.detailFormRule.linkmen.push(u.contactRule)},delContactor:function(e,t){1!=e.is_primary?(this.detailForm.linkmen.splice(t,1),this.detailFormRule.linkmen.splice(t,1)):this.$message({message:"主联系人不可删除",type:"warning"})},editContactForm:function(){var e=this.detailForm.linkmen?this.detailForm.linkmen.length:0;if(1!=e){if(!(e>=2))return 0==e?void this.initContactForm():void 0;for(var t=0;t<e-1;t++)this.detailFormRule.linkmen.push(u.contactRule)}},initContactForm:function(){this.detailFormRule.linkmen=[],console.log(this.detailFormRule.linkmen.length),this.detailForm.linkmen=[];for(var e=0;e<2;e++){var t=0==e?1:0;this.detailForm.linkmen.push((0,m.default)({},u.contactData,{is_primary:t})),this.detailFormRule.linkmen.push(u.contactRule)}},resetForm:function(){console.log(u.configRule),this.detailFormRule=u.configRule,this.$emit("reset")},handleRemove:function(e,t){console.log(e,t)},handlePreview:function(e){console.log(e)},handleExceed:function(e,t){this.$message.warning("当前限制选择 10 个文件，本次选择了 "+e.length+" 个文件，共选择了 "+(e.length+t.length)+" 个文件")},beforeRemove:function(e,t){return this.$confirm("确定移除 "+e.name+"？")}}}},1099:function(e,t,i){t=e.exports=i(867)(),t.push([e.i,".detail-modal .el-dialog__body{padding:30px 40px}.detail-modal .block-title,.detail-modal .el-dialog__header{border-bottom:1px solid #999}.detail-modal .block-title{font-size:16px;line-height:2;font-weight:700;margin-bottom:15px}","",{version:3,sources:["D:/桌面/personal/project/web-project/src/views/customer/modalDetail.vue"],names:[],mappings:"AACA,+BACE,iBAAmB,CACpB,AAID,4DAFE,4BAA8B,CAQ/B,AAND,2BACE,eAAgB,AAChB,cAAe,AACf,gBAAkB,AAElB,kBAAoB,CACrB",file:"modalDetail.vue",sourcesContent:["\n.detail-modal .el-dialog__body {\n  padding: 30px 40px;\n}\n.detail-modal .el-dialog__header {\n  border-bottom: 1px solid #999;\n}\n.detail-modal .block-title {\n  font-size: 16px;\n  line-height: 2;\n  font-weight: bold;\n  border-bottom: 1px solid #999;\n  margin-bottom: 15px;\n}\n"],sourceRoot:""}])},1115:function(e,t,i){var l=i(1099);"string"==typeof l&&(l=[[e.i,l,""]]),l.locals&&(e.exports=l.locals);i(868)("46028a3a",l,!0)},1135:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-dialog",{staticClass:"detail-modal",attrs:{title:"新建客户",visible:e.value,width:"660px","append-to-body":"","before-close":e.dialogClose},on:{"update:visible":function(t){e.value=t}}},[i("div",{staticClass:"customer-detail"},[i("el-form",{ref:"detailForm",attrs:{model:e.detailForm,rules:e.detailFormRule,size:"small","label-width":"110px"}},[i("el-form-item",{attrs:{label:"客户名称：",prop:"customer_name"}},[i("el-input",{model:{value:e.detailForm.customer_name,callback:function(t){e.$set(e.detailForm,"customer_name",t)},expression:"detailForm.customer_name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"社会信用代码：",prop:"social_credit_code"}},[i("el-input",{model:{value:e.detailForm.social_credit_code,callback:function(t){e.$set(e.detailForm,"social_credit_code",t)},expression:"detailForm.social_credit_code"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"客户级别：",prop:"customer_level"}},[i("el-input",{model:{value:e.detailForm.customer_level,callback:function(t){e.$set(e.detailForm,"customer_level",t)},expression:"detailForm.customer_level"}})],1),e._v(" "),i("div",{staticClass:"box-flex"},[i("el-form-item",{staticClass:"mr15",attrs:{label:"行业类型：",prop:"industry_type_id"}},[i("el-select",{staticClass:"w180",model:{value:e.detailForm.industry_type_id,callback:function(t){e.$set(e.detailForm,"industry_type_id",t)},expression:"detailForm.industry_type_id"}})],1),e._v(" "),i("el-form-item",{staticClass:"flex-one",attrs:{prop:"industry_subtype_id","label-width":"0"}},[i("el-select",{staticClass:"wp100",model:{value:e.detailForm.industry_subtype_id,callback:function(t){e.$set(e.detailForm,"industry_subtype_id",t)},expression:"detailForm.industry_subtype_id"}})],1)],1),e._v(" "),i("div",{staticClass:"block-title"},[e._v("\n                    联系人\n                ")]),e._v(" "),e._l(e.detailForm.linkmen,function(t,l){return i("div",{key:l},[i("div",{staticClass:"box-flex"},[i("el-form-item",{attrs:{label:t.is_primary?"主要联系人：":"联系人",prop:"linkmen."+l+".linkman_name",rules:e.detailFormRule.linkmen[l].linkman_name}},[i("el-input",{staticClass:"w150 mr15",attrs:{placeholder:"姓名"},model:{value:t.linkman_name,callback:function(i){e.$set(t,"linkman_name",i)},expression:"item.linkman_name"}})],1),e._v(" "),i("el-form-item",{class:["wp100",{pr20:t.is_primary}],attrs:{"label-width":"0px",prop:"linkmen."+l+".linkman_contact",rules:e.detailFormRule.linkmen[l].linkman_contact}},[i("el-input",{attrs:{placeholder:"联系方式"},model:{value:t.linkman_contact,callback:function(i){e.$set(t,"linkman_contact",i)},expression:"item.linkman_contact"}})],1),e._v(" "),t.is_primary?e._e():i("i",{staticClass:"el-icon-circle-close pt10 ml10 fc-red",on:{click:function(i){e.delContactor(t,l)}}})],1),e._v(" "),i("el-form-item",{staticClass:"pr20",attrs:{label:"职务：",prop:"linkmen."+l+".linkman_post",rules:e.detailFormRule.linkmen[l].linkman_post}},[i("el-input",{attrs:{placeholder:"职务"},model:{value:t.linkman_post,callback:function(i){e.$set(t,"linkman_post",i)},expression:"item.linkman_post"}})],1)],1)}),e._v(" "),i("el-form-item",[i("el-button",{attrs:{plain:"",type:"primary"},on:{click:e.addContactor}},[e._v("添加联系人")])],1),e._v(" "),i("div",{staticClass:"block-title"},[e._v("\n                    详细信息\n                ")]),e._v(" "),i("el-form-item",{attrs:{label:"省市："}}),e._v(" "),i("el-form-item",{attrs:{label:"详细地址：",prop:"address"}},[i("el-input",{model:{value:e.detailForm.address,callback:function(t){e.$set(e.detailForm,"address",t)},expression:"detailForm.address"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"公司网址：",prop:"website"}},[i("el-input",{model:{value:e.detailForm.website,callback:function(t){e.$set(e.detailForm,"website",t)},expression:"detailForm.website"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"营业额：(元)",prop:"turnover"}},[i("el-input",{model:{value:e.detailForm.turnover,callback:function(t){e.$set(e.detailForm,"turnover",t)},expression:"detailForm.turnover"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"员工数：",prop:"staff_num"}},[i("el-input",{model:{value:e.detailForm.staff_num,callback:function(t){e.$set(e.detailForm,"staff_num",t)},expression:"detailForm.staff_num"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"主营业务：",prop:"primary_business"}},[i("el-input",{model:{value:e.detailForm.primary_business,callback:function(t){e.$set(e.detailForm,"primary_business",t)},expression:"detailForm.primary_business"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"营业执照：",prop:"business_licence_img"}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")]),e._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("请提供证件的原件照片或彩色扫描件，文字/盖章清晰可辨认，jpg、jpeg、pngges ，不超过10MB")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"附件："}},[i("el-upload",{staticClass:"upload-demo",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","on-preview":e.handlePreview,"on-remove":e.handleRemove,"before-remove":e.beforeRemove,multiple:"",limit:3,"on-exceed":e.handleExceed,"file-list":e.fileList}},[i("el-button",{attrs:{size:"small",type:"primary"}},[e._v("选择文件")])],1)],1),e._v(" "),i("el-form-item",{attrs:{label:"客户概述：",prop:"customer_summary"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.detailForm.customer_summary,callback:function(t){e.$set(e.detailForm,"customer_summary",t)},expression:"detailForm.customer_summary"}})],1)],2)],1),e._v(" "),i("div",{staticClass:"dialog-footer tc",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:e.dialogClose}},[e._v("取 消")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]}},873:function(e,t,i){i(1115);var l=i(215)(i(1069),i(1135),null,null);e.exports=l.exports},930:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=i(371),a=function(e){return e&&e.__esModule?e:{default:e}}(l),o=function(e,t,i){var l=/^\d{7,12}$/;""!=t&&l.test(t)?i():i(new Error("请输入正确的联系号码"))},n=function(e,t,i){""==t||0==t.length?i(new Error("请选择时间")):i()},r=function(e,t,i){"object"==(void 0===t?"undefined":(0,a.default)(t))&&(new Date).valueOf()<=t.valueOf()?i(new Error("不能选将来时间")):i()},s=function(e,t,i){var l=/^\d{1,7}(\.\d{1,2})?$/;t&&""!=t&&!l.test(t)?i(new Error("整数小于7位且小数点不能超过两位")):i()},m=function(e,t,i){var l=/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X|x)$/;null==t||""==t||l.test(t)?i():i(new Error("身份证号码格式有误"))},d=function(e,t,i,l){return l.c_name&&e.field==e.file?(""==t?i(new Error("该字段不能为空")):i(),!1):void i()},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.message,i=void 0===t?"不能为空":t,l=e.trigger;return{required:!0,message:i,trigger:void 0===l?"blur":l}},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,i=void 0===t?"string":t,l=e.message,a=void 0===l?"不能多于1位":l,o=e.trigger,n=void 0===o?"blur":o,r=e.max;return{type:i,max:void 0===r?1:r,message:a,trigger:n}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.type,i=void 0===t?"string":t,l=e.message,a=void 0===l?"不能少于1位":l,o=e.trigger,n=void 0===o?"blur":o,r=e.min;return{type:i,min:void 0===r?1:r,message:a,trigger:n}};t.default={idCard:m,phone:o,required:u,max:c,min:p,pointLimit:s,cargoSection:d,curDateLimit:r,dataRange:n}}});
//# sourceMappingURL=29.c951ed4131091486ac2a.js.map