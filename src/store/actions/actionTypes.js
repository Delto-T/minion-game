
// meilleur méthode

const actions = {
    //Actions pour minions
    CREATE_MINION: 'CREATE_MINION',
    DESTROY_MINION: 'DESTROY_MINION',
    CREATE_TEAM: 'CREATE_TEAM',
    DESTROY_TEAM: 'DESTROY_TEAM',


    // Actions pour save
    SAVE: 'SAVE'


}

export default actions;




/* 
Il ya différente méthode pour protéger ses actions des fautes de frappes
et donc de perdre du temps a trouver l'erreur car les actions étant
inscrite en sting il n'y aura pas d'erreur lors de la compilation.

Pour se protéger contre ça il faut faire en sorte de créer une erreur lorsque
il y a une faute de frappes

Dans un fichier actions.js on peut

Méthode 1 action = 1 variable
ex:
export const CREATE_MINION = 'CREATE_MINION';
export const DESTROY_MINION = 'DESTROY_MINION';

=> import {variable, variable2 etc...} from '../.../actions.js'
ou 
=> import * as actions from '../.../actions.js'

* signifie (importer) TOUS les esxports

*/