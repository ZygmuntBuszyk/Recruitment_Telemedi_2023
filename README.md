Zadanie testowe dla kandydata na stanowisko Fullstack Developer
Cel: Stworzenie prostej aplikacji typu "To Do List" z wykorzystaniem technologii: TypeScript, React, Docker, NestJS. Aplikacja powinna pozwolić użytkownikowi na dodawanie, usuwanie oraz oznaczanie zadań jako wykonane. Dodatkowo, aplikacja powinna zawierać testy jednostkowe dla kluczowych funkcjonalności.
Część Frontendowa (React + TypeScript):
Interfejs użytkownika:
Lista zadań do zrobienia.
Pole tekstowe do wprowadzania nowego zadania.
Przycisk do dodawania nowego zadania.
Przy każdym zadaniu przycisk do jego usunięcia oraz checkbox do oznaczenia jako wykonane.
Funkcjonalność:
Dodawanie nowego zadania do listy.
Usuwanie zadania z listy.
Oznaczanie zadania jako wykonane (zmiana wyglądu zadania na przekreślone).
Testy jednostkowe:
Test dodawania nowego zadania.
Test usuwania zadania.
Test oznaczania zadania jako wykonane.
Część Backendowa (NestJS + TypeScript):
Endpointy:
POST /tasks - dodawanie nowego zadania.
DELETE /tasks/:id - usuwanie zadania.
PATCH /tasks/:id - aktualizacja zadania (oznaczenie jako wykonane).
Model danych:
Zadanie: { id: number, content: string, done: boolean }
Testy jednostkowe:
Test endpointu dodawania zadania.
Test endpointu usuwania zadania.
Test endpointu aktualizacji zadania.
Docker:
Stworzenie Dockerfile dla zarówno frontendu, jak i backendu.
Użycie docker-compose do uruchomienia całej aplikacji (frontend + backend).
Instrukcje:
Zacznij od stworzenia nowego projektu NestJS dla backendu oraz nowego projektu React dla frontendu.
Zaimplementuj wymienione powyżej funkcjonalności.
Napisz testy jednostkowe dla kluczowych funkcjonalności.
Upewnij się, że aplikacja oraz testy działają poprawnie zarówno lokalnie, jak i w kontenerze Docker.
Zwróć uwagę na jakość kodu, strukturę projektu oraz obsługę błędów.
Ocenianie:
Poprawność działania aplikacji.
Jakość i struktura kodu.
Wykorzystanie TypeScript w obu częściach aplikacji.
Poprawne użycie Docker i docker-compose.
Obsługa błędów i odpowiedzi serwera.
Pokrycie kodu testami jednostkowymi oraz jakość napisanych testów.
Uwagi:
Skup się na dostarczeniu MVP. Nie jest wymagane tworzenie zaawansowanego UI ani dodatkowych funkcjonalności.
Jeśli nie zdążysz zaimplementować wszystkiego, skup się na kluczowych funkcjonalnościach.
Powodzenia!

