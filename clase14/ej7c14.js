let libro1 = {
    titulo: "Crepuesculo",          
    autor: "Stephenie Meyer", 
    anioPublicacion: 2005             
};

let libro2 = {
    titulo: "IT",
    autor: "Stephen King",
    anioPublicacion: 1986
};

function mostrarLibro(libros) {

    for (let i = 0; i < libros.length; i++) {
        
        console.log("Título: " + libros[i].titulo + ", Autor: " + libros[i].autor + ", Año: " + libros[i].anioPublicacion);
    }
}

let biblioteca = [libro1, libro2];

mostrarLibro(biblioteca);