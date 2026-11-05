const RA = '26177018';
const d = RA.split('').map(Number);
const n = d.length;
const A = Number(RA.slice(-2)) % 20;
const B = d[n - 3];
const soma = d.reduce((a, b) => a + b, 0);
const C = soma % 6;
const D = d[n - 4] % 4;
const h = Number(RA.slice(-3)) % 360;
function hslToHex(h, s, l) {
  s /= 100; l /= 100;
  const k = (x) => (x + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (x) => l - a * Math.max(-1, Math.min(k(x) - 3, Math.min(9 - k(x), 1)));
  return '#' + [f(0), f(8), f(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, '0')).join('');
}
console.log(`RA: ${RA}  dígitos: ${d.join(', ')}`);
console.log(`A = ${RA.slice(-2)} mod 20 = ${A}`);
console.log(`B = antepenúltimo dígito = ${B}`);
console.log(`C = (${d.join('+')}) = ${soma} mod 6 = ${C}`);
console.log(`D = 4º dígito do final (${d[n - 4]}) mod 4 = ${D}`);
console.log(`h = ${RA.slice(-3)} mod 360 = ${h} -> hsl(${h}, 60%, 35%) = ${hslToHex(h, 60, 35)}`);
