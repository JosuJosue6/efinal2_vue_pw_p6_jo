import axios from "axios";

//declarar metodos
const guardar = async (vehiculoBody) =>{
    const data = await axios.post(`http://localhost:8082/API/v1.0/Consecionario/vehiculos`,vehiculoBody).then(r => r.data);
    return data;
}

const buscar = async () =>{
    const data = await axios.get(`http://localhost:8082/API/v1.0/Consecionario/vehiculos`).then(r => r.data);
    return data;
}

const buscarPlaca = async (placa) =>{
    const data = await axios.get(`http://localhost:8082/API/v1.0/Consecionario/vehiculos/${placa}`).then(r => r.data);
    return data;
}

const borrar = async (vehiculoBody) =>{
    const data = await axios.delete(`http://localhost:8082/API/v1.0/Consecionario/vehiculos`,vehiculoBody).then(r => r.data);
    return data;
}

//fachada

export const guardarFachada = async (vehiculoBody) =>{
    return guardar(vehiculoBody);
}

export const buscarFachada = async () =>{
    return buscar();
}

export const buscarPlacaFachada = async (placa) =>{
    return buscarPlaca(placa);
}

export const borrarFachada = async (vehiculoBody) =>{
    return borrar(vehiculoBody);
}
