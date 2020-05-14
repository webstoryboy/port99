<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <?php
        include $_SERVER['DOCUMENT_ROOT'].'/pro1/common/session.php';
        unset($_SESSION['memberID']);
        unset($_SESSION['nickName']);
        echo "logout 되었습니다.";
        echo "<a href='/pro1/index.php'>메인으로 이동</a>";
    ?>
</body>
</html>