import * as THREE from 'three/webgpu'

const text = `
╔═ Cypher Punk World ═══╗
║ One open world for all our projects.
║ Thanks for looking under the hood, you sneaky developer!
╚═══════════════════════╝

╔═ Debug ═══════════════╗
║ You can access the debug mode by adding #debug at the end of the URL and reloading.
║ Press [V] to toggle the free camera.
╚═══════════════════════╝

╔═ Built with ══════════╗
║ Three.js (release: ${THREE.REVISION}) ⇒ https://threejs.org/
║ Rapier (Physics library)  ⇒ https://rapier.rs/
║ Howler.js (Audio library) ⇒ https://howlerjs.com/
╚═══════════════════════╝
`
let finalText = ''
let finalStyles = []
const stylesSet = {
    letter: 'color: #ffffff; font: 400 1em monospace;',
    pipe: 'color: #D66FFF; font: 400 1em monospace;',
}
let currentStyle = null
for(let i = 0; i < text.length; i++)
{
    const char = text[i]

    const style = char.match(/[╔║═╗╚╝╔╝]/) ? 'pipe' : 'letter'
    if(style !== currentStyle)
    {
        currentStyle = style
        finalText += '%c'

        finalStyles.push(stylesSet[currentStyle])
    }
    finalText += char
}

export default [finalText, ...finalStyles]