# NestJS Medical Management System

This project is a NestJS application with TypeORM for managing medical specialties, doctors, patients, medical histories, prescriptions, and appointments.

## Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- PostgreSQL database

## Step-by-Step Setup from Scratch

### 1. Create project directory

```bash
mkdir nestjs-medical-app
cd nestjs-medical-app
```

### 2. Initialize npm project

```bash
npm init -y
```

### 3. Install NestJS CLI globally (if not already installed)

```bash
npm install -g @nestjs/cli
```

### 4. Create a new NestJS project in the current directory

```bash
nest new . --skip-git --package-manager npm
```

### 3. Install required dependencies

```bash
npm install @nestjs/typeorm typeorm pg @nestjs/mapped-types
```

### 4. Generate modules, controllers, and services for each feature

#### Especialidades (Specialties)

```bash
nest generate module especialidades
nest generate controller especialidades --no-spec
nest generate service especialidades --no-spec
```

#### Medicos (Doctors)

```bash
nest generate module medicos
nest generate controller medicos --no-spec
nest generate service medicos --no-spec
```

#### Pacientes (Patients)

```bash
nest generate module pacientes
nest generate controller pacientes --no-spec
nest generate service pacientes --no-spec
```

#### Historias Clinicas (Medical Histories)

```bash
nest generate module historias-clinicas
nest generate controller historias-clinicas --no-spec
nest generate service historias-clinicas --no-spec
```

#### Recetas (Prescriptions)

```bash
nest generate module recetas
nest generate controller recetas --no-spec
nest generate service recetas --no-spec
```

#### Citas (Appointments)

```bash
nest generate module citas
nest generate controller citas --no-spec
nest generate service citas --no-spec
```

### 5. Create entities, DTOs, and update files

#### Create entity files

Create the following entity files in their respective directories:

- `src/especialidades/especialidad.entity.ts`
- `src/medicos/medico.entity.ts`
- `src/pacientes/paciente.entity.ts`
- `src/historias-clinicas/historia-clinica.entity.ts`
- `src/recetas/receta.entity.ts`
- `src/citas/cita.entity.ts`

#### Create DTO directories and files

For each module, create a `dto` directory and the following files:

- `src/<module>/dto/create-<module>.dto.ts`
- `src/<module>/dto/update-<module>.dto.ts`

#### Update app.module.ts

Update `src/app.module.ts` to include TypeORM configuration and import all modules.

#### Update main.ts

Create or update `src/main.ts` to bootstrap the application.

### 6. Configure TypeScript (tsconfig.json)

Ensure `tsconfig.json` is configured with the necessary options for decorators and TypeORM.

### 7. Set up the database

Make sure PostgreSQL is running and create a database named 'nestdb' with user 'user_nest' and password '0000'.

### 8. Run the application

```bash
npm run start:dev
```

The application will be available at http://localhost:3000.

## API Endpoints

- Especialidades: `/especialidades`
- Medicos: `/medicos`
- Pacientes: `/pacientes`
- Historias Clinicas: `/historias-clinicas`
- Recetas: `/recetas`
- Citas: `/citas`

Each module supports standard CRUD operations (GET, POST, PATCH, DELETE).

## Project Structure

```
src/
├── app.module.ts
├── main.ts
├── especialidades/
│   ├── dto/
│   │   ├── create-especialidad.dto.ts
│   │   └── update-especialidad.dto.ts
│   ├── especialidad.entity.ts
│   ├── especialidades.controller.ts
│   ├── especialidades.module.ts
│   └── especialidades.service.ts
├── medicos/
│   ├── dto/
│   │   ├── create-medico.dto.ts
│   │   └── update-medico.dto.ts
│   ├── medico.entity.ts
│   ├── medicos.controller.ts
│   ├── medicos.module.ts
│   └── medicos.service.ts
├── pacientes/
│   ├── dto/
│   │   ├── create-paciente.dto.ts
│   │   └── update-paciente.dto.ts
│   ├── paciente.entity.ts
│   ├── pacientes.controller.ts
│   ├── pacientes.module.ts
│   └── pacientes.service.ts
├── historias-clinicas/
│   ├── dto/
│   │   ├── create-historia-clinica.dto.ts
│   │   └── update-historia-clinica.dto.ts
│   ├── historia-clinica.entity.ts
│   ├── historias-clinicas.controller.ts
│   ├── historias-clinicas.module.ts
│   └── historias-clinicas.service.ts
├── recetas/
│   ├── dto/
│   │   ├── create-receta.dto.ts
│   │   └── update-receta.dto.ts
│   ├── receta.entity.ts
│   ├── recetas.controller.ts
│   ├── recetas.module.ts
│   └── recetas.service.ts
└── citas/
    ├── dto/
    │   ├── create-cita.dto.ts
    │   └── update-cita.dto.ts
    ├── cita.entity.ts
    ├── citas.controller.ts
    ├── citas.module.ts
    └── citas.service.ts
