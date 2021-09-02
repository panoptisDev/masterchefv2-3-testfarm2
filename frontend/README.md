# 🥞 Pancake Frontend

[![Netlify Status](https://api.netlify.com/api/v1/badges/7bebf1a3-be7b-4165-afd1-446256acd5e3/deploy-status)](https://app.netlify.com/sites/pancake-prod/deploys)

# Contributing to the Pancake ecosystem 🥞

Le Readme est basé sur celui du Pancake Frontend, le contribution guidelines du Frontend est [ici](https://docs.pancakeswap.finance/code/contributing).

## Installation

Créer un fichier `.env.development.local` dans le dossier frontend. rajouter se contenu dedans :

```
REACT_APP_CROWDIN_APIKEY = ""
REACT_APP_CROWDIN_PROJECTID = ""
```

Installez les dépendances

```shell
yarn
yarn start
```

Ne pas oublier de configurer son IDE avec `eslint` et `prettier`.

## Structure du projet

- **components** contient des éléments générique utilisé au sein de l'application.
- **views** contient des blocs de construction pour chaque page. Le point d'entrée d'une vue est utilisé comme **components** source pour chaque route.
- **config** contient tout les fichiers de configs et ABIs.
- **state** contient les fichiers redux pour l'état global de l'application.
- **context** contient les contextes globaux. (séparé du store redux)
- **hooks** contient des hooks génériques.
- **utils** contient des fonctions pour des services générique.

## Tests

Lancez des tests avec `yarn test`.

## Localisation

_Afin que les requêtes **Crowdin API** fonctionne - il est necessaire de renseigner ces variable dans le fichier  `.env.development.local` du dossier frontend `REACT_APP_CROWDIN_APIKEY` & `REACT_APP_CROWDIN_PROJECTID`_

### Ajout de traduction

Ce **hook** expose une fonction,vous devez en traduie le contenu.

```
import useI18n from 'hooks/useI18n'
...
const TranslateString = useI18n()
...
TranslateString(id, 'fallback')
```

- **id** est le crowdin id de la chaine que vous voulez traduire
- **fallback** est la chaine de secours si la chaine en question n'est pas trouvée.

### Variables

Les éléments de traduction peuvent gérer des variables transmises dans Crowdin, et ce sans altération du code.

Cela ne fonctionnera seulement s'il n'y a qu'**une** variable transmise, et si cette variable  est enveloppé dans Crowdin avec les signes **%**, i.e.:

Traduction dans Crowdin: `%asset% Earned` [link](https://crowdin.com/translate/pancakeswap/8/en-de#330)
