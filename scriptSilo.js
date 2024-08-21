// Definir dos silos: uno para soja y otro para maíz. Cada silo tendrá una capacidad
// máxima y un stock actual de cereal.

class Silo {
    constructor(capacidadMaxima, stockActual){
        this.capacidadMaxima = capacidadMaxima;
        this.stockActual = stockActual;
    }
}



// Cree los dos silos

const SiloSoja = new Silo (10000, 5000);
const SiloMaiz = new Silo (10000, 3000);

// Implementar una función que permita ingresar un camión. Esta función debe:
// o Solicitar al usuario el tipo de cereal (soja o maíz) y el peso de la carga.
// o Validar los datos ingresados (por ejemplo, que el peso sea un número
// positivo).
// o Determinar el silo correspondiente al tipo de cereal.
// o Verificar si hay suficiente espacio en el silo para almacenar la carga.
// o Si hay espacio, actualizar el stock del silo y mostrar un mensaje informando
// sobre el ingreso del camión.
// o Si no hay espacio, mostrar un mensaje indicando que el silo está lleno.

let usuario = prompt("Ingrese su nombre de usuario");
alert(`Bienvenidx ${usuario}`);
alert(`Recordar: antes de ingresar mercadería consultar stock y disponibildad en silo. Muchas gracias.`);


// let actualizarStock =+ ingresoMaiz;
// alert(`El stock actual es ${actualizarStock}`);


function mostrarMensaje(mensaje){
    alert(mensaje);
}

function IngresoCereales(){
    let opciones;
    do {
        // Creo variables para comprobar la capacidad restante dentro del do para que se actualice cada vez que salta el alert principal
        let capacidadRestanteMaiz = SiloMaiz.capacidadMaxima - SiloMaiz.stockActual;
        let capacidadRestanteSoja = SiloSoja.capacidadMaxima - SiloSoja.stockActual;
        opciones = parseInt(prompt(`\n**Bienvenidx ${usuario} a la Planta "El poroto S.R.L."**\n\nElija una opción:\n1. Consultar stock de maíz\n2. Ingreso de maíz\n3. Consultar stock de soja\n4. Ingreso de soja\n5. Salir`));
        switch(opciones){
            case 1:
                //compruebo si hay espacio en el silo
                if (capacidadRestanteMaiz > 0) {
                alert(`El stock actual de maíz es de ${SiloMaiz.stockActual} granos \nUsted puede ingresar hasta ${capacidadRestanteMaiz} granos`);
                }
                else {
                alert('El stock actual de maíz es de '+SiloMaiz.stockActual+ ' granos \nEstá en su capacidad máxima');
                }
            break;
            case 2:
                // compruebo si hay espacio en el silo, sino no deja ingresar granos
                if (capacidadRestanteMaiz > 0 ) {
                    let ingresoMaiz = parseInt(prompt(`Ingrese la cantidad deseada de maíz: `));
                mostrarMensaje(`La cantidad de maíz a ingresar es ${ingresoMaiz}`);
                if (capacidadRestanteMaiz >= ingresoMaiz && ingresoMaiz > 0) {
                    SiloMaiz.stockActual = SiloMaiz.stockActual + ingresoMaiz;
                    mostrarMensaje(`El stock se ha actualizado a ${SiloMaiz.stockActual} granos de maíz`);
                }
                // compruebo que sea un número mayor a 0
                else if(0 >= ingresoMaiz) {
                    mostrarMensaje('Ingrese un número válido mayor a 0');
                }
                // si supera la capacidad restante no ingresa nada
                else {
                    mostrarMensaje('El número ingresado de granos supera la capacidad restante del silo seleccionado');
                                }
                            }
                            else {
                                alert('El silo está en su capacidad máxima, no es posible ingresar más granos\nDisculpe las molestias.')
                            }
            break;   
            case 3: 
            if (capacidadRestanteSoja > 0) {
                alert(`El stock actual de soja es de ${SiloSoja.stockActual} granos \nUsted puede ingresar hasta ${capacidadRestanteSoja} granos`);
                }
                else {
                alert('El stock actual de soja es de '+SiloSoja.stockActual+ ' granos \nEstá en su capacidad máxima');
                }
            break;
            case 4: 
            if (capacidadRestanteSoja > 0 ) {
                let ingresoSoja = parseInt(prompt(`Ingrese la cantidad deseada de soja: `));
            mostrarMensaje(`La cantidad de soja a ingresar es ${ingresoSoja}`);
            if (capacidadRestanteSoja >= ingresoSoja && ingresoSoja > 0) {
                SiloSoja.stockActual = SiloSoja.stockActual + ingresoSoja;
                mostrarMensaje(`El stock se ha actualizado a ${SiloSoja.stockActual} granos de soja`);
            }
            else if(0 >= ingresoSoja) {
                mostrarMensaje('Ingrese un número válido mayor a 0');
            }
            else {
                mostrarMensaje('El número ingresado de granos supera la capacidad restante del silo seleccionado');
                            }
                        }
                        else {
                            alert('El silo está en su capacidad máxima, no es posible ingresar más granos\nDisculpe las molestias.')
                        }
            break;
            default:
                console.log("Elija una opción correcta");
                break;
        }

    } while (opciones !=5)

}


IngresoCereales();
