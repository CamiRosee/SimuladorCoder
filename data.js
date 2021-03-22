let estado = {
    historia: '',
    nivel: 0,
    miembro: '',
    stat: '',
    valor: 0,
    pasion: 0,
    empatia: 0,
    stamina: 0,
    sabiduria: 0,
    selectedNivelArray: [],
    cartasElegidas: []
}

//-------------------------NIVELES-------------------------------------

function Nivel(historia, nivel, stage, slots, miembro, empatia, pasion, stamina, sabiduria, unaestrella, dosestrellas, tresestrellas) {
    this.historia = historia
    this.nivel = nivel
    this.stage = stage
    this.slots = slots
    this.miembro = miembro
    this.empatia = empatia
    this.pasion = pasion
    this.stamina = stamina
    this.sabiduria = sabiduria
    this.unaestrella = unaestrella   
    this.dosestrellas = dosestrellas
    this.tresestrellas = tresestrellas
}

//historia y miembro tal vez puedan simplificarse porque en la principal pueden usarse todos pero en las individuales de cada uno solo las de ese mismo personaje se pueden usar


// NIVELES GRUPALES 

let nivelPrincipal = []

let uno2 = new Nivel("principal", 1, 2, 1, "todos", 1, 1.8, 1, 1, 2078, 2230, 2312)
nivelPrincipal.push(uno2)

let uno4 = new Nivel("principal", 1, 4, 1, "todos", 1, 1, 1, 1.8, 2174, 2280, 2326)
nivelPrincipal.push(uno4)

let uno6 = new Nivel("principal", 1, 6, 1, "todos", 1.5, 1, 1, 1, 2250, 2360, 2481)
nivelPrincipal.push(uno6)

let uno8 = new Nivel("principal", 1, 8, 1, "todos", 1, 1.5, 1.5, 1, 2320, 2365, 2636)
nivelPrincipal.push(uno8)

let uno10 = new Nivel("principal", 1, 10, 2, "todos", 1, 1.5, 1, 1.5, 4000, 4700, 6150)
nivelPrincipal.push(uno10)

let uno12 = new Nivel("principal", 1, 12, 2, "todos", 1.5, 1, 1, 1.5, 4200, 4800, 6250)
nivelPrincipal.push(uno12)

let uno14 = new Nivel("principal", 1, 14, 2, "todos", 1.5, 1.5, 1, 1, 4400, 5000, 6470)
nivelPrincipal.push(uno14)

let uno17 = new Nivel("principal", 1, 17, 2, "todos", 1.5, 1, 1.5, 1, 4700, 5001, 6680)
nivelPrincipal.push(uno17)

let uno18 = new Nivel("principal", 1, 18, 2, "todos", 1, 1.5, 1.5, 1, 4800, 5940, 6990)
nivelPrincipal.push(uno18)

let uno20 = new Nivel("principal", 1, 20, 2, "todos", 1.5, 1, 1, 1.5, 6000, 7150, 8200)
nivelPrincipal.push(uno20)

let dos2= new Nivel("principal", 2, 2, 2, "todos", 1.8, 1, 0.5, 1.5, 6480, 7084, 8198) 
nivelPrincipal.push(dos2)

let dos4 = new Nivel("principal", 2, 4, 2, "todos", 1, 1.5, 1.8, 0.5, 6680, 7296, 8928)
nivelPrincipal.push(dos4)

let dos5 = new Nivel("principal", 2, 5, 2, "todos", 1.8, 0.5, 1.5, 1, 6786, 7496, 9042)
nivelPrincipal.push(dos5)

let dos7 = new Nivel("principal", 2, 7, 2, "todos", 1.5, 1, 0.5, 1.8, 6988, 7794, 9368)
nivelPrincipal.push(dos7)

let dos8 = new Nivel("principal", 2, 8, 2, "todos", 0.5, 1.8, 1, 1.5, 7084, 7996, 9476)
nivelPrincipal.push(dos8)

let dos10 = new Nivel("principal", 2, 10, 2, "todos", 1.8, 0.5, 1, 1.5, 7296, 8198, 9696)
nivelPrincipal.push(dos10)

