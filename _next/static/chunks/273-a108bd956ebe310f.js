"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{1458:function(e,t,r){r.d(t,{lh:function(){return Asteroid},mI:function(){return o}});var n,i,o,a,c=r(6259);(n=o||(o={}))[n.Iron=1]="Iron",n[n.Carbon=2]="Carbon",n[n.Gold=3]="Gold",(i=a||(a={}))[i.NotSpawned=1]="NotSpawned",i[i.Idle=2]="Idle",i[i.Destroyed=3]="Destroyed";let Asteroid=class Asteroid{constructor({type:e=1,durability:t=5,spawnedAt:r=Date.now(),position:n=0,state:i=1}={}){this.id=crypto.randomUUID(),this.entityType=c.p.Asteroid,this.type=e,this.durability=t,this.spawnedAt=r,this.position=n,this.state=i}}},9453:function(e,t,r){r.d(t,{KE:function(){return i},ns:function(){return c},wQ:function(){return a}});var n,i,o=r(4249);(n=i||(i={})).IronIngot="ironIngot",n.SteelPlate="steelPlate",n.ThermalShield="thermalShield",n.IntegratedCircuit="integratedCircuit",n.MiningOutpost="miningOutpost",n.GasExtractingOrbitalStation="gasExtractingOrbitalStation";let a=Object.values(i),c={ironIngot:{type:"ironIngot",cost:[[o._.Iron,2]],sellPrice:100,craftingTime:2e3},steelPlate:{type:"steelPlate",cost:[["ironIngot",2],[o._.Carbon,2]],sellPrice:800,craftingTime:2e3},thermalShield:{type:"thermalShield",cost:[["steelPlate",1],[o._.Gold,5]],sellPrice:2e3,craftingTime:5e3},integratedCircuit:{type:"integratedCircuit",cost:[["steelPlate",2],[o._.Gold,2],[o._.Silicon,5]],sellPrice:4500,craftingTime:1e4},miningOutpost:{type:"miningOutpost",cost:[["steelPlate",20],["thermalShield",10]],sellPrice:4e4,craftingTime:2e4},gasExtractingOrbitalStation:{type:"gasExtractingOrbitalStation",cost:[["steelPlate",30],["thermalShield",20],["integratedCircuit",15]],sellPrice:135e3,craftingTime:6e4}}},6259:function(e,t,r){var n,i;r.d(t,{p:function(){return n}}),(i=n||(n={}))[i.Asteroid=1]="Asteroid",i[i.Planet=2]="Planet"},4249:function(e,t,r){var n,i;r.d(t,{W:function(){return o},_:function(){return n}}),(i=n||(n={})).Scrip="scrip",i.Iron="iron",i.Carbon="carbon",i.Gold="gold",i.Silicon="silicon",i.Hydrogen="hydrogen",i.Platinum="platinum",i.Uranium="uranium",i.Shungite="shungite",i.Silver="silver",i.Copper="copper",i.RedMercury="red_mercury",i.Titanium="titanium";let o=Object.values(n)},8948:function(e,t,r){function preferredNumber(e){let t;if(0===(e=Math.floor(e)))return 0;let r=Math.floor(e/3),n=e%3;switch(n){case 0:t=5;break;case 1:t=10;break;case 2:t=20;break;default:t=0}return t*Math.pow(10,r-1)}r.d(t,{ty:function(){return o},x:function(){return i}});var n=r(4249);let i=["ironClickEfficiency","asteroidAttractor","ironMiningBot","carbonExtraction","carbonClickEfficiency","carbonMiningBot","asteroidClickStrength","asteroidDurability","goldExtraction","goldClickEfficiency","goldMiningBot","outpostCapacity","outpostEfficiency"],o=Object.values({ironClickEfficiency:{type:"ironClickEfficiency",finite:!1,category:"manual",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(e+6)}]},asteroidAttractor:{type:"asteroidAttractor",finite:!0,max:5,category:"unlocking",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(10+3*e)}]},ironMiningBot:{type:"ironMiningBot",finite:!1,category:"automatic",cost:e=>[{resource:n._.Iron,quantity:preferredNumber(e+6)}]},carbonExtraction:{type:"carbonExtraction",finite:!0,max:1,category:"unlocking",cost:()=>[{resource:n._.Scrip,quantity:preferredNumber(13)}]},carbonClickEfficiency:{type:"carbonClickEfficiency",finite:!1,category:"manual",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(e+11)}]},carbonMiningBot:{type:"carbonMiningBot",finite:!1,category:"automatic",cost:e=>[{resource:n._.Carbon,quantity:preferredNumber(e+6)}]},asteroidClickStrength:{type:"asteroidClickStrength",finite:!0,max:4,category:"manual",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(13+2*e)}]},asteroidDurability:{type:"asteroidDurability",finite:!0,max:4,category:"manual",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(13+2*e)}]},goldExtraction:{type:"goldExtraction",finite:!0,max:1,category:"unlocking",cost:()=>[{resource:n._.Scrip,quantity:preferredNumber(19)}]},goldClickEfficiency:{type:"goldClickEfficiency",finite:!1,category:"manual",cost:e=>[{resource:n._.Scrip,quantity:preferredNumber(e+13)}]},goldMiningBot:{type:"goldMiningBot",finite:!1,category:"automatic",cost:e=>[{resource:n._.Gold,quantity:preferredNumber(e+6)}]},outpostCapacity:{type:"outpostCapacity",finite:!0,max:1,category:"manual",cost:()=>[{resource:n._.Scrip,quantity:preferredNumber(19)}]},outpostEfficiency:{type:"outpostEfficiency",finite:!0,max:1,category:"automatic",cost:()=>[{resource:n._.Scrip,quantity:preferredNumber(19)}]}})},708:function(e,t,r){r.d(t,{J:function(){return defaultCraftedItems},r:function(){return o}});var n=r(4660),i=r(9453);function defaultCraftedItems(){let e=i.wQ.reduce((e,t)=>(e[t]={type:t,quantity:0},e),{});return e}let o=(0,n.Ue)(e=>({craftedItems:defaultCraftedItems(),increase:(t,r)=>e(e=>{let n={...e.craftedItems};return n[t].quantity+=r,{craftedItems:n}}),decrease:(t,r)=>e(e=>{let n={...e.craftedItems};return n[t].quantity=Math.max(0,n[t].quantity-r),{craftedItems:n}}),reset:()=>e({craftedItems:defaultCraftedItems()})}))},6725:function(e,t,r){r.d(t,{G:function(){return o},l:function(){return defaultCraftingState}});var n=r(4660),i=r(9453);function defaultCraftingState(){let e=Object.values(i.KE).reduce((e,t)=>(e[t]={type:t,unlocked:!1,autoCrafting:!1},e),{});return e[i.KE.SteelPlate].unlocked=!0,e}let o=(0,n.Ue)(e=>({items:defaultCraftingState(),craft:t=>e(e=>({items:{...e.items,[t]:{...e.items[t],craftingStartTime:Date.now()}}})),endCrafting:t=>e(e=>({items:{...e.items,[t]:{...e.items[t],craftingStartTime:void 0}}})),setAutoCrafting:(t,r)=>e(e=>({items:{...e.items,[t]:{...e.items[t],autoCrafting:r}}})),reset:()=>e({items:defaultCraftingState()})}))},1677:function(e,t,r){r.d(t,{V:function(){return c}});var n=r(4660),i=r(4810),o=r(1458),a=r(6259);let c=(0,n.Ue)()((0,i.XR)(e=>({asteroids:{0:new o.lh},planets:startingPlanets(),add:t=>e(e=>{if(t.entityType===a.p.Asteroid){let r;let n=Object.keys(e.asteroids).map(e=>parseInt(e));do r=Math.floor(6*Math.random());while(n.includes(r));return t.position=r,{asteroids:{...e.asteroids,[r]:t}}}return{}}),addOutpost:t=>e(e=>({planets:{...e.planets,[t]:{...e.planets[t],outposts:e.planets[t].outposts+1}}})),addResourcesToOutpost:(t,r)=>e(e=>{let n={...e.planets[t]};for(let[e,t]of Object.entries(r)){var i;n.resources[e]=(null!==(i=n.resources[e])&&void 0!==i?i:0)+t}return{planets:{...e.planets,[t]:n}}}),removeResourcesFromOutpost:t=>e(e=>({planets:{...e.planets,[t]:{...e.planets[t],resources:{}}}})),remove:t=>e(e=>{if(t.entityType===a.p.Asteroid){let r={...e.asteroids};return delete r[t.position],{asteroids:r}}return{}}),modify:t=>e(e=>t.entityType===a.p.Asteroid?{asteroids:{...e.asteroids,[t.position]:t}}:{}),reset:()=>e({asteroids:[new o.lh],planets:startingPlanets()})})));function startingPlanets(){return{xileon:{outposts:0,resources:{}},xileon1:{outposts:0,resources:{}}}}},4273:function(e,t,r){r.d(t,{L:function(){return a}});var n=r(4660),i=r(7960),o=r(2303);let a=(0,n.Ue)(e=>({orders:[],add:t=>{(0,i.PS)(t),(0,o.z)(),e(e=>({orders:[...e.orders,t]}))},update:t=>{(0,i.Cs)(t),(0,o.z)(),e(e=>({orders:e.orders.map(e=>e.id===t.id?t:e)}))},deleteNonOpenOrders:()=>{(0,i.X_)(),e(e=>({orders:e.orders.filter(e=>"open"===e.status)}))},deleteAllOrders:()=>{(0,i.Bf)(),e({orders:[]})}}))},7180:function(e,t,r){r.d(t,{K:function(){return defaultResources},o:function(){return a}});var n=r(4660),i=r(4249);function defaultResources(){let e=i.W.reduce((e,t)=>(e[t]={type:t,quantity:0,unlocked:!1},e),{});return e.scrip.unlocked=!0,e.iron.unlocked=!0,e.carbon.unlocked=!0,e.gold.unlocked=!0,e}let o={scrip:()=>!0,iron:()=>!0,carbon:()=>!0,gold:()=>!0,silicon:e=>e.miningOutpost.quantity>0,hydrogen:e=>e.gasExtractingOrbitalStation.quantity>0,platinum:()=>!1,uranium:()=>!1,shungite:()=>!1,silver:()=>!1,copper:()=>!1,red_mercury:()=>!1,titanium:()=>!1},a=(0,n.Ue)(e=>({resources:defaultResources(),resourceRevealConditions:{...o},increase:t=>e(e=>{let r={...e.resources};for(let[e,n]of t)r[e].quantity+=n;return{resources:r}}),decrease:(t,r)=>e(e=>{let n={...e.resources};return n[t].quantity=Math.max(0,n[t].quantity-r),{resources:n}}),unlock:t=>e(e=>{let r={...e.resources};return r[t].unlocked=!0,{resources:r}}),reset:()=>e({resources:defaultResources()})}))},5054:function(e,t,r){r.d(t,{X:function(){return o},j:function(){return c}});var n=r(4660),i=r(8948);let o=i.x.reduce((e,t)=>(e[t]={owned:0,revealed:!1},e),{}),a={ironClickEfficiency:e=>e.scrip.quantity>=35,asteroidClickStrength:(e,t)=>t.asteroidAttractor.owned>0,asteroidDurability:(e,t)=>t.asteroidAttractor.owned>0,asteroidAttractor:e=>e.scrip.quantity>=400,ironMiningBot:(e,t)=>e.iron.quantity>=35||t.ironClickEfficiency.owned>1,carbonExtraction:e=>e.scrip.quantity>=1e3,carbonClickEfficiency:(e,t)=>t.carbonExtraction.owned>0,carbonMiningBot:(e,t)=>t.carbonExtraction.owned>0,goldExtraction:e=>e.scrip.quantity>=75e4,goldClickEfficiency:(e,t)=>t.goldExtraction.owned>0,goldMiningBot:(e,t)=>t.goldExtraction.owned>0,outpostCapacity:e=>e.silicon.unlocked||e.hydrogen.unlocked,outpostEfficiency:e=>e.silicon.unlocked||e.hydrogen.unlocked},c=(0,n.Ue)(e=>({upgrades:{...o},upgradeRevealConditions:{...a},increase:t=>{e(e=>({upgrades:{...e.upgrades,[t]:{...e.upgrades[t],owned:e.upgrades[t].owned+1}}}))},reveal:t=>{e(e=>({upgrades:{...e.upgrades,[t]:{...e.upgrades[t],revealed:!0}}}))},reset:()=>e({upgrades:{...o},upgradeRevealConditions:{...a}})}))},7960:function(e,t,r){let n;r.d(t,{Bf:function(){return deleteAllOrders},Cs:function(){return updateOrder},PS:function(){return insertOrder},X_:function(){return deleteNonOpenOrders},zk:function(){return getAllOrders}});var i=r(8542);async function getDB(){return n||(n=await (0,i.X3)("orders",1,{upgrade(e){e.createObjectStore("orders",{keyPath:"id"})}})),n}async function insertOrder(e){let t=await getDB();await t.put("orders",e)}async function updateOrder(e){let t=await getDB();await t.put("orders",e)}async function getAllOrders(){let e=await getDB();return e.getAll("orders")}async function deleteNonOpenOrders(){let e=await getDB(),t=await e.getAll("orders");await e.clear("orders"),await Promise.all(t.map(t=>e.put("orders",t)))}async function deleteAllOrders(){let e=await getDB();await e.clear("orders")}},2303:function(e,t,r){r.d(t,{j:function(){return loadState},z:function(){return saveState}});var n=r(1677),i=r(7180),o=r(5054),a=r(708),c=r(6725);function saveState(){let e={version:s,asteroids:n.V.getState().asteroids,planets:n.V.getState().planets,resources:i.o.getState().resources,craftedItems:a.r.getState().craftedItems,crafting:c.G.getState().items,upgrades:o.j.getState().upgrades,date:Date.now()};localStorage.setItem("saveState",JSON.stringify(e))}let s=1;function loadState(){let e=localStorage.getItem("saveState");if(!e)return null;let t=JSON.parse(e);return t.version?t:null}}}]);