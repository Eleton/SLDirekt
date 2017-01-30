# SL Direkt

## Vad är det här?
Personligt projekt för att kolla hårdkodade avgångar på SL. När jag ska kollektivtrafika så är jag ofta inte intresserad av resväg utan bara när respektive linje går från mina närmaste stationer. Konceptet är väl inte nytt och finns säkert något jättesmidigt verktyg som gör det här redan, men resan är ju målet. Eller hur?

## Hur gör jag?
##### API-nyckel
För att använda programmet behövs en API-nyckel från [Trafiklab](https://www.trafiklab.se/api). För detta behöver man skaffa konto där och sen begära en nyckel från "ResRobot - Stolptidtabeller 2".
Nyckeln läggs sen i en fil som heter "keyToSl.txt" som ligger i rot-mappen.

##### Åtkomst till sida
Kör node app.js och gå in på localhost:3000 i din favoritwebbläsare för att direkt få upp dom närmaste avgångarna.

## Att göra
- [ ] Implementera knappar för att filtrera vilka avgångar du är intresserad av per tabell.
- [ ] Möjlighet att få upp flera linjer per tabell.
- [ ] En bra gränssnitt så man inte behöver vara låst till just mina stationer... (Kommer förmodligen kräva ytterligare API-nycklar från Trafiklab för att bli smidigt)
- [ ] Cachea resultat från anropen på servern i cirka 1 minut, vilket kommer reducera antalet anrop till SLs API om man har flera användare på samma gång och kommer även gå snabbare att ladda.
- [ ] Typ... Kommentera koden? Eller? Gör man sånt?