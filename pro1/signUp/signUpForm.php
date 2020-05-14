<!doctype html>
<html lang="ko">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Signin Template · Bootstrap</title>

    <!-- Bootstrap core CSS -->
    <link href="../dist/css/bootstrap.min.css" rel="stylesheet">



    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }
        
        .form-signin {
          width: 100%;
          max-width: 330px;
          padding: 15px;
          margin: auto;
        }
        .form-signin .checkbox {
          font-weight: 400;
        }
        .form-signin .form-control {
          position: relative;
          box-sizing: border-box;
          height: auto;
          padding: 10px;
          font-size: 16px;
        }
        .form-signin .form-control:focus {
          z-index: 2;
        }
        .form-signin input[type="email"] {
          margin-bottom: -1px;
          border-bottom-right-radius: 0;
          border-bottom-left-radius: 0;
        }
        .form-signin input[type="password"] {
          margin-bottom: 10px;
          border-top-left-radius: 0;
          border-top-right-radius: 0;
        }

    </style>
    <!-- Custom styles for this template -->
    <link href="signin.css" rel="stylesheet">
</head>

<body class="text-center">
    <form class="form-signin" name="signUp" method="post" action="signUpSave.php"> 

        <h1 class="h3 mb-3 font-weight-normal">회원가입1</h1>
        
        <label for="inputEmail" class="sr-only">이메일</label>
        <input type="email" name="userEmail" id="inputEmail" class="form-control" placeholder="이메일" required autofocus>
        
        <label for="userNickName" class="sr-only">닉네임</label>
        <input type="text" name="userNickName" id="userNickName" class="form-control" placeholder="닉네임" required autofocus>
        
        
        <label for="userPw" class="sr-only">Password</label>
        <input type="password" name="userPw" id="userPw" class="form-control" placeholder="패스워드" required>
        
        <select name="birthYear" required>
    <?php
        $thisYear = date('Y', time());

        for($i = $thisYear; $i >= 1930; $i--){
            echo "<option value='{$i}'>{$i}</option>";
        }
    ?>
        </select>년
        <select name="birthMonth" required>
    <?php
        for($i = 1; $i <= 12; $i++){
            echo "<option value='{$i}'>{$i}</option>";
        }
    ?>
        </select>월
        <select name="birthDay" required>
    <?php
        for($i = 1; $i <= 31; $i++){
            echo "<option value='{$i}'>{$i}</option>";
        }
    ?>
        </select>일
        
        
        
        
        <button class="btn btn-lg btn-primary btn-block" type="submit">가입하기</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
    </form>
</body>

</html>
