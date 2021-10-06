"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[571],{4002:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return n},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var o=a(7462),r=a(3366),i=(a(7294),a(3905)),s=["components"],n={sidebar_position:1},l="GeoLift Best Practices",c={unversionedId:"Best Practices/BestPractices",id:"Best Practices/BestPractices",isDocsHomePage:!1,title:"GeoLift Best Practices",description:"---",source:"@site/docs/Best Practices/BestPractices.md",sourceDirName:"Best Practices",slug:"/Best Practices/BestPractices",permalink:"/GeoLift/docs/Best Practices/BestPractices",editUrl:"https://github.com/facebookincubator/GeoLift/docs/Best Practices/BestPractices.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparison to other Methodologies",permalink:"/GeoLift/docs/Methodology/ComparisonOthers"},next:{title:"GeoLift FAQs",permalink:"/GeoLift/docs/Best Practices/FAQs"}},m=[{value:"Data",id:"data",children:[]},{value:"Test and Control Markets",id:"test-and-control-markets",children:[]},{value:"Local Marketing Efforts",id:"local-marketing-efforts",children:[]},{value:"National Marketing Efforts",id:"national-marketing-efforts",children:[]}],u={toc:m};function d(t){var e=t.components,a=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,o.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geolift-best-practices"},"GeoLift Best Practices"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"data"},"Data"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Daily granularity in the data is strongly recommended over weekly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"It is recommended to use the highest level of geographical granularity at which we can target Facebook campaigns in the study's region (Zip Codes, Cities, etc.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"We recommend having at least 4 - 5x the test duration of pre-campaign historical data of stable data (must not contain structural changes or any other impactful deviation from their data-generating process.).")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"At minimum we recommend having 25 pre-treatment periods of 20 or more geo-units.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Under normal circumstances we advise having historical information to be over the last 52 weeks, this may take into consideration any seasonal variations across brand product sales as well as account for other factors that may not be taken into consideration over a shorter duration.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The test duration should cover at least one purchase cycle for the product.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Study should be run for a minimum of 15 days, if daily, and a minimum of 4-6 weeks if weekly to ensure enough data points are available to assess market impact.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Panel data of covariates is recommended to improve the model but not necessary.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Date, location, and units (or any other KPI) must be had for each time/location combination (no missing values for any unit or timestamp). Additional covariates can be used but follow the same guideline."),(0,i.kt)("hr",{parentName:"li"}))),(0,i.kt)("h2",{id:"test-and-control-markets"},"Test and Control Markets"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Match test and control markets on variables such as sales plus other relevant variables that are specific to the brand category (e.g. product distribution, seasonal variations across geos)."),(0,i.kt)("li",{parentName:"ul"},"Exclude markets that had major disruptions compared to other markets in the test during the pre-test period (see COVID-19 guidelines below)."),(0,i.kt)("li",{parentName:"ul"},"Test and control markets should be matched on the exact same outcome of interest, doing this may eliminate any bias in the results across markets.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"local-marketing-efforts"},"Local Marketing Efforts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Account for any local media efforts such as local TV, any regional offline marketing efforts across the selection markets as these may contribute to some unbalancing factors when comparing results across control and test markets."),(0,i.kt)("li",{parentName:"ul"},"Keep all local marketing efforts to be constant across all markets that are taken into consideration across test and control.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"national-marketing-efforts"},"National Marketing Efforts"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Take into consideration any significant variations across national media such as TV, Print etc. during pre-test or test period will make it hard to really isolate the impact of Facebook on the outcome of interest."),(0,i.kt)("li",{parentName:"ul"},"For sales to be truly attributed to Facebook variations, all other media should be held constant across the markets and if there are significant variations, make sure to address these before the test.")))}d.isMDXComponent=!0}}]);