<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Execution Context</title>
</head>

<body>

    <script>
        var MyData = "WEBx86 Infotech"
        function fun() {
            console.log("Inside Fun()");
            gun();
            console.log("End Fun()");
        }
        function gun() {
            console.log("Inside gun");
            sun();
            console.log("Ending Gun");
        }
        function sun() {
            console.log("Inside sun()");
            var x = 10;
            console.log("Ending sun");
        }

        fun();

    </script>
</body>

</html>