let dos12 = new Nivel("principal", 2, 12, 2, "todos", 1.5, 1.8, 1, 0.5, 7622, 9054, 10042)
nivelPrincipal.push(dos12)

let dos15 = new Nivel("principal", 2, 15, 2, "todos", 1.5, 1, 0.5, 1.8, 7920, 9168, 10148)
nivelPrincipal.push(dos15)

let dos17 = new Nivel("principal", 2, 17, 2, "todos", 0.5, 1, 1.8, 1.5, 8122, 9494, 10368)
nivelPrincipal.push(dos17)

let dos19 = new Nivel("principal", 2, 19, 2, "todos", 1, 1.8, 1.5, 0.5, 8324, 9600, 10484)
nivelPrincipal.push(dos19)

let tres1 = new Nivel("principal", 3, 1, 3, "todos", 0.5, 1.5, 1.8, 0.8, 13191, 14191, 15552)
nivelPrincipal.push(tres1)

let tres2 = new Nivel("principal", 3, 2, 3, "todos", 1.8, 1.5, 0.5, 0.8, 13356, 14613, 15717)
nivelPrincipal.push(tres2)

let tres5 = new Nivel("principal", 3, 5, 3, "todos", 1.8, 0.5, 1.5, 0.8, 13827, 14766, 16035)
nivelPrincipal.push(tres5)

let tres6 = new Nivel("principal", 3, 6, 3, "todos", 1.5, 0.8, 0.5, 1.8, 13977, 15081, 17595)
nivelPrincipal.push(tres6)

let tres8 = new Nivel("principal", 3, 8, 3, "todos", 0.5, 1.5, 0.8, 1.8, 14475, 15429, 17952)
nivelPrincipal.push(tres8)

let tres10 = new Nivel("principal",3, 10, 3, "todos", 1.8, 0.5, 0.8, 1.5, 14793, 15732, 18297)
nivelPrincipal.push(tres10)

let tres11 = new Nivel("principal", 3, 11, 3, "todos", 0.5, 0.8, 1.8, 1.5, 14946, 15897, 18465)
nivelPrincipal.push(tres11)

let tres13 = new Nivel("principal", 3, 13, 3, "todos", 1.5, 1.8, 0.8, 0.5, 15261, 16215, 18630)
nivelPrincipal.push(tres13)

let tres14 = new Nivel("principal", 3, 14, 3, "todos", 0.5, 1.5, 1.8, 0.8, 15609, 17955, 19155)
nivelPrincipal.push(tres14)

let tres16 = new Nivel("principal", 3, 16, 3,"todos", 0.8, 0.5, 1.5, 1.8, 15912,18132, 19500)
nivelPrincipal.push(tres16)

let tres17 = new Nivel("principal", 3, 17, 3, "todos", 1.5, 1.8, 0.8, 0.5, 16077, 18477, 19665)
nivelPrincipal.push(tres17)

let tres19 = new Nivel("principal", 3, 19, 3, "todos", 0.5, 1.5, 1.8, 0.8, 16395, 18645, 19845)
nivelPrincipal.push(tres19)


// NIVELES INDIVIDUALES

//RM

let nivelesRM = []

let RMuno3 = new Nivel("RM", 1, 3, 1, "RM", 1.5, 0.3, 2, 0.3, 2595, 2808, 3021)
nivelesRM.push(RMuno3)

let RMuno5 = new Nivel("RM", 1, 5, 1, "RM", 2, 1.5, 0.3, 0.3, 3194, 3456, 3719)
nivelesRM.push(RMuno5)

let RMuno7 = new Nivel("RM", 1, 7, 1, "RM", 0.3, 0.3, 1.5, 2, 3793, 4105, 4416)
nivelesRM.push(RMuno7)

let RMuno9 = new Nivel("RM", 1, 9, 1, "RM", 0.3, 2, 0.3, 1.5, 4391, 4752, 5113)
nivelesRM.push(RMuno9)

let RMuno11 = new Nivel("RM", 1, 11, 1, "RM", 1.5, 0.3, 2, 0.3, 5203, 5613, 6023)
nivelesRM.push(RMuno11)

