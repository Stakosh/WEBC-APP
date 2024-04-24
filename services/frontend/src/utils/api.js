import React, { Component } from 'react';

const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin" : "*", 
    "Access-Control-Allow-Credentials" : true ,
    "Access-Control-Allow-Methods": "POST",
    'x-auth-token': localStorage.getItem('token')
}


export function login(email,password) {
    return fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            correo: email,
            contraseña: password
        })
    })
    .then(res => res)
    .catch(err => console.log(err))
}

export function logout(){
    return fetch('http://localhost:8080/api/logout', {
        method: 'POST',
        headers: headers
    })
}


// Modulo de usuarios
export function getUsuarios(){
    return fetch('http://localhost:8080/api/usuarios', {
        method: 'GET',
        headers: headers
    })
}

export function getUsuario(id){
    return fetch('http://localhost:8080/api/usuarios/'+id, {
        method: 'GET',
        headers: headers
    })
}

export function createUsuario(correo,contraseña){
    return fetch('http://localhost:8080/api/usuarios', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            correo: correo,
            contraseña: contraseña
        })
    })
}

export function updateUsuario(id,correo,contraseña){
    return fetch('http://localhost:8080/api/usuarios/'+id, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
            correo: correo,
            contraseña: contraseña
        })
    })
}

export function deleteUsuario(id){
    return fetch('http://localhost:8080/api/usuarios/'+id, {
        method: 'DELETE',
        headers: headers
    })
}


// Modulo de tareas
export function getTareas(){
    return fetch('http://localhost:8080/api/tareas', {
        method: 'GET',
        headers: headers
    })
}

export function getTarea(id){
    return fetch('http://localhost:8080/api/tareas/'+id, {
        method: 'GET',
        headers: headers
    })
}

export function createTarea(titulo,descripcion,fecha_venc,estado_id,proyecto_id){
    return fetch('http://localhost:8080/api/tareas', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            fecha_venc: fecha_venc,
            estado_id: estado_id,
            proyecto_id: proyecto_id
        })
    })
}

export function updateTarea(id,titulo,descripcion,fecha_venc,estado_id, proyecto_id){
    return fetch('http://localhost:8080/api/tareas/'+id, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion,
            fecha_venc: fecha_venc,
            estado_id: estado_id,
            proyecto_id: proyecto_id
        })
    })
}

export function updateTareaCompleta(id){
    return fetch('http://localhost:8080/api/tareas/'+id+'_ok', {
        method: 'PUT',
        headers: headers
    })
}


export function deleteTarea(id){
    return fetch('http://localhost:8080/api/tareas/'+id, {
        method: 'DELETE',
        headers: headers
    })
}

// Modulo de proyectos
export function getProyectos(){
    return fetch('http://localhost:8080/api/proyectos', {
        method: 'GET',
        headers: headers
    })
}

export function getProyecto(id){
    return fetch('http://localhost:8080/api/proyectos/'+id, {
        method: 'GET',
        headers: headers
    })
}

export function createProyecto(titulo,descripcion){
    return fetch('http://localhost:8080/api/proyectos', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion
        })
    })
}

export function updateProyecto(id,titulo,descripcion){
    return fetch('http://localhost:8080/api/proyectos/'+id, {
        method: 'PUT',
        headers: headers,
        body: JSON.stringify({
            titulo: titulo,
            descripcion: descripcion
        })
    })
}

export function deleteProyecto(id){
    return fetch('http://localhost:8080/api/proyectos/'+id, {
        method: 'DELETE',
        headers: headers
    })
}

export function getProyectosTareas(id){
    return fetch('http://localhost:8080/api/proyectos/'+id+'_tareas', {
        method: 'GET',
        headers: headers
    })
}
// Modulo de tareas de usuario
export function getTareasUsuariosAll(){
    return fetch('http://localhost:8080/api/usuarios_tareas', {
        method: 'GET',
        headers: headers
    })
}

export function getTareasUsuario(usuario_id){
    return fetch('http://localhost:8080/api/usuarios_tareas/'+usuario_id, {
        method: 'GET',
        headers: headers
    })
}

export function createTareaUsuario(usuario_id,tarea_id){
    return fetch('http://localhost:8080/api/usuarios_tareas', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            usuario_id: usuario_id,
            tarea_id: tarea_id
        })
    })
}

export function deleteTareaUsuario(id){
    return fetch('http://localhost:8080/api/usuarios_tareas/'+id, {
        method: 'DELETE',
        headers: headers
    })
}

export function getTareasUsuarioAsignadas(usuario_id){
    return fetch('http://localhost:8080/api/usuarios_tareas/'+usuario_id+'_asignadas', {
        method: 'GET',
        headers: headers
    })
}


