<h1>Patient Care Support System (PCSS)</h1>

<p>A specialized dashboard designed to streamline workflow, patient monitoring, and resource management for nursing staff. This project was developed as part of the Software Engineering (SE302) course.</p>

<hr>

<h2>Overview</h2>
    <p>The Patient Care Support System (PCSS) is a web-based application built to assist nurses in clinical environments. It provides a centralized interface for tracking patient status, managing room occupancy, and monitoring critical medical data, ultimately reducing administrative overhead and improving patient care quality.</p>

<h2>Features</h2>
    <ul>
        <li><strong>Real-time Patient Monitoring:</strong> Track vital signs and patient status updates.</li>
        <li><strong>Room Management:</strong> Manage room occupancy and resource allocation efficiently.</li>
        <li><strong>Nursing Task Dashboard:</strong> Overview of scheduled medication, observations, and care tasks.</li>
        <li><strong>Intuitive UI:</strong> Information-rich interface designed for high-pressure environments.</li>
    </ul>

<h2>Tech Stack</h2>
    <ul>
        <li><strong>Backend:</strong> Spring Boot (Java)</li>
        <li><strong>Frontend:</strong> ReactJS with Tailwind CSS</li>
        <li><strong>Database:</strong> MySQL</li>
    </ul>

<h2>System Architecture</h2>
    <p></p>

    <hr>

<h2>Getting Started</h2>

<h3>Prerequisites</h3>
    <ul>
        <li>JDK 17 or higher</li>
        <li>Node.js (LTS version)</li>
        <li>MySQL Server</li>
        <li>Maven</li>
    </ul>

<h3>Installation</h3>

<h4>Backend</h4>
    <ol>
        <li>Navigate to the backend directory.</li>
        <li>Configure your database settings in application.properties.</li>
        <li>Run the application:
            <pre>mvn spring-boot:run</pre>
        </li>
    </ol>

<h4>Frontend</h4>
    <ol>
        <li>Navigate to the frontend directory.</li>
        <li>Install dependencies:
            <pre>npm install</pre>
        </li>
        <li>Start the development server:
            <pre>npm start</pre>
        </li>
    </ol>

<h2>Development Standards</h2>
    <ul>
        <li><strong>Database:</strong> Table names follow the plural naming convention (e.g., patients, nurses).</li>
        <li><strong>Code:</strong> Class names use singular notation.</li>
        <li><strong>API:</strong> JSON responses use camelCase for all fields to maintain consistency between the Spring Boot backend and React frontend.</li>
        <li><strong>Language:</strong> All code comments and documentation are provided in English without special character accents to ensure environment compatibility.</li>
    </ul>

<hr>

<h2>License</h2>
    <p>This project is developed for educational purposes under the SE302 Software Engineering curriculum.</p>

