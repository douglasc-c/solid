# APP

GymPass style app.

## RFs (Requisitos Funcionais)

- [x] Deve ser possível se cadastrar;
- [x] Deve ser possível se autenticar;
- [x] Deve ser possível obter o perfil de um usuário logago;
- [x] Deve ser possível obter o numero de check-ins realizados pelo usuarios logado;
- [x] Deve ser possível o usuario obter seu historico de check-ins;
- [ ] Deve ser possível o usuario buscar academias proxima;
- [x] Deve ser possível o usuario buscar academias pelo nome;
- [x] Deve ser possível o usuario realizar check-in em uma academia
- [ ] Deve ser possivel validar o check-in de um usuario;
- [x] Deve ser possivel cadastrar uma academia;

## RNs ( Regra de negocio)

- [x] O usuário nao pode se cadastrar com email duplicado;
- [x] O usuário nao pode fazer 2 check-ins no mesmo dia;
- [x] O usuário nao pode fazer o check-ins se nao estiver perto 100m da academia
- [ ] O check-in só pode ser validade até 20 mintuos após criado;
- [ ] O check-in só pode ser validade pelo administradores;
- [ ] A academia so pode ser cadatrada por administradores

## RNF (Requisitos nao funciona)

- [x] A senha do usuario precisa estar criptografadas;
- [x] Os dados da aplicações precisam estar persistidos em um banco PostgreSQL
- [x] Todas listas de dados preisam estar paginadas com 20 itens por pagina
- [ ] O usuario deve ser identificado por um JWT (JSON Web Token)