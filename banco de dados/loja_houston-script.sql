create table usuario(
id_usuario int primary key auto_increment,
nome_usuario varchar (100) not null,
senha_usuario varchar(255) not null,
email_usuario varchar(100) not null,
cpf_usuario varchar(15) not null
);

alter table usuario drop column cep_usuario;
select * from usuario;

truncate usuario ;
insert into usuario values(null,'josé','14789','jose.lucas@bandtec.com.br','43627701860','09330402');