# workingsoftware2024-react-native
Workshop tenuto alla Working Software 2024 dal titolo "Dal sito web all'app, React Native o Flutter come capire quale scegliere?"

## Step 1
1. Creare un'applicazione ReactNative vuota attraverso il seguente comando `npx create-expo-app applicationName --template blank`
2. Scaricare dallo store del vostro Smartphone l'app "Expo Go"
3. Per verificare che l'installazione sia andata a buon fine lanciare il comando `npm start`, inquadrare il QR code che compare nel terminale e verifcare che expo faccia la build nel modo corretto. Se tutto va a buon fine dovreste vedere il return dell'App.js

## Step 2
In questo step, partendo dall'applicazione vuota appena creata andremo a creare una vista che si occuperà di renderizzare la WebView, che è il componente necessario per l'incapsulamento del sito web nell'applicazione mobile.

Per aggiungere la WebView al progetto è necessario installarla: lanciare il comando `npm i react-native-webview`

Per mantenere tutto il codice ordinato e leggibile, utilizziamo la struttura standard di ReactNative che prevede l'inserimento di una cartella source `src` all'interno della quale i file vengono ordanizzati secondo le varie tipologie.

## Step 3
In questo step, dopo aver incapsulato il sito scelto in un'applicazione mobile, vengono fatte delle modifiche grafiche per allontanare la UI da quella del classico sito, facendo si che la UX sia più rivolta verso quella di un'applicazione mobile.

Le modifiche grafiche apportate sono le seguenti:
- creazione del componente che utilizzeremo come `NavigationBar`. Per la barra di navigazione utilizzeremo una liberia che mette a disposizione un set di icone sufficiente allo scopo. La libreria può essere installata lanciando il comando `npm i react-native-vector-icons`
- modifica del componente `StatusBar` presente di default in Expo

## Step 4 
In questo step andremo ad aggiungere OneSignal (documentazione completa qui https://documentation.onesignal.com/docs/react-native-expo-sdk-setup). Per poterlo fare è necessario registrarsi al sito `onesignal.com` ed essere in possesso di:
- un account Firebase per Android. Link alla documentazione fornita da onesignal: https://documentation.onesignal.com/docs/android-firebase-credentials
- il Push Authentication Certificate per IOS. Llink alla documentazione fornita da onesignal: https://documentation.onesignal.com/docs/ios-p12-generate-certificates

Per comodità vi daremo gli accessi ad un account onesignal di test già configurato (TODO: provare)
TODO: cercare il push notification per IOS

Nel progetto bisogna installare:
`npx expo install onesignal-expo-plugin`

`npm install --save react-native-onesignal`

Utilizzeremo anche le variabili di ambiente, installare `npm install react-native-dotenv`