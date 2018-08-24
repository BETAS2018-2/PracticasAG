let alumnos = [
    {
        id : 1 ,
        nombre: "Miguel" ,
        cal : 10 , 
        mats: 7
    },
    {
        id: 2 ,
        nombre: "Antonio" ,
        cal:  5 ,
        mats: 8
    },
    {
        id: 3 ,
        nombre: "Juan" ,
        cal: 3 ,
        mats: 5
    }
];
let getAlumno = (mats, callback) => {
 let materias=alumnos.find((materia) =>{
     return materia.mats === mats;
 });
 if(!materias){
    callback(`El alumno con ${mats} materias no ha sido encontrada`,null);
 }else{
 callback(null, materias.nombre);
 }
 
}

getAlumno(5, (err, nombre) => {
    if(err) return console.log(err);
  console.log(nombre);
});