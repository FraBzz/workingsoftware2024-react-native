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