(this["webpackJsonpinaglobe-dashboard"]=this["webpackJsonpinaglobe-dashboard"]||[]).push([[0],{32:function(e,t,c){},56:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(20),i=c.n(a),s=(c(32),c(5)),l=c(0),j=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("a",{href:"/",style:{color:"#ff4e83",fontSize:"20px",borderRadius:"8px"},children:"InAGlobe Platform"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(s.b,{to:"/create-project",children:"New Project"}),Object(l.jsx)(s.b,{to:"/users/john34",children:"My Profile"})]})]})},o=function(e){var t=e.projects,c=e.title;return Object(l.jsxs)("div",{className:"project-list",children:[Object(l.jsx)("h2",{children:c}),t.map((function(e){return Object(l.jsx)("div",{className:"project-preview",children:Object(l.jsxs)(s.b,{to:"/projects/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("h3",{children:e.status})]})},e.id)}))]})},b=function(e){var t=e.users;return Object(l.jsx)("div",{className:"user-list",children:t.map((function(e){return Object(l.jsx)("div",{className:"user-preview",children:Object(l.jsx)(s.b,{to:"/users/".concat(e.username),children:Object(l.jsx)("h2",{children:e.username})})},e.username)}))})},d=c(3),h=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),r=c[0],a=c[1],i=Object(n.useState)(null),s=Object(d.a)(i,2),l=s[0],j=s[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){a(e),j(null),console.log({data:e})})).catch((function(e){j(e.message)}))}),[e]),{data:r,error:l}},u=c(21),O=function(){var e=h("/projects"),t=e.data,c=(e.error1,h("/users"));c.data,c.error2;return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h1",{children:"Dashboard"}),Object(l.jsx)(o,{projects:t,title:"All Projects"}),Object(l.jsx)(o,{projects:t.filter((function(e){return"Completed"===e.status})),title:"Completed Projects"})]})},p=c(4),x=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(d.a)(a,2),s=i[0],j=i[1],o=Object(n.useState)("Available"),b=Object(d.a)(o,2),h=b[0],u=b[1],O=Object(n.useState)("Other"),x=Object(d.a)(O,2),m=x[0],f=x[1],v=Object(n.useState)(""),g=Object(d.a)(v,2),y=g[0],S=g[1],C=Object(n.useState)(""),E=Object(d.a)(C,2),N=E[0],w=E[1],I=Object(p.f)();return Object(l.jsxs)("div",{className:"create-project",children:[Object(l.jsx)("h2",{children:"Add a new project"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:c,description:s,status:h,tag:m,location:y,files:N};fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){I.push("/")}))},children:[Object(l.jsx)("label",{children:"Project name"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)},placeholder:"Input project name"}),Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",{required:!0,placeholder:"Add some awesome description!",value:s,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("label",{children:"Status"}),Object(l.jsxs)("select",{value:h,onChange:function(e){return u(e.target.value)},children:[Object(l.jsx)("option",{value:"Progress",children:"Progress"}),Object(l.jsx)("option",{value:"Available",children:"Available"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",{type:"text",value:y,onChange:function(e){return S(e.target.value)},placeholder:"Eg: United Kingdom"}),Object(l.jsx)("label",{children:"Type of project"}),Object(l.jsxs)("select",{value:m,onChange:function(e){return f(e.target.value)},children:[Object(l.jsx)("option",{value:"Social",children:"Social"}),Object(l.jsx)("option",{value:"Education",children:"Education"}),Object(l.jsx)("option",{value:"Wash",children:"Wash"}),Object(l.jsx)("option",{value:"Environment",children:"Environment"}),Object(l.jsx)("option",{value:"Health",children:"Health"}),Object(l.jsx)("option",{value:"Other",children:"Other"})]}),Object(l.jsx)("label",{children:"Google Drive folder"}),Object(l.jsx)("textarea",{placeholder:"Copy the link to the Google Drive folder for this project",value:N,onChange:function(e){return w(e.target.value)}}),Object(l.jsx)("button",{children:"Add project"})]})]})},m=function(){var e=Object(p.g)().id,t=Object(p.f)(),c=h("/projects/"+e),n=c.data;c.error;return Object(l.jsxs)("div",{className:"project-details",children:[n&&Object(l.jsx)("h2",{children:n.name}),n&&Object(l.jsxs)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginright:"10px",borderRadius:"8px",backgroundColor:"#f1b535"},children:["Status: ",n.status]}),n&&Object(l.jsx)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginRight:"10px",borderRadius:"8px",backgroundColor:"#595bc0"},children:n.tag}),n&&Object(l.jsxs)("h4",{children:["Location: ",n.location]}),n&&Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),window.open(n.files,"_blank")},children:"Documents"}),n&&Object(l.jsx)("p",{children:n.description}),n&&Object(l.jsx)("button",{onClick:function(c){c.preventDefault(),fetch("/projects/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete project"}),n&&Object(l.jsx)(s.b,{to:"/edit-project/".concat(n.id),className:"edit-project-button",children:"Edit project"})]})},f=function(){return Object(l.jsxs)("div",{className:"page-not-found",children:[Object(l.jsx)("h2",{children:"Something went wrong..."}),Object(l.jsx)("p",{children:"That page cannot be found"}),Object(l.jsx)(s.b,{to:"/",children:"Back to the main page"})]})},v=function(){Object(p.g)().username,Object(p.f)();var e=h("/users/ethan.w"),t=e.data;e.error;return Object(l.jsxs)("div",{className:"my-profile",children:[t&&Object(l.jsx)("h2",{children:t.firstname+" "+t.surname}),t&&Object(l.jsx)("h1",{children:"Username: "+t.username}),t&&Object(l.jsx)("h1",{children:"Title: "+t.title}),t&&Object(l.jsx)("h1",{children:"Email: "+t.email}),t&&Object(l.jsx)("h1",{children:"Bio: "+t.bio}),t&&Object(l.jsx)("h1",{children:"Joined: "+t.joined}),t&&Object(l.jsx)("h1",{children:"Location: "+t.location}),t&&Object(l.jsx)("h1",{children:"Availability: "+t.availability}),t&&Object(l.jsx)("h1",{children:"Partnership Opportunities: "+t.partnership_opportunities}),t&&Object(l.jsx)("h1",{children:"Interests: "+t.interests})]})},g=function(){var e=Object(p.g)().username,t=Object(p.f)(),c=h("/users/"+e),n=c.data;c.error;return Object(l.jsxs)("div",{className:"user",children:[Object(l.jsx)("div",{children:n&&Object(l.jsx)("h2",{children:n.firstname+" "+n.surname})}),Object(l.jsxs)("div",{children:[n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Username: "}),n.username]}),n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Email: "}),n.email]}),n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Title: "}),n.title]}),n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Joined: "}),n.joined]}),n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Location: "}),n.location]}),n&&Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Availability: "}),n.availability]})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[n&&Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Bio"})}),n&&Object(l.jsx)("p",{children:n.bio})]}),Object(l.jsxs)("div",{children:[n&&Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Partnership Opportunities"})}),n&&Object(l.jsx)("p",{children:n.partnership_opportunities})]}),Object(l.jsxs)("div",{children:[n&&Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Interests"})}),n&&Object(l.jsx)("p",{children:n.interests})]}),n&&Object(l.jsx)("button",{onClick:function(c){c.preventDefault(),fetch("/users/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete user"}),n&&Object(l.jsx)(s.b,{to:"/edit-user/".concat(e),className:"edit-user-button",children:"Edit details"})]})},y=function(){var e=h("/users"),t=e.data;e.error2;return Object(l.jsxs)("div",{className:"users",children:[Object(l.jsx)("h1",{children:"Users"}),Object(l.jsx)(b,{users:t,title:"All Users"})]})},S=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),i=Object(d.a)(a,2),s=i[0],j=i[1],o=Object(n.useState)(""),b=Object(d.a)(o,2),h=b[0],u=b[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),m=x[0],f=x[1],v=Object(n.useState)(""),g=Object(d.a)(v,2),y=g[0],S=g[1],C=Object(n.useState)(""),E=Object(d.a)(C,2),N=E[0],w=E[1],I=Object(n.useState)(""),A=Object(d.a)(I,2),P=A[0],T=A[1],D=Object(n.useState)(""),F=Object(d.a)(D,2),k=F[0],L=F[1],J=Object(n.useState)(""),B=Object(d.a)(J,2),G=B[0],q=B[1],U=Object(n.useState)(""),W=Object(d.a)(U,2),_=W[0],H=W[1],R=Object(n.useState)(""),z=Object(d.a)(R,2),M=z[0],V=z[1],K=Object(n.useState)(""),Q=Object(d.a)(K,2),X=Q[0],Y=Q[1],Z=Object(p.f)();return Object(l.jsxs)("div",{className:"add-user",children:[Object(l.jsx)("h2",{children:"Add a new user"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstname:c,surname:s,password:h,title:m,email:y,bio:N,joined:P,location:k,availability:G,partnership_opportunities:_,interests:M,username:X};fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){Z.push("/")}))},children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",required:!0,value:X,onChange:function(e){return Y(e.target.value)},placeholder:"Input username here"}),Object(l.jsx)("label",{children:"Firstname"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)},placeholder:"Input your first name here"}),Object(l.jsx)("label",{children:"Surname"}),Object(l.jsx)("input",{type:"text",required:!0,value:s,onChange:function(e){return j(e.target.value)},placeholder:"Input surname here"}),Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",required:!0,value:m,onChange:function(e){return f(e.target.value)},placeholder:"State your role at InAGlobe (eg: volunteer)"}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return u(e.target.value)},placeholder:"Input the default password (to be changed by the user)"}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"text",required:!0,value:y,onChange:function(e){return S(e.target.value)},placeholder:"Input InAGlobe email here"}),Object(l.jsx)("label",{children:"Bio"}),Object(l.jsx)("input",{type:"text",value:N,onChange:function(e){return w(e.target.value)},placeholder:"Tell your colleagues a bit about yourself"}),Object(l.jsx)("label",{children:"Joined"}),Object(l.jsx)("input",{type:"text",value:P,onChange:function(e){return T(e.target.value)},placeholder:"Eg: 20th April 2020"}),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",{type:"text",value:k,onChange:function(e){return L(e.target.value)},placeholder:"Where are you currently based?"}),Object(l.jsx)("label",{children:"Availibility"}),Object(l.jsx)("input",{type:"text",value:G,onChange:function(e){return q(e.target.value)},placeholder:"How available are you approximately per week?"}),Object(l.jsx)("label",{children:"Partnership Opportunities"}),Object(l.jsx)("input",{type:"text",value:_,onChange:function(e){return H(e.target.value)},placeholder:"Eg: Department of Computing at Imperial College London"}),Object(l.jsx)("label",{children:"Interests"}),Object(l.jsx)("input",{type:"text",value:M,onChange:function(e){return V(e.target.value)},placeholder:"What are your hobbies?"}),Object(l.jsx)("button",{children:"Add user"})]})]})},C=c(2),E=c(17),N=function(){var e=Object(p.g)().id,t=h("/projects/"+e),c=t.data,n=c.name,r=c.description,a=c.status,i=c.location,s=c.tag,j=c.files,o=(t.error,Object(p.f)()),b={name:n,description:r,status:a,location:i,tag:s,files:j},d=Object(E.a)({defaultValues:b}),u=d.register,O=d.handleSubmit;return Object(l.jsxs)("div",{className:"edit-project",children:[Object(l.jsx)("h2",{children:"Edit project"}),Object(l.jsxs)("form",{onSubmit:O((function(t){fetch("/projects/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){o.push("/")}))})),children:[Object(l.jsx)("label",{htmlFor:"name",children:"Project name"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},u("name")),{},{placeholder:"Insert project name here"})),Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",Object(C.a)(Object(C.a)({},u("description")),{},{name:"description",placeholder:"Insert description of the project here"})),Object(l.jsx)("label",{children:"Status"}),Object(l.jsxs)("select",Object(C.a)(Object(C.a)({},u("status")),{},{name:"status",children:[Object(l.jsx)("option",{value:"Progress",children:"Progress"}),Object(l.jsx)("option",{value:"Available",children:"Available"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]})),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},u("location")),{},{type:"text",placeholder:"Insert location of project here",name:"location"})),Object(l.jsx)("label",{children:"Type of project"}),Object(l.jsxs)("select",Object(C.a)(Object(C.a)({},u("tag")),{},{name:"tag",children:[Object(l.jsx)("option",{value:"Social",children:"Social"}),Object(l.jsx)("option",{value:"Education",children:"Education"}),Object(l.jsx)("option",{value:"Wash",children:"Wash"}),Object(l.jsx)("option",{value:"Environment",children:"Environment"}),Object(l.jsx)("option",{value:"Health",children:"Health"}),Object(l.jsx)("option",{value:"Other",children:"Other"})]})),Object(l.jsx)("label",{children:"Google Drive folder"}),Object(l.jsx)("textarea",Object(C.a)(Object(C.a)({},u("files")),{},{name:"files",placeholder:"Insert Google Drive Folder link here"})),Object(l.jsx)("button",{type:"submit",children:"Save project details"})]})]})},w=function(e){return Object(l.jsxs)(u.slide,{children:[Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(s.b,{to:"/",children:"Home"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(s.b,{to:"/users",children:"All Users"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(s.b,{to:"/add-user",children:"Add User"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(s.b,{to:"/users/john34",children:"Profile"})})]})},I=function(){var e=Object(p.g)().username,t=h("/users/"+e),c=t.data,n=c.firstname,r=c.surname,a=c.password,i=c.title,s=c.email,j=c.bio,o=c.joined,b=c.location,d=c.availability,u=c.partnership_opportunities,O=c.interests,x=(t.error,Object(p.f)()),m={firstname:n,surname:r,password:a,title:i,email:s,bio:j,joined:o,location:b,availability:d,partnership_opportunities:u,interests:O},f=Object(E.a)({defaultValues:m}),v=f.register,g=f.handleSubmit;return Object(l.jsxs)("div",{className:"edit-user",children:[Object(l.jsx)("h2",{children:"Edit user"}),Object(l.jsxs)("form",{onSubmit:g((function(t){fetch("/users/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){x.push("/")}))})),children:[Object(l.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("firstname")),{},{placeholder:"Input your first name here"})),Object(l.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("surname")),{},{placeholder:"Input surname here"})),Object(l.jsx)("label",{htmlFor:"title",children:"Title"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("title")),{},{placeholder:"State your role at InAGlobe (eg: volunteer)"})),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("password")),{},{placeholder:"Input the password"})),Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("email")),{},{placeholder:"Input InAGlobe email here"})),Object(l.jsx)("label",{htmlFor:"bio",children:"Bio"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("bio")),{},{placeholder:"Tell your colleagues a bit about yourself"})),Object(l.jsx)("label",{htmlFor:"joined",children:"Joined"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("joined")),{},{placeholder:"Eg: 20th April 2020"})),Object(l.jsx)("label",{htmlFor:"location",children:"Location"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("location")),{},{placeholder:"Where are you currently based?"})),Object(l.jsx)("label",{htmlFor:"availability",children:"Availibility"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("availability")),{},{placeholder:"How available are you approximately per week?"})),Object(l.jsx)("label",{htmlFor:"partnership_opportunities",children:"Partnership Opportunities"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("partnership_opportunities")),{},{placeholder:"Eg: Department of Computing at Imperial College London"})),Object(l.jsx)("label",{htmlFor:"interests",children:"Interests"}),Object(l.jsx)("input",Object(C.a)(Object(C.a)({},v("interests")),{},{placeholder:"What are your hobbies?"})),Object(l.jsx)("button",{type:"submit",children:"Save user details"})]})]})};var A=function(){return Object(l.jsx)(s.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(w,{}),Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{exact:!0,path:"/",children:Object(l.jsx)(O,{})}),Object(l.jsx)(p.a,{path:"/create-project",children:Object(l.jsx)(x,{})}),Object(l.jsx)(p.a,{path:"/add-user",children:Object(l.jsx)(S,{})}),Object(l.jsx)(p.a,{path:"/my-profile",children:Object(l.jsx)(v,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/users",children:Object(l.jsx)(y,{})}),Object(l.jsx)(p.a,{path:"/users/:username",children:Object(l.jsx)(g,{})}),Object(l.jsx)(p.a,{path:"/edit-user/:username",children:Object(l.jsx)(I,{})}),Object(l.jsx)(p.a,{path:"/projects/:id",children:Object(l.jsx)(m,{})}),Object(l.jsx)(p.a,{path:"/edit-project/:id",children:Object(l.jsx)(N,{})}),Object(l.jsx)(p.a,{path:"*",children:Object(l.jsx)(f,{})})]})})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,57)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(A,{})}),document.getElementById("root")),P()}},[[56,1,2]]]);
//# sourceMappingURL=main.84278ba3.chunk.js.map