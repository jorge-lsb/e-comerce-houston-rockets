create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar (100) not null,
senha_usuario varchar(255) not null,
email_usuario varchar(100) not null,
cpf_usuario varchar(15) not null,
cep_usuario varchar(10) not null
);

select * from usuario;

