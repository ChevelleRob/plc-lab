const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:1280,height:640}});
for(const k of ['el','plc']){await p.goto('file://'+process.cwd()+'/social-preview.html#'+k);await p.reload();await p.waitForTimeout(1200);
 await p.screenshot({path:`social-${k}.png`});}
await b.close();})();
