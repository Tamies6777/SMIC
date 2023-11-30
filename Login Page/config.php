<?php

    if(isset($_POST['submit'])){
        $nome = $_POST['nome'];
        $email = $_POST['email'];
        $senha = $_POST['senha'];
        $telefone = $_POST['telefone'];
        $data_nascimento = $_POST['data_nascimento'];
        $cidade = $_POST['cidade'];
        $cpf = $_POST['cpf'];

    }

    $host = "localhost:9856/";
    $bd = "teste";
    $user = "root";
    $password = "";

    $con = mysqli_connect($host, $user, $password, $bd);

    if(!$con) {
        die("Conexão falhou!! " . mysqli_connect_error());
    }

    $sql = "INSERT INTO clientes(nome, email, senha, telefone, data_nascimento, cidade, cpf) VALUE('$nome', '$email', '$senha', '$telefone', '$data_nascimento', '$cidade', '$cpf')";

    $rs = mysqli_querry($con, $sql);

    if($rs) {
        echo "Cadastro concluído com sucesso!!";
    }
?>