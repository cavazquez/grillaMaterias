// Datos de las materias
const materias = [
    // Materias del primer cuatrimestre (1C)
    {
        "nombre": "Álgebra Lineal Computacional/Métodos Numéricos TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "SALGADO CORRADO, Ariel, NEGRI, Pablo, ACEVEDO, Daniel",
        "horarios": "Teórica: Martes y viernes 9 a 11\nPráctica:viernes 11 a 14\nLaboratorio: martes11 a 14"
    },
    {
        "nombre": "Álgebra Lineal Computacional/Métodos Numéricos TN",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "",
        "horarios": "Teórica: martes y viernes 17 a 19\nPráctica: viernes 19 a 22\nLaboratorio: martes 19 a 22"
    },
    {
        "nombre": "Teoría de las Comunicaciones",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC93",
        "profesores": "CASTRO, Rodrigo",
        "horarios": "Teórico-práctico: Martes y miércoles de 19 a 22"
    },
    // Materias del segundo cuatrimestre (2C)
    {
        "nombre": "Álgebra Lineal Computacional / Métodos Numéricos TM",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "SALGADO CORRADO, Ariel, NEGRI, Pablo, ACEVEDO, Daniel",
        "horarios": "Teórica: Martes y Viernes de 9 a 11\nPráctica: Viernes de 11 a 14\nLaboratorio: Martes de 11 a 14"
    },
    {
        "nombre": "Álgebra Lineal Computacional / Métodos Numéricos TN",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "SALGADO CORRADO, Ariel, NEGRI, Pablo, ACEVEDO, Daniel",
        "horarios": "Teórica: Martes y Viernes de 17 a 19\nPráctica: Viernes de 19 a 22\nLaboratorio: Martes de 19 a 22"
    },
    {
        "nombre": "Algoritmos y Estructuras de Datos / AED II TM Labo Mañana",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "UCHITEL, Sebastián, TCACH LUFRANO, Alexis, FEUERSTEIN, Esteban",
        "horarios": "Teórica: Martes de 9 a 14\nPráctica: Miércoles de 9 a 14\nLaboratorio: Viernes de 9 a 14"
    },
    {
        "nombre": "Sistemas Operativos",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC93, LCC23",
        "profesores": "FERNÁNDEZ SLEZAK, Diego",
        "horarios": "Laboratorio: Lunes de 17 a 22\nTeórico/Práctica: Jueves de 17 a 22"
    },
    {
        "nombre": "Paradigmas de Programación – TM",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCC93",
        "profesores": "BARENBAUM, Pablo",
        "horarios": "Teórica: Viernes de 9 a 14\nPráctica: Martes de 9 a 14"
    },
    {
        "nombre": "Paradigmas de Programación – TN",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCC93",
        "profesores": "COSSIO MERCADO, Christian",
        "horarios": "Teórica: Viernes de 17 a 22\nPráctica: Martes de 17 a 22"
    },
    {
        "nombre": "Técnicas de Diseño de Algoritmos/AEDIII TM",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "BENDERSKY, Ariel, BIANCHI, Bruno, GAGGION ZULPO, Rafael Nicolás, LIN, Min Chih",
        "horarios": "Teórico-práctico: Lunes y Miércoles de 9 a 13"
    },
    {
        "nombre": "Técnicas de Diseño de Algoritmos/AEDIII TN",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "BENDERSKY, Ariel, BIANCHI, Bruno, GAGGION ZULPO, Rafael Nicolás, LIN, Min Chih",
        "horarios": "Teórico-práctico: Lunes y Miércoles de 17 a 21"
    },
    {
        "nombre": "Ingeniería de Software II",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC93",
        "profesores": "GALEOTTI, Juan Pablo",
        "horarios": "Teórico/Práctica: Lunes de 17 a 22\nLaboratorio: Miércoles de 17 a 22"
    },
    {
        "nombre": "Base de Datos / Almacenamiento y Recuperación de la Información",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC93",
        "profesores": "PLATZER, Emilio",
        "horarios": "Teórica: Miércoles de 19 a 22\nPráctica: Viernes de 17 a 22\nLaboratorio: Miércoles de 17 a 19"
    },
    {
        "nombre": "Complejidad Computacional/Lógica y Computabilidad",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23",
        "profesores": "ABRIOLA, Sergio",
        "horarios": "Teórica: Miércoles de 17 a 19\nPráctica: miércoles de 19 a 22"
    },
    {
        "nombre": "Lenguajes Formales, Autómatas y Computabilidad/Teoría de Lenguajes",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCC93",
        "profesores": "BECHER, Verónica",
        "horarios": "Teórica: Miércoles de 17 a 19\nPráctica: Miércoles de 19 a 22"
    },
    {
        "nombre": "Introducción a la Programación/AED I//Introducción a la Computación (M) TM",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "RODRIGUEZ, Ricardo, ZABALA, Paula, URTASUN, Martín, DI PIAZZA, Gabriela, ALTAUZ, Javier",
        "horarios": "Teórica: Jueves de 9 a 13\nLaboratorio: Lunes y Miércoles de 11:30 a 14"
    },
    {
        "nombre": "Introducción a la Programación/AED I/Introducción a la Computación (M) TT",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "RODRIGUEZ, Ricardo, ZABALA, Paula, URTASUN, Martín, DI PIAZZA, Gabriela, ALTAUZ, Javier",
        "horarios": "Teórica: Jueves de 13 a 17\nLaboratorio: Lunes y Miércoles de 14:30 a 17"
    },
    {
        "nombre": "Introducción a la Programación/AED I/Introducción a la Computación (M) TN",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "RODRIGUEZ, Ricardo, ZABALA, Paula, URTASUN, Martín, DI PIAZZA, Gabriela, ALTAUZ, Javier",
        "horarios": "Teórica: Jueves de 17 a 21\nLaboratorio: Lunes y Miércoles de 19:30 a 22"
    },
    {
        "nombre": "Laboratorio de Datos – Com. A",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCD",
        "profesores": "COTIK, Viviana",
        "horarios": "Laboratorio: Jueves de 9 a 12 y de 13 a 16"
    },
    {
        "nombre": "Laboratorio de Datos – Com. B",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCD",
        "profesores": "KAMIENKOWSKI, Juan",
        "horarios": "Laboratorio: Jueves de 9 a 12 y de 13 a 16"
    },
    {
        "nombre": "Sistemas Digitales/Organización del Computador I – TM",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23",
        "profesores": "BUEMI, María Elena, LÓPEZ Y ROSENFELD, Matías",
        "horarios": "Laboratorio: Jueves de 10 a 13\nTeórico/Práctica: Jueves de 8 a 10"
    },
    {
        "nombre": "Sistemas Digitales/Organización del Computador I – TN",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23",
        "profesores": "MARCHI, Edgardo, CERVETTO, Marcos",
        "horarios": "Laboratorio: Jueves de 19 a 22\nTeórico/Práctica: Jueves de 17 a 19"
    },
    {
        "nombre": "Teoría de las Comunicaciones",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC93",
        "profesores": "RIGHETTI, Claudio",
        "horarios": "Teórico-práctico: Martes y Miércoles de 19 a 22"
    },
    {
        "nombre": "Seminario sobre Tecnología y Sociedad",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23",
        "profesores": "SCHAPACHNIK, Fernando",
        "horarios": "Teórico-práctico: Martes de 17 a 22"
    },
    {
        "nombre": "Estadística Computacional – Turno Noche",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "LCC23",
        "profesores": "LAJE, Rodrigo",
        "horarios": "Teórica: Jueves de 17 a 22\nLaboratorio: Martes de 17 a 22"
    },
    {
        "nombre": "Fundamentos y Aplicaciones de Blockchains",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "VISIT",
        "profesores": "GARAY, Juan",
        "horarios": "Teórica: Martes de 15 a 17\nLaboratorio: Jueves de 14 a 17"
    },
    {
        "nombre": "Teoría de Juegos DC 2024 / Tópicos de Teoría de Juegos (DOC)",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "OPT",
        "profesores": "ARBISER, Ariel",
        "horarios": "Teórico/Práctica: miércoles 14:30 a 19:00"
    },
    {
        "nombre": "Seguridad de la Información / Fundamentos de Seguridad de la información (DOC)",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "OPT",
        "profesores": "BAADER, Rodolfo",
        "horarios": "Teórico/Práctica: Lunes y jueves de 18 a 21"
    },
    {
        "nombre": "Procesamiento de Lenguaje Natural / Procesamiento de Lenguaje Natural: Embeddings y Modelos Generativos (DOC)",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "OPT",
        "profesores": "DEL CORRO, Luciano",
        "horarios": "Teórico/Práctica: martes 17 a 21"
    },
    {
        "nombre": "Fundamentos de Teoría de Grafos",
        "anio": 2025,
        "periodo": "2C",
        "tipo": "OPT",
        "profesores": "BONOMO, Flavia",
        "horarios": "Teórico/Práctica: Jueves 9 a 12"
    },
    {
        "nombre": "Aprendizaje Automático I – 2025",
        "anio": 2025,
        "periodo": "3B",
        "tipo": "OPT",
        "profesores": "BRUSCO, Pablo, LOMBARDI, Leandro",
        "horarios": "Teórico/Práctica: martes y jueves 9 a 13"
    },
    {
        "nombre": "Procesamiento de Imágenes I",
        "anio": 2025,
        "periodo": "3B",
        "tipo": "OPT",
        "profesores": "BUEMI, María Elena",
        "horarios": "Teórico/Práctica: Lunes y Miércoles 14 a 17"
    },
    {
        "nombre": "Aprendizaje Automático II – 2025",
        "anio": 2025,
        "periodo": "4B",
        "tipo": "OPT",
        "profesores": "BRUSCO, Pablo",
        "horarios": "Teórico/Práctica: Martes y Jueves 9 a 13"
    }
];

