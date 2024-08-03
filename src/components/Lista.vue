<template>
    <div>
        <p><button @click="verLista">Consultar</button></p>
        <ul>
            <p>
                <label for="">Placa</label>
                <label for="">Marca</label>
                <label for="">Modelo</label>
                <label for="">Accion</label>
                <label for="">Accion</label>
            </p>
            <div  class="table">

      
                <button @click="ver">Ver</button>
                <button @click="borrar" id="rojo">Borrar</button>
            </div>


        </ul>
    </div>

</template>

<script>

import { buscarFachada, borrarFachada, buscarPlacaFachada } from '@/clients/cleineteVehiculo.js'
const vehiculos = await buscarFachada();


export default {



    data() {
        return {
            placa: null,
            lista: vehiculos
        }
    },
    methods: {
        async borrar() {
            const Vehiculo = {
                placa: this.placa,
            }

            const data = await borrarFachada(Vehiculo);
        },

        async ver() {
            const data = await buscarPlacaFachada(this.placa);
        },

        async verLista(){

            console.log(vehiculos);
        }
    }

}
</script>


<style>
label {
    padding: 10px 30px;
    border: solid 1px black;
}
button {
    color: white;
    margin: 40px 20px;
    background: rgb(93, 173, 106);
    padding: 15px 20px;
    border-radius: 5px;
    border: solid 1px black;
}

button:hover{
    cursor: pointer;
    border-radius: 5px;
    background: rgb(79, 146, 90);
    color: rgb(255, 255, 255);
    padding: 15px 20px;
    
}
#rojo {
    background: rgb(194, 55, 55);
}
</style>