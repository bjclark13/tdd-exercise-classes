const promptly = require('promptly');

async function runPigLatinApp() {
	const word = await promptly.prompt(
		'What is the phrase you would like to translate?'
	);

    console.log('Translating ' + word);
    translate(word);
}

runPigLatinApp();
