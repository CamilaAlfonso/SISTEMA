const fetch = require('cross-fetch');
require('dotenv').config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

console.log('🔧 Configuración OpenAI:', {
  hasApiKey: !!OPENAI_API_KEY,
  apiKeyLength: OPENAI_API_KEY ? OPENAI_API_KEY.length : 0
});

async function llamarAOpenAI(mensajeUsuario) {
  console.log('📤 Enviando petición a OpenAI...');
  console.log('📝 Mensaje:', mensajeUsuario);
  
  if (!OPENAI_API_KEY || OPENAI_API_KEY === 'tu_api_key_aqui') {
    console.log('❌ No hay API Key configurada - Modo demo activado');
    return 'Modo demo: Esta es una respuesta simulada de IA. Para usar IA real, configura tu API key de OpenAI en el archivo .env';
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: mensajeUsuario }]
      })
    });

    console.log('📥 Respuesta recibida, status:', response.status);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Error HTTP:', response.status, errorText);
      return `Error HTTP ${response.status}: ${errorText}`;
    }

    const data = await response.json();
    console.log('📊 Datos recibidos:', JSON.stringify(data, null, 2));

    if (data.error) {
      console.error('❌ Error de OpenAI:', data.error);
      return `Error de OpenAI: ${data.error.message || 'Error desconocido'}`;
    }

    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      console.error('❌ Respuesta inesperada:', data);
      return 'Error: Respuesta inesperada de OpenAI';
    }

    const result = data.choices[0].message.content.trim();
    console.log('✅ Respuesta exitosa:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Error de red:', error.message);
    return `Error de conexión: ${error.message}`;
  }
}

async function generarResumen(tareas) {
  console.log('📋 Generando resumen para tareas:', tareas.length);
  
  if (!tareas || tareas.length === 0) {
    console.log('⚠️ No hay tareas para resumir');
    return 'No hay tareas pendientes para resumir';
  }

  try {
    const contenido = tareas.map(t => `- ${t.title}: ${t.description}`).join('\n');
    console.log('📝 Contenido a resumir:', contenido);
    
    const resumen = await llamarAOpenAI(`Resume estas tareas de manera concisa:\n${contenido}`);
    console.log('📄 Resumen generado:', resumen);
    
    return resumen;
  } catch (error) {
    console.error('❌ Error al generar resumen:', error);
    return `Error al generar resumen: ${error.message}`;
  }
}

async function sugerirPrioridad(descripcion) {
  console.log('🎯 Sugiriendo prioridad para:', descripcion);
  
  if (!descripcion || descripcion.trim() === '') {
    return 'Por favor, proporciona una descripción';
  }

  try {
    const sugerencia = await llamarAOpenAI(`¿Cuál es la prioridad de esta tarea? (Alta, Media o Baja):\n${descripcion}`);
    console.log('💡 Sugerencia generada:', sugerencia);
    return sugerencia;
  } catch (error) {
    console.error('❌ Error al sugerir prioridad:', error);
    return `Error al sugerir prioridad: ${error.message}`;
  }
}

async function autocompletarDescripcion(titulo) {
  console.log('✏️ Autocompletando descripción para:', titulo);
  
  if (!titulo || titulo.trim() === '') {
    return 'Descripción pendiente';
  }

  try {
    const descripcion = await llamarAOpenAI(`Dame una descripción breve para esta tarea: ${titulo}`);
    console.log('📝 Descripción generada:', descripcion);
    return descripcion;
  } catch (error) {
    console.error('❌ Error al autocompletar descripción:', error);
    return 'Descripción pendiente';
  }
}

module.exports = {
  generarResumen,
  sugerirPrioridad,
  autocompletarDescripcion
};

