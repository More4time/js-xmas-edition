function probarValidarNombre() {
  console.assert(
    validarNombre("") === 'El nombre tiene que tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
    validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'El nombre tiene que tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("fabricio") === " ",
    " ",
  )
}



function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "No seleccionaste ninguna provincia",
        'Validar ciudad no validó que la ciudad sea igual a vacio',
    )
}



function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === "Tienes que escribir la descripción del regalo.",
        'Validar descripcion no validó que la desceipcion sea igual a vacio',

    );
    
    console.assert(
        validarDescripcionRegalo("1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111") === 
        "Tiene que ser menor a 100 caracteres.",
        'Validar descripcion no validó que la descripcion sea igual a mayor a 100 caracteres',

    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


