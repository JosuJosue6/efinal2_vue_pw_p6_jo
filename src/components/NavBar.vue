<template>

    <div>
        <router-link to="/">Inicio</router-link>
        <router-link to="/insertar">Crear Vehiculo</router-link>
        <router-link to="/lista">Consultar Vehiculo</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div {
    background: black;

    padding: 20px 30px;
}

a {
    color: white;
    margin: 40px 40px;
}

a:hover{
    border-radius: 5px;
    background: white;
    color: black;
    padding: 20px 30px;
    
}

</style>