webpackJsonp([53],{1167:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{dynamicValidateForm:{domains:function(){for(var t=0,a=[];t<3;t++)a.push({value:""});return a}(),email:""},formRule:{domains:function(){for(var t=0,a=[];t<3;t++)a.push({value:[{required:!0,message:"域名的方式地方"}]});return a}()}}},methods:{submitForm:function(t){this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;alert("submit!")})},resetForm:function(t){this.$refs[t].resetFields()},removeDomain:function(t){var a=this.dynamicValidateForm.domains.indexOf(t);-1!==a&&this.dynamicValidateForm.domains.splice(a,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()}),this.formRule.domains.push({value:[{required:!0,message:"域名的方式地方"}]})}}}},1285:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"project-detail"},[s("div",{staticClass:"page-main bl bt br hi ml20 mt20 mr20 df p0 box-flex"},[s("div",{staticClass:"flex1 pd20  f13"},[t._m(0),t._v(" "),s("div",{staticClass:"pl10"},[s("el-form",{staticClass:"form-text f13 mt5",attrs:{"label-width":"78px",size:"mini"}},[s("el-row",[s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"故障设备："}},[t._v("【紧急】电脑故障")])],1),t._v(" "),s("el-col",{attrs:{span:12}},[s("el-form-item",{attrs:{label:"故障设备："}},[t._v("【紧急】电脑故障")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"故障对象："}},[t._v("设备资源名称（福州仓山区市二医院7号楼配电房3#高压柜5#）")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"故障时间："}},[t._v("2017-10-11 11:30 （告警时间或报障时间）")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"故障描述："}},[s("p",[t._v("电压不稳定，影响正常工作(可包含故障定位信息等)")]),t._v(" "),s("div",{staticClass:"mt10 detail-common-img"},[s("img",{attrs:{src:"@/assets/images/code2.png"}})])])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:8}},[s("el-form-item",{staticClass:"fc-gray",attrs:{label:"附件："}},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v("附件名称.docx")]),t._v("(1.3M)")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"联系方式："}},[t._v("18900000000")])],1),t._v(" "),s("el-col",{attrs:{span:6}},[s("el-form-item",{attrs:{label:"联系人："}},[t._v("张某某")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"地点：","label-width":"78px"}},[t._v("福州仓山区市二医院")])],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"预约时间：","label-width":"78px"}},[t._v("2018-01-02 17：00")])],1)],1)],1)],1),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"pl10"},[s("el-form",{staticClass:"form-text f13 mt5",attrs:{"label-width":"78px",size:"mini"}},[s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"原因分析："}},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入原因分析"}})],1)],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"解决方案："}},[s("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入解决方案"}}),t._v(" "),s("div",{staticClass:"mt10"},[s("el-button",{staticClass:"btn-upload"},[t._v("上传附件")]),s("span",{staticClass:"ml10 f12 fc-gray"},[t._v("(单个附件大小不可超过20M,全部附件大小不可超过20M）")])],1)],1)],1)],1),t._v(" "),s("el-row",{staticClass:"mt10"},[s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"处理时长："}},[s("el-input",{staticStyle:{width:"auto","max-width":"120px"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"人工费用："}},[s("el-input",{staticStyle:{width:"auto","max-width":"120px"}})],1)],1),t._v(" "),s("el-col",{attrs:{span:8}},[s("el-form-item",{attrs:{label:"配件费用："}},[s("el-input",{staticStyle:{width:"auto","max-width":"120px"}})],1)],1)],1),t._v(" "),s("el-row",[s("el-col",{attrs:{span:22}},[s("el-form-item",{attrs:{label:"配件信息："}},[s("el-button",[t._v("添加配件")])],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"tc mt30"},[s("el-button",{attrs:{type:"primary"}},[t._v("保存")]),t._v(" "),s("el-button",[t._v("处理完成")])],1)],1),t._v(" "),t._m(2),t._v(" "),t._m(3)]),t._v(" "),s("div",{staticClass:"stsyem-post bl",staticStyle:{width:"326px"}},[s("el-tabs",{staticClass:"tab-center",model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[s("el-tab-pane",{staticClass:"pl10 pr10",attrs:{label:"客户信息",name:"first"}},[s("el-form",{staticClass:"form-text f13",attrs:{"label-width":"90px",size:"mini"}},[s("el-form-item",{attrs:{label:"客户名称："}},[t._v("余有德余有德余\n            ")]),t._v(" "),s("el-form-item",{attrs:{label:"客户代码："}},[t._v("余有德\n            ")]),t._v(" "),s("el-form-item",{attrs:{label:"联系人："}},[t._v("余有德\n            ")]),t._v(" "),s("el-form-item",{attrs:{label:"联系方式："}},[t._v("余有德\n            ")]),t._v(" "),s("el-form-item",{attrs:{label:"所在地："}},[t._v("余有德\n            ")]),t._v(" "),s("el-form-item",{attrs:{label:"所属行业："}},[t._v("余有德\n            ")])],1)],1),t._v(" "),s("el-tab-pane",{staticClass:"pl10 pr10",attrs:{label:"设备信息",name:"second"}})],1)],1)])])},staticRenderFns:[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title"},[s("span",{staticClass:"title"},[t._v("主题：【紧急】电脑故障")]),t._v(" "),s("span",{staticClass:"info gray"},[t._v("#101(工单编号)")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title mt30"},[s("span",{staticClass:"title"},[t._v("处理记录")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"section-title mt30"},[s("span",{staticClass:"title"},[t._v("执行历史")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"record-list mt20"},[s("div",{staticClass:"record-item"},[s("div",{staticClass:"photo"}),t._v(" "),s("p",{staticClass:"r1"},[s("span",{staticClass:"role"},[t._v("管理员")]),t._v(" "),s("span",{staticClass:"deparment"},[t._v("（部门1）")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2017-12-12")])]),t._v(" "),s("p",{staticClass:"r2"},[s("span",{staticClass:"action text-error"},[t._v("审批不通过")]),t._v(" "),s("span",{staticClass:"info"},[t._v("没事干")])])]),t._v(" "),s("div",{staticClass:"record-item"},[s("div",{staticClass:"photo"}),t._v(" "),s("p",{staticClass:"r1"},[s("span",{staticClass:"role"},[t._v("管理员")]),t._v(" "),s("span",{staticClass:"deparment"},[t._v("（部门1）")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2017-12-12")])]),t._v(" "),s("p",{staticClass:"r2"},[s("span",{staticClass:"action  text-sucess"},[t._v("审批不通过")]),t._v(" "),s("span",{staticClass:"info"},[t._v("没事干")])])]),t._v(" "),s("div",{staticClass:"record-item"},[s("div",{staticClass:"photo"}),t._v(" "),s("p",{staticClass:"r1"},[s("span",{staticClass:"role"},[t._v("管理员")]),t._v(" "),s("span",{staticClass:"deparment"},[t._v("（部门1）")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2017-12-12")])]),t._v(" "),s("p",{staticClass:"r2"},[s("span",{staticClass:"action"},[t._v("审批不通过")]),t._v(" "),s("span",{staticClass:"info"},[t._v("没事干")])])])])}]}},910:function(t,a,s){var e=s(215)(s(1167),s(1285),null,null);t.exports=e.exports}});
//# sourceMappingURL=53.6dcb7491dfcbd202de9f.js.map