let RMdos2 = new Nivel("RM", 2, 2, 2, "RM", 2, 1.7, 0.1, 0.3, 11176, 12178, 13180)
nivelesRM.push(RMdos2)

let RMdos4 = new Nivel("RM", 2, 4, 2, "RM", 0.3, 0.1, 1.7, 2, 11411, 12431, 13451)
nivelesRM.push(RMdos4)

let RMdos6 = new Nivel("RM", 2, 6, 2, "RM", 0.1, 1.7, 2, 0.3, 11644, 12682, 13720)
nivelesRM.push(RMdos6)

let RMdos9 = new Nivel("RM", 2, 9, 2, "RM", 0.3, 2, 0.1, 1.7, 11968, 13033, 14098)
nivelesRM.push(RMdos9)

let RMdos11 = new Nivel("RM", 2, 11, 2, "RM", 0.3, 0.1, 1.7, 2, 12201, 13284, 14368)
nivelesRM.push(RMdos11)


//JIN

let nivelesJin = []

let Jinuno2 = new Nivel("Jin", 1, 2, 1, "Jin", 2, 0.3, 0.3, 1.5, 2554, 2763, 2972)
nivelesJin.push(Jinuno2)

let Jinuno4 = new Nivel("Jin", 1, 4, 1, "Jin", 0.3, 2, 0.3, 1.5, 3153, 3411, 3670)
nivelesJin.push(Jinuno4)

let Jinuno7 = new Nivel("Jin", 1, 7, 1, "Jin", 1.5, 0.3, 2, 0.3, 3793, 4105, 4416)
nivelesJin.push(Jinuno7)

let Jinuno9 = new Nivel("Jin", 1, 9, 1, "Jin", 0.3, 1.5, 0.3, 2, 4391, 4752, 5113)
nivelesJin.push(Jinuno9)

let Jinuno12 = new Nivel("Jin", 1, 12, 1, "Jin", 0.3, 2, 1.5, 0.3, 5244, 5658, 6072)
nivelesJin.push(Jinuno12)


let Jindos2 = new Nivel("Jin", 2, 2, 2, "Jin", 0.3, 1.7, 0.1, 2, 11176, 12178, 13180)
nivelesJin.push(Jindos2)

let Jindos5 = new Nivel("Jin", 2, 5, 2, "Jin", 0.1, 0.3, 1.7, 2, 11501, 12530, 13559)
nivelesJin.push(Jindos5)

let Jindos7 = new Nivel("Jin", 2, 7, 2, "Jin", 0.3, 2, 0.1, 1.7, 11734, 12782, 1329)
nivelesJin.push(Jindos7)

let Jindos9 = new Nivel("Jin", 2, 9, 2, "Jin", 1.7, 0.1, 0.3, 2, 11968, 13033, 14098)
nivelesJin.push(Jindos9)

let Jindos11 = new Nivel("Jin", 2, 11, 2, "Jin", 2, 0.3, 1.7, 0.3, 12201, 13284, 14368)
nivelesJin.push(Jindos11)




//SUGA
let nivelesSuga = []

let Sugauno2 = new Nivel("Suga", 1, 2, 1, "Suga", 0.3, 0.3, 1.5, 2, 2554, 2763, 2972)
nivelesSuga.push(Sugauno2)

let Sugauno5 = new Nivel("Suga", 1, 5, 1, "Suga", 2, 0.3, 0.3, 1.5, 3194, 3456, 3719)
nivelesSuga.push(Sugauno5)

let Sugauno8 = new Nivel("Suga", 1, 8, 1, "Suga", 0.3, 2, 1.5, 0.3, 3834, 4150, 4465)
nivelesSuga.push(Sugauno8)

let Sugauno10 = new Nivel("Suga", 1, 10, 1, "Suga", 2, 0.3, 0.3, 1.5, 4432, 4797, 5162)
nivelesSuga.push(Sugauno10)

let Sugauno12 = new Nivel("Suga", 1, 12, 1, "Suga", 1.5, 0.3, 2, 0.3, 5244, 5658, 6072)
nivelesSuga.push(Sugauno12)

