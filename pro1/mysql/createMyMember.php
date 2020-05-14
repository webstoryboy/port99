<?php
    include 'connect.php';

    $sql = "CREATE TABLE myMember(";
    $sql .= "myMemberID int unsigned auto_increment comment '고객의 고유 번호',";
    $sql .= "userId varchar(15) not null comment '고객의 아이디',";
    $sql .= "name varchar(10) not null comment '고객명',";
    $sql .= "password varchar(30) not null comment '고객의 비밀번호',";
    $sql .= "phone varchar(13) not null comment '고객의 휴대전화 번호',";
    $sql .= "email varchar(30) not null comment '고객의 이메일 주소',";
    $sql .= "birthDay char(10) not null comment '고객의 생일',";
    $sql .= "gender enum('m','w','x') default 'x' comment '고객 성별',";
    $sql .= "regTime datetime not null comment '회원가입 시간',";
    $sql .= "primary key(myMemberID))";
    $sql .= "charset=utf8 comment='고객 정보 테이블';";

    $res = $dbConnect->query($sql);

    if ( $res ) {
        echo "Create Table Success";
    } else {
        echo "Create Table Fales";
    }
?>