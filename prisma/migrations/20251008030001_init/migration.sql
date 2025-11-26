-- CreateTable
CREATE TABLE "Carrera" (
    "id_carrera" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "facultad" TEXT,
    "especialidadId" INTEGER,

    CONSTRAINT "Carrera_pkey" PRIMARY KEY ("id_carrera")
);

-- CreateTable
CREATE TABLE "Materia" (
    "id_materia" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "Materia_pkey" PRIMARY KEY ("id_materia")
);

-- CreateTable
CREATE TABLE "Ciclo" (
    "id_ciclo" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "Ciclo_pkey" PRIMARY KEY ("id_ciclo")
);

-- CreateTable
CREATE TABLE "Estudiante" (
    "id_estudiante" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "cicloId" INTEGER NOT NULL,
    "carreraId" INTEGER NOT NULL,

    CONSTRAINT "Estudiante_pkey" PRIMARY KEY ("id_estudiante")
);

-- CreateTable
CREATE TABLE "Docente" (
    "id_docente" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "especialidadId" INTEGER,
    "carreraId" INTEGER,

    CONSTRAINT "Docente_pkey" PRIMARY KEY ("id_docente")
);

-- CreateTable
CREATE TABLE "Especialidad" (
    "id_especialidad" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Especialidad_pkey" PRIMARY KEY ("id_especialidad")
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_email_key" ON "Estudiante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Docente_email_key" ON "Docente"("email");

-- AddForeignKey
ALTER TABLE "Carrera" ADD CONSTRAINT "Carrera_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidad"("id_especialidad") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Materia" ADD CONSTRAINT "Materia_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ciclo" ADD CONSTRAINT "Ciclo_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_cicloId_fkey" FOREIGN KEY ("cicloId") REFERENCES "Ciclo"("id_ciclo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estudiante" ADD CONSTRAINT "Estudiante_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id_carrera") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docente" ADD CONSTRAINT "Docente_especialidadId_fkey" FOREIGN KEY ("especialidadId") REFERENCES "Especialidad"("id_especialidad") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Docente" ADD CONSTRAINT "Docente_carreraId_fkey" FOREIGN KEY ("carreraId") REFERENCES "Carrera"("id_carrera") ON DELETE SET NULL ON UPDATE CASCADE;