let Sugados3 = new Nivel("Suga", 2, 3, 2, "Suga", 2, 1.7, 0.1, 0.3, 11267, 12278, 13289)
nivelesSuga.push(Sugados3)

let Sugados5 = new Nivel("Suga", 2, 5, 2, "Suga", 0.1, 2, 0.3, 1.7, 11501, 12530, 13559)
nivelesSuga.push(Sugados5)

let Sugados7 = new Nivel("Suga", 2, 7, 2, "Suga", 1.7, 0.3, 0.1, 2, 11734, 12782, 13829)
nivelesSuga.push(Sugados7)

let Sugados9 = new Nivel("Suga", 2, 9, 2, "Suga", 0.3, 1.7, 2, 0.1, 11968, 13033, 14098)
nivelesSuga.push(Sugados9)

let Sugados11 = new Nivel("Suga", 2, 11, 2, "Suga", 2, 0.1, 0.3, 1.7, 12201, 13284, 14368)
nivelesSuga.push(Sugados11)


//JHOPE

let nivelesJhope = []

let jhopeuno3 = new Nivel("j-hope", 1, 3, 1, "j-hope", 0.3, 0.3, 1.5, 2, 2595, 2808, 3021)
nivelesJhope.push(jhopeuno3)

let jhopeuno5 = new Nivel("j-hope", 1, 5, 1, "j-hope", 1.5, 0.3, 2, 0.3, 3194, 3456, 3719)
nivelesJhope.push(jhopeuno5)

let jhopeuno7 = new Nivel("j-hope", 1, 7, 1, "j-hope", 2, 1.5, 0.3, 0.3, 3793, 4105, 4416)
nivelesJhope.push(jhopeuno7)

let jhopeuno9 = new Nivel("j-hope", 1, 9, 1, "j-hope", 0.3, 0.3, 2, 1.5, 4391, 4752, 5113)
nivelesJhope.push(jhopeuno9)

let jhopeuno11 = new Nivel("j-hope", 1, 11, 1, "j-hope", 2, 1.5, .3, 0.3, 5203, 5613, 6023)
nivelesJhope.push(jhopeuno11)


let jhopedos2 = new Nivel("j-hope", 2, 2, 2, "j-hope", 0.1, 2, 0.3, 1.7, 11176, 12178, 13180)
nivelesJhope.push(jhopedos2)

let jhopedos4 = new Nivel("j-hope", 2, 4, 2, "j-hope", 0.3, 0.1, 2, 1.7, 11411, 12431, 13451)
nivelesJhope.push(jhopedos4)

let jhopedos6 = new Nivel("j-hope", 2, 6, 2, "j-hope", 2, 1.7, 0.1, 0.3, 11644, 12682, 13720)
nivelesJhope.push(jhopedos6)

let jhopedos10 = new Nivel("j-hope", 2, 10, 2, "j-hope", 1.7, 0.3, 0.1, 2, 12058, 13132, 14206)
nivelesJhope.push(jhopedos10)

let jhopedos12 = new Nivel("j-hope", 2, 12, 2, "j-hope", 1.7, 2, 0.3, 0.1, 12291, 13384, 14476)
nivelesJhope.push(jhopedos12)


//JIMIN

let nivelesJimin = []

let Jiminuno2 = new Nivel("Jimin", 1, 2, 1, "Jimin",0.3, 1.5, 2, 0.3, 2554, 2763, 2972)
nivelesJimin.push(Jiminuno2)

let Jiminuno5 = new Nivel("Jimin", 1, 5, 1, "Jimin", 0.3, 1.5, 0.3, 2, 3194, 3456, 3719)
nivelesJimin.push(Jiminuno5)

let Jiminuno7 = new Nivel("Jimin", 1, 7, 1, "Jimin", 2, 0.3, 1.5, 0.3, 3793, 4105, 4416)
nivelesJimin.push(Jiminuno7)

let Jiminuno9 = new Nivel("Jimin", 1, 9, 1, "Jimin", 0.3, 2, 0.3, 1.5, 4391, 4752, 5113)
nivelesJimin.push(Jiminuno9)

