(this["webpackJsonpinaglobe-dashboard"]=this["webpackJsonpinaglobe-dashboard"]||[]).push([[0],{38:function(e,t,n){},72:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(16),a=n.n(s),i=(n(38),n(5)),o=n(7),l=n(3);function j(){var e=Object(c.useState)(function(){var e=localStorage.getItem("token"),t=JSON.parse(e);return null===t||void 0===t?void 0:t.token}()),t=Object(l.a)(e,2),n=t[0],r=t[1];return{setToken:function(e){localStorage.setItem("token",JSON.stringify(e)),r(e.token)},token:n}}var d=n(0),u=function(){var e=j(),t=(e.setToken,e.token);return Object(d.jsxs)("nav",{className:"navbar",children:[Object(d.jsx)("a",{href:"/",style:{color:"#ff4e83",fontSize:"20px",borderRadius:"8px"},children:"InAGlobe Platform"}),Object(d.jsxs)("div",{className:"links",children:[Object(d.jsx)(i.b,{to:"/create-project",children:"New Project"}),Object(d.jsx)(i.b,{to:"/users/"+t,children:"My Profile"})]})]})},b=function(e){var t=e.projects;return Object(d.jsx)("div",{className:"project-list",children:t.map((function(e){return Object(d.jsx)("div",{className:"preview",children:Object(d.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsx)("h3",{children:e.status})]})},e.id)}))})},h=function(e){var t=Object(c.useState)([]),n=Object(l.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(null),i=Object(l.a)(a,2),o=i[0],j=i[1],d=Object(c.useState)(!0),u=Object(l.a)(d,2),b=u[0],h=u[1];return Object(c.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){s(e),h(!1),j(null)})).catch((function(e){j(e.message)}))}),[e]),{data:r,error:o,isPending:b}},O=function(e){var t=e.todos,n=e.title,r=j(),s=(r.setToken,r.token),a=h("/users"),i=a.data,o=(a.error,a.isPending),u=Object(c.useState)(""),b=Object(l.a)(u,2),O=b[0],p=b[1],x=Object(c.useState)(1),m=Object(l.a)(x,2),f=m[0],v=m[1],g=Object(c.useState)(Date.now()),y=Object(l.a)(g,2),k=y[0],S=y[1],w=Object(c.useState)(s),C=Object(l.a)(w,2),N=C[0],P=C[1];return Object(d.jsxs)("div",{className:"todo-list",style:{float:"right"},children:[Object(d.jsx)("h2",{children:n}),Object(d.jsx)("div",{className:"add-todo-button",children:Object(d.jsx)("button",{onClick:function(){document.getElementsByClassName("add-todo-form")[0].style.display="block"},children:"Add a personal task"})}),o&&Object(d.jsx)("h2",{children:"Loading..."}),Object(d.jsx)("div",{className:"add-todo-form",children:i&&Object(d.jsxs)("form",{onSubmit:function(e){document.getElementsByClassName("add-todo-form")[0].style.display="none",e.preventDefault();var t={todo_desc:O,priority:f,due_date:k,username:N};fetch("/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){window.location.reload()}))},children:[Object(d.jsx)("label",{children:"Task description [required]"}),Object(d.jsx)("textarea",{value:O,onChange:function(e){return p(e.target.value)},required:!0,placeholder:"Add some awesome description!"}),Object(d.jsx)("label",{children:"Priority level (1: lowest, 4: highest)"}),Object(d.jsxs)("select",{value:f,onChange:function(e){return v(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"})]}),Object(d.jsx)("label",{children:"When should this task be done by? [required]"}),Object(d.jsx)("input",{required:!0,type:"date",value:k,onChange:function(e){return S(e.target.value)}}),Object(d.jsx)("label",{children:"Assigned user"}),Object(d.jsx)("select",{value:N,onChange:function(e){return P(e.target.value)},children:i.map((function(e){return Object(d.jsx)("option",{value:e.username,children:e.username})}))}),Object(d.jsx)("button",{children:"Save task"})]})}),Object(d.jsx)("div",{className:"personal-todos",children:t.map((function(e){return Object(d.jsxs)("div",{className:"todo-preview",children:[Object(d.jsx)("h2",{children:e.todo_desc}),Object(d.jsxs)("h3",{children:["Priority level: ",e.priority]}),Object(d.jsxs)("h3",{children:["To be done by:",e.due_date]}),Object(d.jsx)("button",{onClick:(t=e.id,function(e){e.preventDefault(),fetch("/todos/"+t,{method:"DELETE"}).then((function(){window.location.reload()}))}),children:"Complete"})]},e.id);var t}))})]})},p=function(){var e=h("/todos"),t=e.data,n=(e.errorTodos,e.isPendingTodos),c=j(),r=(c.setToken,c.token),s=h("/user_project/username/"+r),a=s.data,i=(s.errorRelevantProjects,s.isPendingRelevantProjects);return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("h1",{children:"Dashboard"}),Object(d.jsxs)("div",{className:"home-projects",style:{float:"left",width:"600px"},children:[i&&Object(d.jsx)("h2",{children:"Loading..."}),a&&Object(d.jsx)(b,{projects:a,title:"My Projects"})]}),Object(d.jsxs)("div",{className:"homeTodos",children:[n&&Object(d.jsx)("h2",{children:"Loading..."}),t&&Object(d.jsx)(O,{todos:t.filter((function(e){return e.username===r})),title:"My Tasks"})]})]})},x=n(6),m=n.n(x),f=n(8),v=n(33),g=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(l.a)(s,2),i=a[0],j=a[1],u=Object(c.useState)("Available"),b=Object(l.a)(u,2),O=b[0],p=b[1],x=Object(c.useState)("Other"),g=Object(l.a)(x,2),y=g[0],k=g[1],S=Object(c.useState)(""),w=Object(l.a)(S,2),C=w[0],N=w[1],P=Object(c.useState)(""),T=Object(l.a)(P,2),A=T[0],D=T[1],E=Object(c.useState)([]),I=Object(l.a)(E,2),_=I[0],L=I[1],q=Object(o.f)(),F=h("/users/user_project"),J=F.data,B=(F.error,F.isPending,J.map((function(e){return e.username}))),G=function(){var e=Object(f.a)(m.a.mark((function e(t){var c,r,s,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),c={name:n,description:i,status:O,tag:y,location:C,files:A},e.next=4,fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 4:return r=e.sent,e.next=7,r.json();case 7:s=e.sent,a=s.id,_.map((function(e){var t={username:e,project_id:a};fetch("/user_project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})),console.log(J),console.log(B),console.log(_),q.push("/");case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"create-project",children:[Object(d.jsx)("h2",{children:"Add a new project"}),Object(d.jsxs)("form",{onSubmit:G,children:[Object(d.jsx)("label",{children:"Project name [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)},placeholder:"Input project name"}),Object(d.jsx)("label",{children:"Description [required]"}),Object(d.jsx)("textarea",{required:!0,placeholder:"Add some awesome description!",value:i,onChange:function(e){return j(e.target.value)}}),Object(d.jsx)("label",{children:"Status"}),Object(d.jsxs)("select",{value:O,onChange:function(e){return p(e.target.value)},children:[Object(d.jsx)("option",{value:"Progress",children:"Progress"}),Object(d.jsx)("option",{value:"Available",children:"Available"}),Object(d.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(d.jsx)("label",{children:"Location"}),Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){return N(e.target.value)},placeholder:"Eg: United Kingdom"}),Object(d.jsx)("label",{children:"Type of project [required]"}),Object(d.jsxs)("select",{required:!0,value:y,onChange:function(e){return k(e.target.value)},children:[Object(d.jsx)("option",{value:"Social",children:"Social"}),Object(d.jsx)("option",{value:"Education",children:"Education"}),Object(d.jsx)("option",{value:"Wash",children:"Wash"}),Object(d.jsx)("option",{value:"Environment",children:"Environment"}),Object(d.jsx)("option",{value:"Health",children:"Health"}),Object(d.jsx)("option",{value:"Other",children:"Other"})]}),Object(d.jsx)("label",{children:"Volunteers assigned to this project"}),Object(d.jsx)(v.a,{className:"dropdown",placeholder:"Select Users",value:J.filter((function(e){return _.includes(e.value)})),options:J,onChange:function(e){L(Array.isArray(e)?e.map((function(e){return e.value})):[])},isMulti:!0,isClearable:!0}),Object(d.jsx)("label",{children:"Google Drive folder"}),Object(d.jsx)("textarea",{placeholder:"Copy the link to the Google Drive folder for this project",value:A,onChange:function(e){return D(e.target.value)}}),Object(d.jsx)("button",{children:"Add project"})]})]})},y=function(){var e=Object(o.g)().id,t=Object(o.f)(),n=h("/projects/"+e),c=n.data,r=(n.error,n.isPending),s=h("/user_project/project/"+e),a=s.data;s.errorAssignment,s.isPendingAssignment;return Object(d.jsxs)("div",{className:"project-details",children:[r&&Object(d.jsx)("h2",{children:"Loading..."}),c&&Object(d.jsx)("h2",{children:c.name}),c&&Object(d.jsxs)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginright:"10px",borderRadius:"8px",backgroundColor:"#f1b535"},children:["Status: ",c.status]}),c&&Object(d.jsx)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginRight:"10px",borderRadius:"8px",backgroundColor:"#595bc0"},children:c.tag}),c&&Object(d.jsxs)("h4",{children:["Location: ",c.location]}),c&&Object(d.jsx)("button",{onClick:function(e){e.preventDefault(),window.open(c.files,"_blank")},children:"Documents"}),c&&Object(d.jsx)("p",{children:c.description}),Object(d.jsx)("h3",{children:"Volunteers working on this project"}),Object(d.jsx)("div",{className:"project_user_assignment_list",children:a.map((function(e){return Object(d.jsx)("div",{className:"assigned_users_preview",style:{float:"left",width:"50%"},children:Object(d.jsx)(i.b,{to:"/users/".concat(e.username),children:Object(d.jsx)("h4",{children:e.username})})},e.id)}))}),Object(d.jsxs)("div",{className:"project-tasks",children:[c&&Object(d.jsx)(i.b,{to:"/projects/".concat(c.id,"/tasks"),className:"view-tasks-button",children:"View Tasks"}),c&&Object(d.jsx)(i.b,{to:"/projects/".concat(c.id,"/add-task"),className:"add-task-button",children:"Add Task"})]}),Object(d.jsxs)("div",{children:[c&&Object(d.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("/projects/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete project"}),c&&Object(d.jsx)(i.b,{to:"/edit-project/".concat(c.id),className:"edit-project-button",children:"Edit project"})]})]})},k=function(){return Object(d.jsxs)("div",{className:"page-not-found",children:[Object(d.jsx)("h2",{children:"Something went wrong..."}),Object(d.jsx)("p",{children:"That page cannot be found"}),Object(d.jsx)(i.b,{to:"/",children:"Back to the main page"})]})},S=function(){var e=j(),t=(e.setToken,e.token),n=h("/users/"+t),c=n.data,r=(n.error,n.isPending);return Object(d.jsxs)("div",{className:"my-profile",children:[r&&Object(d.jsx)("h2",{children:"Loading..."}),c&&Object(d.jsx)("h2",{children:c.firstname+" "+c.surname}),c&&Object(d.jsx)("h1",{children:"Username: "+c.token}),c&&Object(d.jsx)("h1",{children:"Title: "+c.title}),c&&Object(d.jsx)("h1",{children:"Email: "+c.email}),c&&Object(d.jsx)("h1",{children:"Bio: "+c.bio}),c&&Object(d.jsx)("h1",{children:"Joined: "+c.joined}),c&&Object(d.jsx)("h1",{children:"Location: "+c.location}),c&&Object(d.jsx)("h1",{children:"Availability: "+c.availability}),c&&Object(d.jsx)("h1",{children:"Partnership Opportunities: "+c.partnership_opportunities}),c&&Object(d.jsx)("h1",{children:"Interests: "+c.interests})]})},w=function(){var e=Object(o.g)().username,t=Object(o.f)(),n=j(),c=(n.setToken,n.token),r=h("/users/"+e),s=r.data,a=(r.error,r.isPending);return Object(d.jsxs)("div",{className:"user",children:[a&&Object(d.jsx)("h2",{children:"Loading..."}),s&&Object(d.jsx)("div",{children:Object(d.jsx)("h2",{children:s.firstname+" "+s.surname})}),s&&Object(d.jsxs)("div",{children:[Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Username: "}),s.username]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Email: "}),s.email]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Title: "}),s.title]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Joined: "}),s.joined]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Location: "}),s.location]}),Object(d.jsxs)("h3",{children:[Object(d.jsx)("strong",{children:"Availability: "}),s.availability]})]}),Object(d.jsx)("br",{}),s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:Object(d.jsx)("strong",{children:"Bio"})}),Object(d.jsx)("p",{children:s.bio})]}),s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:Object(d.jsx)("strong",{children:"Partnership Opportunities"})}),Object(d.jsx)("p",{children:s.partnership_opportunities})]}),s&&Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{children:Object(d.jsx)("strong",{children:"Interests"})}),Object(d.jsx)("p",{children:s.interests})]}),s&&("jaimeaguilera"==e||e==c)&&Object(d.jsx)("button",{onClick:function(n){n.preventDefault(),fetch("/users/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete user"}),s&&("jaimeaguilera"==e||e==c)&&Object(d.jsx)(i.b,{to:"/edit-user/".concat(e),className:"edit-user-button",children:"Edit details"})]})},C=function(e){var t=e.users;return Object(d.jsx)("div",{className:"user-list",children:t.map((function(e){return Object(d.jsx)("div",{className:"preview",children:Object(d.jsx)(i.b,{to:"/users/".concat(e.username),children:Object(d.jsx)("h2",{children:e.username})})},e.username)}))})},N=function(){var e=h("/users"),t=e.data,n=(e.error,e.isPending),c=j(),r=(c.setToken,c.token);return Object(d.jsxs)("div",{className:"users",children:[Object(d.jsx)("h1",{children:"Users"}),"jaimeaguilera"==r&&Object(d.jsx)(i.b,{to:"/add-user",className:"add-user-button",children:"Add User"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),n&&Object(d.jsx)("h2",{children:"Loading..."}),t&&Object(d.jsx)(C,{users:t,title:"All Users"})]})},P=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(l.a)(s,2),i=a[0],j=a[1],u=Object(c.useState)(""),b=Object(l.a)(u,2),h=b[0],O=b[1],p=Object(c.useState)(""),x=Object(l.a)(p,2),m=x[0],f=x[1],v=Object(c.useState)(""),g=Object(l.a)(v,2),y=g[0],k=g[1],S=Object(c.useState)(""),w=Object(l.a)(S,2),C=w[0],N=w[1],P=Object(c.useState)(""),T=Object(l.a)(P,2),A=T[0],D=T[1],E=Object(c.useState)(""),I=Object(l.a)(E,2),_=I[0],L=I[1],q=Object(c.useState)(""),F=Object(l.a)(q,2),J=F[0],B=F[1],G=Object(c.useState)(""),U=Object(l.a)(G,2),W=U[0],H=U[1],R=Object(c.useState)(""),V=Object(l.a)(R,2),M=V[0],z=V[1],K=Object(c.useState)(""),Y=Object(l.a)(K,2),Q=Y[0],X=Y[1],Z=Object(o.f)();return Object(d.jsxs)("div",{className:"add-user",children:[Object(d.jsx)("h2",{children:"Add a new user"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstname:n,surname:i,password:h,title:m,email:y,bio:C,joined:A,location:_,availability:J,partnership_opportunities:W,interests:M,username:Q};fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){Z.push("/users")}))},children:[Object(d.jsx)("label",{children:"Username [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:Q,onChange:function(e){return X(e.target.value)},placeholder:"Input username here"}),Object(d.jsx)("label",{children:"Firstname [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)},placeholder:"Input your first name here"}),Object(d.jsx)("label",{children:"Surname [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:i,onChange:function(e){return j(e.target.value)},placeholder:"Input surname here"}),Object(d.jsx)("label",{children:"Title [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:m,onChange:function(e){return f(e.target.value)},placeholder:"State your role at InAGlobe (eg: volunteer)"}),Object(d.jsx)("label",{children:"Password [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return O(e.target.value)},placeholder:"Input the default password (to be changed by the user)"}),Object(d.jsx)("label",{children:"Email [required]"}),Object(d.jsx)("input",{type:"text",required:!0,value:y,onChange:function(e){return k(e.target.value)},placeholder:"Input InAGlobe email here"}),Object(d.jsx)("label",{children:"Bio"}),Object(d.jsx)("input",{type:"text",value:C,onChange:function(e){return N(e.target.value)},placeholder:"Tell your colleagues a bit about yourself"}),Object(d.jsx)("label",{children:"Joined"}),Object(d.jsx)("input",{type:"text",value:A,onChange:function(e){return D(e.target.value)},placeholder:"Eg: 20th April 2020"}),Object(d.jsx)("label",{children:"Location"}),Object(d.jsx)("input",{type:"text",value:_,onChange:function(e){return L(e.target.value)},placeholder:"Where are you currently based?"}),Object(d.jsx)("label",{children:"Availibility"}),Object(d.jsx)("input",{type:"text",value:J,onChange:function(e){return B(e.target.value)},placeholder:"How available are you approximately per week?"}),Object(d.jsx)("label",{children:"Partnership Opportunities"}),Object(d.jsx)("input",{type:"text",value:W,onChange:function(e){return H(e.target.value)},placeholder:"Eg: Department of Computing at Imperial College London"}),Object(d.jsx)("label",{children:"Interests"}),Object(d.jsx)("input",{type:"text",value:M,onChange:function(e){return z(e.target.value)},placeholder:"What are your hobbies?"}),Object(d.jsx)("button",{children:"Add user"})]})]})},T=n(4),A=n(21),D=function(){var e=Object(o.g)().id,t=h("/projects/"+e),n=t.data,r=n.name,s=n.description,a=n.status,i=n.location,j=n.tag,u=n.files,b=(t.error,t.isPending),O=h("/users"),p=O.data,x=(O.errorUsers,O.isPendingUsers,Object(c.useState)([])),m=Object(l.a)(x,2),f=m[0],v=m[1],g=Object(o.f)(),y={name:r,description:s,status:a,location:i,tag:j,files:u},k=Object(A.a)({defaultValues:y}),S=k.register,w=k.handleSubmit;return Object(d.jsxs)("div",{className:"edit-project",children:[Object(d.jsx)("h2",{children:"Edit project"}),b&&Object(d.jsx)("h2",{children:"Loading..."}),r&&Object(d.jsxs)("form",{onSubmit:w((function(t){fetch("/projects/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){f.map((function(t){var n={username:t,project_id:e};fetch("/user_project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}))})).then((function(){g.push("/")}))})),children:[Object(d.jsx)("label",{htmlFor:"name",children:"Project name"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},S("name")),{},{placeholder:"Insert project name here"})),Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("textarea",Object(T.a)(Object(T.a)({},S("description")),{},{name:"description",placeholder:"Insert description of the project here"})),Object(d.jsx)("label",{children:"Status"}),Object(d.jsxs)("select",Object(T.a)(Object(T.a)({},S("status")),{},{name:"status",children:[Object(d.jsx)("option",{value:"Progress",children:"Progress"}),Object(d.jsx)("option",{value:"Available",children:"Available"}),Object(d.jsx)("option",{value:"Completed",children:"Completed"})]})),Object(d.jsx)("label",{children:"Location"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},S("location")),{},{type:"text",placeholder:"Insert location of project here",name:"location"})),Object(d.jsx)("label",{children:"Type of project"}),Object(d.jsxs)("select",Object(T.a)(Object(T.a)({},S("tag")),{},{name:"tag",children:[Object(d.jsx)("option",{value:"Social",children:"Social"}),Object(d.jsx)("option",{value:"Education",children:"Education"}),Object(d.jsx)("option",{value:"Wash",children:"Wash"}),Object(d.jsx)("option",{value:"Environment",children:"Environment"}),Object(d.jsx)("option",{value:"Health",children:"Health"}),Object(d.jsx)("option",{value:"Other",children:"Other"})]})),Object(d.jsx)("label",{children:"Volunteers assigned to this project"}),Object(d.jsx)("select",{multiple:!0,onChange:function(e){return v(f.concat(e.target.value))},value:f,children:p.map((function(e){return Object(d.jsxs)("option",{value:e.username,children:[e.firstname," ",e.surname]})}))}),Object(d.jsx)("label",{children:"Google Drive folder"}),Object(d.jsx)("textarea",Object(T.a)(Object(T.a)({},S("files")),{},{name:"files",placeholder:"Insert Google Drive Folder link here"})),Object(d.jsx)("button",{type:"submit",children:"Save project details"})]})]})},E=n(32),I=function(){var e=Object(o.f)(),t=j(),n=(t.setToken,t.token);return Object(d.jsxs)(E.slide,{children:[Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(i.b,{to:"/users/"+n,children:"Profile"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(i.b,{to:"/users",children:"All Users"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)(i.b,{to:"/projects",children:"All Projects"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{href:"https://slack.com/intl/en-gb/",target:"_blank",children:"Go To Slack"})}),Object(d.jsx)("div",{className:"menu-item",children:Object(d.jsx)("a",{style:{textDecoration:"underline",cursor:"pointer"},onClick:function(t){t.preventDefault(),localStorage.clear(),window.location.reload(),e.push("/")},children:"Log Out"})})]})},_=function(){var e=Object(o.g)().username,t=h("/users/"+e),n=t.data,c=n.firstname,r=n.surname,s=n.password,a=n.title,l=n.email,j=n.bio,u=n.joined,b=n.location,O=n.availability,p=n.partnership_opportunities,x=n.interests,m=(t.error,t.isPending),f=Object(o.f)(),v={firstname:c,surname:r,password:s,title:a,email:l,bio:j,joined:u,location:b,availability:O,partnership_opportunities:p,interests:x},g=Object(A.a)({defaultValues:v}),y=g.register,k=g.handleSubmit;return Object(d.jsxs)("div",{className:"edit-user",children:[Object(d.jsx)("h2",{children:"Edit user"}),m&&Object(d.jsx)("h2",{children:"Loading..."}),Object(d.jsx)(i.b,{to:"/users/change-password",children:"Change Password"}),c&&Object(d.jsxs)("form",{onSubmit:k((function(t){fetch("/users/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){f.push("/")}))})),children:[Object(d.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("firstname")),{},{placeholder:"Input your first name here"})),Object(d.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("surname")),{},{placeholder:"Input surname here"})),Object(d.jsx)("label",{htmlFor:"title",children:"Title"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("title")),{},{placeholder:"State your role at InAGlobe (eg: volunteer)"})),Object(d.jsx)("label",{htmlFor:"password",children:"Password"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("password")),{},{placeholder:"Input the password"})),Object(d.jsx)("label",{htmlFor:"email",children:"Email"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("email")),{},{placeholder:"Input InAGlobe email here"})),Object(d.jsx)("label",{htmlFor:"bio",children:"Bio"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("bio")),{},{placeholder:"Tell your colleagues a bit about yourself"})),Object(d.jsx)("label",{htmlFor:"joined",children:"Joined"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("joined")),{},{placeholder:"Eg: 20th April 2020"})),Object(d.jsx)("label",{htmlFor:"location",children:"Location"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("location")),{},{placeholder:"Where are you currently based?"})),Object(d.jsx)("label",{htmlFor:"availability",children:"Availibility"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("availability")),{},{placeholder:"How available are you approximately per week?"})),Object(d.jsx)("label",{htmlFor:"partnership_opportunities",children:"Partnership Opportunities"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("partnership_opportunities")),{},{placeholder:"Eg: Department of Computing at Imperial College London"})),Object(d.jsx)("label",{htmlFor:"interests",children:"Interests"}),Object(d.jsx)("input",Object(T.a)(Object(T.a)({},y("interests")),{},{placeholder:"What are your hobbies?"})),Object(d.jsx)("button",{type:"submit",children:"Save user details"})]})]})},L=function(e){var t=e.project_tasks,n=(Object(o.f)(),Object(c.useState)("")),r=Object(l.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(1),j=Object(l.a)(i,2),u=j[0],b=j[1],h=Object(c.useState)(Date.now),O=Object(l.a)(h,2),p=O[0],x=O[1],m=Object(c.useState)(""),f=Object(l.a)(m,2),v=f[0],g=f[1],y=Object(c.useState)(""),k=Object(l.a)(y,2),S=k[0],w=k[1],C=function(e){return function(t){t.preventDefault(),console.log(e.id),a(e.description),b(e.priority),x(e.due_date),g("Completed"),w(e.project_id);var n={description:s,priority:u,due_date:p,completed:v,project_id:S};console.log(n),fetch("/projects/"+e.project_id+"/tasks/"+e.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){window.location.reload()}))}},N=function(e){return function(t){t.preventDefault(),fetch("/projects/"+e.project_id+"/tasks/"+e.id,{method:"DELETE"}).then((function(){window.location.reload()}))}};return Object(d.jsx)("div",{className:"project-tasks-list",children:t.map((function(e){return Object(d.jsxs)("div",{className:"project-task-preview",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.description}),Object(d.jsxs)("h3",{children:["Due date: ",e.due_date]})]}),Object(d.jsxs)("h3",{children:["Priority: ",e.priority]}),!e.completed&&Object(d.jsx)("button",{className:"task-complete-button",onClick:C(e),children:"Complete"}),Object(d.jsx)("button",{className:"task-delete-button",onClick:N(e),children:"Delete"})]},e.id)}))})},q=function(){var e=Object(o.g)().id,t=h("/projects/"+e),n=t.data,c=(t.errorProject,t.isPendingProject,h("/projects/"+e+"/tasks")),r=c.data,s=(c.errorTasks,c.isPendingTasks);return Object(d.jsxs)("div",{className:"project-tasks",children:[n&&Object(d.jsxs)("h1",{children:[n.name,": tasks"]}),Object(d.jsx)("h2",{children:"Ongoing Project Tasks"}),s&&Object(d.jsx)("h2",{children:"Loading..."}),r&&Object(d.jsx)(L,{project_tasks:r.filter((function(e){return!e.completed}))}),Object(d.jsx)("h2",{children:"Completed Project Tasks"}),r&&Object(d.jsx)(L,{project_tasks:r.filter((function(e){return e.completed}))}),Object(d.jsx)("div",{className:"add-task-button-wrapper",children:r&&Object(d.jsx)(i.b,{to:"/projects/".concat(n.id,"/add-task"),className:"add-task-button",children:"Add Task"})})]})},F=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(Date.now),a=Object(l.a)(s,2),i=a[0],j=a[1],u=Object(c.useState)(1),b=Object(l.a)(u,2),O=b[0],p=b[1],x=Object(c.useState)(!1),m=Object(l.a)(x,2),f=m[0],v=m[1],g=Object(o.g)().id,y=h("/projects/"+g),k=y.data,S=(y.error,y.isPending),w=Object(o.f)();return Object(d.jsxs)("div",{className:"add-project-task",children:[Object(d.jsx)("h2",{children:"Add a new task"}),S&&Object(d.jsx)("h2",{children:"Loading..."}),k&&Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:n,due_date:i,priority:O,completed:f};fetch("/projects/"+k.id+"/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){w.push("/projects/"+g+"/tasks")}))},children:[Object(d.jsx)("label",{children:"Description"}),Object(d.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return r(e.target.value)},placeholder:"Input description here"}),Object(d.jsx)("label",{children:"Due Date [required]"}),Object(d.jsx)("input",{type:"date",required:!0,value:i,onChange:function(e){return j(e.target.value)},placeholder:"Input your first name here"}),Object(d.jsx)("label",{children:"Priority level (1: lowest, 4: highest) [required]"}),Object(d.jsxs)("select",{required:!0,value:O,onChange:function(e){return p(e.target.value)},children:[Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"})]}),Object(d.jsx)("label",{children:"Status"}),Object(d.jsxs)("select",{value:f,onChange:function(e){return v(e.target.value)},children:[Object(d.jsx)("option",{value:"Incomplete",children:"Available"}),Object(d.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(d.jsx)("button",{children:"Add task"})]})]})};function J(e){return B.apply(this,arguments)}function B(){return(B=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){var t=e.setToken,n=Object(c.useState)(),r=Object(l.a)(n,2),s=r[0],a=r[1],i=Object(c.useState)(),o=Object(l.a)(i,2),j=o[0],u=o[1],b=function(){var e=Object(f.a)(m.a.mark((function e(n){var c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,J({username:s,password:j});case 3:""!=(c=e.sent).token&&t(c);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"login",children:[Object(d.jsx)("h1",{children:" InAGlobe Platform "}),Object(d.jsxs)("form",{onSubmit:b,children:[Object(d.jsx)("input",{type:"text",id:"login",class:"fadeIn second",name:"login",placeholder:"login",onChange:function(e){return a(e.target.value)}}),Object(d.jsx)("input",{type:"password",id:"password",class:"fadeIn third",name:"login",placeholder:"password",onChange:function(e){return u(e.target.value)}}),Object(d.jsx)("div",{className:"incorrect-password",style:{display:"none"},children:Object(d.jsx)("h2",{children:"Incorrect password!"})}),Object(d.jsx)("a",{children:"Forgot Password?"}),Object(d.jsx)("button",{type:"submit",children:"Log In"})]})]})}var U=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(l.a)(s,2),u=a[0],b=a[1],h=j(),O=(h.setToken,h.token);Object(o.f)();function p(){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("/users/update-password",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:O,oldPassword:n,newPassword:u})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,p();case 3:"True"!=e.sent.status?document.getElementsByClassName("incorrect-password")[0].style.display="block":document.getElementsByClassName("password-changed-msg")[0].style.display="block";case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"change-password",children:[Object(d.jsx)("h2",{children:"Change Password"}),Object(d.jsx)("label",{children:"Current Password"}),Object(d.jsx)("input",{onChange:function(e){return r(e.target.value)},placeholder:"Current Password"}),Object(d.jsx)("label",{children:"New Password"}),Object(d.jsx)("input",{onChange:function(e){return b(e.target.value)},placeholder:"New Password"}),Object(d.jsx)("button",{onClick:v,children:"Change password"}),Object(d.jsx)("h2",{className:"incorrect-password",style:{display:"none"},children:"Incorrect password"}),Object(d.jsxs)("div",{className:"password-changed-msg",style:{display:"none"},children:[Object(d.jsx)("h3",{children:"Your password has been changed successfully"}),Object(d.jsx)(i.b,{to:"/",children:"Back to Dashboard"})]})]})},W=function(){var e=h("/projects"),t=e.data,n=(e.errorProjects,e.isPendingProjects);return Object(d.jsxs)("div",{className:"project-registry",children:[Object(d.jsx)("h1",{children:"All Projects"}),Object(d.jsx)("br",{}),n&&Object(d.jsx)("h2",{children:"Loading..."}),t&&Object(d.jsx)(b,{projects:t,title:"All Projects"})]})};var H=function(){var e=j(),t=e.token,n=e.setToken;return t?Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(I,{}),Object(d.jsx)(u,{}),Object(d.jsx)("div",{className:"content",children:Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(p,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/create-project",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/add-user",children:Object(d.jsx)(P,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/my-profile",children:Object(d.jsx)(S,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/users",children:Object(d.jsx)(N,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/users/change-password",children:Object(d.jsx)(U,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/users/:username",children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/edit-user/:username",children:Object(d.jsx)(_,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/projects",children:Object(d.jsx)(W,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/projects/:id/add-task",children:Object(d.jsx)(F,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/projects/:id/tasks",children:Object(d.jsx)(q,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/projects/:id",children:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{exact:!0,path:"/edit-project/:id",children:Object(d.jsx)(D,{})}),Object(d.jsx)(o.a,{path:"*",children:Object(d.jsx)(k,{})})]})})]})}):Object(d.jsx)(G,{setToken:n})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,73)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),R()}},[[72,1,2]]]);
//# sourceMappingURL=main.52682509.chunk.js.map