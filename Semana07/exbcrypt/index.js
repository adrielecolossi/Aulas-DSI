const bcrypt= require('bcrypt')
console.log('oi')

const senha="adminadmin";
const crypt = bcrypt.hashSync(senha, 10);
//o padrão é 10
//usamos bcrypt pois nemse invadisse o datacenter daria pra roubar as senhas
//uma senha tem que ter letra maiuscula, um caracter especial
const compCerto= bcrypt.compareSync(senha, crypt);
const compErrado= bcrypt.compareSync('senha errada', crypt);

console.log({compCerto,
compErrado})