let Jiminuno11 = new Nivel("Jimin", 1, 11, 1, "Jimin", 1.5, 0.3, 2, 0.3, 5203, 5613, 6023)
nivelesJimin.push(Jiminuno11)

let Jimindos1 = new Nivel("Jimin", 2, 1, 2, "Jimin", 0.1, 2, 1.7, 0.3, 11086, 12079, 13072)
nivelesJimin.push(Jimindos1)

let Jimindos4 = new Nivel("Jimin", 2, 4, 2, "Jimin", 0.3, 1.7, 0.3, 2, 11967, 13037, 14107)
nivelesJimin.push(Jimindos4)

let Jimindos7 = new Nivel("Jimin", 2, 7, 2, "Jimin", 0.1, 0.3, 2, 1.7, 11734, 12782, 13829)
nivelesJimin.push(Jimindos7)

let Jimindos9 = new Nivel("Jimin", 2, 9, 2, "Jimin", 2, 0.3, 1.7, 0.1, 11968, 13033, 14098)
nivelesJimin.push(Jimindos9)

let Jimindos11 = new Nivel("Jimin", 2, 11, 2, "Jimin", 0.3, 2, 1.7, 0.1, 12201, 13284, 14368)
nivelesJimin.push(Jimindos11)


//V

let nivelesV = []

let Vuno2 = new Nivel("V", 1, 2, 1, "V", 0.3, 1.5, 0.3, 2, 2554, 2763, 2972)
nivelesV.push(Vuno2)

let Vuno5 = new Nivel("V", 1, 5, 1, "V", 0.3, 2, 1.5, 0.3, 3194, 3456, 3719)
nivelesV.push(Vuno5)

let Vuno7 = new Nivel("V", 1, 7, 1, "V", 2, 0.3, 0.3, 1.5, 3793, 4105, 4416)
nivelesV.push(Vuno7)

let Vuno10 = new Nivel("V", 1, 10, 1, "V", 1.5, 0.3, 2, 0.3, 4432, 4797, 5162)
nivelesV.push(Vuno10)

let Vuno12 = new Nivel("V", 1, 12, 1, "V", 1.5, 2, 0.3, 0.3, 5244, 5658, 6072)
nivelesV.push(Vuno12)

let Vdos2 = new Nivel("V", 2, 2, 2, "V", 0.1, 0.3, 2, 1.7, 11176, 12178, 13180)
nivelesV.push(Vdos2)

let Vdos4 = new Nivel("V", 2, 4, 2, "V", 0.3, 2, 1.7, 0.1, 11411, 12431, 13451)
nivelesV.push(Vdos4)

let Vdos6 = new Nivel("V", 2, 6, 2, "V", 2, 0.1, 1.7, 0.3, 11644, 12682, 13720)
nivelesV.push(Vdos6)

let Vdos8 = new Nivel("V", 2, 8, 2, "V", 0.1, 1.7, 0.3, 2, 11878, 12934, 13990)
nivelesV.push(Vdos8)

let Vdos10 = new Nivel("V", 2, 10, 2, "V", 0.1, 0.3, 2, 1.7, 12111, 13185, 14259)
nivelesV.push(Vdos10)



//JUNGKOOK

let nivelesJungkook = []

let Jungkookuno2 = new Nivel("Jungkook", 1, 2, 1, "Jungkook", 0.3, 2, 0.3, 1.5, 2554, 2763, 2972)
nivelesJungkook.push(Jungkookuno2)

let Jungkookuno4 = new Nivel("Jungkook", 1, 4, 1, "Jungkook", 1.5, 0.3, 0.3, 2, 3153, 3411, 3670)
nivelesJungkook.push(Jungkookuno4)

let Jungkookuno6 = new Nivel("Jungkook", 1, 6, 1, "Jungkook", 0.3, 1.5, 2, 0.3, 3752, 4060, 4367)
nivelesJungkook.push(Jungkookuno6)

let Jungkookuno9 = new Nivel("Jungkook", 1, 9, 1, "Jungkook", 2, 0.3, 1.5, 0.3, 4391, 4752, 5113)
nivelesJungkook.push(Jungkookuno9)

