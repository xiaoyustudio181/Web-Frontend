create database `smtest` default character set utf8 collate utf8_general_ci;
use `smtest`;#使用指定数据库
create table `persons`
(
	`id` serial primary key,
	`name` nvarchar(10),
    `gender` bit,
	`age` tinyint,
	`hometown` nvarchar(20),
    `hobbies` varchar(50)
)engine=innodb;

insert into persons(`name`,`gender`,`age`,`hometown`,`hobbies`) values('peter',1,11,'place 1','swimming,walking');
insert into persons(`name`,`gender`,`age`,`hometown`,`hobbies`) values('mary',0,12,'place 2','running');

#drop schema smtest;
#truncate persons;
select * from persons;