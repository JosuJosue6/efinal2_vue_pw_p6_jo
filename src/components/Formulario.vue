<template>

    <div class="formulario-container">
        <Label v-show="mostrar">Guardado con exito</Label>
        <br>
        <p><input v-model="placa" placeholder="Placa" type="text"></p>
        <p><input v-model="marca" placeholder="Marca" type="text"></p>
        <p><input v-model="modelo" placeholder="Modelo" type="text"></p>
        <p><input v-model="color" placeholder="Color" type="text"></p>
        <p><input v-model="precio" placeholder="Precio" type="number"></p>
    </div>
    <div>
        <button @click="guardar">GUARDAR</button>
    </div>
  
</template>

<script>

import {guardarFachada} from '@/clients/cleineteVehiculo.js'
export default {

    data (){
        return {
            placa: null,
            marca: null,
            modelo: null,
            color: null,
            precio: null,
            mostrar: false
        }
    },

    methods: {
        async guardar() {
            const Vehiculo = {
                placa : this.placa,
                modelo : this.modelo,
                marca : this.marca,
                color : this.color,
                precio : this.precio
            }

            const data = await guardarFachada(Vehiculo);
            this.mostrar = true;
            this.reinicio();
        },

        reinicio(){
            this.placa= null,
            this.marca= null,
            this.modelo= null,
            this.color= null,
            this.precio= null

        }
    }

}
</script>

<style scoped>
input {
    padding: 10px 30px;
    border-radius: 5px;
    border: solid 1px black;
}
button {
    color: white;
    margin: 40px 40px;
    background: rgb(93, 173, 106);
    padding: 20px 30px;
    border-radius: 5px;
    border: solid 1px black;
}

button:hover{
    cursor: pointer;
    border-radius: 5px;
    background: rgb(79, 146, 90);
    color: rgb(255, 255, 255);
    padding: 20px 30px;
    
}

label {
    background:rgb(93, 173, 106); 
    color: white;
    padding: 15px 30px;
    margin: 30px 30px;
    border: none;
}
</style>