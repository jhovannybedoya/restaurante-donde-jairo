import Carne from "../API/Imagenes/carne asada.png";
import All from "../API/Imagenes/comida.png";
import Desayuno from "../API/Imagenes/desayuno.png";
import Almuerzo from "../API/Imagenes/almuerzo.jpeg";
import bebidas from "../API/Imagenes/Bebidas.png";
import Carne1 from "../API/Imagenes/carne a la plancha.jpeg";
import Calentado from "../API/Imagenes/calentado.png";

const PRODUCTS = {
  general: [
    {
      id: "gen4",
      name: "Menu",
      category: "all",
      styles: {
        backgroundImage: `url('${All}')`
      }
    },
    {
      id: "gen1",
      name: "carne asada",
      category: "carnes",
      styles: {
        backgroundImage: `url('${Carne}')`
      }
    },
    {
      id: "gen2",
      name: "desayuno",
      category: "desayunos",
      styles: {
        backgroundImage: `url('${Desayuno}')`
      }
    },
    {
      id: "gen3",
      name: "menu del dia",
      category: "almuerzos",
      styles: {
        backgroundImage: `url('${Almuerzo}')`
      }
    },
    {
      id: "gen4",
      name: "bebidas",
      category: "bebidas",
      styles: {
        backgroundImage: `url('${bebidas}')`
      }
    }
  ],
  all: [ 
  {
    id: "carne",
    name: "carne a la plancha",
    description: "Posta de carne de cerdo o res con patacon o con papitas",
    cost: 12000,
    styles: {
    backgroundImage: `url('${Carne}')`
  }
},
{
  id: "Carne asada",
  name: "carne asada",
  description: "Pizza con jamon, queso y piña",
  cost: 12000,
  styles: {
    backgroundImage: `url('${Carne}')`
  }
  }, 
  {
    id: "calentado",
    name: "calentado",
    description: "calentado con huevo",
    cost: 7000,
    styles: {
      backgroundImage: `url('${ Calentado }')`
    }
  },
  {
    id: "calentado2",
    name: "desayuno",
    description: "calentado con huevo",
    cost: 7000,
    styles: {
      backgroundImage: `url('${ Calentado }')`
    }
  },
  {
    id: "menu del dia",
    name: "menu del dia",
    description: "(divercidad de alimentos)",
    cost: 12000,
    styles: {
      backgroundImage: `url('${ Almuerzo}')`
    }
  }    
 ],

  carnes: [
    {
      id: "carne",
      name: "carne a la plancha",
      description: "Posta de carne de cerdo o res con patacon o con papitas",
      cost: 12000,
      styles: {
        backgroundImage: `url('${Carne}')`
      }
    },
    {
      id: "Carne asada",
      name: "carne asada",
      description: "Pizza con jamon, queso y piña",
      cost: 12000,
      styles: {
      backgroundImage: `url('${Carne1}')`
      }
    }
    
   ],

  desayunos: [
    {
      id: "calentado",
      name: "calentado",
      description: "calentado con huevo",
      cost: 7000,
      styles: {
        backgroundImage: `url('${ Calentado }')`
      }
    },
    {
      id: "calentado2",
      name: "desayuno",
      description: "calentado con huevo",
      cost: 7000,
      styles: {
        backgroundImage: `url('${ Calentado }')`
      }
    }
  ],

  almuerzos: [
    {
      id: "menu del dia",
      name: "menu del dia",
      description: "(divercidad de alimentos)",
      cost: 12000,
      styles: {
        backgroundImage: `url('${ Almuerzo}')`
      }
    }
  ],

  bebidas: [
    {
      id: "jugo naturales",
      name: "jugos",
      description: "jugo naturales con leches o agua",
      cost: 4000,
      styles: {
         backgroundImage: `url('${bebidas}')`
       }
     }
  ],
}

export { PRODUCTS };