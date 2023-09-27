let emoji = `💩`;
let numberOfShipments = 10;

for (let i = 0; i < numberOfShipments; i++) {
    enviarScript(emoji);
    await sleep(i * 100);
}

function enviarScript(scriptText) {
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
	}
	
	return lines.length;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