// Función para actualizar los filtros de tipo y año
function actualizarFiltros() {
    const tipoSelect = document.getElementById('tipoFilter');
    const anioSelect = document.getElementById('anioFilter');
    const tipos = new Set();
    const anios = new Set();
    
    // Obtener todos los tipos y años únicos
    materias.forEach(materia => {
        // Tipos
        if (materia.tipo) {
            // Separar los tipos compuestos (ej: "LCC23/LCD/LCC93")
            const tiposMateria = materia.tipo.split('/');
            tiposMateria.forEach(tipo => tipos.add(tipo.trim()));
        }
        
        // Años
        if (materia.anio) {
            anios.add(materia.anio);
        }
    });
    
    // Ordenar los tipos y años
    const tiposOrdenados = Array.from(tipos).sort();
    const aniosOrdenados = Array.from(anios).sort((a, b) => b - a); // Orden descendente
    
    // Limpiar opciones existentes (excepto la primera)
    while (tipoSelect.options.length > 1) {
        tipoSelect.remove(1);
    }
    
    while (anioSelect.options.length > 1) {
        anioSelect.remove(1);
    }
    
    // Agregar las opciones de tipo
    tiposOrdenados.forEach(tipo => {
        if (tipo) {
            const option = document.createElement('option');
            option.value = tipo;
            option.textContent = tipo;
            tipoSelect.appendChild(option);
        }
    });
    
    // Agregar las opciones de año
    aniosOrdenados.forEach(anio => {
        const option = document.createElement('option');
        option.value = anio;
        option.textContent = anio;
        anioSelect.appendChild(option);
    });
}

