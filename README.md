# Webpack ES2015 Minimal

Questo è il boilerplate minimo per far funzionare JavaScript ES2015 e Babel.

## Installazione delle dipendenze

```
# dipendenze di sistema (eseguibile webpack)
npm install -g webpack # aggiungere "sudo" se sono richiesti permessi di amministratore

# dipendenze del progetto
npm install
```

## Utilizzo

È necessario avere 2 terminali aperti uno con il webserver e l'altro con la compilazione di Webpack in background. Dopodiché potete modificare il contenuto in `src/index.js` e ricaricare la pagina per vedere il risultato.

```
# Terminale 1 (Webserver)
$(cd build && python -m SimpleHTTPServer 8000)

# Terminale 2 (Webpack)
webpack -w
```

## Licenza

Copyright (c) 2015 Luigi Maselli http://corso-javascript.it MIT License
