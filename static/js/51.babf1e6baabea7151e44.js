webpackJsonp([51],{1084:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={watch:{filterText:function(e){this.$refs.tree.filter(e)}},methods:{filterNode:function(e,t){return!e||-1!==t.label.indexOf(e)},getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())},getChecked:function(e,t){var l=this;this.selectData=[],t.checkedNodes.map(function(e){e.children||l.selectData.push(e)})},sendData:function(){this.dialogVisible=!1,this.$emit("getPersons",this.selectData)}},data:function(){return{selectData:[],dialogVisible:!1,filterText:"",data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:3,label:"二级 23",children:[{id:14,label:"三级 123"},{id:15,label:"sakdl"}]}]}],defaultProps:{children:"children",label:"label"}}}}},1128:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("div",{staticStyle:{display:"flex",height:"400px"}},[l("div",{staticStyle:{width:"300px"}},[l("div",[e._v("选择：")]),e._v(" "),l("el-input",{attrs:{placeholder:"输入关键字进行过滤"},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),e._v(" "),l("el-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","node-key":"id","highlight-current":"","filter-node-method":e.filterNode,props:e.defaultProps},on:{check:e.getChecked}})],1),e._v(" "),l("div",{staticClass:"ml30",staticStyle:{width:"300px"}},[l("div",[e._v("已选：")]),e._v(" "),l("ul",e._l(e.selectData,function(t){return l("li",[e._v(e._s(t.label))])}))])]),e._v(" "),l("span",{staticClass:"dialog-footer",staticStyle:{display:"flex","justify-content":"center"},attrs:{slot:"footer"},slot:"footer"},[l("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),e._v(" "),l("el-button",{attrs:{type:"primary"},on:{click:function(t){e.sendData()}}},[e._v("确 定")])],1)])},staticRenderFns:[]}},888:function(e,t,l){var i=l(215)(l(1084),l(1128),null,null);e.exports=i.exports}});
//# sourceMappingURL=51.babf1e6baabea7151e44.js.map