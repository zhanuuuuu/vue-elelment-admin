(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f73f140"],{2882:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"roles"},[r("el-card",[r("el-button",{attrs:{type:"primary"},on:{click:e.handleAddRoles}},[e._v("添加权限")]),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.rolesTabDataLoading,expression:"rolesTabDataLoading"}],staticStyle:{width:"80%"},attrs:{stripe:"",border:"",data:e.rolesTabData}},[r("el-table-column",{attrs:{prop:"key",label:"身份"}}),r("el-table-column",{attrs:{prop:"description",label:"说明"}}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(r){return e.editRoles(t.$index,t.row)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"warning",size:"mini",disabled:e.isAdmin(t.row)},on:{click:function(r){return e.deleteRoles(t.$index)}}},[e._v("删除")])]}}])})],1),r("el-dialog",{attrs:{title:"权限编辑",visible:e.dialogVisible,width:"800px"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"rolesForm",attrs:{model:e.formData,rules:e.rules}},[r("el-form-item",{attrs:{label:"身份",prop:"key","label-width":"70px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.key,callback:function(t){e.$set(e.formData,"key",t)},expression:"formData.key"}})],1),r("el-form-item",{attrs:{label:"说明",prop:"description","label-width":"70px"}},[r("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1)],1),r("div",{staticClass:"roles-tree"},[r("span",[e._v("菜单")]),r("el-tree",{ref:"tree",attrs:{"show-checkbox":"","node-key":"name",data:e.treeInfo.allRoutes,props:e.treeInfo.defaultProps,"render-after-expand":!1}})],1),r("span",{attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("确 定")])],1)],1)],1)],1)},n=[],i=(r("4de4"),r("d81d"),r("a434"),r("b0c0"),r("d3b7"),r("96cf"),r("2909")),o=r("a18c"),l=r("b775");function s(){return Object(l["a"])({url:"/getRoles",method:"get"})}var c={data:function(){return{treeInfo:{allRoutes:this.formatRoutes(Object(i["a"])(o["a"])),defaultProps:{children:"children",label:function(e){return e.meta.title}}},dialogVisible:!1,formData:{},rules:{key:[{required:!0,message:"请输入要添加的身份类别",trigger:"blur"}],description:[{required:!0,message:"请输入相关说明",trigger:"blur"}]},rolesTabData:[],rolesTabDataLoading:!1}},created:function(){this.getRolesArr()},methods:{formatRoutes:function(e){var t=this;return e.filter((function(e){return e.children&&1===e.children.length?!(e.hidden||e.children[0].hidden):!e.hidden})).map((function(e){return e.children&&1===e.children.length?e.children[0]:(e.children&&(e.children=t.formatRoutes(e.children)),e)}))},getRolesArr:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.rolesTabDataLoading=!0,e.next=3,regeneratorRuntime.awrap(s());case 3:this.rolesTabData=e.sent.data.allRoles,this.rolesTabDataLoading=!1;case 5:case"end":return e.stop()}}),null,this)},isAdmin:function(e){return"admin"===e.key},editRoles:function(e,t){var r=this;this.formData=t,this.$nextTick((function(){r.$refs.rolesForm.clearValidate(),r.$refs.tree.setCheckedKeys(t.pages)})),this.dialogVisible=!0},deleteRoles:function(e){var t=this;return regeneratorRuntime.async((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,regeneratorRuntime.awrap(this.$confirm("此操作将永久删除相关数据, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}));case 3:this.rolesTabDataLoading=!0,setTimeout((function(){t.rolesTabData.splice(e,1),t.rolesTabDataLoading=!1}),3e3),r.next=10;break;case 7:throw r.prev=7,r.t0=r["catch"](0),r.t0;case 10:case"end":return r.stop()}}),null,this,[[0,7]])},handleAddRoles:function(){var e=this;this.formData={},this.$nextTick((function(){e.$refs.tree.setCheckedKeys([])})),this.dialogVisible=!0},handleGetNodes:function(){for(var e=[],t=this.$refs.tree.getCheckedNodes(!1,!0),r=0;r<t.length;r++)e.push(t[r].name);return e},handleSubmit:function(){this.formData.pages=this.handleGetNodes(),this.dialogVisible=!1}}},d=c,u=(r("6a06"),r("2877")),f=Object(u["a"])(d,a,n,!1,null,"b86a6b9a",null);t["default"]=f.exports},"6a06":function(e,t,r){"use strict";var a=r("dbeb"),n=r.n(a);n.a},a434:function(e,t,r){"use strict";var a=r("23e7"),n=r("23cb"),i=r("a691"),o=r("50c4"),l=r("7b0b"),s=r("65f0"),c=r("8418"),d=r("1dde"),u=Math.max,f=Math.min,h=9007199254740991,p="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!d("splice")},{splice:function(e,t){var r,a,d,b,m,g,v=l(this),k=o(v.length),w=n(e,k),y=arguments.length;if(0===y?r=a=0:1===y?(r=0,a=k-w):(r=y-2,a=f(u(i(t),0),k-w)),k+r-a>h)throw TypeError(p);for(d=s(v,a),b=0;b<a;b++)m=w+b,m in v&&c(d,b,v[m]);if(d.length=a,r<a){for(b=w;b<k-a;b++)m=b+a,g=b+r,m in v?v[g]=v[m]:delete v[g];for(b=k;b>k-a+r;b--)delete v[b-1]}else if(r>a)for(b=k-a;b>w;b--)m=b+a-1,g=b+r-1,m in v?v[g]=v[m]:delete v[g];for(b=0;b<r;b++)v[b+w]=arguments[b+2];return v.length=k-a+r,d}})},d81d:function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").map,i=r("d039"),o=r("1dde"),l=o("map"),s=l&&!i((function(){[].map.call({length:-1,0:1},(function(e){throw e}))}));a({target:"Array",proto:!0,forced:!l||!s},{map:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},dbeb:function(e,t,r){}}]);
//# sourceMappingURL=chunk-7f73f140.fe945889.js.map