// Datos de las materias
const materias = [
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
        "nombre": "Algoritmos y Estructuras de Datos/AEDII TM1",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "BRABERMAN, Victor, FEUERSTEIN, Esteban, TCACH LUFRANO, Alexis, BIANCHI, Bruno",
        "horarios": "Teórica: Martes 9 a 14\nPráctica: Miércoles 9 a 14\nLaboratorio: Viernes 9 a 14"
    },
    {
        "nombre": "Algoritmos y Estructuras de Datos/AEDII – TM2",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "",
        "horarios": "Teórica:Martes 9 a 14\nPráctica: Miércoles 9 a 14\nLaboratorio: viernes 14 a 19"
    },
    {
        "nombre": "Algoritmos y Estructuras de Datos/AEDII – TN1",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "",
        "horarios": "Teórica: Martes de 17 a 22\nPráctica: Miércoles 17 a 22\nLaboratorio: Viernes 17 a 22"
    },
    {
        "nombre": "Algoritmos y Estructuras de Datos/AEDII – TN2",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "",
        "horarios": "Teórica: Martes 17 a 22\nPráctica: miércoles 17 a 22\nLaboratorio: viernes 14 a 19"
    },
    {
        "nombre": "Aprendizaje Automatico I – 2025",
        "anio": 2025,
        "periodo": "1B",
        "tipo": "Obligatoria",
        "profesores": "BRUSCO, Pablo, DEL CORRO, Luciano",
        "horarios": "martes y jueves 17 a 21"
    },
    {
        "nombre": "Aprendizaje Automático II – 2025",
        "anio": 2025,
        "periodo": "2B",
        "tipo": "Obligatoria",
        "profesores": "BRUSCO, Pablo, DEL CORRO, Luciano",
        "horarios": "martes y jueves 17 a 21"
    },
    {
        "nombre": "Aprendizaje Profundo",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "SEGURA, Enrique",
        "horarios": "Teórico-Práctica: lunes 15:30 a 18:30\nLaboratorio: Jueves 14 a 17"
    },
    {
        "nombre": "Arquitectura y Comunicación de Datos",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "RIGHETTI, Claudio",
        "horarios": "Teórico-Práctica: Lunes 18 a 21"
    },
    {
        "nombre": "Arquitectura y Organización de computadores/ Organización del Computador II",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "FURFARO, Alejandro",
        "horarios": "Teórica: Lunes y jueves 17 a 19\nPráctica: jueves 19 a 22\nLaboratorio: lunes 19 a 22"
    },
    {
        "nombre": "Base de Datos",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC93",
        "profesores": "PLATZER, Emilio",
        "horarios": "Teórico-práctica: Miércoles 19 a 22\nViernes 17 a 22"
    },
    {
        "nombre": "Complejidad Computacional/Lógica y Computabilidad",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23",
        "profesores": "FIGUEIRA, Santiago",
        "horarios": "Teórico-práctica: Miércoles 17 a 22"
    },
    {
        "nombre": "Criptografía Moderna – VISIT2024",
        "anio": 2025,
        "periodo": "2B",
        "tipo": "OPT",
        "profesores": "VIRDIA, Fernando",
        "horarios": "martes y jueves 14 a 17"
    },
    {
        "nombre": "Datos Masivos para Aprendizaje Automático",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "D'ARRIGO, Sergio",
        "horarios": "Teórico-Práctica: Martes 18 a 22\nLaboratorio: 3 clases con día y horario a confirmar"
    },
    {
        "nombre": "Fundamentos de Artificial General Intelligence Safety",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "ABRIOLA, Sergio",
        "horarios": "Teórico-Práctica: viernes 17 a 21"
    },
    {
        "nombre": "Fundamentos de la Gestión de Proyectos Ágil",
        "anio": 2025,
        "periodo": "2B",
        "tipo": "OPT",
        "profesores": "SAFRANCHIK, Edgardo",
        "horarios": "viernes 19 a 22"
    },
    {
        "nombre": "Ingeniería de Software/Ingeniería de Software I",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "WILKINSON, Hernán",
        "horarios": "Teórica:Martes y viernes 17 a 19\nLaboratorio: martes y viernes 19 a 22"
    },
    {
        "nombre": "Ingeniería de Software II",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC93",
        "profesores": "GARBERBETSKY, Diego, GALEOTTI, Juan Pablo",
        "horarios": "Laboratorio: miércoles 17 a 22\nTeórico-práctica: lunes 17 a 22"
    },
    {
        "nombre": "Introducción a la Investigación Operativa y Optimización",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCD",
        "profesores": "MENDEZ DÍAZ, Isabel, ZABALA, Paula",
        "horarios": "Laboratorio: martes 14 a 18\nTeórico-práctica: viernes 14 a 18"
    },
    {
        "nombre": "Introducción a la Programación/AED I TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "DE CRISTOFORIS, Pablo",
        "horarios": "Teórica: Jueves 9 a 13\nLaboratorio: Lun y Mier 11:30 a 14"
    },
    {
        "nombre": "Introducción a la Programación/AED I TT",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "DI PAZZA, Gabriela, URTASÚN, Martín",
        "horarios": "Teórica: Jueves 13 a 17\nLaboratorio: Lunes y Miércoles de 14:30 a 17"
    },
    {
        "nombre": "Introducción a la Programación/AED I TN",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "ALTAUZ, Javier, RODRIGUEZ, Ricardo Oscar",
        "horarios": "Teórica: Jueves 17 a 21\nLaboratorio: Lunes y Miércoles 19:30 a 22"
    },
    {
        "nombre": "Laboratorio de Datos – Com. A",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCD",
        "profesores": "TURJANSKI, Pablo",
        "horarios": "Laboratorio: jueves 9 a 12 y 13 a 16"
    },
    {
        "nombre": "Laboratorio de Datos – Com B",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCD",
        "profesores": "LAJE, Rodrigo",
        "horarios": "Laboratorio: jueves 9 a 12 y 13 a 16"
    },
    {
        "nombre": "Lenguajes Formales, Autómatas y Computabilidad/Teoría de Lenguajes",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "BECHER, Verónica",
        "horarios": "Teórica: Miércoles 17 a 19\nPráctica: Miércoles 19 a 22"
    },
    {
        "nombre": "Modelado y Análisis de Sistemas Reactivos y Concurrentes",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "UCHITEL, Sebastián",
        "horarios": "Teórico-Práctica: Miércoles 17 a 21"
    },
    {
        "nombre": "Paradigmas de Programación – TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "COSSIO MERCADO, Christian",
        "horarios": "Teórico-práctica: Martes y viernes 9 a 14"
    },
    {
        "nombre": "Paradigmas de Programación – TN",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "BARENBAUM, Pablo",
        "horarios": "Teórico-práctica: Martes y viernes 17 a 22"
    },
    {
        "nombre": "Pensamiento Computacional/Taller de Informática (Geología) TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "CBC",
        "profesores": "MOCSKOS, Esteban",
        "horarios": "Teórica: miércoles 11 a 13\nLaboratorio: viernes 12 a 16"
    },
    {
        "nombre": "Pensamiento Computacional/Taller de Informática (Geología) TT",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "CBC",
        "profesores": "MOCSKOS, Esteban",
        "horarios": "Teórica: miércoles 14 a 16\nLaboratorio: viernes 12 a 16"
    },
    {
        "nombre": "Procesamiento Avanzado de Señales 2024",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "RISK, Marcelo",
        "horarios": "Teórico-Práctica: Martes 17:00 a 21:00"
    },
    {
        "nombre": "Procesamiento Cuántico de Información",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "BENDERSKY, Ariel",
        "horarios": "Teórico-Práctica: Lunes y Jueves de 14 a 16"
    },
    {
        "nombre": "Procesamiento de Imágenes I",
        "anio": 2025,
        "periodo": "1B",
        "tipo": "OPT",
        "profesores": "BUEMI, María Elena, ACEVEDO, Daniel",
        "horarios": "Teórico-Práctica: Lunes 13 a 17"
    },
    {
        "nombre": "Procesamiento de Señales, Audio y Habla",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "RIERA, Pablo",
        "horarios": "Teórico-Práctica: Jueves de 9 a 13"
    },
    {
        "nombre": "Programación Competitiva I",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "SOULIGNAC, Francisco",
        "horarios": "Teórico-Práctica: Lunes 9 a 13"
    },
    {
        "nombre": "Seminarios de Inteligencia Artificial",
        "anio": 2025,
        "periodo": "1B",
        "tipo": "OPT",
        "profesores": "FERNANDEZ SLEZAK, Diego (Profesor)",
        "horarios": "lunes y miércoles 9 a 12"
    },
    {
        "nombre": "Seminarios de Inteligencia Artificial",
        "anio": 2025,
        "periodo": "2B",
        "tipo": "OPT",
        "profesores": "FERNANDEZ SLEZAK, Diego (Profesor)",
        "horarios": "lunes y miércoles 9 a 12"
    },
    {
        "nombre": "Sistemas Digitales/Organización del Computador I – TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23",
        "profesores": "LANZAROTTI, Esteban, BUEMI, María Elena, LÓPEZ Y ROSENFELD, Matías",
        "horarios": "Laboratorio: jueves 10 a 13\nTeórico-práctico: jueves 8 a 10"
    },
    {
        "nombre": "Sistemas Digitales/Organización del Computador I – TN",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23",
        "profesores": "",
        "horarios": "Laboratorio: jueves 19 a 22\nTeórico-práctico: jueves 17 a 19"
    },
    {
        "nombre": "Sistemas Operativos",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCC93",
        "profesores": "SCHAPACHNIK, Fernando, BAADER, Rodolfo",
        "horarios": "Laboratorio: lunes 17 a 22\nTeórico-práctico: jueves 17 a 22"
    },
    {
        "nombre": "Técnicas de Diseño de Algoritmos/AEDIII TM",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "BONOMO, Flavia, GAGGION ZULPO, Rafael Nicolás, LOMBARDI, Leandro Ezequiel, KAMIENKOWSKI, Juan",
        "horarios": "Teórico-práctico: Lunes y Miércoles de 9 a 13"
    },
    {
        "nombre": "Técnicas de Diseño de Algoritmos/AEDIII TN",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "LCC23/LCD/LCC93",
        "profesores": "",
        "horarios": "Teórico-práctico: Lunes y Miércoles de 17 a 21"
    },
    {
        "nombre": "Temas de NLP",
        "anio": 2025,
        "periodo": "2B",
        "tipo": "OPT",
        "profesores": "COTIK, Viviana",
        "horarios": "Viernes de 10 a 13 hs"
    },
    {
        "nombre": "Teoría de Juegos",
        "anio": 2025,
        "periodo": "1C",
        "tipo": "OPT",
        "profesores": "ARBISER, Ariel",
        "horarios": "Teórico-Práctica: miércoles 14:30 a 19:00"
    },
    {
        "nombre": "Teoría de las Comunicaciones",
        "periodo": "1C",
        "tipo": "LCC93",
        "profesores": "CASTRO, Rodrigo",
        "horarios": "Teórico-práctico: Martes y miércoles de 19 a 22"
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
                <td colspan="5" class="px-6 py-4 text-center text-gray-500">
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