let Jungkookuno11 = new Nivel("Jungkook", 1, 11, 1, "Jungkook", 0.3, 2, 0.3, 1.5, 5203, 5613, 6023)
nivelesJungkook.push(Jungkookuno11)


let Jungkookdos3 = new Nivel("Jungkook", 2, 3, 2, "Jungkook", 0.3, 0.1, 1.7, 2, 11267, 12278, 13289)
nivelesJungkook.push(Jungkookdos3)

let Jungkookdos5 = new Nivel("Jungkook", 2, 5, 2, "Jungkook", 1.7, 2, 0.1, 0.3, 11501, 12530, 13559)
nivelesJungkook.push(Jungkookdos5)

let Jungkookdos8 = new Nivel("Jungkook", 2, 8, 2, "Jungkook", 0.1, 1.7, 0.3, 2, 11825, 12881, 13937)
nivelesJungkook.push(Jungkookdos8)

let Jungkookdos10 = new Nivel("Jungkook", 2, 10, 2, "Jungkook", 2, 0.3, 0.1, 1.7, 12058, 13132, 14206)
nivelesJungkook.push(Jungkookdos10)

let Jungkookdos12 = new Nivel("Jungkook", 2, 12, 2, "Jungkook", 0.3, 1.7, 2, 0.1, 12291, 13384, 14476)
nivelesJungkook.push(Jungkookdos12)


//-------------------------CARTAS-------------------------------------

function Carta(nombre, miembro, nivel, imagen, empatia, pasion, stamina, sabiduria, bonusempatia, bonuspasion, bonusstamina, bonussabiduria){
    this.nombre = nombre
    this.miembro = miembro
    this.nivel = nivel  //  AGREGAR METODO!! 
    this.imagen = imagen  
    this.empatia = empatia // AGREGAR METODO!! que arranque de cero
    this.pasion = pasion
    this.stamina = stamina
    this.sabiduria = sabiduria
    this.bonusempatia = bonusempatia // estos bonus varian según el bonus diario y el nivel que quiera jugarse
    this.bonuspasion = bonuspasion
    this.bonusstamina = bonusstamina
    this.bonussabiduria = bonussabiduria
}

let todasLasCartas = [];

// RM

