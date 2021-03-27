const getMenuFrontEnd = (admin=false)=>{

  const menu = [
      {
        titulo: 'GIIR - RUP',
        submenu:[
          { titulo: 'Práctica', url:'practica'},
          { titulo: 'Ejemplo', url:'ejemplo'}
        ]
      },
      {
        titulo: 'Proyectos',
        // icono: 'mdi mdi-folder-lock-open',
        submenu: [
          { titulo: 'Todos los poyectos', url: 'proyectos' },
          //{ titulo: 'Nuevo proyecto', url: 'proyecto-nuevo' },
        ]
      },
      // {
      //   titulo: 'Usuarios',
      //   // icon: 'mdi mdi-folder-lock-open',
      //   submenu: [
      //     { titulo: 'Usuarios', url: 'usuarios' },
      //     { titulo: 'Proyectos', url: 'proyectos' },
      //   ]
      // }
    ];
  
    if(admin == true){
        menu[1].submenu.unshift({ titulo: 'Nuevo proyecto', url: 'proyecto-nuevo' });
        menu.push({titulo:'Usuarios', submenu: [{titulo:'Usuarios', url:'usuarios'}]})
    }

    return menu;
}

module.exports = {
  getMenuFrontEnd
}