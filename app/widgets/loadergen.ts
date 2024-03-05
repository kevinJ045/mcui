

export function loadingGeneration(options: any, done?: () => void, text?: string, time = 5000){
	options.component.activatePage('loading_gen_page', {
		title: text || 'Generating'
	});
	setTimeout(() => {
		options.component.back();
		if(done) done();
	}, time);
}