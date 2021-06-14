(this["webpackJsonpinaglobe-dashboard"]=this["webpackJsonpinaglobe-dashboard"]||[]).push([[0],{33:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(20),a=c.n(s),i=(c(33),c(5)),l=c(0),j=function(){return Object(l.jsxs)("nav",{className:"navbar",children:[Object(l.jsx)("a",{href:"/",style:{color:"#ff4e83",fontSize:"20px",borderRadius:"8px"},children:"InAGlobe Platform"}),Object(l.jsxs)("div",{className:"links",children:[Object(l.jsx)(i.b,{to:"/create-project",children:"New Project"}),Object(l.jsx)(i.b,{to:"/users/john34",children:"My Profile"})]})]})},o=function(e){var t=e.projects,c=e.title;return Object(l.jsxs)("div",{className:"project-list",children:[Object(l.jsx)("h2",{children:c}),t.map((function(e){return Object(l.jsx)("div",{className:"preview",children:Object(l.jsxs)(i.b,{to:"/projects/".concat(e.id),children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsx)("h3",{children:e.status})]})},e.id)}))]})},d=c(2),b=function(e){var t=Object(n.useState)([]),c=Object(d.a)(t,2),r=c[0],s=c[1],a=Object(n.useState)(null),i=Object(d.a)(a,2),l=i[0],j=i[1],o=Object(n.useState)(!0),b=Object(d.a)(o,2),u=b[0],h=b[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){if(!e.ok)throw Error("could not fetch the data for that resource");return e.json()})).then((function(e){s(e),h(!1),j(null)})).catch((function(e){j(e.message)}))}),[e]),{data:r,error:l,isPending:u}},u=function(e){var t=e.todos,c=e.title,r=b("/users"),s=r.data,a=(r.error,r.isPending),i=Object(n.useState)(""),j=Object(d.a)(i,2),o=j[0],u=j[1],h=Object(n.useState)(1),O=Object(d.a)(h,2),p=O[0],x=O[1],m=Object(n.useState)(Date.now()),f=Object(d.a)(m,2),v=f[0],g=f[1],y=Object(n.useState)("none"),S=Object(d.a)(y,2),C=S[0],k=S[1];return Object(l.jsxs)("div",{className:"todo-list",style:{float:"right"},children:[Object(l.jsx)("h2",{children:c}),Object(l.jsx)("div",{className:"add-todo-button",children:Object(l.jsx)("button",{onClick:function(){document.getElementsByClassName("add-todo-form")[0].style.display="block"},children:"Add a personal task"})}),a&&Object(l.jsx)("h2",{children:"Loading..."}),Object(l.jsx)("div",{className:"add-todo-form",children:s&&Object(l.jsxs)("form",{onSubmit:function(e){document.getElementsByClassName("add-todo-form")[0].style.display="none",e.preventDefault();var t={todo_desc:o,priority:p,due_date:v,username:C};fetch("/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){window.location.reload()}))},children:[Object(l.jsx)("label",{children:"Task description"}),Object(l.jsx)("textarea",{value:o,onChange:function(e){return u(e.target.value)},required:!0,placeholder:"Add some awesome description!"}),Object(l.jsx)("label",{children:"Priority level"}),Object(l.jsxs)("select",{value:p,onChange:function(e){return x(e.target.value)},children:[Object(l.jsx)("option",{value:"1",children:"1"}),Object(l.jsx)("option",{value:"2",children:"2"}),Object(l.jsx)("option",{value:"3",children:"3"}),Object(l.jsx)("option",{value:"4",children:"4"})]}),Object(l.jsx)("label",{children:"When should this task be done by?"}),Object(l.jsx)("input",{type:"date",value:v,onChange:function(e){return g(e.target.value)}}),Object(l.jsx)("label",{children:"Assigned user"}),Object(l.jsxs)("select",{value:C,onChange:function(e){return k(e.target.value)},children:[Object(l.jsx)("option",{value:"none",children:"None"}),s.map((function(e){return Object(l.jsx)("option",{value:e.username,children:e.username})}))]}),Object(l.jsx)("button",{children:"Save task"})]})}),Object(l.jsx)("div",{className:"personal-todos",children:t.map((function(e){return Object(l.jsxs)("div",{className:"todo-preview",children:[Object(l.jsx)("h2",{children:e.todo_desc}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Priority level:"})," ",e.priority]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"To be done by:"})," ",e.due_date]}),Object(l.jsx)("button",{onClick:(t=e.id,function(e){e.preventDefault(),fetch("/todos/"+t,{method:"DELETE"}).then((function(){window.location.reload()}))}),children:"Complete"})]},e.id);var t}))})]})},h=function(){var e=b("/projects"),t=e.data,c=(e.errorProjects,e.isPendingProjects),n=b("/todos"),r=n.data,s=(n.errorTodos,n.isPendingTodos);return Object(l.jsxs)("div",{className:"home",children:[Object(l.jsx)("h1",{children:"Dashboard"}),Object(l.jsxs)("div",{className:"home-projects",style:{float:"left",width:"600px"},children:[c&&Object(l.jsx)("h2",{children:"Loading..."}),t&&Object(l.jsx)(o,{projects:t,title:"All Projects"}),t&&Object(l.jsx)(o,{projects:t.filter((function(e){return"Completed"===e.status})),title:"Completed Projects"})]}),Object(l.jsxs)("div",{className:"homeTodos",children:[s&&Object(l.jsx)("h2",{children:"Loading..."}),r&&Object(l.jsx)(u,{todos:r.filter((function(e){return"john34"===e.username})),title:"Personal ToDo items"})]})]})},O=c(27),p=c(3),x=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(d.a)(s,2),i=a[0],j=a[1],o=Object(n.useState)("Available"),u=Object(d.a)(o,2),h=u[0],x=u[1],m=Object(n.useState)("Other"),f=Object(d.a)(m,2),v=f[0],g=f[1],y=Object(n.useState)(""),S=Object(d.a)(y,2),C=S[0],k=S[1],N=Object(n.useState)(""),P=Object(d.a)(N,2),T=P[0],w=P[1],E=Object(n.useState)([]),D=Object(d.a)(E,2),A=D[0],I=D[1],_=Object(n.useState)(""),L=Object(d.a)(_,2),F=L[0],J=L[1],q=Object(p.f)(),B=b("/users"),G=B.data;B.error,B.isPending;return Object(l.jsxs)("div",{className:"create-project",children:[Object(l.jsx)("h2",{children:"Add a new project"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:c,description:i,status:h,tag:v,location:C,files:T};fetch("/projects",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){e.json().id,Object(O.a)("project_id")})),A.map((function(e){J(e.username);var t={username:F,project_id:0};console.log("The username is "+F),console.log("The project_id is 0"),fetch("/user_project",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})})).then((function(){q.push("/")}))},children:[Object(l.jsx)("label",{children:"Project name"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)},placeholder:"Input project name"}),Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",{required:!0,placeholder:"Add some awesome description!",value:i,onChange:function(e){return j(e.target.value)}}),Object(l.jsx)("label",{children:"Status"}),Object(l.jsxs)("select",{value:h,onChange:function(e){return x(e.target.value)},children:[Object(l.jsx)("option",{value:"Progress",children:"Progress"}),Object(l.jsx)("option",{value:"Available",children:"Available"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",{type:"text",value:C,onChange:function(e){return k(e.target.value)},placeholder:"Eg: United Kingdom"}),Object(l.jsx)("label",{children:"Type of project"}),Object(l.jsxs)("select",{value:v,onChange:function(e){return g(e.target.value)},children:[Object(l.jsx)("option",{value:"Social",children:"Social"}),Object(l.jsx)("option",{value:"Education",children:"Education"}),Object(l.jsx)("option",{value:"Wash",children:"Wash"}),Object(l.jsx)("option",{value:"Environment",children:"Environment"}),Object(l.jsx)("option",{value:"Health",children:"Health"}),Object(l.jsx)("option",{value:"Other",children:"Other"})]}),Object(l.jsx)("label",{children:"Volunteers assigned to this project"}),Object(l.jsx)("select",{multiple:!0,onChange:function(e){return I(A.concat(e.target.value))},value:A,children:G.map((function(e){return Object(l.jsxs)("option",{value:e.username,children:[e.firstname," ",e.surname]})}))}),Object(l.jsx)("label",{children:"Google Drive folder"}),Object(l.jsx)("textarea",{placeholder:"Copy the link to the Google Drive folder for this project",value:T,onChange:function(e){return w(e.target.value)}}),Object(l.jsx)("button",{children:"Add project"})]})]})},m=function(){var e=Object(p.g)().id,t=Object(p.f)(),c=b("/projects/"+e),n=c.data,r=(c.error,c.isPending);return Object(l.jsxs)("div",{className:"project-details",children:[r&&Object(l.jsx)("h2",{children:"Loading..."}),n&&Object(l.jsx)("h2",{children:n.name}),n&&Object(l.jsxs)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginright:"10px",borderRadius:"8px",backgroundColor:"#f1b535"},children:["Status: ",n.status]}),n&&Object(l.jsx)("button",{style:{fontSize:"20px",color:"#fff",marginBottom:"30px",marginRight:"10px",borderRadius:"8px",backgroundColor:"#595bc0"},children:n.tag}),n&&Object(l.jsxs)("h4",{children:["Location: ",n.location]}),n&&Object(l.jsx)("button",{onClick:function(e){e.preventDefault(),window.open(n.files,"_blank")},children:"Documents"}),n&&Object(l.jsx)("p",{children:n.description}),Object(l.jsxs)("div",{className:"project-tasks",children:[n&&Object(l.jsx)(i.b,{to:"/projects/".concat(n.id,"/tasks"),className:"view-tasks-button",children:"View Tasks"}),n&&Object(l.jsx)(i.b,{to:"/projects/".concat(n.id,"/add-task"),className:"add-task-button",children:"Add Task"})]}),Object(l.jsxs)("div",{children:[n&&Object(l.jsx)("button",{onClick:function(c){c.preventDefault(),fetch("/projects/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete project"}),n&&Object(l.jsx)(i.b,{to:"/edit-project/".concat(n.id),className:"edit-project-button",children:"Edit project"})]})]})},f=function(){return Object(l.jsxs)("div",{className:"page-not-found",children:[Object(l.jsx)("h2",{children:"Something went wrong..."}),Object(l.jsx)("p",{children:"That page cannot be found"}),Object(l.jsx)(i.b,{to:"/",children:"Back to the main page"})]})},v=function(){Object(p.g)().username,Object(p.f)();var e=b("/users/rs0409"),t=e.data,c=(e.error,e.isPending);return Object(l.jsxs)("div",{className:"my-profile",children:[c&&Object(l.jsx)("h2",{children:"Loading..."}),t&&Object(l.jsx)("h2",{children:t.firstname+" "+t.surname}),t&&Object(l.jsx)("h1",{children:"Username: "+t.username}),t&&Object(l.jsx)("h1",{children:"Title: "+t.title}),t&&Object(l.jsx)("h1",{children:"Email: "+t.email}),t&&Object(l.jsx)("h1",{children:"Bio: "+t.bio}),t&&Object(l.jsx)("h1",{children:"Joined: "+t.joined}),t&&Object(l.jsx)("h1",{children:"Location: "+t.location}),t&&Object(l.jsx)("h1",{children:"Availability: "+t.availability}),t&&Object(l.jsx)("h1",{children:"Partnership Opportunities: "+t.partnership_opportunities}),t&&Object(l.jsx)("h1",{children:"Interests: "+t.interests})]})},g=function(){var e=Object(p.g)().username,t=Object(p.f)(),c=b("/users/"+e),n=c.data,r=(c.error,c.isPending);return Object(l.jsxs)("div",{className:"user",children:[r&&Object(l.jsx)("h2",{children:"Loading..."}),n&&Object(l.jsx)("div",{children:Object(l.jsx)("h2",{children:n.firstname+" "+n.surname})}),n&&Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Username: "}),n.username]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Email: "}),n.email]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Title: "}),n.title]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Joined: "}),n.joined]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Location: "}),n.location]}),Object(l.jsxs)("h3",{children:[Object(l.jsx)("strong",{children:"Availability: "}),n.availability]})]}),Object(l.jsx)("br",{}),n&&Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Bio"})}),Object(l.jsx)("p",{children:n.bio})]}),n&&Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Partnership Opportunities"})}),Object(l.jsx)("p",{children:n.partnership_opportunities})]}),n&&Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{children:Object(l.jsx)("strong",{children:"Interests"})}),Object(l.jsx)("p",{children:n.interests})]}),n&&Object(l.jsx)("button",{onClick:function(c){c.preventDefault(),fetch("/users/"+e,{method:"DELETE"}).then((function(){t.push("/")}))},children:"Delete user"}),n&&Object(l.jsx)(i.b,{to:"/edit-user/".concat(e),className:"edit-user-button",children:"Edit details"})]})},y=function(e){var t=e.users;return Object(l.jsx)("div",{className:"user-list",children:t.map((function(e){return Object(l.jsx)("div",{className:"preview",children:Object(l.jsx)(i.b,{to:"/users/".concat(e.username),children:Object(l.jsx)("h2",{children:e.username})})},e.username)}))})},S=function(){var e=b("/users"),t=e.data,c=(e.error,e.isPending);return Object(l.jsxs)("div",{className:"users",children:[Object(l.jsx)("h1",{children:"Users"}),c&&Object(l.jsx)("h2",{children:"Loading..."}),t&&Object(l.jsx)(y,{users:t,title:"All Users"})]})},C=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(""),a=Object(d.a)(s,2),i=a[0],j=a[1],o=Object(n.useState)(""),b=Object(d.a)(o,2),u=b[0],h=b[1],O=Object(n.useState)(""),x=Object(d.a)(O,2),m=x[0],f=x[1],v=Object(n.useState)(""),g=Object(d.a)(v,2),y=g[0],S=g[1],C=Object(n.useState)(""),k=Object(d.a)(C,2),N=k[0],P=k[1],T=Object(n.useState)(""),w=Object(d.a)(T,2),E=w[0],D=w[1],A=Object(n.useState)(""),I=Object(d.a)(A,2),_=I[0],L=I[1],F=Object(n.useState)(""),J=Object(d.a)(F,2),q=J[0],B=J[1],G=Object(n.useState)(""),W=Object(d.a)(G,2),U=W[0],H=W[1],R=Object(n.useState)(""),V=Object(d.a)(R,2),z=V[0],M=V[1],K=Object(n.useState)(""),Q=Object(d.a)(K,2),X=Q[0],Y=Q[1],Z=Object(p.f)();return Object(l.jsxs)("div",{className:"add-user",children:[Object(l.jsx)("h2",{children:"Add a new user"}),Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={firstname:c,surname:i,password:u,title:m,email:y,bio:N,joined:E,location:_,availability:q,partnership_opportunities:U,interests:z,username:X};fetch("/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){Z.push("/")}))},children:[Object(l.jsx)("label",{children:"Username"}),Object(l.jsx)("input",{type:"text",required:!0,value:X,onChange:function(e){return Y(e.target.value)},placeholder:"Input username here"}),Object(l.jsx)("label",{children:"Firstname"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)},placeholder:"Input your first name here"}),Object(l.jsx)("label",{children:"Surname"}),Object(l.jsx)("input",{type:"text",required:!0,value:i,onChange:function(e){return j(e.target.value)},placeholder:"Input surname here"}),Object(l.jsx)("label",{children:"Title"}),Object(l.jsx)("input",{type:"text",required:!0,value:m,onChange:function(e){return f(e.target.value)},placeholder:"State your role at InAGlobe (eg: volunteer)"}),Object(l.jsx)("label",{children:"Password"}),Object(l.jsx)("input",{type:"text",required:!0,value:u,onChange:function(e){return h(e.target.value)},placeholder:"Input the default password (to be changed by the user)"}),Object(l.jsx)("label",{children:"Email"}),Object(l.jsx)("input",{type:"text",required:!0,value:y,onChange:function(e){return S(e.target.value)},placeholder:"Input InAGlobe email here"}),Object(l.jsx)("label",{children:"Bio"}),Object(l.jsx)("input",{type:"text",value:N,onChange:function(e){return P(e.target.value)},placeholder:"Tell your colleagues a bit about yourself"}),Object(l.jsx)("label",{children:"Joined"}),Object(l.jsx)("input",{type:"text",value:E,onChange:function(e){return D(e.target.value)},placeholder:"Eg: 20th April 2020"}),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",{type:"text",value:_,onChange:function(e){return L(e.target.value)},placeholder:"Where are you currently based?"}),Object(l.jsx)("label",{children:"Availibility"}),Object(l.jsx)("input",{type:"text",value:q,onChange:function(e){return B(e.target.value)},placeholder:"How available are you approximately per week?"}),Object(l.jsx)("label",{children:"Partnership Opportunities"}),Object(l.jsx)("input",{type:"text",value:U,onChange:function(e){return H(e.target.value)},placeholder:"Eg: Department of Computing at Imperial College London"}),Object(l.jsx)("label",{children:"Interests"}),Object(l.jsx)("input",{type:"text",value:z,onChange:function(e){return M(e.target.value)},placeholder:"What are your hobbies?"}),Object(l.jsx)("button",{children:"Add user"})]})]})},k=c(4),N=c(17),P=function(){var e=Object(p.g)().id,t=b("/projects/"+e),c=t.data,n=c.name,r=c.description,s=c.status,a=c.location,i=c.tag,j=c.files,o=(t.error,t.isPending),d=Object(p.f)(),u={name:n,description:r,status:s,location:a,tag:i,files:j},h=Object(N.a)({defaultValues:u}),O=h.register,x=h.handleSubmit;return Object(l.jsxs)("div",{className:"edit-project",children:[Object(l.jsx)("h2",{children:"Edit project"}),o&&Object(l.jsx)("h2",{children:"Loading..."}),n&&Object(l.jsxs)("form",{onSubmit:x((function(t){fetch("/projects/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){d.push("/")}))})),children:[Object(l.jsx)("label",{htmlFor:"name",children:"Project name"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},O("name")),{},{placeholder:"Insert project name here"})),Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("textarea",Object(k.a)(Object(k.a)({},O("description")),{},{name:"description",placeholder:"Insert description of the project here"})),Object(l.jsx)("label",{children:"Status"}),Object(l.jsxs)("select",Object(k.a)(Object(k.a)({},O("status")),{},{name:"status",children:[Object(l.jsx)("option",{value:"Progress",children:"Progress"}),Object(l.jsx)("option",{value:"Available",children:"Available"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]})),Object(l.jsx)("label",{children:"Location"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},O("location")),{},{type:"text",placeholder:"Insert location of project here",name:"location"})),Object(l.jsx)("label",{children:"Type of project"}),Object(l.jsxs)("select",Object(k.a)(Object(k.a)({},O("tag")),{},{name:"tag",children:[Object(l.jsx)("option",{value:"Social",children:"Social"}),Object(l.jsx)("option",{value:"Education",children:"Education"}),Object(l.jsx)("option",{value:"Wash",children:"Wash"}),Object(l.jsx)("option",{value:"Environment",children:"Environment"}),Object(l.jsx)("option",{value:"Health",children:"Health"}),Object(l.jsx)("option",{value:"Other",children:"Other"})]})),Object(l.jsx)("label",{children:"Google Drive folder"}),Object(l.jsx)("textarea",Object(k.a)(Object(k.a)({},O("files")),{},{name:"files",placeholder:"Insert Google Drive Folder link here"})),Object(l.jsx)("button",{type:"submit",children:"Save project details"})]})]})},T=c(28),w=function(e){return Object(l.jsxs)(T.slide,{children:[Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(i.b,{to:"/",children:"Home"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(i.b,{to:"/users/john34",children:"Profile"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(i.b,{to:"/users",children:"All Users"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)(i.b,{to:"/add-user",children:"Add User"})}),Object(l.jsx)("div",{className:"menu-item",children:Object(l.jsx)("a",{href:"https://slack.com/intl/en-gb/",target:"_blank",children:"Go To Slack"})})]})},E=function(){var e=Object(p.g)().username,t=b("/users/"+e),c=t.data,n=c.firstname,r=c.surname,s=c.password,a=c.title,i=c.email,j=c.bio,o=c.joined,d=c.location,u=c.availability,h=c.partnership_opportunities,O=c.interests,x=(t.error,t.isPending),m=Object(p.f)(),f={firstname:n,surname:r,password:s,title:a,email:i,bio:j,joined:o,location:d,availability:u,partnership_opportunities:h,interests:O},v=Object(N.a)({defaultValues:f}),g=v.register,y=v.handleSubmit;return Object(l.jsxs)("div",{className:"edit-user",children:[Object(l.jsx)("h2",{children:"Edit user"}),x&&Object(l.jsx)("h2",{children:"Loading..."}),n&&Object(l.jsxs)("form",{onSubmit:y((function(t){fetch("/users/"+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){m.push("/")}))})),children:[Object(l.jsx)("label",{htmlFor:"firstname",children:"Firstname"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("firstname")),{},{placeholder:"Input your first name here"})),Object(l.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("surname")),{},{placeholder:"Input surname here"})),Object(l.jsx)("label",{htmlFor:"title",children:"Title"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("title")),{},{placeholder:"State your role at InAGlobe (eg: volunteer)"})),Object(l.jsx)("label",{htmlFor:"password",children:"Password"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("password")),{},{placeholder:"Input the password"})),Object(l.jsx)("label",{htmlFor:"email",children:"Email"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("email")),{},{placeholder:"Input InAGlobe email here"})),Object(l.jsx)("label",{htmlFor:"bio",children:"Bio"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("bio")),{},{placeholder:"Tell your colleagues a bit about yourself"})),Object(l.jsx)("label",{htmlFor:"joined",children:"Joined"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("joined")),{},{placeholder:"Eg: 20th April 2020"})),Object(l.jsx)("label",{htmlFor:"location",children:"Location"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("location")),{},{placeholder:"Where are you currently based?"})),Object(l.jsx)("label",{htmlFor:"availability",children:"Availibility"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("availability")),{},{placeholder:"How available are you approximately per week?"})),Object(l.jsx)("label",{htmlFor:"partnership_opportunities",children:"Partnership Opportunities"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("partnership_opportunities")),{},{placeholder:"Eg: Department of Computing at Imperial College London"})),Object(l.jsx)("label",{htmlFor:"interests",children:"Interests"}),Object(l.jsx)("input",Object(k.a)(Object(k.a)({},g("interests")),{},{placeholder:"What are your hobbies?"})),Object(l.jsx)("button",{type:"submit",children:"Save user details"})]})]})},D=function(e){var t=e.project_tasks,c=(Object(p.f)(),Object(n.useState)("")),r=Object(d.a)(c,2),s=r[0],a=r[1],i=Object(n.useState)(1),j=Object(d.a)(i,2),o=j[0],b=j[1],u=Object(n.useState)(Date.now),h=Object(d.a)(u,2),O=h[0],x=h[1],m=Object(n.useState)(""),f=Object(d.a)(m,2),v=f[0],g=f[1],y=Object(n.useState)(""),S=Object(d.a)(y,2),C=S[0],k=S[1],N=function(e){return function(t){t.preventDefault(),console.log(e.id),a(e.description),b(e.priority),x(e.due_date),g("Completed"),k(e.project_id);var c={description:s,priority:o,due_date:O,completed:v,project_id:C};console.log(c),fetch("/projects/"+e.project_id+"/tasks/"+e.id,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){window.location.reload()}))}},P=function(e){return function(t){t.preventDefault(),fetch("/projects/"+e.project_id+"/tasks/"+e.id,{method:"DELETE"}).then((function(){window.location.reload()}))}};return Object(l.jsx)("div",{className:"project-tasks-list",children:t.map((function(e){return Object(l.jsxs)("div",{className:"project-task-preview",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.description}),Object(l.jsxs)("h3",{children:["Due date: ",e.due_date]})]}),Object(l.jsxs)("h3",{children:["Priority: ",e.priority]}),Object(l.jsx)("button",{className:"task-complete-button",onClick:N(e),children:"Complete"}),Object(l.jsx)("button",{className:"task-delete-button",onClick:P(e),children:"Delete"})]},e.id)}))})},A=function(){var e=Object(p.g)().id,t=b("/projects/"+e),c=t.data,n=(t.errorProject,t.isPendingProject,b("/projects/"+e+"/tasks")),r=n.data,s=(n.errorTasks,n.isPendingTasks);return Object(l.jsxs)("div",{className:"project-tasks",children:[c&&Object(l.jsxs)("h1",{children:[c.name,": tasks"]}),Object(l.jsx)("h2",{children:"Ongoing Project Tasks"}),s&&Object(l.jsx)("h2",{children:"Loading..."}),r&&Object(l.jsx)(D,{project_tasks:r.filter((function(e){return!e.completed}))}),Object(l.jsx)("h2",{children:"Completed Project Tasks"}),r&&Object(l.jsx)(D,{project_tasks:r.filter((function(e){return e.completed}))}),Object(l.jsx)("div",{className:"add-task-button-wrapper",children:r&&Object(l.jsx)(i.b,{to:"/projects/".concat(c.id,"/add-task"),className:"add-task-button",children:"Add Task"})})]})},I=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(Date.now),a=Object(d.a)(s,2),i=a[0],j=a[1],o=Object(n.useState)(1),u=Object(d.a)(o,2),h=u[0],O=u[1],x=Object(n.useState)(!1),m=Object(d.a)(x,2),f=m[0],v=m[1],g=Object(p.g)().id,y=b("/projects/"+g),S=y.data,C=(y.error,y.isPending),k=Object(p.f)();return Object(l.jsxs)("div",{className:"add-project-task",children:[Object(l.jsx)("h2",{children:"Add a new task"}),C&&Object(l.jsx)("h2",{children:"Loading..."}),S&&Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={description:c,due_date:i,priority:h,completed:f};fetch("/projects/"+S.id+"/tasks",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(){k.push("/projects/"+g+"/tasks")}))},children:[Object(l.jsx)("label",{children:"Description"}),Object(l.jsx)("input",{type:"text",required:!0,value:c,onChange:function(e){return r(e.target.value)},placeholder:"Input description here"}),Object(l.jsx)("label",{children:"Due Date"}),Object(l.jsx)("input",{type:"date",required:!0,value:i,onChange:function(e){return j(e.target.value)},placeholder:"Input your first name here"}),Object(l.jsx)("label",{children:"Priority"}),Object(l.jsx)("input",{type:"text",required:!0,value:h,onChange:function(e){return O(e.target.value)},placeholder:"Input priority here"}),Object(l.jsx)("label",{children:"Status"}),Object(l.jsxs)("select",{value:f,onChange:function(e){return v(e.target.value)},children:[Object(l.jsx)("option",{value:"Incomplete",children:"Available"}),Object(l.jsx)("option",{value:"Completed",children:"Completed"})]}),Object(l.jsx)("button",{children:"Add task"})]})]})};var _=function(){return Object(l.jsx)(i.a,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(w,{}),Object(l.jsx)(j,{}),Object(l.jsx)("div",{className:"content",children:Object(l.jsxs)(p.c,{children:[Object(l.jsx)(p.a,{exact:!0,path:"/",children:Object(l.jsx)(h,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/create-project",children:Object(l.jsx)(x,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/add-user",children:Object(l.jsx)(C,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/my-profile",children:Object(l.jsx)(v,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/users",children:Object(l.jsx)(S,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/users/:username",children:Object(l.jsx)(g,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/edit-user/:username",children:Object(l.jsx)(E,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/projects/:id/add-task",children:Object(l.jsx)(I,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/projects/:id/tasks",children:Object(l.jsx)(A,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/projects/:id",children:Object(l.jsx)(m,{})}),Object(l.jsx)(p.a,{exact:!0,path:"/edit-project/:id",children:Object(l.jsx)(P,{})}),Object(l.jsx)(p.a,{path:"*",children:Object(l.jsx)(f,{})})]})})]})})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),n(e),r(e),s(e),a(e)}))};a.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(_,{})}),document.getElementById("root")),L()}},[[57,1,2]]]);
//# sourceMappingURL=main.e1a00cc3.chunk.js.map