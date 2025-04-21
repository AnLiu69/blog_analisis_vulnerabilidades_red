---
layout: ../../layouts/MarkDownPostLayout.astro
title: "Herramientas y tecnologías"
order: 5
---

Para el desarrollo del sistema de **detección de intrusos (IDS)** en la red local de **HILMART**, se han seleccionado una serie de herramientas tecnológicas que facilitan el análisis, la automatización de alertas y reportes, y la integración con sistemas de seguridad existentes. A continuación, se detallan las tecnologías y herramientas empleadas en cada etapa del desarrollo:

---

### 🖥️ **Sistema Operativo y Entorno de Desarrollo**

El **sistema operativo** será clave para gestionar los análisis de la red, las alertas de seguridad y la automatización de reportes:

- **Linux (Ubuntu/Debian):** El sistema operativo base en el que se llevará a cabo todo el proceso de monitoreo, análisis y generación de alertas. Linux es ideal debido a su flexibilidad, estabilidad y compatibilidad con herramientas de seguridad avanzadas.
- **Terminal (Bash):** Se utilizarán scripts en Bash para la automatización de tareas y la configuración de herramientas de red, garantizando un control total sobre el entorno de desarrollo.

---

### 🛠️ **Análisis y Monitoreo de la Red**

Para el análisis de la red local y la identificación de intrusos o comportamientos inusuales, se utilizarán las siguientes herramientas:

- **Nmap:** Herramienta esencial para realizar escaneos de la red, identificar puertos abiertos, dispositivos conectados y posibles vulnerabilidades. Nmap ayudará a realizar el mapeo y análisis de la red, detectando cualquier comportamiento anómalo.
- **Snort (opcional):** En caso de requerirse un sistema de detección de intrusos adicional, **Snort** será utilizado para capturar y analizar el tráfico de red en tiempo real, permitiendo la detección de patrones maliciosos.
- **Wireshark (opcional):** Para una visualización detallada del tráfico de red y la captura de paquetes, **Wireshark** facilitará el análisis profundo de los eventos de red sospechosos.

---

### 🐍 **Automatización y Generación de Alertas**

La automatización de alertas y la generación de reportes se llevará a cabo utilizando **Python** y bibliotecas relacionadas:

- **Python 3.x:** El lenguaje de programación utilizado para automatizar el proceso de análisis de red, la detección de intrusos y la generación de alertas y reportes. Python es ideal por su simplicidad, capacidad de integración con otras herramientas y su amplia variedad de bibliotecas para seguridad y análisis de datos.
- **Smtplib (Python):** Para el envío de alertas y notificaciones por correo electrónico, **Smtplib** permitirá automatizar la distribución de reportes de seguridad e intrusos a los administradores de red.
- **ReportLab (Python):** Para generar los reportes de análisis en formato PDF, **ReportLab** facilitará la creación de documentos personalizados que contengan los resultados del escaneo, alertas y eventos relevantes.

---
