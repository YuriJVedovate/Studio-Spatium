use StudioSpatium;

create table login(
id int primary key auto_increment ,
email varchar(45),
Apelido varchar(45),
Senha varchar(45)
);

create table mensagem(
id_mensagem int primary key auto_increment,
usuario int,
mensagem varchar(250),
foreign key (usuario) references login(id)
);
