// Import des dépendances

import data from '../utils/data.json'
import React, { createContext } from 'react'
export let Context = createContext()

// * Création d'une fonction Provider() qui récupère en props l'élément children
// puis retourne un composant <Context> qui récupère en props la liste de logements et affiche l'élement children
// Permet de passer des props sans avoir à les passer de manière descendante pour chaque composant

export default function Provider({ children }) {
    return <Context.Provider value={{ data }}>{children}</Context.Provider>
}
