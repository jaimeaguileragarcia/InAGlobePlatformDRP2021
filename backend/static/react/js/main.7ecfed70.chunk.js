(this["webpackJsonpinaglobe-dashboard"]=this["webpackJsonpinaglobe-dashboard"]||[]).push([[0],{22:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(16),i=n.n(a),s=(n(22),n(5)),j=n(0),l=function(){return Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("a",{href:"/",style:{color:"#ff4e83",fontSize:"20px",borderRadius:"8px"},children:"InAGlobe Platform"}),Object(j.jsxs)("div",{className:"links",children:[Object(j.jsx)(s.b,{to:"/create-project",children:"New Project"}),Object(j.jsx)(s.b,{to:"/my-profile",children:"My Profile"}),Object(j.jsx)(s.b,{to:"/add-user",children:"Add User"})]})]})},o=function(e){var t=e.projects,n=e.title;return Object(j.jsxs)("div",{className:"project-list",children:[Object(j.jsx)("h2",{children:n}),t.map((function(e){return Object(j.jsx)("div",{className:"project-preview",children:Object(j.jsxs)(s.b,{to:"/projects/".concat(e.id),children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsx)("h3",{children:e.status})]})},e.id)}))]})},u=function(e){var t=e.users;return Object(j.jsx)("div",{className:"user-list",children:t.map((function(e){return Object(j.jsx)("div",{className:"user-preview",children:Object(j.jsxs)(s.b,{to:"/users/".concat(e.username),children:[Object(j.jsx)("h2",{children:e.firstname}),Object(j.jsx)("h3",{children:e.surname})]})},e.username)}))})},b=n(3),h=function(e){var t=Object(c.useState)([]),n=Object(b.a)(t,2),r=n[0],a=n[1],i=Object(c.useState)(null),s=Object(b.a)(i,2),j=s[0],l=s[1];return Object(c.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){a(e),l(null),console.log({data:e})})).catch((function(e){l(e.message)}))}),[e]),{data:r,error:j}},d=function(){var e=h("/projects"),t=e.data,n=(e.error1,h("/users")),c=n.data;n.error2;return Object(j.jsxs)("div",{className:"home",children:[Object(j.jsx)("h1",{children:"Dashboard"}),Object(j.jsx)(o,{projects:t,title:"All Projects"}),Object(j.jsx)(o,{projects:t.filter((function(e){return"Completed"===e.status})),title:"Completed Projects"}),Object(j.jsx)("h2",{children:"Users"}),Object(j.jsx)(u,{users:c,title:"All Users"})]})},O=n(2),p=function(){var e=Object(c.useState)("Input project name"),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("Add some awesome description!"),i=Object(b.a)(a,2),s=i[0],l=i[1],o=Object(c.useState)("Available"),u=Object(b.a)(o,2),h=u[0],d=u[1],p=Object(c.useState)("Other"),x=Object(b.a)(p,2),v=x[0],f=x[1],m=Object(c.useState)(""),g=Object(b.a)(m,2),S=g[0],y=g[1],C=Object(c.useState)("Copy the link to the Google Drive folder for this project"),N=Object(b.a)(C,2),P=N[0],E=N[1],A=Object(O.f)();return Object(j.jsxs)("div",{className:"create-project",children:[Object(j.jsx)("h2",{children:"Add a new project"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:n,description:s,status:h,tag:v,location:S,files:P};fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){A.push("/")}))},children:[Object(j.jsx)("label",{children:"Project name"}),Object(j.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{required:!0,value:s,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{children:"Status"}),Object(j.jsxs)("select",{value:h,onChange:function(e){return d(e.target.value)},children:[Object(j.jsx)("option",{value:"Progress",children:"Progress"}),Object(j.jsx)("option",{value:"Available",children:"Available"}),Object(j.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(j.jsx)("label",{children:"Location"}),Object(j.jsx)("input",{type:"text",required:!0,value:S,onChange:function(e){return y(e.target.value)}}),Object(j.jsx)("label",{children:"Type of project"}),Object(j.jsxs)("select",{value:v,onChange:function(e){return f(e.target.value)},children:[Object(j.jsx)("option",{value:"Social",children:"Social"}),Object(j.jsx)("option",{value:"Education",children:"Education"}),Object(j.jsx)("option",{value:"Wash",children:"Wash"}),Object(j.jsx)("option",{value:"Environment",children:"Environment"}),Object(j.jsx)("option",{value:"Health",children:"Health"}),Object(j.jsx)("option",{value:"Other",children:"Other"})]}),Object(j.jsx)("label",{children:"Google Drive folder"}),Object(j.jsx)("textarea",{required:!0,value:P,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)("button",{children:"Add project"})]})]})},x=function(){var e=Object(O.g)().id,t=Object(O.f)(),n=h("/projects/"+e),c=n.data;n.error;return Object(j.jsxs)("div",{className:"project-details",children:[c&&Object(j.jsx)("h2",{children:c.name}),c&&Object(j.jsxs)("h3",{children:["Status: ",c.status]}),c&&Object(j.jsxs)("p",{children:["Descsription: ",c.description]}),Object(j.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("/projects/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete project"}),Object(j.jsx)(s.b,{to:"/edit-project/".concat(c.id),className:"edit-project-button",children:"Edit project"})]})},v=function(){return Object(j.jsxs)("div",{className:"page-not-found",children:[Object(j.jsx)("h2",{children:"Something went wrong..."}),Object(j.jsx)("p",{children:"That page cannot be found"}),Object(j.jsx)(s.b,{to:"/",children:"Back to the main page"})]})},f=function(){var e=Object(O.g)().username,t=(Object(O.f)(),h("/users/"+e)),n=t.data;t.error;return Object(j.jsxs)("div",{className:"my-profile",children:[n&&Object(j.jsx)("h2",{children:n.firstname+" "+n.surname}),n&&Object(j.jsx)("h1",{children:"Username: "+n.username}),n&&Object(j.jsx)("h1",{children:"Title: "+n.title}),n&&Object(j.jsx)("h1",{children:"Email: "+n.email}),n&&Object(j.jsx)("h1",{children:"Bio: "+n.bio}),n&&Object(j.jsx)("h1",{children:"Joined: "+n.joined}),n&&Object(j.jsx)("h1",{children:"Location: "+n.location}),n&&Object(j.jsx)("h1",{children:"Availability: "+n.availability}),n&&Object(j.jsx)("h1",{children:"Partnership Opportunities: "+n.partnership_opportunities}),n&&Object(j.jsx)("h1",{children:"Interests: "+n.interests})]})},m=function(){var e=Object(O.g)().username,t=(Object(O.f)(),h("/users/"+e)),n=t.data;t.error;return Object(j.jsxs)("div",{className:"user",children:[n&&Object(j.jsx)("h2",{children:n.firstname+" "+n.surname}),n&&Object(j.jsx)("h1",{children:"Username: "+n.username}),n&&Object(j.jsx)("h1",{children:"Title: "+n.title}),n&&Object(j.jsx)("h1",{children:"Email: "+n.email}),n&&Object(j.jsx)("h1",{children:"Bio: "+n.bio}),n&&Object(j.jsx)("h1",{children:"Joined: "+n.joined}),n&&Object(j.jsx)("h1",{children:"Location: "+n.location}),n&&Object(j.jsx)("h1",{children:"Availability: "+n.availability}),n&&Object(j.jsx)("h1",{children:"Partnership Opportunities: "+n.partnership_opportunities}),n&&Object(j.jsx)("h1",{children:"Interests: "+n.interests})]})},g=function(){var e=Object(c.useState)("Input project name"),t=Object(b.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)("Input surname"),i=Object(b.a)(a,2),s=i[0],l=i[1],o=Object(c.useState)("Input password"),u=Object(b.a)(o,2),h=u[0],d=u[1],p=Object(c.useState)("Input email"),x=Object(b.a)(p,2),v=x[0],f=x[1],m=Object(c.useState)("Input short bio"),g=Object(b.a)(m,2),S=g[0],y=g[1],C=Object(c.useState)("Input joined date"),N=Object(b.a)(C,2),P=N[0],E=N[1],A=Object(c.useState)("Input location"),I=Object(b.a)(A,2),q=I[0],w=I[1],D=Object(c.useState)("Input availibility"),T=Object(b.a)(D,2),J=T[0],L=T[1],k=Object(c.useState)("Input partners"),B=Object(b.a)(k,2),U=B[0],F=B[1],G=Object(c.useState)("Input interests"),H=Object(b.a)(G,2),W=H[0],_=H[1],M=Object(c.useState)("Input username"),z=Object(b.a)(M,2),R=z[0],K=z[1],Q=Object(O.f)();return Object(j.jsxs)("div",{className:"add-user",children:[Object(j.jsx)("h2",{children:"Add a new user"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstname:n,surname:s,password:h,email:v,bio:S,joined:P,location:q,availability:J,partnership_opportunities:U,interests:W,username:R};fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){Q.push("/")}))},children:[Object(j.jsx)("label",{children:"Username"}),Object(j.jsx)("input",{type:"text",required:!0,value:R,onChange:function(e){return K(e.target.value)}}),Object(j.jsx)("label",{children:"Firstname"}),Object(j.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("label",{children:"Surname"}),Object(j.jsx)("input",{type:"text",required:!0,value:s,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)("label",{children:"Password"}),Object(j.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("label",{children:"Email"}),Object(j.jsx)("input",{type:"text",required:!0,value:v,onChange:function(e){return f(e.target.value)}}),Object(j.jsx)("label",{children:"Bio"}),Object(j.jsx)("input",{type:"text",required:!0,value:S,onChange:function(e){return y(e.target.value)}}),Object(j.jsx)("label",{children:"Joined"}),Object(j.jsx)("input",{type:"text",required:!0,value:P,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)("label",{children:"Location"}),Object(j.jsx)("input",{type:"text",required:!0,value:q,onChange:function(e){return w(e.target.value)}}),Object(j.jsx)("label",{children:"Availibility"}),Object(j.jsx)("input",{type:"text",required:!0,value:J,onChange:function(e){return L(e.target.value)}}),Object(j.jsx)("label",{children:"Parntership Opportunities"}),Object(j.jsx)("input",{type:"text",required:!0,value:U,onChange:function(e){return F(e.target.value)}}),Object(j.jsx)("label",{children:"interests"}),Object(j.jsx)("input",{type:"text",required:!0,value:W,onChange:function(e){return _(e.target.value)}}),Object(j.jsx)("button",{children:"Add user"})]})]})},S=function(){var e=Object(O.g)().id,t=h("/projects/"+e),n=t.data,r=(t.error,Object(c.useState)([n.name])),a=Object(b.a)(r,2),i=a[0],s=a[1],l=Object(c.useState)([n.description]),o=Object(b.a)(l,2),u=o[0],d=o[1],p=Object(c.useState)(n.status),x=Object(b.a)(p,2),v=x[0],f=x[1],m=Object(c.useState)(n.tag),g=Object(b.a)(m,2),S=g[0],y=g[1],C=Object(c.useState)(n.location),N=Object(b.a)(C,2),P=N[0],E=N[1],A=Object(c.useState)(n.files),I=Object(b.a)(A,2),q=I[0],w=I[1],D={name:i,description:u,status:v,tag:S,location:P,files:q},T=Object(O.f)();return Object(j.jsxs)("div",{className:"edit-project",children:[Object(j.jsx)("h2",{children:"Edit project"}),Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),fetch("/projects/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)}).then((function(){T.push("/")}))},children:[Object(j.jsx)("label",{children:"Project name"}),Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){return s(e.target.value)}}),Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("textarea",{value:u,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)("label",{children:"Status"}),Object(j.jsxs)("select",{value:v,onChange:function(e){return f(e.target.value)},children:[Object(j.jsx)("option",{value:"Progress",children:"Progress"}),Object(j.jsx)("option",{value:"Available",children:"Available"}),Object(j.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(j.jsx)("label",{children:"Location"}),Object(j.jsx)("input",{type:"text",value:P,onChange:function(e){return E(e.target.value)}}),Object(j.jsx)("label",{children:"Type of project"}),Object(j.jsxs)("select",{value:S,onChange:function(e){return y(e.target.value)},children:[Object(j.jsx)("option",{value:"Social",children:"Social"}),Object(j.jsx)("option",{value:"Education",children:"Education"}),Object(j.jsx)("option",{value:"Wash",children:"Wash"}),Object(j.jsx)("option",{value:"Environment",children:"Environment"}),Object(j.jsx)("option",{value:"Health",children:"Health"}),Object(j.jsx)("option",{value:"Other",children:"Other"})]}),Object(j.jsx)("label",{children:"Google Drive folder"}),Object(j.jsx)("textarea",{value:q,onChange:function(e){return w(e.target.value)}}),Object(j.jsx)("button",{children:"Save"})]})]})};var y=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)("div",{className:"content",children:Object(j.jsxs)(O.c,{children:[Object(j.jsx)(O.a,{exact:!0,path:"/",children:Object(j.jsx)(d,{})}),Object(j.jsx)(O.a,{path:"/create-project",children:Object(j.jsx)(p,{})}),Object(j.jsx)(O.a,{path:"/add-user",children:Object(j.jsx)(g,{})}),Object(j.jsx)(O.a,{path:"/my-profile",children:Object(j.jsx)(f,{})}),Object(j.jsx)(O.a,{path:"/users/:username",children:Object(j.jsx)(m,{})}),Object(j.jsx)(O.a,{path:"/projects/:id",children:Object(j.jsx)(x,{})}),Object(j.jsx)(O.a,{path:"/edit-project/:id",children:Object(j.jsx)(S,{})}),Object(j.jsx)(O.a,{path:"*",children:Object(j.jsx)(v,{})})]})})]})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),C()}},[[29,1,2]]]);
//# sourceMappingURL=main.7ecfed70.chunk.js.map