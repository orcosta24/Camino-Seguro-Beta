-- Creación de la tabla Usuario
CREATE TABLE Usuario (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    CorreoElectronico VARCHAR(100) UNIQUE,
    Contrasena VARCHAR(100),
    Ubicacion VARCHAR(255),
    NumeroTelefono VARCHAR(20),
    Rol VARCHAR(20),
    TipoSuscripcion VARCHAR(20),
    FechaRegistro DATE
);

-- Creación de la tabla SituacionEmergencia
CREATE TABLE SituacionEmergencia (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    TipoEmergencia VARCHAR(50),
    FechaHoraEmergencia DATETIME,
    Ubicacion VARCHAR(255),
    Estado VARCHAR(20),
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(ID)
);

-- Creación de la tabla ConsejeroExperto
CREATE TABLE ConsejeroExperto (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50),
    Apellido VARCHAR(50),
    CorreoElectronico VARCHAR(100) UNIQUE,
    Especializacion VARCHAR(100),
    Estado VARCHAR(20)
);

-- Creación de la tabla RecursosAyuda
CREATE TABLE RecursosAyuda (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NombreInstitucion VARCHAR(100),
    TipoRecurso VARCHAR(50),
    Ubicacion VARCHAR(255),
    NumeroTelefono VARCHAR(20)
);

-- Creación de la tabla AlertaComunitaria
CREATE TABLE AlertaComunitaria (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    UsuarioID INT,
    TipoAlerta VARCHAR(50),
    Ubicacion VARCHAR(255),
    FechaHoraAlerta DATETIME,
    Descripcion TEXT,
    FOREIGN KEY (UsuarioID) REFERENCES Usuario(ID)
);