// Función para cargar los datos en la tabla
function cargarMaterias(materiasAFiltrar) {
    const tbody = document.getElementById('materiasTable');
    tbody.innerHTML = '';

    if (materiasAFiltrar.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" class="px-6 py-4 text-center text-gray-500">
                    No se encontraron materias que coincidan con los filtros seleccionados.
                </td>
            </tr>`;
        return;
    }

    materiasAFiltrar.forEach(materia => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-gray-50';
        
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-normal">${materia.nombre || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap">${materia.anio || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap">${materia.periodo || '-'}</td>
            <td class="px-6 py-4 whitespace-nowrap">${materia.tipo || '-'}</td>
            <td class="px-6 py-4 whitespace-normal">${materia.profesores || '-'}</td>
            <td class="px-6 py-4 whitespace-pre-line">${materia.horarios || '-'}</td>
        `;
        
        tbody.appendChild(tr);
    });
}

// Función para filtrar las materias
function filtrarMaterias() {
    if (materias.length === 0) return;
    
    const busqueda = document.getElementById('searchInput').value.toLowerCase();
    const periodo = document.getElementById('periodoFilter').value;
    const tipo = document.getElementById('tipoFilter').value;
    const anio = document.getElementById('anioFilter').value;

    const materiasFiltradas = materias.filter(materia => {
        const nombre = (materia.nombre || '').toLowerCase();
        const profesores = (materia.profesores || '').toLowerCase();
        const horarios = (materia.horarios || '').toLowerCase();
        
        const cumpleBusqueda = !busqueda || 
                             nombre.includes(busqueda) ||
                             profesores.includes(busqueda) ||
                             horarios.includes(busqueda);
        
        const cumplePeriodo = !periodo || (materia.periodo || '').includes(periodo);
        const cumpleTipo = !tipo || (materia.tipo || '').includes(tipo);
        const cumpleAnio = !anio || (materia.anio || '').toString() === anio;
        
        return cumpleBusqueda && cumplePeriodo && cumpleTipo && cumpleAnio;
    });

    cargarMaterias(materiasFiltradas);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Cargar las materias en la tabla
    cargarMaterias(materias);
    
    // Actualizar los filtros
    actualizarFiltros();

    // Configurar eventos de filtrado
    document.getElementById('searchInput').addEventListener('input', filtrarMaterias);
    document.getElementById('periodoFilter').addEventListener('change', filtrarMaterias);
    document.getElementById('tipoFilter').addEventListener('change', filtrarMaterias);
    document.getElementById('anioFilter').addEventListener('change', filtrarMaterias);
});
