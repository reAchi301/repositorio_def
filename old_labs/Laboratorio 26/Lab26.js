async function obtenerFrase() {
    try {
        let response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
        console.log("Respuesta de la API:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        console.log("Datos recibidos:", data); 

        if (Array.isArray(data) && data.length > 0) {
            document.getElementById("frase").textContent = data[0].quote;
        } else {
            document.getElementById("frase").textContent = "No se encontró ninguna frase.";
        }
    } catch (error) {
        console.error("Error al obtener la frase:", error);
        document.getElementById("frase").textContent = "Hubo un error al cargar la frase.";
    }
}

document.getElementById("obtenerFrase").addEventListener("click", obtenerFrase);
