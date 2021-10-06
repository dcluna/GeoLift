"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[82],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return f}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=a,p=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?o.createElement(p,r(r({ref:t},h),{},{components:n})):o.createElement(p,r({ref:t},h))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2348:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return h},default:function(){return u}});var o=n(7462),a=n(3366),i=(n(7294),n(3905)),r=["components"],s={sidebar_position:1},l="GeoLift Methodology",c={unversionedId:"Methodology/Methodology",id:"Methodology/Methodology",isDocsHomePage:!1,title:"GeoLift Methodology",description:"---",source:"@site/docs/Methodology/Methodology.md",sourceDirName:"Methodology",slug:"/Methodology/Methodology",permalink:"/docs/Methodology/Methodology",editUrl:"https://github.com/facebookincubator/GeoLift/docs/Methodology/Methodology.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"GeoLift Walkthrough",permalink:"/docs/GettingStarted/Walkthrough"},next:{title:"Comparison to other Methodologies",permalink:"/docs/Methodology/ComparisonOthers"}},h=[{value:"Incrementality: The Gold-Standard of Measurement",id:"incrementality-the-gold-standard-of-measurement",children:[]},{value:"Quasi-Experiments and Synthetic Control Methods",id:"quasi-experiments-and-synthetic-control-methods",children:[]},{value:"Making Synthetic Control Methods Even Better",id:"making-synthetic-control-methods-even-better",children:[]}],d={toc:h};function u(e){var t=e.components,s=(0,a.Z)(e,r);return(0,i.kt)("wrapper",(0,o.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geolift-methodology"},"GeoLift Methodology"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"incrementality-the-gold-standard-of-measurement"},"Incrementality: The Gold-Standard of Measurement"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Incrementality-based")," measurement allows us to know the true value of our marketing efforts. In essence, a campaign\u2019s incremental effect is the difference between what we observed as the results of that campaign and what would have happened in a world where it didn\u2019t take place (counterfactual). And while Randomized Controlled Trials (RCTs) such as Facebook's ",(0,i.kt)("a",{parentName:"p",href:"https://www.facebook.com/business/m/one-sheeters/conversion-lift"},"Conversion Lift")," remain as the gold-standard of incrementality, they are not always technically or practicably feasible. For instance, Lift studies are often gated by the access to online signals (pixels, APIs, SDKs, etc.). This means that advertisers that do not have access to these signals, are in the process of losing them, or do not want to share them weren't able to leverage incrementality to make key business decisions."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"quasi-experiments-and-synthetic-control-methods"},"Quasi-Experiments and Synthetic Control Methods"),(0,i.kt)("p",null,"Quasi-Experiments offer a great alternative to measure Lift whenever an RCT is not viable and GeoLift leverages some of the latest developments in this area to empower advertisers to embrace incrementality. GeoLift is based on ",(0,i.kt)("a",{parentName:"p",href:"https://economics.mit.edu/files/11859"},"Synthetic Control Methods (SCMs)"),", which work by creating an artificial unit that is as similar as possible to the test unit. Using historical information prior to the treatment SCMs find the combination of untreated units that most closely replicate the treated. This effectively creates a constructed or synthetic control which will provide a robust counterfactual to which we will measure the campaign\u2019s effectiveness. Prior to the intervention the test and synthetic control are virtually identical, therefore, any differences after the treatment started between these two units is the campaign\u2019s incrementality."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"GeoLift Example",src:n(1503).Z})),(0,i.kt)("p",null,"The idea behind SCMs is that a combination of units often provides a better comparison for the unit exposed to the intervention than any single unit alone (like in matching analyses). Moreover, by constructing the counterfactual as a weighted average of the units of observation, these approaches provide additional robustness against omitted variable biases as long as the control units have similar characteristics to the test. In practice, unit comparability and similarity are a given since GeoLift studies we use locations of the same region or country as test and control units. Moreover, SCMs rely on panel data and can reliably account for confounders changing over time unlike traditional Difference-In-Difference quasi-experimental methods."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"making-synthetic-control-methods-even-better"},"Making Synthetic Control Methods Even Better"),(0,i.kt)("p",null,"Nevertheless, SCMs are not perfect and are subject to biases due to inexact matching which happen when we can\u2019t reliably re-create the test unit with the controls. Fortunately, GeoLift is based on the combination of two cutting-edge SCM methods that address these limitations and provide a powerful foundation for our tool. Specifically, GeoLift combines the sturdiness of synthetic control estimations of ",(0,i.kt)("a",{parentName:"p",href:"https://eml.berkeley.edu/~jrothst/workingpapers/BMFR_Synth_Nov_2018.pdf"},"Augmented Synthetic Control Methods (ASCM)")," with the powerful inference capabilities of ",(0,i.kt)("a",{parentName:"p",href:"https://www.cambridge.org/core/journals/political-analysis/article/generalized-synthetic-control-method-causal-inference-with-interactive-fixed-effects-models/B63A8BD7C239DD4141C67DA10CD0E4F3"},"Generalized Synthetic Controls (GSC)"),"."),(0,i.kt)("p",null,"Specifically, GeoLift uses ASCM to estimate and de-bias the synthetic control estimate and then uses GSC\u2019s robustness on small samples and on heterogeneous effects across units to perform inference. Moreover, the two-step implementation of these approaches addresses imbalances caused by the curse of dimensionality which typically causes bias as the amount of historical data and units increases given that the likelihood of finding exact matching decreases rapidly as more dimensions are added to the solutions-space. Finally, GSC provides powerful parametric bootstrapping approaches to provide valid and reliable inference and uncertainty estimates. All-in-all, the combination of these two approaches provide robustness against biases in GeoLift at the cost of additional processing power."),(0,i.kt)("p",null,"SCMs have been regarded as ",(0,i.kt)("a",{parentName:"p",href:"https://faculty.smu.edu/millimet/classes/eco7377/papers/athey%20imbens%202017.pdf"},"\u201carguably the most important innovation in the policy evaluation literature in the last 15 years\u201d")," (Athey and Imbens 2015). However, their adoption in other areas such as marketing has been slow. This is mainly due to the lack of power calculations for, which makes them difficult to plan and design future studies. These calculations are particularly important for geo-testing experiments, where the effect sizes are usually small and where there is often a significant chance to fail to find the effect of the experiment. Therefore, running a geo-test without a robust prior power analysis leads to a high chance of failing to find lift, even if it actually happened."),(0,i.kt)("p",null,"Moreover, through a power analysis we can not only align expectations before the test, but we can even set it up for success by finding which test set-up has the best chance to detect the lift. Through this analysis we can find which are the best test locations, how many we should include, investment, and even how long we should run the test for in order to be able to detect the lift."),(0,i.kt)("p",null,"GeoLift addresses these issues by providing three power calculators for three common use-cases:"),(0,i.kt)("h4",{id:"test-length-and-investmentlift-for-known-test-locations"},"Test length and investment/lift for known test locations"),(0,i.kt)("p",null,"This calculator is useful when an advertiser knows which test locations he wants to use for an experiment, but needs help finding out the investment and test length. The calculator takes as input the dataset, a list of thest locations, and a Cost Per Incremental Conversion (if available) to help determine the necessary investment to execute a well-powered test."),(0,i.kt)("h4",{id:"optimal-number-of-test-markets"},"Optimal Number of Test Markets"),(0,i.kt)("p",null,"When considering running a GeoLift, you might need guidance determining how many test locations they need to use for an experiment. GeoLift provides a power calculator that can provide valuable help to determine how many test markets are needed for a well-powered test."),(0,i.kt)("h4",{id:"market-selection"},"Market Selection"),(0,i.kt)("p",null,"Users that wants to run their first Geo-Test might not know how many markets they should select, which ones to use, or even for how long to run the test. GeoLift provides Power Calculators that help in these situations to find the best possible test based on historical data. Our Market Selection algorithms will set your test up for success!"))}u.isMDXComponent=!0},1503:function(e,t,n){t.Z=n.p+"assets/images/Methodology_GeoLift_Lift-7aeddbd9f72af07ce5884504788ce6ba.png"}}]);