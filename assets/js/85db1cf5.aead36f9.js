"use strict";(self.webpackChunkproyecto_final_redes=self.webpackChunkproyecto_final_redes||[]).push([[387],{3905:function(e,r,a){a.d(r,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),c=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=t,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(v,i(i({ref:r},p),{},{components:a})):n.createElement(v,i({ref:r},p))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3139:function(e,r,a){a.r(r),a.d(r,{contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=a(7462),t=a(3366),o=(a(7294),a(3905)),i=["components"],s={sidebar_position:3},l="Cliente-servidor",c={unversionedId:"sockets-application-programming/page3",id:"sockets-application-programming/page3",isDocsHomePage:!1,title:"Cliente-servidor",description:"\xbfCu\xe1l es la arquitectura entre el cliente - servidor?",source:"@site/docs/sockets-application-programming/page3.md",sourceDirName:"sockets-application-programming",slug:"/sockets-application-programming/page3",permalink:"/docs/sockets-application-programming/page3",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Tipos de sockets",permalink:"/docs/sockets-application-programming/page2"},next:{title:"\xbfQu\xe9 es el internet de las cosas (IoT)?",permalink:"/docs/internet-of-things/page1"}},p=[{value:"\xbfCu\xe1l es la arquitectura entre el cliente - servidor?",id:"cu\xe1l-es-la-arquitectura-entre-el-cliente---servidor",children:[],level:2},{value:"Ventajas",id:"ventajas",children:[],level:2},{value:"Desventajas",id:"desventajas",children:[],level:2}],u={toc:p};function d(e){var r=e.components,s=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"cliente-servidor"},"Cliente-servidor"),(0,o.kt)("h2",{id:"cu\xe1l-es-la-arquitectura-entre-el-cliente---servidor"},"\xbfCu\xe1l es la arquitectura entre el cliente - servidor?"),(0,o.kt)("p",null,"Es uno de los estilos arquitect\xf3nicos distribuidos m\xe1s conocidos, el cual est\xe1 compuesto por dos componentes, el proveedor y el consumidor. El proveedor es un servidor que brinda una serie de servicios o recursos los cuales son consumido por el Cliente."),(0,o.kt)("p",null,"En una arquitectura Cliente-Servidor existe un servidor y m\xfaltiples clientes que se conectan al servidor para recuperar todos los recursos necesarios para funcionar"),(0,o.kt)("p",null,"El servidor deber\xe1 exponer un mecanismo que permite a los clientes conectarse, que por lo general es TCP/IP, esta comunicaci\xf3n permitir\xe1 una comunicaci\xf3n continua y bidireccional, de tal forma que el cliente puede enviar y recibir datos del servidor y viceversa."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:a(5864).Z})),(0,o.kt)("p",null,"Es bastante obvio decir que en esta arquitectura el cliente no sirve para absolutamente nada si el servidor no est\xe1 disponible, mientras que el servidor por s\xed solo no tendr\xeda motivo de ser, pues no habr\xeda nadie que lo utilice. En este sentido, las dos partes son mutuamente dependientes, pues una sin la otra no tendr\xeda motivo de ser."),(0,o.kt)("p",null,"La idea central de separar al cliente del servidor radica en la idea de centralizar la informaci\xf3n y la separaci\xf3n de responsabilidades, por una parte, el servidor ser\xe1 la \xfanica entidad que tendr\xe1 acceso a los datos y los servir\xe1 solo a los clientes del cual el conf\xeda, y de esta forma, protegemos la informaci\xf3n y la l\xf3gica detr\xe1s del procesamiento de los datos, adem\xe1s, el servidor puede atender simult\xe1neamente a varios clientes, por lo que suele ser instalado en un equipo con muchos recursos. Por otro lado, el cliente suele ser instalado en computadoras con bajos recursos, pues desde all\xed no se procesa nada, simplemente act\xfaa como un visor de los datos y delega las operaciones pesadas al servidor."),(0,o.kt)("p",null,"El cliente y el servidor son aplicaciones diferentes, por lo que pueden tener un ciclo de desarrollo diferente, as\xed como usar tecnolog\xedas y un equipo diferente entre s\xed. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Docs Version Dropdown",src:a(3797).Z})),(0,o.kt)("h2",{id:"ventajas"},"Ventajas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Centralizaci\xf3n:")," El servidor fungir\xe1 como \xfanica fuente de la verdad, lo que impide que los clientes conserven informaci\xf3n desactualizada.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Seguridad:")," El servidor por lo general est\xe1 protegido por firewall o subredes que impiden que los atacantes pueden acceder a la base de datos o los recursos sin pasar por el servidor.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"F\xe1cil de instalar (cliente):")," El cliente es por lo general una aplicaci\xf3n simple que no tiene dependencias, por lo que es muy f\xe1cil de instalar.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Separaci\xf3n de responsabilidades:")," La arquitectura cliente-servidor permite implementar la l\xf3gica de negocio de forma separada del cliente.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Portabilidad:")," Una de las ventajas de tener dos aplicaciones es que podemos desarrollar cada parte para correr en diferentes plataformas, por ejemplo, el servidor solo en Linux, mientras que el cliente podr\xeda ser multiplataforma."))),(0,o.kt)("h2",{id:"desventajas"},"Desventajas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Actualizaciones (clientes):")," Una de las complicaciones es gestionar las actualizaciones en los clientes, pues puede haber muchos terminales con el cliente instalado y tenemos que asegurar que todas sean actualizadas cuando salga una nueva versi\xf3n.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Concurrencia:")," Una cantidad no esperada de usuarios concurrentes puede ser un problema para el servidor, quien tendr\xe1 que atender todas las peticiones de forma simult\xe1nea, aunque se puede mitigar con una estrategia de escalamiento, siempre ser\xe1 un problema que tendremos que tener presente.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Todo o nada:")," Si el servidor se cae, todos los clientes quedar\xe1n totalmente inoperables.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Protocolos de bajo nivel:")," Los protocolos m\xe1s utilizados para establecer comunicaci\xf3n entre el cliente y el servidor suelen ser de bajo nivel, como Sockets, HTTP, RPC, etc. Lo que puede implicar un reto para los desarrolladores.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Depuraci\xf3n:")," Es dif\xedcil analizar un error, pues los clientes est\xe1n distribuidos en diferentes m\xe1quinas, incluso, equipos a los cuales no tenemos acceso, lo que hace complicado recopilar la traza del error."))))}d.isMDXComponent=!0},5864:function(e,r,a){r.Z=a.p+"assets/images/Cliente-Servidor-cef699a069c044c64089bcc4bfe7e0c1.png"},3797:function(e,r,a){r.Z=a.p+"assets/images/Cliente-Servidor2-50862b29dcbce4e678f4556628e8f1b2.png"}}]);