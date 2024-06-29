const htmlCode = document.getElementById('html-code');
const cssCode = document.getElementById('css-code');
const jsCode = document.getElementById('js-code');
const output = document.getElementById('output');
function run(){
    const html = htmlCode.value;
    const css = `<style>${cssCode.value}</style>`;
    const js = jsCode.value;
    output.contentDocument.body.innerHTML = html + css;
    output.contentWindow.eval(js);

}

htmlCode.addEventListener('input', run);
cssCode.addEventListener('input', run);
jsCode.addEventListener('input', run);
run();
