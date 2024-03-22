# lectures_at_thb
Videoplattform für Videovorlesungen an der Technische Hochshcule Brandenburg.

## 1 Verwendete Technologien
- Docker
- Vue.js
- REST API
- SPARQL

## 2 Projekt lokal ausführen
1. docker [herunterladen](https://www.docker.com/get-started/) und installieren;
2. Klone das Repository auf ein lokales Verzeichnis (als ZIP herunterladen / mit folgendem Befehl im Terminal: `git clone https://github.com/bmake/lectures_at_thb.git`;
3. Bleibe im Terminal, Gehe in das geklonte Verzeichnis mit "cd"-Befehl, Beispiel: `cd Desktop/lectures_at_thb`;
4. Kontrolliere den aktuellen Branch mit `git branch`, der Branch "develop" sollte ausgewählt sein. Wenn nicht, kann man mit `git checkout develop` den Branch wechseln;
5. Führe im Terminal folgenden Befehl aus: `make start` und warte bis alle Befehle erfolgreich ausgeführt sind, die Anwendung sollte jetzt unter http://localhost:8080/ gestartet sein.

## 3 Projekt Struktur
Im Ordner `/src` findet man die richtigen Ressourcen / Codes für die Anwendung. Die Webseiten der Anwendung bestehen aus mehreren unterschiedlichen Vue-Komponenten, und die Komponenten findet man meistens in den Ordnern `/components` und `/views`.
Im Ordner `/locales` werden die statischen Texte auf der Webseite zweisprachig als json Datei gespeichert. Namen der wichtigsten Komponenten werden im Bild angezeigt:
