// ========================================
// DATOS DE PRODUCTOS (AMPLIADO - 8 PRODUCTOS)
// ========================================
const products = [
    {
        categoria: "Proteina",
        nombre: "Whey Protein Doypack 2 Lb",
        precio: 39900, 
         sabores: ["Chocolate", "Vainilla", "Banana", "Frutilla", "C&C"],
        descripcionPrincipal: "Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto.\n\nSu agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo.\n\n100% NATURAL GRASS FED PROTEIN\n\nFuente natural de aminoácidos esenciales, aminoácidos de cadena ramificada y Glutamina.",
        modoUso: "Mezclar 1 medida de Platinum Whey Protein en 200cm3 de agua o leche descremada. Consumir 1 hora antes del entrenamiento, luego del mismo o simplemente en cualquier momento del día para alcanzar tus necesidades proteicas.",
        ingredientes: "Ultra Concentrado de Proteína de Suero Lácteo, Aislado de Proteína de Suero Lácteo, Hidrolizado de Proteína de Suero Lácteo, Cacao, Saborizante, Edulcorantes.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo o lactancia. Menores de 18 años consumir bajo supervisión de un adulto o profesional.",
        descripcionSecundaria: "2 LIBRAS | 30 SERV. | 25GR DE PROTEÍNA X SERV.",
        imagen: "img/proteina.jpg"
    },
    
    {
        categoria: "Magnesio",
        nombre: "Citrato de Magnesio Sin Sabor - Polvo 500 Gr",
        precio: 25900,
        descripcionPrincipal: "El Citrato de Magnesio ayuda a tener un descanso reparador y reducir la fatiga, relaja los músculos para su mejor recuperación y tiene un efecto regulador de la función intestinal.",
        modoUso: "Consumir 1 porción diaria (3.5 gramos) o como lo indique su médico.",
        ingredientes: "Citrato de Magnesio.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o nutricionista. No consumir en caso de embarazo, mujeres en periodo de lactancia ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rótulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Indicado para personas que realizan ejercicio físico. Su consumo debe realizarse bajo control médico. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "Suplemento dietario a base de magnesio en polvo. Libre de gluten. Sin T.A.C.C. 500 Gr. 142 servicios.",
        imagen: "img/MAGNESIO500MG.webp"
    },
    
    {
        categoria: "Pancakes",
        nombre: "Pancakes Proteicos sabor Chocolate",
        precio: 12000,
        descripcionPrincipal: "¿QUÉ SON LOS PANCAKES PROTEICOS? Son pancakes estilo americano que hacen de tus desayunos y meriendas algo totalmente irresistible. Una opción deliciosa, nutritiva y libre de gluten, pensada para acompañar un estilo de vida saludable y activo.",
        modoUso: "¿CÓMO SE PREPARAN? Colocar dos cucharadas soperas del producto (25 g) y 30 ml de agua o leche en un recipiente. Mezclar con tenedor. Cocinar en sartén precalentada y rociada con aceite a fuego medio aproximadamente 1,5 minutos por lado. TIP: Probálos calientes y fríos. Combinálos con pasta de maní, miel, frutos secos o con tus frutas preferidas.",
        ingredientes: "Harina de avena libre de gluten, clara de huevo, leche descremada, polvo para hornear, cacao puro.",
        advertencias: "El consumo de suplementos deportivos no reemplaza una dieta variada y equilibrada.",
        descripcionSecundaria: "Doypack de 400 g, con cierre hermético para su excelente conservación. Sabores disponibles: chocolate y vainilla. Producto 100% libre de gluten. Cada paquete rinde 16 pancakes.",
        imagen: "img/PANCAKECH.webp"
    },
    {
        categoria: "Pancakes",
        nombre: "Protein Bar",
        precio: 24900,
        sabores: ["Chocolate"],
        descripcionPrincipal: "ENA PROTEIN BAR es un alimento que proporciona una combinación de carbohidratos y proteínas (2:1), una opción ideal para optimizar el rendimiento deportivo y obtener energía sostenida durante todo el día, previniendo la fatiga durante el ejercicio y acelerando la recuperación post-entrenamiento.",
        modoUso: "Consumir antes o después del entrenamiento o en cualquier momento del día. Práctica y fácil de transportar, es el snack ideal para acompañar tu rutina diaria.",
        ingredientes: "Jarabe de glucosa, jarabe de maíz de alta fructosa, proteína aislada de soja, proteínas concentradas de suero, baño de chocolate semiamargo (emulsionantes: INS 322, INS 442, INS 476, aromatizante natural vainilla), proteína texturizada de soja, aceite de girasol, grasa bovina refinada, maltodextrina, cacao en polvo, crispín de cereal, sorbitol (HUM), aromatizantes/saborizantes. CONTIENE: trigo, avena, sulfitos, derivados de leche, soja, maní y trazas de huevo. Puede contener derivados de cebada.",
        advertencias: "Edad mínima recomendada: 18 años. No apto para personas con intolerancia a la lactosa. Contiene gluten y lactosa. No es vegano. Consultar a un profesional de la salud antes de usar si existe alguna condición médica preexistente. Mantener en un lugar fresco y seco, fuera del alcance de los niños.",
        descripcionSecundaria: "Barra de proteína. Favorece el desarrollo muscular. Para consumir en cualquier momento y lugar.",
        imagen: "img/PROTEINBAR.webp"
    },

    {
        nombre: "Enargy Gel+ Con Cafeína",
        precio: 13900,
        sabores: ["Vainilla"],
        descripcionPrincipal: "- Aporta energía \"en movimiento\". Ideal para trabajos aeróbicos. Con sales de rehidratación y antioxidantes. Energy Gel fue creado para optimizar el consumo de nutrientes de manera conveniente, portable y con ricos sabores. Para consumirlo cortá la parte superior del pack e ingerilo por completo.",
        modoUso: "Se puede tomar 1 Energy Gel+ 15 minutos antes de la actividad física y otro 45 minutos después de haber comenzado para mantener un suministro constante de energía. También se puede consumir en entretiempos o pausas. Para ingerirlo, cortar la parte superior del pack y consumir directamente.",
        ingredientes: "Jarabe de maíz de alta fructuosa, jarabe de glucosa, glutamina, citrato de magnesio, extracto seco de ginseng (Eleutherococcus senticosus, raíces), cloruro de sodio, cafeína, taurina, vitamina C, vitamina E, cloruro de potasio, citrato de sodio (ACREG), benzoato de sodio (CONS), sorbato de potasio (CONS), ácido cítrico (ACI), carragenina (ESP), aromatizantes. Puede contener derivados de leche y soja.",
        advertencias: "No debe ser consumido por diabéticos. Consulte a su médico y/o farmacéutico. No consumir en caso de embarazo o lactancia. Menores de 18 años solo bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores de 25°C.",
        descripcionSecundaria: "Gel energético con cafeína. Ideal antes o durante la actividad física. Aporta energía \"en movimiento\".",
        imagen: "img/GEL.webp"
    },

    {
        categoria: "Creatina",
        nombre: "Creatina Monohidrato 1Kg",
        precio: 82500,
        descripcionPrincipal: "La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación. La creatina monohidrato es recomendada durante un plan de entrenamiento para aumentar la fuerza, resistencia y recuperación.",
        modoUso: "Durante los primeros 4 días, consumir 4 porciones diarias, y los días siguientes consumir una o dos porciones diarias preferentemente con el estómgo vacío.",
        ingredientes: "Creatina monohidrato micronizada de máxima pureza - 100% Pura.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo o lactancia. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en lugar seco y fresco.",
        descripcionSecundaria: "CREATINE MONOHYDRATE ULTRAMICRONIZED | 100% PURA | AUMENTA EL VOLUMEN Y LA RESISTENCIA Suplemento dietario a base de Creatina Monohidrato. 1kG | 200 SERV.",
        imagen: "img/creatina1kg.png"
    },
    
    {
        categoria: "Creatina",
        nombre: "Creatina Monohidrato 300g Doypack",
        precio: 24900,
        descripcionPrincipal: "La creatina micronizada es la unión de tres aminoácidos que ofrece mayores ventajas que la creatina normal, mejorando su asimilación.\n\nLa creatina monohidratado es recomendada durante un plan de entrenamiento para aumentar la fuerza, resistencia y recuperación.",
        modoUso: "Durante los primeros 4 días, consumir 4 porciones diarias, y los días siguientes consumir una o dos porciones diarias preferentemente con el estómago vacío.",
        ingredientes: "Creatina monohidrato micronizada de máxima pureza - 100% Pura.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo o lactancia. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en lugar seco y fresco.",
        descripcionSecundaria: "300G | 60 SERV. | 5G POR SERVICIO",
        imagen: "img/creatina.jpg"
    },
    {
        categoria: "Pancakes",
        nombre: "Pancakes Proteicos sabor vainilla",
        precio: 12000,
        descripcionPrincipal: "¿QUÉ SON LOS PANCAKES PROTEICOS? Son pancakes estilo americano que hacen de tus desayunos y meriendas algo totalmente irresistible. Una opción deliciosa, nutritiva y LIBRE DE GLUTEN, pensada para acompañar un estilo de vida saludable y activo",
        modoUso: "¿CÓMO SE PREPARAN? Colocar dos cucharadas soperas del producto (25 g) y 30 ml de agua o leche en un recipiente. Mezclar con tenedor. Cocinar a sartén precalentada y rociada con aceite a fuego medio aproximadamente 1,5 minutos por lado",
        ingredientes: "Harina de avena Libre de gluten, clara de huevo, leche descremada, polvo para hornear, ARO: vainilla, EDU: INS 955.",
        advertencias: "El consumo de suplementos deportivos no reemplaza una dieta variada y equilibrada.",
        descripcionSecundaria: "Pack de 400 g, con cierre hermético para su excelente conservación. Sabores disponibles: Chocolate y vainilla Producto 100% LIBRE DE GLUTEN. CADA PAQUETE RINDE 16 PANCAKES",
        imagen: "img/pancakes.webp"
    },
    {
        categoria: "Proteina",
        nombre: "Platinum Whey Protein 3Kg - Vainilla",
        precio: 116900,
        sabores: ["Vainilla"],
        descripcionPrincipal: "Compuesta por ultra concentrado, aislado e hidrolizado de suero de máxima pureza, obtenidos por métodos no agresivos que garantizan la calidad y estabilidad del producto. Su agradable sabor y alta disolución lo convierten en la opción inteligente a la hora de agregar proteínas de alto valor biológico a nuestra dieta, o como parte de un programa nutricional deportivo. 100% NATURAL GRASS FED PROTEIN. Fuente natural de aminoácidos esenciales, aminoácidos de cadena ramificada y Glutamina.",
        modoUso: "Mezclar 1 medida de Platinum Whey Protein en 200 cm3 de agua o leche descremada. Consumir 1 hora antes del entrenamiento, luego del mismo o en cualquier momento del día para alcanzar tus necesidades proteicas.",
        ingredientes: "Ultra Concentrado de Proteína de Suero Lácteo, Aislado de Proteína de Suero Lácteo, Hidrolizado de Proteína de Suero Lácteo, Cacao, ARO: Sabor Chocolate, EDU: Sucralosa (40mg/100cm3), EDU: Potasio Acesulfamo (30mg/100cm3), Col: Caramelo. *El sabor chocolate suizo y cookies and cream tienen cacao. CONTIENE DERIVADOS DE LECHE.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo o lactancia. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C. Información adicional: Fenilcetonúricos: contiene Fenilalanina.",
        descripcionSecundaria: "Suplemento dietario en polvo dietético para preparar bebida a base de proteínas de suero. 3KG | 100 SERV. | 25GR DE PROTEÍNA POR SERVICIO.",
        imagen: "img/VAINILLAPROTEIN3KG.webp"
    },
    
    {
        categoria: "Preentreno",
        nombre: "TNT-Dynamite 240g",
        precio: 19600,
        sabores: ["Grape 🍇", "Açaí"],
        descripcionPrincipal: "",
        modoUso: "Diluir 1 medida colmada (8g) en 500cm3 de agua fría una vez al día. Consumir 15 a 30 minutos antes del entrenamiento o la competencia. No consumir más de 2 porciones diarias.",
        ingredientes: "Beta Alanina, Creatina Nitrato, Arginina alfaketoglutarato, Taurina, L-Tirosina micronizada, Dióxido de Silicio, Ácido Málico, Ácido Cítrico, Vitamina C (Ácido Ascórbico), ARO: sabor *según corresponda, Polidextrosa, Silicato de Calcio, Cafeína Anhidra, EDU Sucralosa (12,8mg/100cm3), EDU: Potasio Acesulfamo (12,4mg/100cm3), Niacinamida, Colorante, Vitamina B6 (Piridoxina), Ácido Fólico, Vitamina B12 (cianocobalamina).",
        advertencias: "Producto para adultos sanos mayores de 18 años. Consultar a un médico si se está bajo medicación. No consumir en caso de alta o baja presión, arritmia, problemas cardíacos, hepáticos, renales, tiroideos, enfermedades psiquiátricas, diabetes o problemas de próstata. No consumir en embarazo, lactancia, niños o adultos mayores. No mezclar con alcohol ni energizantes. Nunca exceder 2 porciones en 24 hs ni usar más de 5 días a la semana. La beta alanina puede generar hormigueo. Mantener en lugar fresco y seco. Fenilcetonúricos: contiene fenilalanina.",
        descripcionSecundaria: "Polvo para preparar bebida analcohólica dietética con cafeína y taurina suplementada con vitaminas. 240 GRAMOS | 30 SERV. | SUPERIOR PERFORMANCE",
        imagen: "img/TNTDynamite-acai.webp"
    },
    
    {
        categoria: "Aminoácidos",
        nombre: "Mtor BCAA 270g",
        precio: 23400,
        sabores: ["Fruit Punch"],
        descripcionPrincipal: "",
        modoUso: "Como suplemento dietario mezclar 1 porción (13,5g / 1 scoop) en 500cm3 de agua fría (ajustar la porción a su preferencia). En los días de entrenamiento consumir 1 porción durante el entrenamiento y 1 porción luego del mismo. En los días en los que no hay entrenamiento consumir 1 porción al día. Para mejores resultados consumir diariamente.",
        ingredientes: "L-Leucina, L-Glutamina, L-Citrulina Malato, Ácido Cítrico, L-Valina, L-Isoleucina, Sodio Citrato, ARO: sabor *según corresponda, Cloruro de Potasio, Ácido Málico, Cloruro de Sodio, EDU: Sucralosa (27mg/100cm3), EDU: Potasio Acesulfamo (10mg/100cm3), Colorante, Vitamina B6 (Piridoxina).",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo, lactancia ni en niños. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "Suplemento dietario en polvo dietético para preparar bebida a base de aminoácidos. 270G | 20 SERV. | REPLENISHES ELECTROLYTES",
        imagen: "img/BECA.webp"
    },
    {
        categoria: "Magnesio", 
        nombre: "Citrato de Magnesio - 60 Cápsulas",
        precio: 13900,
        descripcionPrincipal: "El Citrato de Magnesio ayuda a tener un descanso reparador y reducir la fatiga, relaja los músculos para su mejor recuperación y tiene un efecto regulador de la función intestinal.",
        modoUso: "Consumir 1 porción diaria (2 cápsulas) o como lo indique su médico.",
        ingredientes: "Citrato de Magnesio.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o nutricionista. No consumir en caso de embarazo, mujeres en periodo de lactancia ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rótulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Indicado para personas que realizan ejercicio físico. Su consumo debe realizarse bajo control médico. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "Suplemento dietario a base de magnesio en cápsulas. Libre de gluten. Sin T.A.C.C. Contiene 60 cápsulas.",
        imagen: "img/CITRATONEW.webp"
    },

    {
        categoria: "",
        nombre: "HMB - 180 Cápsulas",
        precio: 24900,
        descripcionPrincipal: "",
        modoUso: "Como suplemento dietario consumir 2 cápsulas 3 veces al día, junto con las comidas que contengan proteína. Recomendación: se recomienda su uso con Creatine Monohydrate y Beta-Alanine.",
        ingredientes: "Calcio Beta-Hidroxi, Beta-Metilbutarato Monohidrato, Dióxido de Silicio.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo, lactancia ni en niños. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "Suplemento dietario a base de Calcio Beta-Hidroxi Beta-Metilbutarato Monohidrato en cápsulas. 180 CÁPSULAS | 90 SERV. | HMB 1G POR PORCIÓN. Strength and Recovery.",
        imagen: "img/HMB.webp"
    },
    {
        categoria: "Proteina",
        nombre: "Just Plant Protein 2 Lb",
        precio: 39900,
        descripcionPrincipal: "Just Plant es una proteína a base de aislado de proteína de arveja. Es 100% vegana, keto y libre de gluten.",
        modoUso: "Es ideal para sumar proteínas de alto valor biológico a tus recetas favoritas o como ingrediente principal en tus batidos proteicos.",
        ingredientes: "",
        advertencias: "",
        descripcionSecundaria: "",
        imagen: "img/JustPlantProteinNEWSF.webp"
    },
    {
        categoria: "Preentreno",
        nombre: "PUMP V8 - 285 Gr",
        precio: 26340,
        sabores: ["Sandía 🍉", "Uva 🍇"], 
        descripcionPrincipal: "Pre-entrenamiento de última generación con 8 ingredientes activos diseñados para maximizar tu rendimiento.\n\nFórmula avanzada con beta alanina, citrulina, cafeína y complejo vitamínico para energía explosiva y mejor concentración.",
        modoUso: "Disolver 1 medida (9,5g) en 500cm3 de agua fría. Consumir 15 a 30 minutos antes del entrenamiento o la competencia. No consumir más de 2 porciones diarias.",
        ingredientes: "Betaina Anhidra, Beta Alanina, Arginina Alfaketoglutarato, L-Citrulina Malato, Extracto de Guaraná, Taurina, L-Tirosina, Cafeína Anhidra, Vitamina C, Vitamina B6, Vitamina B12.",
        advertencias: "Este producto fue desarrollado para ser consumido por adultos sanos mayores de 18 años. Consulte a su médico y/o farmacéutico antes de consumir este producto, o si está tomando algún tipo de medicación. No se recomienda consumir este producto en caso de tener alguna de las siguientes patologías: Alta o baja presión sanguínea, arritmia cardíaca, Problemas cardíacos, enfermedades en el hígado, riñón o problemas de tiroides, Enfermedades psiquiátricas, diabetes o problemas de próstata. Discontinuar su uso si debe someterse a cirugía, o si observa alguna reacción adversa. No mezclar con alcohol, no consumir en caso de embarazo,lactancia, niños o personas de edad avanzada. La dosis ideal varía entre 1 o 2 porciones dependiendo del individuo. Nunca exceder 2 medidas en el período de 24hs. NUNCA USAR ESTE PRODUCTO MÁS DE 5 DÍAS A LA SEMANA. exceder la dosis recomendada o no seguir las indicaciones puede derivar en efectos no deseados. Se recomienda consumir 2 litros de agua mientras se utiliza el producto. No apto para ser combinado con bebidas energizantes ni estimulantes de ningún tipo. Una sensación de hormigueo o picazón al consumir este producto es normal por acción de la Beta Alanina, en caso de resultar molesto, disminuir la dosis. Puede ocurrir sedimentación en el producto sin alterar sus cualidades, en el caso de que ocurra, agitar el envase vigorosamente puede ayudar a resolver el problema. Es importante que permanezca bien cerrado en un lugar fresco y seco, fuera del alcance de los niños. Fenilcetonúricos, contiene fenilalanina, dado la pureza y las características de las materias primas, el volumen del producto puede variar según lote, alterando levemente el tamaño de la porción, también puede ocurrir cierta variación en el aspecto del producto sin alterar sus cualidades nutricionales. Suplementa Dietas insuficientes. Menores de 18 años consumir bajo supervisión de un adulto o profesional. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "285G | 30 SERV. | 8 ING. ACTIVOS | NEXT GEN",
        imagen: "img/pump.webp"
    },
    {
        categoria: "Vitaminas",
        nombre: "All in One Multivitamin - 60 Cápsulas",
        precio: 17420,
        descripcionPrincipal: "Complejo multivitamínico completo con 23 vitaminas y minerales esenciales para apoyar tu salud general y rendimiento deportivo.\n\nFórmula balanceada que cubre todas tus necesidades nutricionales diarias.",
        modoUso: "Tomar 1 comprimido diariamente con las comidas.",
        ingredientes: "23 vitaminas y minerales incluyendo Vitaminas A, C, D, E, Complejo B completo, Zinc, Magnesio, Calcio, Hierro y más.",
        advertencias: "Supera el valor diario recomendado de algunas vitaminas. Consultar médico. No en embarazo o lactancia. Diabéticos consultar por contenido de Cromo.",
        descripcionSecundaria: "60 CÁPSULAS | 60 SERV. | 23 VITAMINAS Y MINERALES",
        imagen: "img/allinone.webp"
    },
    {
        categoria: "Omega3",
        nombre: "Omega 3 Fish Oil - 60 Cápsulas",
        precio: 27900,
        modoUso: "Consumir 2 cápsulas al día.",
        ingredientes: "Suplemento Dietario a Base de Aceite Natural de Pescado",
        advertencias: "Suplementa Dietas insuficientes, consulte a su médico y/o nutricionista. No consumir en caso de embarazo, mujeres en periodo de lactancia ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rotulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Este producto está indicado para personas que realizan ejercicio físico. Su consumo debe realizarse bajo control médico. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25ºC.",
        descripcionSecundaria: "Suplemento Dietario a Base de Aceite Natural de Pescado en cápsula. Libre de Gluten. Sin T.A.C.C. 60 cápsulas 2000MG DE OMEGA3",
        imagen: "img/omega_3.webp"
    },
    {
        categoria: "Colageno",
        nombre: "COLLAGEN 210 Gr",
        precio: 18900,
        sabores: ["Frutos Rojos 🍓🫐", "Limón 🍋"],
        modoUso: "Diluir 2 medidas (10,5g) en 300ml de agua, con el estómago vacío.",
        ingredientes: "Colágeno Hidrolizado, Resveratrol, ARO: Sabor Limón, EDU: Potasio Acesulfamo (30mg/100cm3), EDU: Sucralosa (15mg/100cm3), Vitamina C (Ácido Ascórbico), Ácido Hialurónico, Coenzima Q10.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o nutricionista. No consumir en caso de embarazo, lactancia, ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rótulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Este producto está indicado para personas que realizan ejercicios físicos. Su consumo debe realizarse bajo control médico. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25oC.",
        descripcionSecundaria: "Suplemento dietario en polvo dietético a base de Colágeno hidrolizado, Coenzima Q10, Acido Hialurónico, Resveratrol y Vitamina C. Sabor Limón. Libre de Gluten. Sin TACC. 210 GRAMOS | 20 SERV.",
        imagen: "img/collagen.webp"
    },
    {
        categoria: "Quemador",
        nombre: "Thermo Fuel Max - 120 Cápsulas",
        precio: 18900,
        modoUso: "Tomar 2 cápsulas por la mañana y 2 cápsulas 15 minutos antes del entrenamiento o como lo indique su médico.",
        ingredientes: "Extracto Natural de Canephora Robusta (Green Coffee), Ext. Nat. de Papa (Solanum Tuberosum), Ext. Nat. de Naranja Amarga, Ext. Nat. de Té Verde, Ext. Natural de Guaraná, Ext. Natural de Uva Ursi, Vitamina B6, Riboflavina (Vitamina B2), Tiamina (Vitamina B1), Picolinato de Cromo y Vitamina B12. Información adicional: Fenilcetonúricos, contiene fenilalanina.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo, lactancia ni en niños. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C. Diabéticos: este producto contiene cromo, consulte a su médico.",
        descripcionSecundaria: "Suplemento dietario a base de extractos vegetales y vitaminas, en cápsulas. 120 CAP. | 30 SERV. | 6 EXT. NATURALES",
        imagen: "img/fuelMax.webp"
    },
    {
        categoria: "Magnesio",
        nombre: "ENA - Citrato de Magnesio",
        precio: 13900,
        descripcionPrincipal: "El magnesio favorece al metabolismo energético normal y ayuda a disminuir el cansancio y la fatiga. Asimismo, participa en el correcto funcionamiento del sistema nervioso y muscular. También contribuye a la síntesis proteica y al mantenimiento de huesos en condiciones normales.",
        modoUso: "Se recomienda tomar de 1 a 4 cápsulas de Citrato de magnesio en cualquier momento del día o bien, 30 minutos antes o después de sus principales comidas.",
        ingredientes: " 433 mg de citrato de magnesio + 70mg de magnesio",
        advertencias: "PUEDE CONTENER DERIVADOS DE LECHE Y SOJA. SIN GLUTEN.",
        descripcionSecundaria: "60 cápsulas de 537 mg c/u.",
        imagen: "img/citratoMagnecio.webp"
    },
    {
        categoria: "Preentreno",
        nombre: "Caffeine 200 - 30 Cápsulas",
        precio: 9900,
        modoUso: "Como suplemento dietario consumir 1 cápsula.",
        ingredientes: "Cafeína 200mg",
        advertencias: "Suplementa Dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo, mujeres en periodo de lactancia ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rotulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25°C.",
        descripcionSecundaria: "Suplemento dietario a base de Cafeína en cápsula. Libre de gluten. Sin TACC. 30 CAPS. | 30 SERV. | 200MG CAFFEINA.",
        imagen: "img/caffeine.webp"
    },
    {
        categoria: "Vitaminas",
        nombre: "Vitamina C - 60 Cápsulas",
        precio: 7500,
        modoUso: "Consumir 1 porción diaria (2 cápsulas) o como lo indique su médico.",
        ingredientes: "Vitamina C (Ácido Ascórbico)",
        advertencias: "Supera la ingesta diaria de Vitamina C. Consulte a su médico y/o nutricionista. No consumir en caso de embarazo, mujeres en periodo de lactancia ni en niños. Consumir este producto de acuerdo a las recomendaciones de ingesta diaria establecidas en el rotulo. El consumo de suplementos dietarios no reemplaza una dieta variada y equilibrada. Este producto está indicado para personas que realizan ejercicio físico. Su consumo debe realizarse bajo control médico. Mantener en un lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25ºC",
        descripcionSecundaria: "Suplemento dietario a base de Vitamina C en cápsula. Libre de Gluten 60 cápsulas | 30 servicios",
        imagen: "img/vitamina_c.webp"
    },
    {
        categoria: "ZMA",
        nombre: "STAR - ZMA - 90 Cápsulas",
        precio: 16000,
        descripcionPrincipal: "REAL ZMA contiene la combinación adecuada de los tres elementos claves: Magnesio (como aspartato), Zinc (como monometionina y aspartato) y Vitamina B6. NATURAL | NON-HORMONAL FORMULA Tested for Purity and Potency",
        modoUso: "MUJERES: Tomar 2 cápsulas HOMBRES: Tomar 3 cápsulas. Antes de acostarse, preferentemente con el estómago vacío o como lo indique su especialista.",
        ingredientes: "Magnesio Aspartato, Zinc Monometionina Aspartato, Vitamina B6 (Piridoxina HCI), Dióxido de Silicio, Magnesio Estearato.",
        advertencias: "Suplementa dietas insuficientes, consulte a su médico y/o farmacéutico. No consumir en caso de embarazo, lactancia ni en niños. Menores de 18 años consumir bajo supervisión de un adulto o profesional. Mantener en lugar fresco y seco, fuera del alcance de los niños. No exponer a temperaturas mayores a 25º C.",
        descripcionSecundaria: "Suplemento dietario a base de Zinc Monometionina Aspartato, Magnesio Aspartato y Vitamina B6. 90 CÁPSULAS | P.3 CAP.:30 SERV. | P.2 CAP.:45 SERV. INCREASE MUSCLE STRENGTH AND POWER",
        imagen: "img/ZMA.webp"
    },
    {
        categoria: "ZMA",
        nombre: "ENA - ZMA - 60 Cápsulas",
        precio: 12900,
        descripcionPrincipal: "ZMA es un complemento nutricional formulado para aumentar la masa muscular con una potente mezcla de Zinc, Magnesio y Vitamina B6. El Zinc soporta la función celular, el Magnesio mejora la fuerza y resistencia y la Vitamina B6 ayuda a un mejor descanso. Adecuado para todos los niveles de actividad física desde levantamiento de pesas hasta deportes de resistencia.",
        modoUso: "Tomar 2 cápsulas de ZMA antes de acostarte para optimizar la recuperación y el crecimiento muscular.",
        ingredientes: "Óxido de magnesio, gluconato de zinc, vitamina B6, INS 460i (EST), INS 470i (ANAH).  PUEDE CONTENER DERIVADOS DE LECHE Y SOJA.",
        advertencias: "No apto para menores, diabéticos, mujeres en periodo de embarazo o lactancia",
        descripcionSecundaria: "Zinc: Contribuye a la función celular, el sistema inmunológico y la salud muscular.  Magnesio: Ayuda a mejorar la fuerza y la resistencia muscular, facilita el metabolismo y promueve un sueño reparador.  Vitamina B6: Ayuda a mejorar la calidad del sueño y puede contribuir al aumento de la energía. Presentación: 60 cápsulas de 470 mg c/u.",
        imagen: "img/ZMAENA.webp"
    },
    
    {
        categoria: "Creatina",
        nombre: "Creatina + Electrolitos",
        precio: 24900,
        sabores: ["Pink Lemonade", "Blue Lemonade"],
        descripcionPrincipal: "Aumenta la fuerza y potencia muscular. Mejora la recuperación. Optimiza la hidratación al reponer sales minerales. Creatina + Electrolitos es una combinación que aporta los beneficios de la creatina y optimiza la hidratación al reponer sales minerales. Su fórmula potencia el entrenamiento y brinda soporte energético sostenido. Aporta 5 g de creatina monohidrato micronizada por porción junto con un blend balanceado de electrolitos (sodio, potasio, magnesio y cloruros), ayudando a sostener la función muscular y evitar calambres, fatiga y falta de sales.",
        modoUso: "Diluir un scoop en 200 ml de agua.",
        ingredientes: "Creatina monohidrato, citrato de sodio, magnesio sulfato, cloruro de sodio, cloruro de potasio, ácido cítrico anhidro (ACI), aromatizantes, carmín (COL), sucralosa (370 mg/100 g) (EDU), amarillo ocaso FCF (COL). CONTENIDO: Puede contener derivados de leche y soja.",
        advertencias: "No utilizar en caso de embarazo o lactancia. Mantener fuera del alcance de los niños. Este suplemento no reemplaza una dieta equilibrada. Consultar con un profesional antes de su uso.",
        descripcionSecundaria: "Creatina + electrolitos en polvo. Favorece el crecimiento y desarrollo muscular.",
        imagen: "img/CREAYELEC.webp"
    },
    
    {
        categoria: "Proteina",
        nombre: "100% Whey Protein",
        precio: 39600,
        sabores: ["Vainilla", "Chocolate"],
        descripcionPrincipal: "¡TU PROTEÍNA PARA TODOS LOS DÍAS! Complementá tu alimentación con 100% WHEY, una proteína diseñada para tu consumo diario. Ideal para sumar proteínas en desayunos, meriendas o como snack post entreno. Con 20 g de proteína por porción, es una excelente opción para hombres y mujeres físicamente activos. Favorece la síntesis de masa muscular y es rica en BCAA.",
        modoUso: "Mezclar una porción (scoop) en un shaker ENA con 200 cm³ de agua o leche preferentemente descremada. Agitar bien y consumir en desayunos, meriendas o en cualquier momento del día.",
        ingredientes: 
            "Ingredientes comunes: Proteína de suero de leche, maltodextrina, aromatizantes, acesulfame K (EDU), sucralosa (80 mg/100 g) (EDU). Ambos sabores contienen derivados de leche y soja.\n\n" +
            "Sabor Vainilla: Acesulfame K 90 mg/100 g.\n\n" +
            "Sabor Chocolate: Acesulfame K 150 mg/100 g, contiene cacao en polvo y colorante caramelo (COL). Contiene sulfitos.",
        advertencias: "Edad mínima recomendada: 18 años. No apta para personas con intolerancia a la lactosa o alergia a la leche. Consultar a un profesional de la salud si está embarazada, amamantando o tiene condiciones médicas preexistentes. No exceder la dosis recomendada. No reemplaza una alimentación variada y equilibrada.",
        descripcionSecundaria: "Proteína concentrada en polvo. Para cualquier momento del día: desayunos, meriendas o post entrenamiento. Favorece la síntesis de masa muscular.",
        imagen: "img/ENAPROTEIN.webp"
    },
    {
        categoria: "Pancakes",
        nombre: "CRUDDA BAR AVELLANA CHOCOLATE - 10 barritas",
        precio: 16900,
        sabores: ["Avellana & Chocolate"],
        descripcionPrincipal: "La combinación perfecta para quienes buscan un snack saludable, nutritivo y delicioso. Barra con proteína de arveja, avellana, chocolate y pasta de maní, ideal para consumir en cualquier momento del día. Sin aditivos ni conservantes, con ingredientes naturales y de alta calidad.",
        modoUso: "Se utiliza como un snack nutritivo para consumir en cualquier momento del día: entre comidas, antes o después de entrenar, o como un gusto saludable.",
        ingredientes: "Fibra vegetal, pasta de maní, concentrado de proteína de arveja, pasas de uva, harina de maní, baño de chocolate semiamargo, maní, sorbitol, aislado de proteína de soja, quinoa pop (harina de quinoa), avellana, cacao amargo, sal marina, vitaminas A, D2, E y B12. Espesante: goma acacia. Aromatizante: esencia natural de avellanas. Emulsionante: lecitina de girasol. Antioxidante: tocoferoles. CONTIENE: maní, avellana y derivados de soja. PUEDE CONTENER: leche, almendra, castaña de cajú, nuez, sulfitos y coco.",
        advertencias: "Características principales: sin conservantes ni aditivos artificiales, ricas en proteínas vegetales, fuente de grasas saludables gracias a la avellana y pasta de maní, sabor equilibrado entre dulce y natural. Perfectas para entrenamientos o momentos de energía.",
        descripcionSecundaria: "",
        imagen: "img/CRUDA.webp"
    },
];

//NUEVO DE CHAT//

// ========================================
// VARIABLES GLOBALES
// ========================================
let cart = {};
let currentProduct = null;
let selectedFlavor = "";
let selectedQuantity = 1; // ← AGREGAR ESTA LÍNEA

// ========================================
// RENDERIZAR PRODUCTOS
// ========================================
function renderProducts() {
    const grid = document.getElementById("productsGrid");
    grid.innerHTML = products.map((product, index) => {
        const hasFlavors = product.sabores && product.sabores.length > 0;
        
        const buttonText = hasFlavors ? "Ver sabores" : "Agregar al carrito";
        const buttonAction = hasFlavors 
            ? `openProduct(${index})` 
            : `quickAddToCart(${index}); event.stopPropagation();`;
        
        return `
            <div class="product-card" data-category="${product.categoria}" onclick="openProduct(${index})">
                <div class="product-image">
                    <img src="${product.imagen}" alt="${product.nombre}" onerror="this.src='https://via.placeholder.com/300x300/4a1620/ffffff?text=${encodeURIComponent(product.nombre)}'">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.nombre}</h3>
                    <p class="product-subtitle">${product.descripcionSecundaria}</p>
                    <div class="product-price">$ ${product.precio.toLocaleString("es-AR")}</div>
                </div>
                <div class="quick-add-container">
                    <button class="quick-add-btn" onclick="${buttonAction}">
                        ${buttonText}
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

// ========================================
// ABRIR MODAL DE PRODUCTO
// ========================================
function openProduct(index) {
    currentProduct = products[index];
    selectedFlavor = "";
    selectedQuantity = 1; // ← Resetear cantidad
    
    const modal = document.getElementById("productModal");
    document.getElementById("modalImage").src = currentProduct.imagen;
    document.getElementById("modalName").textContent = currentProduct.nombre;
    document.getElementById("modalPrice").textContent = `$ ${currentProduct.precio.toLocaleString("es-AR")}`;
    
    // Selector de sabores
    const flavorSelector = document.getElementById("modalFlavorSelector");
    if (currentProduct.sabores && currentProduct.sabores.length > 0) {
        const saboresDisponibles = currentProduct.sabores.map(sabor => {
            return `<option value="${sabor}">${sabor}</option>`;
        }).join("");
        
        flavorSelector.innerHTML = `
            <div class="flavor-selector">
                <label>Sabores</label>
                <select id="flavorSelect" onchange="selectedFlavor=this.value">
                    <option value="">Seleccioná un sabor</option>
                    ${saboresDisponibles}
                </select>
            </div>
        `;
    } else {
        flavorSelector.innerHTML = "";
    }

    // ⭐ BORRAR selector de cantidad anterior
    const oldQty = document.querySelector(".quantity-selector");
    if (oldQty) oldQty.remove();
    
    // ← NUEVO: Selector de cantidad
    const quantityHTML = `
        <div class="quantity-selector">
            <label>Cantidad</label>
            <div class="quantity-controls">
                <button class="qty-btn-modal" onclick="changeQuantity(-1)">-</button>
                <span id="modalQuantity" class="quantity-display">1</span>
                <button class="qty-btn-modal" onclick="changeQuantity(1)">+</button>
            </div>
        </div>
    `;
    
    // Insertar selector de cantidad después del selector de sabores
    flavorSelector.insertAdjacentHTML('afterend', quantityHTML);
    
    document.getElementById("modalModoUso").textContent = currentProduct.modoUso;
    document.getElementById("modalIngredientes").textContent = currentProduct.ingredientes;
    document.getElementById("modalAdvertencias").textContent = currentProduct.advertencias;
    
    document.getElementById("modoUsoSection").style.display = currentProduct.modoUso ? "block" : "none";
    document.getElementById("ingredientesSection").style.display = currentProduct.ingredientes ? "block" : "none";
    document.getElementById("advertenciasSection").style.display = currentProduct.advertencias ? "block" : "none";
    
    const fullDesc = document.getElementById("modalFullDescription");
    if (currentProduct.descripcionPrincipal) {
        document.getElementById("modalDescTitle").textContent = currentProduct.nombre;
        document.getElementById("modalDescSubtitle").textContent = currentProduct.descripcionSecundaria;
        document.getElementById("modalDescPrincipal").textContent = currentProduct.descripcionPrincipal;
        fullDesc.style.display = "block";
    } else {
        fullDesc.style.display = "none";
    }
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// ========================================
// CAMBIAR CANTIDAD EN MODAL
// ========================================
function changeQuantity(change) {
    selectedQuantity = Math.max(1, selectedQuantity + change);
    document.getElementById("modalQuantity").textContent = selectedQuantity;
}

// ========================================
// CERRAR MODAL
// ========================================
function closeModal() {
    document.getElementById("productModal").classList.remove("active");
    document.body.style.overflow = "auto";
}

// ========================================
// TOGGLE SECCIONES COLAPSABLES
// ========================================
function toggleCollapsible(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector("span");
    content.classList.toggle("active");
    icon.textContent = content.classList.contains("active") ? "-" : "+";
}

// ========================================
// AGREGAR AL CARRITO DESDE MODAL
// ========================================
function addToCartFromModal(showPopup = true) {
    if (!currentProduct) return;
    
    if (currentProduct.sabores && currentProduct.sabores.length > 0 && !selectedFlavor) {
        alert("Por favor seleccioná un sabor antes de agregar al carrito");
        return;
    }
    
    const productName = currentProduct.sabores && currentProduct.sabores.length > 0 
        ? `${currentProduct.nombre} - ${selectedFlavor}` 
        : currentProduct.nombre;
    
    if (cart[productName]) {
        cart[productName].quantity += selectedQuantity;
    } else {
        cart[productName] = {
            price: currentProduct.precio,
            quantity: selectedQuantity,
            image: currentProduct.imagen
        };
    }
    
    updateCart();

    // ⭐ SOLO mostrar popup si showPopup = true (Agregar al carrito)
    if (showPopup) {
        showAddedToCartPopup(productName, selectedQuantity);
    }
}


// ========================================
// MOSTRAR POPUP AÑADIDO AL CARRITO
// ========================================
function showAddedToCartPopup(productName, quantity) {
    // Remover popup anterior si existe
    const existingPopup = document.getElementById("addedToCartPopup");
    if (existingPopup) existingPopup.remove();
    
    const popup = document.createElement("div");
    popup.id = "addedToCartPopup";
    popup.className = "added-to-cart-popup";
    popup.innerHTML = `
        <div class="popup-content">
            <div class="popup-check">✓</div>
            <div class="popup-message">Añadido al carrito</div>
            <div class="popup-product-info">
                <strong>${quantity}x</strong> ${productName}
            </div>
            <div class="popup-buttons">
                <button class="popup-btn-secondary" onclick="closeAddedPopup()">Seguir comprando</button>
                <button class="popup-btn-primary" onclick="closeAddedPopup(); toggleCart();">Ver carrito</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(popup);
    
    // Auto cerrar después de 5 segundos
    setTimeout(() => {
        if (document.getElementById("addedToCartPopup")) {
            closeAddedPopup();
        }
    }, 5000);
}

function closeAddedPopup() {
    const popup = document.getElementById("addedToCartPopup");
    if (popup) {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 300);
    }
}

// ========================================
// AGREGAR AL CARRITO RAPIDAMENTE (SIN MODAL)
// ========================================
function quickAddToCart(index) {
    const product = products[index];
    
    if (cart[product.nombre]) {
        cart[product.nombre].quantity++;
    } else {
        cart[product.nombre] = {
            price: product.precio,
            quantity: 1
        };
    }
    
    updateCart();
    showNotification("✓ Producto agregado al carrito");
}

// ========================================
// COMPRAR AHORA
// ========================================
function buyNow() {
    // intentá agregar
    const before = Object.keys(cart).length;

    addToCartFromModal(false);

    // si NO cambió el carrito → no cerrar modal
    const after = Object.keys(cart).length;

    if (before === after) {
        // no se agregó → falta sabor → quedarse en el modal
        return;
    }

    // si cambió → sí cerrar modal y abrir carrito
    closeModal();
    setTimeout(() => toggleCart(), 300);
}


// ========================================
// FILTRAR POR CATEGORIA
// ========================================
function filterCategory(category) {
    document.querySelectorAll(".category-link").forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
    
    const cards = document.querySelectorAll(".product-card");
    cards.forEach(card => {
        if (category === "all") {
            card.classList.remove("hidden");
        } else {
            const cardCategory = card.getAttribute("data-category");
            if (cardCategory === category) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }
        }
    });
}

// ========================================
// TOGGLE CARRITO
// ========================================
function toggleCart() {
    document.getElementById("cartModal").classList.toggle("active");
}

// ========================================
// ACTUALIZAR CARRITO
// ========================================
function updateCart() {
    const cartItemsDiv = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");
    
    let totalItems = 0;
    let totalPrice = 0;
    let html = "";
    
    for (let productName in cart) {
        const item = cart[productName];
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
        
        html += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div class="cart-item-name">${productName}</div>
                    <div class="cart-item-price">$ ${item.price.toLocaleString("es-AR")}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="removeFromCart('${productName.replace(/'/g, "\\'")}')">-</button>
                    <span style="font-weight: 600;">${item.quantity}</span>
                    <button class="qty-btn" onclick="addToCart('${productName.replace(/'/g, "\\'")}', ${item.price})">+</button>
                </div>
            </div>
        `;
    }
    
    if (html === "") {
        html = '<div class="empty-cart">Tu carrito está vacío 🛒<br><br>¡Agregá productos para comenzar!</div>';
    }
    
    cartItemsDiv.innerHTML = html;
    cartCount.textContent = totalItems;
    cartTotal.textContent = `$ ${totalPrice.toLocaleString("es-AR")}`;
}

// ========================================
// AGREGAR AL CARRITO
// ========================================
function addToCart(productName, price) {
    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = {
            price: price,
            quantity: 1
        };
    }
    updateCart();
}

// ========================================
// QUITAR DEL CARRITO
// ========================================
function removeFromCart(productName) {
    if (cart[productName]) {
        cart[productName].quantity--;
        if (cart[productName].quantity === 0) {
            delete cart[productName];
        }
    }
    updateCart();
}

// ========================================
// VACIAR CARRITO
// ========================================
function emptyCart() {
    if (Object.keys(cart).length === 0) {
        alert("Tu carrito ya está vacío");
        return;
    }
    
    if (confirm("¿Estás seguro que querés vaciar el carrito?")) {
        cart = {};
        updateCart();
        showNotification("🗑️ Carrito vaciado");
    }
}

// ========================================
// CHECKOUT POR WHATSAPP
// ========================================
function checkout() {
    if (Object.keys(cart).length === 0) {
        alert("Tu carrito está vacío. ¡Agregá productos primero!");
        return;
    }
    
    let message = "¡Hola! Quiero hacer un pedido:%0A%0A";
    let total = 0;
    
    for (let productName in cart) {
        const item = cart[productName];
        message += `• ${item.quantity}x ${productName} - $ ${(item.price * item.quantity).toLocaleString("es-AR")}%0A`;
        total += item.price * item.quantity;
    }
    
    message += `%0A*Total: $ ${total.toLocaleString("es-AR")}*%0A%0A¿Cómo coordino el pago y envío?`;
    window.open(`https://wa.me/5491176186937?text=${message}`, "_blank");
}

// ========================================
// ABRIR WHATSAPP
// ========================================
function openWhatsApp() {
    window.open("https://wa.me/5491176186937?text=¡Hola! Tengo una consulta sobre productos.", "_blank");
}

// ========================================
// MOSTRAR NOTIFICACION
// ========================================
function showNotification(text) {
    const notification = document.createElement("div");
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #4a1620;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = text;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = "slideOut 0.3s ease-in";
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Agregar animaciones
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(400px); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(400px); opacity: 0; }
    }
`;
document.head.appendChild(style);

// ========================================
// INICIALIZAR
// ========================================
renderProducts();
updateCart();

































