(function(){"use strict";var t={742:function(t,e,a){var n=a(963),o=a(252);const i={id:"app"};function r(t,e,a,n,r,l){const s=(0,o.up)("v-table-vue");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(s,{table_data:t.DATA},null,8,["table_data"])])}var l=a(907),s=a(577);const c={class:"v-table__form"},u=(0,o.uE)('<option class="v-table__option" disabled value="">Choose column</option><option class="v-table__option">Date</option><option class="v-table__option">Name</option><option class="v-table__option">Amount</option><option class="v-table__option">Distance</option>',5),d=[u],_=(0,o._)("option",{class:"v-table__option",disabled:"",value:""},"Choose condition",-1),p=(0,o._)("option",{class:"v-table__option"},"=",-1),v=(0,o._)("option",{class:"v-table__option"},"<",-1),m=(0,o._)("option",{class:"v-table__option"},">",-1),b=[_,p,v,m],f={class:"v-table"},h={class:"v-table__header"},w={class:"v-table__body"},g={class:"v-table__pagination"},D=["onClick"],A={class:"page-counter"};function T(t,e,a,i,r,l){const u=(0,o.up)("v-table-row-vue");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("form",c,[(0,o.wy)((0,o._)("select",{class:"v-table__select","onUpdate:modelValue":e[0]||(e[0]=t=>r.column=t)},d,512),[[n.bM,r.column]]),(0,o.wy)((0,o._)("select",{class:"v-table__select","onUpdate:modelValue":e[1]||(e[1]=t=>r.condition=t)},b,512),[[n.bM,r.condition]]),(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>r.text=t),class:"v-table__input",type:"text"},null,512),[[n.nr,r.text]]),(0,o._)("button",{class:"v-table__btn",type:"button",onClick:e[3]||(e[3]=t=>l.filter(r.column,r.condition,r.text))},"filter")]),(0,o._)("div",f,[(0,o._)("div",h,[(0,o._)("p",{class:(0,s.C_)({"column--active":"Date"===r.column})},"Date",2),(0,o._)("p",{class:(0,s.C_)({"column--active":"Name"===r.column})},"Name",2),(0,o._)("p",{class:(0,s.C_)({"column--active":"Amount"===r.column})},"Amount",2),(0,o._)("p",{class:(0,s.C_)({"column--active":"Distance"===r.column})},"Distance",2)]),(0,o._)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.paginatedData,(t=>((0,o.wg)(),(0,o.j4)(u,{key:t.id,row_data:t},null,8,["row_data"])))),128))]),(0,o._)("div",g,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.pages,(t=>((0,o.wg)(),(0,o.iD)("div",{class:(0,s.C_)(["page",{"page--active":t===r.pageNumber}]),key:t,onClick:e=>l.pageClick(t)},(0,s.zw)(t),11,D)))),128)),(0,o._)("span",A,"page #"+(0,s.zw)(this.pageNumber),1)])])],64)}const E={class:"v-table-row"},y={class:"row row__date"},x={class:"row row__name"},C={class:"row row__amount"},O={class:"row row__distance"};function P(t,e,a,n,i,r){return(0,o.wg)(),(0,o.iD)("div",E,[(0,o._)("div",y,(0,s.zw)(a.row_data.birthDate),1),(0,o._)("div",x,(0,s.zw)(a.row_data.lastName),1),(0,o._)("div",C,(0,s.zw)(a.row_data.height),1),(0,o._)("div",O,(0,s.zw)(a.row_data.weight),1)])}var k={name:"v-table-row-vue",props:{row_data:{type:Object,default:()=>{}}}},N=a(744);const j=(0,N.Z)(k,[["render",P]]);var F=j,R={name:"v-table-vue",components:{vTableRowVue:F},props:{table_data:{type:Array,default:()=>[]}},data(){return{userPerPage:6,pageNumber:1,column:"",condition:"",text:"",filteredArr:[]}},methods:{...(0,l.nv)(["GET_FILTERED_DATA"]),pageClick(t){this.pageNumber=t},filter(t,e,a){this.GET_FILTERED_DATA({column:t,condition:e,text:a})}},computed:{pages(){return Math.ceil(this.table_data.length/this.userPerPage)},paginatedData(){let t=(this.pageNumber-1)*this.userPerPage,e=t+this.userPerPage;return this.table_data.slice(t,e)}}};const I=(0,N.Z)(R,[["render",T]]);var M=I,G={name:"App",components:{vTableVue:M},computed:{...(0,l.Se)(["DATA"])},methods:{...(0,l.nv)(["GET_DATA_FROM_API"])},mounted(){this.GET_DATA_FROM_API()}};const L=(0,N.Z)(G,[["render",r]]);var z=L,S=a(669),V=a.n(S),H=(0,l.MT)({state:{data:[],column:"",condition:"",text:""},getters:{DATA(t){return t.data},column(t){return t.column},condition(t){return t.condition},text(t){return t.text}},mutations:{SET_DATA(t,e){t.data=e},SET_FILTERED_DATA(t,e){let{column:a,condition:n,text:o}=e;return t.column=a,t.condition=n,t.text=o,"Date"===a&&">"===n?t.data=t.data.filter((t=>t.birthDate>o)):"Date"===a&&"<"===n?t.data=t.data.filter((t=>t.birthDate<o)):"Date"===a&&"="===n?t.data=t.data.filter((t=>t.birthDate===o)):"Name"===a?t.data=t.data.filter((t=>t.lastName.toLowerCase().includes(o.toLowerCase()))):"Amount"===a&&"="===n?t.data=t.data.filter((t=>t.height===o)):"Amount"===a&&">"===n?t.data=t.data.filter((t=>t.height>o)):"Amount"===a&&"<"===n?t.data=t.data.filter((t=>t.height<o)):"Distance"===a&&"<"===n?t.data=t.data.filter((t=>t.weight<o)):"Distance"===a&&">"===n?t.data=t.data.filter((t=>t.weight>o)):"Distance"===a&&"="===n?t.data=t.data.filter((t=>t.weight===o)):void 0}},actions:{GET_DATA_FROM_API({commit:t}){return V()("https://dummyjson.com/users",{method:"GET"}).then((e=>{console.log(e),t("SET_DATA",e.data.users)}))},GET_FILTERED_DATA({commit:t},e){t("SET_FILTERED_DATA",e)}},modules:{}});(0,n.ri)(z).use(H).mount("#app")}},e={};function a(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,o,i){if(!n){var r=1/0;for(u=0;u<t.length;u++){n=t[u][0],o=t[u][1],i=t[u][2];for(var l=!0,s=0;s<n.length;s++)(!1&i||r>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[s])}))?n.splice(s--,1):(l=!1,i<r&&(r=i));if(l){t.splice(u--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,o,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,i,r=n[0],l=n[1],s=n[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(s)var u=s(a)}for(e&&e(n);c<r.length;c++)i=r[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},n=self["webpackChunkwelbex"]=self["webpackChunkwelbex"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(742)}));n=a.O(n)})();
//# sourceMappingURL=app.08b7266b.js.map