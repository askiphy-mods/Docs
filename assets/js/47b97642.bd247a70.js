"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6978],{9224:(e,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>t});const s=JSON.parse('{"id":"mmarcane/spells/ispell","title":"\ud83e\ude84 \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ISpell","description":"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f","source":"@site/docs/mmarcane/spells/ispell.md","sourceDirName":"mmarcane/spells","slug":"/mmarcane/spells/ispell","permalink":"/Docs/docs/mmarcane/spells/ispell","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"\ud83e\ude84 \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ISpell"},"sidebar":"tutorialSidebar","previous":{"title":"\ud83c\udf1f \u0417\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f","permalink":"/Docs/docs/category/-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f"}}');var i=n(4848),d=n(8453);const c={sidebar_position:0,title:"\ud83e\ude84 \u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 ISpell"},r=void 0,a={},t=[{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",level:2},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f <code>cast(Player player)</code>",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f-castplayer-player",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:3},{value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:3},{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u044f <code>getSpellData()</code>",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f-getspelldata",level:2},{value:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-1",level:3},{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-1",level:3},{value:"SpellData",id:"spelldata",level:2},{value:"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",level:2},{value:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b-\u0438-\u043c\u043e\u0434\u0435\u043b\u0438-\u0434\u043b\u044f-\u043a\u043d\u0438\u0433\u0438-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",level:2}];function o(e){const l={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.h2,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(l.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u044b\u0439 Java \u043a\u043b\u0430\u0441\u0441 \u0438 \u0443\u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0435\u0433\u043e \u043e\u0442 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 ",(0,i.jsx)(l.code,{children:"ISpell"})," \u0438\u0437 \u043f\u0430\u043a\u0435\u0442\u0430 ",(0,i.jsx)(l.code,{children:"ru.bananus.mmarcane.api.spell"}),"."]}),"\n",(0,i.jsx)(l.p,{children:"\u0423\u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0439\u0442\u0435 \u0438\u0437 \u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u0444\u0443\u043d\u043a\u0446\u0438\u0438:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"cast(Player player)"})}),"\n",(0,i.jsx)(l.li,{children:(0,i.jsx)(l.code,{children:"getSpellData()"})}),"\n"]}),"\n",(0,i.jsxs)(l.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f-castplayer-player",children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.jsx)(l.code,{children:"cast(Player player)"})]}),"\n",(0,i.jsx)(l.h3,{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",children:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\n",(0,i.jsxs)(l.p,{children:[(0,i.jsx)(l.code,{children:"player"})," - \u0418\u0433\u0440\u043e\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043b \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u0435."]}),"\n",(0,i.jsx)(l.h3,{id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f",children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(l.p,{children:["\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.jsx)(l.code,{children:"void"}),"."]}),"\n",(0,i.jsx)(l.h3,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,i.jsx)(l.p,{children:"\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u043e\u0442\u0432\u0435\u0447\u0430\u0435\u0442 \u0437\u0430 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u0443\u0434\u0443\u0442 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442\u044c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f."}),"\n",(0,i.jsxs)(l.h2,{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u044f-getspelldata",children:["\u0424\u0443\u043d\u043a\u0446\u0438\u044f ",(0,i.jsx)(l.code,{children:"getSpellData()"})]}),"\n",(0,i.jsx)(l.h3,{id:"\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-1",children:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(l.p,{children:["\u0414\u0430\u043d\u043d\u0430\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,i.jsx)(l.code,{children:"SpellData"})," - \u0434\u0430\u043d\u043d\u044b\u0435 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f."]}),"\n",(0,i.jsx)(l.h3,{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-1",children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\n",(0,i.jsx)(l.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f \u0438 \u0435\u0433\u043e \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."}),"\n",(0,i.jsx)(l.h2,{id:"spelldata",children:"SpellData"}),"\n",(0,i.jsxs)(l.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043e\u0431\u044a\u043a\u0442 \u043a\u043b\u0430\u0441\u0441\u0430 ",(0,i.jsx)(l.code,{children:"SpellData"})," \u0438\u0437 \u043f\u0430\u043a\u0435\u0442\u0430 ",(0,i.jsx)(l.code,{children:"ru.bananus.mmarcane.api.spell.data"}),"."]}),"\n",(0,i.jsx)(l.p,{children:"\u041f\u0435\u0440\u0435\u0434\u0430\u0439\u0442\u0435 \u0432 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u043a\u043b\u0430\u0441\u0441\u0430 \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b:"}),"\n",(0,i.jsxs)(l.ul,{children:["\n",(0,i.jsx)(l.li,{children:"spellId - \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0442\u043e\u0440 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u044f\u0437\u044b\u043a\u0435, \u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432."}),"\n",(0,i.jsx)(l.li,{children:"wandLevel - \u0442\u0440\u0435\u0431\u0443\u0435\u043c\u044b\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0430\u043b\u043e\u0447\u043a\u0438, \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f."}),"\n",(0,i.jsx)(l.li,{children:"chatTrigger - \u0441\u043b\u043e\u0432\u043e \u0438\u043b\u0438 \u0444\u0440\u0430\u0437\u0430, \u043f\u0440\u0438 \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u0438\u0438 \u0432 \u0447\u0430\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439, \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0441\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c. \u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u0438\u043c\u0438 \u0431\u0443\u043a\u0432\u0430\u043c\u0438 (\u043d\u0435\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440)."}),"\n"]}),"\n",(0,i.jsx)(l.h2,{id:"\u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f-\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",children:"\u041b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(l.p,{children:["\u0412 \u0444\u0430\u0439\u043b\u044b \u043b\u043e\u043a\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043a\u043b\u044e\u0447 ",(0,i.jsx)(l.code,{children:"spell.name.<spellId \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f>"})," \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435\u043c \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430."]}),"\n",(0,i.jsx)(l.h2,{id:"\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435-\u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b-\u0438-\u043c\u043e\u0434\u0435\u043b\u0438-\u0434\u043b\u044f-\u043a\u043d\u0438\u0433\u0438-\u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f",children:"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u044b \u0438 \u043c\u043e\u0434\u0435\u043b\u0438 \u0434\u043b\u044f \u043a\u043d\u0438\u0433\u0438 \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f"}),"\n",(0,i.jsxs)(l.p,{children:["\u0421\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u0443\u044e \u043c\u043e\u0434\u0435\u043b\u044c \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ",(0,i.jsx)(l.code,{children:"<spellId \u0432\u0430\u0448\u0435\u0433\u043e \u0437\u0430\u043a\u043b\u0438\u043d\u0430\u043d\u0438\u044f>_spellbook.json"})," \u0438 \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0443 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430 \u0441 \u0442\u0430\u043a\u0438\u043c \u0436\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c."]})]})}function p(e={}){const{wrapper:l}={...(0,d.R)(),...e.components};return l?(0,i.jsx)(l,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},8453:(e,l,n)=>{n.d(l,{R:()=>c,x:()=>r});var s=n(6540);const i={},d=s.createContext(i);function c(e){const l=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function r(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:l},e.children)}}}]);