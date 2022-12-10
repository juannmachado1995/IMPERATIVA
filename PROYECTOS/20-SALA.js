let usuarios = [
    {
        usuario: "walter",
        likes:124213
    }
    ,  {
        usuario: "pablo" , 
        likes:1241243
    }
    ,  {
        usuario: "tincho" ,
        likes:123123
    }
    ,  {
        usuario: "anahi" , 
        likes:4213
    }
    ,  {
        usuario: "merli" ,
        likes:141243
    }
    ,  {
        usuario: "martina" ,
        likes:12414512
    }
    ,  {
        usuario: "sofia" ,
        likes:541243
    }
    ,  {
        usuario: "ezequiel" ,
        likes:4123
    }
    ,  {
        usuario: "federico" ,
        likes:123213
    }
    ,  {
        usuario: "julia" , 
        likes:123123
    }
    ,  {
        usuario: "martin" , 
        likes:4123
    }
    ,  {
        usuario:"luis" , 
        likes:4123
    }
    ,  {
        usuario: "dario",
        likes:12434
    }
    ,  {
        usuario: "german" ,
        likes:12314
    }
    ,  {
        usuario:"marcos" ,
        likes:543
    }
]

for (let i = 0 ; i < usuarios.length; i++){
    for (let k = 0 ; k < usuarios.length - 1; k++){
        if (usuarios[k].likes < usuarios[k + 1].likes){
            let aux = usuarios[k + 1]
            usuarios[k + 1] = usuarios[k]
            usuarios[k] = aux
        }
    }
}
// console.log(usuarios)

//EJERCICIO 2 METEREOLOGICO

let meteorologo = [
    {
        dia: 1 ,
        mes:02 ,
        temp_min:15 ,
        temp_max:25
    }
    ,{
        dia:2 ,
        mes: 02,
        temp_min:5,
        temp_max:14
    }
    ,
    {
        dia:3 ,
        mes: 02,
        temp_min:14 ,
        temp_max:25
    }
    ,{
        dia: 4 ,
        mes: 02,
        temp_min:19 ,
        temp_max:26
    }
    ,{
        dia:5 ,
        mes:2 ,
        temp_min:29 ,
        temp_max:35
    }
    ,{
        dia: 6,
        mes:02 ,
        temp_min:29 ,
        temp_max:38
    }
    ,{
        dia: 7,
        mes:02 ,
        temp_min:32 ,
        temp_max:38
    }
]
for (let i = 0 ; i < meteorologo.length; i++){
    for (let k = 0 ; k < meteorologo.length - 1; k++){
        if (meteorologo[k].temp_max < meteorologo[k + 1].temp_max){
            let aux = meteorologo[k + 1]
            meteorologo[k + 1] = meteorologo[k]
            meteorologo[k] = aux
        }
    }
}
// console.log(meteorologo)

for (let i = 0 ; i < meteorologo.length; i++){
    for (let k = 0 ; k < meteorologo.length - 1; k++){
        if (meteorologo[k].temp_min > meteorologo[k + 1].temp_min){
            let aux = meteorologo[k + 1]
            meteorologo[k + 1] = meteorologo[k]
            meteorologo[k] = aux
        }
    }
}
// console.log(meteorologo)