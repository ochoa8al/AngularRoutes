export interface Productos {
    id: string | number,
    name: string,
    price: number,
    description: string
}

export const productList:Productos[] = [
    {id:1,name:'Lavandina',price:5, description:'Frescura por 24 horas'},
    {id:2,name:'Detergente',price:10, description:'Mas espuma y mas lavadas'},
    {id:3,name:'Limpia vidrios',price:15, description:'Vidrios mas brillantes y limpios'},
    {id:4,name:'Quita grasa',price:30, description:'Elimina manchas y grasa'},
    {id:5,name:'Perfumina',price:50, description:'Mata plagas'}
];