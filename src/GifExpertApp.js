import React, { useState } from 'react';
import { AddCategories } from './components/AddCategories';
import { GifGrid } from './components/GifGrid';

/* PARA QUE CREE TODO DE UNA SE USA EL SHORTCUT RAFc */

/* TODOS LOS COMPONENTES EMPIEZAN CON MAYUSCULAS, SINO NO LOS RECONOCE */

export const GifExpertApp = () => {

    /* const categories = ['one punch', 'samurai x', 'dragon ball'] */
    const [categories, setcategories] = useState(['Full metal alchemist'])

    //  const handleAdd = () => {
    //  setcategories([...categories, 'Sword Art Online'])  /* ...categories -- es el estado anterior del array "," lo nuevo que quiero agregar*/
    /* setcategories(cats =>[cats,'Sword Art Online']) */ /* ---ES OTRA FORMA --- La funcion Setcategories recibe un Callback en donde 'cats' es el estado anterior y
    despues va los mismo que la linea de arriba */
    //} 

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategories setCategories={setcategories} />
            <hr />

            <ol>
                {
                    categories.map(cat => (
                        <GifGrid
                            key={cat}
                            category={cat} />
                        // {/* <li key={category}>{category}</li> */}
                    ))/* LA FUNCION MAP RECIBE 2 PARAMETROS EL QUE ITERA Y EL INDICE  */
                }
            </ol>
        </div>
    )
}