let HeartSkipRM = new Carta("Heart Skip RM", "RM", 1, "1 NAM.jpg", 1131, 356, 23, 3049, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria");
let SpringDayRM = new Carta("Summer Day RM", "RM", 1, "2 NAM.jpg", 333, 137, 2640, 304, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadRM = new Carta("Sleepyhead RM", "RM", 1, "3 NAM.jpg", 1004, 1584, 698, 360, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageRM = new Carta("On Stage RM", "RM", 1, "4 NAM.jpg", 295, 48, 565, 2464, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipRM);
todasLasCartas.push(SpringDayRM);
todasLasCartas.push(SleepyheadRM);
todasLasCartas.push(OnStageRM);

let cartasRM = [];

cartasRM.push(HeartSkipRM);
cartasRM.push(SpringDayRM);
cartasRM.push(SleepyheadRM);
cartasRM.push(OnStageRM);

// JIN

let HeartSkipJin = new Carta("Heart Skip Jin", "Jin", 1, "1 JIN.jpg", 47, 2464, 565, 304, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDayJin = new Carta("Spring Day Jin", "Jin", 1, "2 JIN.jpg", 679, 126, 104, 2048, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadJin = new Carta("Sleepyhead Jin", "Jin", 1 ,"3 JIN.jpg", 1540, 521, 560, 272, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageJin = new Carta("On Stage Jin", "Jin", 1, "4 JIN.jpg", 480, 698, 792, 446, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipJin);
todasLasCartas.push(SpringDayJin);
todasLasCartas.push(SleepyheadJin);
todasLasCartas.push(OnStageJin);

let cartasJin = []; 

cartasJin.push(HeartSkipJin);
cartasJin.push(SpringDayJin);
cartasJin.push(SleepyheadJin);
cartasJin.push(OnStageJin);

// SUGA

let HeartSkipSuga = new Carta ("Heart Skip Suga", "Suga", 1, "1 SUGA.jpg", 781, 140, 136, 1848, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDaySuga = new Carta("Spring Day Suga", "Suga", 1, "2 SUGA.jpg", 466, 792, 446, 720, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadSuga = new Carta("Sleepyhead Suga", "Suga", 1, "3 SUGA.jpg", 3093, 507, 464, 485, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageSuga = new Carta("On Stage Suga", "Suga", 1, "4 SUGA.jpg", 280, 560, 1120, 840, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipSuga);
todasLasCartas.push(SpringDaySuga);
todasLasCartas.push(SleepyheadSuga);
todasLasCartas.push(OnStageSuga);

let cartasSuga = [];

cartasSuga.push(HeartSkipSuga);
cartasSuga.push(SpringDaySuga);
cartasSuga.push(SleepyheadSuga);
cartasSuga.push(OnStageSuga);

// JHOPE

let HeartSkipjhope = new Carta("Heart Skip j-hope", "j-hope", 1, "1 HOBI.jpg", 137, 328, 315, 2640, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDayjhope = new Carta("Spring Day j-hope", "j-hope", 1, "2 HOBI.jpg", 136, 840, 130, 1848, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let Sleepyheadjhope = new Carta("Sleepyhead j-hope", "j-hope", 1, "3 HOBI.jpg", 72, 3089, 1048, 335, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStagejhope = new Carta("On Stage j-hope", "j-hope", 1, "4 HOBI.jpg", 660, 582, 600, 558, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipjhope);
todasLasCartas.push(SpringDayjhope);
todasLasCartas.push(Sleepyheadjhope);
todasLasCartas.push(OnStagejhope);

let cartasjhope = [];

cartasjhope.push(HeartSkipjhope);
cartasjhope.push(SpringDayjhope);
cartasjhope.push(Sleepyheadjhope);
cartasjhope.push(OnStagejhope);

// JIMIN

let HeartSkipJimin = new Carta("Heart Skip Jimin", "Jimin", 1, "1 JM.jpg", 5, 3049, 1117, 360, 33, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDayJimin = new Carta("Spring Day Jimin", "Jimin", 1, "2 JM.jpg", 4, 320, 310, 2464, 298, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadJimin = new Carta("Sleepyhead Jimin", "Jimin", 1, "3 JM.jpg", 140, 1848, 781, 136, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageJimin = new Carta("On Stage Jimin", "Jimin", 1, "4 JM.jpg", 698, 480, 446, 792, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipJimin);
todasLasCartas.push(SpringDayJimin);
todasLasCartas.push(SleepyheadJimin);
todasLasCartas.push(OnStageJimin);

let cartasJimin = [];

cartasJimin.push(HeartSkipJimin);
cartasJimin.push(SpringDayJimin);
cartasJimin.push(SleepyheadJimin);
cartasJimin.push(OnStageJimin);

// V

let HeartSkipV = new Carta("Heart Skip V", "V", 1, "1 V.jpg", 298, 2464, 310, 320, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDayV = new Carta("Spring Day V", "V", 1, "2 V.jpg", 168, 130, 1848, 815,  "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadV = new Carta("Sleepyhead V", "V", 1, "3 V.jpg", 480, 446, 792, 698, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageV = new Carta("On Stage V", "V", 1, "4 V.jpg", 670, 360, 349, 2772, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipV);
todasLasCartas.push(SpringDayV);
todasLasCartas.push(SleepyheadV);
todasLasCartas.push(OnStageV);

let cartasV = [];

cartasV.push(HeartSkipV);
cartasV.push(SpringDayV);
cartasV.push(SleepyheadV);
cartasV.push(OnStageV);

//JUNGKOOK

let HeartSkipJungkook = new Carta("Heart Skip Jungkook", "Jungkook", 1, "1 JK.jpg", 1258, 3089, 116, 125, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SpringDayJungkook = new Carta("Spring Day Jungkook", "Jungkook", 1, "2 JK.jpg", 600, 388, 660, 372,  "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let SleepyheadJungkook = new Carta("Sleepyhead Junhkook", "Jungkook", 1, "3 JK.jpg", 1600, 352, 931, 298, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")
let OnStageJungkook = new Carta("On Stage Jungkook", "Jungkook", 1, "4 JK.jpg", 310, 352, 1190, 1280, "this.empatia*Nivel.empatia", "this.pasion*Nivel.pasion", "this.stamina*Nivel.stamina", "this.sabiduria.Nivel.sabiduria")

todasLasCartas.push(HeartSkipJungkook);
todasLasCartas.push(SpringDayJungkook);
todasLasCartas.push(SleepyheadJungkook);
todasLasCartas.push(OnStageJungkook);

let cartasJungkook = [];

cartasJungkook.push(HeartSkipJungkook);
cartasJungkook.push(SpringDayJungkook);
cartasJungkook.push(SleepyheadJungkook);
cartasJungkook.push(OnStageJungkook);

// ------------------------RESULTADOS---------------------------------------

function Resultado(historia, imagen, estrellas, mensaje, recomendacion){
    this.historia = historia
    this.imagen = imagen
    this.estrellas = estrellas
    this.mensaje = mensaje 
    this.recomendacion = recomendacion  
}

//PRINCIPAL

let todos0 = new Resultado("principal", "NoLlega7.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let todos1 = new Resultado("principal", "1Estrella7.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let todos2 = new Resultado("principal", "2Estrellas7.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let todos3 = new Resultado("principal", "3Estrellas7.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])



//RM

let rm0 = new Resultado("RM", "NoLlegaRM.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let rm1 = new Resultado("RM", "1EstrellaRM.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let rm2 = new Resultado("RM", "2EstrellasRM.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let rm3 = new Resultado("RM", "3EstrellasRM.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//JIN

let jin0 = new Resultado("Jin", "NoLlegaJin.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let jin1 = new Resultado("Jin", "1EstrellaJin.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let jin2 = new Resultado("Jin", "2EstrellasJin.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let jin3 = new Resultado("Jin", "3EstrellasJin.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//SUGA

let suga0 = new Resultado("Suga", "NoLlegaSuga.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let suga1 = new Resultado("Suga", "1EstrellaSuga.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let suga2 = new Resultado("Suga", "2EstrellasSuga.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let suga3 = new Resultado("Suga", "3EstrellasSuga.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//JHOPE

let jhope0 = new Resultado("j-hope", "NoLlegaJhope.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let jhope1 = new Resultado("j-hope", "1EstrellaJhope.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let jhope2 = new Resultado("j-hope", "2EstrellasJhope.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let jhope3 = new Resultado("j-hope", "3EstrellasJhope.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//JIMIN

let jimin0 = new Resultado("Jimin", "NoLlegaJimin.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let jimin1 = new Resultado("Jimin", "1EstrellaJimin.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let jimin2 = new Resultado("Jimin", "2EstrellasJimin.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let jimin3 = new Resultado("Jimin", "3EstrellasJimin.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//V

let v0 = new Resultado("V", "NoLlegaV.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let v1 = new Resultado("V", "1EstrellaV.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let v2 = new Resultado("V", "2EstrellasV.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let v3 = new Resultado("V", "3EstrellasV.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])

//JUNGKOOK

let jungkook0 = new Resultado("Jungkook", "NoLlegaJungkook.jpg", "&#9734 &#9734 &#9734", "No llegás :( Intentá subir de nivel las siguientes cartas para llegar al mínimo:", [])
let jungkook1 = new Resultado("Jungkook", "1EstrellaJungkook.jpg", "&#9733 &#9734 &#9734", "Ganás con una estrella! Usá estas cartas:", [])
let jungkook2 = new Resultado("Jungkook", "2EstrellasJungkook.jpg", "&#9733 &#9733 &#9734", "Dos estrellas! Genial! Tenés que usar estas cartas:", [])
let jungkook3 = new Resultado("Jungkook", "3EstrellasJungkook.jpg", "&#9733 &#9733 &#9733", "Excelente! Llegás a 3 estrellas usando:", [])