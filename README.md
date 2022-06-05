# Hack-a-Troll

## Zespół projektowy:
Zespół pracował w ramach 24 godzinnego hackathonu „Hack-a-troll”. Zachęcamy do odwiedzenia profili członków zespołu, w celu zapoznania się z ich portfolio.

- [Aleksander Atamańczuk](https://github.com/TenGosc007)

- [Małgorzata Bednarczuk](https://github.com/margiebed)

- [Anna Koruc](https://github.com/annakoruc)

- [Marta Probierz](https://github.com/marta-probierz)



[Mockupy i prototyp](https://www.figma.com/file/fKucqzEjxIHEOcsfhO9Ckc/dezinformacja?node-id=2%3A152)

[Design](https://www.figma.com/file/9G0LYdw8MBMfRCAU9AUXz3/dezinformacja?node-id=4%3A2)

### [WEJDŹ NA STRONĘ]()

## Cel projektu
Celem projektu było dostarczenie aplikacji mającej na celu zbieranie odczuć użytkowników na temat prawdopodobieństwa braku wiarygodności treści znajdujących się w artykułach i innych materiałach, zamieszczonych w Internecie. Aplikacja ma również za zadanie przeprowadzanie analizy danych, po czym tworzenie na ich podstawie szczegółowych statystyk, do których wgląd ma każdy użytkownik. 

## Działanie aplikacji

### Strona główna
Na stronie głównej można znaleźć szczegółowe informacje dotyczące aplikacji. Po wejściu na stronę, użytkownikowi ukaże się grafika, hasło naszej aplikacji „Nie daj się dezinformacji”, instrukcja działania oraz dwa przyciski: „Sprawdź artykuł” (kliknięcie na niego spowoduje przeniesienie na stronę ankiety) oraz „Baza linków” (kliknięcie spowoduje przeniesienie na stronę ze zgłoszonymi linkami). 

![Zrzut ekranu 2022-06-05 o 04 52 37](https://user-images.githubusercontent.com/75137091/172032966-6388023c-60a9-43df-b537-f920ef998744.png)

Poniżej użytkownik może zapoznać się z krótką częścią informacyjną dotyczącą fake newsów oraz ze  statystykami. Stronę główną zwieńcza aktywny link umożliwiający komunikację użytkownika z twórcami aplikacji.

![Zrzut ekranu 2022-06-05 o 04 53 25](https://user-images.githubusercontent.com/75137091/172032974-90c6ed09-761b-4e51-a6aa-94e04012c71d.png)

![Zrzut ekranu 2022-06-05 o 05 01 54](https://user-images.githubusercontent.com/75137091/172033160-7f2dae80-7f03-4a20-8f0f-88d18e9bd67d.png)


### Ankieta
Po kliknięciu w przycisk „Sprawdź artykuł”, użytkownik zostaje przeniesiony na stronę ankiety. Składa się ona z kilku części.

#### Wprowadzenie linka oraz wybór kategorii
Na tej stronie użytkownik wprowadza link artykułu bądź materiału zamieszczonego w Internecie, który chciałby sprawdzić. Poniżej znajdują się przyciski z kategoriami. Zadaniem użytkownika jest wybranie odpowiedniej / odpowiednich kategorii. Kliknięcie na jakąkolwiek z nich spowoduje dodanie zielonego obramowania. Niżej znajduje się przycisk „Rozpocznij ankietę”, który przenosi użytkownika na kolejną podstronę.

#### Pytania 
Tutaj użytkownik może zauważyć losowo wybrane pytania dotyczące artykułu. Poniżej znajdują się trzy przyciski: „TAK”, „NIE WIEM” oraz „NIE”. Użytkownik powinien odpowiedzieć na 10 pytań zgodnie ze swoimi odczuciami. Dodatkowo, na dole znajduje się pasek postępu, podpowiadający na ile pytań użytkownik udzielił już odpowiedzi, a na ile jeszcze nie. 

#### Weryfikacja
Po udzieleniu odpowiedzi na wszystkie pytania, użytkownik zostaje przeniesiony na kolejną podstronę, na której musi wpisać swój adres mailowy. Jest to konieczne, aby zweryfikować czy użytkownik nie jest botem, a także czy użytkownik nie dodał wcześniej tego samego artykułu. Następnie zostaje przeniesiony na stronę informacyjną. 

#### Strona informacyjna
W przypadku, gdy użytkownik po raz pierwszy dodał dany artykuł oraz swoje odczucia na temat jego prawdopodobieństwa, wówczas wklejony przez niego link, odpowiedzi i wynik zostają zapisane do bazy, a jego oczom ukazuje się podziękowanie za zgłoszenie.

Jeśli jednak użytkownik dodał ten sam artykuł ponownie, wówczas zostaje o tym poinformowany. Niżej znajdują się dwa przyciski: „Dodaj inny artykuł” (kliknięcie spowoduje przeniesienie na pierwszą cześć strony ankiety) oraz „Podmień ankietę” (kliknięcie spowoduje zamianę wyniku ze starego na nowy). 

### Baza artykułów
Na niniejszej stronie użytkownik może przejrzeć dodane do bazy artykuły. U góry znajdują się pola „Szukaj” oraz „Sortuj”, z kolei nieco niżej – dodane przez użytkowników linki. Każdy link posiada kategorie oraz wynik, pokazujący prawdopodobieństwo autentyczności danego materiału. Im mniej zadowolona emoji, tym prawdopodobieństwo fejka jest wyższe. 


Po kliknięciu na konkretny link, użytkownik zostaje przeniesiony na stronę statystyk, gdzie może się zapoznać ze szczegółową analizą dotyczącą samego artykułu, jak i witryny.

## API
Na potrzeby aplikacji zostało stworzone własne API.

## Kod startowy projektu
1. Nasza aplikacja została wdrożona na Netlify.
2. Biorąc pod uwagę fakt, iż nasza aplikacja jest implementowana przez kilku deweloperów, zdecydowaliśmy się na użycie biblioteki Prettier, służącej do formatowania kodu. Niniejsza biblioteka jest świetnym narzędziem, który wyłapuje błędy składni, automatycznie poprawia linie kodu według zdefiniowanej konfiguracji.

## Technologie użyte w projekcie:

1. React
2. Node.js
3. Express.js
4. MongoDB
5. Joi
6. Nodemailer
7. Mongoose
8. i18next
9. Redux
10. SCSS

## Narzędzia pomocnicze

- Visual Studio Code
- Yarn
- Figma

## Instalacja

#### Uruchomienie projektu:

Aby uruchomić aplikację na lokalnej maszynie, wykonaj następujące kroki:

1. Sklonuj repozytorium.
2. Otwórz je w ulubionym edytorze.
3. Zainstaluj zależności za pomocą komendy: yarn.
4. Wystartuj serwer za pomocą komendy: yarn start

Aplikacja będzie dostępna pod adresem: http://localhost:3000/
