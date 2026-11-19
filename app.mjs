import { readFileSync } from 'node:fs'

function analyze({steps}) {
 if(!Number.isSafeInteger(steps)||steps<1||steps>10000)throw Error('steps must be an integer from 1 to 10000')
 const rounded=x=>Number(x.toFixed(6))
 return {points:Array.from({length:steps+1},(_,i)=>({position:rounded(i/steps),gainA:rounded(Math.cos(Math.PI*i/(2*steps))),gainB:rounded(Math.sin(Math.PI*i/(2*steps)))}))}
}

try {
  if (process.argv.length !== 3) throw new Error('Usage: node app.mjs input.json')
  console.log(JSON.stringify(analyze(JSON.parse(readFileSync(process.argv[2], 'utf8')))))
} catch (error) {
  console.error(error.message)
  process.exitCode = 2
}
