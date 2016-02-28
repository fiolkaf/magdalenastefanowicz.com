//js pf/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('pf/pf.html', {
		markdown : ['pf']
	});
});