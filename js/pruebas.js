function probarValidarNombre() {
  console.assert(
    validarNombre("") === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
    validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
    validarNombre("fabricio") === " ",
    " ",
  )
}



function probarValidarCiudad(){
    console.assert(
        validarCiudad("") === "Debes completar la provincia",
        'Validar ciudad no validó que la ciudad sea igual a vacio',
    )
}



function probarValidarDescripcionRegalo(){
    console.assert(
        validarDescripcionRegalo("") === "Tienes que completar la descripción del regalo",
        'Validar descripcion no validó que la desceipcion sea igual a vacio',

    );

    console.assert(
        validarDescripcionRegalo(111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111) === 
        "Este campto debe tener menos de 100 caracteres",
        'Validar descripcion no validó que la descripcion sea igual a mayor a 100 caracteres',

    );
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();


